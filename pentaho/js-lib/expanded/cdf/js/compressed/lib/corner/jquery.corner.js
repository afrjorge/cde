!function(t){function e(e,r){return parseInt(t.css(e,r),10)||0}function r(t){return t=parseInt(t,10).toString(16),
t.length<2?"0"+t:t}function o(e){for(;e;){var o,s=t.css(e,"backgroundColor");if(s&&"transparent"!=s&&"rgba(0, 0, 0, 0)"!=s)return s.indexOf("rgb")>=0?(o=s.match(/\d+/g),
"#"+r(o[0])+r(o[1])+r(o[2])):s;if("html"==e.nodeName.toLowerCase())break;e=e.parentNode;
}return"#ffffff"}function s(t,e,r){switch(t){case"round":return Math.round(r*(1-Math.cos(Math.asin(e/r))));
case"cool":return Math.round(r*(1+Math.cos(Math.asin(e/r))));case"sharp":return r-e;
case"bite":return Math.round(r*Math.cos(Math.asin((r-e-1)/r)));case"slide":return Math.round(r*Math.atan2(e,r/e));
case"jut":return Math.round(r*Math.atan2(r,r-e-1));case"curl":return Math.round(r*Math.atan(e));
case"tear":return Math.round(r*Math.cos(e));case"wicked":return Math.round(r*Math.tan(e));
case"long":return Math.round(r*Math.sqrt(e));case"sculpt":return Math.round(r*Math.log(r-e-1,r));
case"dogfold":case"dog":return 1&e?e+1:r;case"dog2":return 2&e?e+1:r;case"dog3":return 3&e?e+1:r;
case"fray":return e%2*r;case"notch":return r;case"bevelfold":case"bevel":return e+1;
case"steep":return e/2+1;case"invsteep":return(r-e)/2+1}}var i=/MSIE/.test(navigator.userAgent),n=document.createElement("div").style,a=void 0!==n.MozBorderRadius,d=void 0!==n.WebkitBorderRadius,c=void 0!==n.borderRadius||void 0!==n.BorderRadius,h=document.documentMode||0,u=i&&(!h||8>h),p=i&&function(){
var t=document.createElement("div");try{t.style.setExpression("width","0+0"),t.style.removeExpression("width");
}catch(e){return!1}return!0}();t.support=t.support||{},t.support.borderRadius=a||d||c,
t.fn.corner=function(r){if(0===this.length){if(!t.isReady&&this.selector){var n=this.selector,h=this.context;
t(function(){t(n,h).corner(r)})}return this}return this.each(function(n){var h,l,f,b,g,m,v,x,R,M,B,L,y,w,T=t(this),k=[T.attr(t.fn.corner.defaults.metaAttr)||"",r||""].join(" ").toLowerCase(),C=/keep/.test(k),z=(k.match(/cc:(#[0-9a-f]+)/)||[])[1],E=(k.match(/sc:(#[0-9a-f]+)/)||[])[1],I=parseInt((k.match(/(\d+)px/)||[])[1],10)||10,N=/round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,j=(k.match(N)||["round"])[0],W=/dogfold|bevelfold/.test(k),S={
T:0,B:1},q={TL:/top|tl|left/.test(k),TR:/top|tr|right/.test(k),BL:/bottom|bl|left/.test(k),
BR:/bottom|br|right/.test(k)};if(q.TL||q.TR||q.BL||q.BR||(q={TL:1,TR:1,BL:1,BR:1}),
t.fn.corner.defaults.useNative&&"round"==j&&(c||a||d)&&!z&&!E)return q.TL&&T.css(c?"border-top-left-radius":a?"-moz-border-radius-topleft":"-webkit-border-top-left-radius",I+"px"),
q.TR&&T.css(c?"border-top-right-radius":a?"-moz-border-radius-topright":"-webkit-border-top-right-radius",I+"px"),
q.BL&&T.css(c?"border-bottom-left-radius":a?"-moz-border-radius-bottomleft":"-webkit-border-bottom-left-radius",I+"px"),
void(q.BR&&T.css(c?"border-bottom-right-radius":a?"-moz-border-radius-bottomright":"-webkit-border-bottom-right-radius",I+"px"));
h=document.createElement("div"),t(h).css({overflow:"hidden",height:"1px",minHeight:"1px",
fontSize:"1px",backgroundColor:E||"transparent",borderStyle:"solid"}),l={T:parseInt(t.css(this,"paddingTop"),10)||0,
R:parseInt(t.css(this,"paddingRight"),10)||0,B:parseInt(t.css(this,"paddingBottom"),10)||0,
L:parseInt(t.css(this,"paddingLeft"),10)||0},void 0!==typeof this.style.zoom&&(this.style.zoom=1),
C||(this.style.border="none"),h.style.borderColor=z||o(this.parentNode),f=t(this).outerHeight();
for(b in S)if(g=S[b],g&&(q.BL||q.BR)||!g&&(q.TL||q.TR)){for(h.style.borderStyle="none "+(q[b+"R"]?"solid":"none")+" none "+(q[b+"L"]?"solid":"none"),
m=document.createElement("div"),t(m).addClass("jquery-corner"),v=m.style,g?this.appendChild(m):this.insertBefore(m,this.firstChild),
g&&"auto"!=f?("static"==t.css(this,"position")&&(this.style.position="relative"),
v.position="absolute",v.bottom=v.left=v.padding=v.margin="0",p?v.setExpression("width","this.parentNode.offsetWidth"):v.width="100%"):!g&&i?("static"==t.css(this,"position")&&(this.style.position="relative"),
v.position="absolute",v.top=v.left=v.right=v.padding=v.margin="0",p?(x=e(this,"borderLeftWidth")+e(this,"borderRightWidth"),
v.setExpression("width","this.parentNode.offsetWidth - "+x+'+ "px"')):v.width="100%"):(v.position="relative",
v.margin=g?l.B-I+"px -"+l.R+"px -"+l.B+"px -"+l.L+"px":"-"+l.T+"px -"+l.R+"px "+(l.T-I)+"px -"+l.L+"px"),
R=0;I>R;R++)M=Math.max(0,s(j,R,I)),B=h.cloneNode(!1),B.style.borderWidth="0 "+(q[b+"R"]?M:0)+"px 0 "+(q[b+"L"]?M:0)+"px",
g?m.appendChild(B):m.insertBefore(B,m.firstChild);if(W&&t.support.boxModel){if(g&&u)continue;
for(L in q)if(q[L]&&(!g||"TL"!=L&&"TR"!=L)&&(g||"BL"!=L&&"BR"!=L)){switch(y={position:"absolute",
border:"none",margin:0,padding:0,overflow:"hidden",backgroundColor:h.style.borderColor
},w=t("<div/>").css(y).css({width:I+"px",height:"1px"}),L){case"TL":w.css({bottom:0,
left:0});break;case"TR":w.css({bottom:0,right:0});break;case"BL":w.css({top:0,left:0
});break;case"BR":w.css({top:0,right:0})}m.appendChild(w[0]);var A=t("<div/>").css(y).css({
top:0,bottom:0,width:"1px",height:I+"px"});switch(L){case"TL":A.css({left:I});break;
case"TR":A.css({right:I});break;case"BL":A.css({left:I});break;case"BR":A.css({right:I
})}m.appendChild(A[0])}}}})},t.fn.uncorner=function(){return(c||a||d)&&this.css(c?"border-radius":a?"-moz-border-radius":"-webkit-border-radius",0),
t("div.jquery-corner",this).remove(),this},t.fn.corner.defaults={useNative:!0,metaAttr:"data-corner"
}}(jQuery);