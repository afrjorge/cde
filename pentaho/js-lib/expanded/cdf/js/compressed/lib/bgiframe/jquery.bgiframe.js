!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery);
}(function(t){function e(t){return t&&t.constructor===Number?t+"px":t}t.fn.bgiframe=function(i){
if(i=t.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:!0,src:"javascript:false;",
conditional:/MSIE 6\.0/.test(navigator.userAgent)},i),!t.isFunction(i.conditional)){
var o=i.conditional;i.conditional=function(){return o}}var n=t('<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+i.src+'"style="display:block;position:absolute;z-index:-1;"/>');
return this.each(function(){var o=t(this);if(i.conditional(this)!==!1){var a=o.children("iframe.bgiframe"),r=0===a.length?n.clone():a;
r.css({top:"auto"==i.top?-1*(parseInt(o.css("borderTopWidth"),10)||0)+"px":e(i.top),
left:"auto"==i.left?-1*(parseInt(o.css("borderLeftWidth"),10)||0)+"px":e(i.left),
width:"auto"==i.width?this.offsetWidth+"px":e(i.width),height:"auto"==i.height?this.offsetHeight+"px":e(i.height),
opacity:i.opacity===!0?0:void 0}),0===a.length&&o.prepend(r)}})},t.fn.bgIframe=t.fn.bgiframe;
});