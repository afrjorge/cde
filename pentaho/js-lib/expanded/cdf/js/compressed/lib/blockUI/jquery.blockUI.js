!function(){function e(e){function o(o,n){var l,h,k=o==window,y=n&&void 0!==n.message?n.message:void 0;
if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){
if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),l=e.extend({},e.blockUI.defaults.css,n.css||{}),
n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),
y=void 0===y?n.message:y,k&&p&&t(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){
var m=y.jquery?y[0]:y,v={};e(o).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,
v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m);
}e(o).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),
I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),
n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',
n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),
U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',
n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),
U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',
w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(l)),n.theme||I.css(n.overlayCSS),
I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":o);
e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({
handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:o).length>0);
if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),
(u||!e.support.boxModel)&&!k)var E=d(o,"borderTopWidth"),T=d(o,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;
e.each(C,function(e,o){var t=o[0].style;if(t.position="absolute",2>e)k?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),
k?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),
B&&t.setExpression("left",B),M&&t.setExpression("top",M);else if(n.centerY)k&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
t.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,l="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';
t.setExpression("top",l)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),
(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),
n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),
y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock();
if(i(1,o,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(s,20)):a(w[0],n.centerX,n.centerY),
n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(o).unblock(n)},n.timeout);
e(o).data("blockUI.timeout",W)}}}function t(o,t){var l,s=o==window,a=e(o),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");
c&&(clearTimeout(c),a.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),
i(0,o,t),null===t.onUnblock&&(t.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));
var r;r=s?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),
t.cursorReset&&(r.length>1&&(r[1].style.cursor=t.cursorReset),r.length>2&&(r[2].style.cursor=t.cursorReset)),
s&&(p=b=null),t.fadeOut?(l=r.length,r.stop().fadeOut(t.fadeOut,function(){0===--l&&n(r,d,t,o);
})):n(r,d,t,o)}function n(o,t,n,i){var l=e(i);if(!l.data("blockUI.isBlocked")){o.each(function(e,o){
this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,
t.el.style.position=t.position,t.parent&&t.parent.appendChild(t.el),l.removeData("blockUI.history")),
l.data("blockUI.static")&&l.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);
var s=e(document.body),a=s.width(),d=s[0].style.width;s.width(a-1).width(a),s[0].style.width=d;
}}function i(o,t,n){var i=t==window,s=e(t);if((o||(!i||p)&&(i||s.data("blockUI.isBlocked")))&&(s.data("blockUI.isBlocked",o),
i&&n.bindEvents&&(!o||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
o?e(document).bind(a,n,l):e(document).unbind(a,l)}}function l(o){if("keydown"===o.type&&o.keyCode&&9==o.keyCode&&p&&o.data.constrainTabKey){
var t=b,n=!o.shiftKey&&o.target===t[t.length-1],i=o.shiftKey&&o.target===t[0];if(n||i)return setTimeout(function(){
s(i)},10),!1}var l=o.data,a=e(o.target);return a.hasClass("blockOverlay")&&l.onOverlayClick&&l.onOverlayClick(o),
a.parents("div."+l.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length;
}function s(e){if(b){var o=b[e===!0?b.length-1:0];o&&o.focus()}}function a(e,o,t){
var n=e.parentNode,i=e.style,l=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),s=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");
o&&(i.left=l>0?l+"px":"0"),t&&(i.top=s>0?s+"px":"0")}function d(o,t){return parseInt(e.css(o,t),10)||0;
}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,
e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){
o(window,e)},e.unblockUI=function(e){t(window,e)},e.growlUI=function(o,t,n,i){var l=e('<div class="growlUI"></div>');
o&&l.append("<h1>"+o+"</h1>"),t&&l.append("<h2>"+t+"</h2>"),void 0===n&&(n=3e3);var s=function(o){
o=o||{},e.blockUI({message:l,fadeIn:"undefined"!=typeof o.fadeIn?o.fadeIn:700,fadeOut:"undefined"!=typeof o.fadeOut?o.fadeOut:1e3,
timeout:"undefined"!=typeof o.timeout?o.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,
css:e.blockUI.defaults.growlCSS})};s();l.css("opacity");l.mouseover(function(){s({
fadeIn:0,timeout:3e4});var o=e(".blockMsg");o.stop(),o.fadeTo(300,1)}).mouseout(function(){
e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),
this;var n=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var o=e(this);
n.ignoreIfBlocked&&o.data("blockUI.isBlocked")||o.unblock({fadeOut:0})}),this.each(function(){
"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),
this.style.zoom=1,o(this,t)})},e.fn.unblock=function(o){return this[0]===window?(e.unblockUI(o),
this):this.each(function(){t(this,o)})},e.blockUI.version=2.66,e.blockUI.defaults={
message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,
margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",
backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"
},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",
growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",
opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px",
"-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",
forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,
constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,
focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,
quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[];
}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery);
}();