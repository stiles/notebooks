
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"52",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"secure.donaldjtrump.com,secure.winred.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-60901920-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.transaction.total.donationType})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.transaction.item[0].price.basePrice})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.purchaseID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"USD"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",17],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amount",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",23],7],"\";return a.split(\"_\")[0]+\"_\"+a.split(\"_\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",23],7],"\";return a.slice(a.indexOf(\"_\",a.indexOf(\"_\")+1)+1)})();"]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.pathname.split(\"\/\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.transaction.item[0].price.pledgePrice})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 100*digitalData.transaction.item[0].price.basePrice})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.email})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.firstName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.lastName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.city})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.state})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.zip})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.user[0].profile[1].profileInfo.phoneNumber})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"panelUpsellID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null!=",["escape",["macro",37],8,16],"||\"conduit panel conduit upsell\"===",["escape",["macro",38],8,16],"||\"purchase\"!=",["escape",["macro",39],8,16],"\u0026\u0026\"lead\"!=",["escape",["macro",39],8,16],"?!0:0==performance.navigation.type?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.total.paymentFrequency"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amount",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"id_email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\"#donation-form .donate-button .contribution-amount\").innerHTML.trim().substring(1)})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.item[0].price.basePrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.transaction.total.paymentFrequency})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.total.paymentFrequency"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.item[0].price.basePrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 100*document.querySelector(\"#donation-form .donate-button .contribution-amount\").innerHTML.trim().substring(1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.page.attributes.queryParameters.upsell_type})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return digitalData.transaction.item[0].quantity})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"decline",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction urlpath(){var c=\"email Email firstname FirstName lastname LastName zip Zip zipcode ZipCode\".split(\" \"),b=document.createElement(\"a\");b.href=",["escape",["macro",8],8,16],";var a=b.search;if(\"\"!=a){var d=!1;for(i=0;i\u003Cc.length;i++)currentQ=new RegExp(c[i]+\"\\x3d[^\\x26]*\\x26?\",\"g\"),currentQ.test(a)\u0026\u0026(a=a.replace(currentQ,\"\"),d=!0);d\u0026\u0026(a=a.replace(\/[?\u0026]$\/,\"\"),history.replaceState({state:1,rand:Math.random()},\"\",b.pathname+a));return b.pathname+a}}urlpath();\u003C\/script\u003E\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-880442929\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-880442929\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":26
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pagev0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt-p0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9448820",
      "vtp_ordinalStandard":["macro",3],
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":39
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"855967303",
      "vtp_conversionLabel":"mNrrCL_0ndABEMeMlJgD",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":44
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"signu0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt-s0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9448820",
      "vtp_ordinalStandard":["macro",3],
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":45
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":["macro",7],
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":46
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_revenue":["macro",10],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",11],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"donat0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djtno0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9448820",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":180
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":true,
      "vtp_acceptIncoming":true,
      "vtp_linkerDomains":"donaldjtrump.com,barelytherebiden.com,action.donaldjtrump.com,donaldjtrump.com,forms.donaldjtrump.com,secure.donaldjtrump.com,secure.winred.com",
      "vtp_enableCookieOverrides":false,
      "vtp_formDecoration":true,
      "vtp_urlPosition":"query",
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":185
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",10],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"855967303",
      "vtp_currencyCode":["macro",12],
      "vtp_conversionLabel":"54bWCIv26aQBEMeMlJgD",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":205
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pagev0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt_p0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9381094",
      "vtp_ordinalStandard":["macro",3],
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":209
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transactionID","value",["macro",14]],["map","fieldName","transactionTotal","value",["macro",13]],["map","fieldName","transactionProducts","value",["macro",15]]],
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "vtp_enableGA4Schema":false,
      "tag_id":215
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=mozu5ac\u0026ct=0:c0tba46\u0026fmt=3",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":218
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",10],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",11],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"donat0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt_d0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9381094",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":224
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=mozu5ac\u0026ct=0:cfboyll\u0026fmt=3",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":225
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=mozu5ac\u0026ct=0:13kksxm\u0026fmt=3\u0026v=",["escape",["macro",10],12],"\u0026orderid=",["escape",["macro",11],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":226
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=mozu5ac\u0026ct=0:m6rgysa\u0026fmt=3",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":230
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"648369450",
      "vtp_conversionLabel":"IVzHCPDc9dEBEKqqlbUC",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":243
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"648369450",
      "vtp_conversionLabel":"YeUjCLDq9dEBEKqqlbUC",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":244
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_revenue":["macro",10],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",11],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"donat0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt_d0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9386837",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":247
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pagev0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt_p0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9386837",
      "vtp_ordinalStandard":["macro",3],
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":248
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["template",["macro",19],"-",["macro",20]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":265
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":"Scroll %",
      "vtp_eventLabel":"75%",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":267
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Timer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":"2:54",
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":270
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Timer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":"3:30",
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":271
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formSubmission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":["macro",7],
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":283
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=8xidow8\u0026ct=0:8skxa1c\u0026fmt=3",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":285
    },{
      "function":"__flc",
      "metadata":["map"],
      "consent":["list"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"submi0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"djt_r0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9323526",
      "vtp_ordinalStandard":["macro",3],
      "vtp_url":["macro",4],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":288
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10,25,50,75,90,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2350723_37",
      "vtp_enableTriggerStartOption":true,
      "tag_id":289
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2350723_182",
      "tag_id":290
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2350723_207",
      "tag_id":291
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2350723_259",
      "tag_id":292
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"75",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2350723_262",
      "vtp_enableTriggerStartOption":true,
      "tag_id":293
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"174000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2350723_268",
      "tag_id":294
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"210000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2350723_269",
      "tag_id":295
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2350723_282",
      "tag_id":296
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"181084665799192\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"181084665799192\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=181084665799192\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2558854747672869\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"2558854747672869\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=2558854747672869\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10096637\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"        \u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"mozu5ac\",[\"u1mkbm0\"],\"https:\/\/insight.adsrvr.org\/track\/up\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10096638\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10096638\",qstrings:{et:\"custom\",ec:\"formSubmission\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"7d4b8c98-0f71-4e52-97e5-4fc263ec23eb\",{user_email:\"id_email\"});snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{amount:\"",["escape",["macro",21],7],"\",utm_source:\"",["escape",["macro",22],7],"\",\"utm_content1-2\":\"",["escape",["macro",24],7],"\",utm_content3:\"",["escape",["macro",25],7],"\",pageTitle:\"",["escape",["macro",26],7],"\",slug:\"",["escape",["macro",27],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"recurring-subscription\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"trackRevenue\",tags:{revenue:",["escape",["macro",29],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10097009\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10097009\",qstrings:{et:\"custom\",ec:\"donation\",gv:\"",["escape",["macro",10],7],"\"}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nfbq(\"init\",\"2558854747672869\",{em:",["escape",["macro",30],8,16],",fn:",["escape",["macro",31],8,16],",ln:",["escape",["macro",32],8,16],",ct:",["escape",["macro",33],8,16],",st:",["escape",["macro",34],8,16],",zp:",["escape",["macro",35],8,16],",ph:",["escape",["macro",36],8,16],"});fbq(\"init\",\"1386582778102028\",{em:",["escape",["macro",30],8,16],",fn:",["escape",["macro",31],8,16],",ln:",["escape",["macro",32],8,16],",ct:",["escape",["macro",33],8,16],",st:",["escape",["macro",34],8,16],",zp:",["escape",["macro",35],8,16],",ph:",["escape",["macro",36],8,16],"});fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1386582778102028\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1386582778102028\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:",["escape",["macro",41],8,16],",currency:\"USD\"},{eventID:",["escape",["macro",42],8,16],"});fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2695459754013529\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"2695459754013529\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=2695459754013529\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":212
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"Recurring Upsell\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_etmc.push([\"setOrgId\",\"10964169\"]);_etmc.push([\"trackConversion\",{cart:[{item:\"",["escape",["macro",26],7]," | Donation\",quantity:\"1\",price:\"",["escape",["macro",10],7],"\",unique_id:\"",["escape",["macro",43],7],"\"}]}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"Double Donation\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"double-donation\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_etmc.push([\"setOrgId\",\"10964169\"]);_etmc.push([\"trackConversion\",{cart:[{item:\"",["escape",["macro",26],7]," - Recurring - DJT\",quantity:\"1\",price:\"",["escape",["macro",28],7],"\",unique_id:\"",["escape",["macro",43],7],"\"}]}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"7d4b8c98-0f71-4e52-97e5-4fc263ec23eb\",{user_email:",["escape",["macro",30],8,16],"});snaptr(\"track\",\"PURCHASE\",{price:",["escape",["macro",10],8,16],",currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/10964169.collect.igodigital.com\/collect.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E_etmc.push([\"setOrgId\",\"10964169\"]);_etmc.push([\"trackPageView\"]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_etmc.push([\"setOrgId\",\"10964169\"]);_etmc.push([\"trackConversion\",{cart:[{item:\"",["escape",["macro",26],7]," - Double - DJT\",quantity:\"1\",price:\"",["escape",["macro",10],7],"\",unique_id:\"",["escape",["macro",43],7],"\"}]}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":235
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1660815514223309\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"1660815514223309\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1660815514223309\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:",["escape",["macro",41],8,16],",currency:\"USD\"},{eventID:",["escape",["macro",42],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":276
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"8xidow8\",[\"4l1a8c2\"],\"https:\/\/insight.adsrvr.org\/track\/up\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":286
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"secure.winred.com"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"secure.donaldjtrump.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_37($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formSubmission"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"donation"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"password-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"double-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"recurring-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"donate\/thank-you"
    },{
      "function":"_gt",
      "arg0":["macro",13],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_207($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_182($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"double-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"recurring-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"volunteer-upsell-page"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"panel-upsell-page"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"secure.donaldjtrump.com|secure.winred.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"pers"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_262($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_268($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_269($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"donaldjtrump.com\/media"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_282($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"events.donaldjtrump.com\/tickets"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_ge",
      "arg0":["macro",28],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"upsell"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eec.purchase"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"double"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"https:\/\/events.donaldjtrump.com\/events"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2350723_259($|,)))"
    }],
  "rules":[
    [["if",0],["add",1,2,8,36,37,38,39,60,29,30,31,35]],
    [["if",3,4],["add",3,21]],
    [["if",5],["add",4,5,6,17,40]],
    [["if",6,7],["add",7,13,15,18,19,50]],
    [["if",0,8],["add",9,54]],
    [["if",0,9],["add",9,12,54]],
    [["if",0,10],["add",9,54]],
    [["if",0,11],["add",9,14,54]],
    [["if",0,12],["add",9,54]],
    [["if",0,2],["add",10,20,41,42,45,46,48,55,57],["block",2,4,5,6,17,25,38,40]],
    [["if",0,1],["add",10,20,41,42,45,46,48,55,57],["block",2,4,5,6,17,25,38,40]],
    [["if",2,13,14,15],["add",11]],
    [["if",1,13,14,16],["add",11]],
    [["if",0,22],["unless",17,18,19,20,21],["add",16]],
    [["if",23,24,25],["add",22]],
    [["if",26,27],["add",23]],
    [["if",26,28],["add",24]],
    [["if",14,29,30],["add",25]],
    [["if",0,31],["add",26,27]],
    [["if",7],["add",28]],
    [["if",32],["add",32]],
    [["if",0,23],["add",33,34]],
    [["if",7,33],["unless",17],["add",43,49,53]],
    [["if",22,32],["add",0]],
    [["if",6,7],["unless",17],["add",44]],
    [["if",34,36],["unless",35],["add",47]],
    [["if",7,37],["add",51,52,56]],
    [["if",14,38,39],["add",58]],
    [["if",35,36],["add",59]]]
},
"runtime":[]




};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ka={a:!0},ma={};try{ma.__proto__=ka;ia=ma.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ha,oa=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ji=b.prototype},pa=this||self,qa=function(a){return a};var ra={},sa=function(a,b){ra[a]=ra[a]||[];ra[a][b]=!0},ta=function(a){for(var b=[],c=ra[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ua=function(){},va=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},xa=function(a){return"number"==typeof a&&!isNaN(a)},Ba=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&sa("TAGGING",4):sa("TAGGING",5);return b},m=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ca=function(a,b){if(a&&Ba(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Da=function(a,b){if(!xa(a)||!xa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Fa=function(a,b){for(var c=new Ea,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ga=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ia=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ka=
function(a){return Math.round(Number(a))||0},La=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ma=function(a){var b=[];if(Ba(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Na=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Oa=function(){return(new Date).getTime()},Ea=function(){this.prefix="gtm.";this.values={}};Ea.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ea.prototype.get=function(a){return this.values[this.prefix+a]};
var Qa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ra=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Va=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ya=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Za=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},$a=/^\w{1,9}$/,
ab=function(a){var b=[];Ga(a,function(c,d){$a.test(c)&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,db=function(a){if(null==a)return String(a);var b=bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},fb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},gb=function(a){if(!a||"object"!=db(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!fb(a,"constructor")&&!fb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||fb(a,b)},B=function(a,b){var c=b||("array"==db(a)?[]:{}),d;for(d in a)if(fb(a,d)){var e=a[d];"array"==db(e)?("array"!=db(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):gb(e)?(gb(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};var hb=function(a){if(void 0===a||Ba(a)||gb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var ib=function(){var a=function(b){return{toString:function(){return b}}};return{Mf:a("consent"),Nf:a("consent_always_fire"),ae:a("convert_case_to"),be:a("convert_false_to"),ce:a("convert_null_to"),de:a("convert_true_to"),ee:a("convert_undefined_to"),Th:a("debug_mode_metadata"),Sa:a("function"),Bg:a("instance_name"),Dg:a("live_only"),Eg:a("malware_disabled"),Fg:a("metadata"),Wh:a("original_activity_id"),Xh:a("original_vendor_template_id"),Hg:a("once_per_event"),Te:a("once_per_load"),Zh:a("priority_override"),
$h:a("respected_consent_types"),Ye:a("setup_tags"),Ze:a("tag_id"),$e:a("teardown_tags")}}();
var jb=[],lb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return lb[a]},qb=/[\x00\x22\x26\x27\x3c\x3e]/g;var ub=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};jb[7]=function(a){return String(a).replace(ub,xb)};
jb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ub,xb)+"'"}};var Eb=/['()]/g,Fb=function(a){return"%"+a.charCodeAt(0).toString(16)};jb[12]=function(a){var b=
encodeURIComponent(String(a));Eb.lastIndex=0;return Eb.test(b)?b.replace(Eb,Fb):b};var Gb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ib=function(a){return Hb[a]};jb[16]=function(a){return a};var Mb;
var Nb=[],Ob=[],Pb=[],Qb=[],Rb=[],Sb={},Tb,Ub,Vb,Wb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Sb[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.df&&b.df(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===ib.Nf.toString()&&a[f]){}return void 0!==d?d(e):Mb(c,e,b)},Yb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xb(a[e],b,c));return d},Xb=function(a,b,c){if(Ba(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Nb[f];if(!h||b.Gd(h))return;c[f]=!0;try{var k=Yb(h,b,c);k.vtp_gtmEventId=b.id;
d=Wb(k,b);Vb&&(d=Vb.Vg(d,k))}catch(z){b.vf&&b.vf(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Xb(a[l],b,c)]=Xb(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Xb(a[p],b,c);Ub&&(n=n||q===Ub.oc);d.push(q)}return Ub&&n?Ub.Yg(d):d.join("");case "escape":d=Xb(a[1],b,c);if(Ub&&Ba(a[1])&&"macro"===a[1][0]&&Ub.qh(a))return Ub.Eh(d);d=String(d);for(var r=2;r<a.length;r++)jb[a[r]]&&(d=jb[a[r]](d));return d;case "tag":var u=a[1];if(!Qb[u])throw Error("Unable to resolve tag reference "+
u+".");return d={pf:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Zb(t,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c){try{return Tb(Yb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var bc=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}for(var c=[],d=[],e=$b(a),f=0;f<Ob.length;f++){var h=Ob[f],k=ac(h,e);if(k){for(var l=h.add||[],n=0;n<l.length;n++)c[l[n]]=!0;b(h.block||[])}else null===k&&b(h.block||[]);}for(var p=[],q=0;q<Qb.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},ac=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],h=0;h<f.length;h++){var k=b(f[h]);if(2===k)return null;if(1===k)return!1}return!0},$b=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Zb(Pb[c],a));return b[c]}};var cc={Vg:function(a,b){b[ib.ae]&&"string"===typeof a&&(a=1==b[ib.ae]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ib.ce)&&null===a&&(a=b[ib.ce]);b.hasOwnProperty(ib.ee)&&void 0===a&&(a=b[ib.ee]);b.hasOwnProperty(ib.de)&&!0===a&&(a=b[ib.de]);b.hasOwnProperty(ib.be)&&!1===a&&(a=b[ib.be]);return a}};var E={Eb:"_ee",wc:"_syn_or_mod",ai:"_uei",md:"_eu",Yh:"_pci",Zc:"event_callback",fc:"event_timeout",da:"gtag.config",xa:"gtag.get",wa:"purchase",cb:"refund",Pa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",Wf:"view_cart",je:"add_to_wishlist",Ga:"view_item",ie:"view_promotion",he:"select_promotion",Vc:"select_item",$b:"view_item_list",fe:"add_payment_info",Vf:"add_shipping_info",Ia:"value_key",Ha:"value_callback",ma:"allow_ad_personalization_signals",gd:"restricted_data_processing",vb:"allow_google_signals",
na:"cookie_expires",yb:"cookie_update",Bb:"session_duration",kc:"session_engaged_time",za:"user_properties",Ka:"transport_url",O:"ads_data_redaction",ld:"user_data",hc:"first_party_collection",B:"ad_storage",F:"analytics_storage",Zd:"region",$d:"wait_for_update"};
E.Me=[E.wa,E.cb,E.Pa,E.$a,E.ab,E.Wf,E.je,E.Ga,E.ie,E.he,E.$b,E.Vc,E.fe,E.Vf];E.Le=[E.ma,E.vb,E.yb];E.Ne=[E.na,E.fc,E.Bb,E.kc];var Ac=function(a){sa("GTM",a)};var Bc=function(a,b){this.m=a;this.defaultValue=void 0===b?!1:b};var Cc=new Bc(1936,!0),Dc=new Bc(364295992),Ec=new Bc(1933);var Fc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Gc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Hc,Ic=function(){if(void 0===Hc){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}Hc=a}else Hc=a}return Hc};var Kc=function(a,b){this.m=b===Jc?a:""};Kc.prototype.toString=function(){return this.m+""};var Jc={};var Lc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Oc;a:{var Pc=pa.navigator;if(Pc){var Qc=Pc.userAgent;if(Qc){Oc=Qc;break a}}Oc=""}var Rc=function(a){return-1!=Oc.indexOf(a)};var Tc=function(a,b,c){this.m=c===Sc?a:""};Tc.prototype.toString=function(){return this.m.toString()};var Uc=function(a){return a instanceof Tc&&a.constructor===Tc?a.m:"type_error:SafeHtml"},Sc={},Vc=function(a){var b=Ic(),c=b?b.createHTML(a):a;return new Tc(c,null,Sc)},Wc=new Tc(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Sc);var Xc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Uc(Wc);return!c.parentElement}),Yc=function(a,b){if(Xc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Uc(b)},Zc=null,$c=/^[\w+/_-]+[=]{0,2}$/,ad=function(a){if(!a.querySelector)return"";var b=a.querySelector("script[nonce]");if(b){var c=
b.nonce||b.getAttribute("nonce");if(c&&$c.test(c))return c}return""};var F=window,I=document,bd=navigator,cd=I.currentScript&&I.currentScript.src,dd=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},ed=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},fd=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ic(),h=f?f.createScriptURL(a):a;e=new Kc(h,Jc);d.src=e instanceof Kc&&e.constructor===Kc?e.m:"type_error:TrustedResourceUrl";
var k;var l=d.ownerDocument&&d.ownerDocument.defaultView;l&&l!=pa?k=ad(l.document):(null===Zc&&(Zc=ad(pa.document)),k=Zc);var n=k;n&&d.setAttribute("nonce",n);ed(d,b);c&&(d.onerror=c);var p=I.getElementsByTagName("script")[0]||I.body||I.head;p.parentNode.insertBefore(d,p);return d},gd=function(){if(cd){var a=cd.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},hd=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||I.body||I.head;d.parentNode.insertBefore(c,d);ed(c,b);void 0!==a&&(c.src=a);return c},id=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},jd=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},kd=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+
b,c)},J=function(a){F.setTimeout(a,0)},od=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pd=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qd=function(a){var b=I.createElement("div"),c=Vc("A<div>"+a+"</div>");Yc(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},rd=function(a,b,c){c=c||100;for(var d={},e=0;e<
b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},sd=function(a){bd.sendBeacon&&bd.sendBeacon(a)||id(a)},td=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ud=function(){var a={};this.m=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[Ec.m]=!0}};ud.m=void 0;ud.o=function(){return ud.m?ud.m:ud.m=new ud};var vd=function(a){return ud.o().m(a.m,a.defaultValue)};var wd=[];function xd(){var a=dd("google_tag_data",{});a.ics||(a.ics={entries:{},set:yd,update:zd,addListener:Ad,notifyListeners:Bd,active:!1,usedDefault:!1});return a.ics}
function yd(a,b,c,d,e,f){var h=xd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)k[a]=r;q&&F.setTimeout(function(){k[a]===r&&r.quiet&&(r.quiet=!1,Cd(a),Bd(),sa("TAGGING",2))},f)}}}
function zd(a,b){var c=xd();c.active=!0;if(void 0!=b){var d=Dd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Dd(a);f.quiet?(f.quiet=!1,Cd(a)):h!==d&&Cd(a)}}function Ad(a,b){wd.push({ff:a,gh:b})}function Cd(a){for(var b=0;b<wd.length;++b){var c=wd[b];Ba(c.ff)&&-1!==c.ff.indexOf(a)&&(c.yf=!0)}}function Bd(a){for(var b=0;b<wd.length;++b){var c=wd[b];if(c.yf){c.yf=!1;try{c.gh({ef:a})}catch(d){}}}}
var Dd=function(a){var b=xd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Ed=function(a){return(xd().entries[a]||{}).initial},Fd=function(a){return!(xd().entries[a]||{}).quiet},Gd=function(){return vd(Ec)?xd().active:!1},Hd=function(){return xd().usedDefault},Id=function(a,b){xd().addListener(a,b)},Jd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Fd(b[e]))return!0;return!1}if(c()){var d=!1;Id(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Kd=
function(a,b){if(!1===Dd(b)){var c=!1;Id([b],function(d){!c&&Dd(b)&&(a(d),c=!0)})}};function Ld(a){for(var b=[],c=0;c<Md.length;c++){var d=a(Md[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Md=[E.B,E.F],Nd=function(a){var b=a[E.Zd];b&&Ac(40);var c=a[E.$d];c&&Ac(41);for(var d=Ba(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==E.Zd&&f!==E.$d)if(-1<m(Md,f)){var h=f,k=a[f],l=d[e];xd().set(h,k,l,"US","US-CA",c)}else{}},Od=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<m(Md,c)){var d=c,e=a[c];xd().update(d,e)}else{}xd().notifyListeners(b)},M=function(a){var b=Dd(a);return void 0!=b?b:!0},Pd=function(){return"G1"+Ld(Dd)},Qd=function(a,b){Jd(a,b)};var Sd=function(a){return Rd?I.querySelectorAll(a):null},Td=function(a,b){if(!Rd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ud=!1;if(I.querySelectorAll)try{var Vd=I.querySelectorAll(":root");Vd&&1==Vd.length&&Vd[0]==I.documentElement&&(Ud=!0)}catch(a){}var Rd=Ud;var Wd=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var Xd=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};Ac(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Yd=function(a){var b=Xd(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var ee=/:[0-9]+$/,fe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ge(a.protocol)||ge(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(ee,"").toLowerCase());return he(a,b,c,d,e)},he=function(a,b,c,d,e){var f,h=ge(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ne(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ee,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||sa("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=m(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=fe(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ge=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},oe=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||sa("TAGGING",1),c="/"+c);var d=b.hostname.replace(ee,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},pe=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=oe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var qe=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),re=new RegExp(/support|noreply/i),se="SCRIPT STYLE IMG SVG PATH BR".split(" "),te=["BR"];function ue(a){var b;if(a===I.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=ue(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function ve(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function we(a){if(0==a.length)return null;var b;b=ve(a,function(c){return!re.test(c.Tc)});b=ve(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=ve(b,function(c){return!Wd(c.element)});return b[0]}
function xe(){var a;var b=[],c=I.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=se.indexOf(f.tagName.toUpperCase()))){for(var h=!1,k=0;k<f.childElementCount&&1E4>k;k++)if(!(0<=te.indexOf(f.children[k].tagName.toUpperCase()))){h=!0;break}h||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],q=0;q<n.length;q++){var r=n[q],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(qe);if(t){var v=
t[0],x;if(F.location){var z=he(F.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||p.push({element:r,Tc:v})}}}var w=we(p),y=[];if(w){var A=w.element;y.push({Tc:w.Tc,querySelector:ue(A),tagName:A.tagName,isVisible:!Wd(A),type:1,uf:!0})}return{elements:y,status:10<p.length?"3":l.status}}var Le={},O=null,Me=Math.random();Le.K="GTM-M27JCG";Le.vc="4s0";Le.Vh="";Le.Pf="ChEI8ITJhAYQ2tOx3dDZtf+VARIjACBzP1u+WszOlDRGLgpv/dpkS2UufnsJKHZTOqpUiI8iKEIaAg6Q";var Ne={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Oe={__paused:!0,__tg:!0},Pe;for(Pe in Ne)Ne.hasOwnProperty(Pe)&&(Oe[Pe]=!0);var Qe="www.googletagmanager.com/gtm.js";
var Re=Qe,Se=La(""),Te=null,Ue=null,Ve="//www.googletagmanager.com/a?id="+Le.K+"&cv=52",We={},Xe={},Ye=function(){var a=O.sequence||1;O.sequence=a+1;return a};Le.Of="";var Ze={},$e=new Ea,af={},bf={},ef={name:"dataLayer",set:function(a,b){B(Za(a,b),af);cf()},get:function(a){return df(a,2)},reset:function(){$e=new Ea;af={};cf()}},df=function(a,b){return 2!=b?$e.get(a):ff(a)},ff=function(a){var b,c=a.split(".");b=b||[];for(var d=af,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==m(b,d))return}return d},gf=function(a,b){bf.hasOwnProperty(a)||($e.set(a,b),B(Za(a,b),af),cf())},cf=function(a){Ga(bf,function(b,c){$e.set(b,c);B(Za(b,void 0),
af);B(Za(b,c),af);a&&delete bf[b]})},jf=function(a,b,c){Ze[a]=Ze[a]||{};Ze[a][b]=hf(b,c)},hf=function(a,b){var c,d=1!==(void 0===b?2:b)?ff(a):$e.get(a);"array"===db(d)||"object"===db(d)?c=B(d):c=d;return c},kf=function(a,b){if(Ze[a])return Ze[a][b]},lf=function(a,b){Ze[a]&&delete Ze[a][b]};var of={},pf=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===of[a]&&(of[a]=Math.floor(Math.random()*b));return of[a]};var qf=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function rf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function sf(a){return vd(Dc)?"null"!==a.origin:!0};var vf=function(a,b,c,d){return tf(d)?rf(a,String(b||uf()),c):[]},yf=function(a,b,c,d,e){if(tf(e)){var f=wf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=xf(f,function(h){return h.Dc},b);if(1===f.length)return f[0].id;f=xf(f,function(h){return h.Rb},c);return f[0]?f[0].id:void 0}}};function zf(a,b,c,d){var e=uf(),f=window;sf(f)&&(f.document.cookie=a);var h=uf();return e!=h||void 0!=c&&0<=vf(b,h,!1,d).indexOf(c)}
var Df=function(a,b,c){function d(u,t,v){if(null==v)return delete h[t],u;h[t]=v;return u+"; "+t+"="+v}function e(u,t){if(null==t)return delete h[t],u;h[t]=!0;return u+"; "+t}if(!tf(c.Ea))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Af(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.gi);f=d(f,"samesite",
c.hi);c.ii&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=Bf(),p=0;p<n.length;++p){var q="none"!==n[p]?n[p]:void 0,r=d(f,"domain",q);r=e(r,c.flags);if(!Cf(q,c.path)&&zf(r,a,b,c.Ea))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Cf(l,c.path)?1:zf(f,a,b,c.Ea)?0:1},Ef=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Df(a,b,c)};
function xf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function wf(a,b,c){for(var d=[],e=vf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Dc:1*l[0]||1,Rb:1*l[1]||1}))}}return d}
var Af=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Kf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Lf=/(^|\.)doubleclick\.net$/i,Cf=function(a,b){return Lf.test(window.document.location.hostname)||"/"===b&&Kf.test(a)},uf=function(){return sf(window)?window.document.cookie:""},Bf=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Lf.test(e)||Kf.test(e)||a.push("none");return a},tf=function(a){if(!vd(Ec)||!a||!Gd())return!0;if(!Fd(a))return!1;var b=Dd(a);return null==b?!0:!!b};var Mf=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Nf=function(){return Rc("iPhone")&&!Rc("iPod")&&!Rc("iPad")};Rc("Opera");Rc("Trident")||Rc("MSIE");Rc("Edge");!Rc("Gecko")||-1!=Oc.toLowerCase().indexOf("webkit")&&!Rc("Edge")||Rc("Trident")||Rc("MSIE")||Rc("Edge");-1!=Oc.toLowerCase().indexOf("webkit")&&!Rc("Edge")&&Rc("Mobile");Rc("Macintosh");Rc("Windows");Rc("Linux")||Rc("CrOS");var Of=pa.navigator||null;Of&&(Of.appVersion||"").indexOf("X11");Rc("Android");Nf();Rc("iPad");Rc("iPod");Nf()||Rc("iPad")||Rc("iPod");Oc.toLowerCase().indexOf("kaios");var Pf=function(){if(!F.crypto)return Math.random();try{var a=new Uint32Array(1);F.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Qf=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var Rf=function(a,b){for(var c=Math.round(2147483647*(b?Pf():Math.random())),d=sf(F)?I.cookie:null,e=""+(a?"":bd.userAgent)+(d||"")+(I.referrer||""),f=e.length,h=F.history.length;0<h;)e+=h--^f++;return[c^qf(e)&2147483647,Math.round(Oa()/1E3)].join(".")},Uf=function(a,b,c,d,e){var f=Sf(b);return yf(a,f,Tf(c),d,e)},Vf=function(a,b,c,d){var e=""+Sf(c),f=Tf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Sf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Tf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b,c){var d,e=Number(null!=a.ob?a.ob:void 0);0!==e&&(d=new Date((b||Oa())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Xf=["1"],Yf={},bg=function(a){var b=Zf(a.prefix);if(!Yf[b]&&!$f(b,a.path,a.domain)){var c=Rf();if(0===ag(b,c,a)){var d=dd("google_tag_data",{});d._gcl_au?sa("GTM",57):d._gcl_au=c}$f(b,a.path,a.domain)}};function ag(a,b,c){var d=Vf(b,"1",c.domain,c.path),e=Wf(c);e.Ea="ad_storage";return Ef(a,d,e)}function $f(a,b,c){var d=Uf(a,b,c,Xf,"ad_storage");d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(a){for(var b=[],c=I.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Vd:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function dg(a,b){var c=cg(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Vd]||(d[c[e].Vd]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),ka:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].Vd].push(h)}}return d};function eg(){for(var a=fg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function gg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var fg,hg;
function ig(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=hg[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}fg=fg||gg();hg=hg||eg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;var ng=function(){var a=kg,b=lg,c=mg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){jd(I,"mousedown",d);jd(I,"keyup",d);jd(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},og=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};mg().decorators.push(f)},pg=function(a,b,c){for(var d=mg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,p=!!h.sameHost;if(l&&(p||n!==I.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Va(e,h.callback())}}return e},mg=function(){var a=dd("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qg=/(.*?)\*(.*?)\*(.*)/,rg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sg=/^(?:www\.|m\.|amp\.)+/,tg=/([^?#]+)(\?[^#]*)?(#.*)?/;function ug(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var wg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);fg=fg||gg();hg=hg||eg();for(var l=[],n=0;n<k.length;n+=3){var p=n+1<k.length,q=n+2<k.length,r=k.charCodeAt(n),u=p?k.charCodeAt(n+1):0,t=q?k.charCodeAt(n+2):0,v=r>>2,x=(r&3)<<4|u>>4,z=(u&15)<<2|t>>6,w=t&63;q||(w=64,p||(z=64));l.push(fg[v],fg[x],fg[z],fg[w])}h=l.join("");f.call(e,h)}}var y=b.join("*");return["1",vg(y),
y].join("*")},vg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}jg=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^jg[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},yg=function(){return function(a){var b=oe(F.location.href),
c=b.search.replace("?",""),d=fe(c,"_gl",!0)||"";a.query=xg(d)||{};var e=me(b,"fragment").match(ug("_gl"));a.fragment=xg(e&&e[3]||"")||{}}},zg=function(a){var b=yg(),c=mg();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Va(d,e.query),a&&Va(d,e.fragment));return d},xg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=qg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],p=0;p<
b;++p)if(n===vg(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=ig(r[u+1]);return q}}}}catch(t){}};function Ag(a,b,c,d){function e(p){var q=p,r=ug(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=tg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Bg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=pg(b,1,c),e=pg(b,2,c),f=pg(b,3,c);if(Wa(d)){var h=wg(d);c?Cg("_gl",h,a):Dg("_gl",h,a,!1)}if(!c&&Wa(e)){var k=wg(e);Dg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Dg(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Cg(n,p,q);break a}}"string"==typeof q&&Ag(n,p,q,void 0)}}
function Dg(a,b,c,d){if(c.href){var e=Ag(a,b,c.href,void 0===d?!1:d);Lc.test(e)&&(c.href=e)}}
function Cg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Ag(a,b,c.action);Lc.test(n)&&(c.action=n)}}}
var kg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Bg(e,e.hostname)}}catch(h){}},lg=function(a){try{if(a.action){var b=me(oe(a.action),"host");Bg(a,b)}}catch(c){}},Eg=function(a,b,c,d){ng();og(a,b,"fragment"===c?2:1,!!d,!1)},Fg=function(a,b){ng();og(a,[he(F.location,"host",!0)],b,!0,!0)},Gg=function(){var a=I.location.hostname,b=rg.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sg,""),l=e.replace(sg,""),n;if(!(n=k===l)){var p="."+l;n=k.substring(k.length-p.length,k.length)===p}return n},Hg=function(a,b){return!1===a?!1:a||b||Gg()};var Ig={};var Jg=/^\w+$/,Kg=/^[\w-]+$/,Lg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Mg=function(){if(!vd(Ec)||!Gd())return!0;var a=Dd("ad_storage");return null==a?!0:!!a},Ng=function(a,b){Fd("ad_storage")?Mg()?a():Kd(a,"ad_storage"):b?sa("TAGGING",3):Jd(function(){Ng(a,!0)},["ad_storage"])},Pg=function(a){return Og(a).map(function(b){return b.ka})},Og=function(a){var b=[];if(!sf(F)||!I.cookie)return b;var c=vf(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Xb:d.Xb},e++){var f=Qg(c[e]);if(null!=f){var h=f,k=h.version;d.Xb=h.ka;var l=h.timestamp,n=h.labels,p=Ca(b,function(q){return function(r){return r.ka===q.Xb}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Rg(p.labels,n||[])):b.push({version:k,ka:d.Xb,timestamp:l,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Sg(b)};function Rg(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Tg(a){return a&&"string"==typeof a&&a.match(Jg)?a:"_gcl"}
var Vg=function(){var a=oe(F.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"wbraid"),e=me(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||fe(f,"gclid",void 0);c=c||fe(f,"gclsrc",void 0);d=d||fe(f,"wbraid",void 0)}return Ug(b,c,e,d)},Ug=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Kg.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(Kg))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Wg=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Yg=function(a){var b=Vg();Ng(function(){Xg(b,a)})};
function Xg(a,b,c,d){function e(p,q){var r=Zg(p,f);r&&(Ef(r,q,h),k=!0)}b=b||{};d=d||[];var f=Tg(b.prefix);c=c||Oa();var h=Wf(b,c,!0);h.Ea="ad_storage";var k=!1,l=Math.round(c/1E3),n=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==Ig.enable_gbraid_cookie_write?0:Ig.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var ah=function(a,b){var c=zg(!0);Ng(function(){for(var d=Tg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Lg[f]){var h=Zg(f,d),k=c[h];if(k){var l=Math.min($g(k),Oa()),n;b:{var p=l,q=h;if(sf(F))for(var r=vf(q,I.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if($g(r[u])>p){n=!0;break b}n=!1}if(!n){var t=Wf(b,l,!0);t.Ea="ad_storage";Ef(h,k,t)}}}}Xg(Ug(c.gclid,c.gclsrc),b)})},Zg=function(a,b){var c=Lg[a];if(void 0!==c)return b+c},$g=function(a){return 0!==bh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Qg(a){var b=bh(a.split("."));return 0===b.length?null:{version:b[0],ka:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function bh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Kg.test(a[2])?[]:a}
var ch=function(a,b,c,d,e){if(Ba(b)&&sf(F)){var f=Tg(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=Zg(a[l],f);if(n){var p=vf(n,I.cookie,void 0,"ad_storage");p.length&&(k[n]=p.sort()[p.length-1])}}return k};Ng(function(){Eg(h,b,c,d)})}},Sg=function(a){return a.filter(function(b){return Kg.test(b.ka)})},dh=function(a,b){if(sf(F)){for(var c=Tg(b.prefix),d={},e=0;e<a.length;e++)Lg[a[e]]&&(d[a[e]]=Lg[a[e]]);Ng(function(){Ga(d,function(f,h){var k=vf(c+h,I.cookie,void 0,"ad_storage");k.sort(function(u,
t){return $g(t)-$g(u)});if(k.length){var l=k[0],n=$g(l),p=0!==bh(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==bh(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Xg(q,b,n,p)}})})}};function eh(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var fh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Gd()){var c=Vg();if(eh(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Fg(function(){return d},3);Fg(function(){var e={};return e._up="1",e},1)}}};function gh(a,b){var c=Tg(b),d=Zg(a,c);if(!d)return 0;for(var e=Og(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function hh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var ih=/^\d+\.fls\.doubleclick\.net$/;function jh(a,b){Fd(E.B)?M(E.B)?a():Kd(a,E.B):b?Ac(42):Qd(function(){jh(a,!0)},[E.B])}function kh(a){var b=oe(F.location.href),c=me(b,"host",!1);if(c&&c.match(ih)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function lh(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=kh("gcl"+a);if(d)return d.split(".")}var e=Tg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!M(E.B)&&c,h;h=Vg()[a]||[];if(0<h.length)return f?["0"]:h}var k=Zg(a,e);return k?Pg(k):[]}function mh(a){var b=[];Ga(a,function(c,d){d=Sg(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].ka);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var nh=function(a){var b=kh("gac");return b?!M(E.B)&&a?"0":decodeURIComponent(b):mh(Mg()?dg():{})},oh=function(a){var b=kh("gacgb");return b?!M(E.B)&&a?"0":decodeURIComponent(b):mh(Mg()?dg("_gac_gb",!0):{})},ph=function(a,b,c){var d=Vg(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!Wg(k,c)||e.push({ka:f,Ad:k});!h||c&&"dc"!==c||e.push({ka:h,Ad:"ds"});jh(function(){bg(b);var l=Yf[Zf(b.prefix)],n=!1;if(l&&0<e.length)for(var p=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.ka,t=r.Ad,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===t?x+"?gbraid="+u+"&auid="+l:x+"?gclid="+u+"&auid="+l+"&gclsrc="+t;sd(x);n=p[v]=!0}}null==a&&(a=n);if(a&&
l){var z=Zf(b.prefix),w=Yf[z];w&&ag(z,w,b)}})},qh=function(a){var b;if(kh("gclaw")||kh("gac")||0<(Vg().aw||[]).length)b=!1;else{var c;if(0<(Vg().gb||[]).length)c=!0;else{var d=Math.max(gh("aw",a),hh(Mg()?dg():{}));c=Math.max(gh("gb",a),hh(Mg()?dg("_gac_gb",!0):{}))>d}b=c}return b};var rh=/[A-Z]+/,sh=/\s/,th=function(a){if(g(a)&&(a=Na(a),!sh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rh.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},vh=function(a){for(var b={},c=0;c<a.length;++c){var d=th(a[c]);d&&(b[d.id]=d)}uh(b);var e=[];Ga(b,function(f,h){e.push(h)});return e};
function uh(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wh=function(){var a=!1;return a};var yh=function(a,b,c,d){return(2===xh()||d||"http:"!=F.location.protocol?a:b)+c},xh=function(){var a=gd(),b;if(1===a)a:{var c=Re;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=I.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Mh=function(a){if(M(E.B))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=pe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=pe(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Nh=function(){var a;if(!(a=Se)){var b;if(!0===F._gtmdgs)b=!0;else{var c=bd&&bd.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ka("1");return pf(1,100)<d?pf(2,2):-1},Oh=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Ph=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Th=function(){var a=!1;return a},Vh=function(a){var b=df("gtm.allowlist")||df("gtm.whitelist");b&&Ac(9);Th()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&Ya(Ma(b),Qh),d=df("gtm.blocklist")||
df("gtm.blacklist");d||(d=df("tagTypeBlacklist"))&&Ac(3);d?Ac(8):d=[];Uh()&&(d=Ma(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=m(Ma(d),"google")&&Ac(2);var e=d&&Ya(Ma(d),Rh),f={};return function(h){var k=h&&h[ib.Sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Xe[k]||[],n=a(k,l);if(b){var p;if(p=
n)a:{if(0>m(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>m(c,l[q])){Ac(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var r=!1;if(d){var u=0<=m(e,k);if(u)r=u;else{var t=Fa(e,l||[]);t&&Ac(10);r=t}}var v=!n||r;v||!(0<=m(l,"sandboxedScripts"))||c&&-1!==m(c,"sandboxedScripts")||(v=Fa(e,Sh));return f[k]=v}},Uh=function(){return Ph.test(F.location&&F.location.hostname)};var Wh={active:!0,isAllowed:function(){return!0}},Xh=function(a){var b=O.zones;return b?b.checkState(Le.K,a):Wh},Yh=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Zh=function(){},$h=function(){};var ai=!1,bi=0,ci=[];function di(a){if(!ai){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ai=!0;for(var e=0;e<ci.length;e++)J(ci[e])}ci.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function ei(){if(!ai&&140>bi){bi++;try{I.documentElement.doScroll("left"),di()}catch(a){F.setTimeout(ei,50)}}}var ki=function(a){ai?a():ci.push(a)};var mi=function(a,b){this.m=!1;this.H=[];this.W={tags:[]};this.ca=!1;this.o=this.C=0;li(this,a,b)},ni=function(a,b,c,d){if(Oe.hasOwnProperty(b)||"__zone"===b)return-1;var e={};gb(d)&&(e=B(d,e));e.id=c;e.status="timeout";return a.W.tags.push(e)-1},oi=function(a,b,c,d){var e=a.W.tags[b];e&&(e.status=c,e.executionTime=d)},pi=function(a){if(!a.m){for(var b=a.H,c=0;c<b.length;c++)b[c]();a.m=!0;a.H.length=0}},li=function(a,b,c){va(b)&&qi(a,b);c&&F.setTimeout(function(){return pi(a)},Number(c))},qi=function(a,
b){var c=Ra(function(){return J(function(){b(Le.K,a.W)})});a.m?c():a.H.push(c)},ri=function(a){a.C++;return Ra(function(){a.o++;a.ca&&a.o>=a.C&&pi(a)})};var si=function(){function a(d){return!xa(d)||0>d?0:d}if(!O._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=xa(ef.get("gtm.start"))?ef.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Ue-b)}}};var wi={},xi=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},yi=!1;
var zi=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||Ac(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}si();return F[b]},Ai=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=xi();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Bi=function(a){if(!Gd())return;var b=xi();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var Di=function(a){},Ci=function(){return F.GoogleAnalyticsObject||"ga"},Ei=function(a,b){return function(){var c=xi(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Ji=function(){return"&tc="+Qb.filter(function(a){return a}).length},Mi=function(){2022<=Ki().length&&Li()},Oi=function(){Ni||(Ni=F.setTimeout(Li,500))},Li=function(){Ni&&(F.clearTimeout(Ni),Ni=void 0);void 0===Pi||Qi[Pi]&&!Ri&&!Si||(Ti[Pi]||Ui.rh()||0>=Vi--?(Ac(1),Ti[Pi]=!0):(Ui.Ih(),id(Ki()),Qi[Pi]=!0,Wi=Xi=Yi=Si=Ri=""))},Ki=function(){var a=Pi;if(void 0===a)return"";var b=ta("GTM"),c=ta("TAGGING");return[Zi,Qi[a]?"":"&es=1",$i[a],b?"&u="+b:"",c?"&ut="+c:"",Ji(),Ri,Si,Yi?Yi:"",Xi,Wi,"&z=0"].join("")},
bj=function(){Zi=aj()},aj=function(){return[Ve,"&v=3&t=t","&pid="+Da(),"&rv="+Le.vc].join("")},cj="0.005000">Math.random(),Zi=aj(),Qi={},Ri="",Si="",Wi="",Xi="",Yi="",Pi=void 0,$i={},Ti={},Ni=void 0,Ui=function(a,b){var c=0,d=0;return{rh:function(){if(c<a)return!1;Oa()-d>=b&&(c=0);return c>=a},Ih:function(){Oa()-d>=b&&(c=0);c++;d=Oa()}}}(2,1E3),Vi=1E3,dj=function(a,b,c){if(cj&&!Ti[a]&&b){a!==Pi&&(Li(),Pi=a);var d,e=String(b[ib.Sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Ri=Ri?Ri+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Sb[h]?"1":"2")+d;Wi=Wi?Wi+"."+k:"&ti="+k;Oi();Mi()}},ej=function(a,b,c){if(cj&&!Ti[a]){a!==Pi&&(Li(),Pi=a);var d=c+b;Si=Si?Si+"."+d:"&epr="+d;Oi();Mi()}},fj=function(a,b,c){};
function gj(a,b,c,d){var e=Qb[a],f=hj(a,b,c,d);if(!f)return null;var h=Xb(e[ib.Ye],c,[]);if(h&&h.length){var k=h[0];f=gj(k.index,{onSuccess:f,onFailure:1===k.pf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function hj(a,b,c,d){function e(){if(f[ib.Eg])k();else{var x=Yb(f,c,[]);var y=ni(c.Ta,String(f[ib.Sa]),Number(f[ib.Ze]),x[ib.Fg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var D=Oa()-G;dj(c.id,Qb[a],"5");oi(c.Ta,y,"success",
D);h()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var D=Oa()-G;dj(c.id,Qb[a],"6");oi(c.Ta,y,"failure",D);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;dj(c.id,f,"1");var C=function(){var D=Oa()-G;dj(c.id,f,"7");oi(c.Ta,y,"exception",D);A||(A=!0,k())};var G=Oa();try{Wb(x,c)}catch(D){C(D)}}}var f=Qb[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.Gd(f))return null;var n=Xb(f[ib.$e],c,[]);if(n&&n.length){var p=n[0],q=gj(p.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!q)return null;h=q;k=2===p.pf?l:q}if(f[ib.Te]||f[ib.Hg]){var r=f[ib.Te]?Rb:
c.Ph,u=h,t=k;if(!r[a]){e=Ra(e);var v=ij(a,r,e);h=v.onSuccess;k=v.onFailure}return function(){r[a](u,t)}}return e}function ij(a,b,c){var d=[],e=[];b[a]=jj(d,e,c);return{onSuccess:function(){b[a]=kj;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=lj;for(var f=0;f<e.length;f++)e[f]()}}}function jj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kj(a){a()}function lj(a,b){b()};var oj=function(a,b){for(var c=[],d=0;d<Qb.length;d++)if(a[d]){var e=Qb[d];var f=ri(b.Ta);try{var h=gj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,n=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Sb[p];l.call(k,{Gf:n,zf:q?q.priorityOverride||0:0,fh:h})}else mj(d,b),f()}catch(t){f()}}var r=b.Ta;r.ca=!0;r.o>=r.C&&pi(r);c.sort(nj);for(var u=0;u<c.length;u++)c[u].fh();
return 0<c.length};function nj(a,b){var c,d=b.zf,e=a.zf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Gf,k=b.Gf;f=h>k?1:h<k?-1:0}return f}function mj(a,b){if(!cj)return;var c=function(d){var e=b.Gd(Qb[d])?"3":"4",f=Xb(Qb[d][ib.Ye],b,[]);f&&f.length&&c(f[0].index);dj(b.id,Qb[d],e);var h=Xb(Qb[d][ib.$e],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pj=!1,vj=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(pj)return!1;pj=!0}var d=Xh(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Xh(Number.MAX_SAFE_INTEGER)}cj&&!Ti[b]&&Pi!==b&&(Li(),Pi=b,Wi=Ri="",$i[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Oi());var f=a.eventCallback,h=a.eventTimeout,k={id:b,name:c,Gd:Vh(d.isAllowed),Ph:[],vf:function(){Ac(6)},df:qj(b),Ta:new mi(f,
h)};sj(b,k.Ta);var l=bc(k);e&&(l=tj(l));var n=oj(l,k);"gtm.js"!==c&&"gtm.sync"!==c||Di(Le.K);switch(c){case "gtm.init":n&&Ac(20)}return uj(l,n)};function qj(a){return function(b){cj&&(hb(b)||fj(a,"input",b))}}
function sj(a,b){jf(a,"event",1);jf(a,"ecommerce",1);jf(a,"gtm");jf(a,"eventModel");}function rj(){var a={};a.event=hf("event",1);a.ecommerce=hf("ecommerce",1);a.gtm=hf("gtm");a.eventModel=hf("eventModel");return a}function tj(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ne[String(Qb[c][ib.Sa])]&&(b[c]=!0);return b}
function uj(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Qb[c]&&!Oe[String(Qb[c][ib.Sa])])return!0;return!1}function wj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return oe(""+c+b).href}}function xj(a,b){return yj()?wj(a,b):void 0}function yj(){var a=!1;return a};var zj=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Aj=function(a){var b=new zj;b.eventModel=a;return b},Bj=function(a,b){a.targetConfig=b;return a},Cj=function(a,b){a.containerConfig=b;return a},Dj=function(a,b){a.remoteConfig=b;return a},Ej=function(a,b){a.globalConfig=
b;return a},Fj=function(a,b){a.onSuccess=b;return a},Gj=function(a,b){a.setContainerTypeLoaded=b;return a},Hj=function(a,b){a.getContainerTypeLoaded=b;return a},Ij=function(a,b){a.onFailure=b;return a};zj.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Jj=function(a){function b(e){Ga(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ga(c,function(e){d.push(e)});return d};var Kj;if(3===Le.vc.length)Kj="g";else{var Lj="G";Kj=Lj}
var Mj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Kj,OPT:"o"},Nj=function(a){var b=Le.K.split("-"),c=b[0].toUpperCase(),d=Mj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Le.vc.length){var h="w";f="2"+h}else f="";return f+d+Le.vc+e};var Oj=function(){};var Pj=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Qj=function(a,b){this.o=a;this.m=null;this.H={};this.ca=0;this.W=void 0===b?500:b;this.C=null};oa(Qj,Oj);
var Sj=function(a){return"function"===typeof a.o.__tcfapi||null!=Rj(a)};
Qj.prototype.addEventListener=function(a){var b={},c=Gc(function(){return a(b)}),d=0;-1!==this.W&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.W));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Pj(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Tj(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Qj.prototype.removeEventListener=function(a){a&&a.listenerId&&Tj(this,"removeEventListener",null,a.listenerId)};
var Vj=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=Uj(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||vd(Cc)&&"CH"===a.publisherCC)?!0:n&&Uj(a.purpose.consents,b)}else l=!0;else l=
1===k?a.purpose&&a.vendor?Uj(a.purpose.legitimateInterests,b)&&Uj(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Uj=function(a,b){return!(!a||!a[b])},Tj=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Rj(a)){Wj(a);var f=++a.ca;a.H[f]=c;if(a.m){var h={};a.m.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Rj=function(a){if(a.m)return a.m;a.m=Qf(a.o,"__tcfapiLocator");return a.m},
Wj=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(d){}},Mf(a.o,a.C))};var Xj=!0;Xj=!1;var Yj={1:0,3:0,4:0,7:3,9:3,10:3};function Zj(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var ak=Zj("",550),bk=Zj("",500);function ck(){var a=O.tcf||{};return O.tcf=a}
var dk=function(a,b){this.C=a;this.m=b;this.o=Oa();},ek=function(a){},fk=function(a){},lk=function(){var a=ck(),b=new Qj(F,Xj?3E3:-1),c=new dk(b,a);if((gk()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Sj(b))){a.active=!0;a.Sb={};hk();var d=null;Xj?d=F.setTimeout(function(){ik(a);jk(a);d=null},bk):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)ik(a),jk(a),ek(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=kk(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Yj)if(Yj.hasOwnProperty(k))if("1"===k){var l,n=e,p=!0;p=void 0===p?!1:p;var q;var r=n;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Pj(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:Vj(n,"1",0):!1;h["1"]=l}else h[k]=Vj(e,k,Yj[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Sb=f,jk(a),ek(c))}}),fk(c)}catch(e){d&&(clearTimeout(d),d=null),ik(a),jk(a)}}};function ik(a){a.type="e";a.tcString="tcunavailable";Xj&&(a.Sb=kk())}function hk(){var a={};Nd((a.ad_storage="denied",a.wait_for_update=ak,a))}
var gk=function(){var a=!1;a=!0;return a};function kk(){var a={},b;for(b in Yj)Yj.hasOwnProperty(b)&&(a[b]=!0);return a}function jk(a){var b={};Od((b.ad_storage=a.Sb["1"]?"granted":"denied",b))}
var mk=function(){var a=ck();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},nk=function(){var a=ck();return a.active?a.tcString||"":""},ok=function(){var a=ck();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},pk=function(a){if(!Yj.hasOwnProperty(String(a)))return!0;var b=ck();return b.active&&b.Sb?!!b.Sb[String(a)]:!0};var qk=!1;function rk(a){var b=String(F.location).split(/[?#]/)[0],c=Le.Pf||F._CONSENT_MODE_SALT;return a?c?String(qf(b+a+c)):"0":""}
function sk(a){function b(t){var v;O.reported_gclid||(O.reported_gclid={});v=O.reported_gclid;var x;x=qk&&h&&(!Gd()||M(E.B))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(Q,R){R&&(z.push(Q+"="+encodeURIComponent(R)),w[Q]=!0)},A="https://www.google.com";if(Gd()){var C=M(E.B);y("gcs",Pd());t&&y("gcu","1");Hd()&&y("gcd","G1"+Ld(Ed));O.dedupe_gclid||
(O.dedupe_gclid=""+Rf());y("rnd",O.dedupe_gclid);if((!l||n&&"aw.ds"!==n)&&M(E.B)){var G=Pg("_gcl_aw");y("gclaw",G.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",tk(d,p));var D=!1;D=!0;C||!d&&!D||(A="https://pagead2.googlesyndication.com")}
y("gdpr_consent",nk()),y("gdpr",ok());"1"===zg(!1)._up&&y("gtm_up","1");y("gclid",tk(d,l));y("gclsrc",n);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",tk(d,q)),!w.gbraid&&Gd()&&M(E.B))){var H=Pg("_gcl_gb");y("gclgb",H.join("."))}y("gtm",Nj(!e));qk&&h&&M(E.B)&&(bg(f||{}),y("auid",Yf[Zf(f.prefix)]||""));
a.jf&&y("did",a.jf);var N=A+"/pagead/landing?"+z.join("&");sd(N)}}var c=!!a.wd,d=!!a.sa,e=a.T,f=void 0===a.Bc?{}:a.Bc,h=void 0===a.Hc?!0:a.Hc,k=Vg(),l=k.gclid||"",n=k.gclsrc,p=k.dclid||"",q=k.gbraid||"",r=!c&&((!l||n&&"aw.ds"!==n?!1:!0)||q),u=Gd();if(r||u)u?Qd(function(){b();M(E.B)||Kd(function(t){return b(!0,t.ef)},E.B)},[E.B]):b()}function tk(a,b){var c=a&&!M(E.B);return b&&c?"0":b}
var Fk=function(a){return!(void 0===a||null===a||0===(a+"").length)},Gk=function(a,b){var c;if(2===b.ja)return a("ord",Da(1E11,1E13)),!0;if(3===b.ja)return a("ord","1"),a("num",Da(1E11,1E13)),!0;if(4===b.ja)return Fk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.ja)c="1";else if(6===b.ja)c=b.Qd;else return!1;Fk(c)&&a("qty",c);Fk(b.Cc)&&a("cost",b.Cc);Fk(b.transactionId)&&a("ord",b.transactionId);return!0},Jk=function(a,b,c){function d(D,H,N){r.hasOwnProperty(D)||(H=String(H),q.push(";"+D+"="+(N?
H:Hk(H))))}function e(D,H){H&&d(D,H)}var f=a.yd,h=a.Td,k=a.protocol,l=a.Dd;k+=h?"//"+f+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var n=";",p=!1;p=!0;M(E.B)||l||!a.sa&&!p||(k="https://ade.googlesyndication.com/ddm/activity",n="/",h=!1);var q=[n,"src="+Hk(f),";type="+Hk(a.Cd),";cat="+Hk(a.Jb)],r=a.$g||{};Ga(r,function(D,H){q.push(";"+Hk(D)+"="+Hk(H+""))});
if(Gk(d,a)){Fk(a.Sc)&&d("u",a.Sc);Fk(a.Rc)&&d("tran",a.Rc);d("gtm",Nj());Gd()&&!l&&(d("gcs",Pd()),c&&d("gcu","1"));e("gdpr_consent",nk()),e("gdpr",ok());"1"===zg(!1)._up&&d("gtm_up","1");!1===a.Og&&d("npa","1");if(a.xd){var u=void 0===a.sa?!0:!!a.sa,t=lh("dc",a.Na,u),v=!1;t&&t.length&&(d("gcldc",t.join(".")),v=!0);if(Ik&&!v&&qh(a.Na)){var x=lh("gb",a.Na,u);x&&x.length&&d("gclgb",x.join("."));var z=oh(u);z&&d("gacgb",
z)}else{var w=lh("aw",a.Na,u);w&&w.length&&d("gclaw",w.join("."));var y=nh(u);y&&d("gac",y)}bg({prefix:a.Na,ob:a.Xg,domain:a.Wg,flags:a.ci});var A=Yf[Zf(a.Na)];A&&d("auiddc",A)}Fk(a.Nd)&&d("prd",a.Nd,!0);Ga(a.Xd,function(D,H){d(D,H)});q.push(b||"");if(Fk(a.Jc)){var C=a.Jc||"";M(E.B)||l||!a.sa||(C=pe(C));d("~oref",C)}var G=k+q.join("")+"?";h?hd(G,a.onSuccess):id(G,a.onSuccess,a.onFailure)}else J(a.onFailure)},Ik=!1;
Ik=!0;var Hk=encodeURIComponent,Kk=function(a,b){!Gd()||a.Dd?Jk(a,b):Qd(function(){Jk(a,b);M(E.B)||Kd(function(){Jk(a,b,!0)},E.B)},[E.B])};var fl=function(){var a=!0;pk(7)&&pk(9)&&pk(10)||(a=!1);var b=!0;b=!1;b&&!el()&&(a=!1);return a},el=function(){var a=!0;pk(3)&&pk(4)||(a=!1);return a};var Cl=!1;function Dl(){var a=O;return a.gcq=a.gcq||new El}
var Fl=function(a,b,c){Dl().register(a,b,c)},Gl=function(a,b,c,d){Dl().push("event",[b,a],c,d)},Hl=function(a,b){Dl().push("config",[a],b)},Il=function(a,b,c,d){Dl().push("get",[a,b],c,d)},Jl={},Kl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.m=!1},Ll=function(a,b,c,d,e){this.type=a;this.C=b;this.T=c||"";this.m=d;this.o=e},El=function(){this.H={};this.o={};this.m=[];this.C={AW:!1,UA:!1}},Ml=function(a,b){var c=th(b);return a.H[c.containerId]=
a.H[c.containerId]||new Kl},Nl=function(a,b,c){if(b){var d=th(b);if(d&&1===Ml(a,b).status){Ml(a,b).status=2;var e={};cj&&(e.timeoutId=F.setTimeout(function(){Ac(38);Oi()},3E3));a.push("require",[e],d.containerId);Jl[d.containerId]=Oa();if(wh()){}else{var h=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=xj(c,h)||k;fd(l)}}}},Ol=function(a,b,c,d){if(d.T){var e=Ml(a,d.T),f=e.o;if(f){var h=B(c),k=B(e.targetConfig[d.T]),l=B(e.containerConfig),n=B(e.remoteConfig),p=B(a.o),q=df("gtm.uniqueEventId"),r=th(d.T).prefix,u=Hj(Gj(Ij(Fj(Ej(Dj(Cj(Bj(Aj(h),k),l),n),p),function(){ej(q,r,"2");}),function(){
ej(q,r,"3");}),function(t,v){a.C[t]=v}),function(t){return a.C[t]});try{ej(q,r,"1");f(d.T,b,d.C,u)}catch(t){ej(q,r,"4");}}}};aa=El.prototype;
aa.register=function(a,b,c){var d=Ml(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){B(d.remoteConfig,c);d.remoteConfig=c}var e=th(a),f=Jl[e.containerId];if(void 0!==f){var h=O[e.containerId].bootstrap,k=e.prefix.toUpperCase();O[e.containerId]._spx&&(k=k.toLowerCase());var l=df("gtm.uniqueEventId"),n=k,p=Oa()-h;if(cj&&!Ti[l]){l!==Pi&&(Li(),Pi=l);var q=n+"."+Math.floor(h-f)+
"."+Math.floor(p);Xi=Xi?Xi+","+q:"&cl="+q}delete Jl[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(Oa()/1E3);Nl(this,c,b[0][E.Ka]||this.o[E.Ka]);Cl&&c&&Ml(this,c).m&&(d=!1);this.m.push(new Ll(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(Oa()/1E3);0<this.m.length?this.m.splice(1,0,new Ll(a,d,c,b,!1)):this.m.push(new Ll(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1,e={};this.m.length;){var f=this.m[0];if(f.o)Cl?!f.T||Ml(this,f.T).m?(f.o=!1,this.m.push(f)):c.push(f):(f.o=!1,this.m.push(f));else switch(f.type){case "require":if(3!==Ml(this,f.T).status&&!a){Cl&&this.m.push.apply(this.m,c);return}cj&&F.clearTimeout(f.m[0].timeoutId);break;case "set":Ga(f.m[0],function(r,u){B(Za(r,u),b.o)});break;case "config":e.va={};Ga(f.m[0],function(r){return function(u,t){B(Za(u,t),r.va)}}(e));var h=!!e.va[E.nc];delete e.va[E.nc];
var k=Ml(this,f.T),l=th(f.T),n=l.containerId===l.id;h||(n?k.containerConfig={}:k.targetConfig[f.T]={});k.m&&h||Ol(this,E.da,e.va,f);k.m=!0;delete e.va[E.Eb];n?B(e.va,k.containerConfig):B(e.va,k.targetConfig[f.T]);Cl&&(d=!0);break;case "event":e.Wb={};Ga(f.m[0],function(r){return function(u,t){B(Za(u,t),r.Wb)}}(e));Ol(this,f.m[1],e.Wb,f);break;case "get":var p={},q=(p[E.Ia]=f.m[0],p[E.Ha]=f.m[1],p);Ol(this,E.xa,q,f)}this.m.shift();e={va:e.va,Wb:e.Wb}}Cl&&(this.m.push.apply(this.m,c),d&&this.flush())};
aa.getRemoteConfig=function(a){return Ml(this,a).remoteConfig};var Pl=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":td(a,"className"),"gtm.elementId":a["for"]||od(a,"id")||"","gtm.elementTarget":a.formTarget||td(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||td(a,"href")||a.src||a.code||a.codebase||"";return d},Ql=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Rl=function(a,b,c){Ql(a)[b]=c},Sl=function(a,b,c,d){var e=Ql(a),f=Qa(e,b,d);e[b]=c(f)},Tl=function(a,b,c){var d=Ql(a);return Qa(d,b,c)};var Ul=!!F.MutationObserver,Vl=void 0,Wl=function(a){if(!Vl){var b=function(){var c=I.body;if(c)if(Ul)(new MutationObserver(function(){for(var e=0;e<Vl.length;e++)J(Vl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;jd(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Vl.length;e++)J(Vl[e])}))})}};Vl=[];I.body?b():J(b)}Vl.push(a)};
var Xl=function(a,b,c){function d(){var h=a();f+=e?(Oa()-e)*h.playbackRate/1E3:0;e=Oa()}var e=0,f=0;return{createEvent:function(h,k,l){var n=a(),p=n.kf,q=void 0!==l?Math.round(l):void 0!==k?Math.round(n.kf*k):Math.round(n.Zg),r=void 0!==k?Math.round(100*k):0>=p?0:Math.round(q/p*100),u=I.hidden?!1:.5<=Yd(c);d();var t=void 0;void 0!==b&&(t=[b]);var v=Pl(c,"gtm.video",t);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=h;v["gtm.videoUrl"]=n.url;v["gtm.videoTitle"]=n.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=u;return v},Lh:function(){e=Oa()},ud:function(){d()}}};var Yl=!1,Zl=[];function $l(){if(!Yl){Yl=!0;for(var a=0;a<Zl.length;a++)J(Zl[a])}}var am=function(a){Yl?J(a):Zl.push(a)};Object.freeze({dl:1,id:1});var bm="HA GF G UA AW DC".split(" "),cm=!1,dm={},em=!1;function fm(a,b){var c={event:a};b&&(c.eventModel=B(b),b[E.Zc]&&(c.eventCallback=b[E.Zc]),b[E.fc]&&(c.eventTimeout=b[E.fc]));return c}function gm(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ye()});return a["gtm.uniqueEventId"]}
function hm(){return cm}
var km={config:function(a){var b,c;void 0===c&&(c=Ye());return b},consent:function(a){function b(){hm()&&B(a[2],{subcommand:a[1]})}if(3===a.length){Ac(39);var c=Ye(),d=a[1];"default"===d?(b(),Nd(a[2])):"update"===d&&(b(),Od(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&g(b)){var c;if(2<a.length){if(!gb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=fm(b,c),e=void 0;void 0===e&&Ye();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){em=!0;hm();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(){},set:function(a){var b;2==a.length&&gb(a[1])?b=B(a[1]):3==a.length&&
g(a[1])&&(b={},gb(a[2])||Ba(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lm={policy:!0};var mm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},om=function(a){var b=nm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Im=function(a){if(Hm(a))return a;this.m=a};Im.prototype.lh=function(){return this.m};var Hm=function(a){return!a||"object"!==db(a)||gb(a)?!1:"getUntrustedUpdateValue"in a};Im.prototype.getUntrustedUpdateValue=Im.prototype.lh;var Jm=[],Km=!1,Lm=!1,Mm=!1,Nm=function(a){return F["dataLayer"].push(a)},Om=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Pm(a){var b=a._clear;Ga(a,function(d,e){"_clear"!==d&&(b&&gf(d,void 0),gf(d,e))});Te||(Te=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ye(),a["gtm.uniqueEventId"]=c,gf("gtm.uniqueEventId",c));return vj(a)}function Qm(){var a=Jm[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ia(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Rm(){for(var a=!1;!Mm&&0<Jm.length;){var b=!1;if(b&&!Lm&&Qm()){var c={};Jm.unshift((c.event=
"gtm.init",c));Lm=!0}var d=!1;if(d&&!Km&&Qm()){var e={};Jm.unshift((e.event="gtm.init_consent",e));Km=!0}Mm=!0;delete af.eventModel;cf();var f=Jm.shift();if(null!=f){var h=Hm(f);
if(h){var k=f;f=Hm(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<l.length;n++){var p=l[n],q=df(p,1);if(Ba(q)||gb(q))q=B(q);bf[p]=q}}try{if(va(f))try{f.call(ef)}catch(y){}else if(Ba(f)){var r=f;if(g(r[0])){var u=r[0].split("."),t=u.pop(),v=r.slice(1),x=df(u.join("."),2);if(void 0!==x&&null!==x)try{x[t].apply(x,v)}catch(y){}}}else{if(Ia(f)){a:{var z=f;if(z.length&&g(z[0])){var w=km[z[0]];if(w&&(!h||!lm[z[0]])){f=
w(z);break a}}f=void 0}if(!f){Mm=!1;continue}}a=Pm(f)||a}}finally{h&&cf(!0)}}Mm=!1}return!a}function Sm(){var a=Rm();try{mm(F["dataLayer"],Le.K)}catch(b){}return a}
var Um=function(){var a=dd("dataLayer",[]),b=dd("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ki(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});am(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Im(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Jm.push.apply(Jm,e);if(300<
this.length)for(Ac(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Rm()&&k};var d=a.slice(0);Jm.push.apply(Jm,d);Tm()&&J(Sm)},Tm=function(){var a=!0;return a};var Vm={};Vm.oc=new String("undefined");
var Wm=function(a){this.m=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vm.oc?b:a[d]);return c.join("")}};Wm.prototype.toString=function(){return this.m("undefined")};Wm.prototype.valueOf=Wm.prototype.toString;Vm.Kg=Wm;Vm.sd={};Vm.Yg=function(a){return new Wm(a)};var Xm={};Vm.Jh=function(a,b){var c=Ye();Xm[c]=[a,b];return c};Vm.hf=function(a){var b=a?0:1;return function(c){var d=Xm[c];if(d&&"function"===typeof d[b])d[b]();Xm[c]=void 0}};Vm.qh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vm.Eh=function(a){if(a===Vm.oc)return a;var b=Ye();Vm.sd[b]=a;return'google_tag_manager["'+Le.K+'"].macro('+b+")"};Vm.Ah=function(a,b,c){a instanceof Vm.Kg&&(a=a.m(Vm.Jh(b,c)),b=ua);return{mh:a,onSuccess:b}};var Ym=["input","select","textarea"],Zm=["button","hidden","image","reset","submit"],$m=function(a){var b=a.tagName.toLowerCase();return!Ca(Ym,function(c){return c===b})||"input"===b&&Ca(Zm,function(c){return c===a.type.toLowerCase()})?!1:!0},an=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):rd(a,["form"],100)},bn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if($m(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var nn=F.clearTimeout,on=F.setTimeout,W=function(a,b,c){if(wh()){b&&J(b)}else return fd(a,b,c)},pn=function(){return new Date},qn=function(){return F.location.href},rn=function(a){return me(oe(a),"fragment")},sn=function(a){return ne(oe(a))},tn=function(a,b){return df(a,b||2)},un=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Nm(a)):d=Nm(a);return d},vn=function(a,b){F[a]=b},X=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},wn=function(a,b,c){return vf(a,b,void 0===c?!0:!!c)},xn=function(a,b,c){return 0===Ef(a,b,c)},yn=function(a,b){if(wh()){b&&J(b)}else hd(a,b)},zn=function(a){return!!Tl(a,"init",!1)},An=function(a){Rl(a,"init",!0)},Bn=function(a){var b=Re+"?id="+encodeURIComponent(a)+"&l=dataLayer";W(yh("https://","http://",b))},Cn=function(a,b,c){cj&&(hb(a)||fj(c,b,a))};var Dn=Vm.Ah;function $n(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var ao=new Ea;function bo(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=ao.get(e);f||(f=new RegExp(b,d),ao.set(e,f));return f.test(a)}catch(h){return!1}}
function co(a,b){function c(h){var k=oe(h),l=me(k,"protocol"),n=me(k,"host",!0),p=me(k,"port"),q=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function eo(a){return fo(a)?1:0}
function fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ba(c)){for(var d=0;d<c.length;d++){var e=B(a,{});B({arg1:c[d],any_of:void 0},e);if(eo(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return $n(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=m(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return bo(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return co(b,c)}return!1};var go=encodeURI,Y=encodeURIComponent,ho=id;var io=function(a,b){if(!a)return!1;var c=me(oe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var jo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Sp(){return F.gaGlobal=F.gaGlobal||{}}var Tp=function(){var a=Sp();a.hid=a.hid||Da();return a.hid},Up=function(a,b){var c=Sp();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Eq=window,Fq=document,Gq=function(a){var b=Eq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Eq["ga-disable-"+a])return!0;try{var c=Eq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=rf("AMP_TOKEN",String(Fq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Fq.getElementById("__gaOptOutExtension")?!0:!1};var Hq={};function Jq(a){delete a.eventModel[E.Eb];Lq(a.eventModel)}var Lq=function(a){Ga(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[E.za]||{};Ga(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Oq=function(a,b,c){Gl(b,c,a)},Pq=function(a,b,c){Gl(b,c,a,!0)},Wq=function(a,b){};
function Qq(a,b){}var Z={g:{}};
Z.g.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var y=[],A=w.split(","),C=0;C<A.length;C++){var G=Number(A[C]);if(isNaN(G))return[];p.test(A[C])||y.push(G)}return y}function c(){var w=0,y=0;return function(){var A=Xd(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);y=Math.max(v.scrollTop+C,y);return{ah:w,bh:y}}}function d(){u=X("self");
t=u.document;v=t.scrollingElement||t.body&&t.body.parentNode;z=c()}function e(w,y,A,C){var G=l(y),D={},H;for(H in G){D.Ya=H;if(G.hasOwnProperty(D.Ya)){var N=Number(D.Ya);w<N||(un({event:"gtm.scrollDepth","gtm.scrollThreshold":N,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":G[D.Ya].join(",")}),Sl("sdl",y,function(Q){return function(R){delete R[Q.Ya];return R}}(D),{}))}D={Ya:D.Ya}}}function f(){var w=z(),y=w.ah,A=w.bh,C=y/v.scrollWidth*100,G=A/v.scrollHeight*100;e(y,"horiz.pix",
q.sc,r.Oe);e(C,"horiz.pct",q.qc,r.Oe);e(A,"vert.pix",q.sc,r.af);e(G,"vert.pct",q.qc,r.af);Rl("sdl","pending",!1)}function h(){var w=250,y=!1;t.scrollingElement&&t.documentElement&&u.addEventListener&&(w=50,y=!0);var A=0,C=!1,G=function(){C?A=on(G,w):(A=0,f(),zn("sdl")&&!a()&&(kd(u,"scroll",D),kd(u,"resize",D),Rl("sdl","init",!1)));C=!1},D=function(){y&&z();A?C=!0:(A=on(G,w),Rl("sdl","pending",!0))};return D}function k(w,y,A){if(y){var C=b(String(w));Sl("sdl",A,function(G){for(var D=0;D<C.length;D++){var H=
String(C[D]);G.hasOwnProperty(H)||(G[H]=[]);G[H].push(y)}return G},{})}}function l(w){return Tl("sdl",w,{})}function n(w){J(w.vtp_gtmOnSuccess);var y=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,G=w.vtp_verticalThresholdUnits,D=w.vtp_verticalThresholdsPixels,H=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.sc:k(A,y,"horiz.pix");break;case q.qc:k(C,y,"horiz.pct")}switch(G){case q.sc:k(D,y,"vert.pix");break;case q.qc:k(H,
y,"vert.pct")}zn("sdl")?Tl("sdl","pending")||(x||(d(),x=!0),J(function(){return f()})):(d(),x=!0,v&&(An("sdl"),Rl("sdl","pending",!0),J(function(){f();if(a()){var N=h();jd(u,"scroll",N);jd(u,"resize",N)}else Rl("sdl","init",!1)})))}var p=/^\s*$/,q={qc:"PERCENT",sc:"PIXELS"},r={af:"vertical",Oe:"horizontal"},u,t,v,x=!1,z;(function(w){Z.__sdl=w;Z.__sdl.h="sdl";Z.__sdl.i=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?n(w):am(function(){n(w)})})}();

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.i=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);Cn(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.g.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Kk(b,c)}(function(b){Z.__flc=b;Z.__flc.h="flc";Z.__flc.i=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=jo(b.vtp_customVariable||[],"key","value")||{},e={Jb:b.vtp_activityTag,xd:c,Na:b.vtp_conversionCookiePrefix||void 0,Cc:void 0,ja:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,yd:b.vtp_advertiserId,Cd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,
Jc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Qd:void 0,Td:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Rc:b.vtp_transactionVariable,transactionId:void 0,Sc:b.vtp_userVariable,Xd:d},f=!1;var h=!(M(E.B)||f)&&void 0!=tn(E.O)&&!1!==tn(E.O);e.sa=h;if(b.vtp_enableAttribution){var k=b.vtp_attributionFields||[];if(k.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(e,X("google_attr").build([jo(k,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.i=!0;Z.__e.priorityOverride=0})(function(a){var b=String(kf(a.vtp_gtmEventId,"event"));return b})}();
Z.g.f=["google"],function(){(function(a){Z.__f=a;Z.__f.h="f";Z.__f.i=!0;Z.__f.priorityOverride=0})(function(a){var b=tn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(oe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):sn(String(b)):String(b)})}();
Z.g.j=["google"],function(){(function(a){Z.__j=a;Z.__j.h="j";Z.__j.i=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Cn(c,"j",a.vtp_gtmEventId);return c})}();

Z.g.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Kk(b,c)}(function(b){Z.__fls=b;Z.__fls.h="fls";Z.__fls.i=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(u){u=u||[];for(var t=[],v=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],x=0;x<u.length;x++)for(var z=0;z<v.length;z++){var w=v[z],y=u[x][w[1]];void 0!==y&&t.push(w[0]+
(x+1)+":"+Y(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(tn("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var h=e[f].split(":");h[1]=h[1]&&Y(h[1])||"";e[f]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=jo(b.vtp_customVariable||
[],"key","value")||{},n={Jb:b.vtp_activityTag,xd:k,Na:b.vtp_conversionCookiePrefix||void 0,Cc:b.vtp_revenue,ja:"ITEM_SOLD"===b.vtp_countingMethod?6:5,yd:b.vtp_advertiserId,Cd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,Jc:b.vtp_useImageTag?void 0:b.vtp_url,Nd:c,protocol:"",Qd:b.vtp_quantity,Td:!b.vtp_useImageTag,Rc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Sc:b.vtp_userVariable,Xd:l},p=!1;var q=!(M(E.B)||p)&&void 0!=tn(E.O)&&!1!==tn(E.O);n.sa=q;if(b.vtp_enableAttribution){var r=b.vtp_attributionFields||[];if(r.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(n,X("google_attr").build([jo(r,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(n)})}();Z.g.r=["google"],function(){(function(a){Z.__r=a;Z.__r.h="r";Z.__r.i=!0;Z.__r.priorityOverride=0})(function(a){return Da(a.vtp_min,a.vtp_max)})}();
Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.i=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:tn("gtm.url",1))||qn();var d=b[a("vtp_component")];if(!d||"URL"==d)return sn(String(c));var e=oe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?Ba(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var p=0;p<n.length;p++){var q=me(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.i=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=tn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Cn(d,"v",a.vtp_gtmEventId);return d})}();
Z.g.tl=["google"],function(){function a(b){return function(){if(b.Id&&b.Jd>=b.Id)b.Fd&&X("self").clearInterval(b.Fd);else{b.Jd++;var c=pn().getTime();un({event:b.M,"gtm.timerId":b.Fd,"gtm.timerEventNumber":b.Jd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Id,"gtm.timerStartTime":b.Ff,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ff,"gtm.triggers":b.Sh})}}}(function(b){Z.__tl=b;Z.__tl.h="tl";Z.__tl.i=!0;Z.__tl.priorityOverride=0})(function(b){J(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{M:b.vtp_eventName,Jd:0,interval:Number(b.vtp_interval),Id:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Sh:String(b.vtp_uniqueTriggerId||"0"),Ff:pn().getTime()};c.Fd=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.g.ua=["google"],function(){function a(q){return M(q)}function b(q,r,u){var t=!1;if(Gd()&&!t&&!e[q]){var v=!M(E.F),x=function(){var z=xi(),w="gtm"+Ye(),y=n(r);y["&gtm"]=Nj(!0);var A={name:w};l(y,A,!0);var C=void 0,G=A._useUp;z(function(){var D=z.getByName(u);D&&(C=D.get("clientId"))});
z("create",q,A);v&&M(E.F)&&(v=!1,z(function(){var D=z.getByName(w);!D||D.get("clientId")===C&&G||(y["&gcs"]=Pd(),y["&gcu"]="1",D.set(y),D.send("pageview"))}));z(function(){z.remove(w)})};Kd(x,E.F);Kd(x,E.B);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k={urlPassthrough:!0},l=function(q,r,u){var t=0;if(q)for(var v in q)if(!k[v]&&
q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var x=h[v]?La(q[v]):q[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;t++}return t},n=function(q){var r={};q.vtp_gaSettings&&B(jo(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);B(jo(q.vtp_fieldsToSet,"fieldName","value"),r);M(E.F)||(r.storage="none");M(E.B)||(r.allowAdFeatures=!1,r.storeGac=!1);fl()||(r.allowAdFeatures=!1);el()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(La(r.urlPassthrough)){r._useUp=!0;var u=!1;Gd()&&!u&&(r._cs=a)}return r},p=function(q){function r(la,U){void 0!==U&&D("set",la,U)}var u={},t={},v={},x={};
if(q.vtp_gaSettings){var z=q.vtp_gaSettings;B(jo(z.vtp_contentGroup,"index","group"),t);B(jo(z.vtp_dimension,"index","dimension"),v);B(jo(z.vtp_metric,"index","metric"),x);var w=B(z);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;q=B(q,w)}B(jo(q.vtp_contentGroup,"index","group"),t);B(jo(q.vtp_dimension,"index","dimension"),v);B(jo(q.vtp_metric,"index","metric"),x);var y=n(q),A=zi(q.vtp_functionName);if(va(A)){var C="",G="";q.vtp_setTrackerName&&"string"==
typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(G=q.vtp_trackerName,C=G+"."):(G="gtm"+Ye(),C=G+".");var D=function(la){var U=[].slice.call(arguments,0);U[0]=C+U[0];A.apply(window,U)},H=function(la,U){return void 0===U?U:la(U)},N=function(la,U){if(U)for(var mb in U)U.hasOwnProperty(mb)&&D("set",la+mb,U[mb])},Q=function(){},R={name:G};l(y,R,!0);var ea=q.vtp_trackingId||u.trackingId;A("create",ea,R);D("set","&gtm",Nj(!0));var S=!1;
Gd()&&!S&&(D("set","&gcs",Pd()),b(ea,q,G));y._x_19&&(null==cd&&delete y._x_19,y._x_20&&!d[G]&&(d[G]=!0,A(Ei(G,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(la,U){void 0!==q[U]&&D("set",la,q[U])})("nonInteraction","vtp_nonInteraction");N("contentGroup",t);N("dimension",v);N("metric",x);var L={};l(y,L,!1)&&D("set",L);var T;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var la=y&&y.hitCallback;va(la)&&la();q.vtp_gtmOnSuccess()});var V=function(la,U){return void 0===q[la]?u[U]:q[la]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var ja={hitType:"event",eventCategory:String(V("vtp_eventCategory","category")),eventAction:String(V("vtp_eventAction","action")),eventLabel:H(String,
V("vtp_eventLabel","label")),eventValue:H(Ka,V("vtp_eventValue","value"))};l(T,ja,!1);D("send",ja);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){D("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var wa=function(la){return tn("transaction"+la,1)},K=wa("Id");D("ecommerce:addTransaction",{id:K,affiliation:wa("Affiliation"),revenue:wa("Total"),shipping:wa("Shipping"),tax:wa("Tax")});for(var da=wa("Products")||[],ya=0;ya<da.length;ya++){var Ja=da[ya];D("ecommerce:addItem",{id:K,sku:Ja.sku,name:Ja.name,category:Ja.category,price:Ja.price,
quantity:Ja.quantity})}D("ecommerce:send");}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var vb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:vb})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Xa="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Xa})}T?D("send","pageview",T):D("send","pageview");
q.vtp_autoLinkDomains&&Ai(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);La(y.urlPassthrough)&&Bi(C)}if(!c){var kb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(kb="internal/"+kb);c=!0;var ie=xj(y._x_19,"/analytics.js"),ld=yh("https:","http:","//www.google-analytics.com/"+kb,y&&!!y.forceSSL);W("analytics.js"===kb&&ie?ie:ld,function(){var la=
xi();la&&la.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else J(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.h="ua";Z.__ua.i=!0;Z.__ua.priorityOverride=0})(function(q){Qd(function(){p(q)},
[E.F,E.B])})}();




Z.g.ytl=["google"],function(){function a(){var t=Math.round(1E9*Math.random())+"";return I.getElementById(t)?a():t}function b(t,v){if(!t)return!1;for(var x=0;x<p.length;x++)if(0<=t.indexOf("//"+p[x]+"/"+v))return!0;return!1}function c(t,v){var x=t.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(v){var z=t.setAttribute,w;var y=-1!==x.indexOf("?")?"&":"?";if(-1<x.indexOf("origin="))w=x+y+"enablejsapi=1";else{if(!r){var A=X("document");r=A.location.protocol+"//"+A.location.hostname;
A.location.port&&(r+=":"+A.location.port)}w=x+y+"enablejsapi=1&origin="+encodeURIComponent(r)}z.call(t,"src",w);return!0}}return!1}function d(t,v){if(!t.getAttribute("data-gtm-yt-inspected-"+v.Wd)&&(t.setAttribute("data-gtm-yt-inspected-"+v.Wd,"true"),c(t,v.rf))){t.id||(t.id=a());var x=X("YT"),z=x.get(t.id);z||(z=new x.Player(t.id));var w=f(z,v),y={},A;for(A in w)y.sb=A,w.hasOwnProperty(y.sb)&&z.addEventListener(y.sb,function(C){return function(G){return w[C.sb](G.data)}}(y)),y={sb:y.sb}}}function e(t){J(function(){function v(){for(var z=
x.getElementsByTagName("iframe"),w=z.length,y=0;y<w;y++)d(z[y],t)}var x=X("document");v();Wl(v)})}function f(t,v){var x,z;function w(){R=Xl(function(){return{url:L,title:T,kf:S,Zg:t.getCurrentTime(),playbackRate:V}},v.Wd,t.getIframe());S=0;T=L="";V=1;return y}function y(K){switch(K){case q.PLAYING:S=Math.round(t.getDuration());L=t.getVideoUrl();if(t.getVideoData){var da=t.getVideoData();T=da?da.title:""}V=t.getPlaybackRate();v.Ug?un(R.createEvent("start")):R.ud();ea=l(v.Gh,v.Fh,t.getDuration());return A(K);
default:return y}}function A(){ja=t.getCurrentTime();za=pn().getTime();R.Lh();Q();return C}function C(K){var da;switch(K){case q.ENDED:return D(K);case q.PAUSED:da="pause";case q.BUFFERING:var ya=t.getCurrentTime()-ja;da=1<Math.abs((pn().getTime()-za)/1E3*V-ya)?"seek":da||"buffering";t.getCurrentTime()&&(v.Tg?un(R.createEvent(da)):R.ud());N();return G;case q.UNSTARTED:return w(K);default:return C}}function G(K){switch(K){case q.ENDED:return D(K);case q.PLAYING:return A(K);case q.UNSTARTED:return w(K);
default:return G}}function D(){for(;z;){var K=x;nn(z);K()}v.Sg&&un(R.createEvent("complete",1));return w(q.UNSTARTED)}function H(){}function N(){z&&(nn(z),z=0,x=H)}function Q(){if(ea.length&&0!==V){var K=-1,da;do{da=ea[0];if(da.Va>t.getDuration())return;K=(da.Va-t.getCurrentTime())/V;if(0>K&&(ea.shift(),0===ea.length))return}while(0>K);x=function(){z=0;x=H;0<ea.length&&ea[0].Va===da.Va&&(ea.shift(),un(R.createEvent("progress",da.xf,da.Bf)));Q()};z=on(x,1E3*K)}}var R,ea=[],S,L,T,V,ja,za,wa=w(q.UNSTARTED);
z=0;x=H;return{onStateChange:function(K){wa=wa(K)},onPlaybackRateChange:function(K){ja=t.getCurrentTime();za=pn().getTime();R.ud();V=K;N();Q()}}}function h(t){for(var v=t.split(","),x=v.length,z=[],w=0;w<x;w++){var y=parseInt(v[w],10);isNaN(y)||100<y||0>y||z.push(y/100)}z.sort(function(A,C){return A-C});return z}function k(t){for(var v=t.split(","),x=v.length,z=[],w=0;w<x;w++){var y=parseInt(v[w],10);isNaN(y)||0>y||z.push(y)}z.sort(function(A,C){return A-C});return z}function l(t,v,x){var z=t.map(function(A){return{Va:A,
Bf:A,xf:void 0}});if(!v.length)return z;var w=v.map(function(A){return{Va:A*x,Bf:void 0,xf:A}});if(!z.length)return w;var y=z.concat(w);y.sort(function(A,C){return A.Va-C.Va});return y}function n(t){var v=!!t.vtp_captureStart,x=!!t.vtp_captureComplete,z=!!t.vtp_capturePause,w=h(t.vtp_progressThresholdsPercent+""),y=k(t.vtp_progressThresholdsTimeInSeconds+""),A=!!t.vtp_fixMissingApi;if(v||x||z||w.length||y.length){var C={Ug:v,Sg:x,Tg:z,Fh:w,Gh:y,rf:A,Wd:void 0===t.vtp_uniqueTriggerId?"":t.vtp_uniqueTriggerId},
G=X("YT"),D=function(){e(C)};J(t.vtp_gtmOnSuccess);if(G)G.ready&&G.ready(D);else{var H=X("onYouTubeIframeAPIReady");vn("onYouTubeIframeAPIReady",function(){H&&H();D()});J(function(){for(var N=X("document"),Q=N.getElementsByTagName("script"),R=Q.length,ea=0;ea<R;ea++){var S=Q[ea].getAttribute("src");if(b(S,"iframe_api")||b(S,"player_api"))return}for(var L=N.getElementsByTagName("iframe"),T=L.length,V=0;V<T;V++)if(!u&&c(L[V],C.rf)){W("https://www.youtube.com/iframe_api");u=!0;break}})}}else J(t.vtp_gtmOnSuccess)}
var p=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,u=!1;(function(t){Z.__ytl=t;Z.__ytl.h="ytl";Z.__ytl.i=!0;Z.__ytl.priorityOverride=0})(function(t){t.vtp_triggerStartOption?n(t):ki(function(){n(t)})})}();
Z.g.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.h="cid";Z.__cid.i=!0;Z.__cid.priorityOverride=0})(function(){return Le.K})}();

Z.g.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Z.__gclidw=c;Z.__gclidw.h="gclidw";Z.__gclidw.i=!0;Z.__gclidw.priorityOverride=100})(function(c){J(c.vtp_gtmOnSuccess);var d,e,f,h;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(h=c.vtp_cookieFlags));var k=null;c.vtp_enableCookieUpdateFeature&&(k=
!0,void 0!==c.vtp_cookieUpdate&&(k=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:h};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Gg())&&ah(a,l));Yg(l);dh(["aw","dc"],l);b?ph(k,l):ph(k,l,"dc");var n=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");ch(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,n)}var q=tn(E.O);sk({wd:!1,
sa:void 0!=q&&!1!==q,Bc:l,Hc:!0});c.vtp_enableUrlPassthrough&&fh(["aw","dc","gb"])});}();


Z.g.aev=["google"],function(){function a(u,t,v){var x=u||kf(t,"gtm");if(x)return x[v]}function b(u,t,v,x,z){z||(z="element");var w=t+"."+v,y;if(p.hasOwnProperty(w))y=p[w];else{var A=a(u,t,z);if(A&&(y=x(A),p[w]=y,q.push(w),35<q.length)){var C=q.shift();delete p[C]}}return y}function c(u,t,v,x){var z=a(u,t,r[v]);return void 0!==z?z:x}function d(u,t){if(!u)return!1;var v=e(qn());Ba(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var x=[v],z=0;z<t.length;z++){var w=t[z];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(u))return!1}else{var y=w;if(0!=y.length){if(0<=e(u).indexOf(y))return!1;x.push(e(y))}}}return!io(u,x)}function e(u){n.test(u)||(u="http://"+u);return me(oe(u),"HOST",!0)}function f(u,t,v,x){switch(u){case "SUBMIT_TEXT":return b(t,v,"FORM."+u,h,"formSubmitElement")||x;case "LENGTH":var z=b(t,v,"FORM."+u,k);return void 0===z?x:z;case "INTERACTED_FIELD_ID":return l(t,v,"id",x);case "INTERACTED_FIELD_NAME":return l(t,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(t,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(t,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,v,"interactSequenceNumber");return void 0===y?x:y;default:return x}}function h(u){switch(u.tagName.toLowerCase()){case "input":return od(u,"value");case "button":return pd(u);default:return null}}function k(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)$m(u.elements[v])&&
t++;return t}}function l(u,t,v,x){var z=a(u,t,"interactedFormField");return z&&od(z,v)||x}var n=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Z.__aev=u;Z.__aev.h="aev";Z.__aev.i=!0;Z.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,x=u.vtp_varType,z;switch(x){case "TAG_NAME":var w=a(z,t,"element");return w&&w.tagName||v;case "TEXT":return b(z,t,x,pd)||v;case "URL":var y;a:{var A=String(a(z,t,"elementUrl")||v||""),C=oe(A),G=String(u.vtp_component||"URL");switch(G){case "URL":y=A;break a;case "IS_OUTBOUND":y=
d(A,u.vtp_affiliatedDomains);break a;default:y=me(C,G,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===u.vtp_attribute)D=c(z,t,x,v);else{var H=u.vtp_attribute,N=a(z,t,"element");D=N&&od(N,H)||v||""}return D;case "MD":var Q=u.vtp_mdValue,R=b(z,t,"MD",jn);return Q&&R?mn(R,Q)||v:R||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),z,t,v);default:var ea=c(z,t,x,v);Cn(ea,"aev",u.vtp_gtmEventId);return ea}})}();

Z.g.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.h="gas";Z.__gas.i=!0;Z.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[ib.Sa]=null;c[ib.Bg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.g.awct=["google"],function(){var a=!1,b=[],c=function(h){var k=X("google_trackConversion"),l=h.gtm_onFailure;"function"==typeof k?k(h)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(h){Z.__awct=h;Z.__awct.h="awct";Z.__awct.i=!0;Z.__awct.priorityOverride=
0})(function(h){function k(C,G,D){return"DATA_LAYER"===C?tn(D):h[G]}function l(){v("gdpr_consent",nk()),v("gdpr",ok());}function n(){var C=[];return C}function p(C){var G=!0,D=[];if(C){D=n();}G&&b.push(r)}function q(){Hd()&&v("gcd","G1"+Ld(Ed));}si();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,
google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Nj()};r.google_gtm_experiments={capi:!0};h.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=tn(E.O)&&!1!==tn(E.O)&&(r.google_gtm_url_processor=function(C){return C=Mh(C)});var u=function(C){return function(G,D,H){var N=k(C,D,H);N&&(r[G]=N)}},
t=u("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&(t=u(h.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),r.google_conversion_items&&
r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(C){return{value:C.price,quantity:C.quantity,item_id:C.id}})));var v=function(C,G){void 0!==G&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[C]=G)},x=function(C){return function(G,D,H,N){var Q=k(C,D,H);N(Q)&&v(G,Q)}};var z=tn("developer_id"),w=ab(gb(z)?z:{});w&&v("did",w);
(function(){if(!h.vtp_enableShippingData)return;v("delopc",h.vtp_deliveryPostalCode);v("oedeld",h.vtp_estimatedDeliveryDate);v("delc",h.vtp_deliveryCountry);v("shf",h.vtp_shippingFee);if(h.vtp_enableProductReporting){var C=k(h.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",Oh(C))}})();h.vtp_transportUrl&&(r.google_transport_url=h.vtp_transportUrl);var y=xj(h.vtp_transportUrl,"/pagead/conversion_async.js");
y||(y=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&(t=x(h.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(C){return void 0!=C&&""!==C}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(C){return void 0!=C&&""!==C}));var A=!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker;
A?(h.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===zg(!1)._up&&v("gtm_up","1");l();(function(){var C=!1;!Gd()||C?p(!0):Qd(function(){l();var G=M(E.B),D=void 0!=tn(E.O)&&!1!==tn(E.O),H=!1;
H=!0;h.vtp_transportUrl||G||!D&&!H||(r.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Pd());q();p(G);G||Kd(function(){r=B(r);l();!h.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;v("gcs",Pd());q();v("gcu","1");p(!0)},E.B)},[E.B])})();a||(a=!0,W(y,f(),e(y)))})}();
Z.g.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;jd(e,"click",function(k){var l=k.target;if(l&&(l=rd(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&od(l,"value")){var n;l.form?l.form.tagName?n=l.form:n=I.getElementById(l.form):n=rd(l,["form"],100);n&&f.store(n,l)}},!1);jd(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var n=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!n,q=f.get(l),r=!0;if(d(l,function(){if(r){var u;
q&&(u=e.createElement("input"),u.type="hidden",u.name=q.name,u.value=q.value,l.appendChild(u));h.call(l);u&&l.removeChild(u)}},n,p,q))r=!1;else return n||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),n=!0;d(k,function(){n&&h.call(k)},!1,l)&&(h.call(k),n=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ca(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var n=Tl("fsl",h?"nv.mwt":"mwt",0),p;p=h?Tl("fsl","nv.ids",[]):Tl("fsl","ids",[]);if(!p.length)return!0;var q=Pl(e,"gtm.formSubmit",p),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);q["gtm.elementUrl"]=r;l&&(q["gtm.formSubmitElement"]=l);if(k&&n){if(!un(q,Om(f),n))return!1}else un(q,function(){},n||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.h=
"fsl";Z.__fsl.i=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var n=function(q){return Math.max(k,q)};Sl("fsl","mwt",n,0);h||Sl("fsl","nv.mwt",n,0)}var p=function(q){q.push(l);return q};Sl("fsl","ids",p,[]);h||Sl("fsl","nv.ids",p,[]);zn("fsl")||(a(),An("fsl"));J(e.vtp_gtmOnSuccess)})}();



Z.g.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.h="paused";Z.__paused.i=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=I.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(n.src=p,ed(n,l));d.insertBefore(n,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(r){J(h)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=Dn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.mh,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(I.body,qd(h),k,e)()}else on(function(){c(d)},
200)};Z.__html=c;Z.__html.h="html";Z.__html.i=!0;Z.__html.priorityOverride=0}();




Z.g.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.h="img";Z.__img.i=!0;Z.__img.priorityOverride=0})(function(a){var b=qd('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}ho(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var Xq={};Xq.macro=function(a){if(Vm.sd.hasOwnProperty(a))return Vm.sd[a]},Xq.onHtmlSuccess=Vm.hf(!0),Xq.onHtmlFailure=Vm.hf(!1);Xq.dataLayer=ef;Xq.callback=function(a){We.hasOwnProperty(a)&&va(We[a])&&We[a]();delete We[a]};Xq.bootstrap=0;Xq._spx=!1;function Yq(){O[Le.K]=Xq;Va(Xe,Z.g);Ub=Ub||Vm;Vb=cc}
function Zq(){ud.o().o();O=F.google_tag_manager=F.google_tag_manager||{};lk();Ig.enable_gbraid_cookie_write=!0;if(O[Le.K]){var a=O.zones;a&&a.unregisterChild(Le.K);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Nb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Qb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Pb.push(h[k]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Ob.push(q)}Sb=Z;Tb=eo;Yq();Um();ai=!1;bi=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)di();
else{jd(I,"DOMContentLoaded",di);jd(I,"readystatechange",di);if(I.createEventObject&&I.documentElement.doScroll){var u=!0;try{u=!F.frameElement}catch(z){}u&&ei()}jd(F,"load",di)}Yl=!1;"complete"===I.readyState?$l():jd(F,"load",$l);a:{if(!cj)break a;F.setInterval(bj,
864E5);}Ue=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(I.referrer){var c=oe(I.referrer);b="cct.google"===he(c,"host")}if(!b){var d=vf("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,fd("https://cct.google/taggy/agent.js"))}var f=function(){var n=F["google.tagmanager.debugui2.queue"];n||(n=[],F["google.tagmanager.debugui2.queue"]=n,fd("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:cd,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};Le.Of&&(p.data.initialPublish=!0);n.push(p)},h="x"===me(F.location,"query",!1,void 0,"gtm_debug");if(!h&&I.referrer){var k=oe(I.referrer);h="tagassistant.google.com"===he(k,"host")}if(!h){var l=vf("__TAG_ASSISTANT");h=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(h=!0);h&&cd?f():a()})(Zq);

})()
