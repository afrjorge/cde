define(["./XactionComponent.ext","../lib/jquery","./BaseComponent","amd!../lib/jquery.fancybox"],function(e,t,n){
return n.extend({visible:!1,update:function(){var e=this,n=this.placeholder();n[0]&&t.inArray(n[0].tagName.toUpperCase(),["SPAN","DIV"])>-1&&(n=t("<button/>").appendTo(n.empty()),
"DIV"==n[0].tagName&&n.wrap("<span/>"),void 0!=this.label&&n.text(this.label),n.button()),
n.unbind("click"),n.bind("click",function(){var t="undefined"==typeof e.preChange?!0:e.preChange();
t&&e.executeXAction(),"undefined"!=typeof e.postChange&&e.postChange()})},executeXAction:function(){
for(var n=e.getCdfXaction(this.path,this.action,this.solution)+"&",a=new Array(this.parameters.length),i=[],o=0,r=a.length;r>o;o++){
var h=this.parameters[o][0],p=this.dashboard.getParameterValue(this.parameters[o][1]);
t.isArray(p)?t(p).each(function(e){i.push(h+"="+encodeURIComponent(this))}):i.push(h+"="+encodeURIComponent(p));
}n+=i.join("&"),n=n.replace(/'/g,"&#39;"),t.fancybox({type:"iframe",href:n,width:t(window).width(),
height:t(window).height()-50})}})});