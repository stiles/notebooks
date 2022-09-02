




var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var url = '//diag.adsafeprotected.com/js?';
					try {
						var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
						url += 'code:fwjs-diag-' + code;
						url += '&err:' + errMsg;
						url += '&codeanderr:' + code + '_' + errMsg;
						if (config) {
							
							url += '&version:' + config.version || '';
							url += '&server:' + config.mn || '';
							url += '&region:' + config.region || '';
							url += '&mode:' + config.mode || '';
							url += '&forceAppend:' + config.forceAppend || '';
							url += '&asid:' + config.asid || '';
							url += '&anId:' + config.anId || '';
							url += '&advEntityId:' + config.advEntityId || '';
							url += '&pubEntityId:' + config.pubEntityId || '';
							url += '&mobOrTab:' + config.mobOrTab || '';
							url += '&app:' + config.app || '';
							url += '&mobAppWebview:' + config.mobAppWebview || '';
						}
						url += '&domless:' + __IASScope.isDomless;
					} catch (e) {
						url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.319',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.5.12.js", main: "static.adsafeprotected.com/main.19.8.319.js"},
		protocol: 'https',
		jsref: "https:\/\/ad.doubleclick.net\/",
		asid: "49686426-f00a-11ec-8358-1ee582a6eeb5",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime,forceKeepGoogleAdNode",
		minimizeCalls: "false",
		adWidth: "728",
		adHeight: "90",
		forceAppend: "true",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=999743",
		adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/st\/999743\/61799692\/skeleton.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/st\/999743\/61799692\/skeleton.js",
		accountForSadImps: '',
		fwMonitoring: 'false',
		mn: "jsserver-primary-546ff8458-sr49n",
		mobOrTab: false,
		app: false,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/999743\/61799692\/",
		anId: '',
		advEntityId: '999743',
		pubEntityId: '61799692',
		videoId: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: 4,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: '',
		iasProxyPartnerDomain: '',
		region: 'or'
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.3.25-iab3167'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//						value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//							enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
		var b = function() {
		};
		b.prototype = a;
		return new b;
	};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
		a.__proto__ = b;
		if (a.__proto__ !== b) {
			throw new TypeError(a + " is not extensible");
		}
		return a;
	} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
			UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app",
			WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", UNMEASURABLE:"unmeasurable", NO_WINDOW_FOCUS:"noWindowFocus"}, SupportedFeatures:{CONTAINER:"clid",
			VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY",
			OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels", HAS_WINDOW_FOCUS:"hasWindowFocus"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
		return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.25-iab3167"};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		}};
	var module$exports$omid$common$OmidGlobalProvider = {};
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof globalThis && globalThis) {
			return globalThis;
		}
		var a = Function("return this")();
		if (a) {
			return a;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.isTopWindowAccessible = function(a) {
		try {
			return a.top.location.href ? !0 : !1;
		} catch (b) {
			return !1;
		}
	};
	module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
		if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
			return null;
		}
		try {
			var b = a.top;
			return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
		} catch (c) {
			return null;
		}
	};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
				'"></iframe>'))));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
		this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
		if (a && a.injectionSource) {
			return a.injectionSource;
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
			a && b ? b() : !a && c && c();
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
			e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}





	
	__IASScope.isDomless = typeof window === "undefined";
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.25-iab3167'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}

	if (document.currentScript) {
		return document.currentScript;
	}
	
	var tempScript,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function getStart(baseName) {
		return _marks[baseName + START_CODE];
	}

	function getEnd(baseName) {
		return _marks[baseName + END_CODE];
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData,
		getStart: getStart,
		getEnd: getEnd
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(k,y,I){function qa(h){if(!k.executedContinueMain){k.executedContinueMain=!0;var a;k.perf.markStart(ra);ib(k).verifyContextNode();a=jb();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,f=a.mBrowser,p=a.mPageUrls,m=a.mFeatures,q=v,t=a.renderDetector,w,x,D;k.perf.markStart(sa);k.b11="1"===k.adHeight&&"1"===k.adWidth?"true":"false";k.cnod=k.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:l.IMPRESSION_EVENT});
n.getAggregator().trigger("addOutputItem",{output:k.mainBirthdate},"mtim",{type:l.IMPRESSION_EVENT});-1<("undefined"!==typeof navigator?navigator.userAgent:"").indexOf("IMDb-flg")&&(n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),n.getAggregator().trigger("addOutputItem",{output:"a_imdb"},"drul",{type:"impression"}));var z;try{b.isApplicable(v)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),m.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),m.on("idMap")&&
(z=b.getIdMap())&&c.addItem(z,"idMap"))}catch(L){d.add(l.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(f,m,q)&&e.start(),D=p.detectTopURL(),m.on("exch")&&(w=(new kb).createInstance(d,c),w.parse(D)),x=lb(),x.isApplicable(m)&&x.start(m),q.usesGroupMCustomMetric()&&mb(),t.start()}catch(L){d.add(l.ERROR_CODES.IMPRESSION_LEADUP)}k.perf.markEnd(sa);h=D;b=a.mVideo;try{nb(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),g.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(L){__IntegralASDiagnosticCall("impsend",
L,k)}h=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;f=a.mDataTransfer;p=a.mErrors;m=a.iOutput;q=a.loopDelay;t=a.mAdTalk;w=a.viewabilityMeasurement;a=a.mAncestorOrigins;x=v;try{k.perf.markStart(ta);var F=ob();F.start();F.addFieldTypes([l.DT_SLOT.IM,l.DT_SLOT.FF,l.DT_SLOT.ENVIRONMENT,l.DT_SLOT.FF_EXP]);var B=pb(h,b,c);B.isApplicable(d)&&B.start();var M;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(M=qb(e,f,p,b,m),M.init());rb(m,q,t,p,d,e,f,b,a);w&&w.start&&w.start();x.isDomless()||sb().start(["sca",
"xsca","rsrch"],d);tb();n.runTier(l.TIERS.VIEWABILITY);var r=ub();r.isApplicable(d)&&(r.start(),V.recordBlockingTime(),k.perf.mark(vb),V.setupOnLoadTracking(),V.setupBrowserDelayTracking());k.perf.markEnd(ta)}catch(L){p.add(l.ERROR_CODES.POST_IMPRESSION)}k.perf.markEnd(ra)}}function wb(h,a,b,c,d,e,f,p,m,q){try{k.perf.markStart(ua),k.tpiLookupURL&&xb(f,p).init(k.tpiLookupURL),v.isDomless()||q.isStarted()&&q.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{k.perf.markStart(va);e=
{output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:l.DT_CODES.ADTALK});g.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:l.DT_CODES.ADTALK});k.perf.markEnd(va);var f,p;k.isSplitMode&&(p=k.protocol+"://"+k.sp_cdnScripts.main,k.perf.markResource(wa,p));k.impUrl&&k.perf.markResource(yb,k.impUrl);f=k.perf.getData();n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"prf",g(f).toION());b.isApplicable(v)&&b.sendAdTalkCall()}catch(D){c.add(l.ERROR_CODES.ADTALK_DELAY)}}),
k.perf.markEnd(ua)}catch(t){c.add(l.ERROR_CODES.EVENT_LOOP_ONE)}}function zb(h){var a=new Ab(h,v),b=new Bb,c=new Cb(h,v),d=Db(h,v),e=(new Eb(k,v,h)).resolve(),f=[a],p=[];d.applies()&&f.push(d);c.applies()&&f.push(c);b.applies(h,v)&&f.push(b);g(e).each(function(a,b){f.push(new Fb(b,v));p.push(b.id)});0<p.length&&(n.getAggregator().trigger("addOutputItem",{output:p.join(".")},"scm",{type:l.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:p},"metricIdList",{type:l.DT_CODES.UNLOAD,
asION:!0}));return f}function Gb(h,a){return!v.isVideo()||v.isAvid()||v.isOmid()||v.isInMobiMraidVideo()?{}:Hb(k.videoId,h,a)}function jb(){var h,a,b,c,d,e,f,p,m={};k.perf.markStart(xa);var q=n.getAggregator();Ib();m.mFeatures=q.request("features");m.mFeatures||(m.mFeatures=q.provide("features",ya()));k.integration&&m.mFeatures.setReportedBootstrapFeatures("intblk","integration");k.autotagSizeSet&&m.mFeatures.setReportedBootstrapFeatures("ats","autotagSizeSet");k.encodeInvalidUrlChars=v.isDomless()?
!1:m.mFeatures.on("encodeInvalidUrlChars");q.provide("mobileApp",function(){return h=h||new Jb(m.mFeatures)});q.provide("avidJsClient",function(){return a=a||new Kb(r.getWindow())});q.provide("context",v);m.mBrowser=q.provide("browser",(new Lb).createInstance());m.mErrors=q.request("mErrors");m.mIds=q.provide("ids",Mb());m.iOutput=Nb(q);q.request("mJsonp");m.mComm=q.request("mComm");m.viewabilityMeasurement=(new Ob(Pb(m.mIds),m.mFeatures,m.mBrowser)).create();c=q.request("omidAdSessionContext");Qb(c,
q);m.mFeatures.on("swapids")&&(k.oid=k.asid,k.asid=m.mIds.unq);m.mAdTalk=(new Rb).createInstance(m.mFeatures);b=Sb();c=Tb(q);d=q.provide("mPage",(new Ub).createInstance());m.mAncestorOrigins=Vb();m.mPageUrls=q.provide("pageUrls",(new Wb).createInstance(m.mAncestorOrigins,r));e=q.provide("mScreenEvents",Xb());q.provide("ieXDomainViewability",Yb(m.mBrowser));f=Zb(m.mBrowser);p=Gb(m.mFeatures,e);m.mVideo=q.provide("video",p);$b(ac.build());f=(new bc).createInstance(m.mErrors,f,m.mFeatures);d=(new cc).createInstance(f,
m.mErrors,d,v);p=q.provide("jobFactory",dc());m.mDataTransfer=ec(f,m.mErrors,m.mFeatures,m.mIds,m.iOutput,m.mBrowser,e,b);b=fc(m.mErrors,m.mFeatures,q,c);m.mMode=gc(b,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=q.provide("viewability",hc(C(),m.viewabilityMeasurement,m.mBrowser,m.mDataTransfer,m.mFeatures,q,m.iOutput,d,e,m.mVideo));ic(m.mFeatures,m.mViewability,c,p);m.loopDelay=za();m.renderDetector=jc();m.mDataTransfer.setViewabilityMod(m.mViewability);k.perf.markEnd(xa);return m}
function Aa(h){var a=h&&h.sca,b=h&&h.xsca,c=h&&h.w,d=h&&h.h;return function(e){e="string"===typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(k,e);else for(var f in e)k[f]=e[f];k.isResolved=!0;k.sp_cdnScripts={sca:a,xsca:b};c&&d&&(k.adWidth=c,k.adHeight=d,k.autotagSizeSet=!0);qa(k.isNewBuild)}}function Ib(){var h,a,b;b=n.getAggregator().request("omidAdSessionContext");h=b.app&&b.isDisplay&&!b.isWeb;(a=k.mobFwUrl&&-1<k.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===k.adWidth&&"1"===
k.adHeight&&(b.isLimitedSandbox=!1);h&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||!0===k.mobAppWebview)k.mobOrTab=!0}function Qb(h,a){if(h&&h.queuedOutputItems)for(var b=0;b<h.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:h.queuedOutputItems[b].value},h.queuedOutputItems[b].code,{type:"impression"})}function ic(h,a,b,c){var d=zb(h);n.getAggregator().provide("viewabilityDefinitions",d);return g(d).map(kc(h,a,b,c))}function rb(h,a,b,c,d,e,f,p,m){var q;"true"!==k.minimizeCalls&&
(q=(new Date).getTime(),r.execAtEndOfThread(function(){wb(h,a,b,c,q,d,e,f,p,m)}))}function Ba(h){if(k.isResolved)qa(k.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(e){}var a,b=h;a={37103:"https://vfw.amazon-adsystem.com/ias/j"};var c=/iasProxyPartnerId=([\d]+)/g.exec(b&&b.config),c=c&&c[1];a=b&&b.host||a[c]||"https://jsconfig.adsafeprotected.com";c=h&&h.config;b=h&&h.contentType;try{var d=k.contextNode.src;-1!==d.indexOf("fw.js")&&-1!==d.indexOf("?")&&(k.staticFwjsMacros=d.split("?")[1])}catch(e){}c&&
(d=a+"/jsconfig"+c+(k.adSessionId?"&adSessionId="+k.adSessionId:""),"application/json"===b?n.getAggregator().trigger("getJSON",d,Aa(h)):n.getAggregator().trigger("jsonp",d,Aa(h),!1,"cbName"))}}function kc(h,a,b,c){return function(d,e){var f,p,m;f=Ca(e,a);var q=lc(b,h,e.rts).getCallbacks(),t=Da(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId));e.sendOtherwiseInViewSignal&&(m=Ca(e,a,e.sendOtherwiseInViewSignal),p=Da(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId,e.sendOtherwiseInViewSignal)));
e.rtsCallbacks=q;e.thresholdType===l.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?f=mc(f,e,t,v.isVideo()):(f=Ea(f,Z(e.minUnit),t),e.sendOtherwiseInViewSignal&&(p=Ea(m,Z(e.minUnit),p,e.sendOtherwiseInViewSignal),p.start()));f.start();return f}}function nc(h){var a,b,c;k.mainBirthdate=k.hasOwnProperty("birthdate")?(new Date).getTime()-k.birthdate:-1;k.perf.markStart(Fa);k.isNewBuild=h;h=[oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,
h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});k.isResolved&&h.provide("features",ya());a=Fc();b=Ga();c=(new Gc).createInstance(a,b);h.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:da(a),adSessionReadyStrategy:Hc(a)},{environment:Ic(),adSessionReadyStrategy:Jc()}];(new Kc(h)).resolve().adSessionReadyStrategy.start();k.perf.markEnd(Fa)}
var Ha={};if(Object.assign)k=Object.assign({},k);else{for(var Ia in k)Ha[Ia]=k[Ia];k=Ha}var g=function(h){return new G(h)},G=function(h){this.iterable=h};G.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(h){return 0===this.keys(h).length};G.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=
0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};G.prototype.map=function(h,a){var b=[];this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};G.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var c=h(a,d);g.isDef(c)&&b.push(c)});return b.join(a)};G.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;
this.isArray()?b=this.map(function(b,c){return g(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),e=g(c).toION(h,a);return d?e:(h[b]||b)+":"+e}));return c+b.join(",")+d};G.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};G.prototype._privateMixin=function(h,
a,b){for(var c in a)g.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};G.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,d){var e=h(c,d);g(e).isObj()&&b._privateMixin(a,e)});return a};G.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};G.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};G.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};G.prototype.findFirst=function(h){var a,
b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};G.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},h);return a};G.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};G.prototype.selectProperties=function(h){var a={},b=this;g(h).each(function(c,d){g.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};G.prototype.filter=function(h,a){return this.map(function(a,c){var b;if(g.isUndef(h)||g.resolve(h,a,c))b=c;return b},a)};G.prototype.toArray=
function(){return this.map(function(h,a){return a})};G.prototype.JSONStringify=function(){var h,a,b=!1;y.Prototype&&y.Prototype.Version&&-1===y.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};G.prototype.contains=function(h){var a=g(this.iterable).findFirst(function(a,c){return h===c});return g.isDef(a)};g.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:e};g.isDef=function(h){return"undefined"!==typeof h};g.isUndef=function(h){return!g.isDef(h)};g.isBool=function(h){return"boolean"===typeof h};g.noop=function(){};g.identity=function(h){return h};g.isFunction=function(h){return"function"===typeof h};g.isStr=function(h){return"string"===typeof h};g.useIfDef=function(h){return g.isDef(h)?h:!1};g.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};
g.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};g.resolve=function(h){var a=g(arguments).toArray();a.shift();return g.isFunction(h)?h.apply({},a):h};g.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};g.debounce=function(h,a,b){var c,d=b||y;return function(){var b=this,f=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,f)},a)}};g.last=function(h){return h[h.length-
1]};g.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};g.fromBoolToNum=function(h){return h?1:0};g.isNumeric=function(h){return g.isDef(h)&&null!==h&&!isNaN(h)};g.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};g.encodeInvalidUrlChars=function(h,a){var b={$:"%24","[":"%5B","]":"%5D","{":"%7B","}":"%7D","|":"%7C"},c=h;a&&"string"===typeof h&&(c=h.replace(/%(?![0-9A-F][0-9A-F])/gi,"%25"),c=c.replace(/\$|\[|\]|\{|\}|\|/gi,function(a){return b[a]}));return c};var n=
function(){var h,a={},b=[],c=[],d=function(){var a={},b=g(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,t){t=t||{};var f,p,m=function(a){0===b.length&&(b=g(a).map(function(a,b){return h.request(b)}))},l=function(){if(!f){var a=[];f=!0;m(["features","browser","context"]);t.emits&&(c.events=new C);if(!t.applies||t.applies.apply(t,b))p=!0,a=g(e).map(function(a,b){return h.request(b)},!0),a.push(c),g(c).mixin(q.apply({},a))}};(function(){var b=t.tier;g.isDef(b)&&(a[b]=a[b]||
new ea,a[b].push(l))})();h.provide(d,function(){var a;l();p&&(a=c);return a});return c};d.runAll=function(){var b=g(a).keys().sort(function(a,b){return a-b});g(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new Ja;g(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),l={MRC_LARGE_AD_SIZE:242500,IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",
NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",
BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v",WINDOW:"w"},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",
ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",
NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},
MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,
.01,.2,.25,.3,.5,.7,.75,.8,.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,.1,.2,.25,.3,.4,.5,.6,.7,.75,.8,.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",REFERRER_POLICY:"no-referrer-when-downgrade",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",
UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",CONTENT_STYLED:"cs",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},Fa="mf",ra="cm",xa="in",sa="pr",ta="po",vb="bl",ua="lo",va="lt",wa="md",yb="id",ib=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,
b=I.getElementsByTagName("script"),c=b.length,d=b[c-1],e=h.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(f){}h.contextNode=d}}}},Mc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],b=l.RENDER.CREATIVE_NODE_TYPES.concat(l.RENDER.CONTAINER_NODE_TYPES),c=0,d=k.useFIF&&v.friendlyIframe||v.isSpecifiedAd(),e=0,f=[],p=function(p){var m=u.isNodeXDomainIframe(p)||u.isNodeCreative(p),
t=!p;h=t?k.contextNode.parentNode:p;if(m||t){var w=f.length;0<w&&(e<w?e=w:(e=0,f=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",p)}else{if(d){var x;x=m=p;t=v.friendly?r.getTop().document.body:k.contextNode.ownerDocument.body;for(;3>c;){if(t&&m===t){x=m;c=3;break}u.isWindow(m)&&(x=u.crossQuerySelector("["+l.AD_IDENTIFIER+"-"+k.asid+"]"),m=g.isDef(x)?x:m);x=m=g.isDef(m)?m.parentNode||m:m;c++}m=x}else m=p;if(u.isWindow(m)){try{w=m.document}catch(F){w=k.contextNode.ownerDocument}p=w}else"IFRAME"===
u.getNodeName(m)?(f.push(p),p=p.contentWindow.document):p=m;var w=[],t=(m=p&&p.getElementsByTagName&&p.getElementsByTagName("*"))&&m.length,D;if(m)for(var z=0;z<t;z++)D=(x=m[z])&&x.nodeName&&x.nodeName.toUpperCase(),!x.children||0!==x.children.length||g(b).contains(D)||g(a).contains(D)||g(w).contains(D)||w.push(D);w=b.concat(w);(new Lc(w,f)).searchDescendants(p)}};n.getAggregator().on("creativeFinderBatchCompleted",p);return{find:p,getClosestContainerName:function(){return u.getNodeName(h)}}},Lc=
function(h,a){var b=function(b){function c(b){var c=u.getNodeName(b),d=u.isNodeCreative(b)||"IFRAME"===c;c&&d&&!u.isEmptyFriendlyFrame(b)&&(c=u.getNodeArea(b),c>m&&!g(a).contains(b)&&(p=b,m=c))}function e(){do c(b[f]),f+=1;while(0!==f%500&&f<b.length);f<b.length?r.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",p)}var f=0,p=null,m=-1;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(f;f<b.length;f++)c(b[f]);n.getAggregator().trigger("creativeFinderBatchCompleted",
p)}};return{searchDescendants:function(a){a=a||k.contextNode.parentNode;var c,e,f=[];for(c=0;c<h.length;c++){e=h[c].toLowerCase();var p=a.getElementsByTagName&&a.getElementsByTagName(e);if(p&&p.length)for(e=0;e<p.length;e++)f.push(p[e])}b(f)}}},jc=function(){var h,a=!1,b=!1,c=!1,d={status:l.RENDER.STATUS.OTHER,details:l.RENDER.DETAILS.OTHER},e={status:l.RENDER.STATUS.DETECTED,details:l.RENDER.DETAILS.ENVIRONMENT},f=n.getAggregator().request("omidAdSessionContext"),p=function(){c=a=!0},m=function(a){a&&
(a.status=l.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},q=function(){var a=!1;v.isOmid()&&f&&f.useOMID13Logic&&(a=!0);return a},t=function(a,b){h.save(l.RENDER.DIAGNOSTIC.CONTENT_STYLED);var c=/url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(b.content)[1],d=u.createImage();d.onload=function(){0<d.naturalHeight*d.naturalWidth&&a.setAttribute&&a.setAttribute("data-ias-rend-bi",!1)};d.src=c;a.setAttribute("data-ias-rend-bi",!0)},w=function(a){var b={},c=r.getDoc(),d=function(e){var f=e&&e.type;
if("readystatechange"===f&&"complete"===e.target.readyState||"load"===f)m(b),h.saveNode(a),"readystatechange"===f?h.save(l.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===f&&h.save(l.RENDER.DIAGNOSTIC.LOAD_FIRED),z(b),A.removeEvent(a,"load",d),A.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(m(b),h.saveNode(a),h.save(l.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(A.addEvent(a,"load",d),A.addEvent(c,"readystatechange",d));return b},x=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),
c=function(){A.removeEvent(a,"ready",c);h.save(l.RENDER.DETAILS.ENVIRONMENT);h.save(l.RENDER.DIAGNOSTIC.MRAID_READY);m();z({status:l.RENDER.STATUS.DETECTED})};h.save(l.RENDER.DETAILS.ENVIRONMENT);"default"===b?(m(),h.save(l.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=l.RENDER.STATUS.DETECTED):"loading"===b?(A.addEvent(a,"ready",c),h.save(l.RENDER.DIAGNOSTIC.MRAID_LOADING)):(A.addEvent(a,"ready",c),h.save(l.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));z(d)},D=function(a){a===l.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",
{type:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},z=function(b){var c=h.build();b=b.status||d.status;c=c?c:d.details;a&&b===l.RENDER.STATUS.DETECTED?(D(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(D(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},k=function(){n.getAggregator().on("primaryadfound",
function(a){var b,c=d,e=new Mc,f=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(u.isNodeXDomainIframe(a))b?r.clearInterval(b):f=!1,c=w(a);else if(a){var d=!1,p=u.getRect(a),q;if(q=a&&"IMG"===u.getNodeName(a)){q=!0;var x=g.isDef(a.naturalWidth)?a.naturalHeight*a.naturalWidth:0,k=getComputedStyle(a),D=0===a.src.length&&J.contains(k.content,"url"),n=a.getAttribute&&a.getAttribute("data-ias-rend-bi");0<x&&!D&&(q=!1);"false"===n&&(h.save(l.RENDER.DIAGNOSTIC.CONTENT_STYLED),q=!1);
D&&!n&&t(a,k)}q&&(d=!0,h.save(l.RENDER.DIAGNOSTIC.BROKEN_IMAGE));!d&&p.width>=l.RENDER.WIDTH_THRESHOLD&&p.height>=l.RENDER.HEIGHT_THRESHOLD&&(m(c),b?r.clearInterval(b):f=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);z(c)});var p=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(N){n.getAggregator().trigger("renderdiag",N)}},q=n.getAggregator().request("mobileApp");q&&q.isMobileAppEnvironment&&q.isMobileAppEnvironment()&&v.isMraid()?x():(p(),f&&(b=
r.setInterval(p,500)));n.getAggregator().trigger("eligiblerender")})},B=function(){var a=f&&!!f.isVideo,c=!q()||f&&!!f.videoStartArrived,d=!q()||f&&!!f.geometryArrived,p=!f.omidEarlyExit||f.omidImpressionArrived,g=!(f.omidEarlyExit&&q())||f.omidLoadedArrived;return!b&&d&&p&&g&&(!a||c)?(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"oren"),n.getAggregator().trigger("eligiblerender"),h.save(l.RENDER.DETAILS.ENVIRONMENT),h.save(l.RENDER.DIAGNOSTIC.OMID_RENDERED),m(),z(e),b=!0):!1};
return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});h=new Oc;new Pc;n.getAggregator().on("impressionsent",p);q()||f.omidEarlyExit?B()||(h.save(l.RENDER.DETAILS.ENVIRONMENT),h.save(l.RENDER.DIAGNOSTIC.OMID_UNRENDERED),
z(d),n.getAggregator().on("omidrendgeoupdate",function(){B()}),n.getAggregator().on("omidrendvideostart",function(){B()}),f.omidEarlyExit&&(n.getAggregator().on("omidimpressionarrived",function(){B()}),n.getAggregator().on("omidloadedarrived",function(){B()}))):v.isAvid()||v.isOmid()||v.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),m(),z(e)):(z(d),k())}}},Oc=function(){var h=[],a=[],b=function(a){var b;if(u.isWindow(a))b="WINDOW";else if(u.isNodeXDomainIframe(a))b="XIFRAME";
else try{b=u.getNodeName(a)}catch(f){c("nen")}return b},c=function(a){h.push(a)};return{build:function(){var b=[];g(a).each(function(a,c){b.push(c)});g(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),f=d&&u.getRect(d),p=d&&u.hasBackgroundImage(d),m=d&&d.innerText&&0<d.innerText.length,h=d&&d.children&&0===d.children.length&&m,g=f&&f.width>=l.RENDER.WIDTH_THRESHOLD&&f.height>=l.RENDER.HEIGHT_THRESHOLD?l.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:
l.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;a.push(e);a.push(g);p&&a.push(l.RENDER.DIAGNOSTIC.STYLED_NODE);h&&a.push(l.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(w){c("sne")}}}},Pc=function(h){var a,b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,k),n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},aa=function(){return{applies:function(h,a){var b=n.getAggregator().request("mobileApp");return(h.browserIs(l.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(l.BROWSERS.WEBKIT)||h.browserIs(l.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Qc=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(l.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(l.BROWSERS.WEBKIT)||h.browserIs(l.BROWSERS.MSEDGE))&&
!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},mb=function(){var h,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",l.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=l.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Sb=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},
c={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=g(c).selectProperties(g(b).keys());c=g(c).asStrings();var e=g(c).compareTo(a);(e=d(e))&&JSON.stringify(e)!==JSON.stringify({})&&(e.t=v.getTagTime(),h.push(e));g(a).mixin(c)});var d=function(a){g(c).each(function(b,c){var d=!1;g(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return g(h).toION(b)}}},Ja=function(){var h=new Rc,a=new C;return g(h).mixin(a)},
C=function(){var h={},a={},b=function(b,c,f){if((b=a[b])&&0!==b)return f&&(b=b.slice(0,1)),g(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new ea;h[a].push(b,c)};return{on:function(a,e){var d={};e?d[a]=e:d=a;g(d).each(c);g(d).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=g(arguments).toArray();b.shift();var c=h[a];c&&c.run.apply({},b)},persistentTrigger:function(b){var c=g(arguments).toArray();c.shift();var d=b;a[d]=a[d]||[];a[d].push(c);(d=h[b])&&
d.run.apply({},c)}}},ga=function(){var h=function(a,c,d){var b,f=c.length,p=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);d&&d(a,c);if(p&&p.length){for(a=0;a<p.length;a++)(b=p[a])&&u.isWindow(b)&&(c[f]=a,h(b,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return g(d).filter(b)}}},ea=function(){var h=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;g(h).each(function(b,c){c.apply({},a)})}}},Da=function(h){var a={};return{doEligibleJobs:function(b){g(h).each(function(c,d){var e=d&&d.getTime();g.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},La=function(){var h,a=new ha,b=function(b,d,e,f){var c,m,h,t;if(JSON&&JSON.parse)try{c=JSON.parse(b.data),m=b.source,t=g.noop,d(c)&&(f&&(h=f(m,c))&&(t=function(){a.send(function(){return h},
m)}),e(b,c,t))}catch(w){c&&n.getAggregator().trigger("error",l.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){h=function(c){b(c,a,d,e)};A.addEvent(y,"message",h)},stop:function(){h&&A.removeEvent(y,"message",h);h=null}}},ha=function(){var h=function(a){return g(a).isObj()?[a]:(new ga).getFrames(a)},a=function(a){return g(a).mapToObj(function(a,b){var c;g.isFunction(b)||(c={},c[a]=b);return c})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);g(d).each(function(c,d){var e;
e=g.resolve(b,d)||{};e.sentTime=r.now();e=a(e);d.postMessage(g(e).JSONStringify(),"*")})}}}},Sc=function(h,a){return{onAll:function(b){var c={};g(a).each(function(d,e){h.on(e,function(){c[e]=1;g(c).keys().length===a.length&&(c={},b())})})}}},Nb=function(h){var a=0,b={},c=function(b,c,d){if(g.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=g.resolve(b.output);this.props.asION&&(a=g(a).toION());return a}},
d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var f=function(a,d,e){a=new c(a,d,e);b[a.id]=a};g(a.output).isObj()&&!e.asION?g(a.output).each(function(a,b){f({output:b},a,e)}):f(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,f;a(e)&&(f=d.output(),e.encode&&(c=encodeURIComponent(c),f=encodeURIComponent(f)),g.isFunction(b)?
b(c,f):b[c]=f)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Rc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var b,d=h[a],e=g(arguments).toArray();e.shift();g.isUndef(d)||(b=g.isFunction(d)?d.apply({},e):d);return b},provide:function(b,c){c?h[b]=c:g(b).each(a);return c}}},cc=function(){return{createInstance:function(h,a,b,c){return v.isDomless()?new Tc:new Uc(h,a,b,c)}}},Uc=function(h,a,b,c){var d;
return{collect:function(){var a=h.find(),f=a.getOutOfViewReasons(),p=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:E(u.calcWinDims()),q=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!q.hasValidDims())return{viewState:l.NA,posViewState:l.NA,embedded:v.embedded,winDimensions:m,adDimensions:q};!0===p&&f.push(l.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:f.length?l.OUT_OF_VIEW:a.getViewState(),
viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:f.join("."),obstructed:g.stringifyTriState(a.isObstructed()),isHidden:g.stringifyTriState(a.isHidden()),tabHidden:g.stringifyTriState(p),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Tc=function(){return{collect:function(){return{}}}},Vc=function(h){h=h||g.identity;var a=[],b=r.now(),c=function(){var c=
r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var d=a[a.length-1];b=h(b);c();0!==a.length&&b===d.state||a.push({state:b,duration:0})}}},Ma=function(h,a){var b=h||1,c=0,d=0,e,f=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var p=e||a;0===c%b&&(f+=r.now()-p,d++);c++},getTime:function(){return f},getCount:function(){return d}}},
Na=function(){var h,a=0,b=0,c=new C(!0),d=function(){h&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=g.collapseArgsIntoHash(a,d);g(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Wc=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=r.setInterval(h,c))},e=function(a){b&&(a&&h(),r.clearInterval(b),b=null)};return{start:d,stop:e,updateFrequency:function(a,
p){c=a;b&&(e(),d(p))}}},Z=function(h){var a,b,c=0,d=v.getTagTime(),e=0,f=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=v.getTagTime();f=!1},mark:function(){a=f?v.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=v.getTagTime();f=!0}}},W=function(h,a){var b=h||k.adsafeSrc||k.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?k.protocol+":"+b:k.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b)||[],c=b[1]?b[1]:"",d=b[2]?b[2]:"",
e=b[3]?b[3]:"",f=b[4]?b[4]:"",p=b[5]?b[5]:"",m=h&&b[6]?b[6]:"",q=b[7]&&a?b[7]:"",t={},w=function(a){"string"===typeof a&&(f=a);return f},l=function(a){"string"===typeof a&&(p=a);return p},n=function(a,b){var c=a+"="+g(b).toION();return g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars)},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=t[b])?t[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,
sub:w,master:l,setParam:function(a,b){t[a]=t[a]||{};"string"===typeof b||"number"===typeof b?t[a]=b:g(t[a]).mixin(b)},path:function(a){m=a},toString:function(){var a=w()?w()+".":"",b=m?"/"+m:"",c;q||!g(t).isEmpty()?(c=g(t).isEmpty()?"":g(t).stringify(n,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+l()+b+c}}},tb=function(){var h=function(a){var b=[];g(a).each(function(a,c){400>=b.concat(c).join("").length&&b.push(c)});return b},a=function(a,c){var b;c&&c.id&&(b=c.id.replace(/[^\w-_.>\/]/g,""));
return b};return function(){var b,c;try{if(v.friendly&&!v.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=u.getOurNodeInTop()){var f=u.getAncestorNodes(d);e=g(f).map(a)}if(b=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:l.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",b),c=b}return c}catch(p){n.getAggregator().trigger("error",l.ERROR_CODES.AD_SLOT_ID)}}()},Ac={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=
[15,30,45,60,90],a={start:function(){var a=this,c=k.asid,d=this.getChanId(),e=k&&k.contextNode&&k.contextNode.nextSibling&&k.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(b,c){b?n.getAggregator().trigger("error",l.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(c)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=k.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=
0;var f=d.exec(a[e]);f&&3===f.length&&"chanId"===f[1]&&(c=f[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var b=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,
b)}catch(q){e(q)}},!1);b.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var b=this,e=k.adRefreshThreshold&&parseInt(k.adRefreshThreshold)||null,f=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(d,m){d===l.DT_CODES.PING&&m===e&&(r.execAtEndOfThread(function(){f.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),b.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",
l.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};v.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",l.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}}},Vb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,
b,e){var c;if(c=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))c=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):void 0,c=3.7>c;return!c&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(c){n.getAggregator().trigger("error",l.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return g.last(h)},
sendOriginList:function(){var a;a="ao:"+(h?g(h).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:l.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",l.DT_CODES.THIRD_PARTY)}}},qb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},f=function(d){try{a.diagnostic("c");var f=d.length,p=0,t=0;e(f,0,0);g(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(f,
p,++t)},!0);e(f,++p,t)})}catch(w){b.add(l.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new W).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+k.asid;h.jsonp(a,f)}catch(m){b.add(l.ERROR_CODES.AT_INIT)}}}},fc=function(h,a,b,c){return{enabled:"true"===k.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===k.accountForSadImps&&c.measure(a),k._onAPIResult&&k._onAPIResult(a)}catch(e){h.add(l.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Lb=function(){return{createInstance:function(h,
a,b,c){return v.isDomless()?new Xc:new Yc}}},Yc=function(){var h=l.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{g.isDef(b.opera)&&g.isDef(b.opera.buildNumber)?a=h.OPERA:g.isDef(b.mozInnerScreenY)?a=h.GECKO:g.isDef(b.chrome)&&g.isDef(b.chrome.csi)?a=h.CHROME:g.isDef(b.msWriteProfilerMark)&&g.isDef(b.crypto)?a=h.MSEDGE:g.isDef(b.attachEvent)||g.isDef(b.msCrypto)?a=h.IE:g.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(f){}return a},c=function(){var a=!1,b=r.getWindow();
g.isDef(b.navigator)&&g.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!g.isFunction(a.postMessage))},
getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:l.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],f=l.NA,p=r.getDoc(),m=p.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in p.documentElement.style)f="11";else for(m.style.behavior="url(#default#clientcaps)",p=0;p<e.length&&!(f=m.getComponentVersion(e[p],"componentid").replace(/,/g,
"."));p++);}catch(q){}e=f;f=l.NA;m=r.getWindow();g.isDef(m.navigator)&&g.isDef(m.navigator.appName)&&(f=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:f}},isAndroidWebViewBrowser:function(){var a=c(),b=["Line","SamsungBrowser","FB_IAB","Silk"];return J.contains(a,"Android")&&function(){return g(b).findFirst(function(b,c){return J.contains(a,c)})}()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));
return b}}},Xc=function(){var h=function(){return!1},a=function(){return l.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},Gc=function(){return{createInstance:function(h,a){return v.isDomless()?new Zc(a):new $c(h,a)}}},ad=function(){var h,a=function(a,c){var b="",e=
"",f=r.getDoc().getElementsByTagName("ins");if(f&&0<f.length){e=f[0];b="<ins";for(f=0;f<e.attributes.length;f++)b+=" "+e.attributes[f].nodeName+'="'+e.attributes[f].nodeValue+'"';b+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
b+'<script src="'+c+'" referrerpolicy="'+l.REFERRER_POLICY+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var b=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!v.integratedBlockingApplies(a);return b&&a},deployBlockingScriptIntoIframe:function(b){h=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+k.asid,d;d=k.contextNode.parentNode;var e,f=k.adWidth&&0<k.adWidth?k.adWidth:0,p=k.adHeight&&0<
k.adHeight?k.adHeight:0,m=r.getDoc().getElementsByTagName("ins"),q;q=e=0;m&&0<m.length&&(q=m[0],e=parseInt(q.style.width),q=parseInt(q.style.height));f=e||f||window.innerWidth;p=q||p||window.innerHeight;"complete"===r.getDoc().readyState&&(k.forceAppend="true");"true"===k.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=f+"px",d.style.height=
p+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},$c=function(h,a){var b=function(a){var b=!1;v.isMSFT()&&(b=(a=a&&-1!=a.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig"))?!1:k.iasProxyPartnerDomain);return b},c=function(a,c,d,e){var f=b(c);f&&(c="//"+f+encodeURIComponent(c));"script"!==a?(c=I.createElement("DIV"),c.innerHTML=d,d=c.childNodes[0]):(d=
I.createElement("SCRIPT"),d.src=c,e&&(d.onload=e));k.contextNode.parentNode.appendChild(d)},d=function(a,d,e){var f;f="";var p;p=d;var m=b(p);m&&(p="//"+m+encodeURIComponent(p));p=' src="'+p+'"';m=' referrerpolicy="'+l.REFERRER_POLICY+'"';v.doesPageAllowAppendedScripts()&&e&&(f="__IntegralASEventLoadHandler_"+k.asid.replace(/-/g,""),y[f]=e,f=' onload="'+f+" && "+f+'()"');p={script:['<script type="text/javascript"',f,p,m,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',
f,p,m,"></iframe>"],img:["<img",f,p,m,"/>"]}[a].join("");v.isOmid()?(f=new ad,f.isApplicable(d)?f.deployBlockingScriptIntoIframe(d):c(a,d,p,e)):("loading"!==r.getDoc().readyState&&(k.forceAppend="true"),"true"===k.forceAppend?c(a,d,p,e):I.write(p))},e=function(a,c,d){var e=!d&&A.getXHR2();(d=b(a))&&(a="//"+d+encodeURIComponent(a));e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&c&&c()},e.send()):(d=u.createImage(),c&&(d.onload=c),d.src=a.toString())},f=function(a,
c){var d=A.getXHR2(),e=b(a);e&&(a="//"+e+encodeURIComponent(a));d&&(d.open("GET",a),d.onreadystatechange=function(){if(4===d.readyState&&200===d.status&&c)try{var a=JSON.parse(d.responseText);c(a)}catch(F){}},d.send())},p=function(a,c,d,e){var f=I.createElement("script");d=d||k.contextNode.parentNode;var p=b(a);p&&(a="//"+p+encodeURIComponent(a));f.type="text/javascript";f.src=a;f.referrerPolicy=l.REFERRER_POLICY;c&&(f.onload=c);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));g.isDef(d)&&
d.appendChild(f)},m=function(a){g.isFunction(a)?a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new W(a,!0)).toString(),e(a,void 0,!0))},q=function(b,c,d,e){p(a.wrap(b,c,d,e))};n.getAggregator().on({addNode:d,send:e,exec:p,notify:m,getJSON:f,jsonp:q});return{addNode:d,send:e,exec:p,notify:m,getJSON:f,jsonp:q}},Zc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";b=encodeURI(b);n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,
function(){})},b=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){var c=n.getAggregator().request("omidVerificationClient");a=encodeURI(a);c.injectJavaScriptResource(a,b||function(){})},d=function(a){g.isFunction(a)?a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new W(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,
send:b,exec:c,notify:d,jsonp:e}},v=function(h){var a="undefined"===typeof window,b="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(z){}return b}(),d=function(){return a||g.isDef(r.getWindow().mraid)},e=function(){return!a&&g.isDef(r.getWindow().mraid)},f=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&g.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},p=function(){var b;if(!(b=
-1!==k.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===l.MEDIA_TYPE.VIDEO}catch(B){}}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===l.MEDIA_TYPE.VIDEO),c=b);return c||f()},m=function(){return!1===k.fwMonitoring||"false"===k.fwMonitoring},q=function(){return k.mobOrTab},t=function(a){return!1===g(k.customViewability).isArray()?
!1:0<g(k.customViewability).filter(function(b,c){return J.contains(c.id,a)}).length},w=function(){return t("grpm")||k.use100v},x=function(){return g.isStr(k.iasProxyPartnerDomain)&&-1!==k.iasProxyPartnerDomain.indexOf("bing")};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=W(b.document.referrer),c=d.hostname===b.location.hostname}catch(B){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return r.now()-k.birthdate},getPageTime:function(){var b=
l.NA;!a&&g.isDef(h.chrome)&&g.isDef(h.chrome.csi)&&g.isFunction(h.chrome.csi)&&(b=r.round(h.chrome.csi().pageT));return b},isVideo:p,isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=g.isFunction(k.contextNode.getAttribute)&&k.contextNode.getAttribute("data-ias-container")||k._cl_adpath)&&g.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(k._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&g.isDef(r.getWindow().avid)},
isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()&&!k.videoId},isOmidNative:function(){return(new ia).accepts()},isOmidSandboxedEnvironment:function(){return(new ia).accepts()},isOmidForWeb:function(){return(new Oa).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===l.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||
b===l.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==ja());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=g(r.getWindow().$sf).isObj(!1)&&g(r.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:q,usesIASFullyInViewCustomMetric:function(){return t("fiv")||k.use100v||!w()},usesGroupMCustomMetric:w,isCeltra:function(){var b=!1;a||(b=Pa().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return w()&&
q()},usesZeroPivCustomMetric:function(){return!1===g(k.customViewability).isArray()?!1:0<g(k.customViewability).filter(function(a,b){return g(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(F){a(F)}},isPossiblyRefreshable:function(){return!a&&!d()&&!p()&&b&&"jload"===
k.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;k.contextNode&&g.isFunction(k.contextNode.getAttribute)&&(c=k.contextNode.getAttribute("data-ias-check-tag"),d=k.contextNode.getAttribute("data-ias-check-done"),e=(e=k.contextNode.getAttribute("data-ias-callback"))&&g.isFunction(r.getWindow()[e]));var f=g.isDef(JSON)&&g.isFunction(JSON.parse);a=k.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var p=!0===k.fwMonitoring||"true"===k.fwMonitoring;f&&a&&("true"===c&&"true"!==
d&&e?(b=!0,p&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,p||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b},isBlocking:m,isBlockingSizmekTag:function(){return m()&&J.contains(k.scriptUrl,"bs.serving-sys.com")},isAMZN:function(){return g.isStr(k.iasProxyPartnerDomain)&&-1!==k.iasProxyPartnerDomain.indexOf("amazon")},isMSFT:x,isPageOnShadowDomWhitelist:function(){var a=!1;x()&&(a=!0);g.isStr(k.iasProxyPartnerDomain)&&
-1!==k.iasProxyPartnerDomain.indexOf("integral.local")&&(a=!0);return a},doesPageAllowAppendedScripts:function(){var a=!0;x()&&(a=!1);return a}}}(y),A={addEvent:function(h,a,b,c){g.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",A.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",A.mouseEnter(b),c):h.addEventListener(a,b,c):g.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){g.isDef(h.removeEventListener)?
("mouseenter"===a?(a="mouseover",b=A.mouseEnter):"mouseleave"===a&&(a="mouseout",b=A.mouseEnter),h.removeEventListener(a,b)):g.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=I.defaultView&&I.defaultView.getComputedStyle;b=b||"";d?c=(h=I.defaultView.getComputedStyle(h,
b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;g.isDef(y.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):g.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(v.isDomless())r.setTimeout(function(){h()},50);else{var b=a||(v.xDomainIframe?I:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),
a())},50)},d=this;(function(a){var e=function(){a(!0)};g.isFunction(I.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(e):d.addEvent(b,"DOMContentLoaded",e,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(h.browserIs(l.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(d){/Assignment is forbidden for sandboxed iframes/.test(d.message)&&
(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&g(h.style).isObj()&&g(a).isObj()){var b="";g(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===A.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},ba=function(h){var a,b=ba.callTypeCounter,c=[l.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},
e=function(){var a={},b=l.DT_CODES;g("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];g.isDef(d)&&0!==d&&g(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=g.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};ba.callTypeCounter={};var ec=function(h,a,b,c,d,e,f,p){var m=0,q=0,t=!1,w=function(a,e,p,h,w,x){p=p||!b.on("postDts");var B=a===l.DT_CODES.DIAGNOSTIC||
a===l.DT_CODES.ADTALK||a===l.DT_CODES.SCA||a===l.DT_CODES.XSCA||a===l.DT_CODES.EXTERNAL||a===l.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(B||"n"!==f.getCurrentLoc()))try{var M=k.dtBaseURL,F=new W(M,!0),K=r.now();n.getAggregator().trigger("preSendDt",a);M||(F.path("dt"),b.on("usedtdomain")&&F.sub("dt"));D(F,a,e);w&&w.field&&F.setParam(w.field,w.value);h||z(F,a);n.getAggregator().trigger("send",F,function(){q+=1;m=r.now()-K;g.isFunction(x)&&x()},p);a===l.DT_CODES.UNLOAD&&(t=!0);d.cleanup()}catch(N){__IntegralASDiagnosticCall("dt-"+
a,N),n.getAggregator().trigger("error",l.ERROR_CODES.PHONE_HOME)}};h=function(){t||w(l.DT_CODES.UNLOAD,-1,!0)};var x=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=k.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&w(l.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},D=function(a,b,e){var f=new ba(b);e=g.isDef(e)?e:f.enumerator;a.setParam("asId",k.asid);e={c:c.getCacheBustId(),pingTime:e,time:v.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===
b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},z=function(c,h){var g,t={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});f.fastForward();if(h===l.DT_CODES.CUSTOM||h===l.DT_CODES.UNLOAD||h===l.DT_CODES.VIDEO_EVENTS||h===l.DT_CODES.FULLY_INVIEW||h===l.DT_CODES.PING||h===l.DT_CODES.VIEWABILITY_READY||h===l.DT_CODES.ADTALK)t.clog=p,v.isVideo()&&(g=v.isOmid()?"omidVideoEventsString":"videoEventsString",(g=
n.getAggregator().request(g))&&!g.isEmpty()&&(t.ve=g));h===l.DT_CODES.UNLOAD&&(t.ndt=q);-1!==k.mode.indexOf("jsvid")&&(t.vv=n.getAggregator().request("videoVersion"));t.NULL1=b.output();t.NULL2=f.stringify(10);t.em=v.embedded;t.fr=v.friendly;t.e=a.toString();t.tt=k.mode;t.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},t);c.setParam("tv",t);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,
b,c){w(a,g.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:x,updateDtCount:function(){q++},unload:h});return{send:w,unload:h,diagnostic:x,setViewabilityMod:function(a){}}},E=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?u.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};g(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return g.isNumeric(a)||g.isUndef(a)},f=function(){return r.round(a.width)*r.round(a.height)};
(function(){var b;h!==y.parent&&(1!==h.nodeType?a=h:g.isDef(h.getBoundingClientRect)&&(b=u.getRect(h),g(a).mixin({x:g.useIfDef(b.x)||b.scrX,y:g.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&g.isNumeric(a.width)&&g.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};g(a).each(function(a,c){b[a]="x"===a||
"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:f,isMrcLarge:function(){return f()>=l.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=f()}}},u={findElementsWithSize:function(h){var a=[],b=function(c){1>u.getNodeArea(c)?g(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(A.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;
h="hidden"===A.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){n.getAggregator().trigger("error",l.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(v.isDomless())return{width:0,height:0};if(v.friendly)if(a=top.document,b=a.documentElement,a=a.body,g.isDef(top.innerWidth))h.width=top.innerWidth,
h.height=top.innerHeight;else if(g.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(g.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else g.isDef(y.outerWidth)&&(h.width=y.outerWidth,h.height=y.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;g.isDef(y.screenX)?(h=y.screenX,a=y.screenY):g.isDef(y.screenLeft)&&(h=y.screenLeft,a=y.screenTop);n.getAggregator().request("browser").browserIs(l.BROWSERS.GECKO)&&
-8==h&&-8==a&&(h+=8,a+=8);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=u.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=u.browserWindowPosition();h=h.getBoundingClientRect();g.isUndef(h.x)&&(a.x=h.left,a.y=h.top);g.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);g(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&g.isDef(h.documentElement.clientWidth)&&h.documentElement||
h.body},getPlaceholderSpan:function(){var h=I.createElement("span");g(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=v.friendly&&r.getTop().Image;return g.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};A.styleElement(a,h?{display:"none"}:b);return a},
tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var b,c,d,e=1E4,f=1E4;b=A.nodeIsAbsolutelyPositioned(h);d=!u.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!u.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!u.tagNameIs(d,"OBJECT"),c="inline"!==A.getStyle(d,"display"),b&&c&&(b=u.getRect(d),e=b.width<e?b.width:e,f=b.height<f?b.height:f);while(d.parentNode!==I&&d!==a)}return{width:r.round(e),height:r.round(f)}},hasBackgroundImage:function(h){h=
A.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyFriendlyFrame:function(h){try{var a,b,c=!1;if(h&&h.document){var d=h&&"IFRAME"===h.nodeName&&h.contentDocument;d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0)}return c}catch(e){return!1}},findChildWithLargestContent:function(h,a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=
a;a.parentNode!==h&&"inline"!==A.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;var f=!0;if("visible"===A.getStyle(e,"overflow")||"visible"===A.getStyle(e,"overflowX")&&"visible"===A.getStyle(e,"overflowY"))f=!1;e=f&&0<u.getNodeArea(a.parentNode)}!e||b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},f=null,p=function(a){var b,c,f=null,p=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var m=a[b],g=u.getNodeArea(m),l=void 0,n,k;n=m;if((k=n.parentNode===h&&
"DIV"===n.nodeName&&!e(n))&&!(k="0"===A.getStyle(n,"opacity")||"hidden"===A.getStyle(n,"visibility"))){k=n.childNodes;for(n=0;n<k.length;n++)1===k[n].nodeType&&(l=!0);k=!l}(l=!k)&&d&&"DIV"===m.nodeName&&(l=!1);n=u.isEmptyFriendlyFrame(m);g>p&&l&&!n&&(f=m,p=g)}f&&(f.hasValidSizeForMobileApp=1<p);return f}(function(b){var c,d,e,f,p=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var m=b.getElementsByTagName&&b.getElementsByTagName(e);if(m&&m.length)for(e=
0,f=m.length;e<f;e++)p.push(m[e])}return p}(h));p&&(f=c(p),f.hasValidSizeForMobileApp=p.hasValidSizeForMobileApp);return f},screenSize:function(){if(v.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{g.isDef(y.screen)&&(h={width:y.screen.width,height:y.screen.height})}catch(a){}return h},calcMonDims:function(){var h=g(u.screenSize()).mixin({scrX:0,scrY:0});g.isDef(screen.availLeft)&&(h={scrX:y.screen.availLeft,scrY:y.screen.availTop,width:y.screen.availWidth,height:y.screen.availHeight});
return h},getOurIFrameInTop:function(){for(var h,a=r.getTop(),b=r.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;v.friendly&&(h=v.embedded?(h=u.getOurIFrameInTop())&&h.frameElement:k.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!g(u.getTagsNamed("script")).findFirst(function(a,
b){var c=b.src;return g.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=g.isDef(h)&&g.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&g.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&g.isFunction(h.removeAttribute)&&
h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[k.contextNode.parentNode,r.getDoc()];v.friendly&&d.push(r.getTop().document);if(a&&v.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}g(d).each(function(a,d){try{c=u.querySelector(d,h)}catch(p){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=u.getTagsNamed("iframe",
h))&&(a=g(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&u.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&u.tagNameIs(h,"img")},
getDimensionFromStyle:function(h){var a,b=A.getStyle(h,"width");h=A.getStyle(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=u.getAttribute(h,"width");h=u.getAttribute(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,f;if(c(b))e=b;else if(f=b.children)for(d=0;d<f.length&&!(e=a(f[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===A.getStyle(a,"position"),e="hidden"!==A.getStyle(b,"overflow")&&!d;v.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=u.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==l.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||u.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=
u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===u.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Fc=function(){var a={},b=function(b){g.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=g(a).isObj()?a.errorCode:
a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},kb=function(){return{createInstance:function(a,b){return v.isDomless()?new bd:new cd(a,b)}}},cd=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=g(a).map(function(a,b){return b.val}),b.push(k.adsafeSrc,k.requrl,k.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
f=c(d),p=f&&f.length&&f.join("|"),m=k.exchList;p&&(e=g(m).map(function(a,b){return 0<=p.indexOf(J.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:l.IMPRESSION_EVENT}))}catch(q){a.add(l.ERROR_CODES.EXCHANGE_PARSING)}}}},bd=function(){return{parse:function(a){}}},ya=function(){var a={},b=function(b){var c;g.isUndef(a[b])&&(c=k.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=(new RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))")).exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},
c={es:"everySecond",sc:"usesca",ha:"usehaps",fgad:"forceKeepGoogleAdNode"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"},e=function(){var b,e;b=g(c).mapToObj(function(b,c){var d={};d[b]=g.fromBoolToNum(a[c]);return d});e=g(d).mapToObj(function(a,b){var c={};c[a]=g.fromBoolToNum(f(b));return c});e.gm=g.fromBoolToNum(v.usesGroupMCustomMetric());return g(b).mixin(e)},f=function(a){var b=k[a];return g(["integration"]).contains(a)?!!b:!0===b||"true"===b||g.isFunction(b)};
g(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:f,bootstrapperHas:function(a){a=g.isStr(a)?[a]:a;return g(a).map(function(a,b){if(g.isDef(k[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=k.sp_cdnScripts&&k.sp_cdnScripts[a];return c&&a},setReportedBootstrapFeatures:function(a,b){d[a]=b},reportedBootstrapFeatures:d,output:function(){return g(e()).toParams()}}},Zb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};
var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=l.NA;c=b?c:d;g.isDef(a)&&a!==l.NA&&-1<a&&(e=a>=c.IN_VIEW?l.IN_VIEW:a<=c.OUT_OF_VIEW?l.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?l.PARTIAL_VIEW_PLUS:l.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,f=a;a.hasValidDims()&&!a.isHidden()&&(g([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=f.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),p=Math.max(c.scrY,d.scrY),m=Math.min(c.scrX+c.width,d.scrX+d.width)-e,c=Math.min(c.scrY+
c.height,d.scrY+d.height)-p;f=E({scrX:e,scrY:p,width:0<m?m:0,height:0<c?c:0})}}),e=r.round(f.area()/a.area()*100));return e}}},Mb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=y.Uint32Array&&y.crypto&&y.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),y.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);
a=a.slice(0,32)}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return k.anId};return{getAsid:function(){return k.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return g.toBase(a,62)},getFwId:function(){return d()||k.advEntityId+"-"+k.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=
a}}},xb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(l.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},dd=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,m=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"nr_"+e,m)}:function(){var e=a.getTimeInViewInSeconds(),p=a.getTimeInViewForRts();
g.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[p])c[p]()}}}},dc=function(){return{createPingJobs:function(a,b,c,d,e){return g(b.getTimeThresholds()).map(function(b,p){return new dd(p,a,c,d,e)})}}},Qa=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-k.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));
a&&0==b.length&&g(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(g(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),f=n.getAggregator().request("mScreenEvents").getCurrentEvent(),t=Math.floor(d.time/1E3);g(b).each(function(a,b){var c;c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(f)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&
(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:l.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:l.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",l.DT_CODES.CUSTOM,t),b.rtsCallbacks&&g.isFunction(b.rtsCallbacks[l.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[l.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},Ga=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+=
"&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){var a=k.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,f,p){var m=c(),g,t,l;p=p||"ias_callback";d=""+d;(new RegExp(p)).test(d)&&(g=(new RegExp("("+p+"=)(.[^&]*)")).exec(d)[0],t=g.split("=")[1],l=J.stringToFn(t),d=a(d,g));y[m]=function(a){e(a);f&&l&&l(a);y[m]=void 0};return d=b(d,
p,m)},wrapToGlobal:function(a){var b=c();y[b]=function(c){a(c);y[b]=void 0};return b}}},gc=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+g(b).stringify(function(a,b){return a+":"+b},","),c=W(a,!0),c.appendToParamValue("adsafe_jsinfo",g.encodeInvalidUrlChars(d,k.encodeInvalidUrlChars)),c=c.toString());return c},e={jss:{isFW:!0,nodeType:v.doesPageAllowAppendedScripts()?"script":"img"},rjss:{isFW:!0,onloadCallback:Ra,nodeType:v.doesPageAllowAppendedScripts()?"script":"img"},jsi:{isFW:!0,nodeType:"iframe"},
rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",c,a.callback,!0):n.getAggregator().trigger("send",c,function(){Ra();n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,
c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,f){var p;try{p=d(c,f),a.enabled?n.getAggregator().trigger("jsonp",p,a.callback,!0):n.getAggregator().trigger("send",p,g.noop,!b.on("postMon"))}catch(t){__IntegralASDiagnosticCall("jsvidimp",t,k)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===k.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",
c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var f;try{var p;if(p=b)p=c&&g.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;p&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));f=d(a,e);n.getAggregator().trigger("send",f,g.noop,!0)}catch(D){__IntegralASDiagnosticCall("fwjsvidimp",D,k)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=
-1===a.indexOf("?")?"?":"&";return a+b},b=e[k.mode],d=!!b.isFW,g=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&k.mobFwUrl?k.mobFwUrl:a?k.adsafeSrc:k.requrl;a||(b+="?"+k.reqquery);return b}(d),t=g.indexOf("BEGIN__ADSAFE"),l=-1!==t,x=l?g.slice(t):"",a=l?g.slice(0,t):a(g);return{isFW:d,baseUrl:a,macroUrl:x,sendImpression:function(a){var d=function(){b.nodeType?n.getAggregator().trigger("addNode",b.nodeType,a,b.onloadCallback):b.impressionMethod(a)};if(c||b.manualDefer)d(a);
else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return y},getTimeoutScope:function(){return v.isDomless()&&
v.isOmid()?n.getAggregator().request("omidVerificationClient"):y},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){v.isDomless();return top},getDoc:function(){v.isDomless();return I},getIntersectionObserver:function(a,
b){v.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){v.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){v.isDomless();return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Ub=function(){return{createInstance:function(){return v.isDomless()?new ed:new fd}}},fd=function(){var a,b=!1,c=!1;n.getAggregator().request("features");var d=new ea,e=function(){return g.isDef(a.prop)?r.getDoc()[a.prop]:null},f=function(){var b=r.getWindow(),
c=function(){d.run(e())};A.addEvent(b,"focus",c,!0);A.addEvent(b,"blur",c,!0);a.event&&A.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();g.isUndef(d.hidden)?g(["moz","ms","webkit"]).each(function(e,f){var p=f+"Hidden";g.isDef(d[p])&&(a=p,c=f+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);c||(c=!0,f())},supportsVisAPI:function(){return b}}},ed=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},
supportsVisAPI:function(){return!0}}},Wb=function(){return{createInstance:function(a,b){return v.isDomless()?new gd:new hd(a,b)}}},hd=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||g.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],g.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},f=function(){var f,m=function(){var a=
{};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(F){var c=F.message,c=c.substring(c.lastIndexOf("<")+1,c.lastIndexOf(">")),d;if(d=g.isDef(c)){var e=b.getWindow();d=!1;g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(e=e.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==e&&2==e.length&&(e=e[1].split("."),3==parseInt(e[0],10)&&6>=parseInt(e[1],10)&&(3==e.length?13>=parseInt(e[2],10)&&(d=!0):d=!0)))}d&&(a.g=c)}return a},q=
{};try{q.a=encodeURIComponent(top.location.href)}catch(w){}try{q.b=encodeURIComponent(parent.location.href)}catch(w){}if(v.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(w){}try{q.e=encodeURIComponent(y.document.referrer)}catch(w){}}try{"jsi"!==k.mode&&(q.d=encodeURIComponent(y.location.href))}catch(w){}try{q.f=encodeURIComponent(k.jsref)}catch(w){}try{f=m(),q.g=encodeURIComponent(f.g||""),q.q=encodeURIComponent(f.q||""),a.isStarted()&&!f.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(w){}q=
d(q);q=e(q);f=[];for(var t in q)q.hasOwnProperty(t)&&f.push({key:t,val:q[t]});f.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=f};return{detectTopURL:f,getDetectedURLs:function(){return c?c:f()}}},gd=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Tb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",k._onSuspicious)},skipAsFraudulent:function(){return b}}},Xb=function(){var a=
[],b={},c={sl:"n"},d=0,e,f,p,m={i:0,o:0,n:0,pp:0,pm:0},q=function(a){var b=n.getAggregator().request("features");b&&b.on("recoverOmidLostTime")&&(b=m.ri,m.ri=b?b+a:a)},t=function(a){var b={},c=a.winDimensions,d=a.adDimensions;g.isDef(c)&&c.hasValidDims()&&(b.wc=c);g.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);g({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];g.isDef(e)&&(b[c]=e)});c=g(b).toParams();return""===c?
"":","+c},k=function(a,c){var d=new Vc(c);return b[a]=d},x=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},r=function(){g(c).each(function(b,c){m[c]+=a.length?p-d:p});d=p},z=function(b){a.length&&r();g(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(m[b]+=m.n);c[a]=b});a.length||r()},F=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=t(a);var e=a.omidObstructions,m={sl:x(a.viewState)};p=v.getTagTime();
z(m);m.t=p;c=g({toString:function(){g(b).each(function(a,b){b.fastForward()});return"{"+g(m).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+g(this.piv).stringify(b)+"]");a+=",as:["+g(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(m);g(c).mixin(a);c.width=d.width;c.height=d.height;g.isUndef(c.percentInView)&&(c.percentInView=l.PIV_NA);g.isUndef(c.reason)&&(c.reason="");
g.isDef(e)&&""!==e&&(c.omidObstructions=e);return f=c};(function(){k("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(g(d).each(function(a,e){g.isUndef(b)&&c<e&&(b=d[a-1])}),g.isUndef(b)&&(b=d[d.length-1]));return b});k("as",function(a){var b=l.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height});var a=n.getAggregator().request("omidAdSessionContext");a&&-1<a.recoveredTime&&q(a.recoveredTime)})();return{fastForward:function(){p=
v.getTagTime();r()},registerLocation:function(d){var f,p=!1;c.sl==x(d.viewState)&&a.length?(f=new F(d),a[a.length-1].details=f.details):(f=new F(d),a.push(f),e=d.viewState,p=!0);n.getAggregator().trigger("newScreenEvent",f);g(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(f),a[a.length-1].breakdowns[b]=c.get()):c.addState(f)});return f},stringify:function(b){var c="";a.length&&(c=g({slTimes:"{"+g(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());
return c},createViewabilityTracker:k,getCurrentLoc:function(){return x(e)},getCurrentEvent:function(){return f},setRecoveredTimeInSlTimes:q}},J={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=y,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],
g.isUndef(c)||a===d.length-1&&!g.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!g.isUndef(b));a++);return b},contains:function(a,b){return g.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return g.isFunction(a.trim)?a.trim():a.replace(" ","")}},id=function(){var a=function(){var a=function(a){return(a=u.getDimensionFromAttributes(a))&&a.width&&30<a.width&&a.height&&30<a.height};return{hasValidDimensions:function(b){var c;
(c=a(b))||(c=(b=u.getDimensionFromStyle(b))&&b.width&&30<b.width&&b.height&&30<b.height);return c},hasValidDimentionAttributes:a}}(),b=/GoogleActiveViewElement/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,f=function(a){var b=a&&u.tagNameIs(a,"a"),c=u.attributeMatches(a,"href",d);a=u.attributeMatches(a,"target",e);return b&&c&&a},p=function(a){var d=u.tagNameIs(a,"div"),e=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,
p)},getClickableImage:function(b){var c;if(b=u.traverseAndFindFirstMatchingNode(b,f))b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b);return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},Sa=function(){var a=id(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=
1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},xc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!u.isViewportVisible(c,a))return c;if(c!==d&&v.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,
isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();u.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},jd=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,g=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(g=!0);g&&!d&&(b(),e(),g=!1);c=a.innerWidth;
f=a.innerHeight})}}},tc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),f,p={};d!==c&&(f=g.stringifyTriState(d),p.res1=f,p.ps=f,p.ts=r.now(),p.psfr=g.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",p));c=d}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)jd(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,
b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},uc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,a,g(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,f;if(v.embedded)try{f=k.contextNode.parentNode,b=Sa().getDFPValue(f),f={},f.df=b.type,b.size&&(f.sz=b.size.width+"."+b.size.height),b.tag&&(f.dom=b.tag),c("dfp",f),b.size&&a&&(a.events.on("newState",d),a.start())}catch(p){n.getAggregator().trigger("error",
l.ERROR_CODES.HIDDEN)}})()},settings:{tier:l.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},wc={name:"thresholdDetector",dependencies:[],creator:function(){return{create:function(a,b,c){var d,e=b(),f=function(){var f=b();f!==e&&(c(a,f),r.clearInterval(d));e=f};e&&(c(a,e),d=r.setInterval(f,50))}}}},vc={name:"invisibleAds",dependencies:["thresholdDetector"],creator:function(a){var b={width:4,height:4},c=function(){var a=A.getStyle(r.getWindow().frameElement,"opacity");
return.2>parseFloat(a)},d=function(){return"hidden"===A.getStyle(r.getWindow().frameElement,"visibility")},e=function(a,b){var c={res1:g.stringifyTriState(b)};n.getAggregator().trigger("addThrottledProp","sca",a,g(c).toION())};try{var f=k.contextNode.parentNode,p=Sa().getDFPValue(f);u.isViewportVisible(r.getWindow(),b)&&2===p.type&&(c()&&a.create("ha2",c,e),d()&&a.create("ha3",d,e))}catch(m){}},settings:{tier:4,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},
Ta=function(a,b,c,d){var e,f=0,p=0,m=!1,q=function(){e=Math.round(u.getNodeArea(a.body));if(e>=d){for(var q,t=e+20*e/100,k=a.querySelectorAll("iframe"),k=g.fromNodeListToArray(k);k.length&&(p<t||f<c);)q=k.shift(),q=Math.round(u.getNodeArea(q)),q>=d&&(f++,p+=q);p>=t&&f>=c&&(t={va:e,bia:p,bin:f},n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,b,g(t).toION()),m=!0)}},t=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():r.execAtEndOfThread(function(){g(a).each(function(a,b){if(b.addedNodes.length){var c=
b.addedNodes[0];c&&u.isElement(c)&&u.tagNameIs(c,"IFRAME")&&g.debounce(q,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(q),!m&&g.isDef(y.MutationObserver)&&t())},sc={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ta(a,"bs1",3,100)},settings:{tier:l.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&
c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},rc={name:"BS_Browser",dependencies:[],creator:function(){var a=r.getWindow().document,b=a.body?Math.round(u.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ta(a,"bs2",10,b)},settings:{tier:l.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Rb=function(){return{createInstance:function(a){return v.isDomless()?new kd:
new ld(a)}}},ld=function(a){var b,c,d,e=new Ja,f=new ga,p=new md(e),m=new nd,q=new od,t=new pd(e,a),l=function(){g.isUndef(d)&&(d=new qd(e));return d},k=function(){e.provide({frameCollection:function(){return p},adProxy:function(){return q},adTalkMessage:function(a){return new rd(a,e)},adTalkMessageCollection:function(){return m},idMapModule:l,interFrameQuerySelector:function(a){return new sd(a)}})};return{isApplicable:function(a){return g.isDef(y.JSON)&&g.isDef(y.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||
a.isOmidForWeb())},start:function(){k();f.traverse(p.addFrame);t.startListening();t.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){t.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:t.sendAdTalkCall,getFrameMap:function(){g.isUndef(b)&&(b=new Ua(e));return b},getFrameMapIncludingPeerCase:function(){g.isUndef(c)&&(c=new Ua(e,!0));return c},getIdMap:l}},kd=function(){return{isApplicable:function(){return!1},start:function(){}}},rd=function(a,
b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var f=k.asid,d=d.tagId,p=v.embedded,g=v.friendly,q=k.birthdate;c=c.split("-")[2];var t;v.friendly?t="["+l.AD_IDENTIFIER+"-"+k.asid+"]":(t=r.getWindow(),t=t.location&&t.location.href,t='iframe[src*="'+(t&&t.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:a||{},srcAsid:f,srcTagId:d,srcIsEmbedded:p,srcIsFriendly:g,srcBirthdate:q,
iasCommonId:c,nodeSelector:t,positionStr:e,version:"0.1"}},nd=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return g(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},td=function(a,b,c,d){var e,f=a==y;e={position:b.slice(0),id:b.join("-"),isMe:f,isLeaf:!a.frames.length,adProxies:f?c:[],selfDescription:void 0,unifiedId:k.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return g(e.position).map(function(a,
b){return g.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||g.isDef(e.selfDescription)}};var p=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?g(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!g(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){g(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=
function(a,b){p(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},md=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,f,p){var g=a.request("adProxy").getAll();e=new td(e,f,g,p);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ua=function(a,b){var c=function(a,c){var e=c.adProxies,f="";if(c.isValidForMapping()){if(b)f+=d(e,c.getStringifiedPosition());else{var g;g=""+c.getStringifiedPosition();
g+=c.isMe?"*":"";g+=e.length?"."+e[0].tagId:"";f+=g}return f}},d=function(a,b){var c="";return c=a.length?c+g(a).stringify(function(a,c){return b+(k.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=g(b.list).stringify(c,"|");return g.toBase(b.getMe().unifiedId,62)+"+"+d}}},qd=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=k.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&
a.substr(0,120)+".of"+a.length},f=function(a){var e=!v.embedded,f="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var p=a.nodeSelector&&-1===a.nodeSelector.indexOf(l.AD_IDENTIFIER);g=!(g?p:!a.srcIsFriendly)}e&&f&&!g?a=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&v.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),a=!(!a||!e));return a};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;
a!==k.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},sd=function(a){var b=new ga,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return u.querySelector(c(a),b)},e=function(c,e){var f,p,t;try{p=d(c,e),p||(f=b.getFrames(!0,a),g(f).findFirst(function(a,
b){return t=d(b,e)}))}catch(w){}return p||t||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},pd=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==k.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},f=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},
p=function(){var c=l.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",c)},m=function(c,d,e){var f,m,q,t,k;try{f=a.request("frameCollection");m=a.request("adTalkMessageCollection");q=d.messageContent.self;m.add(d);var w=f.getMe();w.unifiedId>q.unifiedId&&(w.unifiedId=q.unifiedId);var v;v=r.now()-d.sentTime;d.transferDuration=v;m=t=f.getFrame(q.id);g.isUndef(m)||g.isUndef(m.selfDescription)?(t=t||f.addFrame(c.source,q.id.split("-"),d),t.addInformationFromSrc(d,
q),e()):t.addInformationFromSrc(d,q);(k=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&p()}catch(L){n.getAggregator().trigger("error",l.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:p,sendToKnownFrames:function(){(new ha).send(f)},startListening:function(){c=new La;c.listen(e,m,f)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:f}},ud=function(){var a=n.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},od=function(){var a,
b=[],c=function(a){a=new ud(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Yb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(l.BROWSERS.IE)&&A.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(l.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());
return{scrX:b,scrY:c}}}},vd=function(a,b){var c,d,e=l.NA,f=e,p=!1,m=!1,q=!1,t=!b,k=n.getAggregator().request("browser"),x=function(a,b){Qc().applies(k)&&r.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},D=function(){var b=r.getIntersectionObserver(function(a,b){var d=a.pop(),g=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(g)&&
(x(d.target,b),g=0);e=Math.min(g,100);c=d.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:l.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});t&&r.execAtEndOfThread(function(){e===l.NA&&(e=0)});b.observe(z(a));t&&r.execAtEndOfThread(function(){v.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});p=!0},z=function(b){if(!g.isUndef(b)){if(q){b=a.document;var c=b.createElement("div");g(c.style).mixin({position:"absolute",
width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[l.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(q=!0,b={bodyElement:a.document.body,document:a.document})}catch(B){m=!0}b&&null!==b.bodyElement?D():b&&b.document?A.whenReady(D,b.document):m?n.getAggregator().request("errors").add(l.ERROR_CODES.BUSTED_IFRAME_IN_IO):D()},isReady:function(){return e!==l.NA},isStarted:function(){return p},getAdNodeDimensions:function(){var a;
c&&(a=E({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},za=function(){var a=!1;(function(){A.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}},Bc={name:"loopDelay",dependencies:[],creator:za,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:l.TIERS.VIEWABILITY}},wd=function(){return{start:function(a){n.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(l.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},xd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},pb=function(a,b,c){var d=!1,e=function(){try{b.impressionIsIdentifiable()&&!d?(d=!0,n.getAggregator().trigger("notify",k._onMeasurable)):b.impressionIsIdentifiable()||__IntegralASDiagnosticCall("rtsmeas_imp_not_iden",{},k)}catch(f){__IntegralASDiagnosticCall("rtsmeas_send_noti_error",
f,k)}};return{start:function(){try{var b,d=[yd(),zd(),xd(),wd()];(b=g(d).findFirst(function(b,d){return d.isApplicable(c,a)}))?b.start(e):__IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy",{},k)}catch(m){__IntegralASDiagnosticCall("rtsmeas_start_error",m,k)}},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&g.isDef(k._onMeasurable)}}},zd=function(){return{start:function(a){Sc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,
b){var c=9<=b.getIOSVersion();return(!b.browserIs(l.BROWSERS.WEBKIT)||c)&&v.isVideo()}}},yd=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&v.isVideo()}}},Ad=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},Bd=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&g.isDef(d)&&(c=d.mediaType||l.MEDIA_TYPE.DISPLAY);return b===
c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.avidJsVersion,(c=g.isUndef(b))||(c=g.getNum(b.split(".")[0]),b=g.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Cd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(e){}}}},Dd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},da=
function(a){var b=r.getWindow(),b=b&&b.omid3p,c=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&g.isFunction(b.registerSessionObserver)&&g.isFunction(b.addEventListener));return{accepts:function(){return(d||e)&&!k.videoId},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Ed=function(a,b,c){var d=n.getAggregator().request("omidAdSessionContext"),d=d.isHtml&&d.isWeb,e,f=r.getWindow(),p=(f=f&&f.omid3p)&&
g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a;e=d?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){p.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},
Kc=function(a){return{resolve:function(){return g(a).findFirst(function(a,c){return c.environment.accepts()})}}},Hc=function(a){var b=!1,c=!1,d=!1,e=!1,f=n.getAggregator().request("omidAdSessionContext");f.queuedOutputItems=[];f.cachedEvents=[];f.cachedGeometryEventsReceived=!1;f.cachedVideoEventsReceived=!1;f.recoveredTime=-1;var p=new ka,m=n.getAggregator().request("omidAdSessionVerificationParameters"),q=n.getAggregator().request("features"),t=r.getWindow(),l=(t=t&&t.omid3p)&&g.isFunction(t.registerSessionObserver)&&
g.isFunction(t.addEventListener)?t:a,x=!1;f.omidEarlyExit=!1;f.mediaType="display";var D=!1,z=function(a,b){f.queuedOutputItems.push({code:a,value:b})},F=function(a,b,c){n.getAggregator().trigger(a,b,c)},B=function(a){n.getAggregator().trigger(a)},M=function(){if(b&&c&&(!e||d)){y.omidSupported=!0;f.hasOwnProperty("impressionType")&&z("oiet",f.impressionType);f.hasOwnProperty("creativeType")&&z("oct",f.creativeType);f.underEvaluation&&z("oef",!0);x=f.exitedOASRS=!0;var a=m&&m.IAS&&0<Object.keys(m.IAS).length;
Ba(a?m.IAS:m)}},u=function(a){function g(){return v.isOmidForWeb()||a.data.hasOwnProperty("supportsLoadedEvent")&&("true"===a.data.supportsLoadedEvent||!0===a.data.supportsLoadedEvent)&&"string"===typeof a.data.creativeType&&""!==a.data.creativeType}var p="0";if("sessionStart"===a.type){f.adSessionType=a.data.context.adSessionType;f.environment=a.data.context.environment;f.accessMode=a.data.context.accessMode;f.omidNativeInfo=a.data.context.omidNativeInfo;f.omidJsInfo=a.data.context.omidJsInfo;f.deviceInfo=
a.data.context.deviceInfo;f.app=a.data.context.app;f.supports=a.data.context.supports;f.app&&"string"===typeof f.app.appId&&-1<f.app.appId.toLowerCase().indexOf("pandora")&&(f.ignoreDivAsCandidate=!0);a.data.hasOwnProperty("contentUrl")&&(f.contentUrl=a.data.contentUrl);a.data.context.hasOwnProperty("underEvaluation")&&(f.underEvaluation=a.data.context.underEvaluation);f.isJavaScript="javascript"===f.adSessionType;f.isNative="native"===f.adSessionType||"javascript"===f.adSessionType;f.isLimitedSandbox=
"app"===f.environment?v.embedded:"full"!==a.data.context.accessMode;f.isHtml="html"===a.data.context.adSessionType;f.isWeb="web"===a.data.context.environment;f.partnerName=f.omidNativeInfo&&f.omidNativeInfo.partnerName&&f.omidNativeInfo.partnerName.toLowerCase();m=a.data.verificationParameters;f.isOmidForWebEnvironment=f.isHtml&&f.isWeb;f.element=a.data.context.videoElement||a.data.context.slotElement||null;g()?(e=!0,f.useOMID13Logic=!0,z("ohand","13"),l.addEventListener("video",P),l.addEventListener("media",
P)):z("ohand","12");f.isOmidForWebEnvironment||(f.integratedBlocking=k&&k.isResolved&&v.integratedBlockingApplies(k.mobFwUrl),f.integratedBlocking&&q&&q.on("exitOASRSEarly")&&(f.omidEarlyExit=!0,p="1",f.omidEarlyExit&&-1<k.mobFwUrl.indexOf("xmtp=v")&&(f.mediaType="video")),!a.data.mediaType||"display"!==a.data.mediaType&&"video"!==a.data.mediaType||(f.mediaType=a.data.mediaType));f.omidEarlyExit&&(c=!0,z("omtp",f.mediaType),g()&&(d=!0),"video"===f.mediaType&&(f.isVideo=!0),f.isNativeVideo=f.isNative&&
f.isVideo,f.isDisplay="display"===f.mediaType);"audio"===a.data.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=!0);for(var t=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},
{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],n,w,r,B=0;B<t.length;B++)n=t[B].root,w=t[B].field,r=t[B].code,"object"===typeof f[n]&&"undefined"!==typeof f[n][w]&&z(r,f[n][w]);z("oast",f.adSessionType);z("oacm",f.accessMode);z("oenv",f.environment);f.hasOwnProperty("contentUrl")&&z("ocon",encodeURIComponent(f.contentUrl||""));z("oerl",p);z("oses",v.getTagTime());b=
!0;M()}"sessionError"===a.type&&(p=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),x?F("addOutputItem",{output:p},"oser"):z("oser",p))},L=function(a){"impression"===a.type&&(f.omidImpressionArrived=!0,B("omidimpressionarrived"),f.mediaType="web"===f.environment?a.data.mediaType||"video":a.data.mediaType,z("omtp",f.mediaType),"audio"===a.data.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=
!0),z("oimp",v.getTagTime()),"video"===a.data.mediaType&&(f.isVideo=!0),a.data.adView&&(a.data.viewport||f.isWeb)&&(f.impressionViewabilityMeasurement={type:"geometryChange",data:{viewport:a.data.viewport,adView:a.data.adView},timestamp:a.timestamp},"undefined"===typeof f.geometryArrived&&p.checkForViewAttachmentBasedOnAdSessionType(f,a.data.adView)&&(f.geometryArrived=!0,B("omidrendgeoupdate"))),a.data.hasOwnProperty("impressionType")&&!d&&(f.impressionType=a.data.impressionType),f.isNativeVideo=
f.isNative&&"video"===a.data.mediaType,f.isDisplay="display"===a.data.mediaType,c=!0,M())},P=function(a){a&&"start"===a.type?(f.videoStartArrived=!0,B("omidrendvideostart")):"loaded"===a.type&&(z("oloa",v.getTagTime()),d=!0,f.omidLoadedArrived=!0,B("omidloadedarrived"),a.data.hasOwnProperty("creativeType")&&(f.creativeType=a.data.creativeType),"audio"===f.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=!0),a.data.hasOwnProperty("impressionType")&&(f.impressionType=a.data.impressionType),
!0!==f.omidEarlyExit||D||(F("addThrottledOutputItem","oiet",f.impressionType),F("addThrottledOutputItem","oct",f.creativeType),D=!0),M())};return{start:function(){l.registerSessionObserver(u,"IAS");l.addEventListener("impression",L)}}},Ic=function(){return{accepts:function(){return!0}}},Oa=function(){var a=n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new da(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Jc=function(){return{start:function(){Ba(k.contextNode&&
(k.contextNode.dataset.iasParameters||k.iasParameters))}}},Fd=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(e){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Gd=function(a,b){var c,d=function(a){var d,e,g;try{d=a.eventData.percentageInView,e=c&&75<=d,g={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,
y:0,width:0,height:0},shouldDelegateToDomBasedViewability:e,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",g)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Hd=function(a,b){var c=[],d=(new Date).getTime(),
e=0,f=1,p=0,m=!1,q=new Qa,t=n.getAggregator().request("omidAdSessionContext"),w=r.getWindow(),x=(w=w&&w.omid3p)&&g.isFunction(w.registerSessionObserver)&&g.isFunction(w.addEventListener)?w:a,v=!1,z=!1,F={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("rt:"+d.rt+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume+",")+("devol:"+d.devol)+
"}");return a+"]}"}},B=function(){m=!0},M=function(a){if(-1!=="|start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish|complete|pause|bufferStart|skipped|playerStateChange|loaded|volumeChange|".indexOf("|"+a.type+"|"))try{var q="",w=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),x=w-(k.birthdate||w+1),r="n",F=!1;switch(a.type){case "start":q="adVideoStart";t.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=w;p=a.data.duration;1E3<p&&(p/=1E3);e=void 0!==
a.data.mediaPlayerVolume?a.data.mediaPlayerVolume:a.data.videoPlayerVolume;f=void 0!==a.data.deviceVolume?a.data.deviceVolume:1;break;case "volumeChange":q="volumeChanged";e=void 0!==a.data.mediaPlayerVolume?a.data.mediaPlayerVolume:a.data.videoPlayerVolume;f=void 0!==a.data.deviceVolume?a.data.deviceVolume:1;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":q="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);F=!0;n.getAggregator().trigger("videoQuartileEvent",
a);break;case "pause":case "bufferStart":q="pauseAd";break;case "resume":case "bufferFinish":q="resumeAd";break;case "skipped":q="adSkipped"}e=0<e&&.1>e?.1:parseInt(10*e)/10;f=0<f&&.1>f?.1:parseInt(10*f)/10;if(""!==q){var B=n.getAggregator().request("mScreenEvents");B&&(r=B.getCurrentLoc());c.push({t:w-d,rt:x,tp:q,sl:r,ad_duration:p,volume:e,devol:f})}if("loaded"===a.type&&g.isDef(a.data)){var D=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),x=-1!==D?D+1:void 0,r=[];!0===a.data.autoPlay?
r.push("autoplayed"):r.push("clicktoplay");!0===a.data.skippable&&r.push("skippable");"fullscreen"===a.data.state&&r.push("fullscreen");var M=r.join(".");!0===m?(g.isDef(x)&&n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"vbp",x),n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"vps",M)):(g.isDef(x)&&n.getAggregator().trigger("addOutputItem",{output:x},"vbp",{type:l.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:M},"vps",{type:l.IMPRESSION_EVENT}))}"start"===
a.type&&(n.getAggregator().trigger("omidAdDuration",{ad_duration:p}),t.adDuration=p);var u;"playerStateChange"===a.type?u="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?(u="AdPlaying",z=!0):-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(u="AdPaused",z=!1);if("audio"===t.creativeType&&""!==q){var K=l.RENDER.WIDTH_THRESHOLD,A=l.RENDER.HEIGHT_THRESHOLD,q={type:"geometryChange",timestamp:w,
internallyGenerated:!0,treatAsCached:v,data:{viewport:{width:K,height:A},adView:{measuringElement:!1,percentageInView:100,geometry:{x:0,y:0,width:K,height:A,obstructions:[],reasons:[]},reasons:[]}}};q.data.adView.onScreenGeometry=q.data.adView.containerGeometry=q.data.adView.onScreenContainerGeometry=q.data.adView.geometry;z&&0!==f&&0!==e||(q.data.adView.geometry.width=q.data.adView.geometry.height=0,q.data.adView.percentageInView=0);n.getAggregator().trigger("internallyGeneratedGeometryEvent",q)}v&&
"loaded"!==a.type&&(t.cachedVideoEventsReceived=!0,"start"===a.type&&(t.cachedStartEventIndex=t.cachedEvents.length),t.cachedEvents.push(a));g.isDef(u)&&b.trigger("videoPlaybackEvent",{eventType:u,eventData:null});F&&n.getAggregator().trigger("sendDt",l.DT_CODES.VIDEO_EVENTS)}catch(Ka){__IntegralASDiagnosticCall("omidvideo",Ka,y.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",B);n.getAggregator().provide({omidVideoEventsString:F});v=!0;"audio"===t.creativeType?x.addEventListener("media",
M):x.addEventListener("video",M);v=!1;t.cachedVideoEventsChecked=!0;t.cachedVideoEventsReceived&&t.processCachedEvents();q.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Va=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?l.IN_VIEW:l.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":l.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.DISPLAY_CODE},
l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Id=function(a,b,c){var d=g.isDef(a)?a.environment:void 0,e=g.isDef(a)?a.measurementStrategy:void 0,f=function(){return g.isDef(e)};g.isDef(b)&&b.start();return{hasMeasurementStrategy:f,getScreenLocationInfo:function(a){return b.create(a)},
isImmediate:function(){return f()?d.isImmediate():!0},isMeasurable:function(){return f()?e.isMeasurable():!1},isMediaType:function(a){return f()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){f()&&d.start()},requiresDelayedViewabilityEvent:function(){f()&&b.requiresDelayedViewabilityEvent()}}},Ob=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),
b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new la(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new Jd(b);return new Id(b,c,d.isMobileAppEnvironment())}}},Pb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new da(a),e=[];if(b.accepts()){var f=new ia,g=new Kd,m=new Oa,q=n.getAggregator().request("omidAdSessionContext"),
t=new Ld(a,new C),f=[{environment:f,measurementStrategy:new Md(a,new C)},{environment:m,measurementStrategy:new Nd(new Wa,r.getWindow(),new C)},{environment:g,measurementStrategy:new Xa(new ma,r.getWindow(),new C)}],f=(f=(new la(f)).resolve())?f.measurementStrategy:{},m=new Ya(new Za(new X),new X,q.isHtml),q=new Dd(a,b,k.mode),g=new $a(t,f,new C,m),b=new Ed(a,b,k.mode),a=new ab(t,f,new Hd(a,new C),new C,m);e.push({environment:q,measurementStrategy:g});e.push({environment:b,measurementStrategy:a})}return e},
getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),d=new Bd(b),e=[];if(d.accepts()){var f=new Ad(b,d,k.mode),g=new Cd(b,d,k.mode),m;m=new Fd(b,new C);if(d.supportsAdContainerGeometry()){var q=new Od,t=new Pd,l=new Xa(new ma,r.getWindow(),new C),x=new Qd(b,new C),q=(q=(new la([{environment:q,measurementStrategy:x},{environment:t,measurementStrategy:l}])).resolve())?q.measurementStrategy:{},t=new Ya(new Za(new X),new X,t.accepts()),l=new Rd(b,new C),b=new $a(l,q,
new C,t);m=new ab(l,q,m,new C,t)}else t=new Gd(b,new C),b=new Va(t,new C),m=new bb(t,m,new C);e.push({environment:f,measurementStrategy:b});e.push({environment:g,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Sd(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Td(r.getWindow(),e),f=new Ud(r.getWindow(),new C);e.accepts()?
(d=new Vd(r.getWindow(),new C),d=new bb(f,d,new C),d={environment:e,measurementStrategy:d}):(e=new Va(f,new C),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},la=function(a){return{resolve:function(){var b=g(a).findFirst(function(a,b){return b.environment.accepts()});if(g.isDef(b))return b}}},Jd=function(a){var b=!1,c,d={winDimensions:E({scrX:0,scrY:0,width:0,height:0}),adDimensions:E({scrX:0,scrY:0,width:0,height:0}),containerDimensions:E({scrX:0,scrY:0,width:0,height:0}),method:l.NA,
viewState:l.NA,percentInView:l.PIV_NA,reason:"",obstructed:l.NA,isHidden:l.NA,tabHidden:l.NA,posViewState:l.NA,adCompCount:1},e=function(a){return a?new E({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):E({scrX:0,scrY:0,width:0,height:0})},f=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||l.NA,viewState:a.viewState||l.NA,percentInView:g.isDef(a.percentageInView)?a.percentageInView:l.PIV_NA,
reason:a.outOfViewReason||"",obstructed:g.stringifyTriState(a.isObstructed),isHidden:l.NA,tabHidden:l.NA,posViewState:a.viewState||l.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;g.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};
return{create:function(b){var e=d;if(g.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;g.isDef(a)&&g.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(f),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},bb=function(a,b,c){var d=!1,e=!1,f=!1,p,m,q,t,k=function(){if(!g.isUndef(m)){var a=
[],b,k;d?(e?(k=!1,b=100):(k=t,b=q),50>b&&a.push(l.OUT_OF_VIEW_REASONS.GEOM)):(k=!1,b=0,a.push(l.OUT_OF_VIEW_REASONS.VIDEO));f=!0;m.shouldDelegateToDomBasedViewability=k;m.percentageInView=b;m.viewState=50>b?l.OUT_OF_VIEW:l.IN_VIEW;m.outOfViewReason=a.join(".");p=m;c.trigger("measurementChanged",p)}},x=function(a){m=a;q=a.percentageInView;t=a.shouldDelegateToDomBasedViewability;k()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?
d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);k()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.VIDEO_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addScreenLocationChangedListener(x);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return f}}},
Td=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Vd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(e){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(d){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Rd=function(a,b){var c=function(a){var c=new E(a.eventData.viewport||{width:0,height:0}),e=new E(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),g=new E(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:e.getRoundedGeometry(),computedAdContainer:g.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:l.DETECTION_METHODS.AVID,
outOfViewReason:d(a.eventData.reasons)};b.trigger(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:l.OUT_OF_VIEW_REASONS.FOCUS,viewport:l.OUT_OF_VIEW_REASONS.GEOM,clipped:l.OUT_OF_VIEW_REASONS.GEOM,obstructed:l.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:l.OUT_OF_VIEW_REASONS.FOCUS,notFound:l.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",
c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ya=function(a,b,c){function d(a,b,c){c=m(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width)-c,f=Math.min(a.y+a.height,b.y+b.height)-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},p=function(a,
b){var c=v.isOmidForWeb(),d=!v.isOmidSandboxedEnvironment(),c=c&&d;return{x:c?b.x:a.x+b.x,y:c?b.y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,t){if(g.isDef(e)&&g.isDef(t)){var q=e.viewport,k=e.computedAdContainer,n=k.obstructions,z=e.omidObstructions,v=n&&0<n.length,B=e.originalAdContainer,u=t.adGeometry,K=t.adFound,y=e.detectionMethod,P=0,q={x:0,y:0,width:q.width,height:q.height},
A=p(B,u),U=e.outOfViewReason,O=v||!1,R=1>=u.width*u.height;c&&R&&(K=!1,U=U||"",K||-1!==U.indexOf(l.OUT_OF_VIEW_REASONS.GEOM)||(U=l.OUT_OF_VIEW_REASONS.GEOM+(""!==U?"."+U:"")));if(K&&0<e.percentageInView){P=d(q,k,A);v?(u=m(k,A),u=f(q,k,u),u=p(k,u),n=a.calculateObstructedArea(u,n)):n=0;P=Math.round((P-n)/(A.width*A.height)*100);v&&0===n&&(O=!1);for(var K=(new E(A)).getRoundedGeometry(),R=O,N,Q=b.getConfig(K).numberOfSlices,S=r.floor(K.height/Q)||1,n=[],u=R?a.getObstructionStatusBySlice(Q):[],fa,v=0;v<
Q;v++)N=K.y+S*v,v==Q-1&&(S=K.y+K.height-N),N={x:K.x,y:N,width:K.width,height:S},fa=d(q,k,N),N=1==fa/(N.width*N.height),n.push(N);if(R)for(k=r.min(u.length,Q),v=0;v<k;v++)n[v]=n[v]&&!u[v];k=n}else k=b.getConfig(u).defaultSliceArray;B={windowDimensions:q,containerDimensions:B,adDimensions:A,percentageInView:P,viewState:50<=P?l.IN_VIEW:l.OUT_OF_VIEW,outOfViewReason:50<=P?"":U||l.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:y,isObstructed:O,sliceStatus:k};g.isDef(z)&&""!==z&&(B.omidObstructions=z);return B}}}},
Od=function(){return{accepts:function(){return v.isAvidNative()}}},Qd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new E({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Pd=function(){return{accepts:function(){return v.isAvid()&&
!v.isAvidNative()}}},$a=function(a,b,c,d){var e,f,p,m=function(){if(g.isDef(e)&&g.isDef(f)){var a=d.calculateGeometricMeasurement(e,f);p=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;m()},t=function(a){f=a;m()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.DISPLAY_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(t);b.start()},
addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return p}}},Za=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var f,p,m,q;f=e&&0<e.length;var l;if(f){l=Math.round(d.width);var k=Math.round(d.height);p=Array(l);for(m=0;m<l;m++)p[m]=Array(k);l={matrix:p,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:l,height:k}}else l={};p=l;k=l=0;if(f){for(;l<
e.length;l++){f=e[l];var k=p,n=Math.max(k.x,f.x);p=Math.max(k.y,f.y);m=Math.min(k.x+k.width,f.x+f.width)-n;q=Math.min(k.y+k.height,f.y+f.height)-p;f=n;m=0<m?m:0;q=0<q?q:0;n=f-k.x;f=p-k.y;p=n+m;m=f+q;for(q=Math.round(n);q<Math.round(p);q++)for(n=Math.round(f);n<Math.round(m);n++)void 0!==k.matrix[q]&&void 0===k.matrix[q][n]&&(k.matrix[q][n]=1,k.obscuredPixelCount+=1);p=k}k=p.obscuredPixelCount;l=p;if(g.isUndef(l.matrix)||0===l.matrix.length)c=[];else{f=0;p=l.matrix[0].length;m=l.matrix.length;q=a.getConfig({height:p}).numberOfSlices;
for(var n=r.floor(p/q)||1,v=[],z=0;z<p;z++){q=!1;for(var u=0;u<m;u++)if(1===l.matrix[u][z]){q=!0;break}f++;q&&(z+=n-f,f=n);if(f==n||z===p-1)v.push(q),f=0}c=v}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Ld=function(a,b){var c=n.getAggregator().request("omidAdSessionContext");c.geometryChangeEvents=[];var d=null,e=!1,f=r.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new ka,q=!1,t=!1,w=function(){var a=r.getDoc().getElementById("iasbi"+
k.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(x(d),d=null)):r.setTimeout(w,50)},x=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView&&("audio"!==c.creativeType||a.internallyGenerated)){var f=q||a.treatAsCached;f&&(c.cachedGeometryEventsReceived||(c.cachedFirstGeometricIndex=c.cachedEvents.length),c.cachedGeometryEventsReceived=!0,c.cachedEvents.push(a));var p=a.data.adView,t=!!(p.measuringElement&&p.containerGeometry&&p.onScreenContainerGeometry),
x=c.cachedStartEventIndex;!f&&c.unrecoveredPlayTime&&-1<x&&50<=p.percentageInView&&"audio"!==c.creativeType&&(f=r.now()-c.cachedEvents[x].timestamp,(x=n.getAggregator().request("mScreenEvents"))&&x.setRecoveredTimeInSlTimes&&x.setRecoveredTimeInSlTimes(f));10>c.geometryChangeEvents.length&&(c.geometryChangeEvents.push(a.timestamp-k.birthdate+"."+p.percentageInView),n.getAggregator().trigger("addOutputItem",{output:c.geometryChangeEvents.join("_")},"og"));if(c.delayingViewabilityEvents)d=a,e||(e=!0,
w());else{var z=[];p.onScreenGeometry&&p.onScreenGeometry.obstructions&&0<p.onScreenGeometry.obstructions.length&&(t&&(p.onScreenContainerGeometry.obstructions=p.onScreenGeometry.obstructions),p.reasons&&-1<p.reasons.indexOf("obstructed")&&100>p.percentageInView&&(p.onScreenGeometry.obstructions=p.onScreenGeometry.obstructions.slice(0,4),g(p.onScreenGeometry.obstructions).each(function(a,b){z.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));f=v.isOmidForWeb()?
u.calcWinDims():{width:0,height:0};f=new E(a.data.viewport||f);x=new E(t?p.containerGeometry:p.geometry||{x:0,y:0,width:0,height:0});t=new E(t?p.onScreenContainerGeometry:p.onScreenGeometry||{x:0,y:0,width:0,height:0});p={viewport:f.getRoundedGeometry(),originalAdContainer:x.getRoundedGeometry(),computedAdContainer:t.getRoundedGeometry(),percentageInView:p.percentageInView,detectionMethod:l.DETECTION_METHODS.OMID,outOfViewReason:D(p.reasons),omidObstructions:z.join("_")};"undefined"===typeof c.geometryArrived&&
m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,p)}}},D=function(a){var b={inactive:l.OUT_OF_VIEW_REASONS.FOCUS,viewport:l.OUT_OF_VIEW_REASONS.GEOM,clipped:l.OUT_OF_VIEW_REASONS.GEOM,obstructed:l.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:l.OUT_OF_VIEW_REASONS.FOCUS,notFound:l.OUT_OF_VIEW_REASONS.HIDDEN,hidden:l.OUT_OF_VIEW_REASONS.HIDDEN,noWindowFocus:l.OUT_OF_VIEW_REASONS.WINDOW},
c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};c.processCachedEvents=function(){if(!t){var a="video"===c.mediaType,b=c.supports&&-1<c.supports.join().indexOf("clid"),d="full"===c.accessMode,e=!a||c.cachedVideoEventsChecked,f=c.cachedGeometryEventsChecked;if(("limited"===c.accessMode||d&&b)&&f&&e&&0<c.cachedEvents.length){var d="o",g,b=f=e=0,p=!a,m=!1,q=r.now();if(a){var l=c.cachedEvents[c.cachedFirstGeometricIndex],k=c.cachedEvents[c.cachedStartEventIndex];
l&&k&&l.timestamp>k.timestamp&&(l.timestamp=k.timestamp)}for(k=0;k<c.cachedEvents.length;k++){g=q;for(var w=-1,x=0;x<c.cachedEvents.length;x++)!c.cachedEvents[x].alreadyOrdered&&c.cachedEvents[x].timestamp<g&&(g=c.cachedEvents[x].timestamp,w=x);-1!==w&&(w=c.cachedEvents[w],w.alreadyOrdered=!0,"geometryChange"===w.type&&w.data&&w.data.adView?(e=w.data.adView.percentageInView,m=!0):p=-1<"start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(w.type),g=e&&50<=e&&p?"i":"o","o"===d&&"i"===
g?f=w.timestamp:"i"===d&&"o"===g?b+=w.timestamp-f:"i"===d&&"i"===g&&(b+=w.timestamp-f,f=w.timestamp),d=g)}t=!0;"i"===d?b+=q-f:a&&!m&&-1<c.cachedStartEventIndex&&(c.unrecoveredPlayTime=!0);0<b&&("audio"===c.creativeType&&(b=Math.min(b,q-l.timestamp)),c.recoveredTime=b,(a=n.getAggregator().request("mScreenEvents"))&&a.setRecoveredTimeInSlTimes&&(a.setRecoveredTimeInSlTimes(b),c.recoveredTime=-1))}}};return{start:function(){q=!0;void 0!==c.impressionViewabilityMeasurement&&x(c.impressionViewabilityMeasurement);
p.addEventListener("geometryChange",x);q=!1;c.cachedGeometryEventsChecked=!0;c.cachedGeometryEventsReceived&&c.processCachedEvents();n.getAggregator().on("internallyGeneratedGeometryEvent",x)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:D}},ia=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Md=function(a,b){var c=
n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=r.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new ka,q=function(){var a=r.getDoc().getElementById("iasbi"+k.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(t(d),d=null)):r.setTimeout(q,50)},t=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView&&("audio"!==c.creativeType||a.internallyGenerated))if(c.delayingViewabilityEvents)d=
a,e||(e=!0,q());else{var f=a.data.adView.geometry,g=a.data.adView.containerGeometry,p=!!f,k=a.data.adView.measuringElement&&!!g,f=(new E({x:p&&k?f.x-g.x:0,y:p&&k?f.y-g.y:0,width:p?f.width:0,height:p?f.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:p})}};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&t(c.impressionViewabilityMeasurement);p.addEventListener("geometryChange",t);n.getAggregator().on("internallyGeneratedGeometryEvent",t)},addAdGeometryMeasurementChangedListener:function(a){b.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Kd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Nd=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)&&null!==b?(m=!0,e=b.getBoundingClientRect(),
e={x:e.x||e.left,y:e.y||e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);if(b||q)d=e,c.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},ab=function(a,b,c,d,e){var f=!1,p=!1,m,q,k,r,x,v=function(){if(!(g.isUndef(q)||
g.isUndef(k)||g.isUndef(r))){x=!0;var a=e.calculateGeometricMeasurement(q,k),b=f&&p,c=f&&50<=a.percentageInView,t={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:f,isVideoPlayingInFullscreen:b,isSoundOn:!0},n=a.omidObstructions;g.isDef(n)&&""!==n&&(t.omidObstructions=n);b&&(t.percentageInView=
100);b||c?t.viewState=l.IN_VIEW:(t.viewState=l.OUT_OF_VIEW,t.outOfViewReason=a.outOfViewReason||l.OUT_OF_VIEW_REASONS.VIDEO);m=t;d.trigger("videoGeometryMeasurementChanged",m)}},z=function(a){q=a;v()},u=function(a){k=a;v()},B=function(a){r=a;a=a.eventType;"AdEnteredFullscreen"===a?p=!0:"AdExitedFullscreen"===a?p=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?f=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(f=!1);v()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:l.MEDIA_TYPE.VIDEO_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(z);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(B);c.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return x}}},Xa=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)?
(m=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);if(b||q)d=e,c.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Sd=function(a,b,c){return{accepts:function(){var d=
g(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Ud=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:l.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",
d)}catch(D){}},e=function(){var b=a.mraid;return g(b).isObj()&&g.isFunction(b.isViewable)},f=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},p=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){f()}):f())},m=function(){c||p()};return{start:function(){var b=!0;if(g.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:g.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec",
"mraid.js",m):p()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},lc=function(a,b,c){var d={},e=function(c){var d=g.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",c)});return d};(function(){c&&g(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Bb=function(){var a=new T({tiv:[1E4]}),b=g([l.IN_VIEW,l.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:l.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var c=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===c},applies:function(a,b){return a.on("abcAudit")&&925955==k.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Ab=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var g=[2E3,5E3,15E3],m=function(a,b){return-1!==(l.IN_VIEW+"|"+l.PARTIAL_VIEW_PLUS).indexOf(a[b?
"viewStateIgnoringRender":"viewState"])};c?(c=new T({tiv:d}),d=d[0]):f?(c=new T({tiv:g}),d=g[0]):(c=new T({tiv:e}),d=e[0]);e={5E3:k._onInViewMRC5,15E3:k._onInViewMRC15};e[d]=k._onInViewMRC;return{timeInViewThresholds:c,type:l.DT_CODES.PING,rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},Db=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,
5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],g=[1E3,5E3,15E3],m=[2E3,5E3,15E3],q=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(l.IN_VIEW+"|"+l.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new T({tiv:f}):d?new T({tiv:m}):new T({tiv:g});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:l.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},Cb=function(a,b){return{timeInViewThresholds:new T({tiv:[0]}),
type:l.DT_CODES.FULLY_INVIEW,rts:{0:k._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(l.IN_VIEW+"|"+l.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Fb=function(a,b){var c,d,e,f=r.getMaxNumber(),p=b.isVideo(),m=a.id;d=a.sound&&"on"===a.sound;var q=!(a.soundExcl&&"groupm_native"===a.soundExcl&&k.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;
var d=c?"percentInViewIgnoringRender":"percentInView",e,m,k,n=b.adDimensions.area();k=1===b.tabHidden;var t=r.max(b.fullPercentInView||0,b[d]),d=g(a.thresholds).findFirst(function(a,b){e=b.lb||0;m=b.ub||f;if(n>=e&&n<=m)return!0});k=!k&&t>=d.piv;b.method==l.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(k=!1);p&&(k=k&&b.isVideoPlaying,q&&(k=k&&b.isSoundOn));return k};c=new T(a);d=a.qiv;(function(){e={};var a;g.isDef(k.rts)&&g.isDef(k.rts[m])&&(a=c&&g.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],
a=g.isDef(a)?g.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():l.RTS_KEY_FOR_VQ,e[a]=k.rts[m])})();return{timeInViewThresholds:c,qivThreshold:d,type:l.DT_CODES.CUSTOM,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:q,sendOtherwiseInViewSignal:!0}},Eb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",f=b.isDeviceTypeGroupMobile()?"mobile":"desktop",
p=g(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),l=c.on("groupmCM"),k=function(a,b){var c,m,p,k,q;c=g(b.mediaTypes).contains(d);m=g(b.distributionChannels).contains(e);p=g.isDef(b.deviceGroups)?g(b.deviceGroups).contains(f):!0;k=J.contains(b.id,"fiv");q=J.contains(b.id,"groupmCM");k=!k;q&&(k=l);return k&&c&&m&&p};return{resolve:function(){var b=[],c;m&&p&&(c=g(a.customViewability).filter(k),g(c).each(function(a,c){b.push(c)}));return b}}},T=function(a){var b=
[];if(g(a.tiv).isArray())g(a.tiv).each(function(a,c){b.push(new na(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Wd;b.push(new Xd(c,parseInt(a[1].replace("%"))));b.push(new na(1E3*parseInt(a[0])))}else g.isDef(a.tiv)&&b.push(new na(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Wd=function(){var a=n.getAggregator().request("omidAdSessionContext").adDuration||-1,b=function(b){0<a||(b=g.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};
n.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},na=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Xd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},
getTimeInViewForRts:function(){return 0}}},Ea=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},mc=function(a,b,c,d){var e,f,p,m,l,k,r=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},u=function(a){var q=0,n=1===a.tabHidden,t=a.isVideoPlaying,r=a.isSoundOn,w=a.isVideoPlayingInFullscreen;g(a.sliceStatus).each(function(a,b){p(b,
n,t,w)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});z("slcVt",m);d&&(g(a.sliceStatus).each(function(a,b){v(b,n,t,w)&&r?f[a].mark():f[a].stop();l[a]=f[a].getTotalTime()}),z("slcVtVol",l));k=d&&b&&b.shouldIncludeSound?l:m;a=g(k).findFirst(function(a,b){q=Math.max(q,b);return 0>=b});g.isUndef(a)&&c.doEligibleJobs(q)},z=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},F=function(a){!e&&a.sliceStatus&&(e=[],f=[],m=[],l=[],g(a.sliceStatus).each(function(a){e.push(new Z(1));
m.push(0);d&&(f.push(new Z(1)),l.push(0))}))},B=function(a){g.isUndef(a.sliceStatus)||(e||F(a),u(a))};return{start:function(){p=d?v:r;a.addMeasurementChangedListener(B)}}},Ca=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},hc=function(a,b,c,d,e,f,g,m,k,n){var p=!1,q=v.isVideo(),t=f.request("mobileApp"),u=aa().applies(c,e),F=c.browserIs(l.BROWSERS.GECKO)||c.browserIs(l.BROWSERS.IE)&&
e.on("rattie")||u,B=v.xDomainIframe&&!F,y=new Ma(10),A=function(){e.on("viewabilityready")&&!p&&(d.send(l.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),p=!0)};f.on("delayedViewabilityReady",function(){L();A()});f.on("delayedViewabilityReadyCallOnly",A);var L=function(c){c=c||!1;try{y.start();var d,e;b.hasMeasurementStrategy()?e=(t.isMobileAppEnvironment()||v.isOmidNative())&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),t.isMobileAppEnvironment()?
(e.viewState=l.NA,e.method=l.NA,e.percentInView=l.NA):B&&(e.viewState=l.NA,e.percentInView=l.PIV_NA),q&&!v.isAvid()&&n.setVideoSpecificScreenEventFields(e));d=k.registerLocation(e);c||a.trigger("measurementChanged",e);y.stop();var p=r.round(y.getTime()/y.getCount());g.addItem({output:p},"lt",{type:l.DT_CODES.UNLOAD});return d}catch(R){f.trigger("error",l.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:L,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
q?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=v.xDomainIframe,d=a&&c.browserIs(l.BROWSERS.WEBKIT),e=a&&c.browserIs(l.BROWSERS.MSEDGE),a=a&&u,d=!d&&!e&&!a;return t.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){t.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},Cc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features",
"context","browser"],creator:function(a,b,c,d){var e,f=Yd(c),p=[new Zd,new $d(f)],m=function(){return g(p).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},q=function(a){"sessionFinish"===a.type&&(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"osef"),n.getAggregator().trigger("adSessionComplete"))},t=function(a){A.addEvent(y,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},w=function(){var a=new ba(l.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",
a.callType,a.enumerator,function(){var a={id:k.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Wc(a.checkScreenLoc,f.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),v.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(q,
"IAS"):c?t("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):t("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||w();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:l.TIERS.VIEWABILITY}},Yd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},$d=function(a){var b,c,
d,e,f,g=function(m){d&&!f&&1>m?(f=!0,r.setTimeout(function(){g(m)},1E3)):(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){g(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",g);n.getAggregator().on("newScreenEvent",m)}}},Zd=function(){var a,b,c,d=!1,e=function(f){if(c&&
!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},f=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=aa();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",f)}}},he=function(a,b,c,d,e,f){var p,m,q,t,w,x,D,z,F,B=u.getElementsWindow(b);u.getElementsDocument(b);
n.getAggregator().provide("iframeCalculatorHelper",ae(B));var M=be(b,d),K=l.AD_IDENTIFIER+"-"+k.asid,L=!1,P=E({}),C=v.isDeviceTypeGroupMobile(),G=v.usesGroupMCustomMetricMobilePassThru(),J,H=function(){if(!p)if(p=M.calcDims(b,d,q),k.autotagSizeSet&&1<k.adWidth&&1<k.adHeight&&(p.set("width",k.adWidth),p.set("height",k.adHeight)),c===l.DETECTION_METHODS.VIDEO&&v.embedded){var a=p,e=(new E(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(Ka){n.getAggregator().trigger("error",
l.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===l.DETECTION_METHODS.AD_PLACEHOLDER&&p.treatAsPlaceholder();return p},N=function(){var b,d=v.xDomainIframe&&L;b=C&&L&&q.isReady();b=d||b;d=M.getClippedDims&&(c===l.DETECTION_METHODS.VIDEO&&v.embedded||v.isCeltra());b?m=q.getPiv():g.isUndef(m)&&(b=!C&&(v.friendly||g.isDef(y.mozInnerScreenX))&&e.on("offscreen"),z=H(),D=new E(u.calcWinDims()),x=new E(b?u.calcMonDims():{}),F=d?M.getClippedDims():P,m=a.calcPercentInView(z,D,x,F));return m},Q=function(){return a.calcInitialViewState(N())},
S=function(){return b===y?!1:H().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),f=b===d,g=e.body,m=n.getAggregator(),p=new aa,k=m.request("browser"),x=m.request("features"),m=m.request("context"),u=!v.xDomainIframe,e=f&&g?e.body:b;J=v.friendlyIframe?d.frameElement:e;A.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});A.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});p.applies(k,x,m)?(q=vd(b,u),q.start(),L=!0,G&&c!==l.DETECTION_METHODS.AD_PLACEHOLDER&&
(d=new ce(H().getRounded()),p=new de,p=new ee(q.getObservedNode(),p),t=new fe(d.getSlices(),p))):G&&(w=new ge(a))})();return{mark:function(){u.setAttributeOf(J,K,"")},cleanup:function(){u.removeAttributeOf(J,K)},isNode:function(a){return b===a},isHidden:S,isObstructed:function(){return!1},getDims:H,getPercentInView:N,getLocationState:Q,getOnPageViewability:function(){return S()?l.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return M.allowsOptimization?p:E(d)},
refresh:function(){F=z=D=x=m=p=void 0;if(f){var a,c;if(!v.isDomless()&&(c=b.parentNode)){for(;b!==y&&c&&c!==I&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;t&&t.isReadyToMeasure()?a=t.getSliceStatus():v.friendly&&w&&g.isDef(z)&&(a=w.getSliceStatus(z,D,x,F));return a}}},ie=function(a,b){var c=[],d,e=g([]),f=function(){return c[0]&&c[0].getDetectionMethod()===l.DETECTION_METHODS.AD_PLACEHOLDER},p=function(m,p,k,q){var t=f()||0===c.length;
m=he(a,m,p,k,b,q);f()&&(k=c.shift(),e=g(c),k.cleanup(),d=void 0);c.push(m);e=g(c);t&&m.mark();t&&p!==l.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var g;g=e.getDims();g.hasValidDims()&&(a=e.getPercentInView(),b=a!==l.NA,g=g.area(),c+=g,f+=a/100*g)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},k=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},t=function(a){var b;
b=m();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):l.PIV_NA;if(isNaN(b)||k(a))b=0;return b},w=function(c){var d=b.bootstrapOn("mobOrTab"),d=m().totalArea>=l.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!v.isVideo();return a.calcInitialViewState(t(c),d)},x=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},u=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){g(a).each(function(a,b){-1===x(b)&&p(b,l.DETECTION_METHODS.MUTATION)})});
n.getAggregator().on("adComponentRemoved",function(a){g(a).each(function(a,b){var d=x(b);-1<d&&c.splice(d,1)})});return{getDims:u("getDims"),isObstructed:u("isObstructed"),getDetectionMethod:u("getDetectionMethod"),getContainerDims:u("getContainerDims"),getViewState:w,getViewStateIgnoringRender:function(){return w(!0)},getPercentInView:t,getPercentInViewIgnoringRender:function(){return t(!0)},isHidden:u("isHidden"),isUsingPlaceholder:f,hasAd:function(){return!!c.length},refresh:function(){d=void 0;
e.each(function(a,b){b.refresh()})},addAdComponent:p,clearCollection:function(){e.each(function(a,b){b.cleanup()});c=[];e=g([]);d=void 0},getOutOfViewReasons:function(a){var b,e=[],f=c[0],g=l.OUT_OF_VIEW_REASONS;f&&(b=d||w(),k(a)?e.push(g.RENDER):b!==l.OUT_OF_VIEW&&b!==l.PARTIAL_VIEW_MINUS||e.push(g.GEOM),f.isHidden()&&e.push(g.HIDDEN),f.isObstructed()&&e.push(g.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:u("getSliceStatus")}},
je=function(a){var b=!1;if(!g.isUndef(y.MutationObserver)){var c=new y.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&g(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);A.whenReady(function(){try{c.observe(I.body,
{attributes:!0,childList:!0,characterData:!0})}catch(e){a.add(l.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},qe=function(a,b){var c=[ke(),le()],d=[Wa(),ma(),me(),oa(),ne(),oe(),pe()],c=c.concat(d);return g(c).findFirst(function(c,d){return d.isApplicable(a,b)})},oa=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||ja();var c=u.crossQuerySelector(ja().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},re=function(a,b){var c,d=u.findChildWithLargestContent(a||k.contextNode.parentNode,b);1<u.getNodeArea(d)&&!d[l.IAS_DETECTOR]&&(c=d);return c},Wa=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.OMID,isApplicable:function(){return v.isOmidForWeb()&&
!v.isOmidNative()},find:function(){a.element||a.queuedOutputItems.push({code:"oea",value:!0});return a.element},getAdContainer:function(){return a.element&&a.element.parentNode},allowForAdContainerChange:!0}},oe=function(){return{detectionMethod:l.DETECTION_METHODS.IFRAME,find:function(){return y},isApplicable:function(){return v.embedded},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},se=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=g(b).findFirst(function(a,
b){return J.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return b};return{detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=g(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return u.crossQuerySelector(b,!0)})}catch(p){}return a}}},te=function(){return{isApplicable:function(a,b){var c;
try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&J.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},cb=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a=u.crossQuerySelector("iframe[id*='ebAd'][id$='"+d()+"']",!0);
return a&&a.id},f=function(){var a;b||(a=e()?e():(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id,b=a&&"#"+a);return b};return{detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),e=a.friendlyIframe&&r.getWindow().frameElement,e=e&&E(e).isOneByOne(),m=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=r.getDoc().scripts;return g(b).findFirst(function(b,
c){return g(a).findFirst(function(a,b){return J.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!g(c.EBG.ads).isEmpty();return b.on("sizmek")&&m&&c&&e&&d()&&f()},getCssSelector:f}},ja=function(){var a,b=n.getAggregator().request("features");a||(a=[cb(),te(),se()]);return g(a).findFirst(function(a,d){return d.isApplicable(v,b)})},ne=function(){var a,b=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:l.DETECTION_METHODS.VENDOR_CELTRA,
isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Pa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Pa=function(){var a,b=function(){var b;(b=k.contextNode.parentNode)&&(J.contains(b.className,"celtra-ad-v3")||J.contains(b.className,"celtra-ad-v4"))?a=b:(b=b&&(u.querySelector(b,".celtra-ad-v3")||u.querySelector(b,
".celtra-ad-v4")))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ma=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=u.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[l.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},db=new (function(){function a(){this.cachedIsFoundOnPage=
!1}a.prototype.getDocument=function(){var a;try{a=r.getDoc()}catch(c){}return a};Object.defineProperty(a.prototype,"isIE11",{get:function(){var a=this.getDocument();return a&&a.documentMode},enumerable:!1,configurable:!0});a.prototype.hasBrowserSupport=function(){var a=!1,c=this.getDocument(),d=!v.isDomless(),c=!(this.isIE11||!c||"function"!==typeof c.body.attachShadow);d&&c&&(a=!0);return a};a.prototype.isFoundOnPage=function(a){var b=r.getDoc(),b=a||b.body;a=!1;if(this.cachedIsFoundOnPage)a=!0;
else if(this.hasBrowserSupport())if(b.shadowRoot)this.cachedIsFoundOnPage=a=!0;else for(var b=b.querySelectorAll("*"),d=0;d<b.length;d++){var e=b[d];if(e&&e.shadowRoot){this.cachedIsFoundOnPage=a=!0;break}}else a=!1;return a};a.prototype.querySelector=function(a){var b=a.customRootElement,d=a.selector;a=r.getDoc();var b=b||a.body,e,f=function(a){var b=d&&d.replace("#","");if(!e)for(var c=0;c<a.length;c++){var g=a[c];g&&g.id===b&&(e=g);g&&g.shadowRoot&&f(g.shadowRoot.querySelectorAll("*"))}};b.shadowRoot&&
f(b.shadowRoot.querySelectorAll("*"));f(b.querySelectorAll("*"));return e};return a}()),le=function(){var a,b=function(a){var b=g.isFunction(a.contextNode.getAttribute)&&a.contextNode.getAttribute("data-ias-container");return b&&"#"+b||a._cl_adpath},c=function(){var a=n.getAggregator().request("features"),b=k&&4===k.integration;return a.on("forceKeepGoogleAdNode")?!b:!0};return{getAdSelectorId:b,detectionMethod:l.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return v.isSpecifiedAd()},find:function(){var d=
b(k),e=u.crossQuerySelector(d),f=v.isPageOnShadowDomWhitelist(),g;g=e;g=c()&&1>u.getNodeArea(g);e?(a=u.getParent(e),g&&(a=e,e=u.findElementsWithSize(e))):f&&db.isFoundOnPage()&&(e=db.querySelector({selector:d}),a=u.getParent(e));return e},getAdContainer:function(){return a},allowForAdContainerChange:!0,shouldValidateAdNode:c}},ke=function(){var a;return{detectionMethod:l.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return v.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(k._cl_adpath)[1].split(",").forEach(function(d){if(c=
u.crossQuerySelector(d))a=u.getParent(c),1>u.getNodeArea(c)&&(a=c,c=u.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},pe=function(){return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:re,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},me=function(){return{detectionMethod:l.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,
isApplicable:v.isVideo,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},be=function(a,b){var c,d;c=[ue(),ve(),we()];d=g(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=xe();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},we=function(){return{calcDims:function(a,b){var c,d,e=new E(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:
d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(v.isSpecifiedAd()||v.isBustedIframe())&&u.nodeIsInWindow(a,r.getTop());a=!u.elementIsEmbedded(a);return b||a}}},ve=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(v.isSpecifiedAd()||v.isBustedIframe())&&u.elementIsEmbedded(a)}}},ue=function(){var a=n.getAggregator().request("iframeCalculatorHelper");
return{calcDims:function(b){var c=a.calcDims();b=(new E(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var b=(v.isSpecifiedAd()||v.isBustedIframe())&&v.embedded&&!u.nodeIsInWindow(c,r.getTop()),e=v.isCeltra()&&u.elementIsEmbedded(a);return b||e}}},xe=function(){var a;return{calcDims:function(b,c,d){d=g.isDef(d)?d.getAdNodeDimensions():void 0;a&&g.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=
aa();var b=n.getAggregator(),d=b.request("browser"),e=b.request("features"),b=b.request("context");return b.isDeviceTypeGroupMobile()&&a.applies(d,e,b)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},ae=function(a){var b,c,d,e=n.getAggregator().request("features"),f=n.getAggregator().request("browser");a=a||r.getWindow();var p=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];
f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(B){n.getAggregator().trigger("error",l.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&p(b.parent,c)}return c},m=function(){var m,k={};try{var w,x,D,z,y,B,A=r.getMaxNumber(),K=r.getMaxNumber();v.friendly?(w=p(),D=w.left,z=w.top,A=w.width,K=w.height,x=u.browserWindowPosition(),y=x.scrX+D,B=x.scrY+z):e.on("rattie")&&f.browserIs(l.BROWSERS.IE)?(B=y=0,d=d||
n.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),y=c.scrX,B=c.scrY):g.isDef(a.mozInnerScreenX)&&(y=r.round(a.mozInnerScreenX),B=r.round(a.mozInnerScreenY));var k={scrX:y,scrY:B,iFrameClippingWidth:A,iFrameClippingHeight:K},L,E,C=b||u.getIeDimObj(a);b=C;g.isDef(a.innerWidth)?(L=a.innerWidth,E=a.innerHeight):C&&g.isDef(C.clientWidth)?(L=C.clientWidth,E=C.clientHeight,0===L&&0<C.offsetWidth&&(L=C.offsetWidth),0===E&&0<C.offsetHeight&&(E=C.offsetHeight)):a.frameElement&&
g.isDef(a.frameElement.clientWidth)&&(L=a.frameElement.clientWidth,E=a.frameElement.clientHeight);m=L;k.height=E;k.width=m}catch(U){n.getAggregator().trigger("error",l.ERROR_CODES.GET_AD_DIMENSIONS)}return k};return{calcDims:function(){return new E(m())},getClippedDims:function(){var a=m();return new E({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},bc=function(){return{createInstance:function(a,b,c){return v.isDomless()?new ye:new ze(a,b,c)}}},ze=function(a,
b,c){var d,e,f=n.getAggregator().request("browser"),p=k&&k.contextNode&&k.contextNode.parentNode?k.contextNode.parentNode:null,m=ie(b,c),q=function(){var a,b,e;d=d||qe(v,c);a=d.find();v.friendlyIframe&&v.isBlockingSizmekTag()&&D(a);!a&&d.usePlaceholder?(t(),v.isDeviceTypeGroupMobile()&&f.hasMutationObserver()&&r.getMutationObserver(w).observe(p,{childList:!0})):a&&(a=g(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,g(a).each(function(a,c){m.addAdComponent(c,g.resolve(d.detectionMethod),
b,e)}))},t=function(){var a;m.hasAd()||(a=u.getPlaceholderSpan(),p.insertBefore(a,k.contextNode.nextSibling),m.addAdComponent(a,l.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))},w=function(a,b){var c=!1;g(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())},x=function(a,b){var e=!1;g(a).each(function(a,b){switch(b.type){case "childList":g(b.addedNodes).each(function(a,b){b.nodeName&&"script"===b.nodeName.toLowerCase()&&
(e=!0)});break;case "attributes":1>=b.target.height*b.target.width&&(e=!0)}});var f;e&&(f=cb(),f.isApplicable(v,c)&&(b.disconnect(),d=oa(),m.clearCollection(),n.getAggregator().trigger("nodesAdded")),setTimeout(function(){f.isApplicable(v,c)&&(b.disconnect(),d=oa(),m.clearCollection(),n.getAggregator().trigger("nodesAdded"))},0))},D=function(a){var b,c;if(!e&&f.hasMutationObserver()&&u.isWindow(a))try{e=r.getMutationObserver(x),b=a&&a.frameElement,c=a&&a.document&&a.document.body,e.observe(b,{attributes:!0,
attributeFilter:["height","width"]}),e.observe(c,{childList:!0,subtree:!0})}catch(M){}};je(a);return{find:function(){m.isUsingPlaceholder()||!m.hasAd()?q():m.refresh();return m},getDetectionMethod:function(){}}},ye=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Kb=function(a){var b,c=[],d=a||y,e=function(){return"stub"===g().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==g().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,
c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(t){__IntegralASDiagnosticCall("avidadsessioncontext",t,y.bootstrapper)}else"object"===typeof a&&(b=a);return b};v.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},Jb=function(a){var b=new Ae,c=new Be,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=n.getAggregator().request("omidAdSessionContext"),g=v.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var m;if(!(m=g||v.isAvid()||v.isAvidNative())){var k;if(k=!f&&a.bootstrapOn("mobOrTab")&&a.bootstrapOn("mobAppWebview")){var g="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
t,f=!1;for(t=0;t<g.length;t++)if(-1<d.indexOf(g[t].toLowerCase())){f=!0;break}k=!f}m=k}if(m&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)pa[pa.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(w){n.getAggregator().trigger("error",l.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Ce={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(v.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(d){}if(v.embedded){try{c.push(parent.document.referrer)}catch(d){}try{c.push(I.referrer)}catch(d){}}try{"jsi"!==k.mode&&c.push(y.location.href)}catch(d){}try{c.push(k.jsref)}catch(d){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!g(a).findFirst(function(a,e){var d=!1,p,m,k="mobfox"===e?c:[b];for(m=0;m<k.length;m++){p=k[m];var l="string"===typeof e?[e]:e;if(g(l).isArray()&&l)for(var n=0;n<l.length&&(d=-1<p.indexOf(l[n]),!1!==d);n++);if(d)break}return d})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,c){var b;b=!1;var e=r.getWindow();g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(b=(b=e.navigator.userAgent)&&-1!==b.indexOf(c));return b})}},
javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!g(a).findFirst(function(a,c){return g.isDef(J.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return g.isDef(a)&&-1!==a.indexOf(c)})})}}},eb=function(){var a=function(a,c){var b,e=Ce[a];e.detect(c)&&(b=e.STRINGIFIED_METHOD);return b};return{process:function(b){return g(b).map(a).join("")}}},De=[{STRINGIFIED_APPDET:"omid",
detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",
detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",
safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",".android"],["carsales",
".ios"]]}}],Ae=function(){var a,b=function(a,b){var c,d=eb().process(b.detectionRules);d&&(c=d+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){a=g(De).map(b);a=0<a.length?a[0]:"";""===a&&k.hasOwnProperty("serverSideAppDetection")&&0!==k.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},Be=function(){var a=[],b=[],c=function(b,c){var d,e=eb().process(c.detectionRules);e&&(a.push(c.STRINGIFIED_SDK+"*"+e),d=c);return d};return{detect:function(){b=
g(pa).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&g.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},pa=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,
detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",
safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},
{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],ce=function(a){var b=[];(function(){if(10>
a.height)b.push({geometry:new Y(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new Y(0,a.width,e,e+(f<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},X=function(){var a=l.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=l.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},fe=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();g(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value();c.push(new Y(Math.max(d.leftX,f.leftX),Math.min(d.rightX,f.rightX),Math.max(d.topY,f.topY),Math.min(d.bottomY,f.bottomY)))}});return c},e=function(a,b){var c=0,e=d(a,b),f;g(e).each(function(a,
b){f=b.value();c+=f.area});return c},f=function(){var b=0;c.mbs=[];g(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){g(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=f();c.mbrd=1;a!==c.mbp&&c.mbivs.push([v.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];g(a).each(function(a,
b){c.mbpr.push(l.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];g(a).each(function(a,c){b.push(c.isInView)});return b}}},ge=function(a){var b=X();return{getSliceStatus:function(c,d,e,f){var g,m=[];g=c.getRounded();c=g.height;var k=g.scrY,l=new E({scrX:g.scrX,width:g.width}),n=b.getConfig(g).numberOfSlices;l.set("height",r.floor(c/n));for(var v=0;v<n;v++)l.set("scrY",r.ceil(k+c/n*v)),g=100===a.calcPercentInView(l,d,e,f),m.push(g);return m}}},
Y=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),g=Math.ceil(c),m=Math.ceil(d),k=f-e,l=m-g,n=k*l,r=function(){return{leftX:e,rightX:f,topY:g,bottomY:m,width:k,height:l,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},de=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},ee=function(a,b){var c,d=[],e=[],f=function(){g(d).each(function(a,b){b(e)})},k=function(){var a=
[];g(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),g=d.boundingClientRect;b=g.width;var m=d.intersectionRatio,d=d.intersectionRect,l=d.left-g.left,g=d.top-g.top,g=new Y(l,l+d.width,g,g+d.height);e.push(g);g=k();e=[];for(d=0;g.length>d&&g.length!==d+1;d++)e.push(new Y(0,b,g[d],g[d+1]));f();1===m&&(c.unobserve(a),c.disconnect())},
{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ka=function(){var a=function(a){var b=!1;Ee.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return b.omidNativeInfo&&b.omidNativeInfo.partnerName&&a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,
checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Ee=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Fe=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",
function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+k.videoId;"failed"===a.action&&(c=!0);if(b&&g.isDef(b.blockAd))b.blockAd(c);else if(b&&g.isDef(b[d]))b[d](c)})}}},Ge=function(a,b){var c=n.getAggregator().request("videoTranslator").translate(a.messageType),d=function(a){a=a.eventData||{};a=g({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a),e=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["".concat("x_").concat(a)]=
b;return c};a&&(b=g(a).mapToObj(c));return b}(a),f={t:a.time-k.birthdate,tp:c,sl:b};g(f).mixin(d);g(f).mixin(e);var l=g({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(c)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(c)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===c||"initAd"===c)&&("fullscreen"===d.viewMode||d.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===
c&&"normal"===d.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(c)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(c)},getVolume:function(a){return a.getVolumeFromContext(d)},updateScreenLoc:function(a){f.sl=a;l.sl=a},trigger:function(){"adImpression"===c?n.getAggregator().persistentTrigger(c,d,e):n.getAggregator().trigger(c,d,e)},toString:function(){return"{"+g(f).toParams()+
"}"}}).mixin(f);return l},He=function(){var a=[];return{registerEvent:function(b,c){var d=Ge(b,c);a.push(d);return d},toString:function(){return"{"+g({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Ie=function(){var a,b,c,d=function(d){c=g.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",l.DT_CODES.QUARTILE_FULLY_INVIEW)},f=function(){b=!0;d()},
k=function(a){a=(new fb).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:f,adImpression:f,volumeChanged:k,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Je=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},fb=function(){return{getVolumeFromContext:function(a){var b,c=-1;g.isDef(a)&&(g.isDef(a.volume)?c=a.volume:g.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},Hb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,f,p,m,q=[],t=l.OUT_OF_VIEW,u=!1,x=!1,y=!1,z=!0,F=new He,B=Ie(),C=new Fe,E=new fb,G=new Qa,H=function(b){var d;u=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(Te){e={}}e.id==a&&(d=F.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(x=!0,t=y?l.IN_VIEW:!1):d.indicatesNotPlaying()?(x=!1,t=l.OUT_OF_VIEW):d.indicatesFullscreen()?(y=!0,t=x?l.IN_VIEW:l.OUT_OF_VIEW):d.indicatesNormalSize()&&(y=!1,t=x?!1:l.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?z=!0:0===b&&(z=!1));q.push(d);m&&N();return d},J=function(b){var c,f,l=Ga().wrapToGlobal(H),m=function(a){g.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{f=b[e]||
b.getIasVidBridgeVersion,c=g.isFunction(f)&&"2"===f.call(b)?unescape(b[d].call(b,a,l)):unescape(b[d].call(b,a)),u=!0,m(c||"n")}catch(Nc){__IntegralASDiagnosticCall("handshakefailure",Nc,k)}},I=function(){var c=function(a){return g(g(a).toArray()).findFirst(function(a,b){return g.isFunction(b[d])})};f||(g(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return f=c(d)}),!f&&b.on("novidnodeerr")&&.1>Math.random()&&
__IntegralASDiagnosticCall("novidnode",{message:"node not found*10"},k));return f},O=function(){var a=I();a&&!u&&J(a);return a},R=function(a){a=E.getVolumeFromContext(a);z=g.isDef(a)?0<a:!1},N=function(){G.init();g(q).each(function(a,b){b&&(g.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",l.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",
b)))});q=[];m=!0};(function(){A.addEvent(r.getWindow(),"message",function(a){H(a)});n.getAggregator().on({volumeChanged:R});n.getAggregator().provide({videoEventsString:F,videoVersion:function(){var a,b=O();try{a=b.getVersion()}catch(fa){a=-1,n.getAggregator().trigger("error",l.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return p=p||new Je},adNode:O});O();C.listenForResult();B.isApplicable(v)&&B.start(c)})();return{findAdNode:O,getViewStateOverride:function(){return t},
isHandshakeComplete:function(){return u},triggerInitializationEvents:N,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===l.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(t){if(t===l.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=l.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:t;a.isVideoPlaying=t===l.IN_VIEW}y&&x&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Ke=function(){return new ca(l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,
l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},ob=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",l.DT_CODES.PERFORMANCE)}),a=!1},f=function(){b=new Na;d=0;e(!0);b.start()},k=function(d,e,k,l){d=c[d];l?(g.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||f();a=!0},m=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||f();a=!0},q=function(b){g(c).each(function(d,e){var f=c[d],
k={type:b,oneTime:!0,minDt:!0,asION:!0};g(f).isEmpty()||(n.getAggregator().trigger("addOutputItem",{output:f},d,k),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){q(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",k);n.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){g(a).each(function(a,b){c[b]={}})}}},ub=function(){var a={},b=function(b){a[b]||(a[b]=new Ma(1,k.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=
b(a);c.stop();n.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Le=function(){return new ca(l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},$b=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(g(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];
if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},ca=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},f=function(){var a,b={};e();g(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return g(f()).toION()},
getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},ac=function(){function a(){}a.build=function(){var a=[];a.push(new ca(l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:gb,av3:gb,jvw:Le,avw:Ke};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),gb=function(){return new ca(l.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},
V={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",V.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){A.addEvent(y,"load",function(){n.getAggregator().trigger("measureTime",V.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Na;a.onTick({4:function(){n.getAggregator().trigger("markTime",V.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",V.IDS.IN_BROWSER_DELAY)}});a.start()}},
H={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(p){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(m){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=H.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),A.removeEvent(r.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",l.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+
k.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,a,b)}},pc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&H.send("ccd",g(a).toION())}(function(){var b=H.isFrameworkAvailable("__uspapi","__uspapiLocator");H.send("cca",!!b);if(b){var c,d;g.isFunction(b)?b("getUSPData",1,a):(c={__uspapiCall:{command:"getUSPData",version:1,callId:H.getCallId()}},d=H.getMessageHandler("__uspapiReturn",a),A.addEvent(r.getWindow(),"message",d),
b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},oc={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendorConsents)&&g.isDef(a.vendorConsents[278])?a.vendorConsents[278]:void 0,b={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(b),glbl:g.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)},d=a&&a.tcString;n.getAggregator().provide("tcString",
function(){return d});H.send("gcd",g(b).toION())}(function(){var b=H.isFrameworkAvailable("__cmp","__cmpLocator");H.send("gca",!!b);if(b){var c,d;g.isFunction(b)?b("getVendorConsents",[278],a):(c={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:H.getCallId()}},d=H.getMessageHandler("__cmpReturn",a),A.addEvent(r.getWindow(),"message",d),b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},qc={name:"GDPRV2ConsentDetector",
dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendor)&&g.isDef(a.vendor.consents)&&g.isDef(a.vendor.consents[278])?a.vendor.consents[278]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(b)};H.send("gcd2",g(a).toION())}(function(){var b=H.isFrameworkAvailable("__tcfapi","__tcfapiLocator");H.send("gca2",!!b);if(b){var c,d;g.isFunction(b)?b("getTCData",2,a):(c={__tcfapiCall:{command:"getTCData",parameter:[278],callId:H.getCallId(),version:2}},
d=H.getMessageHandler("__tcfapiReturn",a),A.addEvent(r.getWindow(),"message",d),b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},yc={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,b="pmdetector"+k.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();A.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",
l.DT_SLOT.IM,"pom",g.stringifyTriState(a));A.removeEvent(d,"message",c)})})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},zc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"sf",g.stringifyTriState(v.isSafeFrame()))},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},nb=function(a,b,c,d,e,f,p){var m=function(a,b){return isNaN(a)||
0>a||""===a?b:a},q=function(a){return"&"===a.slice(-1)?"":"&"};return{send:function(t){try{var r,u=d.baseUrl,y,z,A=f.getDocumentMode();"number"===typeof A?(z=2E3,8===A?z=4E3:8<A&&(z=8E3)):z=m(k.sp_imp_maxLength,2E3);y=z;if(v.integratedBlockingApplies(u)){z=u;var B=n.getAggregator().request("mobileApp"),C=B&&B.isMobileAppEnvironment&&B.isMobileAppEnvironment(),E=k.contextNode.getAttribute("data-ias-container"),G=k.contextNode.getAttribute("data-ias-callback"),B=z+"adContainerId="+E+"&cbFunctionName="+
G,B=C?B.replace("monitoring","blocking"):B.replace("skeleton.js",k.integration+".js"),H=k.protocol+":"+k.staticServer+k.integration+"a.js",J=k.protocol+":"+k.staticServer+k.integration+".js",u=B+"&true_pb="+encodeURIComponent(k.passback)+(C?"&redirectUrl="+encodeURIComponent(J):"")+(C?"&passback=":"&adsafe_pb=")+encodeURIComponent(H)+"&"}var C=u=u.replace(l.UNIQUE_ID_TOKEN,k.asid),I=u.length,O,R,N=m(k.sp_imp_jsInfo_minLength,0),H="";try{O=y-I-N,0<O&&(R=Me(t,O,14,b.on("partialUrls")),H+=R.join("&"))}catch(S){a.add(l.ERROR_CODES.IMPRESSION_URLS)}u=
C+H;t=u+=q(u);I="";try{I+=Ne(y-u.length,"adsafe_jsinfo=",a,b,c,e,f,p)}catch(S){a.add(l.ERROR_CODES.JSINFO),I+="adsafe_jsinfo=e:"+a.toString()}u=t+I;d.macroUrl&&(u+=q(u),u+=d.macroUrl);k.staticFwjsMacros&&(u+=q(u),u+=k.staticFwjsMacros);if(v.isAMZN()&&-1===u.indexOf("gdpr_consent")){var Q=n.getAggregator().request("tcString");g.isDef(Q)&&(u+=q(u),u+="gdpr_consent="+Q)}r=u;k.impUrl=r;d.sendImpression(r);n.getAggregator().trigger("impressionsent")}catch(S){__IntegralASDiagnosticCall("impsend",S,k)}}}},
Ra=function(){try{var a=k.perf,b,c,d,e,f,p;a.markEnd("ec");b=a.getEnd("ec");c=y.performance&&"function"===typeof y.performance.getEntriesByName&&y.performance.getEntriesByName(k.impUrl)[0];var m=a.getStart("bd"),q=a.getStart(wa);d=k.jsDoSplit?Math.round(b-m):Math.round(b-q);e=Math.round(c&&c.duration);f=Math.round(b-(c&&c.responseEnd));g.isNumeric(d)&&g.isNumeric(e)&&g.isNumeric(f)&&(p={ttecl:d,ecd:e,tsecr:f},n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"imprf",g(p).toION()))}catch(t){n.getAggregator().trigger("error",
l.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ne=function(a,b,c,d,e,f,p,m){return function(c){var d=g.encodeInvalidUrlChars(c.primary.join(","),k.encodeInvalidUrlChars),f=b,l=0,m=function(a){if(a)return","+a};f.length+d.length+5<=a?(f+=m(d),e.impressionIsIdentifiable(!0),g(c.secondary).each(function(b,c){var d=g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars);f.length+d.length+5<=a?f+=m(d):l+=1})):l+=c.primary.length;return f+=",ov:"+l}(function(){var a,b;b=a={viewState:l.NA};v.isDomless()?b=m.checkScreenLoc(!0)||
a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):g.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState,x=n.getAggregator().request("mPage");b=e.getAvidIds();u=["id:"+k.asid,"c:"+e.getCacheBustId(),"sl:"+u,"em:"+v.embedded,"fr:"+v.friendly,"thd:"+g.stringifyTriState(x.supportsVisAPI())];d.on("avidPropertiesInImpression")&&g.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),
u.push("apv:"+b.partnerVersion));a=Oe(a,c,d,e,f,p,m);n.getAggregator().trigger("eligiblerender");return{primary:u,secondary:a}}())},Oe=function(a,b,c,d,e,f,n){var m=[];m.push("mn:"+k.mn);m.push("rg:"+k.region);k.iasProxyPartnerDomain&&m.push("ipp:"+encodeURIComponent(k.iasProxyPartnerDomain));m.push("pt:"+function(){var b=n.stringifyPingTimes();a.viewState!==l.NA&&(b+=a.details);return b}());m.push(g(f.params()).toParams());c.on("mrcAudit")&&!v.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);
e.iterate(function(a,b){var c=!b.props||g.isUndef(b.props.type),d=!b.props||b.props.type===l.IMPRESSION_EVENT;(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+k.mode);m.push("et:"+(r.now()-k.birthdate));k.perf.mark("si");c.on("swapids")?m.push("oid:"+k.oid):m.push("uid:"+d.unq);m.push("v:19.8.319");m.push("sp:"+(k.isSplitMode?1:0));m.push("st:"+(k.staticMode?1:0));m.push("fwm:"+("true"===k.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+
g(u.windowSize()).toArray().join(".")),m.push("sr:"+g(u.screenSize()).toArray().join(".")));b=function(){var a;a=String(k.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},Me=function(a,b,c,d){var e,f=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=g(a).map(function(a,b){if(k(b))return b}),a=g(a).map(function(a,
b){if(!k(b))return b}),g(e.concat(a)).each(function(a,e){var g;g=e.val;var k=e.key,l;l=24+f.join("&").length+k.length+c;l=b-l;d&&l<g.length&&0<l&&(g=g.substr(0,l));if(g.length||""===e.val||""===e.type)g="adsafe_url="+g+"&adsafe_type="+k,k=f.join("&").length,g.length+k<=b&&f.push(g)}));return f},lb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Pe(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",
{output:c},"pl",{type:l.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:l.DT_CODES.ADTALK}))}}},Se=function(a,b){return{start:function(){try{var c=Qe(),d=c.getMethodName(a),e=new W(b.getEnabledScriptUrl(a)),f=Re,g=r.getDoc();(new f(g.body||g.head||g.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.FEATURE_SCRIPT)}}}},Qe=function(){var a=function(a,c,d){a===k.asid&&(d.unshift(c),
n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:k.asid,constant:l,features:b,context:v,dtBaseURL:k.dtBaseURL,spg:hb};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},sb=function(){return{start:function(a,b){g(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Se(d,b).start()})}}},Pe=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=J.hashCode(e),e=g.toBase(e,
62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Re=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var e;c=u.createHiddenIframe();c.setAttribute("src","about:blank");c.setAttribute("class","_ntnrjf7826-hj");(a||k.contextNode.parentNode).appendChild(c);e=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g;
g=(new Date).getTime();b=b+"?t="+g+"&r="+Math.floor(1E5*Math.random())}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");e.open().write(b);e.close()})(b);return{getWindow:function(){return c.contentWindow}}},hb=function(a){var b=new La;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==k.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,
d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),g(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()},Ec={name:"spg",dependencies:["spgCache"],creator:hb,settings:{tier:l.TIERS.PRE_IMPRESSION_FRAUD,
applies:function(a,b,c){return a.on("spg")}}},Dc={name:"spgCache",dependencies:[],creator:function(){var a="asp ch fsc mvn no sd".split(" "),b={},c=!1,d=function(){return e(b)},e=function(b){return g(b).keys().sort().toString()===a.toString()},f=function(){c||(c=!0,g(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:l.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",l.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},
addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&f()},isFull:d,sendToOtherTags:function(){(new ha).send({scaInfoOriginatorASID:k.asid,cache:b})}}},settings:{}};try{nc()}catch(a){__IntegralASDiagnosticCall("main",a,k)}};
try{(function(){var k=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.__IntegralASAdPush=function(y){(y||top.isSingleIASInstance&&top.iasAdSlots).forEach(function(y){__IntegralASConfig._cl_adpath=y.adSelector;__IntegralASConfig.iasParameters=y.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)})},top.isSingleIASInstance&&top.iasAdSlots?top.__IntegralASAdPush():__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)}catch(y){__IntegralASConfig.initialize(__IntegralASConfig,
k,k.document)}})()}catch(k){__IntegralASDiagnosticCall("initialize",k,__IntegralASConfig)};
