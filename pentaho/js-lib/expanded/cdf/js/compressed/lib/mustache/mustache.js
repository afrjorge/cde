!function(e,t){if("object"==typeof exports&&exports)t(exports);else{var n={};t(n),
"function"==typeof define&&define.amd?define(n):e.Mustache=n}}(this,function(e){function t(e,t){
return f.call(e,t)}function n(e){return!t(g,e)}function r(e){return"function"==typeof e;
}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e){
return String(e).replace(/[&<>"'\/]/g,function(e){return v[e]})}function o(e){if(!d(e)||2!==e.length)throw new Error("Invalid tags: "+e);
return[new RegExp(i(e[0])+"\\s*"),new RegExp("\\s*"+i(e[1]))]}function a(t,r){function s(){
if(j&&!C)for(;T.length;)delete E[T.pop()];else T=[];j=!1,C=!1}r=r||e.tags,t=t||"",
"string"==typeof r&&(r=r.split(y));for(var a,l,p,f,g,w,d=o(r),v=new h(t),m=[],E=[],T=[],j=!1,C=!1;!v.eos();){
if(a=v.pos,p=v.scanUntil(d[0]))for(var A=0,R=p.length;R>A;++A)f=p.charAt(A),n(f)?T.push(E.length):C=!0,
E.push(["text",f,a,a+1]),a+=1,"\n"===f&&s();if(!v.scan(d[0]))break;if(j=!0,l=v.scan(U)||"name",
v.scan(k),"="===l?(p=v.scanUntil(b),v.scan(b),v.scanUntil(d[1])):"{"===l?(p=v.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),
v.scan(x),v.scanUntil(d[1]),l="&"):p=v.scanUntil(d[1]),!v.scan(d[1]))throw new Error("Unclosed tag at "+v.pos);
if(g=[l,p,a,v.pos],E.push(g),"#"===l||"^"===l)m.push(g);else if("/"===l){if(w=m.pop(),
!w)throw new Error('Unopened section "'+p+'" at '+a);if(w[1]!==p)throw new Error('Unclosed section "'+w[1]+'" at '+a);
}else"name"===l||"{"===l||"&"===l?C=!0:"="===l&&(d=o(r=p.split(y)))}if(w=m.pop())throw new Error('Unclosed section "'+w[1]+'" at '+v.pos);
return u(c(E))}function c(e){for(var t,n,r=[],i=0,s=e.length;s>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],
n[3]=t[3]):(r.push(t),n=t));return r}function u(e){for(var t,n,r=[],i=r,s=[],o=0,a=e.length;a>o;++o)switch(t=e[o],
t[0]){case"#":case"^":i.push(t),s.push(t),i=t[4]=[];break;case"/":n=s.pop(),n[5]=t[2],
i=s.length>0?s[s.length-1][4]:r;break;default:i.push(t)}return r}function h(e){this.string=e,
this.tail=e,this.pos=0}function l(e,t){this.view=null==e?{}:e,this.cache={".":this.view
},this.parent=t}function p(){this.cache={}}var f=RegExp.prototype.test,g=/\S/,w=Object.prototype.toString,d=Array.isArray||function(e){
return"[object Array]"===w.call(e)},v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;",
"'":"&#39;","/":"&#x2F;"},k=/\s*/,y=/\s+/,b=/\s*=/,x=/\s*\}/,U=/#|\^|\/|>|\{|&|=|!/;
h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var t=this.tail.match(e);
if(t&&0===t.index){var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,
n}return""},h.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){
case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),
this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){
return new l(e,this)},l.prototype.lookup=function(e){var t;if(e in this.cache)t=this.cache[e];else{
for(var n=this;n;){if(e.indexOf(".")>0){t=n.view;for(var i=e.split("."),s=0;null!=t&&s<i.length;)t=t[i[s++]];
}else t=n.view[e];if(null!=t)break;n=n.parent}this.cache[e]=t}return r(t)&&(t=t.call(this.view)),
t},p.prototype.clearCache=function(){this.cache={}},p.prototype.parse=function(e,t){
var n=this.cache,r=n[e];return null==r&&(r=n[e]=a(e,t)),r},p.prototype.render=function(e,t,n){
var r=this.parse(e),i=t instanceof l?t:new l(t);return this.renderTokens(r,i,n,e);
},p.prototype.renderTokens=function(t,n,i,s){function o(e){return h.render(e,n,i);
}for(var a,c,u="",h=this,l=0,p=t.length;p>l;++l)switch(a=t[l],a[0]){case"#":if(c=n.lookup(a[1]),
!c)continue;if(d(c))for(var f=0,g=c.length;g>f;++f)u+=this.renderTokens(a[4],n.push(c[f]),i,s);else if("object"==typeof c||"string"==typeof c)u+=this.renderTokens(a[4],n.push(c),i,s);else if(r(c)){
if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");
c=c.call(n.view,s.slice(a[3],a[5]),o),null!=c&&(u+=c)}else u+=this.renderTokens(a[4],n,i,s);
break;case"^":c=n.lookup(a[1]),(!c||d(c)&&0===c.length)&&(u+=this.renderTokens(a[4],n,i,s));
break;case">":if(!i)continue;c=r(i)?i(a[1]):i[a[1]],null!=c&&(u+=this.renderTokens(this.parse(c),n,i,c));
break;case"&":c=n.lookup(a[1]),null!=c&&(u+=c);break;case"name":c=n.lookup(a[1]),
null!=c&&(u+=e.escape(c));break;case"text":u+=a[1]}return u},e.name="mustache.js",
e.version="0.8.1",e.tags=["{{","}}"];var m=new p;e.clearCache=function(){return m.clearCache();
},e.parse=function(e,t){return m.parse(e,t)},e.render=function(e,t,n){return m.render(e,t,n);
},e.to_html=function(t,n,i,s){var o=e.render(t,n,i);return r(s)?void s(o):o},e.escape=s,
e.Scanner=h,e.Context=l,e.Writer=p});