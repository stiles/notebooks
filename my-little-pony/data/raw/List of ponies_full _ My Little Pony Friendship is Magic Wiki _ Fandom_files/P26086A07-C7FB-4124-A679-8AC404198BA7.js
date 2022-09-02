
/* CLIENTCONFIG build v1.0.23*/
!function(n,e){"use strict";var o="1.0.22",t="NOLBUNDLE",r=0,s={paramPrefix:"",maxRetries:5},a={defaultNSDKV:600,defaultSfcode:"sdk",subdomain:"cdn-gl",domain:"imrworldwide.com",protocol:0===n.location.protocol.indexOf("http:")?"http:":"https:",sdkUrl:"{{protocol}}//{{subdomain}}.{{domain}}/novms/js/{{sdksubpath}}/nlsSDK{{nsdkv}}.bundle.min.js"},i={eu:"600.eu","eu-cert":"600.eu","eu-uat":"600.eu"},l={parseNOLParams:function(n){var e=n.replace(/^[^\#]+\#?/,""),o={};if(!e)return o;var t=new RegExp("&"+s.paramPrefix,"gi"),r="<<nol_delimeter>>",a=r+s.paramPrefix;e=e.replace(t,a);for(var i=e.split(r),l=null,c=0;c<i.length;c++){l=i[c].indexOf("=");var u=unescape(i[c].substr(0,l)),d=unescape(i[c].substr(l+1));d=d.replace(/\+/g," "),o[u.replace(s.paramPrefix,"")]=d}return o},findScript:function(n){if(document.currentScript)return document.currentScript.src;console&&console.log&&(console.log("Config",new Date),console.log("Config",new Date));var e=document.getElementsByTagName("script"),o=[];if(e)for(var t=null,r="",s=null,a=new RegExp(n+".*?.js"),i=0;i<e.length;i++)s=e[i],r=s&&s.attributes&&s.attributes.src?s.attributes.src.value:"",(t=r.match(a))&&o.push(r);return o},loadScript:function(e,o,t){function r(e,o,t){var r=n.document.createElement("script");r.async=!0,r.setAttribute("data-jsonpid",name),r.src=e,r.onload=o,r.onerror=t;var s=n.document.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s)}function a(n){i<s.maxRetries?(i++,setTimeout(function(){console&&console.warn&&console.warn("Retry request # "+i),r(e,o,a)},2e3)):(console&&console.error&&console.error("Unable to load script "+e),t&&t())}var i=0;r(e,o,a)},setTesting:function(n){return n&&n.enableTesting&&e&&e.nol_GLOBALS&&a?("true"===n.enableTesting&&n.bundleVersion&&(n.environment||(n.environment="futuremaster"),"true"===e.nol_GLOBALS.nol_allowTesting&&(n.sfcode="cert",n.sdkUrl="//"+n.environment+".nonprod.digitalengsdk.com/novms/js/2/ver/nlsSDK600."+n.bundleVersion+".bundle.min.js")),n):n},getGlobalsField:function(e,o,t){if(o&&t&&n[e]&&n[e].configs){var r=n[e].configs[o];if(r&&r.nol_GLOBALS)return r.nol_GLOBALS[t]}return null},getDefaultField:function(e,o,t){if(o&&t&&n[e]&&n[e].configs){var r=n[e].configs[o];if(r&&r.nol_GLOBALS&&r.nol_GLOBALS.nol_tagMap&&r.nol_GLOBALS.nol_tagMap.nol_defaults)return r.nol_GLOBALS.nol_tagMap.nol_defaults[t]}return null}},c={setNamespace:function(e){return n[e]=n[e]||{nlsQ:function(o,t,r,s,a,i){return a=w.document,s=a.createElement("script"),s.async=1,s.src=("http:"===n.location.protocol?"http:":"https:")+"//cdn-gl.imrworldwide.com/conf/"+o+".js#name="+t+"&ns="+e,i=a.getElementsByTagName("script")[0],i.parentNode.insertBefore(s,i),w[t]=w[t]||{g:r,ggPM:function(n,e,o,r,s){(w[t].q=w[t].q||[]).push([n,e,o,r,s])}},w[t]}}},setConfig:function(n,e,o){o.configs=o.configs||{},o.configs[n]=o.configs[n]||e}},u={getInstanceGlobals:function(e,o,t){var r={apid:o,sfcode:l.getDefaultField("nol_sfcode")||a.defaultSfcode,nsdkv:a.defaultNSDKV},s=n[e][t.name]||n[t.name],c=s?s.g:{};if(c)for(var u=Object.keys(c),d=0;d<u.length;d++)void 0!==c[u[d]]&&null!==c[u[d]]&&""!==c[u[d]]&&(r[u[d]]=c[u[d]]);r.sfcode=l.getGlobalsField(e,o,"nol_sfcode")||r.sfcode,r.nsdkv=l.getGlobalsField(e,o,"nol_nsdkvConfig")||l.getGlobalsField(e,o,"nol_nsdkv")||i[r.sfcode]||r.nsdkv,r=l.setTesting(r);var f=l.getGlobalsField(e,o,"nol_sdkDebug");return f&&(r.nol_sdkDebug=f),r},isSDKReady:function(e){var o=n[e];return o&&o.hasOwnProperty("isBuilt")&&"function"==typeof o.isBuilt&&o.isBuilt()},loadSDK:function(e,o,t,r){try{var s=u.getInstanceGlobals(r,o,t),i=function(){try{if(e&&t&&t.name){var o=n[r].getInstance(t.name,!0);o&&!o.initialized&&o.ggInitialize(s)}}catch(n){}};if(u.isSDKReady(r))i();else{var c=(s&&s.sdkUrl?s.sdkUrl:a.sdkUrl).replace("{{protocol}}",a.protocol).replace("{{subdomain}}",t&&t.subdomain?t.subdomain:s&&s.subdomain?s.subdomain:a.subdomain).replace("{{domain}}",t&&t.domain?t.domain:s&&s.domain?s.domain:a.domain).replace("{{sdksubpath}}","NOLSDKBUNDLE"===r?"nolsdk":"2").replace("{{nsdkv}}",s.nsdkv);l.loadScript(c,i)}}catch(n){}},iterateInstances:function(n,e){if(e){var o=l.findScript(n);if("string"==typeof o)e(n,l.parseNOLParams(o));else for(var t=0;t<o.length;t++)e(n,l.parseNOLParams(o[t]))}}},d=e&&e.nol_GLOBALS?e.nol_GLOBALS.nol_appid:"";try{d?u.iterateInstances(d,function(o,r){var s=r&&r.ns?n[r.ns][r.name]:null;if(s||(s=r&&r.ns?n[r.name]:null),s&&!s.initialized){var a=c.setNamespace(r&&r.ns?r.ns:t);c.setConfig(o,e,a),u.loadSDK(a,o,r,r&&r.ns?r.ns:t)}}):console&&console.warn&&console.warn("Nielsen Log: Client config structure is invalid or corrupt.")}catch(n){}}(
  window,
	{
		"nol_GLOBALS":{
			"nol_dma":"",
			"nol_deviceId":"",
			"nol_countryCode2":"",
			"nol_countryCode3":"",
			"nol_debugsfcodelist":["eu-uat","cert"],		
			"nol_errorURL":"|!nol_prefProtocol!|://errors.imrworldwide.com/cgi-bin/error?message=|!(nol_errorMessage)!|&c13=asid,|![nol_appid]!|&c16=sdkv,|![nol_sdkv]!|&c8=devgrp,|![(nol_devGroup)]!|&c7=osgrp,|![(nol_osGroup)]!|&c10=plt,|![(nol_platform)]!|&c17=stnid,|![nol_stationId]!|&c18=|![nol_assetid]!|&c6=|![nol_product]!|&ci=|![nol_clientid]!|&c30=bldv,|![nol_bldv||nol_bldVersion]!|&c59=sesid,|![nol_sessionId_content]!|",
				"nol_useroptUrl_lat":"https://priv-policy.imrworldwide.com/priv/|!nol_devicetype!|/|![nol_localeCountryCode]!|/|![nol_language]!|/optout.html",
				"nol_useroptUrl":"https://priv-policy.imrworldwide.com/priv/|!nol_devicetype!|/|![nol_localeCountryCode]!|/|![nol_language]!|/optout_legacy.html",
            

            "nol_devGroup":"",
            "nol_osver":"NA",
            "nol_clocksrc":"S",
            "nol_osGroup":"",
            "nol_platform":"",
			"nol_clientid":"us-907786","nol_vcid":"c06","nol_clientCMSmap":{"nol_vidtype":"type","nol_assetid":"(assetid)","nol_category":"(program)","nol_assetName":"(section)","nol_segmentA":"(segA)","nol_segmentB":"(segB)","nol_reportSuiteID":"(reportSuite)","nol_segmentC":"(segC)","nol_adobeId":"adobeId","nol_crossRefID1":"crossId1","nol_crossRefID2":"crossId2","nol_progen":"progen","nol_stationType":"stationType","nol_clientid":"clientid","nol_scheduledEndDate":"((scheduledEndDate))","nol_adobeSessionId":"adobeVsid","nol_vcid":"subbrand","nol_stationId":"stationId"},"nol_sfcode":"dcr","syncPingFlagList":["nmcUrl","throtleUrl"],"enableFpid":"true",
			"nol_cidOffsetNull":"00000",
			"nol_emmsfcodelist":["eu","eu-cert","eu-uat","pl","pl-cert","cert","qat4","us","dcr","sdk","dcr-cert","au","it","dmk","sw","ire"],
			"nmcUrl":"https://loadus.exelator.com/getid?p=1480&g=1&j=0&asid=|!nol_appid!|","throtleUrl":"|!nol_prefProtocol!|://thrtle.com/insync?vxii_pid=10071&vxii_pdid=|!nol_imrid!|",
			"nol_cidNull":"X100zdCIGeIlgZnkYj6UvQ==",
			"nol_caSeed":"2022Q2",
			"nol_tsvevt":"tsvupdate",
			"nol_md5Seed":"N!3ls3nBL",
			"nol_tsvBreakoutMap":{"enable":"00,01,02,03,04,05,06,07,08,09","disable":""},
			"nol_sdkDelimiter":"_",


            "nol_channelName":"defaultChannelName",
            "nol_fbver":"1",
            "nol_appid":"P26086A07-C7FB-4124-A679-8AC404198BA7",
            "nol_contentType":"content,radio",
			"nol_aqhDuration":"00000",
			"nol_linearAdLoadFlag":"0",
			"nol_tagSrc":"cms",
			"nol_flag":"2",
			"nol_gpsPrecision":"1000",
			"nol_intrvlThrshld":"90",
			"nol_chnlCountThrshld":"10",
			"nol_cacheBusterLmt":"1",
			"nol_id3IntrvlGp":"15",
			"nol_useragent":"NLSDK (|![nol_osver]!|,|![nol_devtypeid]!| BUILD/|![nol_sdkver]!|) |![nol_appid]!|/|![nol_appver]!|",	
			"nol_xorSeed":"cr055pltfrm",
			"nol_unQualSegmentValue":"5",
			"nol_backgroundMode":"1",
 		    "nol_assetName": "defChnAsset",
			"nol_bgTimeOut":"5",
			"nol_duration":"30",
			"nol_encryptDevId":"true",
			"nol_SDKEncDevIdFlag":"true",
			"nol_devTimeZone":"",
			"nol_apn":"",
			"nol_sdkv":"bj.6.0.0",
			"nol_suppress":"1",
			"nol_admeas":"0",
			"nol_maxStaticInstances": "5",	
			"nol_pendingPingsLimit" :"8",
			"nol_pendingPingsDelay":"1",
			"nol_staticType":"static,text",
			"nol_spFlag":"_S",
			"nol_pauseTimeout":"1800",
			"nol_maxRetry":"0",
			"nol_defReasonCode":"",
			"nol_adSupportFlg":"2",
			"nol_eventDataDelimiter":"~",
			"nol_eventDataEvents":"play,pause,resume,stop,mute,rewind,forward",
			"nol_pauseEventTimeoutPlayhead":"15",
			
            
			"nol_id3Map":{
				"nol_nWebAddress":"0",
				"nol_pccid":"1",
				"nol_fdcid": "2",
				"nol_watermark":"3",
				"nol_pcoffset":"4",
				"nol_fdoffset":"5",
				"nol_breakout":"6"
			},

			"nol_customExtension":[
				"nol_dprCustom",
				"nol_legacyCustom",
				"nol_mtvrCustom",
				"nol_drmCustom",
				"nol_mtvraqhCustom",
				"nol_drmaqhCustom",
				"nol_dprid3Custom",
				"nol_dcrVideoCustom",			
				"nol_dcrStaticCustom",			
				"nol_dcrCustomEnc",
				"nol_vriCustom"
			],
			"nol_eventFilter":{
				"onCmsDetected":[
					{"tagVar":{"name":"nol_product", "value":"dpr"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"cms"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"drm"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"cms"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"id3"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
          			{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_tsvFlag"], "is":{"type":"+", "value":"nol_tsvMap"}, "then":{"nol_disabled":"true"}},
                    {"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_breakout"], "is":{"type":"+", "value":"09"}, "then":{"nol_disabled":"false"}},
                    {"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_linearAdLoadFlag"], "is":{"type":"+", "value":"2"}, "then":{"nol_disabled":"false"}},
                    {"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
                    {"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"-", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
          			{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"id3"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"false"}},
          			{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"vc"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"id3"}, "then":{"nol_disabled":"true"}, "else":{"nol_disabled":"false"}},
					{"tagVar":{"name":"nol_product", "value":"ocr"}, "cond":["nol_vidtype"], "is":{"type":"+", "value":"preroll,midroll,postroll,ad"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},					 
					{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "content,preroll,midroll,postroll,ad"},  "then":{"nol_disabled": "false"}, "else": {"nol_disabled": "true"}},
					{"tagVar":{"name":"nol_product","value":"dcrstatic"},"cond":["nol_vidtype"], "is":{"type":"+", "value":"static"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product","value":"vrivideo" }, "cond":["nol_vidtype"], "is":{"type":"+", "value":"content"}, "then":{"nol_disabled": "false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value": "dcrvideo"}, "cond": ["nol_isAudio"], "is": {"type": "+", "value": "1,true,True,TRUE,y,Y,yes,Yes,YES" }, "then": { "nol_rt": "audio" } }
				],
				"onDcrCmsDetected":[
	                                {"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond": ["nol_ac"],  "is": {"type":"+","value": "static"},  "then":{"nol_disabled": "false"}, "else": {"nol_disabled": "true"}}
	            ],
				"onDcrDetected":{
					"dcrStatic":[
						{"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "preroll,midroll,postroll,ad,content"},  "then":{"nol_disabled": "true"}, "else":{"nol_disabled":"false"}}
					],
					"dcrVideo":[
						{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "preroll,midroll,postroll,ad,content"},  "then":{"nol_disabled": "false"}, "else":{"nol_disabled":"true"}},
						{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "postroll"},  "then":{"nol_minWonOverride": "1"}}
					]
				},
				 "onOTTDetected":[
				        {"tagVar":{"name":"nol_product_content", "value":"dcrvideo"}, "cond":["nol_pingCount_content"], "is":{"type":"+", "value":"1"}, "then":{"nol_pingCount_content":"0"}}
					],
				"onId3Detected":[
					{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_vidtype"], "is":{"type":"+", "value":"content"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"false"}},
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_tagSrc"], "is":{"type":"+", "value":"id3"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"id3"}, "cond":["nol_vidtype"], "is":{"type":"+", "value":"content"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"false"}},
					{"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"-", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}}
				],
				"onViewWon":[
					{"tagVar":{"name":"nol_cadence", "value":"interval"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"S"}, "then":{"nol_segmentPrefix":"D"}},
					{"tagVar":{"name":"nol_cadence", "value":"interval"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"D"}, "then":{"nol_at":"timer"}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_dpr"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"D"}, "then":{"nol_fbCountryCode":""}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_drm"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"D"}, "then":{"nol_fbCountryCode":""}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_mtvr"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"D"}, "then":{"nol_fbCountryCode":""}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_drm"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"V"}, "then":{"nol_fbCountryCode":"IMP"}}
				],
				"onAssetIdChanged":[
					{"tagVar":{"name":"nol_product", "value":"dpr"}, "cond":["nol_vidtype"], "is":{"type":"-", "value":"content"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_vidtype"], "is":{"type":"-", "value":"content"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dpr"}, "cond":["nol_assetid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dpr"}, "cond":["nol_dpr"], "is":{"type":"+", "value":"true"}, "then":{"nol_forward":"0","nol_aggregate":"1"}, "else":{"nol_forward":"0","nol_aggregate":"0"}},
					{"tagVar":{"name":"nol_product", "value":"drm"}, "cond":["nol_vidtype"], "is":{"type":"-", "value":"radio"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"drm"}, "cond":["nol_assetid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"ocr"}, "cond":["nol_ocrtag"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}, "else":{"nol_disabled":"false"}},
					{"tagVar":{"name":"nol_cadence", "value":"streamduration"}, "cond": ["nol_ac"],  "is": {"type":"+","value": "ad"},  "then":{"nol_disabled": "false"}, "else":{"nol_disabled": "true"}},
					{"tagVar":{"name":"nol_product", "value": "dcrvideo"}, "cond": ["nol_isAudio"], "is": {"type": "+", "value": "1,true,True,TRUE,y,Y,yes,Yes,YES" }, "then": { "nol_rt": "audio" } }
				],
				"onId3FdCidChanged":[
					{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_fdcid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}, "else":{"nol_disabled": "false", "nol_forward": "1", "nol_aggregate": "1"} },
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_fdcid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}}
				],
				"onId3PcCidChanged":[
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}, "else":{"nol_disabled":"false", "nol_forward":"1","nol_aggregate":"1"}},
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"-", "value":"nol_cidNull"}, "then":{"nol_forward":"0","nol_aggregate":"0"},"else":{"nol_forward":"1","nol_aggregate":"1"}},
					{"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_fdrtvod"], "is":{"type":"+", "value":"1"}, "then":{"nol_forward":"0", "nol_aggregate":"0"}},
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_fdrtvod"], "is":{"type":"+", "value":"1"}, "then":{"nol_forward":"1", "nol_aggregate":"1"}}
				],
				"nol_tagFilter":[
					{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_fdcid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_fdcid"], "is":{"type":"+", "value":""}, "then":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}, "else":{"nol_disabled":"false", "nol_forward":"0","nol_aggregate":"1"}},
					{"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_pccid","nol_fdcid"], "is":{"type":"-", "value":"nol_cidNull"}, "then":{"nol_forward":"0","nol_aggregate":"0"},"else":{"nol_forward":"0","nol_aggregate":"1"}},
					{"tagVar":{"name":"nol_subTag", "value":"dprid3"}, "cond":["nol_pccid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_disabled":"true"}} 
				],
				"onComplete":[
					{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_breakout"], "is":{"type":"+", "value":"03"}, "then":{"nol_tsvMap":"00,01,02,03,04"}, "else":{"nol_tsvMap":"00,01,02,03,04,05,06,07,08"}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_dpr"}, "cond":["nol_aggregate"], "is":{"type":"+", "value":"1"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},                                                                              
					{"tagVar":{"name":"nol_subProduct", "value":"fb_drm"}, "cond":["nol_aggregate"], "is":{"type":"+", "value":"1"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_mtvr"}, "cond":["nol_aggregate"], "is":{"type":"+", "value":"1"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_dpr"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"S"}, "then":{"nol_fbCountryCode":"IMP"}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_drm"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"S"}, "then":{"nol_fbCountryCode":""}},
					{"tagVar":{"name":"nol_subProduct", "value":"fb_mtvr"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"S"}, "then":{"nol_fbCountryCode":"IMP"}}										
				],
				"onPaginateDetected":[
				    {"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond":["nol_pingCount"],  "is": {"type":"-","value": "0"}, "then":{"nol_pingCount": "0"}}
				],
				"onEndDetected":[
				                 
				                 {"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_davty"],  "is": {"type":"+","value": "1"},  "then":{"nol_davty": "2"}},
				                 {"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond": ["nol_davty"],  "is": {"type":"+","value": "1"},  "then":{"nol_davty": "2"}},
				                 {"tagVar":{"name":"nol_product","value": "mtvr"}, "cond": ["nol_davty"], "is": {"type": "+","value": "1"}, "then": {"nol_davty": "2"}},
				                 {"tagVar":{"name":"nol_product","value": "drm"}, "cond": ["nol_davty"], "is": {"type": "+","value": "1"}, "then": {"nol_davty": "2"}}

				],
	            "onAdLoadFlag": [
	         				    { "tagVar": { "name": "nol_product", "value": "dcrvideo" }, "cond": ["nol_adLoadType"], "is": { "type": "+", "value": "dynamic" }, "then": { "nol_adLoadType": "2" } },
	         				    { "tagVar": { "name": "nol_product", "value": "dcrvideo" }, "cond": ["nol_adLoadType"], "is": { "type": "+", "value": "linear" }, "then": { "nol_adLoadType": "1" } },
	         				    { "tagVar": { "name": "nol_product", "value": "dcrvideo" }, "cond": ["nol_adLoadType"], "is": { "type": "-", "value": "1,2" }, "then": { "nol_adLoadType": "2" } },
	         					{ "tagVar": { "name": "nol_subProduct", "value": "fb" }, "cond": ["nol_adLoadType"], "is": { "type": "+", "value": "1" }, "then": { "nol_disabled": "true" }, "else": { "nol_disabled": "false" } }
	         	            ]
				
				 
			  },
			 
			  "nol_serviceFilter": {
					"tsv": [
						{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_tsvFlag"], "is":{"type":"+", "value":"nol_tsvMap"}, "then":{"nol_disabled":"true"}},
						{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_breakout"], "is":{"type":"+", "value":"09"}, "then":{"nol_disabled":"false"}},
						{"tagVar":{"name":"nol_product", "value":"dprid3"}, "cond":["nol_linearAdLoadFlag"], "is":{"type":"+", "value":"2"}, "then":{"nol_disabled":"false"}},
						{"tagVar":{"name":"nol_product", "value":"mtvr"}, "cond":["nol_fdrtvod"], "is":{"type":"+", "value":"1"}, "then":{"nol_forward":"0", "nol_aggregate":"0"}},
				        {"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_fdrtvod"], "is":{"type":"+", "value":"1"}, "then":{"nol_forward":"1", "nol_aggregate":"1"},"else":{"nol_forward":"0","nol_aggregate":"0"}},
				        {"tagVar":{"name":"nol_subTag", "value":"mtvr"}, "cond":["nol_fdcid"], "is":{"type":"+", "value":"nol_cidNull"}, "then":{"nol_forward":"1", "nol_aggregate":"1" }}
					],
					"stn": []
			},
			"nol_tagMap":{
				"nol_product":["dpr","mtvr","vc", "id3", "ocr", "drm", "dprid3","dcrstatic", "dcrvideo","vrivideo"], 
				"nol_cadence":["interval", "episode", "stream", "impression", "daypart", "appstart","streamduration","modcadence"],  
				"nol_defaults":{
					"nol_sessionURL":"|!nol_prefProtocol!|://secure-|!nol_sfcode!|.imrworldwide.com/cgi-bin/gn?prd=session&c9=devid,|![nol_deviceId]!|&c13=asid,|!nol_appid!|&sessionId=|!nol_userSessionId!|&c16=sdkv,|!nol_sdkv!|&uoo=|![nol_useroptout]!|&fp_id=|![(nol_fpid)]!|&fp_cr_tm=|![nol_fpidCreateTime]!|&fp_acc_tm=|![nol_fpidAccessTime]!|&fp_emm_tm=|![nol_fpidLastEMMPingTime]!|&ve_id=|![(nol_veid)]!|&c30=bldv,|![nol_bldv||nol_bldVersion]!|&uid2=|![(nol_uid2)]!|&uid2_token=|![(nol_uid2Token)]!|&hem_sha256=|![(nol_hemSha256)]!|&hem_sha1=|![(nol_hemSha1)]!|&hem_md5=|![(nol_hemMd5)]!|&hem_unknown=|![(nol_hemUnknown)]!|&sdd=",
					"nol_sfcode":"sdk",
					"nol_fpid_ttl":"180", 
					"nol_emm_ttl":"86400",
					"nol_offlinePingsLimit":"300",
					"nol_tvOSOfflinePingsLimit":"8",
					"nol_creditFlag":"1",
					"nol_creditValue":"30",
					"nol_segmentLength":"5",
					"nol_segmentValue":"60",
					"nol_maxLength":"1832",
					"nol_forward":"0",
					"nol_aggregate":"1",
					"nol_tsvFlag":"99",
					"nol_rt":"video",
					"nol_accessMethod":"0",
					"nol_breakout":"00",
					"nol_currSeg":"0",
					"nol_minWonOverride":"0",
					"nol_segmentA":"NA",
					"nol_segmentB":"NA",
					"nol_segmentC":"NA",
					"nol_placement":"NA",
					"nol_content":"NA",
					"nol_adLoadType":"2",
					"nol_segmentTimeSpent":"0",
					"nol_adDuration":"0",
					"nol_adCount":"0",
					"nol_isFullEpisode":"n",
					"nol_emmURL":"https://|![(nol_userSessionId)]!|.nuid.imrworldwide.com",
					"nol_prefProtocol":"https",
	        		"nol_dcrsfcode":"sdk",
					"nol_sendTime":"0",
					"nol_davty":"0",
					"nol_hemUidCharLimit": "300",
					"nol_targetPackage":"odm"
				},
				"nol_url":[
"",
"",
"",
"",
"",
"|!nol_ocrtag!|&c9=devid,|![nol_deviceId]!|&c8=devgrp,&c29=plid,|![nol_playerId]!|&c30=bldv,|![nol_bldv]!|&c7=osgrp,&c10=plt,&c11=agg,|!nol_aggregate!|&c12=apv,|![nol_appver]!|&c13=asid,P26086A07-C7FB-4124-A679-8AC404198BA7&c14=osver,NA&c26=dmap,3&c24=zip,99&uoo=|![nol_useroptout]!|&c68=bndlid,&c61=createtm,|![nol_createTime||nol_pingCreationTime]!|&c62=sendTime,|![nol_sendTime]!|&nodeTM=|![nol_nodetm]!|&logTM=|![nol_logtm]!|&c73=phtype,&c74=dvcnm,&sdd=",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"|!nol_prefProtocol!|://secure-|!nol_dcrsfcode!|.imrworldwide.com/cgi-bin/gn?prd=dcr&ci=|!nol_clientid!|&ch=|!nol_clientid+nol_sdkDelimiter+nol_vcid+nol_sdkDelimiter+nol_assetName+[nol_spFlag]!|&asn=|!nol_assetName!|&fp_id=|![(nol_fpid)]!|&fp_cr_tm=|![nol_fpidCreateTime]!|&fp_acc_tm=|![nol_fpidAccessTime]!|&fp_emm_tm=|![nol_fpidLastEMMPingTime]!|&ve_id=|![(nol_veid)]!|&sessionId=|![(nol_userSessionId)]!|&prv=1&c6=vc,|![nol_vcid]!|&ca=|!nol_content!|&c13=asid,P26086A07-C7FB-4124-A679-8AC404198BA7&c32=segA,|![nol_segmentA]!|&c33=segB,|![nol_segmentB]!|&c34=segC,|![nol_segmentC]!|&c15=apn,|![nol_apn]!|&sup=1&segment2=|![nol_dma]!|&segment1=|!([nol_countryCode3])!|&forward=|![nol_forward]!|&plugv=|![nol_plugv]!|&playerv=|![nol_playerv]!|&ad=|!nol_accessMethod!|&cr=|!nol_segmentPrefix!|&c9=devid,|![nol_deviceId]!|&enc=|!nol_encryptDevId!|&c1=nuid,|![nol_nuid||nol_playerId]!|&at=|!nol_at!|&rt=|!nol_rt!|&c16=sdkv,|![nol_sdkv]!|&c27=cln,|![nol_segmentTimeSpent]!|&crs=|![nol_appCrash]!|&lat=|![nol_latitude]!|&lon=|![nol_longitude]!|&c29=plid,|![nol_playerId]!|&c30=bldv,|![nol_bldv]!|&st=dcr&c7=osgrp,|![(nol_osGroup)]!|&c8=devgrp,|![(nol_devGroup)]!|&c10=plt,|![(nol_platform)]!|&c40=adbid,|![nol_adobeId]!|&c14=osver,|![(nol_osver)]!|&c26=dmap,1&dd=|![nol_dataDate]!|&hrd=|![nol_hourCode]!|&wkd=|![nol_dayId]!|&c35=adrsid,|![nol_reportSuiteID]!|&c36=cref1,|![nol_crossRefID1]!|&c37=cref2,|![nol_crossRefID2]!|&c11=agg,|!nol_aggregate!|&c12=apv,|![nol_appver]!|&c51=adl,|![nol_adDuration]!|&c52=noad,|![nol_adCount]!|&pc=NA&c53=fef,|![nol_isFullEpisode]!|&c54=oad,|![nol_airDate]!|&c55=cref3,|![nol_cref3]!|&c57=adldf,|![nol_adLoadType]!|&ai=|![nol_assetid]!|&c3=|![nol_c3]!|&c64=starttm,|![nol_pingStartTimeUTC]!|&adid=|![nol_assetid]!|&c58=isLive,|![nol_isLive_content]!|&c59=sesid,|![nol_sessionId_content]!|&c61=createtm,|![nol_createTime||nol_pingCreationTime]!|&c63=pipMode,|![nol_pipMode_content]!||![nol_dcrStaticCustom]!|&uoo=|![nol_useroptout]!|&c62=sendTime,|![nol_sendTime]!|&c68=bndlid,&nodeTM=|![nol_nodetm]!|&logTM=|![nol_logtm]!|&c73=phtype,&c74=dvcnm,&c76=adbsnid,|![nol_adobeSessionId]!|&c44=progen,|![(nol_progen)]!|&davty=|![nol_davty_static]!|&si=|![(nol_pageURL)]!|&c66=mediaurl,|![(nol_mediaURL)]!|&sdd=",
"",
"",
"",
"",
"",
"",
""
      
				]
			}
		},
		"nol_TAGS":[
						
						{
							"nol_comment":"DCR browser static view",
							"nol_product":"7",
							"nol_cadence":"3",
							"nol_defaults":{"nol_maxPingCount":"1", "nol_creditFlag":"0", "nol_segmentPrefix":"V", "nol_timer":"nol_pageoffset","nol_at":"view", "nol_tagPresence":"4","nol_rt": "text","nol_segmentTimeSpent":"0","nol_adDuration":"0","nol_adCount":"0","nol_c3":"st,c","nol_davty":"0"},
							"nol_url":"17"
						},

						{
							"nol_comment":"DCR browser static duration",
							"nol_product":"7",
							"nol_cadence":"0",
							"nol_defaults":{"nol_minWonOverride":"1","nol_creditFlag":"1","nol_segmentPrefix":"D","nol_timer":"nol_pageoffset","nol_at":"timer","nol_rt": "text", "nol_tagPresence":"4","nol_segmentLength":"5","nol_segmentTimeSpent":"0","nol_adDuration":"0","nol_adCount":"0","nol_c3":"st,c","nol_davty":"1"},	
							"nol_url":"17"
						},
						

							{
								"nol_comment":"ID3 raw red herring",
								"nol_product":"3",
								"nol_cadence":"0",
								"nol_url":"4",
								"nol_defaults":{"nol_tagPresence":"2"},
				                "nol_flag":"2"
							},


						{
							"nol_comment":"OCR tag",
							"nol_product":"4",
							"nol_cadence":"3",
							"nol_defaults":{"nol_maxPingCount":"1", "nol_timer":"nol_cmsoffset"},
							"nol_url":"5"
						}

		]
	}
	);		
