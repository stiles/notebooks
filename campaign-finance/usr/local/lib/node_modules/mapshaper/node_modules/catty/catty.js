var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var catty = new Catty();

// regex for comments like:
// /* @requires name1, name2, name3 */
// (Comments may span multiple lines, commas are optional)
var REQUIRES_RXP = /\/\*+\s*@requires?\b([\s,;_0-9A-Za-z.-]+)\s*\*+\/\s*\n?/g;

function Catty(opts) {
  var prepended = "",
      externals = [];
      knownFileIndex = {},   // paths of known js files indexed by basename
      watchedFiles = {},  // SourceFile objects indexed by basename
      jobs = [],
      addedDeps = [];

  opts = _.extend({
    global: false,
    follow: false
  }, opts || {});

  this.internal = { // expose internal functions for unit testing
    parseDeps: parseDeps,
    stripBOM: stripBOM
  };

  // @deps array or comma-separated list of depencencies to insert into the
  // root document(s)
  this.addDeps = function(deps) {
    if (_.isString(deps)) {
      deps = deps.split(',');
    }
    addedDeps = _.union(addedDeps, deps);
    return this;
  };

  // @arg name of an external dependency, which shouldn't be bundled
  this.external = function(arg) {
    externals = _.isArray(arg) ? arg : _.toArray(arguments);
    return this;
  };

  // @js JS string to insert at the beginning of the concatenated files, but
  // inside the module closure (could contain variable definitions)
  this.prepend = function(js) {
    try {
      // eval(js); // catch syntax errors
      prepended = js;
    } catch(e) {
      console.error("[prepend] Invalid JavaScript: ", js);
    }
    return this;
  };

  // @path A directory containing JavaScript source files
  //   (subdirectories are also indexed)
  this.addLibrary = function(path) {
    if (!dirExists(path)) {
      die("Not a valid directory: " + path);
    }
    findSourceFiles(path).forEach(indexFile);
    return this;
  };

  // Compile JS source files
  this.cat = function(src, dest) {
    var job;
    try {
      job = new CattyJob(src, dest);
      if (addedDeps.length > 0) {
        job.addDeps(addedDeps);
      }
    } catch(e) {
      die(e.message);
    }
    job.run();
    jobs.push(job); // save job so it can be run again, if monitoring files
    return this;
  };

  function runJobs() {
    jobs.forEach(function(job) {
      job.run();
    });
  }

  function getNode(key) {
    var node = watchedFiles[key];
    if (!node) {
      throw new Error("Missing dependency: " + key);
    }
    return node;
  }

  function sortNodes(nodes) {
    var startId = 0,
        len = nodes.length,
        sorted = {},
        nodeName, i, startNode, reqId;

    while (startId < len-1) {
      startNode = nodes[startId];
      reqId = -1;
      if (startNode.name() in sorted === false) {
        for (i=startId+1; i<len; i++) {
          nodeName = nodes[i].name();
          if (nodeName in sorted === false && startNode.requiresFile(nodeName)) {
            reqId = i;
          }
        }
      }
      if (reqId > 0) {
        nodes.splice(startId, 1);
        nodes.splice(reqId, 0, startNode);
      } else {
        startId++;
      }
      sorted[startNode.name()] = true;
    }
  }

  // Add file to index of known files;
  // Assumes @path exists.
  //
  function indexFile(path) {
    var name = getFileInfo(path).basename;
    if (!name) {
      die("Invalid path: " + path);
    } else if (name in knownFileIndex === false) {
      knownFileIndex[name] = path;
    } else if (knownFileIndex[name] !== path) {
      console.error("File name collision.");
      console.error("Using:", knownFileIndex[name]);
      console.error("Ignoring:", path);
    }
    return name;
  }

  function SourceFile(path) {
    var info = getFileInfo(path),
        _deps = [],
        _insertedDeps = [],
        _js = "";

    if (!info.is_file || info.ext != '.js') {
      die("Invalid source file: " + path);
    }
    watchedFiles[info.basename] = this;
    if (opts.follow) {
      startMonitoring();
    }
    findDeps();

    this.name = function() { return info.basename; };
    this.getContent = function() { return _js; };
    this.getDeps = function() { return _deps; };

    this.insertDeps = function(deps) {
      _insertedDeps = deps;
      updateDeps(_deps);
    };

    this.requiresFile = function(targName, visited) {
      visited = visited || {};
      visited[this.name()] = true;
      var reqs = this.getDeps();
      if (_.contains(reqs, targName)) {
        return true;
      }

      for (var i=0; i<reqs.length; i++) {
        var reqName = reqs[i];
        if (reqName in visited === false) {
          var reqNode = watchedFiles[reqName];
          if (reqNode.requiresFile(targName, visited)) {
            return true;
          }
        }
      }
      return false;
    };

    function findDeps() {
      var js = fs.readFileSync(path, {encoding:"utf8"});
      js = stripBOM(js);
      // (os x) When editor opens file to write, file may
      // appear to be empty -- ignoring change if len is 0
      var changed = js.length > 0 && js !== _js;
      if (changed) {
        _js = js;
        updateDeps(parseDeps(js));
      }
      return changed;
    }

    function updateDeps(deps) {
      deps = _.union(deps, _insertedDeps);
      deps = _.difference(deps, externals);
      deps.forEach(addDependency);
      _deps = deps;
    }

    function addDependency(key) {
      if (key in knownFileIndex === false) {
        throw new Error("Unknown dependency in " + path + " -- " + key);
      }
      if (key in watchedFiles === false) {
        new SourceFile(knownFileIndex[key]);
      }
    }

    function onChange(err) {
      if (err) {
        console.error(err.message);
      } else {
        console.error("Re-catting -- change in " + path);
        runJobs(); // TODO: only run jobs that use this the changed source file
      }
    }

    function startMonitoring() {
      var timeout = null;
      fs.watch(path, function(evt) {
        if (evt == "change" || evt == "rename") {
          // Use a timeout to make sure file has actually changed
          // (Had problems in os x)
          timeout && clearTimeout(timeout);
          timeout = setTimeout(function() {
            try {
              if (findDeps()) {
                onChange();
              }
            } catch(e) {
              onChange(e);
            }
          }, 150);
        }
      });
    }

  } // SourceFile

  function CattyJob(src, dest) {
    var roots = [];
    var useStdout = !dest || dest == '-' || dest == '/dev/stdout';
    var inFiles;
    if (_.isString(src)) {
      inFiles = [src];
    } else if (_.isArray(src)) {
      inFiles = src;
    } else {
      die("Invalid input file(s): " + src);
    }

    if (opts.follow && useStdout) {
      die("-f option is not compatible with output to stdout");
    }

    roots = inFiles.map(function(ifile) {
      ifile = path.join(ifile); // Update slashes on Windows
      if (ifile == dest) die("Tried to overwrite a source file: " + ifile);
      if (!fileExists(ifile)) die("Source file not found: " + ifile);
      var name = indexFile(ifile);
      return new SourceFile(ifile);
    });

    // return list of all deps reached by list of deps
    function findDeps(newDeps, foundDeps) {
      return newDeps.reduce(function(memo, key) {
        if (memo.indexOf(key) == -1) {
          memo.push(key);
          findDeps(getNode(key).getDeps(), memo);
        }
        return memo;
      }, foundDeps || []);
    }

    function concatenate() {
      var keys = roots.map(function(node) {return node.name();});
      var nodes = findDeps(keys).map(getNode);
      sortNodes(nodes);
      return nodes.map(function(node) { return node.getContent(); }).join('\n\n');
    };

    function stripComments(js) {
      return js.replace(REQUIRES_RXP, '');
    }

    function addClosure(js) {
      return "(function(){\n" + js + "\n}());\n";
    }

    function bundle() {
      var js = "";
      if (prepended) {
        js += prepended + '\n';
      }
      js += concatenate();
      js = stripComments(js);
      if (!opts.global) {
        js = addClosure(js);
      }
      return js;
    }

    this.addDeps = function(deps) {
      roots.forEach(function(node) {node.insertDeps(deps);});
    };

    this.run = function() {
      var js, dirname, err;
      try {
        js = bundle();
      } catch(e) {
        err = e;
      }

      if (_.isFunction(dest)) {
        dest(err, js);
      } else if (err) {
        // Print message, don't exit (let user correct dependency problems
        // when monitoring files).
        console.error(e.message);
      } else if (useStdout) {
        console.log(js);
      } else if (_.isString(dest)) {
        // check that dir (still) exists
        dirname = path.dirname(dest);
        if (!dirExists(dirname)) {
          die("Destination directory not found: " + dirname);
        }
        fs.writeFileSync(dest, js);
        console.error("Wrote " + dest);
      }
    };
  } // CattyJob

} // Catty

function stripBOM(str) {
  if (str && str.charCodeAt(0) === 0xFEFF) {
    str = str.slice(1);
  }
  return str;
}

function parseDeps(js) {
  var fileRxp = /\*?[_0-9a-z](?:[.-]?[_0-9a-z])*/ig,
      deps = [], match, match2;
  while (match = REQUIRES_RXP.exec(js)) {
    while (match2 = fileRxp.exec(match[1])) {
      deps.push(match2[0]);
    }
  }
  return deps;
}

function findSourceFiles(dirPath) {
  var results = walkSync(dirPath);
  return results.filter(function(filePath) {
    return /\.js$/.test(filePath);
  });
}

function dirExists(path) {
  return !!getFileInfo(path).is_dir;
}

function fileExists(path) {
  return !!getFileInfo(path).is_file;
}

function getFileInfo(p) {
  var info = {}, stat;
  try {
    stat = fs.statSync(p);
    info.exists = true;
    info.is_file = stat.isFile();
    info.is_dir = stat.isDirectory();
    info.directory = path.dirname(p);
  } catch(e) {};

  if (info.is_file) {
    info.ext = path.extname(p);
    info.filename = path.basename(p);
    info.basename = info.filename.substr(0, info.filename.length - info.ext.length);
  }
  return info;
}

function walkSync(dir, memo) {
  memo = memo || [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
    var filepath = path.join(dir, file);
    var stat = fs.statSync(filepath);
    if (stat && stat.isDirectory()) {
      walkSync(filepath, memo);
    }
    else {
      memo.push(filepath);
    }
  });
  return memo;
}

function die(msg) {
  if (msg) console.error(msg);
  process.exit(1);
}

module.exports = function(opts) {
  return new Catty(opts); // allow multiple instances with different options
};
_.extend(module.exports, catty);
