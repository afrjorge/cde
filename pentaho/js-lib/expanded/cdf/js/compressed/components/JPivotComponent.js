define(["./XactionComponent.ext","../lib/jquery","./BaseComponent","amd!../lib/jquery.fancybox"],function(t,i,e){
return e.extend({update:function(){void 0==this.iframeScrolling&&(this.iframeScrolling="no");
for(var e='<iframe id="jpivot_'+this.htmlObject+'" scrolling="'+this.iframeScrolling+'" onload="var dynamicHeight = this.contentWindow.document.body.offsetHeight+50; this.style.height = dynamicHeight + \'px\';" frameborder="0" height="'+this.iframeHeight+'" width="'+this.iframeWidth+'" src="',a={},r=new Array(this.parameters.length),h=0,n=r.length;n>h;h++){
var o=this.parameters[h][0],s=this.dashboard.getParameterValue(this.parameters[h][1]);
a[o]=s}e+=t.getCdfXaction(this.path,this.action,this.solution,a),e+='"></iframe>',
i("#"+this.htmlObject).html(e)}})});