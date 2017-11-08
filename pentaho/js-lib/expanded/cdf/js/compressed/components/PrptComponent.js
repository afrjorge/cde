define(["./PrptComponent.ext","../Logger","../lib/jquery","amd!../lib/underscore","./BaseComponent"],function(t,e,a,i,r){
return r.extend({getIframeName:function(){return this.htmlObject+"_prptFrame"},getIframe:function(){
return'<iframe name="'+this.getIframeName()+'" style="width:100%;height:100%;border:0px" frameborder="0"/>';
},setIframeUrl:function(t,e){t[0]&&(t[0].contentWindow.location=e)},startLoading:function(){
this.loading||(this.loading=!0,this.dashboard.incrementRunningCalls())},stopLoading:function(){
this.loading&&(this.loading=!1,this.dashboard.decrementRunningCalls())},update:function(){
this.clear();var i=this.getOptions(),r=this.getParams(),o=this.getReportOptions();
a.each(o,function(t,e){void 0!=r[t]&&delete t});var n={solution:i.solution,path:i.path,
action:i.action};delete i.solution,delete i.path,delete i.action,delete o.solution,
delete o.path,delete o.action;var s=this.downloadMode,h=i.showParameters?"viewer":"report";
if(null==s){var u=i["output-target"];s=!(-1!=u.indexOf("html")&&-1==u.indexOf("mime-message")||-1!=u.indexOf("text"));
}if(i["dashboard-mode"]){i.showParameters&&e.log("showParameters not supported with IFrame = False");
var d=this.usePost?"POST":"GET",m=t.getReport(n,"report",{ts:(new Date).getTime()
});a.each(o,function(t,e){void 0==r[t]&&(r[t]=e)});var l=this;a.ajax({url:m,type:d,
data:r,dataType:"html",success:function(t){a("#"+l.htmlObject).html(t)}})}else{var p=a(this.getIframe()),c=a("#"+this.htmlObject);
if(c.empty(),p=p.appendTo(c),this.autoResize&&(null==this._sHeight?(this._sHeight=c.height(),
this._sWidth=c.width()):(c.height(this._sHeight),c.width(this._sWidth))),this.usePost){
a.each(i,function(t,e){void 0==r[t]&&(r[t]=e)});var m=t.getReport(n,h,{ts:(new Date).getTime()
});this._postToUrl(c,p,m,r,this.getIframeName())}else{a.extend(i,{ts:(new Date).getTime()
});var m=t.getReport(n,h,i);i.showParameters&&this.autoResize&&(e.log("PrptComponent: autoResize disabled because showParameters=true"),
this.autoResize=!1),this.startLoading();var l=this;p.load(function(){if(i.showParameters){
var t=a(this.contentWindow.document.body),e=t.find("#reportContent");e.load(function(){
l.autoResize&&l._resizeToReportFrame(e[0],c,i)})}l.stopLoading()}),this.setIframeUrl(p,m);
}s&&this.stopLoading()}},getOptions:function(){var t={paginate:this.paginate||!1,
showParameters:this.showParameters||!1,autoSubmit:this.autoSubmit||this.executeAtStart||!1,
"dashboard-mode":void 0==this.iframe?!1:!this.iframe,solution:this.solution,path:this.path,
action:this.action,renderMode:"REPORT",htmlProportionalWidth:!1};this.paginate?(t["output-target"]="table/html;page-mode=page",
t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1);
var e=this;return i.each(this.parameters,function(a,i){var r=e.extractParameter(a);
t[r.name]=r.value}),t},getParams:function(){var t={};this.paginate?(t["output-target"]="table/html;page-mode=page",
t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1);
var e=this;return i.each(this.parameters,function(a,i){var r=e.extractParameter(a);
t[r.name]=r.value}),t},extractParameter:function(t){var a,r=t[0],o=t[1];try{a=this.dashboard.getParameterValue(o);
}catch(n){var s;s=!i.isObject(o)||i.isFunction(o)?o:JSON.stringify(o),e.log("extractParameter detected static parameter "+r+"="+s+". The parameter will be used as value instead its value obtained from getParameterValue"),
a=o}return null==a&&3==t.length?a=t[2]:void 0===a&&(a=o),i.isFunction(a)&&(a=a()),
{name:r,value:a}},getReportOptions:function(){var t={paginate:this.paginate||!1,showParameters:this.showParameters||!1,
autoSubmit:this.autoSubmit||this.executeAtStart||!1,"dashboard-mode":void 0==this.iframe?!1:!this.iframe,
solution:this.solution,path:this.path,name:this.action,renderMode:"REPORT",htmlProportionalWidth:!1,
"accepted-page":-1};return this.paginate?(t["output-target"]="table/html;page-mode=page",
t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1),
t},_postToUrl:function(t,e,a,i,r){this.startLoading();var o=this._getParamsAsForm(document,a,i,this.getIframeName());
t[0].appendChild(o);var n=this;e.load(function(){n.autoResize&&n._resizeToReportFrame(e[0],t,i),
n.stopLoading()}),o.submit()},_resizeToReportFrame:function(t,i,r){var o=r["output-target"],n=function(t){
return-1!=t.indexOf("html")&&-1==t.indexOf("mime")},s=function(t){return-1!=t.indexOf("text");
},h=function(t){return-1!=t.indexOf("xml")};try{var u=t.contentWindow.document;if(t.contentWindow.document){
var d=null;if(n(o)||s(o)?d=u.body:h(o)&&(d=u.firstChild),null!=d){var m=0,l=0;if(n(o)){
var p=a(d);m=p.outerHeight(!0)-p.outerHeight(!1),l=p.outerWidth(!0)-p.outerWidth(!1);
}i.height(d.scrollHeight+m),i.width(d.scrollWidth+l)}}}catch(c){e.log(c)}},_getParamsAsForm:function(t,e,i,r){
var o=t.createElement("form");o.setAttribute("method","post"),o.setAttribute("action",e),
o.setAttribute("target",r);for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];if(a.isArray(s))for(var h=0;h<s.length;h++){
var u=t.createElement("input");u.setAttribute("type","hidden"),u.setAttribute("name",n),
u.setAttribute("value",s[h]),o.appendChild(u)}else{var u=t.createElement("input");
u.setAttribute("type","hidden"),u.setAttribute("name",n),u.setAttribute("value",s),
o.appendChild(u)}}return o}})});