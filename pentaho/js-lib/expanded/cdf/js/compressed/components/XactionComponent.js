define(["./XactionComponent.ext","../lib/jquery","./BaseComponent"],function(t,e,i){
return i.extend({update:function(){var i=this;try{if("undefined"!=typeof this.iframe&&this.iframe){
for(var a='<iframe id="iframe_'+this.htmlObject+'" frameborder="0" height="100%" width="100%" />',n=e(a),s=t.getCdfXaction(this.path,this.action,this.solution)+"&wrapper=false",r=new Array(this.parameters.length),h=0,o=r.length;o>h;h++){
var d="&"+encodeURIComponent(this.parameters[h][0])+"=",l="";""==this.parameters[h][1]?l=encodeURIComponent(this.parameters[h][2]):(l=encodeURIComponent(this.dashboard.getParameterValue(this.parameters[h][1])),
"NIL"==l&&(l=encodeURIComponent(this.parameters[h][2]))),s+=d+l}this.loading||(this.loading=!0,
this.dashboard.incrementRunningCalls()),n.load(function(){this.contentWindow.document.body.innerHTML&&(i.loading=!1,
i.dashboard.decrementRunningCalls())}),e("#"+this.htmlObject).empty().append(n),n[0].contentWindow.location=s;
}else{for(var r=new Array(this.parameters?this.parameters.length:0),h=0,o=r.length;o>h;h++){
var m=this.parameters[h][0],c=""==this.parameters[h][1]?this.parameters[h][2]:this.dashboard.getParameterValue(this.parameters[h][1]);
"NIL"==this.value&&(this.value=this.parameters[h][2]),r[h]=[m,c]}if("undefined"==typeof this.serviceMethod||"ServiceAction"==this.serviceMethod){
var p=this.dashboard.callPentahoAction(i,this.solution,this.path,this.action,r,null);
null!=p&&e("#"+i.htmlObject).html(p.find("ExecuteActivityResponse:first-child").text());
}else{var u=this.dashboard.pentahoServiceAction(this.serviceMethod,"html",this.solution,this.path,this.action,r,null);
e("#"+i.htmlObject).html(u)}}}catch(f){}}})});