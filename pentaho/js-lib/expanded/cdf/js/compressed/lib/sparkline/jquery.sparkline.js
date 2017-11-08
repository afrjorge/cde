!function(t,e,i){!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.sparkline&&t(jQuery);
}(function(s){"use strict";var r,n,a,h,o,l,g,p,u,c,d,f,m,v,x,y,C,w,b,R,S,k,M,_,H,W,T,q,I,j,P,L,A={},F=0;
r=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,
width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",
enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",
tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,
numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1
},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,
minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:i,normalRangeMax:i,
normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:i,chartRangeMax:i,chartRangeMinX:i,
chartRangeMaxX:i,tooltipFormat:new a('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],
zeroColor:i,nullColor:i,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:i,chartRangeMin:i,
chartRangeClip:!1,colorMap:i,tooltipFormat:new a('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",
colorMap:{},tooltipFormat:new a('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",
thresholdColor:i,thresholdValue:0,chartRangeMax:i,chartRangeMin:i,chartRangeClip:!1,
tooltipFormat:new a("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",
targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],
base:i,tooltipFormat:new a("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{
fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],
borderWidth:0,borderColor:"#000",tooltipFormat:new a('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",
outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,
target:i,targetColor:"#4a2",chartRangeMax:i,chartRangeMin:i,tooltipFormat:new a("{{field:fields}}: {{value}}"),
tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",
med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",
rw:"Right Whisker"}}}}},W='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',
n=function(){var t,e;return t=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(t.prototype=s.extend(new arguments[0],arguments[arguments.length-1]),
t._super=arguments[0].prototype):t.prototype=arguments[arguments.length-1],arguments.length>2&&(e=Array.prototype.slice.call(arguments,1,-1),
e.unshift(t.prototype),s.extend.apply(s,e))):t.prototype=arguments[0],t.prototype.cls=t,
t},s.SPFormatClass=a=n({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(t,e){
this.format=t,this.fclass=e},render:function(t,e,s){var r,n,a,h,o,l=this,g=t;return this.format.replace(this.fre,function(){
var t;return n=arguments[1],a=arguments[3],r=l.precre.exec(n),r?(o=r[2],n=r[1]):o=!1,
h=g[n],h===i?"":a&&e&&e[a]?(t=e[a],t.get?e[a].get(h)||h:e[a][h]||h):(u(h)&&(h=s.get("numberFormatter")?s.get("numberFormatter")(h):v(h,o,s.get("numberDigitGroupCount"),s.get("numberDigitGroupSep"),s.get("numberDecimalMark"))),
h)})}}),s.spformat=function(t,e){return new a(t,e)},h=function(t,e,i){return e>t?e:t>i?i:t;
},o=function(t,i){var s;return 2===i?(s=e.floor(t.length/2),t.length%2?t[s]:(t[s-1]+t[s])/2):t.length%2?(s=(t.length*i+i)/4,
s%1?(t[e.floor(s)]+t[e.floor(s)-1])/2:t[s-1]):(s=(t.length*i+2)/4,s%1?(t[e.floor(s)]+t[e.floor(s)-1])/2:t[s-1]);
},l=function(t){var e;switch(t){case"undefined":t=i;break;case"null":t=null;break;
case"true":t=!0;break;case"false":t=!1;break;default:e=parseFloat(t),t==e&&(t=e)}
return t},g=function(t){var e,i=[];for(e=t.length;e--;)i[e]=l(t[e]);return i},p=function(t,e){
var i,s,r=[];for(i=0,s=t.length;s>i;i++)t[i]!==e&&r.push(t[i]);return r},u=function(t){
return!isNaN(parseFloat(t))&&isFinite(t)},v=function(t,e,i,r,n){var a,h;for(t=(e===!1?parseFloat(t).toString():t.toFixed(e)).split(""),
a=(a=s.inArray(".",t))<0?t.length:a,a<t.length&&(t[a]=n),h=a-i;h>0;h-=i)t.splice(h,0,r);
return t.join("")},c=function(t,e,i){var s;for(s=e.length;s--;)if((!i||null!==e[s])&&e[s]!==t)return!1;
return!0},d=function(t){var e,i=0;for(e=t.length;e--;)i+="number"==typeof t[e]?t[e]:0;
return i},m=function(t){return s.isArray(t)?t:[t]},f=function(e){var i;t.createStyleSheet?t.createStyleSheet().cssText=e:(i=t.createElement("style"),
i.type="text/css",t.getElementsByTagName("head")[0].appendChild(i),i["string"==typeof t.body.style.WebkitAppearance?"innerText":"innerHTML"]=e);
},s.fn.simpledraw=function(e,r,n,a){var h,o;if(n&&(h=this.data("_jqs_vcanvas")))return h;
if(s.fn.sparkline.canvas===!1)return!1;if(s.fn.sparkline.canvas===i){var l=t.createElement("canvas");
if(l.getContext&&l.getContext("2d"))s.fn.sparkline.canvas=function(t,e,i,s){return new j(t,e,i,s);
};else{if(!t.namespaces||t.namespaces.v)return s.fn.sparkline.canvas=!1,!1;t.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),
s.fn.sparkline.canvas=function(t,e,i,s){return new P(t,e,i)}}}return e===i&&(e=s(this).innerWidth()),
r===i&&(r=s(this).innerHeight()),h=s.fn.sparkline.canvas(e,r,this,a),o=s(this).data("_jqs_mhandler"),
o&&o.registerCanvas(h),h},s.fn.cleardraw=function(){var t=this.data("_jqs_vcanvas");
t&&t.reset()},s.RangeMapClass=x=n({init:function(t){var e,i,s=[];for(e in t)t.hasOwnProperty(e)&&"string"==typeof e&&e.indexOf(":")>-1&&(i=e.split(":"),
i[0]=0===i[0].length?-(1/0):parseFloat(i[0]),i[1]=0===i[1].length?1/0:parseFloat(i[1]),
i[2]=t[e],s.push(i));this.map=t,this.rangelist=s||!1},get:function(t){var e,s,r,n=this.rangelist;
if((r=this.map[t])!==i)return r;if(n)for(e=n.length;e--;)if(s=n[e],s[0]<=t&&s[1]>=t)return s[2];
return i}}),s.range_map=function(t){return new x(t)},y=n({init:function(t,e){var i=s(t);
this.$el=i,this.options=e,this.currentPageX=0,this.currentPageY=0,this.el=t,this.splist=[],
this.tooltip=null,this.over=!1,this.displayTooltips=!e.get("disableTooltips"),this.highlightEnabled=!e.get("disableHighlight");
},registerSparkline:function(t){this.splist.push(t),this.over&&this.updateDisplay();
},registerCanvas:function(t){var e=s(t.canvas);this.canvas=t,this.$canvas=e,e.mouseenter(s.proxy(this.mouseenter,this)),
e.mouseleave(s.proxy(this.mouseleave,this)),e.click(s.proxy(this.mouseclick,this));
},reset:function(t){this.splist=[],this.tooltip&&t&&(this.tooltip.remove(),this.tooltip=i);
},mouseclick:function(t){var e=s.Event("sparklineClick");e.originalEvent=t,e.sparklines=this.splist,
this.$el.trigger(e)},mouseenter:function(e){s(t.body).unbind("mousemove.jqs"),s(t.body).bind("mousemove.jqs",s.proxy(this.mousemove,this)),
this.over=!0,this.currentPageX=e.pageX,this.currentPageY=e.pageY,this.currentEl=e.target,
!this.tooltip&&this.displayTooltips&&(this.tooltip=new C(this.options),this.tooltip.updatePosition(e.pageX,e.pageY)),
this.updateDisplay()},mouseleave:function(){s(t.body).unbind("mousemove.jqs");var e,i,r=this.splist,n=r.length,a=!1;
for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),
i=0;n>i;i++)e=r[i],e.clearRegionHighlight()&&(a=!0);a&&this.canvas.render()},mousemove:function(t){
this.currentPageX=t.pageX,this.currentPageY=t.pageY,this.currentEl=t.target,this.tooltip&&this.tooltip.updatePosition(t.pageX,t.pageY),
this.updateDisplay()},updateDisplay:function(){var t,e,i,r,n,a=this.splist,h=a.length,o=!1,l=this.$canvas.offset(),g=this.currentPageX-l.left,p=this.currentPageY-l.top;
if(this.over){for(i=0;h>i;i++)e=a[i],r=e.setRegionHighlight(this.currentEl,g,p),r&&(o=!0);
if(o){if(n=s.Event("sparklineRegionChange"),n.sparklines=this.splist,this.$el.trigger(n),
this.tooltip){for(t="",i=0;h>i;i++)e=a[i],t+=e.getCurrentRegionTooltip();this.tooltip.setContent(t);
}this.disableHighlight||this.canvas.render()}null===r&&this.mouseleave()}}}),C=n({
sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
init:function(e){var i,r=e.get("tooltipClassname","jqstooltip"),n=this.sizeStyle;this.container=e.get("tooltipContainer")||t.body,
this.tooltipOffsetX=e.get("tooltipOffsetX",10),this.tooltipOffsetY=e.get("tooltipOffsetY",12),
s("#jqssizetip").remove(),s("#jqstooltip").remove(),this.sizetip=s("<div/>",{id:"jqssizetip",
style:n,"class":r}),this.tooltip=s("<div/>",{id:"jqstooltip","class":r}).appendTo(this.container),
i=this.tooltip.offset(),this.offsetLeft=i.left,this.offsetTop=i.top,this.hidden=!0,
s(window).unbind("resize.jqs scroll.jqs"),s(window).bind("resize.jqs scroll.jqs",s.proxy(this.updateWindowDims,this)),
this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=s(window).scrollTop(),
this.scrollLeft=s(window).scrollLeft(),this.scrollRight=this.scrollLeft+s(window).width(),
this.updatePosition()},getSize:function(t){this.sizetip.html(t).appendTo(this.container),
this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove();
},setContent:function(t){return t?(this.getSize(t),this.tooltip.html(t).css({width:this.width,
height:this.height,visibility:"visible"}),void(this.hidden&&(this.hidden=!1,this.updatePosition()))):(this.tooltip.css("visibility","hidden"),
void(this.hidden=!0))},updatePosition:function(t,e){if(t===i){if(this.mousex===i)return;
t=this.mousex-this.offsetLeft,e=this.mousey-this.offsetTop}else this.mousex=t-=this.offsetLeft,
this.mousey=e-=this.offsetTop;this.height&&this.width&&!this.hidden&&(e-=this.height+this.tooltipOffsetY,
t+=this.tooltipOffsetX,e<this.scrollTop&&(e=this.scrollTop),t<this.scrollLeft?t=this.scrollLeft:t+this.width>this.scrollRight&&(t=this.scrollRight-this.width),
this.tooltip.css({left:t,top:e}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),
this.sizetip=this.tooltip=i,s(window).unbind("resize.jqs scroll.jqs")}}),T=function(){
f(W)},s(T),L=[],s.fn.sparkline=function(e,r){return this.each(function(){var n,a,h=new s.fn.sparkline.options(this,r),o=s(this);
if(n=function(){var r,n,a,l,g,p,u;return"html"===e||e===i?(u=this.getAttribute(h.get("tagValuesAttribute")),
(u===i||null===u)&&(u=o.html()),r=u.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")):r=e,
n="auto"===h.get("width")?r.length*h.get("defaultPixelsPerValue"):h.get("width"),
"auto"===h.get("height")?h.get("composite")&&s.data(this,"_jqs_vcanvas")||(l=t.createElement("span"),
l.innerHTML="a",o.html(l),a=s(l).innerHeight()||s(l).height(),s(l).remove(),l=null):a=h.get("height"),
h.get("disableInteraction")?g=!1:(g=s.data(this,"_jqs_mhandler"),g?h.get("composite")||g.reset():(g=new y(this,h),
s.data(this,"_jqs_mhandler",g))),h.get("composite")&&!s.data(this,"_jqs_vcanvas")?void(s.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),
s.data(this,"_jqs_errnotify",!0))):(p=new(s.fn.sparkline[h.get("type")])(this,r,h,n,a),
p.render(),void(g&&g.registerSparkline(p)))},s(this).html()&&!h.get("disableHiddenCheck")&&s(this).is(":hidden")||!s(this).parents("body").length){
if(!h.get("composite")&&s.data(this,"_jqs_pending"))for(a=L.length;a;a--)L[a-1][0]==this&&L.splice(a-1,1);
L.push([this,n]),s.data(this,"_jqs_pending",!0)}else n.call(this)})},s.fn.sparkline.defaults=r(),
s.sparkline_display_visible=function(){var t,e,i,r=[];for(e=0,i=L.length;i>e;e++)t=L[e][0],
s(t).is(":visible")&&!s(t).parents().is(":hidden")?(L[e][1].call(t),s.data(L[e][0],"_jqs_pending",!1),
r.push(e)):s(t).closest("html").length||s.data(t,"_jqs_pending")||(s.data(L[e][0],"_jqs_pending",!1),
r.push(e));for(e=r.length;e;e--)L.splice(r[e-1],1)},s.fn.sparkline.options=n({init:function(t,e){
var i,r,n,a;this.userOptions=e=e||{},this.tag=t,this.tagValCache={},r=s.fn.sparkline.defaults,
n=r.common,this.tagOptionsPrefix=e.enableTagOptions&&(e.tagOptionsPrefix||n.tagOptionsPrefix),
a=this.getTagSetting("type"),i=a===A?r[e.type||n.type]:r[a],this.mergedOptions=s.extend({},n,i,e);
},getTagSetting:function(t){var e,s,r,n,a=this.tagOptionsPrefix;if(a===!1||a===i)return A;
if(this.tagValCache.hasOwnProperty(t))e=this.tagValCache.key;else{if(e=this.tag.getAttribute(a+t),
e===i||null===e)e=A;else if("["===e.substr(0,1))for(e=e.substr(1,e.length-2).split(","),
s=e.length;s--;)e[s]=l(e[s].replace(/(^\s*)|(\s*$)/g,""));else if("{"===e.substr(0,1))for(r=e.substr(1,e.length-2).split(","),
e={},s=r.length;s--;)n=r[s].split(":",2),e[n[0].replace(/(^\s*)|(\s*$)/g,"")]=l(n[1].replace(/(^\s*)|(\s*$)/g,""));else e=l(e);
this.tagValCache.key=e}return e},get:function(t,e){var s,r=this.getTagSetting(t);return r!==A?r:(s=this.mergedOptions[t])===i?e:s;
}}),s.fn.sparkline._base=n({disabled:!1,init:function(t,e,r,n,a){this.el=t,this.$el=s(t),
this.values=e,this.options=r,this.width=n,this.height=a,this.currentRegion=i},initTarget:function(){
var t=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),t))?(this.canvasWidth=this.target.pixelWidth,
this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",
!1):!0},getRegion:function(t,e){},setRegionHighlight:function(t,e,s){var r,n=this.currentRegion,a=!this.options.get("disableHighlight");
return e>this.canvasWidth||s>this.canvasHeight||0>e||0>s?null:(r=this.getRegion(t,e,s),
n!==r?(n!==i&&a&&this.removeHighlight(),this.currentRegion=r,r!==i&&a&&this.renderHighlight(),
!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==i?(this.removeHighlight(),
this.currentRegion=i,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},
removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(t){},
getCurrentRegionTooltip:function(){var t,e,r,n,h,o,l,g,p,u,c,d,f,m,v=this.options,x="",y=[];
if(this.currentRegion===i)return"";if(t=this.getCurrentRegionFields(),c=v.get("tooltipFormatter"))return c(this,v,t);
if(v.get("tooltipChartTitle")&&(x+='<div class="jqs jqstitle">'+v.get("tooltipChartTitle")+"</div>\n"),
e=this.options.get("tooltipFormat"),!e)return"";if(s.isArray(e)||(e=[e]),s.isArray(t)||(t=[t]),
l=this.options.get("tooltipFormatFieldlist"),g=this.options.get("tooltipFormatFieldlistKey"),
l&&g){for(p=[],o=t.length;o--;)u=t[o][g],-1!=(m=s.inArray(u,l))&&(p[m]=t[o]);t=p}
for(r=e.length,f=t.length,o=0;r>o;o++)for(d=e[o],"string"==typeof d&&(d=new a(d)),
n=d.fclass||"jqsfield",m=0;f>m;m++)t[m].isNull&&v.get("tooltipSkipNull")||(s.extend(t[m],{
prefix:v.get("tooltipPrefix"),suffix:v.get("tooltipSuffix")}),h=d.render(t[m],v.get("tooltipValueLookups"),v),
y.push('<div class="'+n+'">'+h+"</div>"));return y.length?x+y.join("\n"):""},getCurrentRegionFields:function(){},
calcHighlightColor:function(t,i){var s,r,n,a,o=i.get("highlightColor"),l=i.get("highlightLighten");
if(o)return o;if(l&&(s=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))){
for(n=[],r=4===t.length?16:1,a=0;3>a;a++)n[a]=h(e.round(parseInt(s[a+1],16)*r*l),0,255);
return"rgb("+n.join(",")+")"}return t}}),w={changeHighlight:function(t){var e,i=this.currentRegion,r=this.target,n=this.regionShapes[i];
n&&(e=this.renderRegion(i,t),s.isArray(e)||s.isArray(n)?(r.replaceWithShapes(n,e),
this.regionShapes[i]=s.map(e,function(t){return t.id})):(r.replaceWithShape(n,e),
this.regionShapes[i]=e.id))},render:function(){var t,e,i,r,n=this.values,a=this.target,h=this.regionShapes;
if(this.cls._super.render.call(this)){for(i=n.length;i--;)if(t=this.renderRegion(i))if(s.isArray(t)){
for(e=[],r=t.length;r--;)t[r].append(),e.push(t[r].id);h[i]=e}else t.append(),h[i]=t.id;else h[i]=null;
a.render()}}},s.fn.sparkline.line=b=n(s.fn.sparkline._base,{type:"line",init:function(t,e,i,s,r){
b._super.init.call(this,t,e,i,s,r),this.vertices=[],this.regionMap=[],this.xvalues=[],
this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,
this.initTarget()},getRegion:function(t,e,s){var r,n=this.regionMap;for(r=n.length;r--;)if(null!==n[r]&&e>=n[r][0]&&e<=n[r][1])return n[r][2];
return i},getCurrentRegionFields:function(){var t=this.currentRegion;return{isNull:null===this.yvalues[t],
x:this.xvalues[t],y:this.yvalues[t],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),
offset:t}},renderHighlight:function(){var t,e,s=this.currentRegion,r=this.target,n=this.vertices[s],a=this.options,h=a.get("spotRadius"),o=a.get("highlightSpotColor"),l=a.get("highlightLineColor");
n&&(h&&o&&(t=r.drawCircle(n[0],n[1],h,i,o),this.highlightSpotId=t.id,r.insertAfterShape(this.lastShapeId,t)),
l&&(e=r.drawLine(n[0],this.canvasTop,n[0],this.canvasTop+this.canvasHeight,l),this.highlightLineId=e.id,
r.insertAfterShape(this.lastShapeId,e)))},removeHighlight:function(){var t=this.target;
this.highlightSpotId&&(t.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),
this.highlightLineId&&(t.removeShapeId(this.highlightLineId),this.highlightLineId=null);
},scanValues:function(){var t,i,s,r,n,a=this.values,h=a.length,o=this.xvalues,l=this.yvalues,g=this.yminmax;
for(t=0;h>t;t++)i=a[t],s="string"==typeof a[t],r="object"==typeof a[t]&&a[t]instanceof Array,
n=s&&a[t].split(":"),s&&2===n.length?(o.push(Number(n[0])),l.push(Number(n[1])),g.push(Number(n[1]))):r?(o.push(i[0]),
l.push(i[1]),g.push(i[1])):(o.push(t),null===a[t]||"null"===a[t]?l.push(null):(l.push(Number(i)),
g.push(Number(i))));this.options.get("xvalues")&&(o=this.options.get("xvalues")),
this.maxy=this.maxyorg=e.max.apply(e,g),this.miny=this.minyorg=e.min.apply(e,g),this.maxx=e.max.apply(e,o),
this.minx=e.min.apply(e,o),this.xvalues=o,this.yvalues=l,this.yminmax=g},processRangeOptions:function(){
var t=this.options,e=t.get("normalRangeMin"),s=t.get("normalRangeMax");e!==i&&(e<this.miny&&(this.miny=e),
s>this.maxy&&(this.maxy=s)),t.get("chartRangeMin")!==i&&(t.get("chartRangeClip")||t.get("chartRangeMin")<this.miny)&&(this.miny=t.get("chartRangeMin")),
t.get("chartRangeMax")!==i&&(t.get("chartRangeClip")||t.get("chartRangeMax")>this.maxy)&&(this.maxy=t.get("chartRangeMax")),
t.get("chartRangeMinX")!==i&&(t.get("chartRangeClipX")||t.get("chartRangeMinX")<this.minx)&&(this.minx=t.get("chartRangeMinX")),
t.get("chartRangeMaxX")!==i&&(t.get("chartRangeClipX")||t.get("chartRangeMaxX")>this.maxx)&&(this.maxx=t.get("chartRangeMaxX"));
},drawNormalRange:function(t,s,r,n,a){var h=this.options.get("normalRangeMin"),o=this.options.get("normalRangeMax"),l=s+e.round(r-r*((o-this.miny)/a)),g=e.round(r*(o-h)/a);
this.target.drawRect(t,l,n,g,i,this.options.get("normalRangeColor")).append()},render:function(){
var t,r,n,a,h,o,l,g,p,u,c,d,f,m,v,y,C,w,R,S,k,M,_,H,W,T=this.options,q=this.target,I=this.canvasWidth,j=this.canvasHeight,P=this.vertices,L=T.get("spotRadius"),A=this.regionMap;
if(b._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),_=this.xvalues,
H=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(a=h=0,t=this.maxx-this.minx===0?1:this.maxx-this.minx,
r=this.maxy-this.miny===0?1:this.maxy-this.miny,n=this.yvalues.length-1,L&&(4*L>I||4*L>j)&&(L=0),
L&&(k=T.get("highlightSpotColor")&&!T.get("disableInteraction"),(k||T.get("minSpotColor")||T.get("spotColor")&&H[n]===this.miny)&&(j-=e.ceil(L)),
(k||T.get("maxSpotColor")||T.get("spotColor")&&H[n]===this.maxy)&&(j-=e.ceil(L),a+=e.ceil(L)),
(k||(T.get("minSpotColor")||T.get("maxSpotColor"))&&(H[0]===this.miny||H[0]===this.maxy))&&(h+=e.ceil(L),
I-=e.ceil(L)),(k||T.get("spotColor")||T.get("minSpotColor")||T.get("maxSpotColor")&&(H[n]===this.miny||H[n]===this.maxy))&&(I-=e.ceil(L))),
j--,T.get("normalRangeMin")===i||T.get("drawNormalOnTop")||this.drawNormalRange(h,a,j,I,r),
l=[],g=[l],m=v=null,y=H.length,W=0;y>W;W++)p=_[W],c=_[W+1],u=H[W],d=h+e.round((p-this.minx)*(I/t)),
f=y-1>W?h+e.round((c-this.minx)*(I/t)):I,v=d+(f-d)/2,A[W]=[m||0,v,W],m=v,null===u?W&&(null!==H[W-1]&&(l=[],
g.push(l)),P.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),l.length||l.push([d,a+j]),
o=[d,a+e.round(j-j*((u-this.miny)/r))],l.push(o),P.push(o));for(C=[],w=[],R=g.length,
W=0;R>W;W++)l=g[W],l.length&&(T.get("fillColor")&&(l.push([l[l.length-1][0],a+j]),
w.push(l.slice(0)),l.pop()),l.length>2&&(l[0]=[l[0][0],l[1][1]]),C.push(l));for(R=w.length,
W=0;R>W;W++)q.drawShape(w[W],T.get("fillColor"),T.get("fillColor")).append();for(T.get("normalRangeMin")!==i&&T.get("drawNormalOnTop")&&this.drawNormalRange(h,a,j,I,r),
R=C.length,W=0;R>W;W++)q.drawShape(C[W],T.get("lineColor"),i,T.get("lineWidth")).append();
if(L&&T.get("valueSpots"))for(S=T.get("valueSpots"),S.get===i&&(S=new x(S)),W=0;y>W;W++)M=S.get(H[W]),
M&&q.drawCircle(h+e.round((_[W]-this.minx)*(I/t)),a+e.round(j-j*((H[W]-this.miny)/r)),L,i,M).append();
L&&T.get("spotColor")&&null!==H[n]&&q.drawCircle(h+e.round((_[_.length-1]-this.minx)*(I/t)),a+e.round(j-j*((H[n]-this.miny)/r)),L,i,T.get("spotColor")).append(),
this.maxy!==this.minyorg&&(L&&T.get("minSpotColor")&&(p=_[s.inArray(this.minyorg,H)],
q.drawCircle(h+e.round((p-this.minx)*(I/t)),a+e.round(j-j*((this.minyorg-this.miny)/r)),L,i,T.get("minSpotColor")).append()),
L&&T.get("maxSpotColor")&&(p=_[s.inArray(this.maxyorg,H)],q.drawCircle(h+e.round((p-this.minx)*(I/t)),a+e.round(j-j*((this.maxyorg-this.miny)/r)),L,i,T.get("maxSpotColor")).append())),
this.lastShapeId=q.getLastShapeId(),this.canvasTop=a,q.render()}}}),s.fn.sparkline.bar=R=n(s.fn.sparkline._base,w,{
type:"bar",init:function(t,r,n,a,o){var u,c,d,f,m,v,y,C,w,b,S,k,M,_,H,W,T,q,I,j,P,L,A=parseInt(n.get("barWidth"),10),F=parseInt(n.get("barSpacing"),10),B=n.get("chartRangeMin"),O=n.get("chartRangeMax"),V=n.get("chartRangeClip"),X=1/0,z=-(1/0);
for(R._super.init.call(this,t,r,n,a,o),v=0,y=r.length;y>v;v++)j=r[v],u="string"==typeof j&&j.indexOf(":")>-1,
(u||s.isArray(j))&&(H=!0,u&&(j=r[v]=g(j.split(":"))),j=p(j,null),c=e.min.apply(e,j),
d=e.max.apply(e,j),X>c&&(X=c),d>z&&(z=d));this.stacked=H,this.regionShapes={},this.barWidth=A,
this.barSpacing=F,this.totalBarWidth=A+F,this.width=a=r.length*A+(r.length-1)*F,this.initTarget(),
V&&(M=B===i?-(1/0):B,_=O===i?1/0:O),m=[],f=H?[]:m;var N=[],E=[];for(v=0,y=r.length;y>v;v++)if(H)for(W=r[v],
r[v]=I=[],N[v]=0,f[v]=E[v]=0,T=0,q=W.length;q>T;T++)j=I[T]=V?h(W[T],M,_):W[T],null!==j&&(j>0&&(N[v]+=j),
0>X&&z>0?0>j?E[v]+=e.abs(j):f[v]+=j:f[v]+=e.abs(j-(0>j?z:X)),m.push(j));else j=V?h(r[v],M,_):r[v],
j=r[v]=l(j),null!==j&&m.push(j);this.max=k=e.max.apply(e,m),this.min=S=e.min.apply(e,m),
this.stackMax=z=H?e.max.apply(e,N):k,this.stackMin=X=H?e.min.apply(e,m):S,n.get("chartRangeMin")!==i&&(n.get("chartRangeClip")||n.get("chartRangeMin")<S)&&(S=n.get("chartRangeMin")),
n.get("chartRangeMax")!==i&&(n.get("chartRangeClip")||n.get("chartRangeMax")>k)&&(k=n.get("chartRangeMax")),
this.zeroAxis=w=n.get("zeroAxis",!0),b=0>=S&&k>=0&&w?0:0==w?S:S>0?S:k,this.xaxisOffset=b,
C=H?e.max.apply(e,f)+e.max.apply(e,E):k-S,this.canvasHeightEf=w&&0>S?this.canvasHeight-2:this.canvasHeight-1,
b>S?(L=H&&k>=0?z:k,P=(L-b)/C*this.canvasHeight,P!==e.ceil(P)&&(this.canvasHeightEf-=2,
P=e.ceil(P))):P=this.canvasHeight,this.yoffset=P,s.isArray(n.get("colorMap"))?(this.colorMapByIndex=n.get("colorMap"),
this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=n.get("colorMap"),
this.colorMapByValue&&this.colorMapByValue.get===i&&(this.colorMapByValue=new x(this.colorMapByValue))),
this.range=C},getRegion:function(t,s,r){var n=e.floor(s/this.totalBarWidth);return 0>n||n>=this.values.length?i:n;
},getCurrentRegionFields:function(){var t,e,i=this.currentRegion,s=m(this.values[i]),r=[];
for(e=s.length;e--;)t=s[e],r.push({isNull:null===t,value:t,color:this.calcColor(e,t,i),
offset:i});return r},calcColor:function(t,e,r){var n,a,h=this.colorMapByIndex,o=this.colorMapByValue,l=this.options;
return n=this.stacked?l.get("stackedBarColor"):0>e?l.get("negBarColor"):l.get("barColor"),
0===e&&l.get("zeroColor")!==i&&(n=l.get("zeroColor")),o&&(a=o.get(e))?n=a:h&&h.length>r&&(n=h[r]),
s.isArray(n)?n[t%n.length]:n},renderRegion:function(t,r){var n,a,h,o,l,g,p,u,d,f,m=this.values[t],v=this.options,x=this.xaxisOffset,y=[],C=this.range,w=this.stacked,b=this.target,R=t*this.totalBarWidth,S=this.canvasHeightEf,k=this.yoffset;
if(m=s.isArray(m)?m:[m],p=m.length,u=m[0],o=c(null,m),f=c(x,m,!0),o)return v.get("nullColor")?(h=r?v.get("nullColor"):this.calcHighlightColor(v.get("nullColor"),v),
n=k>0?k-1:k,b.drawRect(R,n,this.barWidth-1,0,h,h)):i;for(l=k,g=0;p>g;g++){if(u=m[g],
w&&u===x){if(!f||d)continue;d=!0}a=C>0?e.floor(S*(e.abs(u-x)/C))+1:1,x>u||u===x&&0===k?(n=l,
l+=a):(n=k-a,k-=a),h=this.calcColor(g,u,t),r&&(h=this.calcHighlightColor(h,v)),y.push(b.drawRect(R,n,this.barWidth-1,a-1,h,h));
}return 1===y.length?y[0]:y}}),s.fn.sparkline.tristate=S=n(s.fn.sparkline._base,w,{
type:"tristate",init:function(t,e,r,n,a){var h=parseInt(r.get("barWidth"),10),o=parseInt(r.get("barSpacing"),10);
S._super.init.call(this,t,e,r,n,a),this.regionShapes={},this.barWidth=h,this.barSpacing=o,
this.totalBarWidth=h+o,this.values=s.map(e,Number),this.width=n=e.length*h+(e.length-1)*o,
s.isArray(r.get("colorMap"))?(this.colorMapByIndex=r.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,
this.colorMapByValue=r.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===i&&(this.colorMapByValue=new x(this.colorMapByValue))),
this.initTarget()},getRegion:function(t,i,s){return e.floor(i/this.totalBarWidth);
},getCurrentRegionFields:function(){var t=this.currentRegion;return{isNull:this.values[t]===i,
value:this.values[t],color:this.calcColor(this.values[t],t),offset:t}},calcColor:function(t,e){
var i,s,r=this.values,n=this.options,a=this.colorMapByIndex,h=this.colorMapByValue;
return i=h&&(s=h.get(t))?s:a&&a.length>e?a[e]:r[e]<0?n.get("negBarColor"):r[e]>0?n.get("posBarColor"):n.get("zeroBarColor");
},renderRegion:function(t,i){var s,r,n,a,h,o,l=this.values,g=this.options,p=this.target;
return s=p.pixelHeight,n=e.round(s/2),a=t*this.totalBarWidth,l[t]<0?(h=n,r=n-1):l[t]>0?(h=0,
r=n-1):(h=n-1,r=2),o=this.calcColor(l[t],t),null!==o?(i&&(o=this.calcHighlightColor(o,g)),
p.drawRect(a,h,this.barWidth-1,r-1,o,o)):void 0}}),s.fn.sparkline.discrete=k=n(s.fn.sparkline._base,w,{
type:"discrete",init:function(t,r,n,a,h){k._super.init.call(this,t,r,n,a,h),this.regionShapes={},
this.values=r=s.map(r,Number),this.min=e.min.apply(e,r),this.max=e.max.apply(e,r),
this.range=this.max-this.min,this.width=a="auto"===n.get("width")?2*r.length:this.width,
this.interval=e.floor(a/r.length),this.itemWidth=a/r.length,n.get("chartRangeMin")!==i&&(n.get("chartRangeClip")||n.get("chartRangeMin")<this.min)&&(this.min=n.get("chartRangeMin")),
n.get("chartRangeMax")!==i&&(n.get("chartRangeClip")||n.get("chartRangeMax")>this.max)&&(this.max=n.get("chartRangeMax")),
this.initTarget(),this.target&&(this.lineHeight="auto"===n.get("lineHeight")?e.round(.3*this.canvasHeight):n.get("lineHeight"));
},getRegion:function(t,i,s){return e.floor(i/this.itemWidth)},getCurrentRegionFields:function(){
var t=this.currentRegion;return{isNull:this.values[t]===i,value:this.values[t],offset:t
}},renderRegion:function(t,i){var s,r,n,a,o=this.values,l=this.options,g=this.min,p=this.max,u=this.range,c=this.interval,d=this.target,f=this.canvasHeight,m=this.lineHeight,v=f-m;
return r=h(o[t],g,p),a=t*c,s=e.round(v-v*((r-g)/u)),n=l.get("thresholdColor")&&r<l.get("thresholdValue")?l.get("thresholdColor"):l.get("lineColor"),
i&&(n=this.calcHighlightColor(n,l)),d.drawLine(a,s,a,s+m,n)}}),s.fn.sparkline.bullet=M=n(s.fn.sparkline._base,{
type:"bullet",init:function(t,s,r,n,a){var h,o,l;M._super.init.call(this,t,s,r,n,a),
this.values=s=g(s),l=s.slice(),l[0]=null===l[0]?l[2]:l[0],l[1]=null===s[1]?l[2]:l[1],
h=e.min.apply(e,s),o=e.max.apply(e,s),h=r.get("base")===i?0>h?h:0:r.get("base"),this.min=h,
this.max=o,this.range=o-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=n="auto"===r.get("width")?"4.0em":n,
this.target=this.$el.simpledraw(n,a,r.get("composite")),s.length||(this.disabled=!0),
this.initTarget()},getRegion:function(t,e,s){var r=this.target.getShapeAt(t,e,s);return r!==i&&this.shapes[r]!==i?this.shapes[r]:i;
},getCurrentRegionFields:function(){var t=this.currentRegion;return{fieldkey:t.substr(0,1),
value:this.values[t.substr(1)],region:t}},changeHighlight:function(t){var e,i=this.currentRegion,s=this.valueShapes[i];
switch(delete this.shapes[s],i.substr(0,1)){case"r":e=this.renderRange(i.substr(1),t);
break;case"p":e=this.renderPerformance(t);break;case"t":e=this.renderTarget(t)}this.valueShapes[i]=e.id,
this.shapes[e.id]=i,this.target.replaceWithShape(s,e)},renderRange:function(t,i){
var s=this.values[t],r=e.round(this.canvasWidth*((s-this.min)/this.range)),n=this.options.get("rangeColors")[t-2];
return i&&(n=this.calcHighlightColor(n,this.options)),this.target.drawRect(0,0,r-1,this.canvasHeight-1,n,n);
},renderPerformance:function(t){var i=this.values[1],s=e.round(this.canvasWidth*((i-this.min)/this.range)),r=this.options.get("performanceColor");
return t&&(r=this.calcHighlightColor(r,this.options)),this.target.drawRect(0,e.round(.3*this.canvasHeight),s-1,e.round(.4*this.canvasHeight)-1,r,r);
},renderTarget:function(t){var i=this.values[0],s=e.round(this.canvasWidth*((i-this.min)/this.range)-this.options.get("targetWidth")/2),r=e.round(.1*this.canvasHeight),n=this.canvasHeight-2*r,a=this.options.get("targetColor");
return t&&(a=this.calcHighlightColor(a,this.options)),this.target.drawRect(s,r,this.options.get("targetWidth")-1,n-1,a,a);
},render:function(){var t,e,i=this.values.length,s=this.target;if(M._super.render.call(this)){
for(t=2;i>t;t++)e=this.renderRange(t).append(),this.shapes[e.id]="r"+t,this.valueShapes["r"+t]=e.id;
null!==this.values[1]&&(e=this.renderPerformance().append(),this.shapes[e.id]="p1",
this.valueShapes.p1=e.id),null!==this.values[0]&&(e=this.renderTarget().append(),
this.shapes[e.id]="t0",this.valueShapes.t0=e.id),s.render()}}}),s.fn.sparkline.pie=_=n(s.fn.sparkline._base,{
type:"pie",init:function(t,i,r,n,a){var h,o=0;if(_._super.init.call(this,t,i,r,n,a),
this.shapes={},this.valueShapes={},this.values=i=s.map(i,Number),"auto"===r.get("width")&&(this.width=this.height),
i.length>0)for(h=i.length;h--;)o+=i[h];this.total=o,this.initTarget(),this.radius=e.floor(e.min(this.canvasWidth,this.canvasHeight)/2);
},getRegion:function(t,e,s){var r=this.target.getShapeAt(t,e,s);return r!==i&&this.shapes[r]!==i?this.shapes[r]:i;
},getCurrentRegionFields:function(){var t=this.currentRegion;return{isNull:this.values[t]===i,
value:this.values[t],percent:this.values[t]/this.total*100,color:this.options.get("sliceColors")[t%this.options.get("sliceColors").length],
offset:t}},changeHighlight:function(t){var e=this.currentRegion,i=this.renderSlice(e,t),s=this.valueShapes[e];
delete this.shapes[s],this.target.replaceWithShape(s,i),this.valueShapes[e]=i.id,
this.shapes[i.id]=e},renderSlice:function(t,s){var r,n,a,h,o,l=this.target,g=this.options,p=this.radius,u=g.get("borderWidth"),c=g.get("offset"),d=2*e.PI,f=this.values,m=this.total,v=c?2*e.PI*(c/360):0;
for(h=f.length,a=0;h>a;a++){if(r=v,n=v,m>0&&(n=v+d*(f[a]/m)),t===a)return o=g.get("sliceColors")[a%g.get("sliceColors").length],
s&&(o=this.calcHighlightColor(o,g)),l.drawPieSlice(p,p,p-u,r,n,i,o);v=n}},render:function(){
var t,s,r=this.target,n=this.values,a=this.options,h=this.radius,o=a.get("borderWidth");
if(_._super.render.call(this)){for(o&&r.drawCircle(h,h,e.floor(h-o/2),a.get("borderColor"),i,o).append(),
s=n.length;s--;)n[s]&&(t=this.renderSlice(s).append(),this.valueShapes[s]=t.id,this.shapes[t.id]=s);
r.render()}}}),s.fn.sparkline.box=H=n(s.fn.sparkline._base,{type:"box",init:function(t,e,i,r,n){
H._super.init.call(this,t,e,i,r,n),this.values=s.map(e,Number),this.width="auto"===i.get("width")?"4.0em":r,
this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1;
},getCurrentRegionFields:function(){var t=[{field:"lq",value:this.quartiles[0]},{
field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==i&&t.push({
field:"lo",value:this.loutlier}),this.routlier!==i&&t.push({field:"ro",value:this.routlier
}),this.lwhisker!==i&&t.push({field:"lw",value:this.lwhisker}),this.rwhisker!==i&&t.push({
field:"rw",value:this.rwhisker}),t},render:function(){var t,s,r,n,a,h,l,g,p,u,c,d=this.target,f=this.values,m=f.length,v=this.options,x=this.canvasWidth,y=this.canvasHeight,C=v.get("chartRangeMin")===i?e.min.apply(e,f):v.get("chartRangeMin"),w=v.get("chartRangeMax")===i?e.max.apply(e,f):v.get("chartRangeMax"),b=0;
if(H._super.render.call(this)){if(v.get("raw"))v.get("showOutliers")&&f.length>5?(s=f[0],
t=f[1],n=f[2],a=f[3],h=f[4],l=f[5],g=f[6]):(t=f[0],n=f[1],a=f[2],h=f[3],l=f[4]);else if(f.sort(function(t,e){
return t-e}),n=o(f,1),a=o(f,2),h=o(f,3),r=h-n,v.get("showOutliers")){for(t=l=i,p=0;m>p;p++)t===i&&f[p]>n-r*v.get("outlierIQR")&&(t=f[p]),
f[p]<h+r*v.get("outlierIQR")&&(l=f[p]);s=f[0],g=f[m-1]}else t=f[0],l=f[m-1];this.quartiles=[n,a,h],
this.lwhisker=t,this.rwhisker=l,this.loutlier=s,this.routlier=g,c=x/(w-C+1),v.get("showOutliers")&&(b=e.ceil(v.get("spotRadius")),
x-=2*e.ceil(v.get("spotRadius")),c=x/(w-C+1),t>s&&d.drawCircle((s-C)*c+b,y/2,v.get("spotRadius"),v.get("outlierLineColor"),v.get("outlierFillColor")).append(),
g>l&&d.drawCircle((g-C)*c+b,y/2,v.get("spotRadius"),v.get("outlierLineColor"),v.get("outlierFillColor")).append()),
d.drawRect(e.round((n-C)*c+b),e.round(.1*y),e.round((h-n)*c),e.round(.8*y),v.get("boxLineColor"),v.get("boxFillColor")).append(),
d.drawLine(e.round((t-C)*c+b),e.round(y/2),e.round((n-C)*c+b),e.round(y/2),v.get("lineColor")).append(),
d.drawLine(e.round((t-C)*c+b),e.round(y/4),e.round((t-C)*c+b),e.round(y-y/4),v.get("whiskerColor")).append(),
d.drawLine(e.round((l-C)*c+b),e.round(y/2),e.round((h-C)*c+b),e.round(y/2),v.get("lineColor")).append(),
d.drawLine(e.round((l-C)*c+b),e.round(y/4),e.round((l-C)*c+b),e.round(y-y/4),v.get("whiskerColor")).append(),
d.drawLine(e.round((a-C)*c+b),e.round(.1*y),e.round((a-C)*c+b),e.round(.9*y),v.get("medianColor")).append(),
v.get("target")&&(u=e.ceil(v.get("spotRadius")),d.drawLine(e.round((v.get("target")-C)*c+b),e.round(y/2-u),e.round((v.get("target")-C)*c+b),e.round(y/2+u),v.get("targetColor")).append(),
d.drawLine(e.round((v.get("target")-C)*c+b-u),e.round(y/2),e.round((v.get("target")-C)*c+b+u),e.round(y/2),v.get("targetColor")).append()),
d.render()}}}),q=n({init:function(t,e,i,s){this.target=t,this.id=e,this.type=i,this.args=s;
},append:function(){return this.target.appendShape(this),this}}),I=n({_pxregex:/(\d+)(px)?\s*$/i,
init:function(t,e,i){t&&(this.width=t,this.height=e,this.target=i,this.lastShapeId=null,
i[0]&&(i=i[0]),s.data(i,"_jqs_vcanvas",this))},drawLine:function(t,e,i,s,r,n){return this.drawShape([[t,e],[i,s]],r,n);
},drawShape:function(t,e,i,s){return this._genShape("Shape",[t,e,i,s])},drawCircle:function(t,e,i,s,r,n){
return this._genShape("Circle",[t,e,i,s,r,n])},drawPieSlice:function(t,e,i,s,r,n,a){
return this._genShape("PieSlice",[t,e,i,s,r,n,a])},drawRect:function(t,e,i,s,r,n){
return this._genShape("Rect",[t,e,i,s,r,n])},getElement:function(){return this.canvas;
},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented");
},_insert:function(t,e){s(e).html(t)},_calculatePixelDims:function(t,e,i){var r;r=this._pxregex.exec(e),
r?this.pixelHeight=r[1]:this.pixelHeight=s(i).height(),r=this._pxregex.exec(t),r?this.pixelWidth=r[1]:this.pixelWidth=s(i).width();
},_genShape:function(t,e){var i=F++;return e.unshift(i),new q(this,i,t,e)},appendShape:function(t){
alert("appendShape not implemented")},replaceWithShape:function(t,e){alert("replaceWithShape not implemented");
},insertAfterShape:function(t,e){alert("insertAfterShape not implemented")},removeShapeId:function(t){
alert("removeShapeId not implemented")},getShapeAt:function(t,e,i){alert("getShapeAt not implemented");
},render:function(){alert("render not implemented")}}),j=n(I,{init:function(e,r,n,a){
j._super.init.call(this,e,r,n),this.canvas=t.createElement("canvas"),n[0]&&(n=n[0]),
s.data(n,"_jqs_vcanvas",this),s(this.canvas).css({display:"inline-block",width:e,
height:r,verticalAlign:"top"}),this._insert(this.canvas,n),this._calculatePixelDims(e,r,this.canvas),
this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=a,
this.shapes={},this.shapeseq=[],this.currentTargetShapeId=i,s(this.canvas).css({width:this.pixelWidth,
height:this.pixelHeight})},_getContext:function(t,e,s){var r=this.canvas.getContext("2d");
return t!==i&&(r.strokeStyle=t),r.lineWidth=s===i?1:s,e!==i&&(r.fillStyle=e),r},reset:function(){
var t=this._getContext();t.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},
this.shapeseq=[],this.currentTargetShapeId=i},_drawShape:function(t,e,s,r,n){var a,h,o=this._getContext(s,r,n);
for(o.beginPath(),o.moveTo(e[0][0]+.5,e[0][1]+.5),a=1,h=e.length;h>a;a++)o.lineTo(e[a][0]+.5,e[a][1]+.5);
s!==i&&o.stroke(),r!==i&&o.fill(),this.targetX!==i&&this.targetY!==i&&o.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=t);
},_drawCircle:function(t,s,r,n,a,h,o){var l=this._getContext(a,h,o);l.beginPath(),
l.arc(s,r,n,0,2*e.PI,!1),this.targetX!==i&&this.targetY!==i&&l.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=t),
a!==i&&l.stroke(),h!==i&&l.fill()},_drawPieSlice:function(t,e,s,r,n,a,h,o){var l=this._getContext(h,o);
l.beginPath(),l.moveTo(e,s),l.arc(e,s,r,n,a,!1),l.lineTo(e,s),l.closePath(),h!==i&&l.stroke(),
o&&l.fill(),this.targetX!==i&&this.targetY!==i&&l.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=t);
},_drawRect:function(t,e,i,s,r,n,a){return this._drawShape(t,[[e,i],[e+s,i],[e+s,i+r],[e,i+r],[e,i]],n,a);
},appendShape:function(t){return this.shapes[t.id]=t,this.shapeseq.push(t.id),this.lastShapeId=t.id,
t.id},replaceWithShape:function(t,e){var i,s=this.shapeseq;for(this.shapes[e.id]=e,
i=s.length;i--;)s[i]==t&&(s[i]=e.id);delete this.shapes[t]},replaceWithShapes:function(t,e){
var i,s,r,n=this.shapeseq,a={};for(s=t.length;s--;)a[t[s]]=!0;for(s=n.length;s--;)i=n[s],
a[i]&&(n.splice(s,1),delete this.shapes[i],r=s);for(s=e.length;s--;)n.splice(r,0,e[s].id),
this.shapes[e[s].id]=e[s]},insertAfterShape:function(t,e){var i,s=this.shapeseq;for(i=s.length;i--;)if(s[i]===t)return s.splice(i+1,0,e.id),
void(this.shapes[e.id]=e)},removeShapeId:function(t){var e,i=this.shapeseq;for(e=i.length;e--;)if(i[e]===t){
i.splice(e,1);break}delete this.shapes[t]},getShapeAt:function(t,e,i){return this.targetX=e,
this.targetY=i,this.render(),this.currentTargetShapeId},render:function(){var t,e,i,s=this.shapeseq,r=this.shapes,n=s.length,a=this._getContext();
for(a.clearRect(0,0,this.pixelWidth,this.pixelHeight),i=0;n>i;i++)t=s[i],e=r[t],this["_draw"+e.type].apply(this,e.args);
this.interact||(this.shapes={},this.shapeseq=[])}}),P=n(I,{init:function(e,i,r){var n;
P._super.init.call(this,e,i,r),r[0]&&(r=r[0]),s.data(r,"_jqs_vcanvas",this),this.canvas=t.createElement("span"),
s(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",
width:e,height:i,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,r),
this._calculatePixelDims(e,i,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,
n='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',
this.canvas.insertAdjacentHTML("beforeEnd",n),this.group=s(this.canvas).children()[0],
this.rendered=!1,this.prerender=""},_drawShape:function(t,e,s,r,n){var a,h,o,l,g,p,u,c=[];
for(u=0,p=e.length;p>u;u++)c[u]=""+e[u][0]+","+e[u][1];return a=c.splice(0,1),n=n===i?1:n,
h=s===i?' stroked="false" ':' strokeWeight="'+n+'px" strokeColor="'+s+'" ',o=r===i?' filled="false"':' fillColor="'+r+'" filled="true" ',
l=c[0]===c[c.length-1]?"x ":"",g='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+t+'" '+h+o+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+a+" l "+c.join(", ")+" "+l+'e"> </v:shape>';
},_drawCircle:function(t,e,s,r,n,a,h){var o,l,g;return e-=r,s-=r,o=n===i?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+n+'" ',
l=a===i?' filled="false"':' fillColor="'+a+'" filled="true" ',g='<v:oval  id="jqsshape'+t+'" '+o+l+' style="position:absolute;top:'+s+"px; left:"+e+"px; width:"+2*r+"px; height:"+2*r+'px"></v:oval>';
},_drawPieSlice:function(t,s,r,n,a,h,o,l){var g,p,u,c,d,f,m,v;if(a===h)return"";if(h-a===2*e.PI&&(a=0,
h=2*e.PI),p=s+e.round(e.cos(a)*n),u=r+e.round(e.sin(a)*n),c=s+e.round(e.cos(h)*n),
d=r+e.round(e.sin(h)*n),p===c&&u===d){if(h-a<e.PI)return"";p=c=s+n,u=d=r}return p===c&&u===d&&h-a<e.PI?"":(g=[s-n,r-n,s+n,r+n,p,u,c,d],
f=o===i?' stroked="false" ':' strokeWeight="1px" strokeColor="'+o+'" ',m=l===i?' filled="false"':' fillColor="'+l+'" filled="true" ',
v='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+t+'" '+f+m+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+s+","+r+" wa "+g.join(", ")+' x e"> </v:shape>');
},_drawRect:function(t,e,i,s,r,n,a){return this._drawShape(t,[[e,i],[e,i+r],[e+s,i+r],[e+s,i],[e,i]],n,a);
},reset:function(){this.group.innerHTML=""},appendShape:function(t){var e=this["_draw"+t.type].apply(this,t.args);
return this.rendered?this.group.insertAdjacentHTML("beforeEnd",e):this.prerender+=e,
this.lastShapeId=t.id,t.id},replaceWithShape:function(t,e){var i=s("#jqsshape"+t),r=this["_draw"+e.type].apply(this,e.args);
i[0].outerHTML=r},replaceWithShapes:function(t,e){var i,r=s("#jqsshape"+t[0]),n="",a=e.length;
for(i=0;a>i;i++)n+=this["_draw"+e[i].type].apply(this,e[i].args);for(r[0].outerHTML=n,
i=1;i<t.length;i++)s("#jqsshape"+t[i]).remove()},insertAfterShape:function(t,e){var i=s("#jqsshape"+t),r=this["_draw"+e.type].apply(this,e.args);
i[0].insertAdjacentHTML("afterEnd",r)},removeShapeId:function(t){var e=s("#jqsshape"+t);
this.group.removeChild(e[0])},getShapeAt:function(t,e,i){var s=t.id.substr(8);return s;
},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0);
}})})}(document,Math);