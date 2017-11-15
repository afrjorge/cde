define(["./UnmanagedComponent","../dashboard/Utils","../Logger","../lib/jquery","amd!../lib/underscore","amd!../lib/mustache-wax","../addIns/templateTypes","css!./TemplateComponent"],function(e,t,s,i,n,a){
return e.extend({defaults:{templateType:"mustache",template:"<div>{{items}}</div>",
rootElement:"items",formatters:{},events:[],postProcess:function(){}},messages:{error:{
noData:"No data available.",invalidTemplate:"Invalid template.",invalidTemplateType:"Invalid template type.",
generic:"Invalid options defined. Please check the template component properties."
},success:{},warning:{},info:{},config:{style:{success:{icon:"comment",type:"success"
},error:{icon:"remove-sign",type:"danger"},info:{icon:"info-sign",type:"info"},warning:{
icon:"exclamation-sign",style:"warning"}},template:"<div class='alert alert-<%=type%>' role='alert'>   <span class='glyphicon glyphicon-<%=icon%>' aria-hidden='true'></span>    <span> <%=msg%> </span></div>"
}},init:function(){i.extend(!0,this,t.ev(this.extendableOptions)),i.extend(!0,this.defaults,t.ev(this.options));
},update:function(){n.bindAll(this,"redraw","init","processData","renderTemplate","attachEvents","processMessage","template","applyFormatter","applyAddin","processAddins"),
this.init(),this.triggerQuery(this.chartDefinition,this.redraw)},redraw:function(e){
this.model=this.processData(e);var t=this.renderTemplate(this.template,this.templateType,this.model),s=this.placeholder();
s.empty().append(t),this.processAddins(s,e),n.isEmpty(this.events)||this.attachEvents(this.eventSelector,this.eventType,this.eventHandler);
},getUID:function(){return"xxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,s="x"===e?t:3&t|8;
return s.toString(16)})},applyFormatter:function(e,s,i){var a=t.propertiesArrayToObject(this.formatters)[s];
return n.isFunction(a)?a.call(this,e,i):e},applyAddin:function(e,t,s){var i=this.name+"_"+t+this.getUID();
return this.addins=this.addins||[],this.addins.push({uid:i,model:e,addin:t,id:s}),
'<div id="'+i+'" class="'+t+'"/>'},processAddins:function(e,t){var s=this;n.each(this.addins,function(i){
s.handleAddin(n.first(e.find("#"+i.uid)),i.model,i.addin,t,i.id)})},handleAddin:function(e,t,s,i,n){
var a=this.getAddIn("templateType",s),r={value:t,data:i,id:n};a.call(e,r,this.getAddInOptions("templateType",a.getName()));
},processData:function(e){if(n.isFunction(this.modelHandler))return this.modelHandler(e);
var t=null!=e.queryInfo?e.queryInfo.totalRows>0:e.resultset.length>0;if(t){var s=[];
n.each(e.resultset,function(e){s.push(n.extend({},e))});var i={};return i[this.rootElement]=s,
i}return""},renderTemplate:function(e,s,i){var r="",o=this;if(n.isEmpty(i))r=this.processMessage("noData","error");else{
var d={formatter:function(e,t,s){return o.applyFormatter(e,t,s)},addin:function(e,t,s){
return o.applyAddin(e,t,s)}};try{switch(s.toUpperCase()){case"UNDERSCORE":i=n.defaults({},i,t.propertiesArrayToObject(d)),
r=n.template(t.ev(e))(i);break;case"MUSTACHE":a.Formatters=d,r=a.render(t.ev(e),i);
break;default:r=this.processMessage("invalidTemplateType","error")}}catch(l){r=this.processMessage("invalidTemplate","error");
}}return r},attachEvents:function(){var e=this;n.each(this.events,function(t){var s=",",i=n.first(t).split(s),a=n.last(t),r=n.first(i).trim(),o=n.last(i).trim();
n.isFunction(a)&&e.placeholder(o).on(r,n.bind(a,e))})},processMessage:function(e,t){
var i={msg:this.messages[t][e]||e||"",type:this.messages.config.style[t].type||"info",
icon:this.messages.config.style[t].icon||"comment"};return s.log(i.msg,t),n.template(this.messages.config.template)(i);
}})});