/* ktag.js - 2021-07-21 */
var Ktag_Constants=function(){return{KENSHOO_GCLID_NAME:"ken_gclid",GOOGLE_CLICK_ID_PARAM_NAME:"gclid",BING_CLICK_ID_PARAM_NAME:"msclkid",NO_PUBLISHER_CLICK_ID_PARAM_NAME:"npclid",AMP_CHANNEL_CLICK_ID_COOKIE_NAME:"ken_amp_gclid",AMP_LINKER_PARAM_NAME:"linker",CUSTOM_DOMAIN_TRACKING_COKIE_NAME:"ken_hgclid",UNIVERSAL_CHANNEL_PARAM_NAME:"kclid",UNIVERSAL_CHANNEL_COOKIE_NAME:"ken_uc"}}(),Ktag_Toggles=function(){return{isParseAmpLinkerParameters:function(){return!1},isUseNpclid:function(){return!0},getCustomDomainTrackingDomains:function(){return""},getCustomDomainTrackingUrl:function(){return"https://kmeasure.{domain}/v1/cookie?name={name}&value={value}&max_age={max_age}"},isSupportFloodlightTag:function(){return!1},getFixelId:function(){return""},isDummyEnabled:function(){return!0},isDummyDisabled:function(){return!1},isDummyEnabledForDummyTids:function(){return!1},isDummyDisabledForDummyTids:function(){return!0},getDummyString:function(){return"Hello"},getDummyNumber:function(){return 5}}}(),Ktag_Amp_Helpers=function(){var i="*",r=/^[a-zA-Z0-9\-_.]+$/,e={"-":"+",_:"/",".":"="},t=function(n){var e=n.split(i),t=e.length%2==0;return e.length<4||!t?null:(e.shift(),e.shift(),e?a(e):null)},a=function(n){for(var e={},t=0;t<n.length;t+=2){var i=n[t];if(r.test(i)&&(e[i]=o(n[t+1]),!e[i]))return null}return e},o=function(n){return l(n)?null:atob(n.replace(/[-_.]/g,function(n){return e[n]}))},l=function(n){return!n||" "===n};return{parseLinker:function(n){return t(n)}}}(),Ktag_Helpers=function(){var e=Ktag_Amp_Helpers,t=Ktag_Constants,i=Ktag_Toggles,l=function(){for(var n=[],e=0;e<256;e++)n[e]=(e<16?"0":"")+e.toString(16);var t=o(),i=o(),r=o(),a=o();return n[255&t]+n[t>>8&255]+n[t>>16&255]+n[t>>24&255]+"-"+n[255&i]+n[i>>8&255]+"-"+n[i>>16&15|64]+n[i>>24&255]+"-"+n[63&r|128]+n[r>>8&255]+"-"+n[r>>16&255]+n[r>>24&255]+n[255&a]+n[a>>8&255]+n[a>>16&255]+n[a>>24&255]},o=function(){return 4294967296*Math.random()>>>0};return{loadPixel:function(n,e){var t=document.location.protocol;0!==t.indexOf("http")&&(t="https:");var i=new Image(1,1);return i.onload=e,i.src=t+"//"+n,i},getParameter:function(n,e){var t=e.indexOf("?");if(-1==t)return null;for(var i=e.substring(t+1).split("&"),r=0;r<i.length;r++){var a=i[r].split("=");if(a[0]===n)return a[1]}return null},generateUUID:function(){return l()},getDomainCookie:function(n){n||(n="k_user_id");for(var e=n+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "==r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return null},createDomainCookie:function(n,e,t,i){if(n){e||(e=l()),t||(t=31536e6);var r=new Date;r.setTime(r.getTime()+t);var a="; expires="+r.toGMTString(),o="";return i&&(o="; domain="+i),document.cookie=n+"="+e+a+o+"; path=/",e}},createRandomDomainCookie:function(n,e){return this.createDomainCookie(n,"",e)},isEmptyString:function(n){return null==n||(Ktag_Helpers.isString(n)?""===Ktag_Helpers.trim(n):!Ktag_Helpers.isNumber(n))},isNumber:function(n){return"number"==typeof n},isString:function(n){return"string"==typeof n},trim:function(n){return n.replace(/^\s+|\s+$/g,"")},getDomain:function(){return window.location.host},makeGETRequest:function(n,e,t){var i=new XMLHttpRequest;"withCredentials"in i&&(i.withCredentials=!0),i.open("GET",n,!0),i.onload=function(){200===i.status&&e(null)},i.onerror=function(){e(null)},i.send(t)},makeCORSRequestGET:function(n,e){this.makeCORSRequest(n,e,"GET")},makeCORSRequest:function(n,e,t,i){var r=new XMLHttpRequest;"withCredentials"in r?(r.open(t,n,!0),r.withCredentials=!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest).open(t,n):r=null,r&&(r.onload=function(){200==r.status?e(r.responseText):404==r.status&&e(null)},r.onerror=function(){e(null)},r.send(i))},isValidUUID:function(n){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(n)},isValidKenshooId:function(n){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(n)},isValidGclid:function(n){return/^[A-Za-z0-9_-]{20,120}$/.test(n)},isValidMsclkid:function(n){return/^[A-Fa-f0-9]{32}$/.test(n)},getSecondLevelDomain:function(n){if(!n)return null;var e=["ac","ad","ae","aero","af","ag","ai","al","am","an","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","travel","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","xn--0zwm56d","xn--11b5bs3a9aj6g","xn--3e0b707e","xn--45brj9c","xn--80akhbyknj4f","xn--90a3ac","xn--9t4b11yi5a","xn--clchc0ea0b2g2a9gcd","xn--deba0ad","xn--fiqs8s","xn--fiqz9s","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--g6w251d","xn--gecrj9c","xn--h2brj9c","xn--hgbk6aj7f53bba","xn--hlcj6aya9esc7a","xn--j6w193g","xn--jxalpdlp","xn--kgbechtv","xn--kprw13d","xn--kpry57d","xn--lgbbat1ad8j","xn--mgbaam7a8h","xn--mgbayh7gpa","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgberp4a5d4ar","xn--o3cw4h","xn--ogbpf8fl","xn--p1ai","xn--pgbs0dh","xn--s9brj9c","xn--wgbh1c","xn--wgbl6a","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--yfro4i67o","xn--ygbi2ammx","xn--zckzah","xxx","ye","yt","za","zm","zw"].join(),t=n.split(".");"www"===t[0]&&"com"!==t[1]&&t.shift();for(var i,r=t.length,a=r,o=t[t.length-1].length;null!==(i=t[--a]);)if(0===a||a<r-2||i.length<o||e.indexOf(i)<0&&a<r-1)return t.slice(a,t.length).join(".");return n},createSecondLevelDomainCookie:function(n,e,t){if(n&&e){var i=this.getSecondLevelDomain(t);this.createDomainCookie(n,e,null,i)}},getChannelClickIdFromUri:function(){var n=this.getValidGclidFromUrl();return n||(n=this.getValidMsclkidFromUrl(),Ktag_Toggles.isUseNpclid()&&!n&&(n=this.getValidNpclidFromUrl())),n},storeChannelClickId:function(){var n=this.getChannelClickIdFromUri();if(n)this.createSecondLevelDomainCookie(t.KENSHOO_GCLID_NAME,n,document.domain),this.isCustomDomainTrackingEnabled()&&this.callCustomDomainTracking(n);else{if(Ktag_Toggles.isParseAmpLinkerParameters()){var e=this.getAmpLinkerParamsFromUrl();this.createCookiesFromLinkerParameters(e)}Ktag_Helpers.storeUniversalChannelClickId()}},readChannelClickIdFromUrl:function(n,e){e||(e=window.location.href);var t=this.getParameter(n,e);return!t&&Ktag_Toggles.isSupportFloodlightTag()&&(t=this.getFloodlightParameter(n,e)),t?t.split("#")[0]:null},getAmpLinkerParamsFromUrl:function(){var n=this.readChannelClickIdFromUrl(Ktag_Constants.AMP_LINKER_PARAM_NAME);if(n)return e.parseLinker(n)},getValidGclidFromUrl:function(){var n=this.readChannelClickIdFromUrl(Ktag_Constants.GOOGLE_CLICK_ID_PARAM_NAME);if(this.isValidGclid(n))return n},getValidMsclkidFromUrl:function(){var n=this.readChannelClickIdFromUrl(Ktag_Constants.BING_CLICK_ID_PARAM_NAME);if(this.isValidMsclkid(n))return n},getValidNpclidFromUrl:function(){var n=this.readChannelClickIdFromUrl(t.NO_PUBLISHER_CLICK_ID_PARAM_NAME);if(this.isValidGclid(n)||this.isValidMsclkid(n))return n},getFloodlightParameter:function(n,e){for(var t=decodeURIComponent(e).split(/[;&?]/),i=1;i<t.length;i++){var r=t[i].split("=");if(r[0]===n)return r[1]}return null},getUniversalChannelClickId:function(n){n||(n=window.location.href);var e=this.getParameter(Ktag_Constants.UNIVERSAL_CHANNEL_PARAM_NAME,n);return e?e.split("#")[0]:null},storeUniversalChannelClickId:function(){var n=this.getUniversalChannelClickId();n&&this.isValidKenshooId(n)&&this.createSecondLevelDomainCookie(Ktag_Constants.UNIVERSAL_CHANNEL_COOKIE_NAME,n,document.domain)},createCookiesFromLinkerParameters:function(n){if(n){var e=n.channelClickId;(this.isValidGclid(e)||this.isValidMsclkid(e))&&(this.createSecondLevelDomainCookie(Ktag_Constants.KENSHOO_GCLID_NAME,e,document.domain),this.createSecondLevelDomainCookie(Ktag_Constants.AMP_CHANNEL_CLICK_ID_COOKIE_NAME,e,document.domain))}},getCurrentDomain:function(){return document.domain},isCustomDomainTrackingEnabled:function(){var n=Ktag_Toggles.getCustomDomainTrackingDomains();return null!=n&&n.split(";").includes(this.getSecondLevelDomain(this.getCurrentDomain()))},callCustomDomainTracking:function(n){var e=this.getSecondLevelDomain(this.getCurrentDomain()),t=i.getCustomDomainTrackingUrl().replace("{domain}",e).replace("{name}",Ktag_Constants.CUSTOM_DOMAIN_TRACKING_COKIE_NAME).replace("{value}",n).replace("{max_age}","31536000");this.makeGETRequest(t,function(){})},isFixelIntegrated:function(){return!!Ktag_Toggles.getFixelId()}}}(),Ktag_Functions=function(){var i="https://resources.xg4ken.com/fixel/fixel.min.js",n=function(){var n="script",e=document.createElement(n);e.src=i;var t=Ktag_Toggles.getFixelId();e.onload=function(){runFixel(t)},document.getElementsByTagName(n)[0].parentNode.appendChild(e)};return{runFixelSetup:function(){n()}}}(),setup=function(){Ktag_Helpers.storeChannelClickId(),Ktag_Helpers.isFixelIntegrated()&&Ktag_Functions.runFixelSetup()};try{!function(n){var e=window.ktag;function t(){if(e.ktq)for(;e.ktq.length;){i(e.ktq.shift())}}function i(n){switch(n[0]){case"setup":setup();break;case"event":console.log("event "+n[1])}}e?(e.sendEvent=i,t()):console.log("ktag undefined")}()}catch(n){console.log("Caught unexpected error: "+n)}
//# sourceMappingURL=ktag.js.map