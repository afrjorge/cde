define([],function(){function t(t){return t/=255,.03928>=t?t/12.92:Math.pow((t+.055)/1.055,2.4);
}Array.prototype.map||(Array.prototype.map=function(t,e){for(var r=this.length,n=new Array(r),i=0;r>i;i++)i in this&&(n[i]=t.call(e,this[i],i,this));
return n}),Array.prototype.filter||(Array.prototype.filter=function(t,e){for(var r=this.length,n=new Array,i=0;r>i;i++)if(i in this){
var o=this[i];t.call(e,o,i,this)&&n.push(o)}return n}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){
for(var r=this.length>>>0,n=0;r>n;n++)n in this&&t.call(e,this[n],n,this)}),Array.prototype.reduce||(Array.prototype.reduce=function(t,e){
var r=this.length;if(!r&&1==arguments.length)throw new Error("reduce: empty array, no initial value");
var n=0;if(arguments.length<2)for(;;){if(n in this){e=this[n++];break}if(++n>=r)throw new Error("reduce: no values, no initial value");
}for(;r>n;n++)n in this&&(e=t(e,this[n],n,this));return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){
for(var r=this.length>>>0,n=!isFinite(e)||0>e?0:e>this.length?this.length:e;r>n;n++)if(this[n]===t)return n;
return-1}),Date.now||(Date.now=function(){return+new Date}),Object.create||(Object.create=function(t){
function e(){}return e.prototype=t,new e});var e={};return e.version={major:3,minor:3
},e.identity=function(t){return t},e.index=function(){return this.index},e.child=function(){
return this.childIndex},e.parent=function(){return this.parent.index},!function(){
e.extend=function(t){return Object.create(t.prototype||t)},e.extendType=function(t,r){
var n=t.prototype=e.extend(r);return n.constructor=t,t},e.parse=function(t){for(var r,n,i=new RegExp("function\\s*(\\b\\w+)?\\s*\\([^)]*\\)\\s*","mg"),o=0,a="";r=i.exec(t);){
var s=r.index+r[0].length;if("{"!=t.charAt(s)){a+=t.substring(o,s)+"{return ",o=s;
for(var l=0;l>=0&&s<t.length;s++){var u=t.charAt(s);switch(u){case'"':case"'":for(;++s<t.length&&(n=t.charAt(s))!=u;)"\\"==n&&s++;
break;case"[":case"(":l++;break;case"]":case")":l--;break;case";":case",":0==l&&l--;
}}a+=e.parse(t.substring(o,--s))+";}",o=s}i.lastIndex=s}return a+=t.substring(o)},
e.error=function(t){"undefined"!=typeof console&&console.error?console.error(t):alert(t);
},e.listen=function(t,r,n){return n=e.listener(n),"load"===r||"onload"===r?e.listenForPageLoad(n):(t.addEventListener?t.addEventListener(r,n,!1):(t===window&&(t=document.documentElement),
t.attachEvent("on"+r,n)),n)},e.unlisten=function(t,e,r){r.$listener&&(r=r.$listener),
t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent("on"+e,r)},e.listenForPageLoad=function(t){
"complete"!==document.readyState?document.addEventListener?window.addEventListener("load",t,!1):document.attachEvent&&window.attachEvent("onload",t):t(null);
},e.listener=function(t){return t.$listener||(t.$listener=function(r){try{return e.event=r=r&&e.fixEvent(r),
t.call(this,r)}catch(n){e.error(n)}finally{delete e.event}})},e.fixEvent=function(t){
if(null==t.pageX&&null!=t.clientX){var e=t.target&&t.target.ownerDocument||document,r=e.documentElement,n=e.body;
t.pageX=1*t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),
t.pageY=1*t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0);
}return t},e.ancestor=function(t,e){for(;e;){if(e===t)return!0;e=e.parentNode}return!1;
},e.removeChildren=function(t){for(;t.lastChild;)t.removeChild(t.lastChild)},e.getWindow=function(t){
return null!=t&&t==t.window?t:9===t.nodeType?t.defaultView||t.parentWindow:!1};var t=/\-([a-z])/g;
e.hiphen2camel=function(e){return t.test(e)?e.replace(t,function(t,e){return e.toUpperCase();
}):e};var r=window.getComputedStyle;e.css=function(t,n){return r?r.call(window,t,null).getPropertyValue(n):t.currentStyle["float"===n?"styleFloat":e.hiphen2camel(n)];
},e.cssStyle=function(t){var n;return r?(n=r.call(window,t,null),function(t){return n.getPropertyValue(t);
}):(n=t.currentStyle,function(t){return n["float"===t?"styleFloat":e.hiphen2camel(t)];
})},e._getElementsByClass=function(t,e){null==e&&(e=document);for(var r=[],n=e.getElementsByTagName("*"),i=n.length,o=new RegExp("(^|\\s)"+t+"(\\s|$)"),a=0,s=0;i>a;a++)o.test(n[a].className)&&(r[s]=n[a],
s++);return r},e.getElementsByClassName=function(t,r){return t.getElementsByClassName?t.getElementsByClassName(r):e._getElementsByClass(r,t);
},e.elementOffset=function(t){var r=t&&t.ownerDocument;if(r){var n=r.body;if(n!==t){
var i;i="undefined"!=typeof t.getBoundingClientRect?t.getBoundingClientRect():{top:0,
left:0};var o=e.getWindow(r),a=r.documentElement,s=a.clientTop||n.clientTop||0,l=a.clientLeft||n.clientLeft||0,u=o.pageYOffset||a.scrollTop,h=o.pageXOffset||a.scrollLeft;
return{top:i.top+u-s-(t.scrollTop||0),left:i.left+h-l-(t.scrollLeft||0)}}}},e.renderer=function(){
var t=document.svgImplementation||"nativesvg";return e.renderer=function(){return t;
},t};var n=1;e.id=function(){return n++},e.functor=function(t){return"function"==typeof t?t:function(){
return t}},e.stringLowerCase=function(t){return String(t).toLowerCase()},e.get=function(t,e,r){
var n;return t&&null!=(n=t[e])?n:r};var i=Object.prototype.hasOwnProperty;e.lazyArrayOwn=function(t,e){
var r;return t&&i.call(t,e)&&(r=t[e])?r:t[e]=[]},e.parseNumNonNeg=function(t,e){return null!=t&&("string"==typeof t?t=+t:"number"!=typeof t&&(t=null)),
null==t||isNaN(t)||0>t?null==e?0:e:t};var o=e.epsilon=1e-6;e.floatLess=function(t,r){
return!e.floatEqual(t,r)&&r>t},e.floatLessOrEqual=function(t,r){return r>t||e.floatEqual(t,r);
},e.floatGreater=function(t,r){return!e.floatEqual(t,r)&&t>r},e.floatEqual=function(t,e){
return Math.abs(e-t)<o},e.floatZero=function(t){return Math.abs(t)<o},e.floatBelongsOpen=function(t,r,n){
return e.floatLess(t,r)&&e.floatLess(r,n)},e.floatBelongsClosed=function(t,r,n){return e.floatLessOrEqual(t,r)&&e.floatLessOrEqual(r,n);
}}(),e.listen(window,"load",function(){for(e.$={i:0,x:document.getElementsByTagName("script")
},e.$.xlen=e.$.x.length;e.$.i<e.$.xlen;e.$.i++)if(e.$.s=e.$.x[e.$.i],"text/javascript+protovis"==e.$.s.type)try{
window.eval(e.parse(e.$.s.text))}catch(t){e.error(t)}delete e.$}),e.Format={},e.Format.re=function(t){
return t.replace(/[\\\^\$\*\+\?\[\]\(\)\.\{\}]/g,"\\$&")},e.Format.pad=function(t,e,r){
var n=e-String(r).length;return 1>n?r:new Array(n+1).join(t)+r},e.Format.date=function(t){
function r(e){return t.replace(/%[a-zA-Z0-9]/g,function(t){switch(t){case"%a":return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];
case"%A":return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];
case"%h":case"%b":return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];
case"%B":return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];
case"%c":return e.toLocaleString();case"%C":return n("0",2,Math.floor(e.getFullYear()/100)%100);
case"%d":return n("0",2,e.getDate());case"%x":case"%D":return n("0",2,e.getMonth()+1)+"/"+n("0",2,e.getDate())+"/"+n("0",2,e.getFullYear()%100);
case"%e":return n(" ",2,e.getDate());case"%H":return n("0",2,e.getHours());case"%I":
var r=e.getHours()%12;return r?n("0",2,r):12;case"%m":return n("0",2,e.getMonth()+1);
case"%M":return n("0",2,e.getMinutes());case"%n":return"\n";case"%p":return e.getHours()<12?"AM":"PM";
case"%T":case"%X":case"%r":var r=e.getHours()%12;return(r?n("0",2,r):12)+":"+n("0",2,e.getMinutes())+":"+n("0",2,e.getSeconds())+" "+(e.getHours()<12?"AM":"PM");
case"%R":return n("0",2,e.getHours())+":"+n("0",2,e.getMinutes());case"%S":return n("0",2,e.getSeconds());
case"%Q":return n("0",3,e.getMilliseconds());case"%t":return"	";case"%u":var i=e.getDay();
return i?i:1;case"%w":return e.getDay();case"%y":return n("0",2,e.getFullYear()%100);
case"%Y":return e.getFullYear();case"%%":return"%"}return t})}var n=e.Format.pad;return r.format=r,
r.parse=function(r){var n=1970,i=0,o=1,a=0,s=0,l=0,u=[function(){}],h=e.Format.re(t).replace(/%[a-zA-Z0-9]/g,function(t){
switch(t){case"%b":return u.push(function(t){i={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,
Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[t]}),"([A-Za-z]+)";case"%h":case"%B":return u.push(function(t){
i={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,
October:9,November:10,December:11}[t]}),"([A-Za-z]+)";case"%e":case"%d":return u.push(function(t){
o=t}),"([0-9]+)";case"%I":case"%H":return u.push(function(t){a=t}),"([0-9]+)";case"%m":
return u.push(function(t){i=t-1}),"([0-9]+)";case"%M":return u.push(function(t){s=t;
}),"([0-9]+)";case"%p":return u.push(function(t){12==a?"am"==t&&(a=0):"pm"==t&&(a=Number(a)+12);
}),"(am|pm)";case"%S":return u.push(function(t){l=t}),"([0-9]+)";case"%y":return u.push(function(t){
t=Number(t),n=t+(t>=0&&69>t?2e3:t>=69&&100>t?1900:0)}),"([0-9]+)";case"%Y":return u.push(function(t){
n=t}),"([0-9]+)";case"%%":return u.push(function(){}),"%"}return t}),c=r.match(h);
return c&&c.forEach(function(t,e){u[e](t)}),new Date(n,i,o,a,s,l)},r},e.Format.time=function(t){
function r(e){switch(e=Number(e),t){case"short":return e>=31536e6?(e/31536e6).toFixed(1)+" years":e>=6048e5?(e/6048e5).toFixed(1)+" weeks":e>=864e5?(e/864e5).toFixed(1)+" days":e>=36e5?(e/36e5).toFixed(1)+" hours":e>=6e4?(e/6e4).toFixed(1)+" minutes":(e/1e3).toFixed(1)+" seconds";
case"long":var r=[],i=e%6e4/1e3>>0,o=e%36e5/6e4>>0;if(r.push(n("0",2,i)),e>=36e5){
var a=e%864e5/36e5>>0;r.push(n("0",2,o)),e>=864e5?(r.push(n("0",2,a)),r.push(Math.floor(e/864e5).toFixed())):r.push(a.toFixed());
}else r.push(o.toFixed());return r.reverse().join(":")}}var n=e.Format.pad;return r.format=r,
r.parse=function(e){switch(t){case"short":for(var r,n=/([0-9,.]+)\s*([a-z]+)/g,i=0;r=n.exec(e);){
var o=parseFloat(r[0].replace(",","")),a=0;switch(r[2].toLowerCase()){case"year":
case"years":a=31536e6;break;case"week":case"weeks":a=6048e5;break;case"day":case"days":
a=864e5;break;case"hour":case"hours":a=36e5;break;case"minute":case"minutes":a=6e4;
break;case"second":case"seconds":a=1e3}i+=o*a}return i;case"long":var r=e.replace(",","").split(":").reverse(),i=0;
return r.length&&(i+=1e3*parseFloat(r[0])),r.length>1&&(i+=6e4*parseFloat(r[1])),
r.length>2&&(i+=36e5*parseFloat(r[2])),r.length>3&&(i+=864e5*parseFloat(r[3])),i}
},r},e.Format.number=function(){function t(t){1/0>a&&(t=Math.round(t*s)/s);var e=String(Math.abs(t)).split("."),y=e[0];
y.length>n&&(y=y.substring(y.length-n)),h&&y.length<r&&(y=new Array(r-y.length+1).join(l)+y),
y.length>3&&(y=y.replace(/\B(?=(?:\d{3})+(?!\d))/g,p)),!h&&y.length<i&&(y=new Array(i-y.length+1).join(l)+y),
e[0]=0>t?f+y+d:y;var g=e[1]||"";return g.length>a&&(g=e[1]=g.substr(0,a)),g.length<o&&(e[1]=g+new Array(o-g.length+1).join(u)),
e.join(c)}var r=0,n=1/0,i=0,o=0,a=0,s=1,l="0",u="0",h=!0,c=".",p=",",f="−",d="";return t.format=t,
t.parse=function(t){var r=e.Format.re,i=String(t).split(c);1==i.length&&(i[1]=""),
i[0].replace(new RegExp("^("+r(l)+")*"),""),i[1].replace(new RegExp("("+r(u)+")*$"),"");
var o=i[0].replace(new RegExp(r(p),"g"),"");o.length>n&&(o=o.substring(o.length-n));
var h=i[1]?Number("0."+i[1]):0;return 1/0>a&&(h=Math.round(h*s)/s),Math.round(o)+h;
},t.integerDigits=function(t,e){return arguments.length?(r=Number(t),n=arguments.length>1?Number(e):r,
i=r+Math.floor(r/3)*p.length,this):[r,n]},t.fractionDigits=function(t,e){return arguments.length?(o=Number(t),
a=arguments.length>1?Number(e):o,s=Math.pow(10,a),this):[o,a]},t.integerPad=function(t){
return arguments.length?(l=String(t),h=/\d/.test(l),this):l},t.fractionPad=function(t){
return arguments.length?(u=String(t),this):u},t.decimal=function(t){return arguments.length?(c=String(t),
this):c},t.group=function(t){return arguments.length?(p=t?String(t):"",i=r+Math.floor(r/3)*p.length,
this):p},t.negativeAffix=function(t,e){return arguments.length?(f=String(t||""),d=String(e||""),
this):[f,d]},t},!function(){var t;e.Text={},e.Text.createCache=function(){return new r;
},e.Text.usingCache=function(e,n,i){if(!(e instanceof r))throw new Error("Not a valid cache.");
var o=t;t=e;try{return n.call(i)}finally{t=o}},e.Text.measure=function(e,r){e=null==e?"":String(e);
var n=t&&t.get(r,e);return n||(n=e?this.measureCore(e,r):{width:0,height:0},t&&t.put(r,e,n)),
n},e.Text.measureWidth=function(t,r){return e.Text.measure(t,r).width},e.Text.fontHeight=function(t){
return e.Text.measure("M",t).height},e.Text.measureCore=function(){function t(){return n||(n=r());
}function r(){var t=document.createElement("div");t.id="pvSVGText_"+(new Date).getTime();
var r=t.style;r.position="absolute",r.visibility="hidden",r.width=0,r.height=0,r.left=0,
r.top=0,r.lineHeight=1,r.textTransform="none",r.letterSpacing="normal",r.whiteSpace="nowrap";
var n=e.SvgScene.create("svg");n.setAttribute("font-size","10px"),n.setAttribute("font-family","sans-serif"),
t.appendChild(n);var i=e.SvgScene.create("text");return n.appendChild(i),i.appendChild(document.createTextNode("")),
document.body.appendChild(t),i}var n,i="10px sans-serif";return function(r,n){n||(n=null);
var o=t();i!==n&&(i=n,e.SvgScene.setStyle(o,{font:n})),o.firstChild.nodeValue=String(r);
var a;try{a=o.getBBox()}catch(s){throw"function"==typeof console.error&&console.error("GetBBox failed: ",s),
s}return{width:a.width,height:a.height}}}();var r=function(){this._fontsCache={}},n=Object.prototype.hasOwnProperty;
r.prototype._getFont=function(t){return t=t||"",n.call(this._fontsCache,t)?this._fontsCache[t]:this._fontsCache[t]={};
},r.prototype.get=function(t,e){e=e||"";var r=this._getFont(t);return n.call(r,e)?r[e]:null;
},r.prototype.put=function(t,e,r){return this._getFont(t)[e||""]=r}}(),e.map=function(t,e){
var r={};return e?t.map(function(t,n){return r.index=n,e.call(r,t)}):t.slice()},e.repeat=function(t,r){
return 1==arguments.length&&(r=2),e.blend(e.range(r).map(function(){return t}))},
e.array=function(t,e){var r=t>=0?new Array(t):[];if(void 0!==e)for(var n=0;t>n;n++)r[n]=e;
return r},e.cross=function(t,e){for(var r=[],n=0,i=t.length,o=e.length;i>n;n++)for(var a=0,s=t[n];o>a;a++)r.push([s,e[a]]);
return r},e.blend=function(t){return Array.prototype.concat.apply([],t)},e.transpose=function(t){
var r=t.length,n=e.max(t,function(t){return t.length});if(n>r){t.length=n;for(var i=r;n>i;i++)t[i]=new Array(r);
for(var i=0;r>i;i++)for(var o=i+1;n>o;o++){var a=t[i][o];t[i][o]=t[o][i],t[o][i]=a;
}}else{for(var i=0;n>i;i++)t[i].length=r;for(var i=0;r>i;i++)for(var o=0;i>o;o++){
var a=t[i][o];t[i][o]=t[o][i],t[o][i]=a}}t.length=n;for(var i=0;n>i;i++)t[i].length=r;
return t},e.normalize=function(t,r){for(var n=e.map(t,r),i=e.sum(n),o=0;o<n.length;o++)n[o]/=i;
return n},e.permute=function(t,r,n){n||(n=e.identity);var i=new Array(r.length),o={};
return r.forEach(function(e,r){o.index=e,i[r]=n.call(o,t[e])}),i},e.numerate=function(t,r){
r||(r=e.identity);var n={},i={};return t.forEach(function(t,e){i.index=e,n[r.call(i,t)]=e;
}),n},e.uniq=function(t,r){r||(r=e.identity);var n,i={},o=[],a={};return t.forEach(function(t,e){
a.index=e,n=r.call(a,t),n in i||(i[n]=o.push(n))}),o},e.naturalOrder=function(t,e){
return e>t?-1:t>e?1:0},e.reverseOrder=function(t,e){return t>e?-1:e>t?1:0},e.search=function(t,r,n){
n||(n=e.identity);for(var i=0,o=t.length-1;o>=i;){var a=i+o>>1,s=n(t[a]);if(r>s)i=a+1;else{
if(!(s>r))return a;o=a-1}}return-i-1},e.search.index=function(t,r,n){var i=e.search(t,r,n);
return 0>i?-i-1:i},e.range=function(t,e,r){if(1==arguments.length&&(e=t,t=0),void 0==r&&(r=1),
(e-t)/r==1/0)throw new Error("range must be finite");var n,i=[],o=0;if(e-=1e-10*(e-t),
0>r)for(;(n=t+r*o++)>e;)i.push(n);else for(;(n=t+r*o++)<e;)i.push(n);return i},e.random=function(t,e,r){
return 1==arguments.length&&(e=t,t=0),void 0==r&&(r=1),r?Math.floor(Math.random()*(e-t)/r)*r+t:Math.random()*(e-t)+t;
},e.sum=function(t,e){var r={};return t.reduce(e?function(t,n,i){return r.index=i,
t+e.call(r,n)}:function(t,e){return t+e},0)},e.max=function(t,r){return r==e.index?t.length-1:Math.max.apply(null,r?e.map(t,r):t);
},e.max.index=function(t,r){if(!t.length)return-1;if(r==e.index)return t.length-1;
r||(r=e.identity);for(var n=0,i=-1/0,o={},a=0;a<t.length;a++){o.index=a;var s=r.call(o,t[a]);
s>i&&(i=s,n=a)}return n},e.min=function(t,r){return r==e.index?0:Math.min.apply(null,r?e.map(t,r):t);
},e.min.index=function(t,r){if(!t.length)return-1;if(r==e.index)return 0;r||(r=e.identity);
for(var n=0,i=1/0,o={},a=0;a<t.length;a++){o.index=a;var s=r.call(o,t[a]);i>s&&(i=s,
n=a)}return n},e.mean=function(t,r){return e.sum(t,r)/t.length},e.median=function(t,r){
if(r==e.index)return(t.length-1)/2;if(t=e.map(t,r).sort(e.naturalOrder),t.length%2)return t[Math.floor(t.length/2)];
var n=t.length/2;return(t[n-1]+t[n])/2},e.variance=function(t,r){if(t.length<1)return NaN;
if(1==t.length)return 0;var n=e.mean(t,r),i=0,o={};r||(r=e.identity);for(var a=0;a<t.length;a++){
o.index=a;var s=r.call(o,t[a])-n;i+=s*s}return i},e.deviation=function(t,r){return Math.sqrt(e.variance(t,r)/(t.length-1));
},e.log=function(t,e){return Math.log(t)/Math.log(e)},e.logSymmetric=function(t,r){
return 0==t?0:0>t?-e.log(-t,r):e.log(t,r)},e.logAdjusted=function(t,r){if(!isFinite(t))return t;
var n=0>t;return r>t&&(t+=(r-t)/r),n?-e.log(t,r):e.log(t,r)},e.logFloor=function(t,r){
return t>0?Math.pow(r,Math.floor(e.log(t,r))):-Math.pow(r,-Math.floor(-e.log(-t,r)));
},e.logCeil=function(t,r){return t>0?Math.pow(r,Math.ceil(e.log(t,r))):-Math.pow(r,-Math.ceil(-e.log(-t,r)));
},!function(){var t=Math.PI/180,r=180/Math.PI;e.radians=function(e){return t*e},e.degrees=function(t){
return r*t}}(),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e},e.entries=function(t){
var e=[];for(var r in t)e.push({key:r,value:t[r]});return e},e.values=function(t){
var e=[];for(var r in t)e.push(t[r]);return e},e.dict=function(t,e){for(var r={},n={},i=0;i<t.length;i++)if(i in t){
var o=t[i];n.index=i,r[o]=e.call(n,o)}return r},e.hasOwnProp=Object.prototype.hasOwnProperty,
e.copyOwn=function(t,r){if(r){var n=e.hasOwnProp;for(var i in r)n.call(r,i)&&(t[i]=r[i]);
}return t},e.dom=function(t){return new e.Dom(t)},e.Dom=function(t){this.$map=t},
e.Dom.prototype.$leaf=function(t){return"object"!=typeof t},e.Dom.prototype.leaf=function(t){
return arguments.length?(this.$leaf=t,this):this.$leaf},e.Dom.prototype.root=function(t){
function r(t){var i=new e.Dom.Node;for(var o in t){var a=t[o];i.appendChild(n(a)?new e.Dom.Node(a):r(a)).nodeName=o;
}return i}var n=this.$leaf,i=r(this.$map);return i.nodeName=t,i},e.Dom.prototype.nodes=function(){
return this.root().nodes()},e.Dom.Node=function(t){void 0!==t&&(this.nodeValue=t);
},e.Dom.Node.prototype.nodeValue=void 0,e.Dom.Node.prototype.childNodes=[],e.Dom.Node.prototype.parentNode=null,
e.Dom.Node.prototype.firstChild=null,e.Dom.Node.prototype.lastChild=null,e.Dom.Node.prototype.previousSibling=null,
e.Dom.Node.prototype.nextSibling=null,e.Dom.Node.prototype._firstDirtyChildIndex=1/0,
e.Dom.Node.prototype._childIndex=-1,e.Dom.Node.prototype.findChildIndex=function(t){
if(!t)throw new Error("Argument 'n' required");if(t.parentNode===this){var e=t.childIndex(!0);
if(e>-1)return e}throw new Error("child not found")},e.Dom.Node.prototype._childRemoved=function(){},
e.Dom.Node.prototype._childAdded=function(){},e.Dom.Node.prototype.removeChild=function(t){
var e=this.findChildIndex(t);return this.removeAt(e)},e.Dom.Node.prototype.appendChild=function(t){
var r=t.parentNode;r&&r.removeChild(t);var n=this.lastChild;t.parentNode=this,t.previousSibling=n,
n?(n.nextSibling=t,t._childIndex=n._childIndex+1):(this.firstChild=t,t._childIndex=0),
this.lastChild=t;var i=e.lazyArrayOwn(this,"childNodes").push(t);return this._childAdded(t,i-1),
t},e.Dom.Node.prototype.insertBefore=function(t,e){if(!e)return this.appendChild(t);
var r=this.findChildIndex(e);return this.insertAt(t,r)},e.Dom.Node.prototype.insertAt=function(t,e){
if(null==e)return this.appendChild(t);var r=this.childNodes,n=r.length;if(e===n)return this.appendChild(t);
if(0>e||e>n)throw new Error("Index out of range.");var i=t.parentNode;i&&i.removeChild(t);
var o=e+1;o<this._firstDirtyChildIndex&&(this._firstDirtyChildIndex=o);var a=r[e];
t.parentNode=this,t.nextSibling=a,t._childIndex=e;var s=t.previousSibling=a.previousSibling;
return a.previousSibling=t,s?s.nextSibling=t:(a===this.lastChild&&(this.lastChild=t),
this.firstChild=t),r.splice(e,0,t),this._childAdded(t,e),t},e.Dom.Node.prototype.removeAt=function(t){
var e=this.childNodes,r=e.length;if(!(0>t||t>=r)){var n=e[t];e.splice(t,1),r-1>t&&t<this._firstDirtyChildIndex&&(this._firstDirtyChildIndex=t);
var i=n.previousSibling,o=n.nextSibling;return i?i.nextSibling=o:this.firstChild=o,
o?o.previousSibling=i:this.lastChild=i,n.nextSibling=n.previousSibling=n.parentNode=null,
this._childRemoved(n,t),n}},e.Dom.Node.prototype.replaceChild=function(t,e){var r=this.findChildIndex(e),n=t.parentNode;
n&&n.removeChild(t),t.parentNode=this,t.nextSibling=e.nextSibling,t._childIndex=e._childIndex;
var i=t.previousSibling=e.previousSibling;i?i.nextSibling=t:this.firstChild=t;var o=e.nextSibling;
return o?o.previousSibling=t:this.lastChild=t,this.childNodes[r]=t,this._childRemoved(e,r),
this._childAdded(t,r),e},e.Dom.Node.prototype.childIndex=function(t){var e=this.parentNode;
if(e){var r=e._firstDirtyChildIndex;if(1/0>r){var n=e.childNodes;if(!t)return n.indexOf(this);
for(var i=n.length;i>r;)n[r]._childIndex=r,r++;e._firstDirtyChildIndex=1/0}return this._childIndex;
}return-1},e.Dom.Node.prototype.visitBefore=function(t){function e(r,n){t(r,n);for(var i=r.firstChild;i;i=i.nextSibling)e(i,n+1);
}e(this,0)},e.Dom.Node.prototype.visitAfter=function(t){function e(r,n){for(var i=r.firstChild;i;i=i.nextSibling)e(i,n+1);
t(r,n)}e(this,0)},e.Dom.Node.prototype.sort=function(t){if(this.firstChild){this._firstDirtyChildIndex=1/0;
var e=this.childNodes;e.sort(t);var r,n=this.firstChild=e[0];delete n.previousSibling,
n._childIndex=0;for(var i=1,o=e.length;o>i;i++)n.sort(t),r=e[i],r._childIndex=i,r.previousSibling=n,
n=n.nextSibling=r;this.lastChild=n,delete n.nextSibling,n.sort(t)}return this},e.Dom.Node.prototype.reverse=function(){
var t=[];return this.visitAfter(function(e){this._firstDirtyChildIndex=1/0;for(var r;r=e.lastChild;)t.push(e.removeChild(r));
if(t.length)for(;r=t.pop();)e.insertBefore(r,e.firstChild)}),this},e.Dom.Node.prototype.nodes=function(){
var t=[];return this.visitBefore(function(e){t.push(e)}),t},e.Dom.Node.prototype.toggle=function(t){
if(t)return this.toggled?this.visitBefore(function(t){t.toggled&&t.toggle()}):this.visitAfter(function(t){
t.toggled||t.toggle()});var e,r=this;if(r.toggled){for(;e=r.toggled.pop();)r.appendChild(e);
delete r.toggled}else if(e=r.lastChild){r.toggled=[];do r.toggled.push(r.removeChild(e));while(e=r.lastChild);
}},e.nodes=function(t){for(var r=new e.Dom.Node,n=0,i=t.length;i>n;n++)r.appendChild(new e.Dom.Node(t[n]));
return r.nodes()},e.tree=function(t){return new e.Tree(t)},e.Tree=function(t){this.array=t;
},e.Tree.prototype.keys=function(t){return this.k=t,this},e.Tree.prototype.value=function(t){
return this.v=t,this},e.Tree.prototype.map=function(){for(var t={},e={},r=0;r<this.array.length;r++){
e.index=r;for(var n=this.array[r],i=this.k.call(e,n),o=t,a=0;a<i.length-1;a++)o=o[i[a]]||(o[i[a]]={});
o[i[a]]=this.v?this.v.call(e,n):n}return t},e.nest=function(t){return new e.Nest(t);
},e.Nest=function(t){this.array=t,this.keys=[]},e.Nest.prototype.key=function(t){
return this.keys.push(t),this},e.Nest.prototype.sortKeys=function(t){return this.keys[this.keys.length-1].order=t||e.naturalOrder,
this},e.Nest.prototype.sortValues=function(t){return this.order=t||e.naturalOrder,
this},e.Nest.prototype.map=function(){for(var t,e={},r=[],n=0;n<this.array.length;n++){
var i=this.array[n],o=e;for(t=0;t<this.keys.length-1;t++){var a=this.keys[t](i);o[a]||(o[a]={}),
o=o[a]}if(a=this.keys[t](i),!o[a]){var s=[];r.push(s),o[a]=s}o[a].push(i)}if(this.order)for(var t=0;t<r.length;t++)r[t].sort(this.order);
return e},e.Nest.prototype.entries=function(){function t(e){var r=[];for(var n in e){
var i=e[n];r.push({key:n,values:i instanceof Array?i:t(i)})}return r}function e(t,r){
var n=this.keys[r].order;if(n&&t.sort(function(t,e){return n(t.key,e.key)}),++r<this.keys.length)for(var i=0;i<t.length;i++)e.call(this,t[i].values,r);
return t}return e.call(this,t(this.map()),0)},e.Nest.prototype.rollup=function(t){
function e(r){for(var n in r){var i=r[n];i instanceof Array?r[n]=t(i):e(i)}return r;
}return e(this.map())},e.flatten=function(t){return new e.Flatten(t)},e.Flatten=function(t){
this.map=t,this.keys=[]},e.Flatten.prototype.key=function(t,e){return this.keys.push({
name:t,value:e}),delete this.$leaf,this},e.Flatten.prototype.leaf=function(t){return this.keys.length=0,
this.$leaf=t,this},e.Flatten.prototype.array=function(){function t(e,i){if(o(e))r.push({
keys:n.slice(),value:e});else for(var a in e)n.push(a),t(e[a],i+1),n.pop()}function e(t,o){
if(o<i.length-1)for(var a in t)n.push(a),e(t[a],o+1),n.pop();else r.push(n.concat(t));
}var r=[],n=[],i=this.keys,o=this.$leaf;return o?(t(this.map,0),r):(e(this.map,0),
r.map(function(t){for(var e={},r=0;r<i.length;r++){var n=i[r],o=t[r];e[n.name]=n.value?n.value.call(null,o):o;
}return e}))},e.Transform=function(){},e.Transform.prototype={k:1,x:0,y:0},e.Transform.identity=new e.Transform,
e.Transform.prototype.translate=function(t,r){var n=new e.Transform;return n.k=this.k,
n.x=this.k*t+this.x,n.y=this.k*r+this.y,n},e.Transform.prototype.scale=function(t){
var r=new e.Transform;return r.k=this.k*t,r.x=this.x,r.y=this.y,r},e.Transform.prototype.invert=function(){
var t=new e.Transform,r=1/this.k;return t.k=r,t.x=-this.x*r,t.y=-this.y*r,t},e.Transform.prototype.times=function(t){
var r=new e.Transform;return r.k=this.k*t.k,r.x=this.k*t.x+this.x,r.y=this.k*t.y+this.y,
r},e.Scale=function(){},e.Scale.interpolator=function(t,r){if("number"==typeof t)return function(e){
return e*(r-t)+t};var n=t.type&&"solid"!==t.type,i=r.type&&"solid"!==r.type;return n||i?(t=n?t:e.color(t).rgb(),
r=i?r:e.color(r).rgb(),function(e){return.5>e?t:r}):(t=e.color(t).rgb(),r=e.color(r).rgb(),
function(n){var i=t.a*(1-n)+r.a*n;return 1e-5>i&&(i=0),0==t.a?e.rgb(r.r,r.g,r.b,i):0==r.a?e.rgb(t.r,t.g,t.b,i):e.rgb(Math.round(t.r*(1-n)+r.r*n),Math.round(t.g*(1-n)+r.g*n),Math.round(t.b*(1-n)+r.b*n),i);
})},e.Scale.common={by:function(t){function e(){return r(t.apply(this,arguments));
}var r=this;for(var n in r)e[n]=r[n];return e},by1:function(t){function e(e){return r(t.call(this,e));
}var r=this;for(var n in r)e[n]=r[n];return e},transform:function(t){function e(){
return t.call(this,r.apply(r,arguments))}var r=this;for(var n in r)e[n]=r[n];return e;
}},!function(){function t(t,o,a,s){var l,u=a-o;if(u&&isFinite(u)){var h=e.parseNumNonNeg(e.get(s,"precision",0)),c=e.parseNumNonNeg(e.get(s,"precisionMin",0)),p=e.parseNumNonNeg(e.get(s,"precisionMax",1/0)),f=e.get(s,"roundInside",!0);
isFinite(h)||(h=0),isFinite(c)||(c=0),p||(p=1/0);var d=e.get(s,"numberExponentMin"),y=e.get(s,"numberExponentMax");
null!=d&&isFinite(d)&&(c=Math.max(c,Math.pow(10,Math.floor(d)))),null!=y&&isFinite(y)&&(p=Math.min(p,5*Math.pow(10,Math.floor(y)))),
f&&(c>u&&(c=u),p>u&&(p=u)),c>p&&(p=c),h?h=Math.max(Math.min(h,p),c):c===p&&(h=c);var g,m,v,x,b=0,k=!!h;
if(k)g={base:Math.abs(h),mult:1,value:1},g.value=g.base;else{var S=e.parseNumNonNeg(e.get(s,"tickCountMax",1/0));
if(1>S&&(S=1),null==t?t=Math.min(10,S):isFinite(t)?t>S&&(t=S):t=isFinite(S)?S:10,
g={base:isFinite(t)?e.logFloor(u/t,10):0,mult:1,value:1},g.value=g.base,c>0&&(m=i(c,!0),
g.value<m.value&&(r(g,m),b=-1)),isFinite(p)&&(v=i(p,!1),m&&v.value<=m.value?v=null:v.value<g.value&&(r(g,v),
b=1)),1!==b&&isFinite(t)&&g.mult<10&&(x=u/g.base,x>t)){var M=t/x;.15>=M?g.mult=10:g.mult<5&&(.35>=M?g.mult=5:g.mult<2&&.75>=M&&(g.mult=2)),
g.mult>1&&(g.value=g.base*g.mult,m&&g.value<m.value?(r(g,m),b=-1):v&&v.value<g.value?(r(g,v),
b=1):10===g.mult&&(g.base*=10,g.mult=1))}}for(var w;;){var C=g.value,L=C*Math[f?"ceil":"floor"](o/C),N=C*Math[f?"floor":"ceil"](a/C);
if(w&&(L>N||v&&N-L>v.value)){g=w;break}var A=Math.floor(e.log(C,10)+1e-10);if(g.decPlaces=Math.max(0,-A),
g.ticks=e.range(L,N+C,C),k||b>0||g.ticks.length<=S)break;if(w&&w.ticks.length<=g.ticks.length){
g=w;break}g=n(w=g)}l=g.ticks,l.step=g.value,l.base=g.base,l.mult=g.mult,l.decPlaces=g.decPlaces,
l.format=e.Format.number().fractionDigits(g.decPlaces)}else l=[+o],l.step=l.base=l.mult=1,
l.decPlaces=0,l.format=e.Format.number().fractionDigits(0);return l}function r(t,e){
return t.base=e.base,t.mult=e.mult,t.value=e.value,t}function n(t){var e=r({},t);switch(e.mult){
case 5:e.mult=1,e.base*=10;break;case 2:e.mult=5;break;case 1:e.mult=2}return e.value=e.base*e.mult,
e}function i(t,r){0>t&&(t=-t);var n=e.logFloor(t,10),i=t/n;return r?i>5?(i=1,n*=10):i=i>2?5:i>1?2:1:i=i>=5?5:i>=2?2:1,
{base:n,mult:i,value:n*i,source:t}}function o(t){return new Date(t)}function a(t,r,n,i,a,l,u){
var c,f=n-r;if(f&&isFinite(f)){i=p(e.get(u,"precision"),i);var d=p(e.get(u,"precisionMin"),0),y=p(e.get(u,"precisionMax"),1/0);
d>y&&(y=d),i?i=Math.max(Math.min(i,y),d):d===y&&(i=d);var g=e.parseNumNonNeg(e.get(u,"tickCountMax",1/0));
2>g&&(g=2),t=Math.min(null==t?5:t,g);for(var m,v={weekStart:l,roundInside:e.get(u,"roundInside",1)
},x=s(t,f,i,d,y,v),b=x.fixed,k=x.overflow;;){if(x.ticks=c=x.comp.ticks(r,n,x.mult,v),
m&&x.precMax&&c[c.length-1]-c[0]>x.precMax.value){x=m;break}if(b||k>0||x.ticks.length<=g)break;
if(m&&m.ticks.length<=x.ticks.length){x=m;break}m=x,x=x.comp.resultAbove(x.mult)}
c=x.ticks,c.step=x.value,c.base=x.comp.value,c.mult=x.mult,c.format=h(a)||x.comp.format;
}else c=[o(r)],c.step=c.base=c.mult=1,c.format=e.Format.date("%x");return c}function s(t,e,r,n,i,o){
var a,s,u,h,c=0,p=1,f=!!r;return r?(s=l(r,!1),s.value!==r?a=s.comp.withPrecision(r):(a=s.comp,
p=s.mult)):(isFinite(t)?(a=m(e,t),p=a.multiple(e/a.value,o)):(a=y(),p=1),r=a.value*p,
n>r&&(u=l(n,!0)),r>i&&(h=l(i,!1)),u&&r<u.value?(a=u.comp,p=u.mult,c=-1):h&&n<h.value&&h.value<r&&(a=h.comp,
p=h.mult,c=1)),{comp:a,mult:p,value:a.value*p,source:r,overflow:c,fixed:f,precMin:u,
precMax:h}}function l(t,e){return null==t||0>=t||!isFinite(t)?null:(e?y:g)().castValue(t,e);
}function u(t,r,n){this.value=t,this.mult=n.mult||1,this.base=1===this.mult?this.value:Math.floor(this.value/this.mult),
v.forEach(function(t){null!=n[t]&&(this[t]=n[t])},this),n.floor&&(this.floorLocal=n.floor),
this.format=h(n.format),this.first=e.functor(n.first||0),this.prev=r,this.next=null,
r&&(r.next=this)}function h(t){return null==t?null:"function"==typeof t?t:e.Format.date(t);
}function c(t,e){var r=new Date(t.getFullYear(),t.getMonth(),1),n=e-r.getDay();return n&&(0>n&&(n+=7),
r.setDate(r.getDate()+n)),r}function p(t,e){if("string"==typeof t){var r=+t;if(isNaN(r)){
if(t){var n=/^(\d*)([a-zA-Z]+)$/.exec(t);n&&(t=f(n[2]),t&&(t*=+n[1]||1))}}else t=r;
}return("number"!=typeof t||0>t)&&(t=null!=e?e:0),t}function f(t){switch(t){case"year":
case"y":return 31536e6;case"month":case"m":return 2592e6;case"week":case"w":return 6048e5;
case"day":case"d":return 864e5;case"hour":case"h":return 36e5;case"minute":case"M":
return 6e4;case"second":case"s":return 1e3;case"millisecond":case"ms":return 1}}function d(t,e){
var r=g();x.push(new u(t,r,e))}function y(){return x[0]}function g(){return x.length?x[x.length-1]:null;
}function m(t,e){null==e&&(e=1);var r,n=g();do r=n;while(t<e*r.value&&(n=r.prev));
return r}e.Scale.quantitative=function(){function r(t){var r=e.search(l,t);return 0>r&&(r=-r-2),
r=Math.max(0,Math.min(c.length-1,r)),c[r]((y(t)-u[r])/(u[r+1]-u[r]))}var n,i,s,l=[0,1],u=[0,1],h=[0,1],c=[e.identity],f=Number,d=!1,y=e.identity,g=e.identity,m=null,v=0;
return r.transform=function(t,e){return y=function(e){return d?-t(-e):t(e)},g=function(t){
return d?-e(-t):e(t)},u=l.map(y),this},r.domain=function(t,r,n){if(arguments.length){
var i;return t instanceof Array?(arguments.length<2&&(r=e.identity),arguments.length<3&&(n=r),
i=t.length&&r(t[0]),l=t.length?[e.min(t,r),e.max(t,n)]:[]):(i=t,l=Array.prototype.slice.call(arguments).map(Number)),
l.length?1==l.length&&(l=[l[0],l[0]]):l=[-1/0,1/0],d=(l[0]||l[l.length-1])<0,u=l.map(y),
f=i instanceof Date?o:Number,this}return l.map(f)},r.range=function(){if(arguments.length){
h=Array.prototype.slice.call(arguments),h.length?1==h.length&&(h=[h[0],h[0]]):h=[-1/0,1/0],
c=[];for(var t=0;t<h.length-1;t++)c.push(e.Scale.interpolator(h[t],h[t+1]));return this;
}return h},r.invert=function(t){var r=e.search(h,t);return 0>r&&(r=-r-2),r=Math.max(0,Math.min(c.length-1,r)),
f(g(u[r]+(t-h[r])/(h[r+1]-h[r])*(u[r+1]-u[r])))},r.ticks=function(e,r){var u=l[0],h=l[l.length-1],c=u>h,p=c?h:u,d=c?u:h;
return s=f===o?a(e,p,d,i,n,v,r):t(e,p,d,r),c?s.reverse():s},r.dateTickFormat=function(){
return arguments.length?(n=arguments[0],this):n},r.dateTickPrecision=function(){return arguments.length?(i=p(arguments[0],0),
this):i},r.dateTickWeekStart=function(t){if(arguments.length){switch((""+t).toLowerCase()){
case"0":case"sunday":v=0;break;case"1":case"monday":v=1;break;case"2":case"tuesday":
v=2;break;case"3":case"wednesday":v=3;break;case"4":case"thursday":v=4;break;case"5":
case"friday":v=5;break;case"6":case"saturday":v=6;break;default:v=0}return this}return v;
},r.tickFormatter=function(t){return arguments.length?(m=t,this):m},r.tickFormat=function(t,e){
var r;if(m){s||(s=[],s.step=s.base=s.mult=1,s.decPlaces=0,s.format=String);var n=f!==Number?s.step:s.decPlaces;
r=m.call(s,t,n,null!=e?e:-1)}else r=s?s.format(t):String(t);return r},r.nice=function(){
if(2!=l.length)return this;var t=l[0],e=l[l.length-1],r=t>e,n=r?e:t,i=r?t:e,o=i-n;
if(!o||!isFinite(o))return this;var a=Math.pow(10,Math.round(Math.log(o)/Math.log(10))-1);
return l=[Math.floor(n/a)*a,Math.ceil(i/a)*a],r&&l.reverse(),u=l.map(y),this},e.copyOwn(r,e.Scale.common),
r.domain.apply(r,arguments),r};var v=["get","set","multiple","multiples","thresholds","closeds","castValue"];
u.prototype.increment=function(t,e){null==e&&(e=1),1!==this.mult&&(e*=this.mult),
this.set(t,this.get(t)+e)},u.prototype.get=function(t){return t.getMilliseconds();
},u.prototype.set=function(t,e){t.setMilliseconds(e)},u.prototype.floorLocal=function(){},
u.prototype.floor=function(t,e){var r=0;1!==this.mult&&(this.floorLocal(t,e),r=this.base);
for(var n=this.prev;n;)1===n.mult&&n.value!==r&&n.clear(t,e),n=n.prev},u.prototype.floorMultiple=function(t,e,r){
var n=this.first(t,r),i=this.get(t)-n;if(i){var o=e*this.mult,a=Math.floor(i/o)*o;
this.set(t,n+a)}},u.prototype.clear=function(t,e){this.set(t,this.first(t,e))},u.prototype.multiple=function(t){
for(var e=this.multiples,r=this.thresholds,n=this.closeds,i=e.length,o=-1;++o<i;)if(n[o]?t<=r[o]:t<r[o])return e[o];
throw new Error("Invalid configuration.")},u.prototype.resultAbove=function(t){return this.castValue(this.value*t+.1,!0);
},u.prototype.castValue=function(t,e){var r=this.multiples;if(!r)return this._castValueResult(1,t,1);
var n,i=t/this.value,o=r.length;if(e){for(n=-1;++n<o;)if(i<=r[n])return this._castValueResult(r[n],t,0);
return this.next?this.next.castValue(t,e):this._castValueResult(r[o-1],t,1)}for(n=o;n--;)if(r[n]<=i)return this._castValueResult(r[n],t,0);
return this.prev?this.prev.castValue(t,e):this._castValueResult(r[0],t,-1)},u.prototype._castValueResult=function(t,e,r){
return{comp:this,mult:t,value:this.value*t,source:e,overflow:r}},u.prototype.withPrecision=function(t){
var e=this;return this.value!==t&&(e=new u(t,null,{mult:t,format:this.format})),e;
},u.prototype.ticks=function(t,r,n,i){var o=[],a=new Date(t);if(this.floor(a,i),n>1&&this.floorMultiple(a,n,i),
e.get(i,"roundInside",1)){t!==+a&&this.increment(a,n);do o.push(new Date(a)),this.increment(a,n);while(r>=a);
}else{o.push(new Date(a));do this.increment(a,n),o.push(new Date(a));while(r>a)}return o;
},e.parseDatePrecision=p;var x=[];d(1,{format:"%S.%Qs",multiples:[1,5,25,50,100,250],
thresholds:[10,50,100,200,1e3,1/0],closeds:[1,1,1,1,1,1]}),d(1e3,{get:function(t){
return t.getSeconds()},set:function(t,e){t.setSeconds(e)},format:"%I:%M:%S",multiples:[1,5,10,15],
thresholds:[10,60,90,1/0],closeds:[1,1,1,1]}),d(6e4,{get:function(t){return t.getMinutes();
},set:function(t,e){t.setMinutes(e)},format:"%I:%M %p",multiples:[1,5,10,15],thresholds:[10,15,30,1/0],
closeds:[1,1,1,1]}),d(36e5,{get:function(t){return t.getHours()},set:function(t,e){
t.setHours(e)},format:"%I:%M %p",multiples:[1,3,6],thresholds:[10,20,1/0],closeds:[1,1,1]
}),d(864e5,{get:function(t){return t.getDate()},set:function(t,e){t.setDate(e)},format:"%m/%d",
first:1,multiples:[1,2,3,5],thresholds:[10,15,30,1/0],closeds:[1,0,0,1]}),d(6048e5,{
get:function(t){return t.getDate()},set:function(t,e){t.setDate(e)},mult:7,floor:function(t,r){
var n=t.getDay()-e.get(r,"weekStart",0);0!==n&&(0>n&&(n+=7),this.set(t,this.get(t)-n));
},first:function(t,r){return this.get(c(t,e.get(r,"weekStart",0)))},format:"%m/%d",
multiples:[1,2,3],thresholds:[10,15,1/0],closeds:[1,1,1]}),d(2592e6,{get:function(t){
return t.getMonth()},set:function(t,e){t.setMonth(e)},format:"%m/%Y",multiples:[1,2,3],
thresholds:[12,24,1/0],closeds:[1,1,1]}),d(31536e6,{get:function(t){return t.getFullYear();
},set:function(t,e){t.setFullYear(e)},format:"%Y",multiple:function(t){if(10>=t)return 1;
var r=e.logCeil(t/15,10);return 2>t/r?r/=5:5>t/r&&(r/=2),r},castValue:function(t,r){
var n,i,o=t/this.value;if(1>o){if(!r)return this.prev?this.prev.castValue(t,r):this._castValueResult(1,t,-1);
n=1}else n=e.logFloor(o,10);if(i=o/n,r)i>5?(n*=10,i=1):i=i>2?5:i>1?2:1;else if(i>5)i=5;else if(i>2)i=2;else if(i>1)i=1;else if(1>i)return this.prev?this.prev.castValue(t,r):this._castValueResult(n,t,-1);
return this._castValueResult(n*i,t,0)}})}(),e.Scale.linear=function(){var t=e.Scale.quantitative();
return t.domain.apply(t,arguments),t},e.Scale.log=function(){var t,r,n=e.Scale.quantitative(1,10),i=function(t){
return Math.log(t)/r},o=function(e){return Math.pow(t,e)};return n.ticks=function(){
var e=n.domain(),r=e[0]<0,a=Math.floor(r?-i(-e[0]):i(e[0])),s=Math.ceil(r?-i(-e[1]):i(e[1])),l=[];
if(r)for(l.push(-o(-a));a++<s;)for(var u=t-1;u>0;u--)l.push(-o(-a)*u);else{for(;s>a;a++)for(var u=1;t>u;u++)l.push(o(a)*u);
l.push(o(a))}for(a=0;l[a]<e[0];a++);for(s=l.length;l[s-1]>e[1];s--);return l.slice(a,s);
},n.tickFormat=function(t){return t.toPrecision(1)},n.nice=function(){var r=n.domain();
return n.domain(e.logFloor(r[0],t),e.logCeil(r[1],t))},n.base=function(e){return arguments.length?(t=Number(e),
r=Math.log(t),n.transform(i,o),this):t},n.domain.apply(n,arguments),n.base(10)},e.Scale.root=function(){
var t=e.Scale.quantitative();return t.power=function(e){if(arguments.length){var r=Number(e),n=1/r;
return t.transform(function(t){return Math.pow(t,n)},function(t){return Math.pow(t,r);
}),this}return r},t.domain.apply(t,arguments),t.power(2)},e.Scale.ordinal=function(){
function t(t){return t in n||(n[t]=r.push(t)-1),i[n[t]%i.length]}var r=[],n={},i=[];
return t.domain=function(t,i){if(arguments.length){t=t instanceof Array?arguments.length>1?e.map(t,i):t:Array.prototype.slice.call(arguments),
r=[];for(var o={},a=0;a<t.length;a++){var s=t[a];s in o||(o[s]=!0,r.push(s))}return n=e.numerate(r),
this}return r},t.range=function(t,r){return arguments.length?(i=t instanceof Array?arguments.length>1?e.map(t,r):t:Array.prototype.slice.call(arguments),
"string"==typeof i[0]&&(i=i.map(e.fillStyle)),i.min=i[0],i.max=i[i.length-1],this):i;
},t.split=function(t,r){var n=r-t,o=this.domain().length,a=0;return 0===n?i=e.array(o,t):o&&(a=(r-t)/o,
i=e.range(t+a/2,r,a)),i.min=t,i.max=r,i.step=a,this},t.splitBandedCenter=function(t,e,r){
return null==r&&(r=1),this._splitBandedCore(t,e,function(t){var e=t.range/t.count;
t.step=e,t.band=e*r,t.offset=e/2})},t.splitBandedCenterAbs=function(t,e,r,n){return this._splitBandedCore(t,e,function(t){
var e;null==r||null==n?(e=t.range/t.count,null==r?null==n?(r=e,n=0):(n=Math.min(n,e),
r=e-n):(r=Math.min(r,e),n=e-r)):e=r+n,t.step=e,t.band=r,t.offset=e/2})},t._splitBandedCore=function(t,r,n){
var o,a={min:t,max:r,range:r-t,count:this.domain().length,offset:0,step:0,band:0};
return 0===a.range?(i=e.array(a.count,t),o=0):a.count&&(n(a),o=a.step-a.band,i=e.range(t+a.offset,r,a.step)),
i.offset=a.offset,i.step=a.step,i.band=a.band,i.margin=o,i.min=t,i.max=r,this},t.splitBandedFlushCenter=function(t,e,r){
return null==r&&(r=1),this._splitBandedCore(t,e,function(t){var e=t.range,n=t.count,i=e*r/n,o=n>1?(e-n*i)/(n-1):0;
t.band=i,t.step=o+i,t.offset=i/2})},t.splitFlush=function(t,r){var n=this.domain().length,o=(r-t)/(n-1);
return i=1==n?[(t+r)/2]:e.range(t,r+o/2,o),i.min=t,i.max=r,this},t.splitBanded=function(t,r,n){
if(arguments.length<3&&(n=1),0>n){var o=this.domain().length,a=-n*o,s=r-t-a,l=s/(o+1);
i=e.range(t+l,r,l-n),i.band=-n}else{var u=(r-t)/(this.domain().length+(1-n));i=e.range(t+u*(1-n),r,u),
i.band=u*n,i.step=u,i.margin=u-i.band}return i.min=t,i.max=r,this},t.invertIndex=function(t,e){
var r=this.domain().length;if(0===r)return-1;var n=this.range(),i=n.max-n.min;if(0===i)return 0;
var o=i/r;if(t>=n.max)return r;if(t<n.min)return 0;var a=(t-n.min)/o;return e?a:Math.round(a);
},e.copyOwn(t,e.Scale.common),t.domain.apply(t,arguments),t},e.Scale.quantile=function(){
function t(t){return a(Math.max(0,Math.min(n,e.search.index(i,t)-1))/n)}var r=-1,n=-1,i=[],o=[],a=e.Scale.linear();
return t.quantiles=function(t){if(arguments.length){if(r=Number(t),0>r)i=[o[0]].concat(o),
n=o.length-1;else{i=[],i[0]=o[0];for(var e=1;r>=e;e++)i[e]=o[~~(e*(o.length-1)/r)];
n=r-1}return this}return i},t.domain=function(n,i){return arguments.length?(o=n instanceof Array?e.map(n,i):Array.prototype.slice.call(arguments),
o.sort(e.naturalOrder),t.quantiles(r),this):o},t.range=function(){return arguments.length?(a.range.apply(a,arguments),
this):a.range()},e.copyOwn(t,e.Scale.common),t.domain.apply(t,arguments),t},e.histogram=function(t,r){
var n=!0;return{bins:function(i){var o=e.map(t,r),a=[];arguments.length||(i=e.Scale.linear(o).ticks());
for(var s=0;s<i.length-1;s++){var l=a[s]=[];l.x=i[s],l.dx=i[s+1]-i[s],l.y=0}for(var s=0;s<o.length;s++){
var u=e.search.index(i,o[s])-1,l=a[Math.max(0,Math.min(a.length-1,u))];l.y++,l.push(t[s]);
}if(!n)for(var s=0;s<a.length;s++)a[s].y/=o.length;return a},frequency:function(t){
return arguments.length?(n=Boolean(t),this):n}}},!function(){e.Shape=function(){};
var t={x:1,y:1};e.Shape.dist2=function(e,r,n){n=n||t;var i=e.x-r.x,o=e.y-r.y,a=i*i,s=o*o;
return{cost:a+s,dist2:n.x*a+n.y*s}};var r=Math.PI,n=2*r,i=Math.atan2;e.Shape.normalizeAngle=function(t){
return t%=n,e.floatLess(t,0)&&(t+=n),t},e.Shape.atan2Norm=function(t,r){var o=i(t,r);
return e.floatLess(o,0)&&(o+=n),o},e.Shape.prototype.hasArea=function(){return!0},
e.Shape.prototype.bbox=function(){return this._bbox||(this._bbox=this._calcBBox());
},e.Shape.prototype._calcBBox=function(){var t,r,n,i;return this.points().forEach(function(e){
var o=e.x,a=e.y;null==t?(t=n=o,r=i=a):(t>o?t=o:o>n&&(n=o),r>a?r=a:a>i&&(i=a))}),null!=t?new e.Shape.Rect(t,r,n-t,i-r):void 0;
},e.Shape.prototype.containsPoint=function(t,r){if(r){var n;if(!r.y)return n=this.bbox(),
e.floatBelongsClosed(n.x,t.x,n.x2);if(!r.x)return n=this.bbox(),e.floatBelongsClosed(n.y,t.y,n.y2);
}return this._containsPointCore(t)},e.Shape.prototype._containsPointCore=function(){
return!1}}(),!function(){var t=e.Shape.dist2,r=Math.cos,n=Math.sin,i=Math.sqrt;e.vector=function(t,e){
return new o(t,e)},e.Vector=function(t,e){this.x=t,this.y=e};var o=e.Shape.Point=e.Vector;
e.Vector.prototype=e.extend(e.Shape),e.Vector.prototype.perp=function(){return new o(-this.y,this.x);
},e.Vector.prototype.rotate=function(t){var e=r(t),i=n(t);return new o(e*this.x-i*this.y,i*this.x+e*this.y);
},e.Vector.prototype.norm=function(){var t=this.length();return this.times(t?1/t:1);
},e.Vector.prototype.length=function(){return i(this.x*this.x+this.y*this.y)},e.Vector.prototype.times=function(t){
return new o(this.x*t,this.y*t)},e.Vector.prototype.plus=function(t,e){return 1===arguments.length?new o(this.x+t.x,this.y+t.y):new o(this.x+t,this.y+e);
},e.Vector.prototype.minus=function(t,e){return 1===arguments.length?new o(this.x-t.x,this.y-t.y):new o(this.x-t,this.y-e);
},e.Vector.prototype.dot=function(t,e){return 1==arguments.length?this.x*t.x+this.y*t.y:this.x*t+this.y*e;
},e.Vector.prototype.hasArea=function(){return!1},e.Vector.prototype.clone=function(){
return new o(this.x,this.y)},e.Vector.prototype.apply=function(t){return new o(t.x+t.k*this.x,t.y+t.k*this.y);
},e.Vector.prototype.intersectsRect=function(t){return e.floatBelongsClosed(t.x,this.x,t.x2)&&e.floatBelongsClosed(t.y,this.y,t.y2);
},e.Vector.prototype._containsPointCore=function(t){return this.x===t.x&&this.y===t.y;
},e.Vector.prototype.points=function(){return[this]},e.Vector.prototype.edges=function(){
return[]},e.Vector.prototype.center=function(){return this},e.Vector.prototype.distance2=function(e,r){
return t(this,e,r)}}(),!function(){var t=e.Shape.Point,r=e.Shape.dist2;e.Shape.Line=function(t,e,r,n){
this.x=t||0,this.y=e||0,this.x2=r||0,this.y2=n||0};var n=e.Shape.Line;n.prototype=e.extend(e.Shape),
n.prototype.hasArea=function(){return!1},n.prototype.clone=function(){return new n(this.x,this.y,this.x2,this.x2);
},n.prototype.apply=function(t){var e=t.x+t.k*this.x,r=t.y+t.k*this.y,i=t.x+t.k*this.x2,o=t.y+t.k*this.y2;
return new n(e,r,i,o)},n.prototype.points=function(){return[new t(this.x,this.y),new t(this.x2,this.y2)];
},n.prototype.edges=function(){return[this]},n.prototype.center=function(){return new t((this.x+this.x2)/2,(this.y+this.y2)/2);
},n.prototype.normal=function(t,e){var r=this.points(),n=r[1].minus(r[0]).perp().norm();
if(e){var i=r[0].minus(e);i.dot(n)<0&&(n=n.times(-1))}return n},n.prototype.intersectsRect=function(t){
var e,r,n=this.points();for(r=n.length,e=0;r>e;e++)if(n[e].intersectsRect(t))return!0;
var i=t.edges();for(r=i.length,e=0;r>e;e++)if(this.intersectsLine(i[e]))return!0;return!1;
},n.prototype._containsPointCore=function(t){var r=this.x,n=this.x2,i=this.y,o=this.y2;
return e.floatBelongsClosed(r,t.x,n)&&(e.floatEqual(r,n)?e.floatBelongsClosed(Math.min(i,o),t.y,Math.max(i,o)):e.floatZero((o-i)/(n-r)*(t.x-r)+i-t.y));
},n.prototype.intersectsLine=function(t){var r=this,n=r.x2-r.x,i=r.y2-r.y,o=t.x2-t.x,a=t.y2-t.y,s=a*n-o*i;
if(e.floatZero(s))return!1;var l=r.y-t.y,u=r.x-t.x,h=o*l-a*u,c=n*l-i*u;if(e.floatZero(s))return e.floatZero(h)&&e.floatZero(c);
var p=h/s;if(!e.floatBelongsClosed(0,p,1))return!1;var f=c/s;return e.floatBelongsClosed(0,f,1)?!0:!1;
},n.prototype.distance2=function(t,n){var i=this,o={x:this.x2,y:this.y2},a=r(i,o).cost;
if(e.floatZero(a))return r(t,i,n);var s=o.x-i.x,l=o.y-i.y,u=((t.x-i.x)*s+(t.y-i.y)*l)/a;
if(e.floatLess(u,0))return r(t,i,n);if(e.floatGreater(u,1))return r(t,o,n);var h={
x:i.x+u*s,y:i.y+u*l};return r(t,h,n)}}(),!function(){var t=e.Shape.Point,r=e.Shape.Line;
e.Shape.Polygon=function(t){this._points=t||[]};var n=e.Shape.Polygon;n.prototype=e.extend(e.Shape),
n.prototype.points=function(){return this._points},n.prototype.clone=function(){return new n(this.points().slice());
},n.prototype.apply=function(t){for(var e=this.points(),r=e.length,i=new Array(r),o=0;r>o;o++)i[o]=e[o].apply(t);
return new n(i)},n.prototype.intersectsRect=function(t){var e,r,n=this.points();for(r=n.length,
e=0;r>e;e++)if(n[e].intersectsRect(t))return!0;var i=this.edges();for(r=i.length,
e=0;r>e;e++)if(i[e].intersectsRect(t))return!0;return!1},n.prototype.edges=function(){
var t=this._edges;if(!t){t=this._edges=[];var e=this.points(),n=e.length;if(n){for(var i,o=e[0],a=o,s=1;n>s;s++)i=e[s],
t.push(new r(o.x,o.y,i.x,i.y)),o=i;n>2&&t.push(new r(i.x,i.y,a.x,a.y))}}return t},
n.prototype.distance2=function(t,r){var n={cost:1/0,dist2:1/0};return this.edges().forEach(function(i){
var o=i.distance2(t,r);e.floatLess(o.cost,n.cost)&&(n=o)},this),n},n.prototype.center=function(){
for(var e=this.points(),r=0,n=0,i=0,o=e.length;o>i;i++){var a=e[i];r+=a.x,n+=a.y}
return new t(r/o,n/o)},n.prototype._containsPointCore=function(t){var e=this.bbox();
if(!e._containsPointCore(t))return!1;var n=.01*e.dx,i=new r(e.x-n,t.y,t.x,t.y),o=0,a=this.edges();
return a.forEach(function(t){t.intersectsLine(i)&&o++}),1===(1&o)}}(),!function(){
var t=e.Shape.Point,r=e.Shape.Line;e.Shape.Rect=function(t,e,r,n){this.x=t||0,this.y=e||0,
this.dx=r||0,this.dy=n||0,this.dx<0&&(this.dx=Math.max(0,-this.dx),this.x=this.x-this.dx),
this.dy<0&&(this.dy=Math.max(0,-this.dy),this.y=this.y-this.dy),this.x2=this.x+this.dx,
this.y2=this.y+this.dy};var n=e.Shape.Rect;n.prototype=e.extend(e.Shape.Polygon),
n.prototype.clone=function(){var t=Object.create(n.prototype);return t.x=this.x,t.y=this.y,
t.dx=this.dx,t.dy=this.dy,t.x2=this.x2,t.y2=this.y2,t},n.prototype.apply=function(t){
var e=t.x+t.k*this.x,r=t.y+t.k*this.y,i=t.k*this.dx,o=t.k*this.dy;return new n(e,r,i,o);
},n.prototype._containsPointCore=function(t){return e.floatBelongsClosed(this.x,t.x,this.x2)&&e.floatBelongsClosed(this.y,t.y,this.y2);
},n.prototype.intersectsRect=function(t){return e.floatGreater(this.x2,t.x)&&e.floatLess(this.x,t.x2)&&e.floatGreater(this.y2,t.y)&&e.floatLess(this.y,t.y2);
},n.prototype.edges=function(){if(!this._edges){var t=this.x,e=this.y,n=this.x2,i=this.y2;
this._edges=[new r(t,e,n,e),new r(n,e,n,i),new r(n,i,t,i),new r(t,i,t,e)]}return this._edges;
},n.prototype.center=function(){return new t(this.x+this.dx/2,this.y+this.dy/2)},
n.prototype.points=function(){var e=this._points;if(!e){var r=this.x,n=this.y,i=this.x2,o=this.y2;
e=this._points=[new t(r,n),new t(i,n),new t(i,o),new t(r,o)]}return e},n.prototype._calcBBox=function(){
return this}}(),!function(){var t=e.Shape.Point,r=e.Shape.dist2,n=Math.sqrt,i=Math.abs,o=Math.pow;
e.Shape.Circle=function(t,e,r){this.x=t||0,this.y=e||0,this.radius=r||0};var a=e.Shape.Circle;
a.prototype=e.extend(e.Shape),a.prototype.clone=function(){return new a(this.x,this.y,this.radius);
},a.prototype.apply=function(t){var e=t.x+t.k*this.x,r=t.y+t.k*this.y,n=t.k*this.radius;
return new a(e,r,n)},a.prototype.intersectsRect=function(t){var e=t.dx/2,r=t.dy/2,n=this.radius,a=i(this.x-t.x-e),s=i(this.y-t.y-r);
if(a>e+n||s>r+n)return!1;if(e>=a||r>=s)return!0;var l=o(a-e,2)+o(s-r,2);return n*n>=l;
},a.prototype.intersectLine=function(e,r){var i=e.x2-e.x,o=e.y2-e.y,a=this.x-e.x,s=this.y-e.y,l=i*i+o*o,u=i*a+o*s,h=this.radius,c=a*a+s*s-h*h,p=u/l,f=p*p-c/l;
if(!(0>f)){var d=n(f),y=p-d,g=p+d,m=[];return(r||y>=0&&1>=y)&&m.push(new t(e.x+i*y,e.y+o*y)),
0!==f&&(r||g>=0&&1>=g)&&m.push(new t(e.x+i*g,e.y+o*g)),m}},a.prototype.points=function(){
return[this.center()]},a.prototype.center=function(){return new t(this.x,this.y)},
a.prototype.normal=function(t){return t.minus(this.x,this.y).norm()},a.prototype._containsPointCore=function(t){
var e=t.x-this.x,r=t.y-this.y,n=this.radius;return n*n>=e*e+r*r},a.prototype.distance2=function(t,e){
var n=this.radius,i=t.minus(this).norm().times(n).plus(this),o=r(t,i,e);return o},
a.prototype._calcBBox=function(){var t=this.radius,r=2*t;return new e.Shape.Rect(this.x-t,this.y-t,r,r);
}}(),!function(){var t=e.Shape.Point,r=e.Shape.dist2,n=e.Shape.normalizeAngle,i=e.Shape.atan2Norm,o=Math.cos,a=Math.sin,s=Math.sqrt,l=Math.PI,u=2*l,h=l/2,c=3*l/2;
e.Shape.Arc=function(t,r,i,o,a){this.x=t,this.y=r,this.radius=i,e.floatBelongsClosed(0,a,u)||(a=n(a)),
this.startAngle=n(o),this.angleSpan=a,this.endAngle=this.startAngle+this.angleSpan;
};var p=e.Shape.Arc;p.prototype=e.extend(e.Shape),p.prototype.hasArea=function(){
return!1},p.prototype.clone=function(){var t=Object.create(p.prototype),e=this;return t.x=e.x,
t.y=e.y,t.radius=e.radius,t.startAngle=e.startAngle,t.angleSpan=e.angleSpan,t.endAngle=e.endAngle,
t},p.prototype.apply=function(t){var e=t.x+t.k*this.x,r=t.y+t.k*this.y,n=t.k*this.radius;
return new p(e,r,n,this.startAngle,this.angleSpan)},p.prototype.containsAngle=function(t,r){
e.floatBelongsClosed(0,t,u)||(t=n(t));var i=this.startAngle,o=this.endAngle;return(r?e.floatBelongsOpen(i,t,o):e.floatBelongsClosed(i,t,o))?!0:e.floatLessOrEqual(o,u)?!1:(t+=u,
r?e.floatBelongsOpen(i,t,o):e.floatBelongsClosed(i,t,o))},p.prototype._containsPointCore=function(t){
var r=t.x-this.x,n=t.y-this.y,o=s(r*r+n*n);return e.floatEqual(o,this.radius)&&this.containsAngle(i(n,r));
},p.prototype.intersectsRect=function(t){var e,r=this.points(),n=r.length;for(e=0;n>e;e++)if(r[e].intersectsRect(t))return!0;
var i=t.edges();for(n=i.length,e=0;n>e;e++)if(this.intersectLine(i[e]))return!0;return!1;
};var f=e.Shape.Circle.prototype.intersectLine;p.prototype.intersectLine=function(t,e){
var r=f.call(this,t,e);return r&&(r=r.filter(function(t){return this._containsPointCore(t);
},this),r.length)?r:void 0},p.prototype.points=function(){function e(e){r.containsAngle(e,!0)&&f.push(new t(n+s*o(e),i+s*a(e)));
}var r=this,n=r.x,i=r.y,s=r.radius,u=r.startAngle,p=r.endAngle,f=[new t(n+s*o(u),i+s*a(u)),new t(n+s*o(p),i+s*a(p))];
return e(0),e(h),e(l),e(c),f},p.prototype.center=function(){var e=this.x,r=this.y,n=this.radius,i=(this.startAngle+this.endAngle)/2;
return new t(e+n*o(i),r+n*a(i))},p.prototype.normal=function(t,e){var r=t.minus(this.x,this.y).norm();
if(e){var n=this.center().minus(e);n.dot(r)<0&&(r=r.times(-1))}return r},p.prototype.distance2=function(n,s){
var l=n.x-this.x,u=n.y-this.y,h=i(u,l);if(this.containsAngle(h)){var c=new t(this.x+this.radius*o(h),this.y+this.radius*a(h));
return r(n,c,s)}var p=this.points(),f=r(n,p[0],s),d=r(n,p[1],s);return e.floatLess(f.cost,d.cost)?f:d;
}}(),!function(){var t=e.Shape.Arc,r=e.Shape.Line,n=e.Shape.Point,i=Math.cos,o=Math.sin,a=Math.sqrt,s=Math.PI,l=2*s,u=s/2,h=3*s/2,c=e.Shape.atan2Norm,p=e.Shape.normalizeAngle;
e.Shape.Wedge=function(t,r,n,i,o,a){this.x=t,this.y=r,this.innerRadius=n,this.outerRadius=i,
e.floatBelongsClosed(0,a,l)||(a=p(a)),this.startAngle=p(o),this.angleSpan=a,this.endAngle=this.startAngle+a;
};var f=e.Shape.Wedge;f.prototype=e.extend(e.Shape),f.prototype.clone=function(){
return new f(this.x,this.y,this.innerRadius,this.outerRadius,this.startAngle,this.angleSpan);
},f.prototype.apply=function(t){var e=t.x+t.k*this.x,r=t.y+t.k*this.y,n=t.k*this.innerRadius,i=t.k*this.outerRadius;
return new f(e,r,n,i,this.startAngle,this.angleSpan)},f.prototype.containsAngle=t.prototype.containsAngle,
f.prototype._containsPointCore=function(t){var r=t.x-this.x,n=t.y-this.y,i=a(r*r+n*n);
return e.floatBelongsClosed(this.innerRadius,i,this.outerRadius)&&this.containsAngle(c(n,r));
},f.prototype.intersectsRect=function(t){var e,r,n,i;for(n=this.points(),r=n.length,
e=0;r>e;e++)if(n[e].intersectsRect(t))return!0;for(n=t.points(),r=n.length,e=0;r>e;e++)if(this._containsPointCore(n[e]))return!0;
for(i=this.edges(),r=i.length,e=0;r>e;e++)if(i[e].intersectsRect(t))return!0;return!1;
},f.prototype.points=function(){return this._points||this.edges(),this._points},f.prototype.edges=function(){
function a(t){l.containsAngle(t,!0)&&A.push(new n(d+v*i(t),y+v*o(t)))}var l=this,c=l._edges;
if(!c){var p,f,d=l.x,y=l.y,g=l.innerRadius,m=e.floatGreater(g,0),v=l.outerRadius,x=l.startAngle,b=l.endAngle,k=l.angleSpan,S=i(x),M=o(x),w=i(b),C=o(b);
m?(p=new n(d+g*S,y+g*M),f=new n(d+g*w,y+g*C)):p=f=new n(d,y);var L=new n(d+v*S,y+v*M),N=new n(d+v*w,y+v*C);
c=l._edges=[],m&&c.push(new t(d,y,g,x,k)),c.push(new r(p.x,p.y,L.x,L.y),new t(d,y,v,x,k),new r(f.x,f.y,N.x,N.y));
var A=l._points=[p,L,N];m&&A.push(f),a(0),a(u),a(s),a(h)}return c},f.prototype.distance2=function(t,r){
var n={cost:1/0,dist2:1/0};return this.edges().forEach(function(i){var o=i.distance2(t,r);
e.floatLess(o.cost,n.cost)&&(n=o)}),n},f.prototype.center=function(){var t=(this.startAngle+this.endAngle)/2,e=(this.innerRadius+this.outerRadius)/2;
return new n(this.x+e*i(t),this.y+e*o(t))}}(),!function(){var t=Math.round,r=function(e){
var r=parseFloat(e);return"%"==e[e.length-1]?t(2.55*r):r},n=/([a-z]+)\((.*)\)/i,i=function(t){
if("#"===t.charAt(0)){var i,o,a;return 4===t.length?(i=t.charAt(1),i+=i,o=t.charAt(2),
o+=o,a=t.charAt(3),a+=a):7===t.length&&(i=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7)),
e.rgb(parseInt(i,16),parseInt(o,16),parseInt(a,16),1)}var s=n.exec(t);if(s){var l=s[2].split(","),u=1;
switch(s[1]){case"hsla":case"rgba":if(u=parseFloat(l[3]),!u)return e.Color.transparent;
}switch(s[1]){case"hsla":case"hsl":var h=parseFloat(l[0]),c=parseFloat(l[1])/100,p=parseFloat(l[2])/100;
return new e.Color.Hsl(h,c,p,u).rgb();case"rgba":case"rgb":var i=r(l[0]),o=r(l[1]),a=r(l[2]);
return e.rgb(i,o,a,u)}}return new e.Color(t,1)},o={};e.color=function(t){if(t.rgb)return t.rgb();
var r=e.Color.names[t];return r||(r=o[t]||(o[t]=i(t))),r}}(),e.Color=function(t,e){
this.color=t,this.opacity=e,this.key="solid "+t+" alpha("+e+")"},e.Color.prototype.hsl=function(){
return this.rgb().hsl()},e.Color.prototype.brighter=function(t){return this.rgb().brighter(t);
},e.Color.prototype.darker=function(t){return this.rgb().darker(t)},e.Color.prototype.relativeLuminance=function(e){
var r=this.alphaBlend(e);return.2126*t(r.r)+.7152*t(r.g)+.0722*t(r.b)},e.Color.prototype.alphaBlend=function(t){
var r=this.rgb(),n=r.a;if(1===n)return this;t=t?e.color(t).alphaBlend():e.Color.names.white,
t=t.rgb();var i=1-n;return e.rgb(n*r.r+i*t.r,n*r.g+i*t.g,n*r.b+i*t.b,1)},e.Color.prototype.rgbDecimal=function(t){
var e=this.alphaBlend(t);return e.r<<16|e.g<<8|e.b},e.Color.prototype.isDark=function(){
return this.rgbDecimal()<8388607.5},e.Color.prototype.contrastRatioTo=function(t){
var e=t.alphaBlend(),r=this.alphaBlend(e),n=e.relativeLuminance(),i=r.relativeLuminance();
return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)},e.rgb=function(t,r,n,i){return new e.Color.Rgb(t,r,n,4==arguments.length?i:1);
},e.Color.Rgb=function(t,r,n,i){e.Color.call(this,i?"rgb("+t+","+r+","+n+")":"none",i),
this.r=t,this.g=r,this.b=n,this.a=i},e.Color.Rgb.prototype=e.extend(e.Color),e.Color.Rgb.prototype.red=function(t){
return e.rgb(t,this.g,this.b,this.a)},e.Color.Rgb.prototype.green=function(t){return e.rgb(this.r,t,this.b,this.a);
},e.Color.Rgb.prototype.blue=function(t){return e.rgb(this.r,this.g,t,this.a)},e.Color.Rgb.prototype.alpha=function(t){
return e.rgb(this.r,this.g,this.b,t)},e.Color.Rgb.prototype.rgb=function(){return this;
},e.Color.Rgb.prototype.brighter=function(t){t=Math.pow(.7,null!=t?t:1);var r=this.r,n=this.g,i=this.b,o=30;
return r||n||i?(r&&o>r&&(r=o),n&&o>n&&(n=o),i&&o>i&&(i=o),e.rgb(Math.min(255,Math.floor(r/t)),Math.min(255,Math.floor(n/t)),Math.min(255,Math.floor(i/t)),this.a)):e.rgb(o,o,o,this.a);
},e.Color.Rgb.prototype.darker=function(t){return t=Math.pow(.7,null!=t?t:1),e.rgb(Math.max(0,Math.floor(t*this.r)),Math.max(0,Math.floor(t*this.g)),Math.max(0,Math.floor(t*this.b)),this.a);
},e.Color.Rgb.prototype.hsl=function(){var t,r,n=this.r/255,i=this.g/255,o=this.b/255,a=Math.max(n,i,o),s=Math.min(n,i,o),l=(a+s)/2;
if(a===s)t=r=0;else{var u=a-s;switch(r=l>.5?u/(2-a-s):u/(a+s),a){case n:t=(i-o)/u+(o>i?6:0);
break;case i:t=(o-n)/u+2;break;case o:t=(n-i)/u+4}t/=6}return e.hsl(360*t,r,l,this.a);
},e.Color.Rgb.prototype.complementary=function(){return this.hsl().complementary().rgb();
},e.hsl=function(t,r,n,i){return new e.Color.Hsl(t,r,n,4==arguments.length?i:1)},
e.Color.Hsl=function(t,r,n,i){e.Color.call(this,"hsl("+t+","+100*r+"%,"+100*n+"%)",i),
this.h=t,this.s=r,this.l=n,this.a=i},e.Color.Hsl.prototype=e.extend(e.Color),e.Color.Hsl.prototype.hsl=function(){
return this},e.Color.Hsl.prototype.hue=function(t){return e.hsl(t,this.s,this.l,this.a);
},e.Color.Hsl.prototype.saturation=function(t){return e.hsl(this.h,t,this.l,this.a);
},e.Color.Hsl.prototype.lightness=function(t){return e.hsl(this.h,this.s,t,this.a);
},e.Color.Hsl.prototype.alpha=function(t){return e.hsl(this.h,this.s,this.l,t)},e.Color.Hsl.prototype.complementary=function(){
return e.hsl((this.h+180)%360,1-this.s,1-this.l,this.a)},e.Color.Hsl.prototype.rgb=function(){
function t(t){return t>360?t-=360:0>t&&(t+=360),60>t?s+(a-s)*t/60:180>t?a:240>t?s+(a-s)*(240-t)/60:s;
}function r(e){return Math.round(255*t(e))}var n=this.h,i=this.s,o=this.l;n%=360,
0>n&&(n+=360),i=Math.max(0,Math.min(i,1)),o=Math.max(0,Math.min(o,1));var a=.5>=o?o*(1+i):o+i-o*i,s=2*o-a;
return e.rgb(r(n+120),r(n),r(n-120),this.a)},e.Color.names={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",
black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",
burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",
coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",
darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",
darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",
darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",
darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",
deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",
floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",
greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",
indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",
lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",
lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",
lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",
lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",
lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",
maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",
mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",
mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",
mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",
olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",
papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",
powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",
saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",
sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",
slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",
teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",
wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",
transparent:e.Color.transparent=e.rgb(0,0,0,0)},!function(){var t=e.Color.names;t.none=t.transparent;
for(var r in t)t[r]=e.color(t[r])}(),e.colors=function(){var t=e.Scale.ordinal();return t.range.apply(t,arguments),
t},e.Colors={},e.Colors.category10=function(){var t=e.colors("#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf");
return t.domain.apply(t,arguments),t},e.Colors.category20=function(){var t=e.colors("#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5");
return t.domain.apply(t,arguments),t},e.Colors.category19=function(){var t=e.colors("#9c9ede","#7375b5","#4a5584","#cedb9c","#b5cf6b","#8ca252","#637939","#e7cb94","#e7ba52","#bd9e39","#8c6d31","#e7969c","#d6616b","#ad494a","#843c39","#de9ed6","#ce6dbd","#a55194","#7b4173");
return t.domain.apply(t,arguments),t},!function(){function t(t){var r=n(t);if(!r.length)return null;
var o,a,l,u=Math.PI,h=r[0];0===h.indexOf("to ")?(a=/^to\s+(?:((top|bottom)(?:\s+(left|right))?)|((left|right)(?:\\s+(top|bottom))?))$/.exec(h),
a&&(a[1]?(o=a[2],a[3]&&(o+=" "+a[3])):(o=a[5],a[6]&&(o=a[6]+" "+o)),u=e.radians(s[o]),
r.shift())):(l=parseFloat(h),isNaN(l)||(u=l,/^.*?deg$/.test(h)&&(u=e.radians(u)),
r.shift()));var c=i(r);switch(c.length){case 0:return null;case 1:return new e.FillStyle.Solid(c[0].color,1);
}return new e.FillStyle.LinearGradient(u,c,t)}function r(t){var r=n(t);if(!r.length)return null;
var o=i(r);switch(o.length){case 0:return null;case 1:return new e.FillStyle.Solid(o[0].color,1);
}return new e.FillStyle.RadialGradient(50,50,o,t)}function n(t){var e={},r=0;t=t.replace(/\b\w+?\(.*?\)/g,function(t){
var n="__color"+r++;return e[n]=t,n});var n=t.split(/\s*,\s*/);return n.length?(r&&n.forEach(function(t,r){
e.hasOwnProperty(t)&&(n[r]=e[t])}),n):null}function i(t){function r(t){var e=a.length;
if(e){for(var r=o,n=(t-r)/(e+1),i=0;e>i;i++)r+=n,a[i].offset=r;a.length=0}}for(var n=[],i=1/0,o=-1/0,a=[],s=0,l=t.length;l>s;){
var u=t[s++],h=/^(.+?)\s*([+\-]?[e\.\d]+%)?$/i.exec(u);if(h){var c={color:e.color(h[1])
},p=parseFloat(h[2]);isNaN(p)&&(n.length?s===l&&(p=Math.max(o,100)):p=0),n.push(c),
isNaN(p)?a.push(c):(c.offset=p,r(p),p>o?o=p:o>p&&(p=o),i>p&&(i=p))}}if(n.length>=2&&(0>i||o>100)){
var f=[],d=[];n.forEach(function(t){f.push(t.offset),d.push(t.color)});var y=e.scale.linear().domain(f).range(d);
if(0>i){for(;n.length&&n[0].offset<=0;)n.shift();n.unshift({offset:0,color:y(0)});
}if(o>100){for(;n.length&&n[n.length-1].offset>=100;)n.pop();n.push({offset:100,color:y(100)
})}}return n}e.fillStyle=function(t){if(t.type)return t;var e=t.key||t,r=o[e];return r=r?r.clone():o[e]=a(t);
};var o={},a=function(n){if(n.rgb)return new e.FillStyle.Solid(n.color,n.opacity);
var i=/^\s*([a-z\-]+)\(\s*(.*?)\s*\)\s*$/.exec(n);if(i)switch(i[1]){case"linear-gradient":
return t(i[2]);case"radial-gradient":return r(i[2])}return new e.FillStyle.Solid(e.color(n));
},s={top:0,"top right":45,right:90,"bottom right":135,bottom:180,"bottom left":225,
left:270,"top left":315},l=e.FillStyle=function(t){this.type=t,this.key=t};e.extendType(l,new e.Color("none",1)),
l.prototype.rgb=function(){var t=e.color(this.color);return this.opacity!==t.opacity&&(t=t.alpha(this.opacity)),
t},l.prototype.alphaBlend=function(t){return this.rgb().alphaBlend(t)},l.prototype.rgbDecimal=function(t){
return this.rgb().rgbDecimal(t)},l.prototype.isDark=function(){return this.rgb().isDark();
};var u=e.FillStyle.Solid=function(t,e){l.call(this,"solid"),t.rgb?(this.color=t.color,
this.opacity=t.opacity):(this.color=t,this.opacity=e),this.key+=" "+this.color+" alpha("+this.opacity+")";
};e.extendType(u,l),u.prototype.alpha=function(t){return new u(this.color,t)},u.prototype.brighter=function(t){
return new u(this.rgb().brighter(t))},u.prototype.darker=function(t){return new u(this.rgb().darker(t));
},u.prototype.complementary=function(){return new u(this.rgb().complementary())},
u.prototype.clone=function(){var t=e.extend(u);return t.type=this.type,t.key=this.key,
t.color=this.color,t.opacity=this.opacity,t},e.FillStyle.transparent=new u(e.Color.transparent);
var h=0,c=e.FillStyle.Gradient=function(t,e){l.call(this,t),this.id=++h,this.stops=e,
e.length&&(this.color=e[0].color.color),this.key+=" stops("+e.map(function(t){var e=t.color;
return e.color+" alpha("+e.opacity+") at("+t.offset+")"}).join(", ")+")"};e.extendType(c,l),
c.prototype.rgb=function(){return this.stops.length?this.stops[0].color:void 0},c.prototype.alpha=function(t){
return this._cloneWithStops(this.stops.map(function(e){return{offset:e.offset,color:e.color.alpha(t)
}}))},c.prototype.darker=function(t){return this._cloneWithStops(this.stops.map(function(e){
return{offset:e.offset,color:e.color.darker(t)}}))},c.prototype.brighter=function(t){
return this._cloneWithStops(this.stops.map(function(e){return{offset:e.offset,color:e.color.brighter(t)
}}))},c.prototype.complementary=function(){return this._cloneWithStops(this.stops.map(function(t){
return{offset:t.offset,color:t.color.complementary()}}))},c.prototype.alphaBlend=function(t){
return this._cloneWithStops(this.stops.map(function(e){return{offset:e.offset,color:e.color.alphaBlend(t)
}}))},c.prototype.clone=function(){var t=this.constructor,r=e.extend(t);r.constructor=t,
r.id=++h,r.type=this.type,r.key=this.key;var n=this.stops;return r.stops=n,n.length&&(r.color=n[0].color.color),
this._initClone(r),r};var p=e.FillStyle.LinearGradient=function(t,e){c.call(this,"lineargradient",e),
this.angle=t,this.key+=" angle("+t+")"};e.extendType(p,c),p.prototype._cloneWithStops=function(t){
return new p(this.angle,t)},p.prototype._initClone=function(t){t.angle=this.angle;
};var f=e.FillStyle.RadialGradient=function(t,e,r){c.call(this,"radialgradient",r),
this.cx=t,this.cy=e,this.key+=" center("+t+","+e+")"};e.extendType(f,c),f.prototype._cloneWithStops=function(t){
return new f(this.cx,this.cy,t)},f.prototype._initClone=function(t){t.cx=this.cx,
t.cy=this.cy}}(),e.ramp=function(){var t=e.Scale.linear();return t.range.apply(t,arguments),
t},e.Scene=e.SvgScene={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns",
xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml",scale:1,
events:["DOMMouseScroll","mousewheel","mousedown","mouseup","mouseover","mouseout","mousemove","click","dblclick","contextmenu"],
mousePositionEventSet:{mousedown:1,mouseup:1,mouseover:1,mouseout:1,mousemove:1,click:1,
dblclick:1,contextmenu:1},implicit:{svg:{"shape-rendering":"auto","pointer-events":"painted",
x:0,y:0,dy:0,"text-anchor":"start",transform:"translate(0,0)",fill:"none","fill-opacity":1,
stroke:"none","stroke-opacity":1,"stroke-width":1.5,"stroke-linejoin":"miter","stroke-linecap":"butt",
"stroke-miterlimit":8,"stroke-dasharray":"none"},css:{font:"10px sans-serif"}}},e.SvgScene.updateAll=function(t){
if(t.length&&t[0].reverse&&"line"!==t.type&&"area"!==t.type){for(var e=Object.create(t),r=0,n=t.length-1;n>=0;r++,
n--)e[r]=t[n];t=e}this.removeSiblings(this[t.type](t))},e.SvgScene.create=function(t){
return document.createElementNS(this.svg,t)},e.SvgScene.expect=function(t,e,r,n,i,o){
var a;if(t&&(a=t.tagName,"defs"===a?(t=t.nextSibling,t&&(a=t.tagName)):"a"===a&&(t=t.firstChild)),
t){if(a!==e){var s=this.create(e);t.parentNode.replaceChild(s,t),t=s}}else t=this.create(e);
return i&&this.setAttributes(t,i),o&&this.setStyle(t,o),t},e.SvgScene.setAttributes=function(t,e){
var r=this.implicit.svg,n=t.__attributes__;n===e&&(n=null);for(var i in e){var o=e[i];
n&&o===n[i]||(null==o||o==r[i]?t.removeAttribute(i):t.setAttribute(i,o))}t.__attributes__=e;
},e.SvgScene.setStyle=function(t,e){var r=this.implicit.css,n=t.__style__;n===e&&(n=null);
for(var i in e){var o=e[i];n&&o===n[i]||(null==o||o==r[i]?t.style.removeProperty(i):t.style[i]=o);
}t.__style__=e},e.SvgScene.append=function(t,e,r){return t.$scene={scenes:e,index:r
},t=this.title(t,e[r]),t.parentNode||e.$g.appendChild(t),t.nextSibling},e.SvgScene.title=function(t,e){
var r=t.parentNode;if(r&&"a"!=r.tagName&&(r=null),e.title){r||(r=this.create("a"),
r.setAttributeNS(this.xlink,"xlink:href",""),t.parentNode&&t.parentNode.replaceChild(r,t),
r.appendChild(t)),r.setAttributeNS(this.xlink,"xlink:title",e.title);for(var n=null,i=t.firstChild;null!=i;i=i.nextSibling)if("title"==i.nodeName){
n=i;break}return n?n.removeChild(n.firstChild):(n=this.create("title"),t.appendChild(n)),
n.appendChild(document.createTextNode(e.title)),r}return r&&r.parentNode.replaceChild(t,r),
t},e.SvgScene.dispatch=e.listener(function(t){var r=t.target.$scene;if(r){var n=t.type;
switch(n){case"DOMMouseScroll":n="mousewheel",t.wheel=-480*t.detail;break;case"mousewheel":
t.wheel=(window.opera?12:1)*t.wheelDelta}e.Mark.dispatch(n,r.scenes,r.index,t)&&(t.preventDefault(),
t.stopPropagation())}}),e.SvgScene.removeSiblings=function(t){for(;t;){var e=t.nextSibling;
"defs"!==t.nodeName&&t.parentNode.removeChild(t),t=e}},e.SvgScene.undefined=function(){},
!function(){var t={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",
". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"
},r={shortdash:[3,1],shortdot:[1,1],shortdashdot:[3,1,1,1],shortdashdotdot:[3,1,1,1,1,1],
dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]
};e.SvgScene.isStandardDashStyle=function(t){return r.hasOwnProperty(t)},e.SvgScene.translateDashStyleAlias=function(e){
return t.hasOwnProperty(e)?t[e]:e},e.SvgScene.parseDasharray=function(t){var e=t.strokeDasharray;
if(e&&"none"!==e){e=this.translateDashStyleAlias(e);var n=r[e];e=n?n:e.split(/[\s,]+/);
var i=t.lineWidth,o=t.lineCap||"butt",a="butt"===o;e=e.map(function(t,e){return t=+t,
a||(e%2?t++:t-=1),0>=t&&(t=.001),t*i/this.scale},this).join(" ")}else e=null;return e;
}}(),!function(){var t=/^url\(#/,r=1,n=Math.PI/2,i=n/2,o=Math.SQRT2/2,a=Math.abs,s=Math.sin,l=Math.cos,u=function(t){
return a(t)<=1e-12?0:t};e.SvgScene.addFillStyleDefinition=function(e,n){if(n.type&&"solid"!==n.type&&!t.test(n.color)){
var i=e.mark.root,o=i.__fillStyleMap__||(i.__fillStyleMap__={}),a=n.key,s=o[a];if(!s){
s=o[a]="__pvGradient"+r++;var l=h.call(this,e,n,s);i.scene.$defs.appendChild(l)}n.color="url(#"+s+")";
}};var h=function(t,e,r){var h="lineargradient"===e.type,c=this.create(h?"linearGradient":"radialGradient");
if(c.setAttribute("id",r),h){var p=e.angle-n,f=a(p%n)-i,d=a(o*l(f)),y=d*l(p),g=d*s(p);
c.setAttribute("x1",u(.5-y)),c.setAttribute("y1",u(.5-g)),c.setAttribute("x2",u(.5+y)),
c.setAttribute("y2",u(.5+g))}for(var m=e.stops,v=m.length,x=0;v>x;x++){var b=m[x],k=c.appendChild(this.create("stop")),S=b.color;
k.setAttribute("offset",b.offset+"%"),k.setAttribute("stop-color",S.color),k.setAttribute("stop-opacity",S.opacity+"");
}return c}}(),e.SvgScene.pathBasis=function(){function t(t,e,r,n,i){return{x:t[0]*e.left+t[1]*r.left+t[2]*n.left+t[3]*i.left,
y:t[0]*e.top+t[1]*r.top+t[2]*n.top+t[3]*i.top}}var e=[[1/6,2/3,1/6,0],[0,2/3,1/3,0],[0,1/3,2/3,0],[0,1/6,2/3,1/6]],r=function(r,n,i,o){
var a=t(e[1],r,n,i,o),s=t(e[2],r,n,i,o),l=t(e[3],r,n,i,o);return"C"+a.x+","+a.y+","+s.x+","+s.y+","+l.x+","+l.y;
};return r.segment=function(r,n,i,o){var a=t(e[0],r,n,i,o),s=t(e[1],r,n,i,o),l=t(e[2],r,n,i,o),u=t(e[3],r,n,i,o);
return["M"+a.x+","+a.y,"C"+s.x+","+s.y+","+l.x+","+l.y+","+u.x+","+u.y]},r}(),e.SvgScene.curveBasis=function(t,e,r){
var n;if(null==e?(n=t.length,e=0,r=n-1):n=r-e+1,2>=n)return"";var i="",o=t[e],a=o,s=o,l=t[e+1];
i+=this.pathBasis(o,a,s,l);for(var u=e+2;r>=u;u++)o=a,a=s,s=l,l=t[u],i+=this.pathBasis(o,a,s,l);
return i+=this.pathBasis(a,s,l,l),i+=this.pathBasis(s,l,l,l)},e.SvgScene.curveBasisSegments=function(t,e,r){
var n;if(null==e?(n=t.length,e=0,r=n-1):n=r-e+1,2>=n)return"";var i=[],o=t[e],a=o,s=o,l=t[e+1],u=this.pathBasis.segment(o,a,s,l);
o=a,a=s,s=l,l=t[e+2],u[1]+=this.pathBasis(o,a,s,l),i.push(u);for(var h=e+3;r>=h;h++)o=a,
a=s,s=l,l=t[h],i.push(this.pathBasis.segment(o,a,s,l));var c=this.pathBasis.segment(a,s,l,l);
return c[1]+=this.pathBasis(s,l,l,l),i.push(c),i},e.SvgScene.curveHermite=function(t,e,r,n){
var i;null==r?(i=t.length,r=0,n=i-1):i=n-r+1;var o=e.length;if(1>o||i!==o&&i!==o+2)return"";
var a=i!==o,s="",l=t[r],u=t[r+1],h=e[0],c=h,p=r+1;if(a&&(s+="Q"+(u.left-2*h.x/3)+","+(u.top-2*h.y/3)+","+u.left+","+u.top,
l=t[r+1],p=r+2),o>1){c=e[1],u=t[p],p++,s+="C"+(l.left+h.x)+","+(l.top+h.y)+","+(u.left-c.x)+","+(u.top-c.y)+","+u.left+","+u.top;
for(var f=2;o>f;f++,p++)u=t[p],c=e[f],s+="S"+(u.left-c.x)+","+(u.top-c.y)+","+u.left+","+u.top;
}if(a){var d=t[p];s+="Q"+(u.left+2*c.x/3)+","+(u.top+2*c.y/3)+","+d.left+","+d.top;
}return s},e.SvgScene.curveHermiteSegments=function(t,e,r,n){var i;null==r?(i=t.length,
r=0,n=i-1):i=n-r+1;var o=e.length;if(1>o||i!==o&&i!==o+2)return[];var a=i!==o,s=[],l=t[r],u=l,h=e[0],c=h,p=r+1;
a&&(u=t[r+1],s.push(["M"+l.left+","+l.top,"Q"+(u.left-2*c.x/3)+","+(u.top-2*c.y/3)+","+u.left+","+u.top]),
p=r+2);for(var f=1;o>f;f++,p++)l=u,h=c,u=t[p],c=e[f],s.push(["M"+l.left+","+l.top,"C"+(l.left+h.x)+","+(l.top+h.y)+","+(u.left-c.x)+","+(u.top-c.y)+","+u.left+","+u.top]);
if(a){var d=t[p];s.push(["M"+u.left+","+u.top,"Q"+(u.left+2*c.x/3)+","+(u.top+2*c.y/3)+","+d.left+","+d.top]);
}return s},e.SvgScene.cardinalTangents=function(t,e,r,n){var i;null==r?(i=t.length,
r=0,n=i-1):i=n-r+1;for(var o=[],a=(1-e)/2,s=t[r],l=t[r+1],u=t[r+2],h=r+3;n>=h;h++)o.push({
x:a*(u.left-s.left),y:a*(u.top-s.top)}),s=l,l=u,u=t[h];return o.push({x:a*(u.left-s.left),
y:a*(u.top-s.top)}),o},e.SvgScene.curveCardinal=function(t,e,r,n){var i;return null==r?(i=t.length,
r=0,n=i-1):i=n-r+1,2>=i?"":this.curveHermite(t,this.cardinalTangents(t,e,r,n),r,n);
},e.SvgScene.curveCardinalSegments=function(t,e,r,n){var i;return null==r?(i=t.length,
r=0,n=i-1):i=n-r+1,2>=i?"":this.curveHermiteSegments(t,this.cardinalTangents(t,e,r,n),r,n);
},e.SvgScene.monotoneTangents=function(t,e,r){var n;null==e?(n=t.length,e=0,r=n-1):n=r-e+1;
var i,o=[],a=[],s=[],l=[],u=0;for(u=0;n-1>u;u++){i=e+u;var h=t[i+1].left-t[i].left;
a[u]=Math.abs(h)<=1e-12?0:(t[i+1].top-t[i].top)/h}for(s[0]=a[0],l[0]=t[e+1].left-t[e].left,
u=1,i=e+u;n-1>u;u++,i++)s[u]=(a[u-1]+a[u])/2,l[u]=(t[i+1].left-t[i-1].left)/2;for(s[u]=a[u-1],
l[u]=t[i].left-t[i-1].left,u=0;n-1>u;u++)0==a[u]&&(s[u]=0,s[u+1]=0);for(u=0;n-1>u;u++)if(!(Math.abs(s[u])<1e-5||Math.abs(s[u+1])<1e-5)){
var c=s[u]/a[u],p=s[u+1]/a[u],f=c*c+p*p;if(f>9){var d=3/Math.sqrt(f);s[u]=d*c*a[u],
s[u+1]=d*p*a[u]}}for(var y,g=0;n>g;g++)y=1+s[g]*s[g],o.push({x:l[g]/3/y,y:s[g]*l[g]/3/y
});return o},e.SvgScene.curveMonotone=function(t,e,r){var n;return null==e?(n=t.length,
e=0,r=n-1):n=r-e+1,2>=n?"":this.curveHermite(t,this.monotoneTangents(t,e,r),e,r)},
e.SvgScene.curveMonotoneSegments=function(t,e,r){var n;return null==e?(n=t.length,
e=0,r=n-1):n=r-e+1,2>=n?"":this.curveHermiteSegments(t,this.monotoneTangents(t,e,r),e,r);
},e.SvgScene.area=function(t){var e=t.$g.firstChild,r=t.length;if(!r)return e;var n=t[0];
return"smart"===n.segmented?this.areaSegmentedSmart(e,t):n.segmented?this.areaSegmentedFull(e,t):this.areaFixed(e,t,0,r-1,!0);
},e.SvgScene.areaFixed=function(t,e,r,n,i){var o=n-r+1;if(1===o)return this.lineAreaDotAlone(t,e,r);
var a=e[r];if(!a.visible)return t;var s=a.fillStyle,l=a.strokeStyle;if(!s.opacity&&!l.opacity)return t;
this.addFillStyleDefinition(e,s),this.addFillStyleDefinition(e,l);var u=!1,h=!1,c=!1,p=!1,f=!1;
switch(a.interpolate){case"basis":u=!0;break;case"cardinal":h=!0;break;case"monotone":
c=!0;break;case"step-after":p=!0;break;case"step-before":f=!0}for(var d,y,g=u||h||c,m=[],v=r;n>=v;v++)if(d=e[v],
d.width||d.height){for(var x=v+1;n>=x&&(y=e[x],y.width||y.height);x++);v>r&&!p&&v--,
n>=x&&!f&&x++;var b=g&&x-v>2?this.areaPathCurve:this.areaPathStraight;m.push(b.call(this,e,v,x-1,a)),
v=x-1}if(!m.length)return t;var k=l.opacity;return t=this.expect(t,"path",e,r,{"shape-rendering":a.antialias?null:"crispEdges",
"pointer-events":i?a.events:"none",cursor:a.cursor,d:"M"+m.join("ZM")+"Z",fill:s.color,
"fill-opacity":s.opacity||null,stroke:l.color,"stroke-opacity":k||null,"stroke-width":k?a.lineWidth/this.scale:null,
"stroke-linecap":a.lineCap,"stroke-linejoin":a.lineJoin,"stroke-miterlimit":a.strokeMiterLimit,
"stroke-dasharray":k?this.parseDasharray(a):null}),a.svg&&this.setAttributes(t,a.svg),
a.css&&this.setStyle(t,a.css),this.append(t,e,r)},e.SvgScene.areaSegmentedSmart=function(t,e){
return this.eachLineAreaSegment(t,e,function(t,e,r,n){var i=this.areaSegmentPaths(e,r,n),o=i.top,a=i.bottom,s=r,l={
breakOnKeyChange:!0,from:r,to:n};return this.eachLineAreaSegment(t,e,l,function(t,e,r,n,i,l){
var u=e[r],h=u.fillStyle,c=u.strokeStyle;if(this.addFillStyleDefinition(e,h),this.addFillStyleDefinition(e,c),
r===n)return this.lineAreaDotAlone(t,e,r);var p=this.areaJoinPaths(o,a,r-s,n-s-1),f=c.opacity,d={
"shape-rendering":u.antialias?null:"crispEdges","pointer-events":l,cursor:u.cursor,
d:p,fill:h.color,"fill-opacity":h.opacity||null,stroke:c.color,"stroke-opacity":f||null,
"stroke-width":f?u.lineWidth/this.scale:null,"stroke-linecap":u.lineCap,"stroke-linejoin":u.lineJoin,
"stroke-miterlimit":u.strokeMiterLimit,"stroke-dasharray":f?this.parseDasharray(u):null
};return t=this.expect(t,"path",e,r,d,u.css),this.append(t,e,r)})})},e.SvgScene.areaSegmentPaths=function(t,e,r){
return this.areaSegmentCurvePaths(t,e,r)||this.areaSegmentStraightPaths(t,e,r)},e.SvgScene.areaSegmentCurvePaths=function(t,e,r){
var n=r-e+1,i=t[e],o="basis"===i.interpolate,a=!o&&"cardinal"===i.interpolate;if(o||a||"monotone"==i.interpolate){
for(var s=[],l=[],u=0;n>u;u++){var h=t[e+u],c=t[r-u];s.push(h),l.push({left:c.left+c.width,
top:c.top+c.height})}var p,f;if(o?(p=this.curveBasisSegments(s),f=this.curveBasisSegments(l)):a?(p=this.curveCardinalSegments(s,i.tension),
f=this.curveCardinalSegments(l,i.tension)):(p=this.curveMonotoneSegments(s),f=this.curveMonotoneSegments(l)),
p||p.length)return{from:e,top:p,bottom:f}}},e.SvgScene.areaSegmentStraightPaths=function(t,e,r){
for(var n=[],i=[],o=r,a=e;o>e;e++,r--){var s=t[e],l=t[r],u=["M"+s.left+","+s.top],h=["M"+(l.left+l.width)+","+(l.top+l.height)],c=t[e+1],p=t[r-1];
switch(s.interpolate){case"step-before":u.push("V"+c.top+"H"+c.left);break;case"step-after":
u.push("H"+c.left+"V"+c.top);break;default:u.push("L"+c.left+","+c.top)}h.push("L"+(p.left+p.width)+","+(p.top+p.height)),
n.push(u),i.push(h)}return{from:a,top:n,bottom:i}},e.SvgScene.areaJoinPaths=function(t,e,r,n){
for(var i="",o="",a=t.length,s=r,l=a-1-n;n>=s;s++,l++){var u,h,c=t[s],p=e[l];s===r?(u=c.join(""),
h="L"+p[0].substr(1)+p[1]):(u=c[1],h=p[1]),i+=u,o+=h}return i+o+"Z"},e.SvgScene.areaSegmentedFull=function(t,e){
var r,n,i=e.length,o=this.areaSegmentCurvePaths(e,0,i-1);o&&(r=o.top,n=o.bottom);for(var a=(e[0],
0);i-1>a;a++){var s=e[a],l=e[a+1];if(s.visible&&l.visible){var u=s.fillStyle,h=s.strokeStyle;
if(u.opacity||h.opacity){var c;if(r){var p=r[a].join(""),f="L"+n[i-a-2].join("").substr(1);
c=p+f+"Z"}else{var d=s,y=l;switch(s.interpolate){case"step-before":d=l;break;case"step-after":
y=s}c="M"+s.left+","+d.top+"L"+l.left+","+y.top+"L"+(l.left+l.width)+","+(y.top+y.height)+"L"+(s.left+s.width)+","+(d.top+d.height)+"Z";
}var g={"shape-rendering":s.antialias?null:"crispEdges","pointer-events":s.events,
cursor:s.cursor,d:c,fill:u.color,"fill-opacity":u.opacity||null,stroke:h.color,"stroke-opacity":h.opacity||null,
"stroke-width":h.opacity?s.lineWidth/this.scale:null};t=this.expect(t,"path",e,a,g),
s.svg&&this.setAttributes(t,s.svg),s.css&&this.setStyle(t,s.css),t=this.append(t,e,a);
}}}return t},e.SvgScene.areaPathStraight=function(t,e,r,n){for(var i=[],o=[],a=r;a>=e;e++,
r--){var s=t[e],l=t[r],u=s.left+","+s.top,h=l.left+l.width+","+(l.top+l.height);if(a>e){
var c=t[e+1],p=t[r-1];switch(n.interpolate){case"step-before":u+="V"+c.top,h+="H"+(p.left+p.width);
break;case"step-after":u+="H"+c.left,h+="V"+(p.top+p.height)}}i.push(u),o.push(h);
}return i.concat(o).join("L")},e.SvgScene.areaPathCurve=function(t,e,r,n){for(var i,o,a=[],s=[],l=r;l>=e;e++,
r--){var u=t[r];a.push(t[e]),s.push({left:u.left+u.width,top:u.top+u.height})}switch(n.interpolate){
case"basis":i=this.curveBasis(a),o=this.curveBasis(s);break;case"cardinal":i=this.curveCardinal(a,n.tension),
o=this.curveCardinal(s,n.tension);break;default:i=this.curveMonotone(a),o=this.curveMonotone(s);
}return a[0].left+","+a[0].top+i+"L"+s[0].left+","+s[0].top+o},e.SvgScene.minBarWidth=1,
e.SvgScene.minBarHeight=1,e.SvgScene.minBarLineWidth=.2,e.SvgScene.bar=function(t){
for(var e=t.$g.firstChild,r=0;r<t.length;r++){var n=t[r];if(!(!n.visible||Math.abs(n.width)<=1e-10||Math.abs(n.height)<=1e-10)){
n.width<this.minBarWidth&&(n.width=this.minBarWidth),n.height<this.minBarHeight&&(n.height=this.minBarHeight);
var i=n.fillStyle,o=n.strokeStyle;if(i.opacity||o.opacity){this.addFillStyleDefinition(t,i),
this.addFillStyleDefinition(t,o);var a;o.opacity?(a=n.lineWidth,a=1e-10>a?0:Math.max(this.minBarLineWidth,a/this.scale)):a=null,
e=this.expect(e,"rect",t,r,{"shape-rendering":n.antialias?null:"crispEdges","pointer-events":n.events,
cursor:n.cursor,x:n.left,y:n.top,width:Math.max(1e-10,n.width),height:Math.max(1e-10,n.height),
fill:i.color,"fill-opacity":i.opacity||null,stroke:o.color,"stroke-opacity":o.opacity||null,
"stroke-width":a,"stroke-linecap":n.lineCap,"stroke-dasharray":o.opacity?this.parseDasharray(n):null
}),n.svg&&this.setAttributes(e,n.svg),n.css&&this.setStyle(e,n.css),e=this.append(e,t,r);
}}}return e},e.SvgScene.dot=function(t){for(var r=t.$g.firstChild,n=0,i=t.length;i>n;n++){
var o=t[n];if(o.visible){var a=o.fillStyle,s=a.opacity,l=o.strokeStyle,u=l.opacity;
if(s||u){this.addFillStyleDefinition(t,a),this.addFillStyleDefinition(t,l);var h={
"shape-rendering":o.antialias?null:"crispEdges","pointer-events":o.events,cursor:o.cursor,
fill:a.color,"fill-opacity":s||null,stroke:l.color,"stroke-opacity":u||null,"stroke-width":u?o.lineWidth/this.scale:null,
"stroke-linecap":o.lineCap,"stroke-dasharray":u?this.parseDasharray(o):null},c=o.shape||"circle",p=o.aspectRatio,f=o.shapeAngle,d=null;
if("circle"!==c&&this.hasSymbol(c)){var y=o.shapeRadius,g=y,m=y;if(p>0&&1!==p){var v=1/Math.sqrt(p),x=p*v;
g*=x,m*=v}h.d=this.renderSymbol(c,o,g,m),c="path",d="translate("+o.left+","+o.top+") ",
f&&(d+="rotate("+e.degrees(f)+") ")}else 1===p?(c="circle",h.cx=o.left,h.cy=o.top,
h.r=o.shapeRadius):(c="ellipse",h.cx=h.cy=0,d="translate("+o.left+","+o.top+") ",
f&&(d+="rotate("+e.degrees(f)+") "),h.rx=o._width/2,h.ry=o._height/2);d&&(h.transform=d),
r=this.expect(r,c,t,n,h),o.svg&&this.setAttributes(r,o.svg),o.css&&this.setStyle(r,o.css),
r=this.append(r,t,n)}}}return r},!function(t){var r={};t.registerSymbol=function(e,n){
return r[e.toLowerCase()]=n,t},t.renderSymbol=function(e,n,i,o){return r[e].call(t,n,e,i,o);
},t.hasSymbol=function(t){return r.hasOwnProperty(t)},t.symbols=function(){return e.keys(r);
};var n=2/Math.sqrt(3);t.registerSymbol("circle",function(){throw new Error("Not implemented as a symbol");
}).registerSymbol("cross",function(t,e,r,n){var i=(t.shapeRadius,-r),o=-n;return"M"+i+","+o+"L"+r+","+n+"M"+r+","+o+"L"+i+","+n;
}).registerSymbol("triangle",function(t,e,r,i){var o=i,a=r*n,s=-i,l=-a;return"M0,"+o+"L"+a+","+s+" "+l+","+s+"Z";
}).registerSymbol("diamond",function(t,e,r,n){var i=r*Math.SQRT2,o=n*Math.SQRT2,a=-i,s=-o;
return"M0,"+s+"L"+i+",0 0,"+o+" "+a+",0Z"}).registerSymbol("square",function(t,e,r,n){
var i=-r,o=-n;return"M"+i+","+o+"L"+r+","+o+" "+r+","+n+" "+i+","+n+"Z"}).registerSymbol("tick",function(t,e,r,n){
var i=-n*n;return"M0,0L0,"+i}).registerSymbol("bar",function(t,e,r,n){var i=n*n/2;
return"M0,"+i+"L0,"+-i})}(e.SvgScene),e.SvgScene.image=function(t){for(var e=t.$g.firstChild,r=0;r<t.length;r++){
var n=t[r];if(n.visible){if(e=this.fill(e,t,r),n.image){e=this.expect(e,"foreignObject",t,r,{
cursor:n.cursor,x:n.left,y:n.top,width:n.width,height:n.height}),n.svg&&this.setAttributes(e,n.svg),
n.css&&this.setStyle(e,n.css);var i=e.firstChild||e.appendChild(document.createElementNS(this.xhtml,"canvas"));
i.$scene={scenes:t,index:r},i.style.width=n.width,i.style.height=n.height,i.width=n.imageWidth,
i.height=n.imageHeight,i.getContext("2d").putImageData(n.image,0,0)}else e=this.expect(e,"image",t,r,{
preserveAspectRatio:"none",cursor:n.cursor,x:n.left,y:n.top,width:n.width,height:n.height
}),n.svg&&this.setAttributes(e,n.svg),n.css&&this.setStyle(e,n.css),e.setAttributeNS(this.xlink,"xlink:href",n.url);
e=this.append(e,t,r),e=this.stroke(e,t,r)}}return e},e.SvgScene.label=function(t){
for(var e=t.$g.firstChild,r=0;r<t.length;r++){var n=t[r];if(n.visible){var i=n.textStyle;
if(i.opacity&&n.text){var o=0,a=0,s=0,l="start";switch(n.textBaseline){case"middle":
s=".35em";break;case"top":s=".71em",a=n.textMargin;break;case"bottom":a="-"+n.textMargin;
}switch(n.textAlign){case"right":l="end",o="-"+n.textMargin;break;case"center":l="middle";
break;case"left":o=n.textMargin}e=this.expect(e,"text",t,r,{"pointer-events":n.events,
cursor:n.cursor,x:o,y:a,dy:s,transform:"translate("+n.left+","+n.top+")"+(n.textAngle?" rotate("+180*n.textAngle/Math.PI+")":"")+(1!=this.scale?" scale("+1/this.scale+")":""),
fill:i.color,"fill-opacity":i.opacity||null,"text-anchor":l},{font:n.font,"text-shadow":n.textShadow,
"text-decoration":n.textDecoration}),n.svg&&this.setAttributes(e,n.svg),n.css&&this.setStyle(e,n.css),
e.firstChild?e.firstChild.nodeValue=n.text:e.appendChild(document.createTextNode(n.text)),
e=this.append(e,t,r)}}}return e},e.SvgScene.line=function(t){var e=t.$g.firstChild,r=t.length;
if(!r)return e;var n=t[0];return"smart"===n.segmented?this.lineSegmentedSmart(e,t):2>r?e:n.segmented?this.lineSegmentedFull(e,t):this.lineFixed(e,t);
},e.SvgScene.lineFixed=function(t,e){var r=e.length;if(1===r)return this.lineAreaDotAlone(t,e,0);
var n=e[0];if(!n.visible)return t;var i=n.fillStyle,o=n.strokeStyle;if(!i.opacity&&!o.opacity)return t;
this.addFillStyleDefinition(e,i),this.addFillStyleDefinition(e,o);var a="M"+n.left+","+n.top,s=r>2;
if(s)switch(n.interpolate){case"basis":a+=this.curveBasis(e);break;case"cardinal":
a+=this.curveCardinal(e,n.tension);break;case"monotone":a+=this.curveMonotone(e);break;
default:s=!1}if(!s)for(var l=1;r>l;l++)a+=this.lineSegmentPath(e[l-1],e[l]);var u=o.opacity,h={
"shape-rendering":n.antialias?null:"crispEdges","pointer-events":n.events,cursor:n.cursor,
d:a,fill:i.color,"fill-opacity":i.opacity||null,stroke:o.color,"stroke-opacity":u||null,
"stroke-width":u?n.lineWidth/this.scale:null,"stroke-linecap":n.lineCap,"stroke-linejoin":n.lineJoin,
"stroke-miterlimit":n.strokeMiterLimit,"stroke-dasharray":u?this.parseDasharray(n):null
};return t=this.expect(t,"path",e,0,h,n.css),n.svg&&this.setAttributes(t,n.svg),this.append(t,e,0);
},e.SvgScene.lineSegmentedSmart=function(t,e){return this.eachLineAreaSegment(t,e,function(t,e,r,n){
var i=this.lineSegmentPaths(e,r,n),o=r,a={breakOnKeyChange:!0,from:r,to:n};return this.eachLineAreaSegment(t,e,a,function(t,e,r,n,a,s){
var l=e[r],u=l.fillStyle;this.addFillStyleDefinition(e,u);var h=l.strokeStyle;if(this.addFillStyleDefinition(e,h),
r===n)return this.lineAreaDotAlone(t,e,r);var c=this.lineJoinPaths(i,r-o,n-o-1),p=h.opacity,f={
"shape-rendering":l.antialias?null:"crispEdges","pointer-events":s,cursor:l.cursor,
d:c,fill:u.color,"fill-opacity":u.opacity||null,stroke:h.color,"stroke-opacity":p||null,
"stroke-width":p?l.lineWidth/this.scale:null,"stroke-linecap":l.lineCap,"stroke-linejoin":l.lineJoin,
"stroke-miterlimit":l.strokeMiterLimit,"stroke-dasharray":p?this.parseDasharray(l):null
};return t=this.expect(t,"path",e,r,f,l.css),this.append(t,e,r)})})},e.SvgScene.lineSegmentedFull=function(t,r){
var n,i=r[0];switch(i.interpolate){case"basis":n=this.curveBasisSegments(r);break;
case"cardinal":n=this.curveCardinalSegments(r,i.tension);break;case"monotone":n=this.curveMonotoneSegments(r);
}for(var o=0,a=r.length-1;a>o;o++){var s=r[o],l=r[o+1];if(s.visible&&l.visible){var u=s.strokeStyle,h=e.FillStyle.transparent;
if(u.opacity){var c;"linear"==s.interpolate&&"miter"==s.lineJoin?(h=u,u=e.FillStyle.transparent,
c=this.pathJoin(r[o-1],s,l,r[o+2])):c=n?n[o].join(""):"M"+s.left+","+s.top+this.lineSegmentPath(s,l),
t=this.expect(t,"path",r,o,{"shape-rendering":s.antialias?null:"crispEdges","pointer-events":s.events,
cursor:s.cursor,d:c,fill:h.color,"fill-opacity":h.opacity||null,stroke:u.color,"stroke-opacity":u.opacity||null,
"stroke-width":u.opacity?s.lineWidth/this.scale:null,"stroke-linejoin":s.lineJoin
}),s.svg&&this.setAttributes(t,s.svg),s.css&&this.setStyle(t,s.css),t=this.append(t,r,o);
}}}return t},e.SvgScene.lineSegmentPath=function(t,e){var r=1;switch(t.interpolate){
case"polar-reverse":r=0;case"polar":var n=e.left-t.left,i=e.top-t.top,o=1-t.eccentricity,a=Math.sqrt(n*n+i*i)/(2*o);
if(0>=o||o>1)break;return"A"+a+","+a+" 0 0,"+r+" "+e.left+","+e.top;case"step-before":
return"V"+e.top+"H"+e.left;case"step-after":return"H"+e.left+"V"+e.top}return"L"+e.left+","+e.top;
},e.SvgScene.lineSegmentPaths=function(t,e,r){var n,i=t[e];switch(i.interpolate){
case"basis":n=this.curveBasisSegments(t,e,r);break;case"cardinal":n=this.curveCardinalSegments(t,i.tension,e,r);
break;case"monotone":n=this.curveMonotoneSegments(t,e,r)}if(!n||!n.length){n=[];for(var o=e+1;r>=o;o++){
var a=t[o-1],s=t[o];n.push(["M"+a.left+","+a.top,this.lineSegmentPath(a,s)])}}return n;
},e.strokeMiterLimit=4,e.SvgScene.pathJoin=function(t,r,n,i){var o,a,s,l=[],u=r.lineWidth/this.scale,h=e.vector(r.left,r.top),c=e.vector(n.left,n.top),p=c.minus(h),f=p.perp().norm(),d=f.times(u/2),y=h.plus(d),g=h.minus(d),m=c.plus(d),v=c.minus(d);
if(t&&t.visible){var x=e.vector(t.left,t.top),b=h.minus(x),k=b.perp().norm(),S=k.plus(f).norm(),M=this.lineIntersect(h,S,y,p),w=this.lineIntersect(h,S,g,p);
s=M.minus(w).length();var C=t.lineWidth/this.scale,L=(u+C)/2;if(a=s/L,o=r.strokeMiterLimit||e.strokeMiterLimit,
o>=a)l.push(w,M);else{var N=p.times(-1),A=b.norm().plus(N.norm()).norm(),I=h.plus(A.times(L/2));
A.dot(f)>=0?l.push(w,I,y):l.push(g,I,M)}}else l.push(g,y);if(i&&i.visible){var P=e.vector(i.left,i.top),B=P.minus(c),_=B.perp().norm(),$=_.plus(f).norm(),D=this.lineIntersect(c,$,m,p),R=this.lineIntersect(c,$,v,p);
s=D.minus(R).length();var F=i.lineWidth/this.scale,T=(F+u)/2;if(a=s/T,o=n.strokeMiterLimit||e.strokeMiterLimit,
o>=a)l.push(D,R);else{var E=B.times(-1),O=p.norm().plus(E.norm()).norm(),z=c.plus(O.times(T/2));
O.dot(f)>=0?l.push(m,z,R):l.push(D,z,v)}}else l.push(m,v);var H=l.shift();return"M"+H.x+","+H.y+"L"+l.map(function(t){
return t.x+","+t.y}).join(" ")},e.SvgScene.lineIntersect=function(t,e,r,n){return t.plus(e.times(r.minus(t).dot(n.perp())/e.dot(n.perp())));
},e.SvgScene.lineJoinPaths=function(t,e,r){for(var n=t[e].join(""),i=e+1;r>=i;i++)n+=t[i][1];
return n},e.SvgScene.lineAreaDotAlone=function(t){return t},e.Scene.eventsToNumber={
"":0,none:0,painted:1,all:2},e.Scene.numberToEvents=["none","painted","all"],e.SvgScene.eachLineAreaSegment=function(t,r,n,i){
"function"==typeof n&&(i=n,n=null);var o,a,s,l=e.get(n,"breakOnKeyChange",!1),u=e.get(n,"from")||0,h=e.get(n,"to",r.length-1);
l&&(a=[],s=[]);for(var c=u;h>=c;){var p=r[c];if(this.isSceneVisible(p)){o=this.eventsToNumber[p.events]||0,
l&&this.lineAreaSceneKey(p,a);for(var f,d=c;;){var y=d+1;if(y>h){f=y;break}var g=r[y];
if(!this.isSceneVisible(g)){f=y+1;break}if(o=Math.max(o,this.eventsToNumber[g.events]||0),
d=y,l&&(this.lineAreaSceneKey(g,s),!this.equalSceneKeys(a,s))){f=d;break}}t=i.call(this,t,r,c,d,n,this.numberToEvents[o]),
c=f}else c++}return t},e.SvgScene.lineAreaSceneKey=function(t,e){return e[0]=t.fillStyle.key,
e[1]=t.strokeStyle.key,e[2]=t.lineWidth,e[3]=t.strokeDasharray||"none",e[4]=t.interpolate,
e},e.SvgScene.isSceneVisible=function(t){return t.visible&&(t.fillStyle.opacity>0||t.strokeStyle.opacity>0);
},e.SvgScene.equalSceneKeys=function(t,e){for(var r=0,n=t.length;n>r;r++)if(t[r]!==e[r])return!1;
return!0},e.SvgScene.panel=function(t){for(var e=t.$g,r=e&&e.firstChild,n=0,i=t.length;i>n;n++){
var o=t[n];if(o.visible){if(!t.parent){var a=o.canvas;this.applyCanvasStyle(a),e&&e.parentNode!==a&&(e=a.firstChild,
r=e&&e.firstChild),e?r&&"defs"===r.tagName&&(r=r.nextSibling):(e=this.createRootPanelElement(),
r=null,this.initRootPanelElement(e,t.mark),a.appendChild(e),t.$defs=e.appendChild(this.create("defs")),
t.$g=e),e.setAttribute("width",o.width+o.left+o.right),e.setAttribute("height",o.height+o.top+o.bottom);
}var s=null;if("hidden"===o.overflow){var l=this.addPanelClipPath(e,r,t,n,o);s=l.g,
t.$g=e=s,r=l.next}r=this.fill(r,t,n);var u=this.scale,h=o.transform,c=o.left+h.x,p=o.top+h.y;
if(this.scale*=h.k,o.children.length)for(var f={transform:"translate("+c+","+p+")"+(1!=h.k?" scale("+h.k+")":"")
},d=this.getSortedChildScenes(t,n),y=0,g=d.length;g>y;y++){var m=d[y];m.$g=r=this.expect(r,"g",t,n,f),
this.updateAll(m),r.parentNode||e.appendChild(r),r=r.nextSibling}this.scale=u,r=this.stroke(r,t,n),
s&&(t.$g=e=s.parentNode,r=s.nextSibling)}}return r},e.SvgScene.applyCanvasStyle=function(t){
t.style.display="inline-block"},e.SvgScene.createRootPanelElement=function(){return this.create("svg");
},e.SvgScene.initRootPanelElement=function(t,e){t.setAttribute("font-size","10px"),
t.setAttribute("font-family","sans-serif"),t.setAttribute("fill","none"),t.setAttribute("stroke","none"),
t.setAttribute("stroke-width",1.5),this.disableElementSelection(t),this.listenRootPanelElement(t,e);
},e.SvgScene.listenRootPanelElement=function(t,e){for(var r=0,n=this.events,i=n.length;i>r;r++)t.addEventListener(n[r],this.dispatch,!1),
e._registerBoundEvent(t,n[r],this.dispatch,!1)},e.SvgScene.disableElementSelection=function(t){
t.setAttribute("style","-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"),
"undefined"!=typeof t.onselectstart&&(t.setAttribute("unselectable","on"),t.onselectstart=function(){
return!1})},e.SvgScene.addPanelClipPath=function(t,r,n,i,o){var a=e.id().toString(36),s=this.expect(r,"g",n,i,{
"clip-path":"url(#"+a+")"}),l=this.expect(s.firstChild,"clipPath",n,i,{id:a}),u=l.firstChild||l.appendChild(this.create("rect"));
return u.setAttribute("x",o.left),u.setAttribute("y",o.top),u.setAttribute("width",o.width),
u.setAttribute("height",o.height),l.parentNode||s.appendChild(l),s.parentNode||t.appendChild(s),
{g:s,next:l.nextSibling}},e.SvgScene.getSortedChildScenes=function(t,e){var r=t[e].children;
return t.mark._zOrderChildCount&&(r=r.slice(0),r.sort(function(t,e){var r=t.mark._zOrder-e.mark._zOrder;
return 0===r&&(r=t.childIndex-e.childIndex),r})),r},e.SvgScene.fill=function(t,e,r){
var n=e[r],i=n.fillStyle;return(i.opacity||"all"==n.events)&&(this.addFillStyleDefinition(e,i),
t=this.expect(t,"rect",e,r,{"shape-rendering":n.antialias?null:"crispEdges","pointer-events":n.events,
cursor:n.cursor,x:n.left,y:n.top,width:n.width,height:n.height,fill:i.color,"fill-opacity":i.opacity,
stroke:null}),t=this.append(t,e,r)),t},e.SvgScene.stroke=function(t,e,r){var n=e[r],i=n.strokeStyle;
return(i.opacity||"all"==n.events)&&(t=this.expect(t,"rect",e,r,{"shape-rendering":n.antialias?null:"crispEdges",
"pointer-events":"all"==n.events?"stroke":n.events,cursor:n.cursor,x:n.left,y:n.top,
width:Math.max(1e-10,n.width),height:Math.max(1e-10,n.height),fill:null,stroke:i.color,
"stroke-opacity":i.opacity,"stroke-width":n.lineWidth/this.scale,"stroke-linecap":n.lineCap,
"stroke-dasharray":i.opacity?this.parseDasharray(n):null}),t=this.append(t,e,r)),
t},e.SvgScene.minRuleLineWidth=1,e.SvgScene.rule=function(t){for(var e=t.$g.firstChild,r=0;r<t.length;r++){
var n=t[r];if(n.visible){var i=n.strokeStyle;if(i.opacity){var o=n.lineWidth;o=1e-10>o?0:Math.max(this.minRuleLineWidth,o/this.scale),
e=this.expect(e,"line",t,r,{"shape-rendering":n.antialias?null:"crispEdges","pointer-events":n.events,
cursor:n.cursor,x1:n.left,y1:n.top,x2:n.left+n.width,y2:n.top+n.height,stroke:i.color,
"stroke-opacity":i.opacity,"stroke-width":o,"stroke-linecap":n.lineCap,"stroke-dasharray":i.opacity?this.parseDasharray(n):null
}),n.svg&&this.setAttributes(e,n.svg),n.css&&this.setStyle(e,n.css),e=this.append(e,t,r);
}}}return e},e.SvgScene.wedge=function(t){for(var e=t.$g.firstChild,r=0;r<t.length;r++){
var n=t[r];if(n.visible){var i=n.fillStyle,o=n.strokeStyle;if(i.opacity||o.opacity){
var a,s=n.innerRadius,l=n.outerRadius,u=Math.abs(n.angle);if(u>=2*Math.PI)a=s?"M0,"+l+"A"+l+","+l+" 0 1,1 0,"+-l+"A"+l+","+l+" 0 1,1 0,"+l+"M0,"+s+"A"+s+","+s+" 0 1,1 0,"+-s+"A"+s+","+s+" 0 1,1 0,"+s+"Z":"M0,"+l+"A"+l+","+l+" 0 1,1 0,"+-l+"A"+l+","+l+" 0 1,1 0,"+l+"Z";else{
var h=Math.min(n.startAngle,n.endAngle),c=Math.max(n.startAngle,n.endAngle),p=Math.cos(h),f=Math.cos(c),d=Math.sin(h),y=Math.sin(c);
a=s?"M"+l*p+","+l*d+"A"+l+","+l+" 0 "+(u<Math.PI?"0":"1")+",1 "+l*f+","+l*y+"L"+s*f+","+s*y+"A"+s+","+s+" 0 "+(u<Math.PI?"0":"1")+",0 "+s*p+","+s*d+"Z":"M"+l*p+","+l*d+"A"+l+","+l+" 0 "+(u<Math.PI?"0":"1")+",1 "+l*f+","+l*y+"L0,0Z";
}this.addFillStyleDefinition(t,i),this.addFillStyleDefinition(t,o),e=this.expect(e,"path",t,r,{
"shape-rendering":n.antialias?null:"crispEdges","pointer-events":n.events,cursor:n.cursor,
transform:"translate("+n.left+","+n.top+")",d:a,fill:i.color,"fill-rule":"evenodd",
"fill-opacity":i.opacity||null,stroke:o.color,"stroke-opacity":o.opacity||null,"stroke-width":o.opacity?n.lineWidth/this.scale:null,
"stroke-linejoin":n.lineJoin,"stroke-miterlimit":n.strokeMiterLimit,"stroke-linecap":n.lineCap,
"stroke-dasharray":o.opacity?this.parseDasharray(n):null}),n.svg&&this.setAttributes(e,n.svg),
n.css&&this.setStyle(e,n.css),e=this.append(e,t,r)}}}return e},e.Mark=function(){
this.$properties=[],this.$propertiesMap={},this.$handlers={}},e.Mark.prototype.properties={},
e.Mark.cast={},e.Mark.prototype.property=function(t,r){return this.hasOwnProperty("properties")||(this.properties=e.extend(this.properties)),
this.properties[t]=!0,e.Mark.prototype.propertyMethod(t,!1,e.Mark.cast[t]=r),this;
},e.Mark.prototype.localProperty=function(t,r){this.hasOwnProperty("properties")||(this.properties=e.extend(this.properties)),
this.properties[t]=!0;var n=e.Mark.cast[t];return r&&(e.Mark.cast[t]=n=r),this.propertyMethod(t,!1,n),
this},e.Mark.prototype.def=function(t,e){return this.propertyMethod(t,!0),this[t](arguments.length>1?e:null);
},e.Mark.prototype.propertyMethod=function(t,r,n){n||(n=e.Mark.cast[t]),this[t]=function(i,o){
if(r&&this.scene){var a=this.scene.defs;if(arguments.length)return a[t]={id:null==i?0:e.id(),
value:null!=i&&n?n(i):i},this;var s=a[t];return s?s.value:null}if(arguments.length)return this.setPropertyValue(t,i,r,n,!1,o),
this;var l=this.instance();return e.propBuildMark===this&&1!==e.propBuilt[t]?(e.propBuilt[t]=1,
l[t]=this.evalProperty(this.binds.properties[t])):l[t]}},e.Mark.funPropertyCaller=function(t,r){
function n(){var e=t.apply(this,i);return null!=e?r(e):e}var i=e.Mark.stack;return n;
},e.Mark.prototype.setPropertyValue=function(t,r,n,i,o,a){var s=!n<<1|"function"==typeof r;
1&s&&i?r=e.Mark.funPropertyCaller(r,i):null!=r&&i&&(r=i(r));var l=this.$propertiesMap,u=this.$properties,h={
name:t,id:e.id(),value:r,type:s,tag:a,proto:null,root:null,_proto:null};h.root=h;var c=l[t];
if(l[t]=h,c)for(var p=0,f=u.length;f>p;p++)if(u[p]===c){u.splice(p,1);break}return u.push(h),
o&&c&&3===s&&(h.proto=c,h.root=c.root),h},e.Mark.prototype.intercept=function(t,r,n){
return this.setPropertyValue(t,r,!1,e.get(n,"noCast")?null:e.Mark.cast[t],!0,e.get(n,"tag")),
this},e.Mark.prototype.propertyValue=function(t,e){var r=this.$propertiesMap[t];if(r)return r.value;
if(e){if(this.proto){var n=this.proto._propertyValueRecursive(t);if(void 0!==n)return n;
}return this.defaults._propertyValueRecursive(t)}},e.Mark.prototype._propertyValueRecursive=function(t){
var e=this.$propertiesMap[t];return e?e.value:this.proto?this.proto._propertyValueRecursive(t):void 0;
},e.Mark.stack=[],e.Mark.prototype.property("data").property("visible",Boolean).property("css",Object).property("svg",Object).property("left",Number).property("right",Number).property("top",Number).property("bottom",Number).property("cursor",String).property("title",String).property("reverse",Boolean).property("antialias",Boolean).property("events",e.stringLowerCase).property("id",String),
e.Mark.prototype.childIndex=-1,e.Mark.prototype.index=-1,e.Mark.prototype.scale=1,
e.Mark.prototype._zOrder=0,e.Mark.prototype.defaults=(new e.Mark).data(function(t){
return[t]}).visible(!0).antialias(!0).events("painted"),e.Mark.prototype.extend=function(t){
return this.proto=t,this.target=t.target,this},e.Mark.prototype.add=function(t){return this.parent.add(t).extend(this);
},e.Mark.prototype.zOrder=function(t){if(!arguments.length)return this._zOrder;if(t=+t||0,
this._zOrder!==t){var e=this.parent;e&&0!==this._zOrder&&e._zOrderChildCount--,this._zOrder=t,
e&&0!==this._zOrder&&e._zOrderChildCount++}return this},e.Mark.prototype.anchor=function(t){
return new e.Anchor(this).name(t||"center").data(function(){return this.scene.target.map(function(t){
return t.data})}).visible(function(){return this.scene.target[this.index].visible;
}).id(function(){return this.scene.target[this.index].id}).left(function(){var t=this.scene.target[this.index],e=t.width||0;
switch(this.name()){case"bottom":case"top":case"center":return t.left+e/2;case"left":
return null}return t.left+e}).top(function(){var t=this.scene.target[this.index],e=t.height||0;
switch(this.name()){case"left":case"right":case"center":return t.top+e/2;case"top":
return null}return t.top+e}).right(function(){var t=this.scene.target[this.index];
return"left"==this.name()?t.right+(t.width||0):null}).bottom(function(){var t=this.scene.target[this.index];
return"top"==this.name()?t.bottom+(t.height||0):null}).textAlign(function(){switch(this.name()){
case"bottom":case"top":case"center":return"center";case"right":return"right"}return"left";
}).textBaseline(function(){switch(this.name()){case"right":case"left":case"center":
return"middle";case"top":return"top"}return"bottom"})},e.Mark.prototype.anchorTarget=function(){
return this.target},e.Mark.prototype.margin=function(t){return this.left(t).right(t).top(t).bottom(t);
},e.Mark.prototype.instance=function(t){var e=this.scene||this.parent.instance(-1).children[this.childIndex],r=null==t||this.hasOwnProperty("index")?this.index:t;
return e[0>r?e.length-1:r]},e.Mark.prototype.instances=function(t){for(var r,n=this,i=[];!(r=n.scene);)i.push({
index:t.parentIndex,childIndex:n.childIndex}),t=t.parent,n=n.parent;for(var o=i.length;o--;){
var a=i[o];r=r[a.index].children[a.childIndex]}if(this.hasOwnProperty("index")){var s=e.extend(r[this.index]);
return s.right=s.top=s.left=s.bottom=0,[s]}return r},e.Mark.prototype.first=function(){
return this.scene[0]},e.Mark.prototype.last=function(){return this.scene[this.scene.length-1];
},e.Mark.prototype.sibling=function(){return 0==this.index?null:this.scene[this.index-1];
},e.Mark.prototype.cousin=function(){var t=this.parent,e=t&&t.sibling();return e&&e.children?e.children[this.childIndex][this.index]:null;
},e.Mark.prototype._renderId=0,e.Mark.prototype.renderId=function(){return this.root._renderId;
},e.Mark.prototype.render=function(){var t=this.root;!this.parent||t.scene?(t._renderId++,
this.renderCore()):t.render()},e.Mark.prototype.renderCore=function(){function t(t,n,o){
if(t.scale=o,l>n){var a=n>=i.length;if(a&&i.unshift(null),t.hasOwnProperty("index"))r(t,n,o,a);else{
for(var s=0,u=t.scene.length;u>s;s++)t.index=s,r(t,n,o,a);delete t.index}a&&i.shift();
}else t.build(),e.Scene.scale=o,e.Scene.updateAll(t.scene);delete t.scale}function r(e,r,n,o){
var s,l=e.scene[e.index];if(l.visible){var u=e.children,h=l.children,c=a[r],p=u[c];
for(p.scene||c++,s=0;c>s;s++)u[s].scene=h[s];for(o&&(i[0]=l.data),t(p,r+1,n*l.transform.k),
s=0;c>s;s++)u[s].scene=void 0}}for(var n=this.parent,i=e.Mark.stack,o=i.length,a=[],s=this;s.parent;s=s.parent)a.unshift(s.childIndex);
var l=a.length;for(this.bind();n&&!n.hasOwnProperty("index");)n=n.parent;try{this.context(n?n.scene:void 0,n?n.index:-1,function(){
t(this.root,0,1)})}catch(u){throw i.length>o&&(i.length=o),u}},e.Mark.prototype.bind=function(){
function t(t){do for(var e=t.$properties,s=e.length;s--;){var l=e[s],u=l.name,h=n[u];
if(h){var c=i[u];3===c.type&&(c._proto=l,c=i[u]=l.root,c._proto=null)}else switch(n[u]=l,
i[u]=l.root,l.root._proto=null,u){case"data":r=l;break;case"visible":case"id":o.push(l);
break;default:a[l.type].push(l)}}while(t=t.proto)}var r,n={},i={},o=[],a=[[],[],[],[]];
t(this),t(this.defaults);var s=a[0],l=a[1].reverse(),u=a[2];a[3].reverse();var h=this;
do for(var c in h.properties)c in n||u.push(n[c]={name:c,type:2,value:null});while(h=h.proto);
var p;if(s.length||l.length){p=s.concat(l);for(var f=0,d=p.length;d>f;f++)this.propertyMethod(p[f].name,!0);
}else p=[];this.binds={properties:n,data:r,defs:p,required:o,optional:e.blend(a)};
},e.Mark.prototype.build=function(){var t=e.Mark.stack,r=this.scene;if(!r){r=this.scene=[],
r.mark=this,r.type=this.type,r.childIndex=this.childIndex;var n=this.parent;n&&(r.parent=n.scene,
r.parentIndex=n.index)}this.target&&(r.target=this.target.instances(r));var i=this.binds.defs;
if(i.length)for(var o=r.defs||(r.defs={}),a=0,s=i.length;s>a;a++){var l=i[a],u=o[l.name];
(!u||l.id>u.id)&&(o[l.name]={id:0,value:1&l.type?l.value.apply(this,t):l.value})}
var h=this.evalProperty(this.binds.data),c=h.length;if(r.length=c,c){var p=e.Mark.prototype;
t.unshift(null);var f=e.propBuildMark,d=e.propBuilt;e.propBuildMark=this;try{for(var a=0;c>a;a++){
p.index=this.index=a,e.propBuilt={};var y=r[a];y?y._state&&delete y._state:y=r[a]={},
y.data=t[0]=h[a],this.preBuildInstance(y),this.buildInstance(y)}}finally{p.index=-1,
delete this.index,t.shift(),e.propBuildMark=f,e.propBuilt=d}}return this},e.Mark.prototype.instanceState=function(t){
return t||(t=this.instance()),t?t._state||(t._state={}):null},e.Mark.prototype.preBuildInstance=function(){},
e.Mark.prototype.buildInstance=function(t){this.buildProperties(t,this.binds.required),
t.visible&&(this.buildProperties(t,this.binds.optional),this.buildImplied(t))},!function(){
var t,r=e.Mark.stack,n=[function(t){return this.scene.defs[t.name].value},null,function(t){
return t.value},function(e){return t=e.proto||e._proto,e.value.apply(this,r)}];n[1]=n[0],
e.Mark.prototype.buildProperties=function(r,i){var o=e.propBuilt,a=!o;a&&(e.propBuildMark=this,
e.propBuilt=o={});for(var s=t,l=0,u=i.length;u>l;l++){var h=i[l],c=h.name;c in o||(o[c]=1,
r[c]=n[h.type].call(this,h))}t=s,a&&(e.propBuildMark=e.propBuilt=null)},e.Mark.prototype.evalProperty=function(e){
var r=t,i=n[e.type].call(this,e);return t=r,i},e.Mark.prototype.evalInPropertyContext=function(e,n){
var i=t;t=n;var o=e.apply(this,r);return t=i,o},e.Mark.prototype.delegate=function(e,r){
if(t&&(!r||t.tag===r)){var n=this.evalProperty(t);if(void 0!==n)return n}return e;
},e.Mark.prototype.delegateExcept=function(e,r){if(t&&(!r||t.tag!==r)){var n=this.evalProperty(t);
if(void 0!==n)return n}return e},e.Mark.prototype.hasDelegate=function(e){return!(!t||e&&t.tag!==e);
}}(),e.Mark.prototype.buildImplied=function(t){var r,n,i=t.left,o=t.right,a=t.top,s=t.bottom,l=this.properties,u=l.width?t.width:0,h=l.height?t.height:0;
if(null==u||null==o||null==i){r=this.parent&&this.parent.instance(),n=!0;var c=r?r.width:u+i+o;
null==u?u=c-(o=o||0)-(i=i||0):null==o?null==i?i=o=(c-u)/2:o=c-u-i:i=c-u-o}if(null==h||null==s||null==a){
n||(r=this.parent&&this.parent.instance());var p=r?r.height:h+a+s;null==h?h=p-(a=a||0)-(s=s||0):null==s?s=null==a?a=(p-h)/2:p-h-a:a=p-h-s;
}t.left=i,t.right=o,t.top=a,t.bottom=s,l.width&&(t.width=u),l.height&&(t.height=h),
l.textStyle&&!t.textStyle&&(t.textStyle=e.FillStyle.transparent),l.fillStyle&&!t.fillStyle&&(t.fillStyle=e.FillStyle.transparent),
l.strokeStyle&&!t.strokeStyle&&(t.strokeStyle=e.FillStyle.transparent)},e.Mark.prototype.mouse=function(){
var t=this.root.canvas(),r=e.event,n=r&&r.pageX||0,i=r&&r.pageY||0,o=e.elementOffset(t);
if(o){var a=e.cssStyle(t);n-=o.left+parseFloat(a("paddingLeft")||0),i-=o.top+parseFloat(a("paddingTop")||0);
}var s=e.Transform.identity,l=this.properties.transform?this:this.parent,u=[];do u.push(l);while(l=l.parent);
for(;l=u.pop();){var h=l.instance();s=s.translate(h.left,h.top).times(h.transform);
}return s=s.invert(),e.vector(n*s.k+s.x,i*s.k+s.y)},e.Mark.prototype.event=function(t,r){
r=e.functor(r);var n=this.$handlers[t];return n?n instanceof Array?n.push(r):n=[n,r]:n=r,
this.$hasHandlers=!0,this.$handlers[t]=n,this},e.Mark.prototype.context=function(t,r,n){
function i(t,r){if(e.Mark.scene=t,a.index=r,t){var n,i=t.mark,o=i,l=[];do l.push(o),
s.push(t[r].data),o.index=r,o.scene=t,(o=o.parent)&&(r=t.parentIndex,t=t.parent);while(o);
var u=1;if(n=l.length-1,n>0)do o=l[n--],o.scale=u,u*=o.scene[o.index].transform.k;while(n);
i.scale=u;var h,c=i.children;if(c&&(h=c.length)>0){var p=i.scene[i.index];u*=p.transform.k;
var f=p.children;for(n=h;n--;)o=c[n],o.scene=f[n],o.scale=u}}}function o(t){if(t){
var e,r=t.mark,n=r.children;if(n)for(var i=n.length;i--;)e=n[i],e.scene=void 0,e.scale=1;
e=r;var o,a=0;do a++,delete e.index,(o=e.parent)&&(e.scene=void 0,e.scale=1);while(e=o);
a&&(s.length-=a)}}var a=e.Mark.prototype,s=e.Mark.stack,l=e.Mark.scene,u=a.index;if(t&&t===l&&r===u)try{
n.apply(this,s)}catch(h){throw e.error(h),h}finally{e.Mark.scene=l,a.index=u}else{
o(l,u),i(t,r);try{n.apply(this,s)}catch(h){throw e.error(h),h}finally{o(t,r),i(l,u);
}}},e.Mark.prototype.getEventHandler=function(t,e,r,n){var i=this.$handlers[t];return i?[i,e,r,n]:this.getParentEventHandler(t,e,r,n);
},e.Mark.prototype.getParentEventHandler=function(t,e,r,n){var i=e.parent;return i?i.mark.getEventHandler(t,i,e.parentIndex,n):void 0;
},e.Mark.dispatch=function(t,e,r,n){var i=e.mark.root;if(i.$transition)return!0;var o,a=i.$interceptors&&i.$interceptors[t];
if(a)for(var s=0,l=a.length;l>s&&!(o=a[s](t,n));s++)if(o===!1)return!0;return o||(o=e.mark.getEventHandler(t,e,r,n))?this.handle.apply(this,o):!1;
},e.Mark.handle=function(t,r,n,i){var o=r.mark;return o.context(r,n,function(){var r,n,a,s=e.Mark.stack.concat(i);
if(t instanceof Array){var l;for(r=0,n=t.length;n>r;r++)a=t[r].apply(o,s),a&&a.render&&(l||(l=[])).push(a);
if(l)for(r=0,n=l.length;n>r;r++)l[r].render()}else a=t.apply(o,s),a&&a.render&&a.render();
}),!0},e.Mark.prototype.addEventInterceptor=function(t,e,r){var n=this.root;if(n){
var i=n.$interceptors||(n.$interceptors={}),o=i[t]||(i[t]=[]);r?o.unshift(e):o.push(e);
}},e.Mark.prototype.eachInstance=function(t,r){function n(e,i,a){var l=e.length;if(l>0){
var u,h=i===s;h||(u=o[i]);for(var c=0;l>c;c++){var p=e[c];if(p.visible)if(i===s)t.call(r,e,c,a);else{
var f=p.children[u];if(f){var d=a.times(p.transform).translate(p.left,p.top);n(f,i+1,d);
}}}}}for(var i=this,o=[];i.parent;)o.unshift(i.childIndex),i=i.parent;var a=i.scene;
if(a){var s=o.length;n(a,0,e.Transform.identity)}},e.Mark.prototype.toScreenTransform=function(){
var t=e.Transform.identity;this instanceof e.Panel&&(t=t.translate(this.left(),this.top()).times(this.transform()));
var r=this.parent;if(r)do t=t.translate(r.left(),r.top()).times(r.transform());while(r=r.parent);
return t},e.Mark.prototype.transition=function(){return new e.Transition(this)},e.Mark.prototype.on=function(t){
return this["$"+t]=new e.Transient(this)},e.Mark.prototype.getShape=function(t,e,r){
var n=t[e];if(!n.visible)return null;null==r&&(r=0);var i="_shape_inset_"+r;return n[i]||(n[i]=this.getShapeCore(t,e,r));
},e.Mark.prototype.getShapeCore=function(t,r,n){var i=t[r],o=i.left,a=i.top,s=i.width,l=i.height;
if(n>0&&1>=n){var u=n*s,h=n*l;o+=u,a+=h,s-=2*u,l-=2*h}return new e.Shape.Rect(o,a,s,l);
},e.Mark.prototype.pointingRadiusMax=function(t){return arguments.length?(t=+t,this._pointingRadiusMax=isNaN(t)||0>t?0:t,
this):this._pointingRadiusMax},e.Mark.prototype._pointingRadiusMax=1/0,e.Anchor=function(t){
e.Mark.call(this),this.target=t,this.parent=t.parent},e.Anchor.prototype=e.extend(e.Mark).property("name",String),
e.Anchor.prototype.extend=function(t){return this.proto=t,this},e.Area=function(){
e.Mark.call(this)},e.Area.castSegmented=function(t){if(!t)return"";switch(t=String(t).toLowerCase()){
case"smart":case"full":break;default:t="full"}return t},e.Area.prototype=e.extend(e.Mark).property("width",Number).property("height",Number).property("lineWidth",Number).property("lineJoin",e.stringLowerCase).property("strokeMiterLimit",Number).property("lineCap",e.stringLowerCase).property("strokeDasharray",e.stringLowerCase).property("strokeStyle",e.fillStyle).property("fillStyle",e.fillStyle).property("segmented",e.Area.castSegmented).property("interpolate",e.stringLowerCase).property("tension",Number),
e.Area.prototype.type="area",e.Area.prototype.defaults=(new e.Area).extend(e.Mark.prototype.defaults).lineWidth(1.5).fillStyle(e.Colors.category20().by(e.parent)).interpolate("linear").tension(.7).lineJoin("miter").strokeMiterLimit(8).lineCap("butt").strokeDasharray("none"),
e.Area.prototype.buildImplied=function(t){null==t.height&&(t.height=0),null==t.width&&(t.width=0),
e.Mark.prototype.buildImplied.call(this,t)},e.Area.fixed={lineWidth:1,lineJoin:1,
strokeMiterLimit:1,lineCap:1,strokeStyle:1,strokeDasharray:1,fillStyle:1,segmented:1,
interpolate:1,tension:1},e.Area.prototype.bind=function(){e.Mark.prototype.bind.call(this);
for(var t=this.binds,r=t.required,n=t.optional,i=0,o=n.length;o>i;i++){var a=n[i];
a.fixed=a.name in e.Area.fixed,"segmented"==a.name&&(r.push(a),n.splice(i,1),i--,
o--)}this.binds.$required=r,this.binds.$optional=n},e.Area.prototype.buildInstance=function(t){
function r(t){return!t.fixed||(i.push(t),!1)}var n=this.binds;if(this.index){var i=n.fixed;
i||(i=n.fixed=[],n.required=n.required.filter(r),this.scene[0].segmented||(n.optional=n.optional.filter(r)));
var o=i.length;if(o)for(var a=this.scene[0],s=0;o>s;s++){var l=i[s].name;t[l]=a[l];
}}else n.required=n.$required,n.optional=n.$optional,n.fixed=null;e.Mark.prototype.buildInstance.call(this,t);
},e.Area.prototype.anchor=function(t){return e.Mark.prototype.anchor.call(this,t).interpolate(function(){
return this.scene.target[this.index].interpolate}).eccentricity(function(){return this.scene.target[this.index].eccentricity;
}).tension(function(){return this.scene.target[this.index].tension})},e.Area.prototype.getEventHandler=function(t,r,n,i){
var o=r[n],a=1===e.Scene.mousePositionEventSet[t]&&(!o.segmented||"smart"===o.segmented);
if(!a)return e.Mark.prototype.getEventHandler.call(this,t,r,n,i);var s,l="mousemove"===t?this.$handlers.mouseover:null,u=this.$handlers[t],h=u||l;
return h&&(s=this.getNearestInstanceToMouse(r,n),l&&!this.filterMouseMove(r,s)&&(l=null,
h=u)),h?(u&&l&&(h=[].concat(u,l)),[h,r,s,i]):this.getParentEventHandler(t,r,n,i)},
e.Area.prototype.filterMouseMove=function(t,e){var r=this._mouseOverScene;return r&&r===t&&this._mouseOverIndex===e?void 0:(this._mouseOverScene=t,
this._mouseOverIndex=e,!0)},e.Area.prototype.getNearestInstanceToMouse=function(t,e){
for(var r=this.mouse(),n=1/0,i=null,o=e,a=t.length;a>o;o++){var s=this.getShape(t,o);
if(s){if(s.containsPoint(r))return o;var l=s.distance2(r).dist2;n>l&&(n=l,i=o)}}return null!=i?i:e;
},e.Area.prototype.getShapeCore=function(t,r){var n=t[r],i=n.width||0,o=n.height||0,a=n.left,s=n.top,l=r+1<t.length?t[r+1]:null;
if(!l||!l.visible)return new e.Shape.Line(a,s,a+i,s+o);var u=l.left,h=l.top,c=l.height||0,p=l.width||0;
return new e.Shape.Polygon([new e.Vector(a,s),new e.Vector(u,h),new e.Vector(u+p,h+c),new e.Vector(a+i,s+o)]);
},e.Bar=function(){e.Mark.call(this)},e.Bar.prototype=e.extend(e.Mark).property("width",Number).property("height",Number).property("lineWidth",Number).property("strokeStyle",e.fillStyle).property("fillStyle",e.fillStyle).property("lineCap",e.stringLowerCase).property("strokeDasharray",e.stringLowerCase),
e.Bar.prototype.type="bar",e.Bar.prototype.defaults=(new e.Bar).extend(e.Mark.prototype.defaults).lineWidth(1.5).fillStyle(e.Colors.category20().by(e.parent)).lineCap("butt").strokeDasharray("none"),
e.Dot=function(){e.Mark.call(this)},e.Dot.prototype=e.extend(e.Mark).property("shape",e.stringLowerCase).property("shapeAngle",Number).property("shapeRadius",Number).property("shapeSize",Number).property("aspectRatio",Number).property("lineWidth",Number).property("strokeStyle",e.fillStyle).property("lineCap",e.stringLowerCase).property("strokeDasharray",e.stringLowerCase).property("fillStyle",e.fillStyle),
e.Dot.prototype.type="dot",e.Dot.prototype.defaults=(new e.Dot).extend(e.Mark.prototype.defaults).shape("circle").aspectRatio(1).lineWidth(1.5).strokeStyle(e.Colors.category10().by(e.parent)).lineCap("butt").strokeDasharray("none"),
e.Dot.prototype.anchor=function(t){return e.Mark.prototype.anchor.call(this,t).left(function(){
var t=this.scene.target[this.index];switch(this.name()){case"bottom":case"top":case"center":
return t.left;case"left":return null}return t.left+t._width/2}).right(function(){
var t=this.scene.target[this.index];return"left"==this.name()?t.right+t._width/2:null;
}).top(function(){var t=this.scene.target[this.index];switch(this.name()){case"left":
case"right":case"center":return t.top;case"top":return null}return t.top+t._height/2;
}).bottom(function(){var t=this.scene.target[this.index];return"top"==this.name()?t.bottom+t._height/2:null;
}).textAlign(function(){switch(this.name()){case"left":return"right";case"bottom":
case"top":case"center":return"center"}return"left"}).textBaseline(function(){switch(this.name()){
case"right":case"left":case"center":return"middle";case"bottom":return"top"}return"bottom";
})},e.Dot.prototype.buildImplied=function(t){var r=t.shapeRadius,n=t.shapeSize,i=t.aspectRatio||1;
null==r?null==n?(n=t.shapeSize=20.25,r=t.shapeRadius=4.5):r=t.shapeRadius=Math.sqrt(n):null==n&&(n=t.shapeSize=r*r);
var o,a;1===i||0>i?o=a=2*r:(o=2*r/Math.sqrt(i),a=i*o),t._height=o,t._width=a,e.Mark.prototype.buildImplied.call(this,t);
},e.Dot.prototype.width=function(){return this.instance()._width},e.Dot.prototype.height=function(){
return this.instance()._height},e.Dot.prototype.getShapeCore=function(t,r){var n=t[r],i=n._width,o=n._height,a=n.left,s=n.top;
switch(n.shape){case"diamond":i*=Math.SQRT2,o*=Math.SQRT2;case"square":case"cross":
return new e.Shape.Rect(a-o/2,s-i/2,o,i)}return new e.Shape.Circle(a,s,n.shapeRadius);
},e.Label=function(){e.Mark.call(this)},e.Label.prototype=e.extend(e.Mark).property("text",String).property("font",String).property("textAngle",Number).property("textStyle",e.color).property("textAlign",e.stringLowerCase).property("textBaseline",e.stringLowerCase).property("textMargin",Number).property("textDecoration",String).property("textShadow",String),
e.Label.prototype.type="label",e.Label.prototype.defaults=(new e.Label).extend(e.Mark.prototype.defaults).events("none").text(e.identity).font("10px sans-serif").textAngle(0).textStyle("black").textAlign("left").textBaseline("bottom").textMargin(3),
e.Label.prototype.getShapeCore=function(t,r,n){var i=t[r],o=e.Text.measure(i.text,i.font),a=i.left,s=i.top,l=o.width,u=o.height;
if(n>0&&1>=n){var h=n*l,c=n*u;a+=h,s+=c,l-=2*h,u-=2*c}return e.Label.getPolygon(l,u,i.textAlign,i.textBaseline,i.textAngle,i.textMargin).apply(e.Transform.identity.translate(a,s));
},e.Label.getPolygon=function(t,r,n,i,o,a){var s,l;switch(i){case"middle":l=r/2;break;
case"top":l=a+r;break;case"bottom":l=-a}switch(n){case"right":s=-a-t;break;case"center":
s=-t/2;break;case"left":s=a}var u=new e.Vector(s,l),h=u.plus(t,0),c=h.plus(0,-r),p=u.plus(0,-r);
return 0!==o&&(u=u.rotate(o),h=h.rotate(o),p=p.rotate(o),c=c.rotate(o)),new e.Shape.Polygon([u,h,c,p]);
},e.Line=function(){e.Mark.call(this)},e.Line.prototype=e.extend(e.Mark).property("lineWidth",Number).property("lineJoin",e.stringLowerCase).property("strokeMiterLimit",Number).property("lineCap",e.stringLowerCase).property("strokeStyle",e.fillStyle).property("strokeDasharray",e.stringLowerCase).property("fillStyle",e.fillStyle).property("segmented",e.Area.castSegmented).property("interpolate",e.stringLowerCase).property("eccentricity",Number).property("tension",Number),
e.Line.prototype.type="line",e.Line.prototype.defaults=(new e.Line).extend(e.Mark.prototype.defaults).lineWidth(1.5).strokeStyle(e.Colors.category10().by(e.parent)).interpolate("linear").eccentricity(0).tension(.7).lineJoin("miter").strokeMiterLimit(8).lineCap("butt").strokeDasharray("none"),
e.Line.prototype.bind=e.Area.prototype.bind,e.Line.prototype.buildInstance=e.Area.prototype.buildInstance,
e.Line.prototype.getEventHandler=e.Area.prototype.getEventHandler,e.Line.prototype.getNearestInstanceToMouse=e.Area.prototype.getNearestInstanceToMouse,
e.Line.prototype.filterMouseMove=e.Area.prototype.filterMouseMove,e.Line.prototype.anchor=function(t){
return e.Area.prototype.anchor.call(this,t).textAlign(function(){switch(this.name()){
case"left":return"right";case"bottom":case"top":case"center":return"center";case"right":
return"left"}}).textBaseline(function(){switch(this.name()){case"right":case"left":
case"center":return"middle";case"top":return"bottom";case"bottom":return"top"}})},
e.Line.prototype.getShapeCore=function(t,r){var n=t[r],i=r+1<t.length?t[r+1]:null;
return null!=i&&i.visible?new e.Shape.Line(n.left,n.top,i.left,i.top):new e.Shape.Point(n.left,n.top);
},e.Rule=function(){e.Mark.call(this)},e.Rule.prototype=e.extend(e.Mark).property("width",Number).property("height",Number).property("lineWidth",Number).property("strokeStyle",e.fillStyle).property("lineCap",e.stringLowerCase).property("strokeDasharray",e.stringLowerCase),
e.Rule.prototype.type="rule",e.Rule.prototype.defaults=(new e.Rule).extend(e.Mark.prototype.defaults).lineWidth(1).strokeStyle("black").antialias(!1).lineCap("butt").strokeDasharray("none"),
e.Rule.prototype.anchor=e.Line.prototype.anchor,e.Rule.prototype.buildImplied=function(t){
var r=t.left,n=t.right;t.top,t.bottom,null!=t.width||null==r&&null==n||null!=n&&null!=r?t.height=0:t.width=0,
e.Mark.prototype.buildImplied.call(this,t)},e.Rule.prototype.getShapeCore=function(t,r){
var n=t[r];return new e.Shape.Line(n.left,n.top,n.left+n.width,n.top+n.height)},e.Panel=function(){
e.Bar.call(this),this.children=[],this.root=this,this.$dom=e.$&&e.$.s},e.Panel.prototype=e.extend(e.Bar).property("transform").property("overflow",e.stringLowerCase).property("canvas",function(t){
return"string"==typeof t?document.getElementById(t):t}),e.Panel.prototype.type="panel",
e.Panel.prototype.isPointingBarrier=!1,e.Panel.prototype._zOrderChildCount=0,e.Panel.prototype.defaults=(new e.Panel).extend(e.Bar.prototype.defaults).fillStyle(null).overflow("visible"),
e.Panel.prototype.anchor=function(t){var r=e.Bar.prototype.anchor.call(this,t);return r.parent=this,
r},e.Panel.prototype.add=function(t){var e=new t;e.parent=this,e.root=this.root,e.childIndex=this.children.length,
this.children.push(e);var r=+e._zOrder||0;return 0!==r&&this._zOrderChildCount++,
e},e.Panel.prototype.bind=function(){e.Mark.prototype.bind.call(this);for(var t=this.children,r=0,n=t.length;n>r;r++)t[r].bind();
},e.Panel.prototype.buildInstance=function(t){if(e.Bar.prototype.buildInstance.call(this,t),
t.visible){var r=this.scale*t.transform.k;e.Mark.prototype.index=-1;for(var n,i=this.children,o=t.children||(t.children=[]),a=0,s=i.length;s>a;a++)n=i[a],
n.scene=o[a],n.scale=r,n.build();for(a=s;a--;)n=i[a],o[a]=n.scene,delete n.scene,
delete n.scale;o.length=s}},e.Panel.prototype.buildImplied=function(t){this.parent||this._buildRootInstanceImplied(t)?(t.transform||(t.transform=e.Transform.identity),
e.Mark.prototype.buildImplied.call(this,t)):t.visible=!1},e.Panel.prototype._buildRootInstanceImplied=function(t){
var e=t.canvas;if(e){if(!this._rootInstanceStealCanvas(t,e))return!1;this._rootInstanceInitCanvas(t,e);
}else t.canvas=this._rootInstanceGetInlineCanvas(t);return!0},e.Panel.prototype._rootInstanceStealCanvas=function(t,r){
var n=r.$panel;if(n!==this){if(n){if(this.$lastCreateId)return!1;n._disposeRootPanel(),
this._updateCreateId(r)}r.$panel=this,e.removeChildren(r)}else this._updateCreateId(r);
return!0},e.Panel.prototype._registerBoundEvent=function(t,e,r,n){if(t.removeEventListener){
var i=this._boundEvents||(this._boundEvents=[]);i.push([t,e,r,n])}},e.Panel.prototype.dispose=function(){
var t=this.root,e=t.scene;t._disposeRootPanel();var r=e?t.canvas():null;t.canvas(null),
r&&(r.$panel=null),t.binds=null,e&&(e.$defs=null,e.$g=null,t.scene=null)},e.Panel.prototype._disposeRootPanel=function(){
var t=this.$transition;t&&t.stop();var e=this._boundEvents;if(e){this._boundEvents=null;
for(var r=0,n=e.length;n>r;r++){var i=e[r];i[0].removeEventListener(i[1],i[2],i[3]);
}}},e.Panel.prototype._rootInstanceInitCanvas=function(t,r){var n,i,o;null==t.width&&(o=e.cssStyle(r),
n=parseFloat(o("width")||0),t.width=n-t.left-t.right),null==t.height&&(o||(o=e.cssStyle(r)),
i=parseFloat(o("height")||0),t.height=i-t.top-t.bottom),o=null},e.Panel.prototype._rootInstanceGetInlineCanvas=function(){
var t,e=this.$canvas||(this.$canvas=[]);if(!(t=e[this.index]))if(t=e[this.index]=document.createElement("span"),
this.$dom)this.$dom.parentNode.insertBefore(t,this.$dom);else{for(var r=document.body;r.lastChild&&r.lastChild.tagName;)r=r.lastChild;
r!=document.body&&(r=r.parentNode),r.appendChild(t)}return t},e.Panel.prototype._updateCreateId=function(t){
this.$lastCreateId=t.$pvCreateId=(t.$pvCreateId||0)+1},e.Image=function(){e.Bar.call(this);
},e.Image.prototype=e.extend(e.Bar).property("url",String).property("imageWidth",Number).property("imageHeight",Number),
e.Image.prototype.type="image",e.Image.prototype.defaults=(new e.Image).extend(e.Bar.prototype.defaults).fillStyle(null),
e.Image.prototype.image=function(t){return this.$image=function(){var r=t.apply(this,arguments);
return null==r?e.Color.transparent:"string"==typeof r?e.color(r):r},this},e.Image.prototype.bind=function(){
e.Bar.prototype.bind.call(this);var t=this.binds,r=this;do t.image=r.$image;while(!t.image&&(r=r.proto));
},e.Image.prototype.buildImplied=function(t){if(e.Bar.prototype.buildImplied.call(this,t),
t.visible&&(null==t.imageWidth&&(t.imageWidth=t.width),null==t.imageHeight&&(t.imageHeight=t.height),
null==t.url&&this.binds.image)){var r,n=this.$canvas||(this.$canvas=document.createElement("canvas")),i=n.getContext("2d"),o=t.imageWidth,a=t.imageHeight,s=e.Mark.stack;
n.width=o,n.height=a,r=(t.image=i.createImageData(o,a)).data,s.unshift(null,null);
for(var l=0,u=0;a>l;l++){s[1]=l;for(var h=0;o>h;h++){s[0]=h;var c=this.binds.image.apply(this,s);
r[u++]=c.r,r[u++]=c.g,r[u++]=c.b,r[u++]=255*c.a}}s.splice(0,2)}},e.Wedge=function(){
e.Mark.call(this)},e.Wedge.prototype=e.extend(e.Mark).property("startAngle",Number).property("endAngle",Number).property("angle",Number).property("innerRadius",Number).property("outerRadius",Number).property("lineWidth",Number).property("strokeStyle",e.fillStyle).property("lineJoin",e.stringLowerCase).property("strokeMiterLimit",Number).property("lineCap",e.stringLowerCase).property("strokeDasharray",e.stringLowerCase).property("fillStyle",e.fillStyle),
e.Wedge.prototype.type="wedge",e.Wedge.prototype.defaults=(new e.Wedge).extend(e.Mark.prototype.defaults).startAngle(function(){
var t=this.sibling();return t?t.endAngle:-Math.PI/2}).innerRadius(0).lineWidth(1.5).strokeStyle(null).fillStyle(e.Colors.category20().by(e.index)).lineJoin("miter").strokeMiterLimit(8).lineCap("butt").strokeDasharray("none"),
e.Wedge.prototype.midRadius=function(){return(this.innerRadius()+this.outerRadius())/2;
},e.Wedge.prototype.midAngle=function(){return(this.startAngle()+this.endAngle())/2;
},e.Wedge.prototype.anchor=function(t){function r(t){return t.innerRadius||t.angle<2*Math.PI;
}function n(t){return(t.innerRadius+t.outerRadius)/2}function i(t){return(t.startAngle+t.endAngle)/2;
}return e.Mark.prototype.anchor.call(this,t).left(function(){var t=this.scene.target[this.index];
if(r(t))switch(this.name()){case"outer":return t.left+t.outerRadius*Math.cos(i(t));
case"inner":return t.left+t.innerRadius*Math.cos(i(t));case"start":return t.left+n(t)*Math.cos(t.startAngle);
case"center":return t.left+n(t)*Math.cos(i(t));case"end":return t.left+n(t)*Math.cos(t.endAngle);
}return t.left}).top(function(){var t=this.scene.target[this.index];if(r(t))switch(this.name()){
case"outer":return t.top+t.outerRadius*Math.sin(i(t));case"inner":return t.top+t.innerRadius*Math.sin(i(t));
case"start":return t.top+n(t)*Math.sin(t.startAngle);case"center":return t.top+n(t)*Math.sin(i(t));
case"end":return t.top+n(t)*Math.sin(t.endAngle)}return t.top}).textAlign(function(){
var t=this.scene.target[this.index];if(r(t))switch(this.name()){case"outer":return e.Wedge.upright(i(t))?"right":"left";
case"inner":return e.Wedge.upright(i(t))?"left":"right"}return"center"}).textBaseline(function(){
var t=this.scene.target[this.index];if(r(t))switch(this.name()){case"start":return e.Wedge.upright(t.startAngle)?"top":"bottom";
case"end":return e.Wedge.upright(t.endAngle)?"bottom":"top"}return"middle"}).textAngle(function(){
var t=this.scene.target[this.index],n=0;if(r(t))switch(this.name()){case"center":
case"inner":case"outer":n=i(t);break;case"start":n=t.startAngle;break;case"end":n=t.endAngle;
}return e.Wedge.upright(n)?n:n+Math.PI})},e.Wedge.upright=function(t){return t%=2*Math.PI,
t=0>t?2*Math.PI+t:t,t<Math.PI/2||t>=3*Math.PI/2},e.Wedge.prototype.buildImplied=function(t){
null==t.angle?t.angle=t.endAngle-t.startAngle:null==t.endAngle&&(t.endAngle=t.startAngle+t.angle),
e.Mark.prototype.buildImplied.call(this,t)},e.Wedge.prototype.getShapeCore=function(t,r){
var n=t[r];return new e.Shape.Wedge(n.left,n.top,n.innerRadius,n.outerRadius,n.startAngle,n.angle);
},e.Ease=function(){function t(t){return function(e){return 1-t(1-e)}}function r(t){
return function(e){return.5*(.5>e?t(2*e):2-t(2-2*e))}}function n(t){return function(e){
return 0>e?0:e>1?1:Math.pow(e,t)}}function i(t){return 1-Math.cos(t*Math.PI/2)}function o(t){
return t?Math.pow(2,10*(t-1))-.001:0}function a(t){return-(Math.sqrt(1-t*t)-1)}function s(t,e){
var r;return e||(e=.45),!t||1>t?(t=1,r=e/4):r=e/(2*Math.PI)*Math.asin(1/t),function(n){
return 0>=n||n>=1?n:-(t*Math.pow(2,10*--n)*Math.sin(2*(n-r)*Math.PI/e))}}function l(t){
return t||(t=1.70158),function(e){return e*e*((t+1)*e-t)}}function u(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375;
}var h=n(2),c=n(3),p=s(),f=l(),d={linear:e.identity,"quad-in":h,"quad-out":t(h),"quad-in-out":r(h),
"quad-out-in":r(t(h)),"cubic-in":c,"cubic-out":t(c),"cubic-in-out":r(c),"cubic-out-in":r(t(c)),
"sin-in":i,"sin-out":t(i),"sin-in-out":r(i),"sin-out-in":r(t(i)),"exp-in":o,"exp-out":t(o),
"exp-in-out":r(o),"exp-out-in":r(t(o)),"circle-in":a,"circle-out":t(a),"circle-in-out":r(a),
"circle-out-in":r(t(a)),"elastic-in":p,"elastic-out":t(p),"elastic-in-out":r(p),"elastic-out-in":r(t(p)),
"back-in":f,"back-out":t(f),"back-in-out":r(f),"back-out-in":r(t(f)),"bounce-in":u,
"bounce-out":t(u),"bounce-in-out":r(u),"bounce-out-in":r(t(u))};return e.ease=function(t){
return d[t]},{reverse:t,reflect:r,linear:function(){return e.identity},sin:function(){
return i},exp:function(){return o},circle:function(){return a},elastic:s,back:l,bounce:u,
poly:n}}(),e.Transient=function(t){e.Mark.call(this),this.fillStyle(null).strokeStyle(null).textStyle(null),
this.on=function(e){return t.on(e)}},e.Transient.prototype=e.extend(e.Mark),!function(){
function t(t){for(var e={},r=t.length;r--;){var n=t[r],i=n.id;i&&(e[i]=n)}return e;
}function r(t,r,n,i){var o;if(r in s){var a=e.Scale.interpolator(n[r],i[r]);o=function(t){
n[r]=a(t)}}else o=function(t){t>.5&&(n[r]=i[r])};o.next=t.head,t.head=o}function n(t,e,n){
for(var i in e)"children"!==i&&e[i]!=n[i]&&r(t,i,e,n);var a=e.children;if(a)for(var s=n.children,l=0,u=a.length;u>l;l++)o(t,a[l],s[l]);
}function i(t,e,r,n){var i,o=Object.create(t[e]),a=t.mark,s=a.root.scene;n.target&&(i=n.target[n.length])&&(t=Object.create(t),
t.target=Object.create(n.target),t.target[e]=i),r||(r=l);var u=r.$properties,h=r.$propertiesMap;
return u=a.binds.optional.filter(function(t){return!(t.name in h)}).concat(u),a.context(t,e,function(){
this.buildProperties(o,u),this.buildImplied(o)}),a.root.scene=s,o}function o(e,r,o){
for(var a,s,l=r.mark,u=t(r),h=t(o),c=0,p=r.length;p>c;c++)if(a=r[c],s=a.id?h[a.id]:o[c],
a.index=c,a.visible){if(!s||!s.visible){var f=i(r,c,l.$exit,o);a.transition=s?2:(o.push(f),
1),s=f}n(e,a,s)}for(c=0,p=o.length;p>c;c++)if(s=o[c],a=s.id?u[s.id]:r[c],(!a||!a.visible)&&s.visible){
var d=i(o,c,l.$enter,r);a?r[a.index]=d:r.push(d),n(e,d,s)}}function a(t){for(var e=0,r=0;e<t.length;e++){
var n=t[e];1!=n.transition&&(t[r++]=n,2==n.transition&&(n.visible=!1),n.children&&n.children.forEach(a));
}t.length=r}var s={top:1,left:1,right:1,bottom:1,width:1,height:1,innerRadius:1,outerRadius:1,
radius:1,shapeRadius:1,shapeSize:1,startAngle:1,endAngle:1,angle:1,fillStyle:1,strokeStyle:1,
lineWidth:1,eccentricity:1,tension:1,textAngle:1,textStyle:1,textMargin:1},l=new e.Transient;
e.Transition=function(t){function r(e){var r=t.root.$transition===l;if(r&&(t.root.$transition=null),
null!=n&&(clearInterval(n),n=null),r&&c(t.scene),i){var o=i;i=null,o(e)}return e}
var n,i,s,l=this,u=e.ease("cubic-in-out"),h=250,c=function(t){s||(s=!0,a(t))};l.ease=function(t){
return arguments.length?(u="function"==typeof t?t:e.ease(t),l):u},l.duration=function(t){
return arguments.length?(h=Number(t),l):h},l.start=function(a){if(t.parent)throw new Error("Animated partial rendering is not supported.");
i=a;var s=t.root;if(s.$transition)try{s.$transition.stop()}catch(p){return r(!1)}
var f,d;s.$transition=l,s._renderId++;var y=t.scene;t.scene=null;var g=e.Mark.prototype.index;
try{t.bind(),t.build();var m=t.scene;t.scene=y,e.Mark.prototype.index=g,d=Date.now(),
f={},o(f,y,m)}catch(p){return e.Mark.prototype.index=g,r(!1)}if(!f.head)return r(!0);
var v=function(){var n=Math.max(0,Math.min(1,(Date.now()-d)/h)),i=u(n),o=f.head;do o(i);while(o=o.next);
1===n?(c(t.scene),e.Scene.updateAll(y),r(!0)):e.Scene.updateAll(y)};n=setInterval(function(){
try{v()}catch(t){r(!1)}},24)},l.stop=function(){r(!0)}}}(),e.simulation=function(t){
return new e.Simulation(t)},e.Simulation=function(t){for(var e=0;e<t.length;e++)this.particle(t[e]);
},e.Simulation.prototype.particle=function(t){return t.next=this.particles,isNaN(t.px)&&(t.px=t.x),
isNaN(t.py)&&(t.py=t.y),isNaN(t.fx)&&(t.fx=0),isNaN(t.fy)&&(t.fy=0),this.particles=t,
this},e.Simulation.prototype.force=function(t){return t.next=this.forces,this.forces=t,
this},e.Simulation.prototype.constraint=function(t){return t.next=this.constraints,
this.constraints=t,this},e.Simulation.prototype.stabilize=function(t){var r;arguments.length||(t=3);
for(var n=0;t>n;n++){var i=new e.Quadtree(this.particles);for(r=this.constraints;r;r=r.next)r.apply(this.particles,i);
}for(var o=this.particles;o;o=o.next)o.px=o.x,o.py=o.y;return this},e.Simulation.prototype.step=function(){
var t,r,n;for(t=this.particles;t;t=t.next){var i=t.px,o=t.py;t.px=t.x,t.py=t.y,t.x+=t.vx=t.x-i+t.fx,
t.y+=t.vy=t.y-o+t.fy}var a=new e.Quadtree(this.particles);for(n=this.constraints;n;n=n.next)n.apply(this.particles,a);
for(t=this.particles;t;t=t.next)t.fx=t.fy=0;for(r=this.forces;r;r=r.next)r.apply(this.particles,a);
},e.Quadtree=function(t){function r(t,e,r,i,o,a){if(!isNaN(e.x)&&!isNaN(e.y))if(t.leaf)if(t.p)if(Math.abs(t.p.x-e.x)+Math.abs(t.p.y-e.y)<.01)n(t,e,r,i,o,a);else{
var s=t.p;t.p=null,n(t,s,r,i,o,a),n(t,e,r,i,o,a)}else t.p=e;else n(t,e,r,i,o,a)}function n(t,n,i,o,a,s){
var l=.5*(i+a),u=.5*(o+s),h=n.x>=l,c=n.y>=u;switch(t.leaf=!1,(c<<1)+h){case 0:t=t.c1||(t.c1=new e.Quadtree.Node);
break;case 1:t=t.c2||(t.c2=new e.Quadtree.Node);break;case 2:t=t.c3||(t.c3=new e.Quadtree.Node);
break;case 3:t=t.c4||(t.c4=new e.Quadtree.Node)}h?i=l:a=l,c?o=u:s=u,r(t,n,i,o,a,s);
}var i,o=Number.POSITIVE_INFINITY,a=o,s=Number.NEGATIVE_INFINITY,l=s;for(i=t;i;i=i.next)i.x<o&&(o=i.x),
i.y<a&&(a=i.y),i.x>s&&(s=i.x),i.y>l&&(l=i.y);var u=s-o,h=l-a;for(u>h?l=a+u:s=o+h,
this.xMin=o,this.yMin=a,this.xMax=s,this.yMax=l,this.root=new e.Quadtree.Node,i=t;i;i=i.next)r(this.root,i,o,a,s,l);
},e.Quadtree.Node=function(){this.leaf=!0,this.c1=null,this.c2=null,this.c3=null,
this.c4=null,this.p=null},e.Force={},e.Force.charge=function(t){function e(r){function n(t){
e(t),r.cn+=t.cn,i+=t.cn*t.cx,o+=t.cn*t.cy}var i=0,o=0;r.cn=0,r.leaf||(r.c1&&n(r.c1),
r.c2&&n(r.c2),r.c3&&n(r.c3),r.c4&&n(r.c4)),r.p&&(r.cn+=t,i+=t*r.p.x,o+=t*r.p.y),r.cx=i/r.cn,
r.cy=o/r.cn}function r(e,n,o,l,u,h){var c=e.cx-n.x,p=e.cy-n.y,f=1/Math.sqrt(c*c+p*p);
if(e.leaf&&e.p!=n||s>(u-o)*f){if(a>f)return;f>i&&(f=i);var d=e.cn*f*f*f,y=c*d,g=p*d;
n.fx+=y,n.fy+=g}else if(!e.leaf){var m=.5*(o+u),v=.5*(l+h);if(e.c1&&r(e.c1,n,o,l,m,v),
e.c2&&r(e.c2,n,m,l,u,v),e.c3&&r(e.c3,n,o,v,m,h),e.c4&&r(e.c4,n,m,v,u,h),a>f)return;
if(f>i&&(f=i),e.p&&e.p!=n){var d=t*f*f*f,y=c*d,g=p*d;n.fx+=y,n.fy+=g}}}var n=2,i=1/n,o=500,a=1/o,s=.9,l={};
return arguments.length||(t=-40),l.constant=function(e){return arguments.length?(t=Number(e),
l):t},l.domain=function(t,e){return arguments.length?(n=Number(t),i=1/n,o=Number(e),
a=1/o,l):[n,o]},l.theta=function(t){return arguments.length?(s=Number(t),l):s},l.apply=function(t,n){
e(n.root);for(var i=t;i;i=i.next)r(n.root,i,n.xMin,n.yMin,n.xMax,n.yMax)},l},e.Force.drag=function(t){
var e={};return arguments.length||(t=.1),e.constant=function(r){return arguments.length?(t=r,
e):t},e.apply=function(e){if(t)for(var r=e;r;r=r.next)r.fx-=t*r.vx,r.fy-=t*r.vy},
e},e.Force.spring=function(t){var e,r,n=.1,i=20,o={};return arguments.length||(t=.1),
o.links=function(t){return arguments.length?(e=t,r=t.map(function(t){return 1/Math.sqrt(Math.max(t.sourceNode.linkDegree,t.targetNode.linkDegree));
}),o):e},o.constant=function(e){return arguments.length?(t=Number(e),o):t},o.damping=function(t){
return arguments.length?(n=Number(t),o):n},o.length=function(t){return arguments.length?(i=Number(t),
o):i},o.apply=function(){for(var o=0;o<e.length;o++){var a=e[o].sourceNode,s=e[o].targetNode,l=a.x-s.x,u=a.y-s.y,h=Math.sqrt(l*l+u*u),c=h?1/h:1,p=t*r[o],f=n*r[o],d=(p*(h-i)+f*(l*(a.vx-s.vx)+u*(a.vy-s.vy))*c)*c,y=-d*(h?l:.01*(.5-Math.random())),g=-d*(h?u:.01*(.5-Math.random()));
a.fx+=y,a.fy+=g,s.fx-=y,s.fy-=g}},o},e.Constraint={},e.Constraint.collision=function(t){
function e(s,l,u,h,c,p){if(!s.leaf){var f=.5*(u+c),d=.5*(h+p),y=d>i,g=a>d,m=f>n,v=o>f;
y&&(s.c1&&m&&e(s.c1,l,u,h,f,d),s.c2&&v&&e(s.c2,l,f,h,c,d)),g&&(s.c3&&m&&e(s.c3,l,u,d,f,p),
s.c4&&v&&e(s.c4,l,f,d,c,p))}if(s.p&&s.p!=l){var x=l.x-s.p.x,b=l.y-s.p.y,k=Math.sqrt(x*x+b*b),S=r+t(s.p);
if(S>k){var M=(k-S)/k*.5;x*=M,b*=M,l.x-=x,l.y-=b,s.p.x+=x,s.p.y+=b}}}var r,n,i,o,a,s=1,l={};
return arguments.length||(r=10),l.repeat=function(t){return arguments.length?(s=Number(t),
l):s},l.apply=function(l,u){var h,c,p=-1/0;for(h=l;h;h=h.next)c=t(h),c>p&&(p=c);for(var f=0;s>f;f++)for(h=l;h;h=h.next)c=(r=t(h))+p,
n=h.x-c,o=h.x+c,i=h.y-c,a=h.y+c,e(u.root,h,u.xMin,u.yMin,u.xMax,u.yMax)},l},e.Constraint.position=function(t){
var e=1,r={};return arguments.length||(t=function(t){return t.fix}),r.alpha=function(t){
return arguments.length?(e=Number(t),r):e},r.apply=function(r){for(var n=r;n;n=n.next){
var i=t(n);i&&(n.x+=(i.x-n.x)*e,n.y+=(i.y-n.y)*e,n.fx=n.fy=n.vx=n.vy=0)}},r},e.Constraint.bound=function(){
var t,e,r={};return r.x=function(e,r){return arguments.length?(t={min:Math.min(e,r),
max:Math.max(e,r)},this):t},r.y=function(t,r){return arguments.length?(e={min:Math.min(t,r),
max:Math.max(t,r)},this):e},r.apply=function(r){if(t)for(var n=r;n;n=n.next)n.x=n.x<t.min?t.min:n.x>t.max?t.max:n.x;
if(e)for(var n=r;n;n=n.next)n.y=n.y<e.min?e.min:n.y>e.max?e.max:n.y},r},e.Layout=function(){
e.Panel.call(this)},e.Layout.prototype=e.extend(e.Panel),e.Layout.prototype.property=e.Mark.prototype.localProperty,
e.Layout.Network=function(){e.Layout.call(this);var t=this;this.$id=e.id(),(this.node=(new e.Mark).data(function(){
return t.nodes()}).strokeStyle("#1f77b4").fillStyle("#fff").left(function(t){return t.x;
}).top(function(t){return t.y})).parent=this,this.link=(new e.Mark).extend(this.node).data(function(t){
return[t.sourceNode,t.targetNode]}).fillStyle(null).lineWidth(function(t,e){return 1.5*e.linkValue;
}).strokeStyle("rgba(0,0,0,.2)"),this.link.add=function(r){return t.add(e.Panel).data(function(){
return t.links()}).add(r).extend(this)},(this.label=(new e.Mark).extend(this.node).textMargin(7).textBaseline("middle").text(function(t){
return t.nodeName||t.nodeValue}).textAngle(function(t){var r=t.midAngle;return e.Wedge.upright(r)?r:r+Math.PI;
}).textAlign(function(t){return e.Wedge.upright(t.midAngle)?"left":"right"})).parent=this;
},e.Layout.Network.prototype=e.extend(e.Layout).property("nodes",function(t){return t.map(function(t,e){
return"object"!=typeof t&&(t={nodeValue:t}),t.index=e,t})}).property("links",function(t){
return t.map(function(t){return isNaN(t.linkValue)&&(t.linkValue=isNaN(t.value)?1:t.value),
t})}),e.Layout.Network.prototype.reset=function(){return this.$id=e.id(),this},e.Layout.Network.prototype.buildProperties=function(t,r){
(t.$id||0)<this.$id&&e.Layout.prototype.buildProperties.call(this,t,r)},e.Layout.Network.prototype.buildImplied=function(t){
return e.Layout.prototype.buildImplied.call(this,t),t.$id>=this.$id?!0:(t.$id=this.$id,
t.nodes.forEach(function(t){t.linkDegree=0}),void t.links.forEach(function(e){var r=e.linkValue;
(e.sourceNode||(e.sourceNode=t.nodes[e.source])).linkDegree+=r,(e.targetNode||(e.targetNode=t.nodes[e.target])).linkDegree+=r;
}))},e.Layout.Hierarchy=function(){e.Layout.Network.call(this),this.link.strokeStyle("#ccc");
},e.Layout.Hierarchy.prototype=e.extend(e.Layout.Network),e.Layout.Hierarchy.prototype.buildImplied=function(t){
t.links||(t.links=e.Layout.Hierarchy.links.call(this)),e.Layout.Network.prototype.buildImplied.call(this,t);
},e.Layout.Hierarchy.links=function(){return this.nodes().filter(function(t){return t.parentNode;
}).map(function(t){return{sourceNode:t,targetNode:t.parentNode,linkValue:1}})},e.Layout.Hierarchy.NodeLink={
buildImplied:function(t){function e(t){return t.parentNode?t.depth*(c-h)+h:0}function r(t){
return t.parentNode?2*(t.breadth-.25)*Math.PI:0}function n(t){switch(a){case"left":
return t.depth*l;case"right":return l-t.depth*l;case"top":return t.breadth*l;case"bottom":
return l-t.breadth*l;case"radial":return l/2+e(t)*Math.cos(t.midAngle)}}function i(t){
switch(a){case"left":return t.breadth*u;case"right":return u-t.breadth*u;case"top":
return t.depth*u;case"bottom":return u-t.depth*u;case"radial":return u/2+e(t)*Math.sin(t.midAngle);
}}var o=t.nodes,a=t.orient,s=/^(top|bottom)$/.test(a),l=t.width,u=t.height;if("radial"==a){
var h=t.innerRadius,c=t.outerRadius;null==h&&(h=0),null==c&&(c=Math.min(l,u)/2)}for(var p=0;p<o.length;p++){
var f=o[p];f.midAngle="radial"==a?r(f):s?Math.PI/2:0,f.x=n(f),f.y=i(f),f.firstChild&&(f.midAngle+=Math.PI);
}}},e.Layout.Hierarchy.Fill={constructor:function(){this.node.strokeStyle("#fff").fillStyle("#ccc").width(function(t){
return t.dx}).height(function(t){return t.dy}).innerRadius(function(t){return t.innerRadius;
}).outerRadius(function(t){return t.outerRadius}).startAngle(function(t){return t.startAngle;
}).angle(function(t){return t.angle}),this.label.textAlign("center").left(function(t){
return t.x+t.dx/2}).top(function(t){return t.y+t.dy/2}),delete this.link},buildImplied:function(t){
function e(t,e){return(t+e)/(1+e)}function r(t){switch(c){case"left":return e(t.minDepth,y)*f;
case"right":return(1-e(t.maxDepth,y))*f;case"top":return t.minBreadth*f;case"bottom":
return(1-t.maxBreadth)*f;case"radial":return f/2}}function n(t){switch(c){case"left":
return t.minBreadth*d;case"right":return(1-t.maxBreadth)*d;case"top":return e(t.minDepth,y)*d;
case"bottom":return(1-e(t.maxDepth,y))*d;case"radial":return d/2}}function i(t){switch(c){
case"left":case"right":return(t.maxDepth-t.minDepth)/(1+y)*f;case"top":case"bottom":
return(t.maxBreadth-t.minBreadth)*f;case"radial":return t.parentNode?(t.innerRadius+t.outerRadius)*Math.cos(t.midAngle):0;
}}function o(t){switch(c){case"left":case"right":return(t.maxBreadth-t.minBreadth)*d;
case"top":case"bottom":return(t.maxDepth-t.minDepth)/(1+y)*d;case"radial":return t.parentNode?(t.innerRadius+t.outerRadius)*Math.sin(t.midAngle):0;
}}function a(t){return Math.max(0,e(t.minDepth,y/2))*(m-g)+g}function s(t){return e(t.maxDepth,y/2)*(m-g)+g;
}function l(t){return 2*(t.parentNode?t.minBreadth-.25:0)*Math.PI}function u(t){return 2*(t.parentNode?t.maxBreadth-t.minBreadth:1)*Math.PI;
}var h=t.nodes,c=t.orient,p=/^(top|bottom)$/.test(c),f=t.width,d=t.height,y=-h[0].minDepth;
if("radial"==c){var g=t.innerRadius,m=t.outerRadius;null==g&&(g=0),g&&(y*=2),null==m&&(m=Math.min(f,d)/2);
}for(var v=0;v<h.length;v++){var x=h[v];x.x=r(x),x.y=n(x),"radial"==c?(x.innerRadius=a(x),
x.outerRadius=s(x),x.startAngle=l(x),x.angle=u(x),x.midAngle=x.startAngle+x.angle/2):x.midAngle=p?-Math.PI/2:0,
x.dx=i(x),x.dy=o(x)}}},e.Layout.Grid=function(){e.Layout.call(this);var t=this;(this.cell=(new e.Mark).data(function(){
return t.scene[t.index].$grid}).width(function(){return t.width()/t.cols()}).height(function(){
return t.height()/t.rows()}).left(function(){return this.width()*(this.index%t.cols());
}).top(function(){return this.height()*Math.floor(this.index/t.cols())})).parent=this;
},e.Layout.Grid.prototype=e.extend(e.Layout).property("rows").property("cols"),e.Layout.Grid.prototype.defaults=(new e.Layout.Grid).extend(e.Layout.prototype.defaults).rows(1).cols(1),
e.Layout.Grid.prototype.buildImplied=function(t){e.Layout.prototype.buildImplied.call(this,t);
var r=t.rows,n=t.cols;"object"==typeof n&&(r=e.transpose(n)),"object"==typeof r?(t.$grid=e.blend(r),
t.rows=r.length,t.cols=r[0]?r[0].length:0):t.$grid=e.repeat([t.data],r*n)},e.Layout.Stack=function(){
function t(t){return function(){return o[t](this.parent.index,this.index)}}e.Layout.call(this);
var r,n=this,i=function(){return null},o={t:i,l:i,r:i,b:i,w:i,h:i},a=n.buildImplied;
this.buildImplied=function(t){a.call(this,t);var n,s=t.layers,l=s.length,u=t.orient,h=/^(top|bottom)\b/.test(u),c=this.parent[h?"height":"width"](),p=[],f=[],d=[],y=e.Mark.stack,g={
parent:{parent:this}};y.unshift(null),r=[];for(var m=0;l>m;m++){d[m]=[],f[m]=[],g.parent.index=m,
y[0]=s[m],r[m]=this.$values.apply(g.parent,y),m||(n=r[m].length),y.unshift(null);for(var v=0;n>v;v++)y[0]=r[m][v],
g.index=v,m||(p[v]=this.$x.apply(g,y)),d[m][v]=this.$y.apply(g,y);y.shift()}y.shift();
var x;switch(t.order){case"inside-out":for(var b=d.map(function(t){return e.max.index(t);
}),k=e.range(l).sort(function(t,e){return b[t]-b[e]}),S=d.map(function(t){return e.sum(t);
}),M=0,w=0,C=[],L=[],m=0;l>m;m++){var v=k[m];w>M?(M+=S[v],C.push(v)):(w+=S[v],L.push(v));
}x=L.reverse().concat(C);break;case"reverse":x=e.range(l-1,-1,-1);break;default:x=e.range(l);
}switch(t.offset){case"silohouette":for(var v=0;n>v;v++){for(var g=0,m=0;l>m;m++)g+=d[m][v];
f[x[0]][v]=(c-g)/2}break;case"wiggle":for(var g=0,m=0;l>m;m++)g+=d[m][0];f[x[0]][0]=g=(c-g)/2;
for(var v=1;n>v;v++){for(var N=0,A=0,I=p[v]-p[v-1],m=0;l>m;m++)N+=d[m][v];for(var m=0;l>m;m++){
for(var P=(d[x[m]][v]-d[x[m]][v-1])/(2*I),B=0;m>B;B++)P+=(d[x[B]][v]-d[x[B]][v-1])/I;
A+=P*d[x[m]][v]}f[x[0]][v]=g-=N?A/N*I:0}break;case"expand":for(var v=0;n>v;v++){f[x[0]][v]=0;
for(var B=0,m=0;l>m;m++)B+=d[m][v];if(B){B=c/B;for(var m=0;l>m;m++)d[m][v]*=B}else{
B=c/l;for(var m=0;l>m;m++)d[m][v]=B}}break;default:for(var v=0;n>v;v++)f[x[0]][v]=0;
}for(var v=0;n>v;v++)for(var g=f[x[0]][v],m=1;l>m;m++)g+=d[x[m-1]][v],f[x[m]][v]=g;
var m=u.indexOf("-"),_=h?"h":"w",$=0>m?h?"l":"b":u.charAt(m+1),D=u.charAt(0);for(var R in o)o[R]=i;
o[$]=function(t,e){return p[e]},o[D]=function(t,e){return f[t][e]},o[_]=function(t,e){
return d[t][e]}},this.layer=(new e.Mark).data(function(){return r[this.parent.index];
}).top(t("t")).left(t("l")).right(t("r")).bottom(t("b")).width(t("w")).height(t("h")),
this.layer.add=function(t){return n.add(e.Panel).data(function(){return n.layers();
}).add(t).extend(this)}},e.Layout.Stack.prototype=e.extend(e.Layout).property("orient",String).property("offset",String).property("order",String).property("layers"),
e.Layout.Stack.prototype.defaults=(new e.Layout.Stack).extend(e.Layout.prototype.defaults).orient("bottom-left").offset("zero").layers([[]]),
e.Layout.Stack.prototype.$x=e.Layout.Stack.prototype.$y=function(){return 0},e.Layout.Stack.prototype.x=function(t){
return this.$x=e.functor(t),this},e.Layout.Stack.prototype.y=function(t){return this.$y=e.functor(t),
this},e.Layout.Stack.prototype.$values=e.identity,e.Layout.Stack.prototype.values=function(t){
return this.$values=e.functor(t),this},e.Layout.Band=function(){function t(t){return function(){
return r[t](this.index,this.parent.index)}}e.Layout.call(this);var r,n,i=this,o=i.buildImplied,a=(new e.Mark).data(function(){
return n[this.parent.index]}).top(t("t")).left(t("l")).right(t("r")).bottom(t("b")).width(t("w")).height(t("h")).antialias(t("antialias"));
this.buildImplied=function(t){o.call(this,t),r=Object.create(e.Layout.Band.$baseItemProps),
n=[];var i=t.layers,a=i.length;if(a>0){var s=t.orient,l=/^(top|bottom)\b/.test(s),u=this.parent[l?"height":"width"](),h=this._readData(i,n,t),c=h.length;
if("reverse"===t.bandOrder&&h.reverse(),"reverse"===t.order){n.reverse();for(var p=0;c>p;p++)h[p].items.reverse();
}switch(t.layout){case"grouped":this._calcGrouped(h,a,u,t);break;case"stacked":this._calcStacked(h,a,u,t);
}for(var f=t.hZero||0,d="stacked"===t.layout,y=0;c>y;y++)for(var g=h[y],m=d?Math.max(0,g.vertiMargin)/2:0,v=0;a>v;v++){
var x=g.items[v];x.zero&&(x.h=f,x.y-=m+f/2)}this._bindItemProps(h,r,s,l)}};var s=this.item={
end:this,add:function(t){return i.add(e.Panel).data(function(){return i.layers()}).add(t).extend(a);
},order:function(t){return i.order(t),this},w:function(t){return i.$iw=e.functor(t),
this},h:function(t){return i.$ih=e.functor(t),this},horizontalRatio:function(t){return i.$ihorizRatio=e.functor(t),
this},verticalMargin:function(t){return i.$ivertiMargin=e.functor(t),this}},l=this.band={
end:this,w:function(t){return i.$bw=e.functor(t),this},x:function(t){return i.$bx=e.functor(t),
this},order:function(t){return i.bandOrder(t),this},differentialControl:function(t){
return i.$bDiffControl=e.functor(t),this}};this.band.item=s,this.item.band=l},e.Layout.Band.$baseItemProps=function(){
var t=function(){return null};return{t:t,l:t,r:t,b:t,w:t,h:t}}(),e.Layout.Band.prototype=e.extend(e.Layout).property("orient",String).property("layout",String).property("layers").property("yZero",Number).property("hZero",Number).property("verticalMode",String).property("horizontalMode",String).property("order",String).property("bandOrder",String),
e.Layout.Band.prototype.defaults=(new e.Layout.Band).extend(e.Layout.prototype.defaults).orient("bottom-left").layout("grouped").yZero(0).hZero(1.5).layers([[]]),
e.Layout.Band.prototype.$bx=e.Layout.Band.prototype.$bw=e.Layout.Band.prototype.$bDiffControl=e.Layout.Band.prototype.$iw=e.Layout.Band.prototype.$ih=e.Layout.Band.prototype.$ivertiMargin=e.functor(0),
e.Layout.Band.prototype.$ihorizRatio=e.functor(.9),e.Layout.Band.prototype.$values=e.identity,
e.Layout.Band.prototype.values=function(t){return this.$values=e.functor(t),this},
e.Layout.prototype._readData=function(t,r,n){var i,o=t.length,a=[],s=e.Mark.stack,l=n.hZero,u={
parent:{parent:this}};s.unshift(null);for(var h=0;o>h;h++){u.parent.index=h,s[0]=t[h];
var c=r[h]=this.$values.apply(u.parent,s);h||(i=c.length),s.unshift(null);for(var p=0;i>p;p++){
s[0]=c[p],u.index=p;var f=a[p];f||(f=a[p]={horizRatio:this.$ihorizRatio.apply(u,s),
vertiMargin:this.$ivertiMargin.apply(u,s),w:this.$bw.apply(u,s),x:this.$bx.apply(u,s),
diffControl:this.$bDiffControl?this.$bDiffControl.apply(u,s):0,items:[]});var d=this.$ih.apply(u,s),y=null!=d?Math.abs(d):d;
f.items[h]={y:n.yZero||0,x:0,w:this.$iw.apply(u,s),h:y,zero:null!=y&&l>=y,dir:0>d?-1:1
}}s.shift()}return s.shift(),a},e.Layout.Band.prototype._normalizeBands=function(t,e,r,n){
var i,o=t.length;if("expand"===n.verticalMode)for(var a=0;o>a;a++){i=t[a].items;for(var s=null,l=0,u=0;e>u;u++){
var h=i[u];h.dir=1;var c=h.h;null!=c&&(l++,s+=c)}if(l)if(s)for(var p=r/s,u=0;e>u;u++){
var c=i[u].h;null!=c&&(i[u].h=c*p,i[u].zero=i[u].h<=n.hZero)}else if(0==s)for(var u=0;e>u;u++)i[u].h=0;else for(var f=r/l,u=0;e>u;u++){
var c=i[u].h;null!=c&&(i[u].h=f)}}return i},e.Layout.Band.prototype._calcGrouped=function(t,e,r,n){
for(var i=this._normalizeBands(t,e,r,n),o=0,a=t.length;a>o;o++){for(var s=t[o],i=s.items,l=s.w,u=s.horizRatio,h=0,c=0;e>c;c++)h+=i[c].w;
if(1===e?u=1:u>0&&1>=u||(u=1),null==l)l=s.w=h/u;else if("expand"===n.horizontalMode){
var p=u*l;if(h)for(var f=p/h,c=0;e>c;c++)i[c].w*=f;else for(var d=p/e,c=0;e>c;c++)i[c].w=d;
h=p}for(var y=h/u,g=s.x-y/2,m=e>1?(y-h)/(e-1):0,c=0;e>c;c++){var v=i[c];v.x=g,g+=v.w+m,
v.dir<0&&(v.y-=v.h)}}},e.Layout.Band.prototype._calcStacked=function(t,e,r,n){for(var i=this._normalizeBands(t,e,r,n),o=n.yZero,a=o,s=0,l=t.length;l>s;s++){
var u=t[s],h=u.x,c=u.diffControl,p=0>c,f=Math.max(0,u.vertiMargin);i=u.items;var d=this._layoutItemsOfDir(1,p,i,f,h,a),y=null;
if(d.existsOtherDir&&(y=this._layoutItemsOfDir(-1,p,i,f,h,a)),c){if(1===Math.abs(c)){
var g=a;a=d.yOffset,y&&(a-=g-y.yOffset)}}else a=o}},e.Layout.Band.prototype._layoutItemsOfDir=function(t,e,r,n,i,o){
for(var a=!1,s=n/2,l=e?-t:t,u=e,h=0,c=r.length;c>h;h+=1){var p=r[u?c-h-1:h];if(p.dir===t){
var f=p.h||0;l>0?(p.y=o+s,o+=f):(p.y=o-(f-s),o-=f);var d=f-n;p.h=d>0?d:0,p.x=i-p.w/2;
}else a=!0}return{existsOtherDir:a,yOffset:o}},e.Layout.Band.prototype._bindItemProps=function(t,e,r,n){
var i=r.indexOf("-"),o=n?"h":"w",a=n?"w":"h",s=0>i?n?"l":"b":r.charAt(i+1),l=r.charAt(0);
e[s]=function(e,r){return t[e].items[r].x},e[l]=function(e,r){return t[e].items[r].y;
},e[a]=function(e,r){return t[e].items[r].w},e[o]=function(e,r){return t[e].items[r].h||0;
},e.antialias=function(e,r){return t[e].items[r].zero}},e.Layout.Treemap=function(){
e.Layout.Hierarchy.call(this),this.node.strokeStyle("#fff").fillStyle("rgba(31, 119, 180, .25)").width(function(t){
return t.dx}).height(function(t){return t.dy}),this.label.visible(function(t){return!t.firstChild;
}).left(function(t){return t.x+t.dx/2}).top(function(t){return t.y+t.dy/2}).textAlign("center").textAngle(function(t){
return t.dx>t.dy?0:-Math.PI/2}),(this.leaf=(new e.Mark).extend(this.node).fillStyle(null).strokeStyle(null).visible(function(t){
return!t.firstChild})).parent=this,delete this.link},e.Layout.Treemap.prototype=e.extend(e.Layout.Hierarchy).property("round",Boolean).property("mode",String).property("order",String),
e.Layout.Treemap.prototype.defaults=(new e.Layout.Treemap).extend(e.Layout.Hierarchy.prototype.defaults).mode("squarify").order("ascending"),
e.Layout.Treemap.prototype.$size=function(t){return Number(t.nodeValue)},e.Layout.Treemap.prototype.$padLeft=e.Layout.Treemap.prototype.$padRight=e.Layout.Treemap.prototype.$padBottom=e.Layout.Treemap.prototype.$padTop=function(){
return 0},e.Layout.Treemap.prototype.size=function(t){return this.$size=e.functor(t),
this},e.Layout.Treemap.prototype.padding=function(t){return t=e.functor(t),this.paddingLeft(t).paddingRight(t).paddingTop(t).paddingBottom(t);
},e.Layout.Treemap.prototype.paddingLeft=function(t){return arguments.length?(this.$padLeft=e.functor(t),
this):this.$padLeft},e.Layout.Treemap.prototype.paddingRight=function(t){return arguments.length?(this.$padRight=e.functor(t),
this):this.$padRight},e.Layout.Treemap.prototype.paddingBottom=function(t){return arguments.length?(this.$padBottom=e.functor(t),
this):this.$padBottom},e.Layout.Treemap.prototype.paddingTop=function(t){return arguments.length?(this.$padTop=e.functor(t),
this):this.$padTop},e.Layout.Treemap.prototype.buildImplied=function(t){function r(t,e,r,n,i,o,a){
for(var s=0,l=0;s<t.length;s++){var u=t[s];r?(u.x=n+l,u.y=i,l+=u.dx=h(o*u.size/e),
u.dy=a):(u.x=n,u.y=i+l,u.dx=o,l+=u.dy=h(a*u.size/e))}u&&(r?u.dx+=o-l:u.dy+=a-l)}function n(t,e){
for(var r=-1/0,n=1/0,i=0,o=0;o<t.length;o++){var a=t[o].size;n>a&&(n=a),a>r&&(r=a),
i+=a}return i*=i,e*=e,Math.max(e*r/i,i/(e*n))}function i(t,i){function o(t){var n=p==g,i=e.sum(t,u),o=g?h(i/g):0;
return r(t,i,n,s,l,n?p:o,n?o:f),n?(l+=o,f-=o):(s+=o,p-=o),g=Math.min(p,f),n}var a=t.parentNode,s=t.x,l=t.y,p=t.dx,f=t.dy;
if(a&&(s+=a.paddingLeft,l+=a.paddingTop,p+=-a.paddingLeft-a.paddingRight,f+=-a.paddingTop-a.paddingBottom),
"squarify"==c){var d=[],y=1/0,g=Math.min(p,f),m=p*f/t.size;if(!(t.size<=0)){t.visitBefore(function(t){
t.size*=m});for(var v=t.childNodes.slice();v.length;){var x=v[v.length-1];if(x.size){
d.push(x);var m=n(d,g);y>=m?(v.pop(),y=m):(d.pop(),o(d),d.length=0,y=1/0)}else v.pop();
}if(o(d))for(var i=0;i<d.length;i++)d[i].dy+=f;else for(var i=0;i<d.length;i++)d[i].dx+=p;
}}else r(t.childNodes,t.size,"slice"==c?!0:"dice"==c?!1:1&i,s,l,p,f)}if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){
var o=this,a=t.nodes,s=a[0],l=e.Mark.stack,u=function(t){return t.size},h=t.round?Math.round:Number,c=t.mode;
l.unshift(null);try{s.visitAfter(function(t,r){t.depth=r,t.x=t.y=t.dx=t.dy=0,l[0]=t,
t.firstChild?(t.size=e.sum(t.childNodes,u),t.paddingRight=+o.$padRight.apply(o,l)||0,
t.paddingLeft=+o.$padLeft.apply(o,l)||0,t.paddingBottom=+o.$padBottom.apply(o,l)||0,
t.paddingTop=+o.$padTop.apply(o,l)||0):t.size=o.$size.apply(o,l)})}finally{l.shift();
}switch(t.order){case"ascending":s.sort(function(t,e){return t.size-e.size});break;
case"descending":s.sort(function(t,e){return e.size-t.size});break;case"reverse":
s.reverse()}s.x=0,s.y=0,s.dx=t.width,s.dy=t.height,s.visitBefore(i)}},e.Layout.Tree=function(){
e.Layout.Hierarchy.call(this)},e.Layout.Tree.prototype=e.extend(e.Layout.Hierarchy).property("group",Number).property("breadth",Number).property("depth",Number).property("orient",String),
e.Layout.Tree.prototype.defaults=(new e.Layout.Tree).extend(e.Layout.Hierarchy.prototype.defaults).group(1).breadth(15).depth(60).orient("top"),
e.Layout.Tree.prototype.buildImplied=function(t){function r(t){var e,n,o;if(t.firstChild){
e=t.firstChild,n=t.lastChild,o=e;for(var a=e;a;a=a.nextSibling)r(a),o=i(a,o);l(t);
var s=.5*(e.prelim+n.prelim);(e=t.previousSibling)?(t.prelim=e.prelim+h(t.depth,!0),
t.mod=t.prelim-s):t.prelim=s}else(e=t.previousSibling)&&(t.prelim=e.prelim+h(t.depth,!0));
}function n(t,e,r){t.breadth=t.prelim+e,e+=t.mod;for(var i=t.firstChild;i;i=i.nextSibling)n(i,e,r);
}function i(t,e){var r=t.previousSibling;if(r){for(var n=t,i=t,l=r,c=t.parentNode.firstChild,p=n.mod,f=i.mod,d=l.mod,y=c.mod,g=a(l),m=o(n);g&&m;){
l=g,n=m,c=o(c),i=a(i),i.ancestor=t;var v=l.prelim+d-(n.prelim+p)+h(l.depth,!1);v>0&&(s(u(l,t,e),t,v),
p+=v,f+=v),d+=l.mod,p+=n.mod,y+=c.mod,f+=i.mod,g=a(l),m=o(n)}g&&!a(i)&&(i.thread=g,
i.mod+=d-f),m&&!o(c)&&(c.thread=m,c.mod+=p-y,e=t)}return e}function o(t){return t.firstChild||t.thread;
}function a(t){return t.lastChild||t.thread}function s(t,e,r){var n=e.number-t.number;
e.change-=r/n,e.shift+=r,t.change+=r/n,e.prelim+=r,e.mod+=r}function l(t){for(var e=0,r=0,n=t.lastChild;n;n=n.previousSibling)n.prelim+=e,
n.mod+=e,r+=n.change,e+=n.shift+r}function u(t,e,r){return t.ancestor.parentNode==e.parentNode?t.ancestor:r;
}function h(t,e){return(e?1:v+1)/("radial"==y?t:1)}function c(t){return"radial"==y?t.breadth/g:0;
}function p(t){switch(y){case"left":return t.depth;case"right":return x-t.depth;case"top":
case"bottom":return t.breadth+x/2;case"radial":return x/2+t.depth*Math.cos(c(t))}
}function f(t){switch(y){case"left":case"right":return t.breadth+b/2;case"top":return t.depth;
case"bottom":return b-t.depth;case"radial":return b/2+t.depth*Math.sin(c(t))}}if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){
var d=t.nodes,y=t.orient,g=t.depth,m=t.breadth,v=t.group,x=t.width,b=t.height,k=d[0];
k.visitAfter(function(t,e){t.ancestor=t,t.prelim=0,t.mod=0,t.change=0,t.shift=0,t.number=t.previousSibling?t.previousSibling.number+1:0,
t.depth=e}),r(k),n(k,-k.prelim,0),k.visitAfter(function(t){t.breadth*=m,t.depth*=g,
t.midAngle=c(t),t.x=p(t),t.y=f(t),t.firstChild&&(t.midAngle+=Math.PI),delete t.breadth,
delete t.depth,delete t.ancestor,delete t.prelim,delete t.mod,delete t.change,delete t.shift,
delete t.number,delete t.thread})}},e.Layout.Indent=function(){e.Layout.Hierarchy.call(this),
this.link.interpolate("step-after")},e.Layout.Indent.prototype=e.extend(e.Layout.Hierarchy).property("depth",Number).property("breadth",Number),
e.Layout.Indent.prototype.defaults=(new e.Layout.Indent).extend(e.Layout.Hierarchy.prototype.defaults).depth(15).breadth(15),
e.Layout.Indent.prototype.buildImplied=function(t){function r(t,e,n){t.x=a+n++*o,
t.y=s+e++*i,t.midAngle=0;for(var l=t.firstChild;l;l=l.nextSibling)e=r(l,e,n);return e;
}if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){var n=t.nodes,i=t.breadth,o=t.depth,a=0,s=0;
r(n[0],1,1)}},e.Layout.Pack=function(){e.Layout.Hierarchy.call(this),this.node.shapeRadius(function(t){
return t.radius}).strokeStyle("rgb(31, 119, 180)").fillStyle("rgba(31, 119, 180, .25)"),
this.label.textAlign("center"),delete this.link},e.Layout.Pack.prototype=e.extend(e.Layout.Hierarchy).property("spacing",Number).property("order",String),
e.Layout.Pack.prototype.defaults=(new e.Layout.Pack).extend(e.Layout.Hierarchy.prototype.defaults).spacing(1).order("ascending"),
e.Layout.Pack.prototype.$radius=function(){return 1},e.Layout.Pack.prototype.size=function(t){
return this.$radius="function"==typeof t?function(){return Math.sqrt(t.apply(this,arguments));
}:(t=Math.sqrt(t),function(){return t}),this},e.Layout.Pack.prototype.buildImplied=function(t){
function r(t){var r=e.Mark.stack;r.unshift(null);for(var n=0,i=t.length;i>n;n++){
var o=t[n];o.firstChild||(o.radius=s.$radius.apply(s,(r[0]=o,r)))}r.shift()}function n(e){
for(var r=[],o=e.firstChild;o;o=o.nextSibling)o.firstChild&&(o.radius=n(o)),o.n=o.p=o,
r.push(o);switch(t.order){case"ascending":r.sort(function(t,e){return t.radius-e.radius;
});break;case"descending":r.sort(function(t,e){return e.radius-t.radius});break;case"reverse":
r.reverse()}return i(r)}function i(e){function r(t){p=Math.min(t.x-t.radius,p),f=Math.max(t.x+t.radius,f),
d=Math.min(t.y-t.radius,d),y=Math.max(t.y+t.radius,y)}function n(t,e){var r=t.n;t.n=e,
e.p=t,e.n=r,r.p=e}function i(t,e){t.n=e,e.p=t}function a(t,e){var r=e.x-t.x,n=e.y-t.y,i=t.radius+e.radius;
return i*i-r*r-n*n>.001}var s,l,u,h,c,p=1/0,f=-1/0,d=1/0,y=-1/0;if(s=e[0],s.x=-s.radius,
s.y=0,r(s),e.length>1&&(l=e[1],l.x=l.radius,l.y=0,r(l),e.length>2)){u=e[2],o(s,l,u),
r(u),n(s,u),s.p=u,n(u,l),l=s.n;for(var g=3;g<e.length;g++){o(s,l,u=e[g]);var m=0,v=1,x=1;
for(h=l.n;h!=l;h=h.n,v++)if(a(h,u)){m=1;break}if(1==m)for(c=s.p;c!=h.p;c=c.p,x++)if(a(c,u)){
v>x&&(m=-1,h=c);break}0==m?(n(s,u),l=u,r(u)):m>0?(i(s,h),l=h,g--):0>m&&(i(h,l),s=h,
g--)}}for(var b=(p+f)/2,k=(d+y)/2,S=0,g=0;g<e.length;g++){var M=e[g];M.x-=b,M.y-=k,
S=Math.max(S,M.radius+Math.sqrt(M.x*M.x+M.y*M.y))}return S+t.spacing}function o(t,e,r){
var n=e.radius+r.radius,i=t.radius+r.radius,o=e.x-t.x,a=e.y-t.y,s=Math.sqrt(o*o+a*a),l=(i*i+s*s-n*n)/(2*i*s),u=Math.acos(l),h=l*i,c=Math.sin(u)*i;
o/=s,a/=s,r.x=t.x+h*o+c*a,r.y=t.y+h*a-c*o}function a(t,e,r,n){for(var i=t.firstChild;i;i=i.nextSibling)i.x+=t.x,
i.y+=t.y,a(i,e,r,n);t.x=e+n*t.x,t.y=r+n*t.y,t.radius*=n}if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){
var s=this,l=t.nodes,u=l[0];r(l),u.x=0,u.y=0,u.radius=n(u);var h=this.width(),c=this.height(),p=1/Math.max(2*u.radius/h,2*u.radius/c);
a(u,h/2,c/2,p)}},e.Layout.Force=function(){e.Layout.Network.call(this),this.link.lineWidth(function(t,e){
return 1.5*Math.sqrt(e.linkValue)}),this.label.textAlign("center")},e.Layout.Force.prototype=e.extend(e.Layout.Network).property("bound",Boolean).property("iterations",Number).property("dragConstant",Number).property("chargeConstant",Number).property("chargeMinDistance",Number).property("chargeMaxDistance",Number).property("chargeTheta",Number).property("springConstant",Number).property("springDamping",Number).property("springLength",Number),
e.Layout.Force.prototype.defaults=(new e.Layout.Force).extend(e.Layout.Network.prototype.defaults).dragConstant(.1).chargeConstant(-40).chargeMinDistance(2).chargeMaxDistance(500).chargeTheta(.9).springConstant(.1).springDamping(.3).springLength(20),
e.Layout.Force.prototype.buildImplied=function(t){function r(t){return t.fix?1:t.vx*t.vx+t.vy*t.vy;
}if(e.Layout.Network.prototype.buildImplied.call(this,t)){var n=t.$force;n&&(n.next=this.binds.$force,
this.binds.$force=n)}else{for(var i,o=this,a=t.nodes,s=t.links,l=t.iterations,u=t.width,h=t.height,c=0;c<a.length;c++)i=a[c],
isNaN(i.x)&&(i.x=u/2+40*Math.random()-20),isNaN(i.y)&&(i.y=h/2+40*Math.random()-20);
var p=e.simulation(a);if(p.force(e.Force.drag(t.dragConstant)),p.force(e.Force.charge(t.chargeConstant).domain(t.chargeMinDistance,t.chargeMaxDistance).theta(t.chargeTheta)),
p.force(e.Force.spring(t.springConstant).damping(t.springDamping).length(t.springLength).links(s)),
p.constraint(e.Constraint.position()),t.bound&&p.constraint(e.Constraint.bound().x(6,u-6).y(6,h-6)),
null==l)p.step(),p.step(),t.$force=this.binds.$force={next:this.binds.$force,nodes:a,
min:1e-4*(s.length+1),sim:p},this.$timer||(this.$timer=setInterval(function(){for(var t=!1,n=o.binds.$force;n;n=n.next)e.max(n.nodes,r)>n.min&&(n.sim.step(),
t=!0);t&&o.render()},42));else for(var c=0;l>c;c++)p.step()}},e.Layout.Cluster=function(){
e.Layout.Hierarchy.call(this);var t,r=this.buildImplied;this.buildImplied=function(e){
r.call(this,e),t=/^(top|bottom)$/.test(e.orient)?"step-before":/^(left|right)$/.test(e.orient)?"step-after":"linear";
},this.link.interpolate(function(){return t})},e.Layout.Cluster.prototype=e.extend(e.Layout.Hierarchy).property("group",Number).property("orient",String).property("innerRadius",Number).property("outerRadius",Number),
e.Layout.Cluster.prototype.defaults=(new e.Layout.Cluster).extend(e.Layout.Hierarchy.prototype.defaults).group(0).orient("top"),
e.Layout.Cluster.prototype.buildImplied=function(t){if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){
var r,n,i=t.nodes[0],o=t.group,a=0,s=.5-o/2,l=void 0;i.visitAfter(function(t){t.firstChild?t.depth=1+e.max(t.childNodes,function(t){
return t.depth}):(o&&l!=t.parentNode&&(l=t.parentNode,a+=o),a++,t.depth=0)}),r=1/a,
n=1/i.depth;var l=void 0;i.visitAfter(function(t){t.firstChild?t.breadth=e.mean(t.childNodes,function(t){
return t.breadth}):(o&&l!=t.parentNode&&(l=t.parentNode,s+=o),t.breadth=r*s++),t.depth=1-t.depth*n;
}),i.visitAfter(function(t){t.minBreadth=t.firstChild?t.firstChild.minBreadth:t.breadth-r/2,
t.maxBreadth=t.firstChild?t.lastChild.maxBreadth:t.breadth+r/2}),i.visitBefore(function(t){
t.minDepth=t.parentNode?t.parentNode.maxDepth:0,t.maxDepth=t.parentNode?t.depth+i.depth:t.minDepth+2*i.depth;
}),i.minDepth=-n,e.Layout.Hierarchy.NodeLink.buildImplied.call(this,t)}},e.Layout.Cluster.Fill=function(){
e.Layout.Cluster.call(this),e.Layout.Hierarchy.Fill.constructor.call(this)},e.Layout.Cluster.Fill.prototype=e.extend(e.Layout.Cluster),
e.Layout.Cluster.Fill.prototype.buildImplied=function(t){e.Layout.Cluster.prototype.buildImplied.call(this,t)||e.Layout.Hierarchy.Fill.buildImplied.call(this,t);
},e.Layout.Partition=function(){e.Layout.Hierarchy.call(this)},e.Layout.Partition.prototype=e.extend(e.Layout.Hierarchy).property("order",String).property("orient",String).property("innerRadius",Number).property("outerRadius",Number),
e.Layout.Partition.prototype.defaults=(new e.Layout.Partition).extend(e.Layout.Hierarchy.prototype.defaults).orient("top"),
e.Layout.Partition.prototype.$size=function(){return 1},e.Layout.Partition.prototype.size=function(t){
return this.$size=t,this},e.Layout.Partition.prototype.buildImplied=function(t){if(!e.Layout.Hierarchy.prototype.buildImplied.call(this,t)){
var r=this,n=t.nodes[0],i=e.Mark.stack,o=0;switch(i.unshift(null),n.visitAfter(function(t,n){
n>o&&(o=n),t.size=t.firstChild?e.sum(t.childNodes,function(t){return t.size}):r.$size.apply(r,(i[0]=t,
i))}),i.shift(),t.order){case"ascending":n.sort(function(t,e){return t.size-e.size;
});break;case"descending":n.sort(function(t,e){return e.size-t.size})}n.minBreadth=0,
n.breadth=.5,n.maxBreadth=1,n.visitBefore(function(t){for(var e=t.minBreadth,r=t.maxBreadth-e,n=t.firstChild;n;n=n.nextSibling)n.minBreadth=e,
e+=n.size/t.size*r,n.maxBreadth=e,n.breadth=(e+n.minBreadth)/2}),n.visitAfter(function(t,e){
t.minDepth=(e-1)/o,t.maxDepth=t.depth=e/o}),e.Layout.Hierarchy.NodeLink.buildImplied.call(this,t);
}},e.Layout.Partition.Fill=function(){e.Layout.Partition.call(this),e.Layout.Hierarchy.Fill.constructor.call(this);
},e.Layout.Partition.Fill.prototype=e.extend(e.Layout.Partition),e.Layout.Partition.Fill.prototype.buildImplied=function(t){
e.Layout.Partition.prototype.buildImplied.call(this,t)||e.Layout.Hierarchy.Fill.buildImplied.call(this,t);
},e.Layout.Arc=function(){e.Layout.Network.call(this);var t,r,n,i=this.buildImplied;
this.buildImplied=function(e){i.call(this,e),r=e.directed,t="radial"==e.orient?"linear":"polar",
n="right"==e.orient||"top"==e.orient},this.link.data(function(t){var e=t.sourceNode,i=t.targetNode;
return n!=(r||e.breadth<i.breadth)?[e,i]:[i,e]}).interpolate(function(){return t});
},e.Layout.Arc.prototype=e.extend(e.Layout.Network).property("orient",String).property("directed",Boolean),
e.Layout.Arc.prototype.defaults=(new e.Layout.Arc).extend(e.Layout.Network.prototype.defaults).orient("bottom"),
e.Layout.Arc.prototype.sort=function(t){return this.$sort=t,this},e.Layout.Arc.prototype.buildImplied=function(t){
function r(t){switch(a){case"top":return-Math.PI/2;case"bottom":return Math.PI/2;case"left":
return Math.PI;case"right":return 0;case"radial":return 2*(t-.25)*Math.PI}}function n(t){
switch(a){case"top":case"bottom":return t*u;case"left":return 0;case"right":return u;
case"radial":return u/2+c*Math.cos(r(t))}}function i(t){switch(a){case"top":return 0;
case"bottom":return h;case"left":case"right":return t*h;case"radial":return h/2+c*Math.sin(r(t));
}}if(!e.Layout.Network.prototype.buildImplied.call(this,t)){var o=t.nodes,a=t.orient,s=this.$sort,l=e.range(o.length),u=t.width,h=t.height,c=Math.min(u,h)/2;
s&&l.sort(function(t,e){return s(o[t],o[e])});for(var p=0;p<o.length;p++){var f=o[l[p]],d=f.breadth=(p+.5)/o.length;
f.x=n(d),f.y=i(d),f.midAngle=r(d)}}},e.Layout.Horizon=function(){e.Layout.call(this);
var t,r,n,i,o,a,s=this,l=this.buildImplied;this.buildImplied=function(s){l.call(this,s),
t=s.bands,r=s.mode,n=Math.round(("color"==r?.5:1)*s.height),i=s.backgroundStyle,o=e.ramp(i,s.negativeStyle).domain(0,t),
a=e.ramp(i,s.positiveStyle).domain(0,t)};var t=(new e.Panel).data(function(){return e.range(2*t);
}).overflow("hidden").height(function(){return n}).top(function(t){return"color"==r?(1&t)*n:0;
}).fillStyle(function(t){return t?null:i});this.band=(new e.Mark).top(function(t,e){
return"mirror"==r&&1&e?(e+1>>1)*n:null}).bottom(function(t,e){return"mirror"==r?1&e?null:(e+1>>1)*-n:(1&e||-1)*(e+1>>1)*n;
}).fillStyle(function(t,e){return(1&e?o:a)((e>>1)+1)}),this.band.add=function(r){
return s.add(e.Panel).extend(t).add(r).extend(this)}},e.Layout.Horizon.prototype=e.extend(e.Layout).property("bands",Number).property("mode",String).property("backgroundStyle",e.fillStyle).property("positiveStyle",e.fillStyle).property("negativeStyle",e.fillStyle),
e.Layout.Horizon.prototype.defaults=(new e.Layout.Horizon).extend(e.Layout.prototype.defaults).bands(2).mode("offset").backgroundStyle("white").positiveStyle("#1f77b4").negativeStyle("#d62728"),
e.Layout.Rollup=function(){e.Layout.Network.call(this);var t,r,n=this,i=n.buildImplied;
this.buildImplied=function(e){i.call(this,e),t=e.$rollup.nodes,r=e.$rollup.links},
this.node.data(function(){return t}).shapeSize(function(t){return 20*t.nodes.length;
}),this.link.interpolate("polar").eccentricity(.8),this.link.add=function(t){return n.add(e.Panel).data(function(){
return r}).add(t).extend(this)}},e.Layout.Rollup.prototype=e.extend(e.Layout.Network).property("directed",Boolean),
e.Layout.Rollup.prototype.x=function(t){return this.$x=e.functor(t),this},e.Layout.Rollup.prototype.y=function(t){
return this.$y=e.functor(t),this},e.Layout.Rollup.prototype.buildImplied=function(t){
function r(t){return s[t]+","+l[t]}if(!e.Layout.Network.prototype.buildImplied.call(this,t)){
var n=t.nodes,i=t.links,o=t.directed,a=n.length,s=[],l=[],u=0,h={},c={},p=e.Mark.stack,f={
parent:this};p.unshift(null);for(var d=0;a>d;d++)f.index=d,p[0]=n[d],s[d]=this.$x.apply(f,p),
l[d]=this.$y.apply(f,p);p.shift();for(var d=0;d<n.length;d++){var y=r(d),g=h[y];g||(g=h[y]=Object.create(n[d]),
g.index=u++,g.x=s[d],g.y=l[d],g.nodes=[]),g.nodes.push(n[d])}for(var d=0;d<i.length;d++){
var m=i[d].sourceNode,v=i[d].targetNode,x=h[r(m.index)],b=h[r(v.index)],k=!o&&x.index>b.index,S=k?b.index+","+x.index:x.index+","+b.index,M=c[S];
M||(M=c[S]={sourceNode:x,targetNode:b,linkValue:0,links:[]}),M.links.push(i[d]),M.linkValue+=i[d].linkValue;
}t.$rollup={nodes:e.values(h),links:e.values(c)}}},e.Layout.Matrix=function(){e.Layout.Network.call(this);
var t,r,n,i,o,a=this,s=a.buildImplied;this.buildImplied=function(e){s.call(this,e),
t=e.nodes.length,r=e.width/t,n=e.height/t,i=e.$matrix.labels,o=e.$matrix.pairs},this.link.data(function(){
return o}).left(function(){return r*(this.index%t)}).top(function(){return n*Math.floor(this.index/t);
}).width(function(){return r}).height(function(){return n}).lineWidth(1.5).strokeStyle("#fff").fillStyle(function(t){
return t.linkValue?"#555":"#eee"}).parent=this,delete this.link.add,this.label.data(function(){
return i}).left(function(){return 1&this.index?r*((this.index>>1)+.5):0}).top(function(){
return 1&this.index?0:n*((this.index>>1)+.5)}).textMargin(4).textAlign(function(){
return 1&this.index?"left":"right"}).textAngle(function(){return 1&this.index?-Math.PI/2:0;
}),delete this.node},e.Layout.Matrix.prototype=e.extend(e.Layout.Network).property("directed",Boolean),
e.Layout.Matrix.prototype.sort=function(t){return this.$sort=t,this},e.Layout.Matrix.prototype.buildImplied=function(t){
if(!e.Layout.Network.prototype.buildImplied.call(this,t)){var r=t.nodes,n=t.links,i=this.$sort,o=r.length,a=e.range(o),s=[],l=[],u={};
t.$matrix={labels:s,pairs:l},i&&a.sort(function(t,e){return i(r[t],r[e])});for(var h=0;o>h;h++)for(var c=0;o>c;c++){
var p=a[h],f=a[c],d={row:h,col:c,sourceNode:r[p],targetNode:r[f],linkValue:0};l.push(u[p+"."+f]=d);
}for(var h=0;o>h;h++){var p=a[h];s.push(r[p],r[p])}for(var h=0;h<n.length;h++){var y=n[h],g=y.sourceNode.index,m=y.targetNode.index,v=y.linkValue;
u[g+"."+m].linkValue+=v,t.directed||(u[m+"."+g].linkValue+=v)}}},e.Layout.Bullet=function(){
e.Layout.call(this);var t,r,n,i,o,a=this,s=a.buildImplied,l=a.x=e.Scale.linear();this.buildImplied=function(a){
s.call(this,o=a),t=a.orient,r=/^left|right$/.test(t),n=e.ramp("#bbb","#eee").domain(0,Math.max(1,o.ranges.length-1)),
i=e.ramp("steelblue","lightsteelblue").domain(0,Math.max(1,o.measures.length-1))},
(this.range=new e.Mark).data(function(){return o.ranges}).reverse(!0).left(function(){
return"left"==t?0:null}).top(function(){return"top"==t?0:null}).right(function(){
return"right"==t?0:null}).bottom(function(){return"bottom"==t?0:null}).width(function(t){
return r?l(t):null}).height(function(t){return r?null:l(t)}).fillStyle(function(){
return n(this.index)}).antialias(!1).parent=a,(this.measure=new e.Mark).extend(this.range).data(function(){
return o.measures}).left(function(){return"left"==t?0:r?null:this.parent.width()/3.25;
}).top(function(){return"top"==t?0:r?this.parent.height()/3.25:null}).right(function(){
return"right"==t?0:r?null:this.parent.width()/3.25}).bottom(function(){return"bottom"==t?0:r?this.parent.height()/3.25:null;
}).fillStyle(function(){return i(this.index)}).parent=a,(this.marker=new e.Mark).data(function(){
return o.markers}).left(function(e){return"left"==t?l(e):r?null:this.parent.width()/2;
}).top(function(e){return"top"==t?l(e):r?this.parent.height()/2:null}).right(function(e){
return"right"==t?l(e):null}).bottom(function(e){return"bottom"==t?l(e):null}).strokeStyle("black").shape("bar").shapeAngle(function(){
return r?0:Math.PI/2}).parent=a,(this.tick=new e.Mark).data(function(){return l.ticks(7);
}).left(function(e){return"left"==t?l(e):null}).top(function(e){return"top"==t?l(e):null;
}).right(function(e){return"right"==t?l(e):r?null:-6}).bottom(function(e){return"bottom"==t?l(e):r?-8:null;
}).height(function(){return r?6:null}).width(function(){return r?null:6}).parent=a;
},e.Layout.Bullet.prototype=e.extend(e.Layout).property("orient",String).property("ranges").property("markers").property("measures").property("minimum").property("maximum"),
e.Layout.Bullet.prototype.defaults=(new e.Layout.Bullet).extend(e.Layout.prototype.defaults).orient("left").ranges([]).markers([]).measures([]),
e.Layout.Bullet.prototype._originIsZero=!0,e.Layout.Bullet.prototype.originIsZero=function(t){
return arguments.length?this._originIsZero=!!t:this._originIsZero},e.Layout.Bullet.prototype.buildImplied=function(t){
e.Layout.prototype.buildImplied.call(this,t);var r,n=this.parent[/^left|right$/.test(t.orient)?"width":"height"](),i=t.maximum,o=t.minimum,a=1e-10;
null==i?(r=[].concat(t.ranges,t.markers,t.measures),i=e.max(r)):i=+i,null==o?(r||(r=[].concat(t.ranges,t.markers,t.measures)),
o=e.min(r),o=.95*o):o=+o,(o>i||a>i-o)&&(o=Math.abs(i)<a?-.1:.99*i),this._originIsZero&&o*i>0&&(o>0?o=0:i=0),
t.minimum=o,t.maximum=i,this.x.domain(o,i).range(0,n)},e.Behavior={},e.Behavior.dragBase=function(t){
function r(r){if(c||(c=!0,this.addEventInterceptor("click",s,!0)),!l){var a=this.root.scene.$g;
l=[[a,"mousemove",e.listen(a,"mousemove",n)],[a,"mouseup",e.listen(a,"mouseup",i)],[document,"mousemove",e.listen(document,"mousemove",n)],[document,"mouseup",e.listen(document,"mouseup",i)]];
}var f=arguments[arguments.length-1];u=f.target,h=!1,f.stopPropagation();var d=this.mouse(),y=this.scene,g=this.index;
p=y[g].drag={phase:"start",m:d,m1:d,m2:null,d:r,scene:y,index:g},f=o(f,p),t.dragstart.call(this,f);
var m=p.m;m!==d&&(d.x=m.x,d.y=m.y)}function n(e){if(p){p.phase="move",e.stopPropagation(),
e=o(e,p);var r=p.scene;r.mark.context(r,p.index,function(){var r=p.m2||p.m1,n=this.mouse();
if(!(r&&n.distance2(r).dist2<=2)){p.m=p.m2=n,t.drag.call(this,e);var i=p.m;i!==n&&(n.x=i.x,
n.y=i.y)}})}}function i(r){if(p){p.phase="end";var n=p.m2,i=n&&p.m1.distance2(n).dist2>.1;
p.canceled=!i,h=i&&u===r.target,h||(u=null),r.stopPropagation(),r=o(r,p),l&&(l.forEach(function(t){
e.unlisten.apply(e,t)}),l=null);var a=p.scene,s=p.index;try{a.mark.context(a,s,function(){
t.dragend.call(this,r)})}finally{p=null,delete a[s].drag}}}function o(t,e){try{return t.drag=e,
t}catch(r){}var n={};for(var i in t){var o=t[i];n[i]="function"!=typeof o?o:a(o,t);
}return n._sourceEvent=t,n}function a(t,e){return function(){return t.apply(e,arguments);
}}function s(t,e){return h&&u===e.target?(h=!1,u=null,!1):void 0}var l,u,h,c,p;return t.autoRender=!0,
t.positionConstraint=null,t.bound=function(t,e){return Math.max(p.min[e],Math.min(p.max[e],t));
},r.autoRender=function(e){return arguments.length?(t.autoRender=!!e,r):t.autoRender;
},r.positionConstraint=function(e){return arguments.length?(t.positionConstraint=e,
r):t.positionConstraint},r},e.Behavior.drag=function(){var t,r=null,n=1,i=1,o={dragstart:function(r){
var n=r.drag;n.type="drag";var i=n.d,a=e.vector(i.x,i.y);i.fix=a,i.drag=n,t=a.minus(n.m1);
var s=this.parent;n.max={x:s.width()-(i.dx||0),y:s.height()-(i.dy||0)},n.min={x:0,
y:0},o.autoRender&&this.render(),e.Mark.dispatch("dragstart",n.scene,n.index,r)},
drag:function(r){var a=r.drag,s=a.m2,l=a.d;a.m=t.plus(s);var u=o.positionConstraint;
u&&u(a);var h=a.m;n&&(l.x=l.fix.x=o.bound(h.x,"x")),i&&(l.y=l.fix.y=o.bound(h.y,"y")),
o.autoRender&&this.render(),e.Mark.dispatch("drag",a.scene,a.index,r)},dragend:function(r){
var n=r.drag,i=n.d;i.fix=null,t=null,o.autoRender&&this.render();try{e.Mark.dispatch("dragend",n.scene,n.index,r);
}finally{delete i.drag}}},a=e.Behavior.dragBase(o);return a.collapse=function(t){
if(arguments.length){switch(r=String(t)){case"y":n=1,i=0;break;case"x":n=0,i=1;break;
default:n=1,i=1}return a}return r},a},e.Behavior.point=function(t){function r(t,e){
if(t.visible)for(var r=t.children.length-1;r>=0;r--)if(n(t.children[r],e))return!0;
}function n(t,e){var n,a,s,l=t.mark,u="panel"===l.type;if(l.$handlers.point){var h,c=(u&&l.parent||l).mouse(),p=l._pointingRadiusMax,f=p*p;
for(a=t.length;a--;)if((h=i(t,a))&&o(t,a,c,e,h,f)){n=!0;break}}if(u){l.scene=t,s=!(!l.isPointingBarrier||!l.parent);
try{for(a=t.length;a--;)if(l.index=a,(!s||l.getShape(t,a).containsPoint(l.parent.mouse()))&&r(t[a],e))return!0;
}finally{delete l.scene,delete l.index}}return n}function i(t,e){var r=t[e];if(!r.visible)return 0;
if(!p)return 1;var n=t.mark.properties;if(!n.fillStyle&&!n.strokeStyle)return 1;var i=r.fillStyle?r.fillStyle.opacity:0,o=r.strokeStyle?r.strokeStyle.opacity:0,a=Math.max(i,o);
return.02>a?0:a>.98?1:.5}function o(t,r,n,i,o,a){function s(){if(y&&0>=a)return-1;
if(l=u.distance2(n,d),y&&e.floatLess(a,l.cost))return-2;if(m&&!f&&e.floatLess(g,l.dist2))return-3;
if(p===i.hasArea){if(f<i.inside)return-4;if(f>i.inside)return 1}else{if(c){if(!f&&i.inside)return-5;
if(f&&!i.inside)return 2}if(p||2!==i.inside){if(p&&2===f){if(2===i.inside)return-7;
if(0===i.inside&&e.floatLess(3,i.cost))return 4}}else{if(2===f)return 3;if(0===f&&e.floatLess(3,l.cost))return-6;
}}if(!c||!f){if(e.floatLess(i.dist2,l.dist2))return-8;if(e.floatLess(l.dist2,i.dist2))return 5;
}return c&&e.floatLess(l.cost,i.cost)?6:-9}var l,u=t.mark.getShape(t,r),p=u.hasArea(),f=u.containsPoint(n,d)?!c||u.containsPoint(n)?2:1:0,y=isFinite(a)&&2>f,v=s();
return h&&function(){if(-3>v||v>0){var e=t&&t.mark;console.log("POINT "+(v>0?"choose":"skip")+" ("+v+") "+(e?e.type+" "+r:"none")+" in="+f+" d2="+(l&&l.dist2)+" cost="+(l&&l.cost)+" opaq="+(1===o));
}}(),v>0&&(i.hasArea=p,i.inside=f,i.dist2=l.dist2,i.cost=l.cost,i.scenes=t,i.index=r,
i.shape=u,p&&2===f&&1===o)?!0:void 0}function a(){var t=e.event;h&&console.log("POINT MOUSE MOVE BEG");
try{var n={cost:1/0,dist2:1/0,inside:0,hasArea:!1,x:t.pageX||0,y:t.pageY||0};if(u&&v&&e.Shape.dist2(n,u).cost<v)return;
if(r(this.scene[this.index],n),n.inside||isFinite(n.cost)||(n=null),t.pointFrom=u,
t.pointTo=n,u){if(n&&u.scenes==n.scenes&&u.index==n.index)return;t.isPointSwitch=!!n,
e.Mark.dispatch("unpoint",u.scenes,u.index,t)}u=n,n&&(e.Mark.dispatch("point",n.scenes,n.index,t),
y||("panel"===this.type?(y=this,this.event("mouseout",function(){s.call(this.scene.$g);
}),f&&y.addEventInterceptor("click",l)):e.listen(this.root.canvas(),"mouseout",s)));
}finally{h&&console.log("POINT MOUSE MOVE END")}}function s(){var t=e.event;u&&!e.ancestor(this,t.relatedTarget)&&(e.Mark.dispatch("unpoint",u.scenes,u.index,t),
u=null)}function l(t,e){if(u){var r=u.scenes,n=r.mark.$handlers[t];if(n)return[n,r,u.index,e];
}}"object"!=typeof t&&(t={radius:t});var u,h=0,c=null,p=!!e.get(t,"painted",!1),f=!!e.get(t,"stealClick",!1),d={
x:1,y:1},y=null,g=function(){var r=e.parseNumNonNeg(e.get(t,"radius"),30);return r*r;
}(),m=isFinite(g),v=function(){var r=e.parseNumNonNeg(e.get(t,"radiusHyst"),0);return isFinite(r)||(r=4),
r*r}();return a.collapse=function(t){if(arguments.length){switch(c=String(t)){case"y":
d.x=1,d.y=0;break;case"x":d.x=0,d.y=1;break;default:d.x=1,d.y=1,c=null}return a}return c;
},t&&null!=t.collapse&&a.collapse(t.collapse),t=null,a},e.Behavior.select=function(){
var t=null,r=1,n=1,i=!1,o={dragstart:function(t){var a=t.drag;a.type="select",a.dxmin=0,
a.dymin=0;var s=a.d;s.drag=a,a.max={x:this.width(),y:this.height()},a.min={x:0,y:0
};var l=o.positionConstraint;l&&(a.m=a.m.clone(),l(a));var u=a.m;r&&(s.x=o.bound(u.x,"x"),
i||(s.dx=Math.max(0,a.dxmin))),n&&(s.y=o.bound(u.y,"y"),i||(s.dy=Math.max(0,a.dymin))),
e.Mark.dispatch("selectstart",a.scene,a.index,t)},drag:function(t){var a=t.drag,s=a.m1,l=a.d;
a.max.x=this.width(),a.max.y=this.height();var u=o.positionConstraint;u&&(a.m=a.m.clone(),
u(a));var h=a.m;if(r){var c=Math.min(s.x,h.x);if(c=o.bound(c,"x"),l.x=c,!i){var p=Math.max(h.x,s.x);
p=o.bound(p,"x"),l.dx=Math.max(0,a.dxmin,p-c)}}if(n){var f=Math.min(s.y,h.y);if(f=o.bound(f,"y"),
l.y=f,!i){var d=Math.max(h.y,s.y);d=o.bound(d,"y"),l.dy=Math.max(0,a.dymin,d-f)}}
o.autoRender&&this.render(),e.Mark.dispatch("select",a.scene,a.index,t)},dragend:function(t){
var r=t.drag;try{e.Mark.dispatch("selectend",r.scene,r.index,t)}finally{var n=r.d;
delete n.drag}}},a=e.Behavior.dragBase(o);return a.collapse=function(e){if(arguments.length){
switch(t=String(e)){case"y":r=1,n=0;break;case"x":r=0,n=1;break;default:r=1,n=1}return a;
}return t},a.preserveLength=function(t){return arguments.length?(i=!!t,a):i},a},e.Behavior.resize=function(t){
var r=!1,n="left"===t||"right"===t,i={dragstart:function(r){var n=r.drag;n.type="resize";
var i=n.m1,o=n.d;switch(o.drag=n,t){case"left":i.x=o.x+o.dx;break;case"right":i.x=o.x;
break;case"top":i.y=o.y+o.dy;break;case"bottom":i.y=o.y}var a=this.parent;n.max={
x:a.width(),y:a.height()},n.min={x:0,y:0},e.Mark.dispatch("resizestart",n.scene,n.index,r);
},drag:function(t){var o=t.drag,a=o.m1,s=i.positionConstraint;s&&(o.m=o.m.clone(),
s(o));var l=o.m,u=o.d;if(!r||n){var h=Math.min(a.x,l.x),c=Math.max(l.x,a.x);h=i.bound(h,"x"),
c=i.bound(c,"x"),u.x=h,u.dx=c-h}if(!r||!n){var p=Math.min(a.y,l.y),f=Math.max(l.y,a.y);
p=i.bound(p,"y"),f=i.bound(f,"y"),u.y=p,u.dy=f-p}i.autoRender&&this.render(),e.Mark.dispatch("resize",o.scene,o.index,t);
},dragend:function(t){var r=t.drag;r.max=null;try{e.Mark.dispatch("resizeend",r.scene,r.index,t);
}finally{var n=r.d;delete n.drag}}},o=e.Behavior.dragBase(i);return o.preserveOrtho=function(t){
return arguments.length?(r=!!t,o):r},o},e.Behavior.pan=function(){function t(){o=this.index,
i=this.scene,s=e.vector(e.event.pageX,e.event.pageY),a=this.transform(),l=1/(a.k*this.scale),
u&&(u={x:(1-a.k)*this.width(),y:(1-a.k)*this.height()})}function r(t){i&&(i.mark.context(i,o,function(){
var t=(e.event.pageX-s.x)*l,r=(e.event.pageY-s.y)*l,n=a.translate(t,r);u&&(n.x=Math.max(u.x,Math.min(0,n.x)),
n.y=Math.max(u.y,Math.min(0,n.y))),this.transform(n).render()}),e.Mark.dispatch("pan",i,o,t));
}function n(){i=null}var i,o,a,s,l,u;return t.bound=function(t){return arguments.length?(u=Boolean(t),
this):Boolean(u)},e.listen(window,"mousemove",r),e.listen(window,"mouseup",n),t},
e.Behavior.zoom=function(t){function r(r){var i=this.mouse(),o=e.event.wheel*t,a=this.transform().translate(i.x,i.y).scale(0>o?1e3/(1e3-o):(1e3+o)/1e3).translate(-i.x,-i.y);
n&&(a.k=Math.max(1,a.k),a.x=Math.max((1-a.k)*this.width(),Math.min(0,a.x)),a.y=Math.max((1-a.k)*this.height(),Math.min(0,a.y))),
this.transform(a).render(),e.Mark.dispatch("zoom",this.scene,this.index,r)}var n;return arguments.length||(t=1/48),
r.bound=function(t){return arguments.length?(n=Boolean(t),this):Boolean(n)},r},e.Geo=function(){},
e.Geo.projections={mercator:{project:function(t){return{x:t.lng/180,y:t.lat>85?1:t.lat<-85?-1:Math.log(Math.tan(Math.PI/4+e.radians(t.lat)/2))/Math.PI
}},invert:function(t){return{lng:180*t.x,lat:e.degrees(2*Math.atan(Math.exp(t.y*Math.PI))-Math.PI/2)
}}},"gall-peters":{project:function(t){return{x:t.lng/180,y:Math.sin(e.radians(t.lat))
}},invert:function(t){return{lng:180*t.x,lat:e.degrees(Math.asin(t.y))}}},sinusoidal:{
project:function(t){return{x:e.radians(t.lng)*Math.cos(e.radians(t.lat))/Math.PI,
y:t.lat/90}},invert:function(t){return{lng:e.degrees(t.x*Math.PI/Math.cos(t.y*Math.PI/2)),
lat:90*t.y}}},aitoff:{project:function(t){var r=e.radians(t.lng),n=e.radians(t.lat),i=Math.acos(Math.cos(n)*Math.cos(r/2));
return{x:2*(i?Math.cos(n)*Math.sin(r/2)*i/Math.sin(i):0)/Math.PI,y:2*(i?Math.sin(n)*i/Math.sin(i):0)/Math.PI
}},invert:function(t){var r=t.x*Math.PI/2,n=t.y*Math.PI/2;return{lng:e.degrees(r/Math.cos(n)),
lat:e.degrees(n)}}},hammer:{project:function(t){var r=e.radians(t.lng),n=e.radians(t.lat),i=Math.sqrt(1+Math.cos(n)*Math.cos(r/2));
return{x:2*Math.SQRT2*Math.cos(n)*Math.sin(r/2)/i/3,y:Math.SQRT2*Math.sin(n)/i/1.5
}},invert:function(t){var r=3*t.x,n=1.5*t.y,i=Math.sqrt(1-r*r/16-n*n/4);return{lng:e.degrees(2*Math.atan2(i*r,2*(2*i*i-1))),
lat:e.degrees(Math.asin(i*n))}}},identity:{project:function(t){return{x:t.lng/180,
y:t.lat/90}},invert:function(t){return{lng:180*t.x,lat:90*t.y}}}},e.Geo.scale=function(t){
function r(t){if(!o||t.lng!=o.lng||t.lat!=o.lat){o=t;var e=n(t);a={x:c(e.x),y:p(e.y)
}}return a}function n(t){var e={lng:t.lng-f.lng,lat:t.lat};return h.project(e)}function i(t){
var e=h.invert(t);return e.lng+=f.lng,e}var o,a,s={x:0,y:0},l={x:1,y:1},u=[],h=e.Geo.projections.identity,c=e.Scale.linear(-1,1).range(0,1),p=e.Scale.linear(-1,1).range(1,0),f={
lng:0,lat:0};return r.x=function(t){return r(t).x},r.y=function(t){return r(t).y},
r.ticks={lng:function(t){var r,n;if(u.length>1){var i=e.Scale.linear();void 0==t&&(t=10),
r=i.domain(u,function(t){return t.lat}).ticks(t),n=i.domain(u,function(t){return t.lng;
}).ticks(t)}else r=e.range(-80,81,10),n=e.range(-180,181,10);return n.map(function(t){
return r.map(function(e){return{lat:e,lng:t}})})},lat:function(t){return e.transpose(r.ticks.lng(t));
}},r.invert=function(t){return i({x:c.invert(t.x),y:p.invert(t.y)})},r.domain=function(t,r){
if(arguments.length){if(u=t instanceof Array?arguments.length>1?e.map(t,r):t:Array.prototype.slice.call(arguments),
u.length>1){var i=u.map(function(t){return t.lng}),a=u.map(function(t){return t.lat;
});f={lng:(e.max(i)+e.min(i))/2,lat:(e.max(a)+e.min(a))/2};var s=u.map(n);c.domain(s,function(t){
return t.x}),p.domain(s,function(t){return t.y})}else f={lng:0,lat:0},c.domain(-1,1),
p.domain(-1,1);return o=null,this}return u},r.range=function(t,e){return arguments.length?("object"==typeof t?(s={
x:Number(t.x),y:Number(t.y)},l={x:Number(e.x),y:Number(e.y)}):(s={x:0,y:0},l={x:Number(t),
y:Number(e)}),c.range(s.x,l.x),p.range(l.y,s.y),o=null,this):[s,l]},r.projection=function(t){
return arguments.length?(h="string"==typeof t?e.Geo.projections[t]||e.Geo.projections.identity:t,
this.domain(u)):t},e.copyOwn(r,e.Scale.common),arguments.length&&r.projection(t),
r},e});