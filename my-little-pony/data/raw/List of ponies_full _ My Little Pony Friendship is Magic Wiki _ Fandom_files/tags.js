var e9Manager;
var e9AdSlots;
var e9;
var expo9_ad;

if (e9Manager === undefined || e9Manager.init === false)
 {
   e9Manager = (
     function() 
      {
        var trace = (typeof console !== "undefined" && typeof console.log !== "undefined" && typeof console.log.apply !== "undefined") ?
                                          function() { console.log.apply(console,arguments); }
                                        : function() {} ;

	function getRnd()
	 {
	   var			rnd  = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000,10);

	   return rnd;
	 }

        function isTopAccessible()
         {
	   var		isTopAccessible = false;	 
	   try
	    {
              if (window.top.location.href !== undefined)
                 isTopAccessible = true;
            }
           catch(e) { }
           return isTopAccessible;
         }

	function sfv() 
	 {
	   for (var i =0; i < arguments.length; i++) {
	     var arg = arguments[i];
	     if (arg !== undefined)
	       return arg;
           }
           return undefined;
	 }

        function pfs(arg)
         {
	   if (arg === undefined || arg === "" || arg.indexOf('%') > 0)
              return 0; 
           return Math.ceil(arg.split("px")[0]);
         }

        function getEncodedData(data)
         {
           var isEncoded   = (data && data.toString().indexOf('%7B%') === 0 )? true: false;
           var encodedData = data;

           if(    !isEncoded
               && (typeof data === 'object'))
           {
             encodedData = encodeURIComponent(JSON.stringify(data));
           }

           return encodedData;
         }

	function getStyle(el, prop)
	 {
	   var          computedStyle = attribute = style = 0;
	   try
	    {	 
              if (document.defaultView && document.defaultView.getComputedStyle)
	       {
                 computedStyle = pfs(document.defaultView.getComputedStyle(el, null)[prop]);
               }
	      else if (el.currentStyle)
	       {
                 computedStyle =  pfs(el.currentStyle[prop]);
	       }      
	    }
	   catch(e) {}

	   attribute = pfs(el[prop]); 
	   style = pfs(el.style[prop]);
	   return computedStyle > attribute ? (computedStyle > style ? computedStyle : style) : (attribute > style ? attribute : style);
         }

	function getDeviceType()
	 {
	   var          userAgent = navigator.userAgent.toLowerCase();
	   var          isMobileDevice = (/iphone|ipad|ipod|android|silk|kindle fire/i.test(userAgent));
	   var          device = "unknown";

	   if (isMobileDevice)
            {
	      if (    (    (userAgent.search("android") >= 0) 
			&& (userAgent.search("mobile") >= 0)) 
	           || (userAgent.search("iphone") >= 0)
		   || (userAgent.search("ipod") >= 0) 
                 ) 
               {
		 device = "mobile";
               } 
	      else if (    (    (userAgent.search("android") >= 0) 
			     && (userAgent.search("mobile") == -1))
	                || ( userAgent.search("ipad") >= 0)
			|| ( userAgent.search("silk") >= 0)
			|| ( userAgent.search("kindle fire") >= 0))
               {
	         device = "tablet";             
               }
	    }
	   return device;
	 }

        function getFrameWxH(frame)
         {
	   var		frameWidth = 0; 
	   var		frameHeight = 0;
	   /* Example.
	      Inline css  style = "width:50(px/%)" 
	      Class  frameStyle {width:50(px/%)}
	      Attribute width="300" height="250"
	   */

	   if (frame.tagName.toLowerCase() === "iframe")
	    {
	      frameWidth = getStyle(frame, 'width');
	      frameHeight= getStyle(frame, 'height');
	      
	    }
	   return { width : frameWidth , height : frameHeight };
         }

        function stripParam(adParams,param)
         { 
           var             	rVal = "";
           var             	pVal = "";
	   var 			pIndex = "";
	   var 			adParamsArray = [];

         
	   if (adParams)
	    { 
	      pIndex = adParams.indexOf(param+"=");
	      if (pIndex > -1)
	       {      
	         adParamsArray = adParams.substring(pIndex+param.length+1).split('&');
	         rVal = adParams.substring(0,pIndex-1)
	         rVal +=  "&"+ adParamsArray.slice(1).join('&');
	         pVal = adParamsArray[0];
	       }
	      else
	       {
		 rVal = adParams;
		 pVal = "";
	       }
	    }
	   return { adParams : rVal, param : pVal };
	 }

        function isAdEnclosedInIframe(adWidth,adHeight,frame,overlapRatio)
         { 
	   var                  frameWH = getFrameWxH(frame);
	   var		   	frameWidth  = frameWH.width;
	   var			frameHeight = frameWH.height;

           if ((frameWidth > 0) && (frameHeight > 0))
            {
              return (    (adWidth  <= frameWidth)
                       && (adHeight <= frameHeight)
                       && ((adWidth * adHeight) >= ((overlapRatio/100) * frameWidth * frameHeight)));
            }
           else
              return false;
         }

	function px(t, p, k, v) 
	 {
	   var          	s = (t[p] === undefined) ? "?" : t[p] + "&";
	   t[p] = s + k + "=" + v;
	 }

        function cpx(t, p, k, v) 
	 {
	   if (v !== undefined) 
	      px(t,p,k,v);
	 }

        function cpex(t, p, k, v) 
	 {
	   if (v !== undefined) 
	      px(t,p,k,E(v));
	 }

        function E(s) 
	 {
	   if (typeof encodeURIComponent === "function") 
	      return encodeURIComponent(s);
	   else 
	      return escape(s);
	 }

        function combineArgs(value) 
	 {
	   var             retVal;
	   var             paramArray = value.split(",");

	   for (var i = 0; i < paramArray.length; i++) 
	    {
	      var          param = trim(paramArray[i]);
	      retVal = m(retVal, param, ",");
	    }
	   return retVal;
	 }

        function trim(s) 
	 {
	   if (s !== null)
	      return s.replace(/^\s + /, '').replace(/\s + $ /, '');
	   return null;
	 }

        function m(a,b,c) 
	 {
	   if (a === undefined || a === "")
	      return b;

	   a += c + b;
	   return a;
	 }

        function isMember(item, array) 
	 {
	   for (var i = 0; i < array.length; i++) 
	    {
	      if (array[i] === item)
		 return true;
	    }
	   return false;
	 }

	function inspect(obj)
	 {
	   trace(stringify(obj));
	 }

	function inspectNameObj(name,obj)
	 {
	   trace(name + " = " + stringify(obj));
	 }

	function canServePops()
	 {
	   document.cookie='tf0=y0; path=/;';
	   if (document.cookie.indexOf('f0=y0') >= 0 && document.cookie.indexOf('f1=y1') < 0) 
	      return true;

	   return false;
	 }

	function detectFlash()
	 {
	   var             	flashinstalled = 0;
	   var             	flashversion = 0;
	   var		   	x;

	   if (navigator.plugins && navigator.plugins.length) 
	    {
	      x = navigator.plugins["Shockwave Flash"];
	      if (x) 
	       {
		 flashinstalled = 2;
		 if (x.description) 
		  {
		    x.description.toString().replace(/[0-9]+/, 
		       function(u) 
			{
			  flashversion = parseInt(u, 10);
			  return u;
			}
		    );
		  }
	       } 
	      else 
	       {
		 flashinstalled = 1;
	       }

	      if (navigator.plugins["Shockwave Flash 2.0"]) 
	       {
		 flashinstalled = 2;
		 flashversion = 2;
	       }
	    } 
	   else if (navigator.mimeTypes && navigator.mimeTypes.length) 
	    {
	      x = navigator.mimeTypes['application/x-shockwave-flash'];
	      flashinstalled = (x && x.enabledPlugin) ? 2 : 1;
	    }
	   else 
	    {
	      for (var i = 9; i > 0; i--) 
	       {
		 flashversion = 0;
		 try 
		  {
		    var        	flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
		    flashversion = i;
		    return i;
		  } 
		 catch(e) {}
	       }
	    }
	   return flashversion;
	 }

	function hash(name, data, hashVal) 
	 {
	   var			n = 0;

	   data = getData(name,data);
	   if (data) 
	    {
	      for (var i=0; i < data.length; i++) 
		 n = ((n * 997) + data.charCodeAt(i)) & 0x7fffffff;
	    }

	   hashVal += n;
	   return hashVal;
	 }

	function getData(name,data) 
	 {
	   if (name === "appVersion" || name === 'userAgent') 
	    {
	      if (data.indexOf("Trident/4.0") > 0) 
		 data = data.replace(/MSIE \d+.0/,'MSIE 8.0');
	      if (data.indexOf("Trident/5.0") > 0) 
		 data = data.replace(/MSIE \d+.0/,'MSIE 9.0');
	    } 
	   else 
	    {
	      if (    (name === 'constructor')
		   || (name === 'plugins')
		   || (name === undefined)) 
		 data = null;
	    }
	   return data;
	 }

        function makeTagHash()
         { 
           var             tagHash = 0;

           for (var pn in navigator)
            { 
              var          navElem = navigator[pn];
	      var	   navType = objectType(navElem);

              if (navType === 'string')
                 tagHash = hash(pn,'' + navElem, tagHash);
              else if (navType === 'array')
               { 
                 for (var i=0;i<navElem.length;i++)
                  { 
                    var p = navElem[i];
                    tagHash = hash(i,p.name + p.description, tagHash);
                  }
               }
             } 
           return tagHash;
         }

        function objectType(o)
         {
           try
            {
              switch (typeof(o))
               {
                 case 'object':
                       if (o === null) return 'null';
                       if (o.constructor === Array) return 'array';
                       if (o.constructor === Date) return 'date';
                       return 'object';
                 case 'function':
                       if (o.constructor === RegExp) return 'regex';
                       return 'function';
                 default:
                       return typeof(o);
               }
            }
           catch(e)
            {
              return 'undefined';
            }
         }

       function stringify(obj) 
	{

	  function stringifyValue(v)
	   {
	     switch (objectType(v))
	      {
		case 'number': 
		case 'null': 
		case 'boolean':
		      return String(v);

		case 'string':
		      return '"' + v + '"';

		case 'object':
		      return stringifyObject(v);

		default:
		      return undefined;
	      }
	   }

	  function stringifyObject(object)
	   {
	     var 	values = [];
	     var	nameReg = /^\w+$/;

	     for (var name in object)
	      {
		var valStr = stringifyValue(object[name]);
		if (valStr !== undefined)
		 {
		   if (nameReg.test(name) === false)
		      name = '"' + name + '"';
		   values.push(name + ':' + valStr);
		 }
	      }
	     return "{" + String(values) + "}";
	   }

	  return (stringifyValue(obj));
	}

	var validFields = 
	 [
	  'site',
	  'adSpace',
	  'tagType',
	  'center',
	  'busted',
	  'noAd',
	  'contentType',
	  'adType',
	  'pf',
	  'rsize',
	  'pop',
	  'clickTrackURL',
	  'clickURL',
	  'z',
	  'y',
	  'g',
	  'c',
	  'debug',
	  'adApp',
	  'mediaType',
	  'mediaDataID',
	  'clientID',
	  'playTrackURL',
	  'imgURL',
          'flushMedia',
	  'async',
 	  'noAdChoice',
	  'env',
	  'json',
	  'binSDKVersion',
	  'jsSDKVersion',
	  'sdkPartners',
	  'muc',
	  'mraid',
	  'callback',
	  'integrationType',
	  'mockApp',
	  'pUrl',
	  'turnOffPageSafety',
	  'eid',
          'ecvalue',
          'drm',
          'gdpr',
          'consent',
          'dealId',
          'productId',
          'bidderparams',
          'tagparams',
          'ivtCheck'
         ];

	var validCombineFields =
         [
	  'size',
	  'blockingCategories',
	  'addBlockingCategories',
	  'blockingDomains',
	  'addBlockingDomains',
	  'blockingProductAttributes',
	  'addBlockingProductAttributes'
	 ];

	function buildAdSpec(e9)
	 { 
	   var 	adSpec = {};
           var 	p = e9Page;

	   for (var i=0; i<validFields.length; i++)
	    {
	      var		fieldName = validFields[i];
	      if (e9[fieldName] !== undefined) 
		adSpec[fieldName] = e9[fieldName];
	    }

	   for (var i=0; i<validCombineFields.length; i++)
	    {
	      var		fieldName = validCombineFields[i];
	      if (e9[fieldName] !== undefined)
	       {
		 adSpec[fieldName] = combineArgs(e9[fieldName]);
            	 if (fieldName === 'size')
             	    adSpec['tagSize'] =  combineArgs(e9[fieldName]);
	       }
	    }

	   for (var k in e9) 
	    {
	      var		v = e9[k];

	      if (typeof v !== 'function') 
	       {
		 if (k.substr(0, 5) === 'param') 
		    adSpec['p9_' + k] = v;

		 if (k.substr(0, 3) === 'c9_') 
		    adSpec[k] = v;
	       }
	    }

	   if (e9.popOnly === 1)
	    {
	      adSpec.tagType = "iframe";
	      adSpec.size = "1x1";
	      adSpec.noAd = 1;
	      adSpec.pop = 'only';
	    }

	   if (e9.toolbar === 1)
            {
              var toolbar = e9Page.getToolBarOptions();

              adSpec.tagType = "toolbar";
	      adSpec.env = "toolbar";
              adSpec.adApp = 1;
              adSpec.mediaType     = toolbar.mediaType     || 0;
              adSpec.mediaDataID   = toolbar.mediaDataID   || 0;
              adSpec.clientID      = toolbar.clientID      || 0;
              adSpec.clickTrackURL = toolbar.clickTrackURL || "https://" + p.host + "/hd.click/random/";
              adSpec.noAdChoice = 1;	      
            }

            if (e9.snackbar === true)
             {
	       var               winContext = window;
               var               deviceType = getDeviceType();

	       if (isTopAccessible())
	          winContext = top;
               else
                  e9.snackbar = false;
		  
  	       if (    winContext.hasAlreadyServedSnackBar === "loaded" 
                    || deviceType == "unknown")
	        {
 	          e9.snackbar = false;
	        }

   	       if (e9.size === undefined)
 		  adSpec.size = p.snackBarSizeMap[deviceType];

	       winContext.hasAlreadyServedSnackBar = "loaded";
               adSpec.snackbar = e9.snackbar;
             }

	   if (e9.env === "inapp")
	      adSpec.tagType = "inapp";

           if (    (p.enabledAdChoices === undefined) 
	        || (p.enabledAdChoices === false))
              adSpec.noAdChoice = 1;

	   return adSpec;
	 }

        var manager = 
	 {
           fetchAds:
	     function() 
              {
                e9Page.fetchAds();
              },

           inspect:
	     function() 
              {
	        inspectNameObj("e9Page",e9Page);
              },

           setSite:
	     function(site,adSpace) 
              {
                e9Page.site = site;
                e9Page.adSpace = adSpace;
              },

           setTKey:
	     function(tkey) 
              {
                e9Page.tKey = tkey;
              },

           setAdResponse:
	     function(adResponse) 
              {
                e9Manager.setMultiAdResponse(adResponse);
              },

           setMultiAdResponse:
	     function(adResponse) 
              {
                if (typeof inMultiAsyncFrame !== "undefined")
	   	   window.parent.e9Manager = manager;

                e9Page.adResponse = adResponse;                
                e9Page.processWaitingSlotsQueue();                
              },

	   setSingleAdResponse:
	     function(adResponse) 
              {
                e9Page.adResponse = adResponse;
                e9Page.displaySingleAd("defAdSlot");
              },

           displayAdFromE9:
	     function(e9) 
              {
                e9Page.displayAdFromE9(e9);
              },

           displayAdSlot:
	     function(slotName) 
              {
                e9Page.displayMultiAd(slotName);
              },
 
	   collapseAsyncFrame:
	     function ()
	      {
	   	if (    isTopAccessible() === true 
 	             && typeof(self.frameElement) !== "undefined" 
		     && self.frameElement !== null 
	             && typeof inSingleAsyncFrame !== "undefined" )
	         {
                   self.frameElement.style.display ="none";
                   self.frameElement.style.position ="absolute";
                   self.frameElement.style.top ="-15000px";
                   self.frameElement.style.left ="-15000px";              
                 }
              }
         };

	e9Manager = manager;

        var e9Page = 
	 {
	   version: "1.29",
	   displayAdVersion: "0.9",
	   adNum:0,
	   adResponse:undefined,
	   displayFlags: {},
	   host: "s.tribalfusion.com",
  	   busterframe: (e9 && e9.busterframe) || "",
  	   busterDomain: "",
	   site: "openxusbidder",
	   adSpace: "openxus",
	   tagKey: "2171363937",
	   enabledRichAdInIframe: (typeof e9 !== "undefined" && e9.env === 'inapp' ) ? false : true,
	   enabledAdChoices: true,
	   enabledSnackBarInIframe: true,
	   enablePostRequest: true,
	   tagOptions: {"adParams":{"inSingleAsyncFrame":true, "isDRMEnabled":true}, "allowTurnOffPageSafetyFromTags":true, "snackBar":{"serveSnackBar":false, "snackBarClose":false}, "isDebugActualTagSize":true, "allowPageUrlFromTags":true},
           
	   isIE: (navigator.appVersion.indexOf("MSIE") !== -1),
	   isIEOrOpera : (navigator.appVersion.indexOf("MSIE") !== -1) || (navigator.userAgent.indexOf("Opera") !== -1),
	   isMobileDevice: (/iphone|ipad|ipod|android|silk|kindle fire/i.test(navigator.userAgent.toLowerCase())),
	   isIOS : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())),
           snackBarSizeMap : {mobile : "320x50", tablet: "768x90","unknown":"1x1"},

	   init: 
             function()
	      {
	        var             p = this;

		p.setPageData();
		p.waitingSlotsQueue = (typeof inMultiAsyncFrame !== "undefined") ? parent.window.e9WaitingSlotsQueue : []; 
		
		p.center = 1;
		p.async = true;
		p.env = "display";
		p.pageId = p.pageData.pageId;

                p.setLoaderVersion();

		p.setPageParams();
		p.fetchedScripts = {};
		p.displayAdURL ="https://"+p.host+"/displayAd.js?dver=" + p.displayAdVersion + "&th=" + p.tagHash;

		p.includeJScript(p.displayAdURL);
	      },

           setLoaderVersion:
             function()
              {
	        var             p = this;

                if (typeof e9Loader !== "undefined" )
                   p.loaderVersion = e9Loader.loaderVersion;
                else 
                  {
                    try
                     {
                       if (typeof parent.e9Loader !== "undefined" )
                          p.loaderVersion = parent.e9Loader.loaderVersion;
                     }
		    catch(e) {}
                 }
              },
 
	   setPageParams:
	     function() 
	      {
	        var             p = this;
 		p.pageParams = undefined;

		p.flashVer = detectFlash();
		p.tagHash  = makeTagHash();

		px(p,'pageParams','flashVer',p.flashVer);
		px(p,'pageParams','ver',p.version);
		px(p,'pageParams','th',p.tagHash);
		px(p,'pageParams','tagKey',p.tagKey);

		cpx(p,'pageParams','loaderVer',p.loaderVersion);
	      },

	   setPageData:
             function()
              {
	        var             p = this;

		try 
		 {
		   if (window.top.e9PageData !== undefined)
		      p.pageData = window.top.e9PageData 
		 }
		catch (e) {}

		if (p.pageData === undefined)
		 {
		   p.pageData = 
		    {
		      pageId: getRnd(),
		      adNum: 0
		    }
		   try 
		    {
		      window.top.e9PageData = p.pageData;
		    }
		   catch (e) {}
                 }
              },

	   getAdNum:
             function()
              {
	        var             p = this;

		p.pageData.adNum++;
		return p.pageData.adNum;
              },

           firePixel:
             function(url)
              {
	        var		image = document.createElement('img');
		image.src = url;
              },

	   getToolBarOptions:
	     function()
	      {
		var		p = this;
		if (typeof p.tagOptions.toolbar !== "undefined")
		 {
		   var 		toolbarOptions = p.tagOptions.toolbar;
		   return {
			    mediaType     :  toolbarOptions.mediaType,
			    mediaDataID   :  toolbarOptions.mediaDataID,
			    clientID      :  toolbarOptions.clientID,
			    clickTrackURL :  toolbarOptions.clickTrackURL
		          };
		 }
                return {};
	      },
	   

	   includeJScript: 
             function(f) 
	      {
	        var             p = this;

		if (p.fetchedScripts[f] === undefined) 
		 {
		   document.writeln('<scr' + 'ipt type="text/javascript" src="' + f + '"><\/sc' + 'ript>');
		   p.fetchedScripts[f] = true;
		 }
	      },

	   displayAdFromE9:
	     function(e9) 
	      {
	        var             p = this;
		var		adSpec = p.pageBuildAdSpec(e9);

		p.displayAdFromAdSpec(adSpec);
	      },

	   displayAdFromAdSpec:
	     function(adSpec) 
	      {
	        var             p = this;
	        var             e9Ad = p.makeAd(adSpec);

		e9Ad.displayAd();
	      },

	   fetchAds:
	     function() 
	      {
	        var             p = this;

		if (e9AdSlots !== undefined)
		 {
		   var		e9Ad = p.makeAd({});
		   
		   e9Ad.fetchAds();
		 }
	      },

           pageBuildAdSpec:
	     function(e9) 
	      {
	        var             p = this;
		var		adSpec = buildAdSpec(e9);

		if (adSpec.site === p.site)
		   delete adSpec.site;

		if (adSpec.adSpace === p.adSpace)
		   delete adSpec.adSpace;

		return adSpec;
	      },

	   canServeSnackBarOnThePage:
	     function(adSpec)
	      {
                var             p = this;
                        
		 if (    (adSpec.size != "1x1")       /* do not piggyback snackbar on data/popup ads*/
                      && (adSpec.snackbar !== true)   /* do not piggyback snackbar on e9.snackbar=true */
                      && (isTopAccessible())          /* same domain iframe or on the page*/
                      && (p.isMobileDevice === true)
		      && (    (p.isIOS === false) 
		           || (! /OS [1-3](.*) like Mac OS X/i.test(navigator.userAgent))  /* iOS >= 4.0 supported */
                         ) 
		      && (    (top === self)
                           || (p.enabledSnackBarInIframe === true))
		      && (window.top.hasAlreadyServedSnackBar === undefined)
		      && (    (typeof p.tagOptions.snackBar === "undefined")
                           || (    (    p.tagOptions.snackBar.serveSnackBar  === undefined
                                     || p.tagOptions.snackBar.serveSnackBar === true)
                                && (    p.tagOptions.snackBar.mobileOptimizedSite === undefined
                                     || p.tagOptions.snackBar.mobileOptimizedSite  === false))))
                  {
                    return true;
                  }

                return false;
              },

	   drawSnackBarTags:
	     function()
	      {
		var     p = this;
		var	deviceName = getDeviceType();
		var	snackBannerSize = p.snackBarSizeMap[deviceName];
		var	snackBarClose = true;
		var	content;

		window.top.hasAlreadyServedSnackBar = "loading";

                if (   p.tagOptions.snackBar != undefined
		    && p.tagOptions.snackBar.snackBarClose != undefined )
                 {
		   snackBarClose = p.tagOptions.snackBar.snackBarClose;
                 }

                content = '<scr' + 'ipt type="text/javascript"> ' +
			      'var e9 = new Object(); ' +
			          'e9.snackbar=true; '  +
                                  'e9.snackbarclose='   + snackBarClose + ';' +
				  'e9.size="' + snackBannerSize + '";' +
			   '<\/sc' + 'ript>' +
			  '<scr' + 'ipt type="text/javascript" src="' + p.getRealTagsScript({}) + '"><\/sc' + 'ript>';

		if (top === self)
                 {
	           document.write(content);
                 }
                else
                 {
          	   var	        iframeID = p.getFrameID(top);
                   var	        width = snackBannerSize.split("x")[0];
                   var	        height = snackBannerSize.split("x")[1];
                   var	        iframe = p.createSameDomainIframeNode(iframeID,width,height);

		   content =     '<scr' + 'ipt type="text/javascript" > var inSingleAsyncFrame = true;<\/sc' + 'ript>'
                              +  content;

                   top.document.body.appendChild(iframe);
                   p.writeContentInIframe(top,iframeID,content);
                 }
              },

           getRealTagsScript: 
             function(e9Obj) 
	      {
	        var 	t =this; 
		return "https://" +  "s.tribalfusion.com/real/" + t.getCurrentTagsScript(e9Obj);            
	      },

           getCurrentTagsScript: 
             function (e9Obj) 
               {
                 var		scriptsOnthePage = document.getElementsByTagName('script');
                 var		numScripts = scriptsOnthePage.length;
                 var		tagsScriptName = "/tags.js";
		 var        	tagsScriptLen = tagsScriptName.length;
		 var        	asyncTagsScriptName = "asyncTags.js";
		 var        	asyncTagsScriptLen = asyncTagsScriptName.length;

		 for (var i = numScripts - 1; i >= 0; i--)
		  {
		    var     	scriptSrc = scriptsOnthePage[i].src;
		    var     	tagsScriptSrc;

		    if (scriptSrc.substr(scriptSrc.length - asyncTagsScriptLen) === asyncTagsScriptName) 
	             {
	               if (    (e9Obj.site !== undefined) 
                            && (e9Obj.adSpace !== undefined))
		          return "/tags/" + e9Obj.site + "/" + e9Obj.adSpace + "/tags.js";
                       return "";
	             } 
                    else if (scriptSrc.substr(scriptSrc.length - tagsScriptLen) === tagsScriptName) 
	             {
                       if (scriptSrc.indexOf("/real/") >= 0)
                          tagsScriptSrc = scriptSrc.split("/").slice(4).join("/")
                       else
			  tagsScriptSrc = scriptSrc.split("/").slice(3).join("/")

		       return tagsScriptSrc;
                     }
	          }
	          return "";
               },	 		   

	   
	   pageBuildAdSlotsFromE9Slots:
	     function(e9AdSlots)
	      {
	        var             p = this;
		var		adSlots = {};
		var		firstSlot = undefined;

		for (var slotName in e9AdSlots) 
		 {
		   var e9 = e9AdSlots[slotName];
		   if (    (e9.popOnly !== 1)
			|| (canServePops() === true))
		      adSlots[slotName] = p.pageBuildAdSpec(e9);

		   if (firstSlot === undefined)
		      firstSlot = adSlots[slotName];
		 }
		for (var key in firstSlot) 
		 {
		   var isPresentInAll = true;
		   var sameVal = firstSlot[key];

		   for (var slotName in adSlots) 
		    { 
		      var slot = adSlots[slotName];

		      if (objectType(slot) !== 'object' || slot === firstSlot) 
			 continue;

		      if (slot[key] !== sameVal)
		       {
			 isPresentInAll = false;
			 break;
		       }
		    }
			
		   if (    (isPresentInAll) 
			&& (    ((key === 'site') && (sameVal !== p.site))
		             || ((key === 'adSpace') && (sameVal !== p.adSpace))
		             || (key === 'size')
                           ))
                      isPresentInAll = false;

		   if (isPresentInAll) 
		    {
		      adSlots[key] = sameVal;
		      for (var slotName in adSlots)
		       {
		         var slot = adSlots[slotName];
			 if (objectType(slot) === 'object')
			    delete slot[key];
		       }
		    }
		 }
		return adSlots;
	      },

	   makeAd:
	     function (adSpec)
	      {
		var e9Ad = 
		 {
		   init:
		     function()
		      {
			var          	t = this;
			var		p = e9Page;

			t.page	     = p;
			t.pageParams = p.pageParams;
			t.adParams   =   "";
			t.postParams =	 "";

			t.center = (adSpec.center !== undefined) ? adSpec.center
				    		      		 : p.center;
		      },

		   setTagType:
		     function() 
		      {
			var             t = this;

			switch (adSpec.tagType) 
			 {
			   case "img":
				t.cmd = "i.ad";
				t.tagType = "img";
				break;
			   case "iframe":
				t.cmd =  "f.ad";
				t.tagType = "iframe";
				break;
			   case "toolbar":
				t.cmd =  "j.ad";
				t.tagType = "toolbar";
				break;
			   case "inapp":
				t.cmd =  "j.inapp";
				t.tagType = "inapp";
				break;	
			   default:
				t.cmd = "j.ad";
				t.tagType = "jscript";
				break;
			 }
		      },

		   setAdReqParams:    
		     function() 
		      {
			var             t = this;
			var             p = t.page;
			var		env = adSpec.env || p.env; 

			cpx(t,'adParams','site', adSpec.site || p.site);
			cpx(t,'adParams','adSpace', adSpec.adSpace || p.adSpace);

			px(t,'adParams','center', t.center);
			
			if (adSpec.snackbar === true)
                         {
			   px(t,'adParams','snackbar',1);
			 }

			if (env === "display" || env === "toolbar")
                         {
                           if (    (typeof inSingleAsyncFrame !== "undefined")
			        || (    (p.tagOptions.adParams) 
				     && (p.tagOptions.adParams.inSingleAsyncFrame === true) 
				     && (window !== window.top) ))
			    {	
			      px(t,'adParams','json', 1);
			      px(t,'adParams','callback', "e9Manager.setSingleAdResponse");
                            }
			 } 
			else if (env === 'inapp')
			 {	
			   px(t,'adParams','callback', adSpec.callback || "parent.Highlevel.loadAd");
			   cpx(t,'postParams','muc', adSpec.muc);			 
                           cpx(t,'adParams','mraid', adSpec.mraid);
                           cpx(t,'adParams','binSDKVersion', adSpec.binSDKVersion);
			   cpx(t,'adParams','jsSDKVersion', adSpec.jsSDKVersion);
			   cpx(t,'adParams','sdkPartners', adSpec.sdkPartners);
			   cpx(t,'adParams','integrationType', adSpec.integrationType);	
			 }

			cpx(t,'adParams','pop', adSpec.pop);
			cpx(t,'adParams','noAd', adSpec.noAd);
			cpx(t,'adParams','ct', adSpec.contentType);
			cpx(t,'adParams','at', adSpec.adType);
			cpx(t,'adParams','pf', adSpec.pf);
			cpx(t,'adParams','noAdChoice', adSpec.noAdChoice);

			cpx(t,'adParams','size', t.filterValidSizesAndSetSizeFrame());

			cpex(t,'adParams','clickTrackURL', adSpec.clickTrackURL);
			cpex(t,'adParams','playTrackURL', adSpec.playTrackURL);

		        cpx(t,'adParams','adApp', adSpec.adApp);
		        cpx(t,'adParams','mockApp', adSpec.mockApp);
                        cpx(t,'adParams','mediaType', adSpec.mediaType);
			cpx(t,'adParams','mediaDataID', adSpec.mediaDataID);
			cpx(t,'adParams','clientID', adSpec.clientID);
			cpx(t,'adParams','env', env);
			cpx(t,'adParams','clickURL', adSpec.clickURL);
			cpx(t,'adParams','imgURL', adSpec.imgURL);
			cpx(t,'adParams','flushMedia', adSpec.flushMedia);
                        cpx(t,'adParams','eid', adSpec.eid);
			cpx(t,'adParams','ecvalue', adSpec.ecvalue);
			cpx(t,'adParams','gdpr', adSpec.gdpr);
			cpx(t,'adParams','consent', adSpec.consent);
			cpx(t,'adParams','dealId', adSpec.dealId);
			cpx(t,'adParams','productId', adSpec.productId);
			
			cpx(t,'adParams','bidderparams', getEncodedData(adSpec.bidderparams));
			cpx(t,'adParams','tagparams', getEncodedData(adSpec.tagparams));
			cpx(t,'adParams','ivtCheck', adSpec.ivtCheck);
		      },

		   copyFixedBehaviors:
		     function() 
		      {
			var             t = this;

			cpx(t,'adParams','blockingCategories',          adSpec.blockingCategories);
			cpx(t,'adParams','addBlockingCategories',       adSpec.addBlockingCategories);
			cpx(t,'adParams','blockingDomains',             adSpec.blockingDomains);
			cpx(t,'adParams','addBlockingDomains',          adSpec.addBlockingDomains);
			cpx(t,'adParams','blockingProductAttributes',   adSpec.blockingProductAttributes);
			cpx(t,'adParams','addBlockingProductAttributes',adSpec.addBlockingProductAttributes);

			cpx(t,'adParams','z', adSpec.z);
			cpx(t,'adParams','y', adSpec.y);
			cpx(t,'adParams','g', adSpec.g);
			cpx(t,'adParams','c', adSpec.c);
		      },

		   copyPubParams:
		     function() 
		      {
			var             t = this;

			for (var k in adSpec) 
			 {
			   var		v = adSpec[k];

			   if (typeof v !== 'function') 
			    {
			      if (k.substr(0, 8) === 'p9_param') 
				 cpex(t,'adParams',k,v);

			      if (k.substr(0, 3) === 'c9_') 
				 cpex(t,'adParams',k,v);
			    }
			 }
		      },


		   validSizes:    [ "468x60",  "234x60",   "120x240",  "120x90",
				    "120x60",  "88x31",    "392x72",   "125x125",
				    "230x33",  "120x600",  "160x600",  "160x160",
				    "728x90",  "336x280",  "1x1",      "300x250",
				    "300x600", "425x600",  "180x150",  "0x0",
                                    "970x250", "1024x768", "320x50",   "768x66",
                                    "1024x66", "300x50",   "1024x90",  "768x60",
                                    "768x90" ],

                   filterSizeToFrameWxH:
		     function(size,frame)
                      { 
                        var             t = this;
                        var             sizeArray,sz,warray,w,h,retVal = "";
	                var		bfw = 0, bfh = 0;
			var             frameWH = getFrameWxH(frame);
                        var		frameWidth  = frameWH.width;
                        var		frameHeight = frameWH.height;

           		if (    (frameWidth > 0) 
			     && (frameHeight > 0) 
                             && (adSpec.snackbar !== true))
                         {
                           sizeArray = size.split(",");
                           for (var i=0; i<sizeArray.length; i++)
                            { 
                              sz = trim(sizeArray[i]);
                              warray = sz.split("x");
                              w = warray[0] - 0;
                              h = warray[1] - 0;

                              if (    (w <= frameWidth)
			           && (h <= frameHeight))
                               {
			         retVal = m(retVal,w+"x"+h,",");

			         if (w > bfw)
                                    bfw = w;
			         if (h > bfh)
			   	    bfh = h;
			       }
                            }
                         }
                        else
                         {
                           retVal = size;
                         }

		        return {size:retVal, fw:bfw, fh:bfh};
                      },

		   filterValidSizesAndSetSizeFrame:
		     function() 
		      {
			var             t = this;
			var		size = adSpec.size;
			var		sizeArray,sz,warray,retVal;
			var             p = t.page;

			t.fw = t.fh = 0;

			if (size === undefined || size === "")
			   size = "468x60";

			sizeArray = size.split(",");

			if (t.tagType === "img")
			 {
			   sz = sizeArray[0];
			   warray = sz.split("x");
			   t.fw = warray[0] - 0;
			   t.fh = warray[1] - 0;
			   return sizeArray[0];
			 }

			for (var i=0; i<sizeArray.length; i++)
			 {
			   var sz = trim(sizeArray[i]);

			   if (isMember(sz,t.validSizes)) 
			    {
			      retVal = m(retVal,sz,",");
			      if (t.tagType === "iframe" || t.tagType === "jscript" || t.tagType == "inapp")
			       {
				 warray = sz.split("x");
				 var w = warray[0] - 0;
				 var h = warray[1] - 0;
				 if (w > t.fw)
				    t.fw = w;
				 if (h > t.fh) 
				    t.fh = h;
			       }
			    }
			 }
			if (adSpec.rsize !== undefined)
			 {
			   var 		sizeArray = adSpec.rsize.split('x');
			   if (sizeArray.length === 2)
			    {
			      t.fw = sizeArray[0];
			      t.fh = sizeArray[1];
			    }
			 }
			return retVal;
		      },

		   setURLs:
		     function(isForFetchAds) 
		      {
			var             t = this;
			var		p = t.page;
			var             frameLevel;
			var		isBustable;
			var		frameSrc;
			var		isActualSrc = true;
			var		ret = stripParam(t.adParams,"size");
			
			isBustable = true;
			if (    (adSpec.busted === 1)
			     || (trim(p.busterframe) === "") 
			     || (isForFetchAds))
			   isBustable = false;

			if (	(    (p.tagOptions.allowTurnOffPageSafetyFromTags === true && adSpec.turnOffPageSafety === true) 
                  	      	  || (p.tagOptions.turnOffPageSafety === true)
			    	)
			     && (trim(p.busterframe) === ""))	
                         {
			    frameLevel = (window.top.location === document.location)
                                          ? 0 
				          :1;	                        
                         }
                        else
                         {
			   frameLevel = (window.top.location === document.location)
				          ? 0
				          : ((window.parent === window.top)
					     ? 1
					     : 2);
                         }

                        /* multi call when requested in iframe should 
                           not go in the code for frame busting*/

                        if (    (typeof inMultiAsyncFrame !== "undefined")
			     || (adSpec.env === "inapp"))
                           frameLevel = 0;
			
			if (    (p.tagOptions.adParams) 
			     && (p.tagOptions.adParams.frameLevel))
                         {
			   frameLevel = p.tagOptions.adParams.frameLevel || 0;
			 }

			if (adSpec.busted === 1)
			 {
			   try 
			    {
			      if (p.busterDomain !== "")
				 document.domain = p.busterDomain;
			    } 
			   catch(e) {}
			 }

			try 
			 {
			   t.pageURL = window.top.location.href;
			   if (t.pageURL === undefined)  /*FD1, FDN */
			    {
			      if (isBustable === true)
				 t.tagType = "buster";
			      else 
				 throw("Error");
			    } 
                           else
                            {
		              if (p.enabledRichAdInIframe === true)
                               {
				 if (frameLevel === 2) /*FSN */
				  {
			            try
				     {
				       frameSrc = window.frameElement.src;
				       if (    frameSrc === "" 
				            || frameSrc === null 
					    || frameSrc === undefined  
					    || frameSrc.toLowerCase().replace(/\s/g, "").indexOf('javascript:') === 0
					    || frameSrc.toLowerCase().replace(/\s/g, "").indexOf('about:blank') === 0 )
				        {
					  isActualSrc = false;
					}     
				     }				     
				    catch(exception){}

				    if (!isActualSrc)
				     {
				       frameLevel = 1;
				     }
				    else if (t.bustTopIframe() === true)
				     {
				       return false;
				     }
				    else
				     {
				       adSpec.tagSize = ret.param;
				     }
				  }

				 if (frameLevel === 1) /*FS1 */
				  {
			            var		sendBusted = true;
				    var		currFrame = window.frameElement;
                                    var         filterObj;

                                    t.adParams = ret.adParams;
                                    filterObj = t.filterSizeToFrameWxH(ret.param,currFrame);
                                    adSpec.size = filterObj.size;
                                    var requestSize = t.filterValidSizesAndSetSizeFrame();
                                    cpx(t,'adParams','size', requestSize);
                                    ret.param = requestSize;

				    if (adSpec.busted === undefined) 
                                     {
				       if (isAdEnclosedInIframe(t.fw,t.fh,currFrame,70) === false)
				          sendBusted = false;
	                             }

				    if (sendBusted)
				       px(t,"adParams","busted",1);
				  }
                               }

			      if (frameLevel === 2)
			         frameLevel = 1;

                              /* We don't serve PointRoll/AdFloating(EyeBlaster)/AdExpandable in iframes
                               * So, for now frameLevel can be set to 0 in case of same domain nested iframes
  			       * Later we can add cBuyReqFlags_IFrameBusted flag in mediaType.c for the above mediaTypes
                               */

			      if (typeof inSingleAsyncFrame !== "undefined" || typeof inMultiAsyncFrame !== "undefined")
			         frameLevel = 0;
                            }
                         }
		        catch (exception) 
			 {
			   /*FD1, FDN */
			   if (isBustable === true)
			    {                
			      t.tagType = "buster";
                  	      if (    (p.tagOptions.adParams)
			           && (p.tagOptions.adParams.isDRMEnabled))
			       {
                     	         cpx(t,'adParams','drmParam', adSpec.drm || p.tagOptions.adParams.drm);                     
                    	       }  
                            }
			   else
			    {
			      t.pageURL = document.referrer;
			    }
			 }
			if (p.tagOptions.allowPageUrlFromTags === true && adSpec.pUrl) 
			 {
			   t.pageURL = adSpec.pUrl; 
			 }
			if (t.tagType !== "buster")
			 {
			   t.refURL = (t.pageURL !== document.referrer) ? document.referrer : undefined;

			   if (t.pageURL) 
			    {
			      t.pageURL = E(t.pageURL);
			      px(t,'adParams',"url", t.pageURL.substring(0, 512));
			    }

			   if (t.refURL) 
			    {
			      t.refURL = E(t.refURL);
			      px(t,'adParams',"rurl", t.refURL.substring(0, 512));
			    }
			  
			   px(t,'adParams',"f", frameLevel);
			   px(t,'adParams','p',p.pageId);
			   cpx(t,'adParams','tKey',p.tKey);
			   if (isForFetchAds === false) 
			    {
			      px(t,'adParams','a',p.getAdNum());
			      t.adContainerId = "richmedia_"+p.getAdNum(); 
			      px(t,'adParams','adContainerId', t.adContainerId);			         
			      if (    (    (adSpec.tagSize == undefined) 
				        || (adSpec.tagSize !== ret.param) 
					|| (t.adParams.indexOf('size') === -1))				  
				   && (p.tagOptions.isDebugActualTagSize === true)
				 )
			       {
				  var custom2 = 'custom2=reqsize:'+ret.param+';tagsize:'+ adSpec.tagSize;
				  var ua = escape(escape(navigator.userAgent));
				  var custom3 = '&custom3='+(ua.length > 120 ? ua.substring(0,120) : ua);
				  var custom4 = ua.length > 120 ? ('&custom4='+ua.substring(120)) : "";
				  var custom2 = '&custom2=reqsize:'+ret.param+';tagsize:'+ adSpec.tagSize;
				  var pixelUrl = "https://" + p.host +'/insights/impression?custom1=TRI&event=DefSize'+custom2+custom3+custom4;
				  p.firePixel(pixelUrl);
			        }
			    }  
			 }
                        return true;
		      },

		   displayAd:    
		     function() 
		      {
			var             t = this;
                        var             p = t.page;

			t.setTagType();
			if (adSpec.busted === undefined)
			 {
			   t.setAdReqParams();
			   t.copyFixedBehaviors();
			   t.copyPubParams();
                         }
			else
			 {
			   var fragmentIndex = document.URL.indexOf('#');

			   if (fragmentIndex !== -1) 
			    {
			      t.cmd = "j.ad"; 
			      t.pageParams = "";
			      t.adParams = document.URL.substring(fragmentIndex+1);
			    }
			 }
                    
			if (t.setURLs(false) === false)
		           return;

			t.async = (adSpec.async !== undefined) ? adSpec.async
						    	       : false;
			if (    (t.async === true)
			     && (t.tagType === "jscript"))
			 {
			   t.tagType = "iframe";
			   t.cmd = 'f.ad';
                         }

			t.url = "https://" + p.host + "/" + t.cmd + t.pageParams + t.adParams + "&rnd=" + getRnd();

                        if (    (adSpec.env === undefined)
			     || (adSpec.env === 'display'))
                         {
			   if (adSpec.pop === 'only')
			      t.drawPopTags();
			   else
			      t.drawTags();

			   if (p.canServeSnackBarOnThePage(adSpec) === true)
                              p.drawSnackBarTags();
                         }
			else 
			 {
  			   var tagsDrawn = false;
		           if (adSpec.env === "inapp" && p.enablePostRequest === true )
			      tagsDrawn = t.sendPOSTRequest();
			      
			   if (tagsDrawn === false)
                            {
                              var tf0img = new Image();
                              tf0img.src = "https://" + p.host + "/i.u" + t.pageParams + "&postfailed=1" + t.adParams;

			      t.drawTags();
                            }
			 }

			if (adSpec.debug === 1)
			   inspectNameObj("e9Ad",t);
		      },

		   drawPopTags:
		     function()
		      {
			var             t = this;

			if (canServePops() === true)
			 {
			   t.drawTags();
			   var tfdate = new Date();
			   tfdate.setTime(tfdate.getTime()+3600000);
			   document.cookie='tf1=y1; path=/; expires='+ tfdate.toGMTString();
			 }
		      },

		   sendPOSTRequest:
		     function()
		      {
			var             t = this;
			var             p = t.page;
                        var 		xhrObj;
	
         		if (window.XDomainRequest) // ie8,9 cross domain call          		   
			 { 
              		   xhrObj = new XDomainRequest();
                           xhrObj.open("POST", t.url);
                           xhrObj.onload = function () {eval(xhrObj.responseText);};          		      
                           xhrObj.send(t.postParams);
			   return true;
                         } 
		        else
			 {
           		   if (window.XMLHttpRequest)		  // IE7+, Firefox, Chrome, Opera, Safari
              		      xhrObj = new XMLHttpRequest();
           		   else if (window.ActiveXObject)	  // IE6, IE5
              		      xhrObj = new ActiveXObject("Microsoft.XMLHTTP");
			   else
			      return false;

			   if ("withCredentials" in xhrObj)
			    {
			      xhrObj.open("POST", t.url, true);
			      xhrObj.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
			      xhrObj.withCredentials = true;

			      xhrObj.onreadystatechange = function () 
							   {
							     if (xhrObj.readyState == 4)
							      {
								xhrObj.responseText;
								eval(xhrObj.responseText);
							      }
							   };
        		      xhrObj.send(t.postParams);
			      return true;
			    }
                           else
			      return false;
                         }
	              },

		   drawTags:
		     function()
		      {
			var             t = this;
   			var             p = t.page;

                        if (adSpec.snackbar === false)
                           return;

			switch (t.tagType)
			 {
			   case "iframe":
				{
				  t.tagSrc = '<iframe src="' + t.url + '" marginwidth=0 marginheight=0 hspace=0 vspace=0'
						+ 'frameborder=0 scrolling=no allowTransparency=true width='
						+ t.fw + ' height=' + t.fh + ' ><\/iframe>';
				}
				break;

			   case "jscript":
			   case "toolbar":
			   case "inapp":	
				{
				  t.tagSrc = '<scr' + 'ipt type="text/javascript" SRC="' + t.url + '"><\/sc' + 'ript>';
				}
				break;

			   case "img":
				{
				  var hrefURL = "https://"+p.host+"/i.click" + t.pageParams + t.adParams;
				  t.tagSrc =  '<a href="' + hrefURL + '"><img width='  
						    + t.fw + ' height=' + t.fh + ' src="' + t.url + '" alt="Click Here" border=0></img></a>';
				}
				break;

			   case "buster":
				{
				  t.tagSrc = '<iframe src="' + p.busterframe + '#' + t.pageParams + t.adParams 
					       + '" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 '
					       + 'scrolling=no allowTransparency=true width=' + t.fw + ' height=' + t.fh + '></iframe>';
				}
				break;
			 }

			if (t.center === 1)
			   t.tagSrc = '<div align="center" id="'+t.adContainerId+'">'+t.tagSrc+'</div>';

			document.writeln(t.tagSrc);
		      },

                   isAncestor:
		     function(window,frame)
                      {
                        var w = window;
                        while (w.parent !== w.top)
                         {
                           w = w.parent;
                           if (w === frame.contentWindow)
                              return true;
                         }
                        return false;
                      },

                   bustTopIframe:
		     function()
		      {
                        var             t = this;

                        try 
                         {
			   if (adSpec.busted === 1)
                            {
			      var sizeIndex = t.adParams.indexOf("size=");
                              adSpec.size = t.adParams.substring(sizeIndex+5).split('&')[0];
			    }

        		   var frames = window.top.document.getElementsByTagName("iframe");
			   if (frames)
			    {
			      for (var i=0; i<frames.length; i++)
			       { 
				 var   frame = frames[i];
                                 if (t.isAncestor(window,frame))
                                  {
				    var		filterObj = t.filterSizeToFrameWxH(adSpec.size,frame);
				    if (    (isAdEnclosedInIframe(filterObj.fw,filterObj.fh,frame,70) === true )
					 && (frame.src !== window.location.href))
				     {
				       frame.src = window.location.href;
				       return true;
				     }
                                    else
				       return false;
			          }
                               }
			    }
                          }
                        catch(err) { }
		        return false;
                      },

		   fetchAds:
		     function() 
		      {
			var             t = this;
			var             p = t.page;

			function checkForAdSlotsNotDisplayed() 
			 { 
			   var fragment = '';
			   for (var slotName in p.adSlots)
			      if (  (objectType(p.adSlots[slotName]) === 'object')
				 && (p.displayFlags[slotName] === undefined))
				  fragment += '&' + slotName + '=' + encodeURIComponent(stringify(p.adSlots[slotName]));
			   if (fragment !== '') 
			    {
			      var tf0img = new Image();
			      tf0img.src = "https://" + p.host + "/i.u" + t.pageParams + "&multiad=1&site=" + p.site 
							       + "&adSpace=" + p.adSpace + t.adParams + fragment;
			    }
			 };

			p.adSlots = p.pageBuildAdSlotsFromE9Slots(e9AdSlots);
			t.setURLs(true);
			var adslots = t.encodeAdSlots(p.adSlots);

			if (adslots !== '') 
			 {
			   var url = "https://" + p.host + "/j.multi" + t.pageParams 
				        + "&site=" + p.site + "&adSpace=" + p.adSpace + t.adParams + "&rnd=" + getRnd() 
				        + '&' + adslots + "&callback=e9Manager.setMultiAdResponse";

			   if (p.isIE === false)
			      window.addEventListener('load',checkForAdSlotsNotDisplayed,false); 

			   p.includeJScript(url);
		         }
		      },

		   encodeAdSlots:
		     function(adSlots) 
		      {
			var             s = []; 

			function add (key,value) 
			 {
			   if (typeof value !== 'function')
		              s[s.length] = encodeURI(key) + "=" + encodeURI(value);
			 }
		   
		        function buildParams(name,val) 
			 {
			   if (val instanceof Array || val instanceof Object) 
			    {
			      for (var k in val) 
			         buildParams(name + '.' + k, val[k]);
			    } 
			   else 
			    {
			      add(name, val);
			    }
			 }

			for (var param in adSlots) {
			   var obj = adSlots[param];
			   if (objectType(obj) !== 'object')
			      buildParams(param,obj);
			}
			      
			for (var slotName in adSlots) {
			   var obj = adSlots[slotName];
			   if (objectType(obj) === 'object')
			      buildParams(slotName,obj);
			}

			return s.join("&").replace(/%20/g, "+");
		      }
		 };
	        e9Ad.init();

		return e9Ad;
	      },

           getDataSlots:
	     function()
              {
	        var             p = this;
		var 		dataCreative = "";
		var 		data1x1Creative = "";

		if (p.adResponse !== undefined) 
		 {
		   for (var k in p.adResponse) 
		    {
		      if (k.indexOf("data_slot_") === 0) 
		       {
			 dataCreative += p.adResponse[k].creative;
			 delete(p.adResponse[k]);
		       }
		      else if (k.indexOf("ad_1x1_slot_") === 0) 
		       {
			 data1x1Creative += p.adResponse[k].creative;
			 delete(p.adResponse[k]);
		       }
	            }
		 }
	        
                return { 'dataCreative': dataCreative, 'data1x1Creative':data1x1Creative }               
              },

           processWaitingSlotsQueue:
             function()
              {
                var		p = this;
                var		waitingSlots = p.waitingSlotsQueue;

                for (var i in waitingSlots)
                   p.displayMultiAd(waitingSlots[i]);
              },

           createSameDomainIframeNode:
             function(iframeID,width,height)
              {
                var     iframe = document.createElement('iframe');

                iframe.setAttribute("frameBorder", "0");
                iframe.setAttribute("allowtransparency", "true");
                iframe.setAttribute("marginheight", "0");
                iframe.setAttribute("marginwidth", "0");
                iframe.setAttribute("scrolling", "no");
                iframe.setAttribute("width", width);
                iframe.setAttribute("height", height);
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                iframe.setAttribute("id" ,iframeID);

		if (width === 0 && height === 0)
                 {
                   iframe.setAttribute("style","position:absolute; top:-15000px; left:-15000px;");
                 }

                return iframe;
              },
        
           getFrameID:
             function (frameWindow) 
	      {
                return "tfasyncframe_" + frameWindow.document.getElementsByTagName("iframe").length;
	      },

           getDivID:
             function(slotName) 
              {
		return "tfasyncid_" + slotName;
              },

           buildContentFromResponse:
             function(adResponse)
              {
                var		p = this;
                var		creative   = adResponse.creative;
		var		viewPixel  = "";
		var             dataSlots  = p.getDataSlots();
                var             content;

		if (adResponse.viewpixel.indexOf('http') === 0)
                   viewPixel = '<img src="' + adResponse.viewpixel + '" height=0 width=0 border=0 style="display:none"/>';

                content =  '<!DOCTYPE html><html><head></head><body style="margin-left:0;margin-top:0px;">'
                                      + creative
                                      + viewPixel
                                      + dataSlots.dataCreative
                                      + dataSlots.data1x1Creative
                           + '</body></html>';

                return content;
              },

           displayMultiAd:
             function(slotName) 
              {
                var             p = this;
                var             adSlots = p.adSlots;

                if (    (adSlots !== undefined)
                     && (adSlots[slotName] !== undefined))
		 {
		   var          divID       = p.getDivID(slotName);
                   var          frameWindow = (typeof inMultiAsyncFrame !== "undefined") ? parent.window: window;
                   var          iframeID    = p.getFrameID(frameWindow);
                   var		adSpec      = adSlots[slotName];
                   var		center      = sfv(adSpec.center,adSlots.center,p.center);

                   if (frameWindow.document.getElementById(divID) === null)
		      p.createContainerDiv(slotName,frameWindow,center);

                   if (p.adResponse !== undefined)
		    {
		      var	adResponse  = p.adResponse[slotName];
		      var	debug       = sfv(adSpec.debug,adSlots.debug);
		      var	frameSize   = sfv(adSpec.rsize, adResponse.size);
		      var       sizeArray   = frameSize.split("x");
		      var       frameWidth  = sizeArray[0];
		      var       frameHeight = sizeArray[1];
		      var       content;
                      var       iframe;

		      if (debug === 1)
		       {
			 inspectNameObj(slotName,adSpec);
			 inspectNameObj(slotName + ".adResponse",adResponse);
		       }

                       if (p.canServeSnackBarOnThePage(adSpec) === true)
		          p.drawSnackBarTags();

                       iframe = p.createSameDomainIframeNode(iframeID,frameWidth,frameHeight);
                       frameWindow.document.getElementById(divID).appendChild(iframe);
                       content = p.buildContentFromResponse(adResponse);
                       p.writeContentInIframe(frameWindow,iframeID,content);
                       p.displayFlags[slotName] = 1;		      
		    }  
                 }
              },

           displaySingleAd:
             function(slotName) 
              {
                var		p = this;
		var             adResponse  = p.adResponse[slotName];
		var       	sizeArray   = adResponse.size.split("x");
		var       	frameWidth  = sizeArray[0];
		var       	frameHeight = sizeArray[1];
                var             currFrame   = window.frameElement;
                var             content;
                var             adSpec;
		var		drmTime;

		if (e9.snackbar === true)
		   adSpec = e9;
		else
		   adSpec = p.pageBuildAdSpec(e9);
		
                if (    (currFrame !== null)
                     && (currFrame.width !== frameWidth || currFrame.height !== frameHeight) )
		 {
                   currFrame.width = frameWidth;
                   currFrame.height = frameHeight;
		   currFrame.style.width = frameWidth + 'px';
                   currFrame.style.height = frameHeight + 'px';
                 }

                if (adSpec.debug === 1)
                 {
                   inspectNameObj(slotName,adSpec);
                   inspectNameObj(slotName + ".adResponse",adResponse);
                 }

                content = p.buildContentFromResponse(adResponse);
                drmTime = p.getDRM(adSpec);  

                if (!drmTime)
		 {
                   document.write(content);
                 }           
                else
		 {                  
                   setTimeout(function() {document.write(content);},
			      drmTime); 
                 }
              },

           getDRM:
	     function(adSpec)
	      {
                var p = this;
                var drmTime = 0;
                if (    (p.tagOptions.adParams)
		     && (p.tagOptions.adParams.isDRMEnabled))
		 {
                   if (adSpec.busted === 1)
		    {
                      drmTime = stripParam(window.location.href,"drmParam").param; 
                    }
                   else
		    {
                      drmTime = adSpec.drm || p.tagOptions.adParams.drm;
                    }      
		 }
                return parseInt(drmTime);
              },

           createContainerDiv:
	     function(slotName, w, center) 
	      {
                var     p = this;

                w.document.write('<div id="'+p.getDivID(slotName)+'" name="tfasyncdiv" '
				 +((center === 1) ? ' align="center"' : '')
				 + '>  </div>');
                p.waitingSlotsQueue.push(slotName);
              },

           writeContentInIframe:
             function(frameWindow, iframeID, content)
              {
                var             p = this;
                var		idoc = frameWindow.document.getElementById(iframeID).contentWindow;

                if (p.isIEOrOpera === true)
                 {
                   idoc.contents = content;
                   idoc.location.replace('javascript:window["contents"]');
                 }             
                else        
                 {
                   idoc.document.open(); 
                   idoc.document.write(content);
                   idoc.document.close();            
                 }
              } 
         };

        function expo9Ad() {}

        expo9Ad.prototype.displayAd =
          function()
           {
             var t = this;
             manager.displayAdFromE9(t);
           }

        expo9_ad = expo9Ad;

        e9Page.init();
        manager.init = true;
        return manager;
      })();
 }
else
 {
   if (e9 !== undefined) 
    {
      e9Manager.setSite("openxusbidder","openxus");
      e9Manager.displayAdFromE9(e9); 
    }
 } 
