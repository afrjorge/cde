define(["require"],function(e){var t="./protovis",r="./protovis-msie",n={load:function(n,i,o,a){
if(a.isBuild)i([t],o);else{var c=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),u=function(e,t,r){
return t=e.createElement("div"),t.innerHTML='<pvml:shape adj="1" />',r=t.firstChild,
r?(r.style.behavior="url(#default#VML)","object"==typeof r.adj):!1}(document);!c&&u?e([r],o):e([t],o);
}}};return n});