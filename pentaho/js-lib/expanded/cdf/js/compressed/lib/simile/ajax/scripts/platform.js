SimileAjax.jQuery=jQuery,"undefined"==typeof window.$&&(window.$=SimileAjax.jQuery),
SimileAjax.Platform.os={isMac:!1,isWin:!1,isWin32:!1,isUnix:!1},SimileAjax.Platform.browser={
isIE:!1,isNetscape:!1,isMozilla:!1,isFirefox:!1,isOpera:!1,isSafari:!1,majorVersion:0,
minorVersion:0},function(){var i=navigator.appName.toLowerCase(),e=navigator.userAgent.toLowerCase();
SimileAjax.Platform.os.isMac=-1!=e.indexOf("mac"),SimileAjax.Platform.os.isWin=-1!=e.indexOf("win"),
SimileAjax.Platform.os.isWin32=SimileAjax.Platform.isWin&&(-1!=e.indexOf("95")||-1!=e.indexOf("98")||-1!=e.indexOf("nt")||-1!=e.indexOf("win32")||-1!=e.indexOf("32bit")),
SimileAjax.Platform.os.isUnix=-1!=e.indexOf("x11"),SimileAjax.Platform.browser.isIE=-1!=i.indexOf("microsoft"),
SimileAjax.Platform.browser.isNetscape=-1!=i.indexOf("netscape"),SimileAjax.Platform.browser.isMozilla=-1!=e.indexOf("mozilla"),
SimileAjax.Platform.browser.isFirefox=-1!=e.indexOf("firefox"),SimileAjax.Platform.browser.isOpera=-1!=i.indexOf("opera"),
SimileAjax.Platform.browser.isSafari=-1!=i.indexOf("safari");var r=function(i){var e=i.split(".");
SimileAjax.Platform.browser.majorVersion=parseInt(e[0]),SimileAjax.Platform.browser.minorVersion=parseInt(e[1]);
},a=function(i,e,r){var a=i.indexOf(e,r);return a>=0?a:i.length};if(SimileAjax.Platform.browser.isMozilla){
var o=e.indexOf("mozilla/");o>=0&&r(e.substring(o+8,a(e," ",o)))}if(SimileAjax.Platform.browser.isIE){
var o=e.indexOf("msie ");o>=0&&r(e.substring(o+5,a(e,";",o)))}if(SimileAjax.Platform.browser.isNetscape){
var o=e.indexOf("rv:");o>=0&&r(e.substring(o+3,a(e,")",o)))}if(SimileAjax.Platform.browser.isFirefox){
var o=e.indexOf("firefox/");o>=0&&r(e.substring(o+8,a(e," ",o)))}"localeCompare"in String.prototype||(String.prototype.localeCompare=function(i){
return i>this?-1:this>i?1:0})}(),SimileAjax.Platform.getDefaultLocale=function(){
return SimileAjax.Platform.clientLocale};