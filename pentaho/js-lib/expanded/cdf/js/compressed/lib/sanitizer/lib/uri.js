var URI=function(){function t(t){var e=(""+t).match(m);return e?new h(u(e[1]),u(e[2]),u(e[3]),u(e[4]),u(e[5]),u(e[6]),u(e[7])):null;
}function e(t,e,o,i,s,u,p){var c=new h(n(t,f),n(e,f),r(o),i>0?i.toString():null,n(s,_),null,r(p));
return u&&("string"==typeof u?c.setRawQuery(u.replace(/[^?&=0-9A-Za-z_\-~.%]/g,a)):c.setAllParameters(u)),
c}function r(t){return"string"==typeof t?encodeURIComponent(t):null}function n(t,e){
return"string"==typeof t?encodeURI(t).replace(e,a):null}function a(t){var e=t.charCodeAt(0);
return"%"+"0123456789ABCDEF".charAt(e>>4&15)+"0123456789ABCDEF".charAt(15&e)}function o(t){
return t.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function i(t){if(null===t)return null;
for(var e,r=o(t),n=c;(e=r.replace(n,"$1"))!=r;r=e);return r}function s(t,e){var r=t.clone(),n=e.hasScheme();
n?r.setRawScheme(e.getRawScheme()):n=e.hasCredentials(),n?r.setRawCredentials(e.getRawCredentials()):n=e.hasDomain(),
n?r.setRawDomain(e.getRawDomain()):n=e.hasPort();var a=e.getRawPath(),o=i(a);if(n)r.setPort(e.getPort()),
o=o&&o.replace(l,"");else if(n=!!a){if(47!==o.charCodeAt(0)){var s=i(r.getRawPath()||"").replace(l,""),h=s.lastIndexOf("/")+1;
o=i((h?s.substring(0,h):"")+i(a)).replace(l,"")}}else o=o&&o.replace(l,""),o!==a&&r.setRawPath(o);
return n?r.setRawPath(o):n=e.hasQuery(),n?r.setRawQuery(e.getRawQuery()):n=e.hasFragment(),
n&&r.setRawFragment(e.getRawFragment()),r}function h(t,e,r,n,a,o,i){this.scheme_=t,
this.credentials_=e,this.domain_=r,this.port_=n,this.path_=a,this.query_=o,this.fragment_=i,
this.paramCache_=null}function u(t){return"string"==typeof t&&t.length>0?t:null}var p=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),c=new RegExp(p),l=/^(?:\.\.\/)*(?:\.\.$)?/;
h.prototype.toString=function(){var t=[];return null!==this.scheme_&&t.push(this.scheme_,":"),
null!==this.domain_&&(t.push("//"),null!==this.credentials_&&t.push(this.credentials_,"@"),
t.push(this.domain_),null!==this.port_&&t.push(":",this.port_.toString())),null!==this.path_&&t.push(this.path_),
null!==this.query_&&t.push("?",this.query_),null!==this.fragment_&&t.push("#",this.fragment_),
t.join("")},h.prototype.clone=function(){return new h(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_);
},h.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase();
},h.prototype.getRawScheme=function(){return this.scheme_},h.prototype.setScheme=function(t){
return this.scheme_=n(t,f),this},h.prototype.setRawScheme=function(t){return this.scheme_=t?t:null,
this},h.prototype.hasScheme=function(){return null!==this.scheme_},h.prototype.getCredentials=function(){
return this.credentials_&&decodeURIComponent(this.credentials_)},h.prototype.getRawCredentials=function(){
return this.credentials_},h.prototype.setCredentials=function(t){return this.credentials_=n(t,f),
this},h.prototype.setRawCredentials=function(t){return this.credentials_=t?t:null,
this},h.prototype.hasCredentials=function(){return null!==this.credentials_},h.prototype.getDomain=function(){
return this.domain_&&decodeURIComponent(this.domain_)},h.prototype.getRawDomain=function(){
return this.domain_},h.prototype.setDomain=function(t){return this.setRawDomain(t&&encodeURIComponent(t));
},h.prototype.setRawDomain=function(t){return this.domain_=t?t:null,this.setRawPath(this.path_);
},h.prototype.hasDomain=function(){return null!==this.domain_},h.prototype.getPort=function(){
return this.port_&&decodeURIComponent(this.port_)},h.prototype.setPort=function(t){
if(t){if(t=Number(t),t!==(65535&t))throw new Error("Bad port number "+t);this.port_=""+t;
}else this.port_=null;return this},h.prototype.hasPort=function(){return null!==this.port_;
},h.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_);
},h.prototype.getRawPath=function(){return this.path_},h.prototype.setPath=function(t){
return this.setRawPath(n(t,_))},h.prototype.setRawPath=function(t){return t?(t=String(t),
this.path_=!this.domain_||/^\//.test(t)?t:"/"+t):this.path_=null,this},h.prototype.hasPath=function(){
return null!==this.path_},h.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ");
},h.prototype.getRawQuery=function(){return this.query_},h.prototype.setQuery=function(t){
return this.paramCache_=null,this.query_=r(t),this},h.prototype.setRawQuery=function(t){
return this.paramCache_=null,this.query_=t?t:null,this},h.prototype.hasQuery=function(){
return null!==this.query_},h.prototype.setAllParameters=function(t){if("object"==typeof t&&!(t instanceof Array)&&(t instanceof Object||"[object Array]"!==Object.prototype.toString.call(t))){
var e=[],r=-1;for(var n in t){var a=t[n];"string"==typeof a&&(e[++r]=n,e[++r]=a)}
t=e}this.paramCache_=null;for(var o=[],i="",s=0;s<t.length;){var n=t[s++],a=t[s++];
o.push(i,encodeURIComponent(n.toString())),i="&",a&&o.push("=",encodeURIComponent(a.toString()));
}return this.query_=o.join(""),this},h.prototype.checkParameterCache_=function(){
if(!this.paramCache_){var t=this.query_;if(t){for(var e=t.split(/[&\?]/),r=[],n=-1,a=0;a<e.length;++a){
var o=e[a].match(/^([^=]*)(?:=(.*))?$/);r[++n]=decodeURIComponent(o[1]).replace(/\+/g," "),
r[++n]=decodeURIComponent(o[2]||"").replace(/\+/g," ")}this.paramCache_=r}else this.paramCache_=[];
}},h.prototype.setParameterValues=function(t,e){"string"==typeof e&&(e=[e]),this.checkParameterCache_();
for(var r=0,n=this.paramCache_,a=[],o=0;o<n.length;o+=2)t===n[o]?r<e.length&&a.push(t,e[r++]):a.push(n[o],n[o+1]);
for(;r<e.length;)a.push(t,e[r++]);return this.setAllParameters(a),this},h.prototype.removeParameter=function(t){
return this.setParameterValues(t,[])},h.prototype.getAllParameters=function(){return this.checkParameterCache_(),
this.paramCache_.slice(0,this.paramCache_.length)},h.prototype.getParameterValues=function(t){
this.checkParameterCache_();for(var e=[],r=0;r<this.paramCache_.length;r+=2)t===this.paramCache_[r]&&e.push(this.paramCache_[r+1]);
return e},h.prototype.getParameterMap=function(t){this.checkParameterCache_();for(var e={},r=0;r<this.paramCache_.length;r+=2){
var n=this.paramCache_[r++],a=this.paramCache_[r++];n in e?e[n].push(a):e[n]=[a]}
return e},h.prototype.getParameterValue=function(t){this.checkParameterCache_();for(var e=0;e<this.paramCache_.length;e+=2)if(t===this.paramCache_[e])return this.paramCache_[e+1];
return null},h.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_);
},h.prototype.getRawFragment=function(){return this.fragment_},h.prototype.setFragment=function(t){
return this.fragment_=t?encodeURIComponent(t):null,this},h.prototype.setRawFragment=function(t){
return this.fragment_=t?t:null,this},h.prototype.hasFragment=function(){return null!==this.fragment_;
};var m=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),f=/[#\/\?@]/g,_=/[\#\?]/g;
return h.parse=t,h.create=e,h.resolve=s,h.collapse_dots=i,h.utils={mimeTypeOf:function(e){
var r=t(e);return/\.html$/.test(r.getPath())?"text/html":"application/javascript";
},resolve:function(e,r){return e?s(t(e),t(r)).toString():""+r}},h}();"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=URI),
exports.URI=URI):"undefined"!=typeof window&&(window.URI=URI);