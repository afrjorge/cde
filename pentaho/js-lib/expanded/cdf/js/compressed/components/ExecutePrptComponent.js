define(["./PrptComponent.ext","../lib/jquery","./PrptComponent","amd!../lib/jquery.fancybox"],function(e,t,n){
return n.extend({visible:!1,update:function(){var e=this,n=e.placeholder();n.length>0&&(t.inArray(n[0].tagName.toUpperCase(),["SPAN","DIV"])>-1&&(n=t("<button/>").appendTo(n.empty()),
"DIV"==n[0].tagName&&n.wrap("<span/>"),void 0!=this.label&&n.text(this.label),n.button()),
n.unbind("click"),n.bind("click",function(){var t="undefined"==typeof e.preChange?!0:e.preChange();
t&&e.executePrptComponent(),"undefined"!=typeof e.postChange&&e.postChange()}))},
executePrptComponent:function(){var n=this.getOptions(),o={};n.solution&&t.extend(o,{
solution:n.solution}),n.path&&t.extend(o,{path:n.path}),n.action&&t.extend(o,{action:n.action
}),delete n.solution,delete n.path,delete n.action,t.extend(n,{ts:(new Date).getTime()
}),t.fancybox({type:"iframe",href:e.getReport(o,"viewer",n),width:t(window).width(),
height:t(window).height()-50})}})});