define(["../../Logger","../../dashboard/Utils","amd!../../lib/underscore","amd!../../lib/mustache-wax","../../lib/jquery"],function(e,t,s,a,r){
return{name:"template",label:"template",defaults:{templateType:"mustache",template:"<div>{{items}}</div>",
rootElement:"items",formatters:[],events:[],modelHandler:function(e,t){var s={};return s[t.rootElement]=r.parseJSON(e.value),
s},postProcess:function(){}},messages:{error:{noData:"No data available.",invalidTemplate:"Invalid template.",
invalidTemplateType:"Invalid template type.",generic:"Invalid options defined. Please check the template component properties."
},success:{},warning:{},info:{},config:{style:{success:{icon:"comment",type:"success"
},error:{icon:"remove-sign",type:"danger"},info:{icon:"info-sign",type:"info"},warning:{
icon:"exclamation-sign",style:"warning"}},template:"<div class='alert alert-<%=type%>' role='alert'>  <span class='glyphicon glyphicon-<%=icon%>' aria-hidden='true'></span>   <span> <%=msg%> </span></div>"
}},processMessage:function(t,a,r){var n={msg:t.messages.error[a]||"",type:t.messages.config.style[r].type||"info",
icon:t.messages.config.style[r].icon||"comment"};return e.log(t.messages.error[a]||"",r),
s.template(t.messages.config.template)(n)},init:function(){},implementation:function(e,t,s){
s=r.extend(!0,{messages:this.messages},this.defaults,s);var a=this.renderTemplate(e,t,s);
r(e).empty().html(a);var n={target:e,status:t,options:s};this.attachEvents(r(e),s.events,n),
"function"==typeof s.postProcess&&s.postProcess.call(this,n)},renderTemplate:function(e,r,n){
var i,o=this;try{i=n.modelHandler(r,n)}catch(l){s.isEmpty(r.value)||(i={},i[n.rootElement]=r.value);
}if(s.isEmpty(i))return this.processMessage(n,"noData","error");var c={formatter:function(e,t,s){
return o.applyFormatter(n,e,t,s)}};r.model=i;try{switch(n.templateType.toUpperCase()){
case"UNDERSCORE":return i=s.defaults({},i,t.propertiesArrayToObject(c)),s.template(t.ev(n.template))(i);
case"MUSTACHE":return a.Formatters=c,a.render(t.ev(n.template),i);default:return this.processMessage(n,"invalidTemplateType","error");
}}catch(l){return this.processMessage(n,"invalidTemplate","error")}},applyFormatter:function(e,a,r,n){
var i=t.propertiesArrayToObject(e.formatters)[r];return s.isFunction(i)?i.call(this,a,n):a;
},attachEvents:function(e,t,a){s.each(t,function(t){var r=",",n=s.first(t).split(r),i=s.last(t),o=s.first(n).trim(),l=s.last(n).trim();
s.isFunction(i)&&(o===l?e.off(o).on(o,a,i):e.find(l).off(o).on(o,a,i))})}}});