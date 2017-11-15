define(["./def","./protovis-compat!","./cdo","jquery","./tipsy"],function(e,t,i,n){
function a(t,i){if(t){if(null!=t.abs)return t.abs;if(!i)return t;var n=e.firstUpperCase(t);
return null!=i.abs?{abs:i.abs+n}:i+n}return i}function r(t,i){function n(e){return f[e].resolve();
}function a(e,t){var i=n(e);return t&&!i.isSpecified?void 0:i.value}function r(e){
return n(e).isSpecified}function s(e,t){var i=n(e);return i.isSpecified?i.value:t;
}function o(e){return a(e,!0)}function l(t){return e.hasOwn(f,t)}function u(e){return d(e,!1);
}function c(e){return d(e,!0)}function h(e){return n(e)._dv}function d(t,i){var n,r,s;
for(n in t)r=e.hasOwnProp.call(f,n)&&f[n],r&&void 0!==(s=t[n])&&r.set(s,i);return a;
}t||e.fail.argumentRequired("specs");var f={};return e.each(t,function(e,t){var n=new se(t,a,i,e);
f[n.name]=n}),a.option=a,a.specified=o,a.defaultValue=h,a.isSpecified=r,a.isDefined=l,
a.getSpecified=s,a.specify=u,a.defaults=c,a}function s(e){return function(t){var i,n,a;
for(i=0,a=e.length;a>i;i++)if(n=e[i],"string"==typeof n&&(n=this[n]),n.call(this,t)===!0)return!0;
}}function o(e){return function(t){return t.specify(e),!0}}function l(e){return function(t){
var i=e.call(this,t);return void 0!==i?(t.specify(i),!0):void 0}}function u(e){return function(t){
var i=e.call(this,t);return void 0!==i?(t.defaultValue(i),!0):void 0}}function c(){
e.MetaType.apply(this,arguments);var t=this.baseType&&this.baseType.optionsDef;this.optionsDef=e.create(t);
}function h(e){e=t.color(e);var i=e.r,n=e.g,a=e.b,r=(i+n+a)/3,s=2;return Math.abs(i-r)<=s&&Math.abs(n-r)<=s&&Math.abs(a-r)<=s;
}function d(t){t||e.fail.argumentRequired("keyArgs");var i=t.type||e.fail.argumentRequired("keyArgs.type");
switch(i){case"linear":return new X.color.LinearScalesBuild(t).buildMap();case"discrete":
return new X.color.DiscreteScalesBuild(t).buildMap();case"normal":return new X.color.NormalScalesBuild(t).buildMap();
}throw e.error.argumentInvalid("scaleType","Unexistent scale type '{0}'.",[i])}function f(t){
t||e.fail.argumentRequired("keyArgs");var i=t.type||e.fail.argumentRequired("keyArgs.type");
switch(i){case"linear":return new X.color.LinearScalesBuild(t).build();case"discrete":
return new X.color.DiscreteScalesBuild(t).build();case"normal":return new X.color.NormalScalesBuild(t).build();
}throw e.error.argumentInvalid("scaleType","Unexistent scale type '{0}'.",[i])}function v(e,i){
if(this.event=t.event,this.pvMark=e,e){var n=this.sign=e.sign||null;!i&&n&&(i=n.scene()),
i?this.index=i.childIndex():(this.index=null,i=new X.visual.Scene(null,{panel:this.panel
}))}else this.sign=null,this.index=null,i=new X.visual.Scene(null,{panel:this.panel,
source:this.chart.root.data});this.scene=i}function p(t,i,n,a){var r=e.lazy(i,t),s=r[n];
return s?e.array.is(s)&&(s=r[n]=[s]):s=r[n]=[],s.push(a),X.spec}function g(){var e=this.chart.axes.base;
return e?e.role.grouping.lastDimensionName():this.chart.data.type.dimensionsNames()[0];
}function m(t){for(var i=this.chart.data.dimensions(this.dimension),n=i.max(),a=n.value,r=[],s=0,o=t.length;o>s;s++){
var l=t[s],u=l.atoms[this.dimension].value,c=i.read(u);if(null==u)r.push(l);else{
if(null==c||typeof u!=typeof c.value){e.debug>=2&&e.log("[Warning] The specified scoring function has an invalid return value."),
r=[];break}u=c.value;var h=+a-+u;h&&h>this.length&&r.push(l)}}return r}function b(){
e.MetaType.apply(this,arguments),this._vars=e.create(this.baseType&&this.baseType._vars);
}function x(e){var t;return!!(e&&(t=e.pointTo)&&t.scenes.mark._hasHoverable)}function y(e){
this._renderId!==e&&(this._renderId=e,this.renderState={})}function _(e){var t;e&&(t=e.ownerScene)&&(e=t);
var i=this._active;return i!==e?(i&&S.call(i,!1),this._active=i=e||null,i&&S.call(i,!0),
!0):!1}function S(e){this.isActive!==e&&(e?this.isActive=!0:delete this.isActive);
}function w(e,t){return function(){var i=this.vars[e];return void 0===i&&(i=this[t](),
void 0===i&&(i=null),this.vars[e]=i),i}}function C(t){if(t.isRequired)throw e.error.operationInvalid("The required visual role '{0}' is unbound.",[t.name]);
}function k(t,i){if(t!==i)throw e.error.operationInvalid("Invalid state.")}function P(e){
return!e.isNull}function M(e){return e.dataPartValue}function D(e){return e.isDiscrete()?"discrete":e.lastDimensionValueType()===Date?"timeSeries":"numeric";
}function R(i){var n;if(i){var a;e.eachOwn(i,function(e,n){a=!0,i[n]=t.fillStyle(e);
}),a&&(n=i)}return n}function A(){var e,i=this.scaleType;if(i)if("discrete"===i)if(0===this.index)e=X.createColorScheme();else{
var n=this;e=function(){return n.chart._getRoleColorScale(n.role.grouping)}}else de||(de=["red","yellow","green"].map(t.color)),
e=de.slice();else e=X.createColorScheme();return e}function I(t){if(!e.object.is(t)){
var i=this.option("Position");t=(new re).setSize(t,{singleProp:X.BasePanel.orthogonalLength[i]
})}return t}function L(e){var t=this.option("Position");return X.parseAlign(t,e)}
function T(e){return(new re).setSize(e,{singleProp:"width"})}function O(t){if(e.string.is(t))t=t.split(",");else if(!e.array.is(t))throw e.error.argumentInvalid("dims","Must be a string or an array of strings.");
return e.query(t).distinct().sort().array()}function B(t,i){function n(){if(u||(u=!0,
this.chart._processViewSpec(i),l=i.dimNames,o=i.dimsKey),!l)return!1;var t=e.lazy(this,"_activeFilters"),n=e.getOwn(t,o);
return void 0===n&&(t[o]=n=r(this.event)),n}function a(){var e=this.event,t=Object.create(e);
t.viewKey=o,t.viewFrom=function(){return s(e.from)},t.viewTo=function(){return s(e.to);
},this.event=t;try{i.handler.call(this)}finally{this.event=e}}function r(e){var t=s(e.from,null),i=s(e.to,null);
if(t===i)return!1;if(null==t||null==i)return!0;for(var n=l.length,a=t.atoms,r=i.atoms;n--;)if(a[l[n]].value!==r[l[n]].value)return!0;
return!1}function s(e,t){return e?e._asView(o,l):t}var o,l,u=!1;i._filter=n,i._handler=a;
}function V(t){var i=z(t)||e.assert("There must exist an ancestor sign");return new X.visual.BasicSign(i.panel,t);
}function z(e){var t;do e=e.parent;while(!(!e||(t=e.sign)||e.proto&&(t=e.proto.sign)));
return t}function N(e,i,n,a,r,s,o,l){if(!e)return null;var u;null==a&&(a=1/0),null==o&&(o=1/0),
null==n&&(n=0),null==s&&(s=0),n>a&&(a=n),s>o&&(o=s),null!=i?n>i?i=n:i>a&&(i=a):t.floatEqual(n,a)&&(i=n),
null!=r?s>r?r=s:r>o&&(r=o):t.floatEqual(s,o)&&(r=s);var c=null!=i,h=null!=r;if(c||h){
if(c&&h)return t.floatZero(i)&&t.floatZero(r)?N(e,null,0,1/0,null,0,1/0,l):(l=i/(i+r),
{mode:"abs",ratio:l,value:e*(i+r),band:i,space:r});var d,f;return c?(d=i+s,f=i+o,
l=t.floatZero(i)?0:i/d):(d=n+r,f=a+r,l=t.floatZero(r)?1:n/d),{mode:"abs",ratio:l,
min:e*d,max:e*f,band:c?i:void 0,space:h?r:void 0}}var v=n>0,p=s>0,g=isFinite(a)&&a>0,m=isFinite(o)&&o>0,b=v&&p,x=g&&m;
if(b||x)if(b){if(l=n/(n+s),x)return{mode:"abs",ratio:l,min:e*(n+s),max:e*(a+o),band:n,
space:s};u=s/n,g?o=u*a:m&&(a=o/u)}else u=o/a,l=a/(a+o),v?s=u*n:p&&(n=s/u);else{if(!(v||g||p||m))return{
mode:"rel",ratio:l,min:0,max:1/0};if(u=1/l-1,p){if(n=s/u,g&&n>=a)return N(e,i,n,a,r,s,o,l);
}else if(v&&(s=u*n,m&&s>=o))return N(e,i,n,a,r,s,o,l);g?o=u*a:m&&(a=o/u)}return{mode:"rel",
ratio:l,min:e*(n+s),max:e*(a+o)}}function F(e){return X.parseDomainScope(e,this.orientation);
}function E(t){if(t){if(e.hasOwn(ae.namesSet,t)){var i=X.BasePanel["y"===this.orientation?"horizontalAlign":"verticalAlign2"];
return i[t]}e.debug>=2&&e.log(e.format("Invalid axis position value '{0}'.",[t]));
}return"x"===this.orientation?"bottom":"left"}function W(e){var t=this.option("Position");
return re.toOrtho(e,t)}function q(e){var t=this.option("Position");return re.to(e,{
singleProp:X.BasePanel.orthogonalLength[t]})}function H(t){var i=[];if(!t)return i;
e.array.is(t)||i.push(t);for(var n=0,a=t.length;n!=a;++n){var r=e.number.to(t[n]);
null!=r&&i.push(r)}return i}function G(){var e=["axis"],t=this.scaleType;return t&&("discrete"!==t&&e.push("continuousAxis"),
e.push(t+"Axis")),this.v1SecondOrientedId&&e.push(this.v1SecondOrientedId+"Axis"),
e.push(this.orientedId+"Axis"),e.push(this.id+"Axis"),e}function U(e){if("trend"===this.name)return null;
var t=this.option("TrendType");if(!t&&e&&(t=e.type),!t||"none"===t)return null;e=e?Object.create(e):{};
var i=X.trends.get(t);e.info=i,e.type=t;var n=this.option("TrendLabel");return e.label=null!=n?String(n):i.dataPartAtom.f,
e}function j(e){return!e.isDiscrete()&&(null!=e.option("FixedMin")||null!=e.option("FixedMax")||null!=e.option("FixedLength")||null!=e.option("Ratio")||e.option("PreserveRatio"));
}function K(e,t){return{resolveV1:function(i){return 0===this.globalIndex?(this._specifyChartOption(i,"show"+e)||i.defaultValue(t),
!0):void 0}}}function Z(e){return{resolveV1:function(t){return this._specifyChartOption(t,"show"+e),
!0}}}function Y(t){return e.number.toBetween(t,0,1)}Array.prototype.every||(Array.prototype.every=function(e){
if(null==this)throw new TypeError;var t=Object(this),i=t.length>>>0;if("function"!=typeof e)throw new TypeError;
for(var n=arguments.length>=2?arguments[1]:void 0,a=0;i>a;a++)if(a in t&&!e.call(n,t[a],a,t))return!1;
return!0});var Q=1,X=e.globalSpace("pvc",{});X.data=i;var $=Array.prototype.slice;
X.invisibleFill="rgba(127,127,127,0.00001)",!function(){var i=function(e){t.Behavior.tipsy.setDebug(e);
};i(e.debug),e.addOnDebugChanged(i)}(),X.NoDataException=e.global.NoDataException=function(){
this.name="no-data",this.message="No data found"},X.InvalidDataException=e.global.InvalidDataException=function(e,t){
this.name=t||"invalid-data",this.message=e||"Invalid Data."},X.defaultCompatVersion=function(e){
var t=X.BaseChart.prototype.defaults;return null!=e?t.compatVersion=e:t.compatVersion;
},X.cloneMatrix=function(e){return e.map(function(e){return e.slice()})},X.normAngle=t.Shape.normalizeAngle,
X.orientation={vertical:"vertical",horizontal:"horizontal"},X.removeTipsyLegends=function(){
var e=t.Behavior.tipsy;e&&e.removeAll&&e.removeAll()},X.createDateComparer=function(e,i){
return i||(i=t.identity),function(t,n){return e.parse(i(t))-e.parse(i(n))}},X.buildIndexedId=e.indexedId,
X.makeEnumParser=function(t,i,n){if(e.array.is(i)){var a={};i.forEach(function(e){
e&&(a[e.toLowerCase()]=e)}),i=function(t){return e.hasOwn(a,t)}}return n&&(n=n.toLowerCase()),
function(a){return a&&(a=(""+a).toLowerCase()),i(a)||(a&&e.debug>=2&&e.log.warn("Invalid '"+t+"' value: '"+a+"'. Assuming '"+n+"'."),
a=n),a}},X.unionExtents=function(e,t){if(e)t&&(t.min<e.min&&(e.min=t.min),t.max>e.max&&(e.max=t.max));else{
if(!t)return null;e={min:t.min,max:t.max}}return e},X.roundPixel={epsilon:.1},null==n.support.svg&&(n.support.svg=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),
X.extensionTag="extension",X.extendType=function(t,i,n){if(i){var a,r=t.meta&&t.meta._vars,s=function(t,i){
void 0!==t&&(a||(a={}),r&&r[i]&&(i="_"+i+"EvalCore"),a[i]=e.fun.to(t))};n?n.forEach(function(e){
s(i[e],e)}):e.each(s),a&&t.add(a)}};var J=[null];X.makeExtensionAbsId=function(t,i){
if(!t)return i;var n=[];i=e.array.to(i)||J,t=e.array.to(t);for(var r=0,s=i.length;s>r;r++)for(var o=0,l=t.length;l>o;o++){
var u=a(t[o],i[r]);u&&n.push(u)}return n},X.uniqueExtensionAbsPrefix=function(){return"_"+((new Date).getTime()+Math.floor(1e5*Math.random()));
},X.defaultColorScheme=null,X.brighterColorTransform=function(e){return(e.rgb?e:t.color(e)).brighter(.6);
},X.setDefaultColorScheme=function(e){return X.defaultColorScheme=X.colorScheme(e);
},X.defaultColor=t.Colors.category10()("?"),X.colorScheme=function(i){if(null==i)return null;
if("function"==typeof i){if(!i.hasOwnProperty("range"))return i;i=i.range()}else i=e.array.as(i);
return i.length?function(){var e=t.colors(i);return e.domain.apply(e,arguments),e;
}:null},X.createColorScheme=function(e){return X.colorScheme(e)||X.defaultColorScheme||t.Colors.category10;
},X.toGrayScale=function(e,i,n,a){e=t.color(e);var r=.299*e.r+.587*e.g+.114*e.b;void 0===n?n=200:null==n&&(n=255),
void 0===a?a=30:null==a&&(a=0);var s=n-a;return r=0>=s?n:a+r/255*s,null==i?i=e.opacity:0>i&&(i=-i*e.opacity),
r=Math.round(r),t.rgb(r,r,r,i)},X.time={intervals:{y:31536e6,m:2592e6,d30:2592e6,
w:6048e5,d7:6048e5,d:864e5,h:36e5,M:6e4,s:1e3,ms:1},withoutTime:function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate());
},weekday:{previousOrSelf:function(e,t){var i=e.getDay(),n=i-t;if(n){var a=0>n?7+n:n;
e=new Date(e-a*X.time.intervals.d)}return e},nextOrSelf:function(e,t){var i=e.getDay(),n=i-t;
if(n){var a=n>0?7-n:-n;e=new Date(e+a*X.time.intervals.d)}return e},closestOrSelf:function(e,t){
var i=e.getDay(),n=i-t;if(n){var a=X.time.intervals.d,r=n>0?1:-1;n=Math.abs(n),e=new Date(n>=4?e.getTime()+r*(7-n)*a:e.getTime()-r*n*a);
}return e}}};var ee=t.Mark,te=ee.prototype.zOrder;ee.prototype.zOrder=function(e){
var t=this.borderPanel;return t&&t!==this?te.call(t,e):te.call(this,e)},ee.prototype.wrapper=function(e){
return this._wrapper=e,this},ee.prototype.wrap=function(t,i){return t&&e.fun.is(t)&&this._wrapper&&!t._cccWrapped&&(t=this._wrapper(t,i),
t._cccWrapped=!0),t},t.Mark.prototype.call=function(e){e.call(this,this)},ee.prototype.lock=function(e,t){
return void 0!==t&&this[e](t),(this._locked||(this._locked={}))[e]=!0,this},ee.prototype.isIntercepted=function(e){
return this._intercepted&&this._intercepted[e]},ee.prototype.isLocked=function(e){
return this._locked&&this._locked[e]},ee.prototype.ensureEvents=function(e){var t=this.propertyValue("events",!0);
return t&&"none"!==t||this.events(e||"all"),this},ee.prototype.addMargin=function(i,n){
if(0!==n){var a=e.nullyTo(this.propertyValue(i),0),r=t.functor(a);this[i](function(){
return n+r.apply(this,$.call(arguments))})}return this},ee.prototype.addMargins=function(t){
var i=e.get(t,"all",0);return this.addMargin("left",e.get(t,"left",i)),this.addMargin("right",e.get(t,"right",i)),
this.addMargin("top",e.get(t,"top",i)),this.addMargin("bottom",e.get(t,"bottom",i)),
this},ee.prototype.eachInstanceWithData=function(e,t){this.eachInstance(function(i,n,a){
i.mark.sign&&i[n].data&&e.call(t,i,n,a)})},ee.prototype.eachSceneWithDataOnRect=function(e,t,i,n){
function a(n,a){if(n.intersectsRect(e)){var r=a.data;r&&r.datum&&t.call(i,r)}}var r=this,s=r.sign;
if(!s||s.selectable()){null==n&&(n=r.rubberBandSelectionMode||"partial");var o="center"===n;
r.eachInstanceWithData(function(e,t,i){var n=r.getShape(e,t,.15);n=(o?n.center():n).apply(i),
a(n,e[t])})}},ee.prototype.eachDatumOnRect=function(e,t,i,n){function a(n,a){if(n.intersectsRect(e)){
var r=a.data;r&&r.datum&&r.datums().each(function(e){e.isNull||t.call(i,e)})}}var r=this,s=r.sign;
if(!s||s.selectable()){null==n&&(n=r.rubberBandSelectionMode||"partial");var o="center"===n;
r.eachInstanceWithData(function(e,t,i){var n=r.getShape(e,t,.15);n=(o?n.center():n).apply(i),
a(n,e[t])})}},ee.prototype.getOwnerInstance=function(e,t){var i=e[t].data;return i instanceof X.visual.Scene&&(i=i.ownerScene)?i.childIndex():t;
},t.Mark.prototype._ibits=-1,t.Mark.prototype._imask=0,t.Mark.prototype.ibits=function(e){
return arguments.length?(e=X.visual.Interactive.parseBits(e),this._ibits=null==e?0:e,
this):this._ibits},t.Mark.prototype.imask=function(e){return arguments.length?(e=X.visual.Interactive.parseBits(e),
this._imask=null==e?0:e,this):this._imask},t.Transform.prototype.transformHPosition=function(e){
return this.x+this.k*e},t.Transform.prototype.transformVPosition=function(e){return this.y+this.k*e;
},t.Transform.prototype.transformLength=function(e){return this.k*e},t.Format.createParser=function(t){
function i(i){return i instanceof Date?i:e.number.is(i)?new Date(i):t.parse(i)}return i;
},t.Format.createFormatter=function(e){function t(t){return null!=t?e(t):""}return t;
},t.Color.prototype.describe=function(t,i,n){return e.describeRecursive(t,this.key,i,n);
},ee.prototype.hasDelegateValue=function(e,t){var i=this.$propertiesMap[e];return i?!t||i.tag===t:!!this.proto&&this.proto.hasDelegateValue(e,t);
},X.parseValuesOverflow=X.makeEnumParser("valuesOverflow",["show","trim","hide"],"hide"),
X.parseMultiChartOverflow=X.makeEnumParser("multiChartOverflow",["grow","fit","clip"],"grow"),
X.parseLegendClickMode=X.makeEnumParser("legendClickMode",["toggleSelected","toggleVisible","none"],"toggleVisible"),
X.parseTooltipAutoContent=X.makeEnumParser("tooltipAutoContent",["summary","value"],"value"),
X.parseSelectionMode=X.makeEnumParser("selectionMode",["rubberBand","focusWindow"],"rubberBand"),
X.parseClearSelectionMode=X.makeEnumParser("clearSelectionMode",["emptySpaceClick","manual"],"emptySpaceClick"),
X.parsePointingMode=X.makeEnumParser("pointingMode",["over","near"],"near"),X.parsePointingCollapse=X.makeEnumParser("pointingCollapse",["none","x","y"],"none"),
X.parseShape=X.makeEnumParser("shape",t.Scene.hasSymbol,null),X.parseDataTypeCheckingMode=X.makeEnumParser("typeCheckingMode",["none","minimum","extended"],"minimum"),
X.parseLegendOverflow=X.makeEnumParser("legendOverflow",["clip","collapse"],"clip"),
X.parseLabelRotationDirection=X.makeEnumParser("labelRotationDirection",["clockwise","counterclockwise"],"clockwise"),
X.parseContinuousColorScaleType=function(t){if(t)switch(t=(""+t).toLowerCase()){case"linear":
case"normal":case"discrete":break;default:e.debug>=2&&e.log("[Warning] Invalid 'ScaleType' option value: '"+t+"'."),
t=null}return t},X.parseDomainScope=function(t,i){if(t)switch(t=(""+t).toLowerCase()){
case"cell":case"global":break;case"section":if(!i)throw e.error.argumentRequired("orientation");
t="y"===i?"row":"column";break;case"column":case"row":i&&i!==("row"===t?"y":"x")&&(t="section",
e.debug>=2&&e.log("[Warning] Invalid 'DomainScope' option value: '"+t+"' for the orientation: '"+i+"'."));
break;default:e.debug>=2&&e.log("[Warning] Invalid 'DomainScope' option value: '"+t+"'."),
t=null}return t},X.parseDomainRoundingMode=function(t){if(t)switch(t=(""+t).toLowerCase()){
case"none":case"nice":case"tick":break;default:e.debug>=2&&e.log("[Warning] Invalid 'DomainRoundMode' value: '"+t+"'."),
t=null}return t},X.parseOverlappedLabelsMode=function(t){if(t)switch(t=(""+t).toLowerCase()){
case"leave":case"hide":case"rotate":case"rotatethenhide":break;default:e.debug>=2&&e.log("[Warning] Invalid 'OverlappedLabelsMode' option value: '"+t+"'."),
t=null}return t},X.parseTrendType=function(t){if(t){if(t=(""+t).toLowerCase(),"none"===t)return t;
if(X.trends.has(t))return t;e.debug>=2&&e.log("[Warning] Invalid 'TrendType' value: '"+t+"'.");
}},X.parseNullInterpolationMode=function(t){if(t){switch(t=(""+t).toLowerCase()){
case"none":case"linear":case"zero":return t}e.debug>=2&&e.log("[Warning] Invalid 'NullInterpolationMode' value: '"+t+"'.");
}},X.parseAlign=function(t,i){i&&(i=(""+i).toLowerCase());var n,a;return"left"===t||"right"===t?(n=i&&X.BasePanel.verticalAlign[i],
n||(n="middle",a=!!i)):(n=i&&X.BasePanel.horizontalAlign[i],n||(n="center",a=!!i)),
a&&e.debug>=2&&e.log(e.format("Invalid alignment value '{0}'. Assuming '{1}'.",[i,n])),
n},X.parseAnchor=function(t){if(t){switch(t=(""+t).toLowerCase()){case"top":case"left":
case"center":case"bottom":case"right":return t}e.debug>=2&&e.log(e.format("Invalid anchor value '{0}'.",[t]));
}},X.parseAnchorWedge=function(t){if(t){switch(t=(""+t).toLowerCase()){case"outer":
case"inner":case"center":case"start":case"end":return t}e.debug>=2&&e.log(e.format("Invalid wedge anchor value '{0}'.",[t]));
}},X.parsePosition=function(t,i){if(t&&(t=(""+t).toLowerCase(),!e.hasOwn(ae.namesSet,t))){
var n=i||"left";e.debug>=2&&e.log(e.format("Invalid position value '{0}. Assuming '{1}'.",[t,n])),
t=n}return t||i||"left"},X.parseAxisFixedLength=function(i){var n;return i&&("string"==typeof i&&(i=t.parseDatePrecision(i)),
"number"!=typeof i||0>=i?e.debug>=2&&e.log(e.format("Invalid fixed length value '{0}'.",[i])):n=i),
n},X.parseAxisRatio=function(i){var n;if("string"==typeof i){var a=/([0-9]\u002F[0-9]|[0-9]\u002F[a-z]|[0-9]\u002F[0-9][a-z])/;
if(a.test(i)&&(i=i.split("/")),2===i.length){var r=parseInt(i[0]),s=t.parseDatePrecision(i[1]);
isNaN(r)||isNaN(s)||0==s||(i=r/s)}}return"number"!=typeof i||0>i?e.debug>=2&&e.log(e.format("Invalid ratio value '{0}'.",[i])):n=i,
n},X.parseDomainAlign=function(t){var i;if(t){switch(t=(""+t).toLowerCase()){case"max":
case"min":case"center":return t}i="center",e.debug>=2&&e.log(e.format("Invalid domain align value '{0}'. Assuming '{1}'.",[t,i]));
}return i},X.parseDimensionName=function(t,i){if(t){t=(""+t).toLowerCase();var n=i.data.type.dimensions(t,{
assertExists:!1});if(n)return t;e.debug>=2&&e.log(e.format("[Warning] Undefined dimension with name '{0}'.",[t]));
}return null};var ie=e.type("pvc.Offset").init(function(e,t){1===arguments.length?null!=e&&this.setOffset(e):(null!=e&&(this.x=e),
null!=t&&(this.y=t))}).add({describe:function(t,i,n){return e.describeRecursive(t,e.copyOwn(this),i,n);
},setOffset:function(t,i){if("string"==typeof t){var n=t.split(/\s+/).map(function(e){
return ne.parse(e)});switch(n.length){case 1:return this.set(e.get(i,"singleProp","all"),n[0]),
this;case 2:return this.set("x",n[0]),this.set("y",n[1]),this;case 0:return this}
}else{if("number"==typeof t)return this.set(e.get(i,"singleProp","all"),t),this;if("object"==typeof t){
this.set("all",t.all);for(var a in t)"all"!==a&&this.set(a,t[a]);return this}}return e.debug&&e.log("Invalid 'offset' value: "+e.describe(t)),
this},set:function(t,i){null!=i&&e.hasOwn(ie.namesSet,t)&&(i=ne.parse(i),null!=i&&("all"===t?ie.names.forEach(function(e){
this[e]=i},this):this[t]=i))},resolve:function(e){var t={};return re.names.forEach(function(i){
var n=ie.namesSizeToOffset[i],a=this[n];if(null!=a)if("number"==typeof a)t[n]=a;else if(e){
var r=e[i];null!=r&&(t[n]=a.resolve(r))}},this),t}});ie.type().add({names:["x","y"],
namesSizeToOffset:{width:"x",height:"y"},namesSidesToOffset:{left:"x",right:"x",top:"y",
bottom:"y"},as:function(e){return null==e||e instanceof ie||(e=(new ie).setOffset(e)),
e}}).add({namesSet:t.dict(ie.names,e.retTrue)});var ne=X.PercentValue=function(e){
this.percent=e};ne.prototype.resolve=function(e){return this.percent*e},ne.prototype.divide=function(e){
return new ne(this.percent/e)},ne.divide=function(e,t){return e instanceof ne?e.divide(t):e/t;
},ne.parse=function(t){if(null!=t&&""!==t){switch(typeof t){case"number":return t;
case"string":var i=t.match(/^(.+?)\s*(%)?$/);if(i){var n=+i[1];if(!isNaN(n)){if(!i[2])return n;
if(n>=0)return new ne(n/100)}}break;case"object":if(t instanceof ne)return t}e.debug&&e.log(e.format("Invalid margins component '{0}'",[""+t]));
}},ne.resolve=function(e,t){return e instanceof ne?e.resolve(t):e};var ae=X.Sides=function(e){
null!=e&&this.setSides(e)};ae.hnames="left right".split(" "),ae.vnames="top bottom".split(" "),
ae.names="left right top bottom".split(" "),ae.namesSet=t.dict(ae.names,e.retTrue),
ae.as=function(e){return null==e||e instanceof ae||(e=(new ae).setSides(e)),e},ae.to=function(e){
return null!=e&&e instanceof ae||(e=(new ae).setSides(e)),e},ae.prototype.describe=function(t,i,n){
return e.describeRecursive(t,e.copyOwn(this),i,n)},ae.prototype.setSides=function(t){
if("string"==typeof t){var i=t.split(/\s+/).map(function(e){return ne.parse(e)});switch(i.length){
case 1:return this.set("all",i[0]),this;case 2:return this.set("top",i[0]),this.set("left",i[1]),
this.set("right",i[1]),this.set("bottom",i[0]),this;case 3:return this.set("top",i[0]),
this.set("left",i[1]),this.set("right",i[1]),this.set("bottom",i[2]),this;case 4:
return this.set("top",i[0]),this.set("right",i[1]),this.set("bottom",i[2]),this.set("left",i[3]),
this;case 0:return this}}else{if("number"==typeof t)return this.set("all",t),this;
if("object"==typeof t){if(t instanceof ne)this.set("all",t);else if(t instanceof ae)ae.names.forEach(function(i){
e.hasOwn(t,i)&&(this[i]=t[i])},this);else{this.set("all",t.all),this.set("width",t.width),
this.set("height",t.height);for(var n in t)ae.namesSet.hasOwnProperty(n)&&this.set(n,t[n]);
}return this}}return e.debug&&e.log("Invalid 'sides' value: "+e.describe(t)),this;
},ae.prototype.set=function(t,i){if(i=ne.parse(i),null!=i)switch(t){case"all":ae.names.forEach(function(e){
this[e]=i},this);break;case"width":this.left=this.right=ne.divide(i,2);break;case"height":
this.top=this.bottom=ne.divide(i,2);break;default:e.hasOwn(ae.namesSet,t)&&(this[t]=i);
}},ae.prototype.resolve=function(e,t){"object"==typeof e&&(t=e.height,e=e.width);var i={};
return ae.names.forEach(function(n){var a=0,r=this[n];null!=r&&(a="number"==typeof r?r:r.resolve("left"===n||"right"===n?e:t)),
i[n]=a},this),ae.updateSize(i)},ae.updateSize=function(e){return e.width=(e.left||0)+(e.right||0),
e.height=(e.bottom||0)+(e.top||0),e},ae.prototype.getDirectionPercentage=function(e){
var t="width"===e?ae.hnames:ae.vnames,i=this;return t.reduce(function(e,t){return(i.getSidePercentage(t)||0)+e;
},0)},ae.prototype.getSidePercentage=function(e){var t=this[e];return null!=t&&"number"!=typeof t?t.percent:null;
},ae.resolvedMax=function(e,t){var i={};return ae.names.forEach(function(n){i[n]=Math.max(e[n]||0,t[n]||0);
}),ae.updateSize(i)},ae.inflate=function(e,t){var i={};return ae.names.forEach(function(n){
i[n]=(e[n]||0)+t}),ae.updateSize(i)},ae.filterAnchor=function(e,t){var i=new ae;return ae.getAnchorSides(e).forEach(function(e){
i.set(e,t[e])}),i},ae.getAnchorSides=function(e){switch(e){case"left":case"right":
return ae.vnames;case"top":case"bottom":return ae.hnames;case"fill":return ae.names;
}};var re=e.type("pvc.Size").init(function(e,t){1===arguments.length?null!=e&&this.setSize(e):(null!=e&&(this.width=e),
null!=t&&(this.height=t))}).add({describe:function(t,i,n){return e.describeRecursive(t,e.copyOwn(this),i,n);
},setSize:function(t,i){if("string"==typeof t){var n=t.split(/\s+/).map(function(e){
return ne.parse(e)});switch(n.length){case 1:return this.set(e.get(i,"singleProp","all"),n[0]),
this;case 2:return this.set("width",n[0]),this.set("height",n[1]),this;case 0:return this;
}}else{if("number"==typeof t)return this.set(e.get(i,"singleProp","all"),t),this;if("object"==typeof t){
if(t instanceof ne)this.set(e.get(i,"singleProp","all"),t);else{this.set("all",t.all);
for(var a in t)"all"!==a&&this.set(a,t[a])}return this}}return e.debug&&e.log("Invalid 'size' value: "+e.describe(t)),
this},set:function(t,i){return null==i||"all"!==t&&!e.hasOwn(re.namesSet,t)||(i=ne.parse(i),
null!=i&&("all"===t?re.names.forEach(function(e){this[e]=i},this):this[t]=i)),this;
},clone:function(){return new re(this.width,this.height)},intersect:function(e){return new re(Math.min(this.width,e.width),Math.min(this.height,e.height));
},resolve:function(e){var t={};return re.names.forEach(function(i){var n=this[i];if(null!=n)if("number"==typeof n)t[i]=n;else if(e){
var a=e[i];null!=a&&(t[i]=n.resolve(a))}},this),t}});re.names=["width","height"],
re.namesSet=t.dict(re.names,e.retTrue),re.toOrtho=function(e,t){if(null!=e){var i;
t&&(i=X.BasePanel.orthogonalLength[t]),e=re.to(e,{singleProp:i}),t&&delete e[X.BasePanel.oppositeLength[i]];
}return e},re.to=function(e,t){return null==e||e instanceof re||(e=(new re).setSize(e,t)),
e},re.applyMax=function(e,t){var i,n;return null!=(n=t.width)&&null!=(i=e.width)&&i>n&&(e.width=n),
null!=(n=t.height)&&null!=(i=e.height)&&i>n&&(e.height=n),e},re.applyMin=function(e,t){
var i,n;return null!=(n=t.width)&&null!=(i=e.width)&&n>i&&(e.width=n),null!=(n=t.height)&&null!=(i=e.height)&&n>i&&(e.height=n),
e},re.applyMinMax=function(e,t,i){var n,a;return null!=(n=e.width)&&(null!=(a=t.width)&&a>n?e.width=a:null!=(a=i.width)&&n>a&&(e.width=a)),
null!=(n=e.height)&&(null!=(a=t.height)&&a>n?e.height=a:null!=(a=i.height)&&n>a&&(e.height=a)),
e},re.deflate=function(e,t,i){var n;return{width:null!=(n=e.width)?Math.max(n-t,0):null,
height:null!=(n=e.height)?Math.max(n-i,0):null}},re.inflate=function(e,t,i){var n;
return{width:null!=(n=e.width)?n+t:null,height:null!=(n=e.height)?n+i:null}},re.clone=function(e){
return{width:e.width,height:e.height}},e.type("pvc.Abstract").init(function(){this.log=e.logger(this._getLogId,this);
}).add({invisibleLineWidth:.001,defaultLineWidth:1.5,_logId:null,_getLogId:function(){
return this._logId||(this._logId=this._processLogId(this._createLogId()))},_createLogId:function(){
return String(e.qualNameOf(this.constructor))},_processLogId:function(t){var i=30,n=t.substr(0,i);
return n.length<i&&(n+=e.array.create(i-n.length," ").join("")),"["+n+"]"}}),r.resolvers=s,
r.constant=o,r.specify=l,r.defaultValue=u,X.options=r;var se=e.type().init(function(t,i,n,a){
this.name=t,this.option=i,this._dv=this.value=e.get(a,"value"),this._resolve=e.get(a,"resolve");
var r=!this._resolve;this.isResolved=r,this.isSpecified=!1,this._setCalled=!1,this._context=n,
this._cast=e.get(a,"cast"),this._getDefault=r?null:e.get(a,"getDefault"),this.data=e.get(a,"data");
}).add({resolve:function(){if(!this.isResolved&&(this.isResolved=!0,this._setCalled=!1,
this._getFunProp("_resolve").call(this._context,this),!this._setCalled)){this.isSpecified=!1;
var e=this._dynDefault();null!=e&&(this.value=this._dv=e)}return this},specify:function(e){
return this.set(e,!1)},defaultValue:function(e){return arguments.length&&this.set(e,!0),
this._dv},cast:function(e){if(null!=e){var t=this._getFunProp("_cast");t&&(e=t.call(this._context,e));
}return e},set:function(e,t){if(this._setCalled=!0,null!=e&&(e=this.cast(e)),null==e){
if(e=this._dynDefault(),null==e){if(!this.isSpecified)return this;e=this._dv}t=!0;
}return t?(this._dv=e,this.isSpecified||(this.value=e)):(this.isResolved=this.isSpecified=!0,
this.value=e),this},_dynDefault:function(){var e=this._getFunProp("_getDefault");return e&&this.cast(e.call(this._context,this));
},_getFunProp:function(t){var i,n=this[t];return n&&(i=this._context)&&e.string.is(n)&&(n=i[n]),
n}});e.MetaType.subType(c,{methods:{options:function(t){return e.mixin(this.optionsDef,t),
this},_addInitSteps:function(e){function t(){this.option=X.options(i.optionsDef,this);
}this.base(e);var i=this;e.push(t)}}});var oe=c.Ctor;if(e("pvc.visual.OptionsBase",oe.configure({
init:function(t,i,n,a){this.type=i,this.chart=t,this.index=null==n?0:n,this.name=e.get(a,"name"),
this.id=e.indexedId(this.type,this.index),this.optionId=this._buildOptionId(a);var r=this._resolvers=[];
this._registerResolversFull(r,a)},methods:{_buildOptionId:function(){return this.id;
},_chartOption:function(e){return this.chart.options[e]},_registerResolversFull:function(t,i){
var n=e.get(i,"fixed");n&&(this._fixed=n,t.push(X.options.specify(function(e){return n[e.name];
}))),this._registerResolversNormal(t,i);var a=e.get(i,"defaults");a&&(this._defaults=a),
t.push(this._resolveDefault)},_registerResolversNormal:function(t,i){e.get(i,"byV1",1)&&this.chart.compatVersion()<=1&&t.push(this._resolveByV1OnlyLogic),
this.name&&e.get(i,"byName",1)&&t.push(this._resolveByName),e.get(i,"byId",1)&&t.push(this._resolveByOptionId),
e.get(i,"byNaked",!this.index)&&t.push(this._resolveByNaked)},_resolveFull:function(e){
for(var t=this._resolvers,i=0,n=t.length;n>i;i++)if(t[i].call(this,e))return!0;return!1;
},_resolveFixed:X.options.specify(function(e){return this._fixed?this._fixed[e.name]:void 0;
}),_resolveByV1OnlyLogic:function(e){var t,i=e.data;return i&&(t=i.resolveV1)?t.call(this,e):void 0;
},_resolveByName:X.options.specify(function(t){return this.name?this._chartOption(this.name+e.firstUpperCase(t.name)):void 0;
}),_resolveByOptionId:X.options.specify(function(t){return this._chartOption(this.optionId+e.firstUpperCase(t.name));
}),_resolveByNaked:X.options.specify(function(t){return this._chartOption(e.firstLowerCase(t.name));
}),_resolveDefault:function(e){var t,i=e.data;if(i&&(t=i.resolveDefault)&&t.call(this,e))return!0;
if(this._defaults){var n=this._defaults[e.name];if(void 0!==n)return e.defaultValue(n),
!0}},_specifyChartOption:function(e,t){var i=this._chartOption(t);return null!=i?(e.specify(i),
!0):void 0}}})),e.scope(function(){function t(e){return e=Math.floor(e),isNaN(e)?null:-1>e||!isFinite(e)?-1:e;
}var i=e.makeEnum(["Interactive","ShowsActivity","ShowsSelection","ShowsTooltip","Selectable","Unselectable","Hoverable","Clickable","DoubleClickable","SelectableByClick","SelectableByRubberband","SelectableByFocusWindow","Animatable"]);
i.ShowsInteraction=i.ShowsActivity|i.ShowsSelection,i.Actionable=i.Hoverable|i.Clickable|i.DoubleClickable|i.SelectableByClick,
i.HandlesEvents=i.Actionable|i.ShowsTooltip,i.HandlesClickEvent=i.Clickable|i.SelectableByClick,
e("pvc.visual.Interactive",e.Object.extend({"type.methods":[i,{ShowsAny:i.ShowsInteraction|i.ShowsTooltip,
SelectableAny:i.Selectable|i.SelectableByClick|i.SelectableByRubberband|i.SelectableByFocusWindow,
parseBits:function(n){if(null==n)return null;if("number"==typeof n)return t(n);"string"!=typeof n&&(n=String(n));
var a=t(+n);return null!==a?a:(n.split(/\s*\|\s*/).forEach(function(t){var n=e.getOwn(i,t);
null!=n&&(null===a?a=n:a|=n)}),a)}}],methods:[{_ibits:-1,ibits:function(){return this._ibits;
}},e.query(e.ownKeys(i)).object({name:e.firstLowerCase,value:function(e){var t=i[e];
return function(){return!!(this.ibits()&t)}}})]}))}),X.color={scale:f,scales:d,toGray:X.toGrayScale,
isGray:h},e.type("pvc.color.ScalesBuild").init(function(i){this.keyArgs=i,this.data=i.data||e.fail.argumentRequired("keyArgs.data"),
this.domainDimName=i.colorDimension||e.fail.argumentRequired("keyArgs.colorDimension"),
this.domainDim=this.data.dimensions(this.domainDimName);var n=this.domainDim.type;
n.isComparable?this.domainComparer=function(e,t){return n.compare(e,t)}:(this.domainComparer=null,
e.log("Color value dimension should be comparable. Generated color scale may be invalid.")),
this.nullRangeValue=i.colorMissing?t.color(i.colorMissing):t.Color.transparent,this.domainRangeCountDif=0;
}).add({build:function(){this.range=this._getRange(),this.desiredDomainCount=this.range.length+this.domainRangeCountDif;
var e=this._getDomain();return this._createScale(e)},buildMap:function(){this.range=this._getRange(),
this.desiredDomainCount=this.range.length+this.domainRangeCountDif;var t;if(this.keyArgs.normPerBaseCategory)t=function(e){
var t=this._ensureDomain(null,!1,e);return this._createScale(t)};else{var i=this._getDomain(),n=this._createScale(i);
t=e.fun.constant(n)}return this._createCategoryScalesMap(t)},_createScale:e.abstractMethod,
_createCategoryScalesMap:function(e){return this.data.children().object({name:function(e){
return e.absKey},value:e,context:this})},_getRange:function(){var e=this.keyArgs,i=e.colors||["red","yellow","green"];
return null!=e.colorMin&&null!=e.colorMax?i=[e.colorMin,e.colorMax]:null!=e.colorMin?i.unshift(e.colorMin):null!=e.colorMax&&i.push(e.colorMax),
i.map(function(e){return t.color(e)})},_getDataExtent:function(e){var t=e.dimensions(this.domainDimName).extent({
visible:!0});if(!t)return null;var i=t.min.value,n=t.max.value;return n==i&&(n>=1?i=n-1:n=i+1),
{min:i,max:n}},_getDomain:function(){var e=this.keyArgs.colorDomain;return null!=e?(e=e.slice(),
this.domainComparer&&e.sort(this.domainComparer),e.length>this.desiredDomainCount&&(e=e.slice(0,this.desiredDomainCount))):e=[],
this._ensureDomain(e,!0,this.data)},_ensureDomain:function(i,n,a){var r;if(i&&n){
var s=this.desiredDomainCount-i.length;if(s>0&&(r=this._getDataExtent(a)))switch(s){
case 1:this.domainComparer?e.array.insert(i,r.max,this.domainComparer):i.push(r.max);
break;case 2:this.domainComparer?(e.array.insert(i,r.min,this.domainComparer),e.array.insert(i,r.max,this.domainComparer)):(i.unshift(r.min),
i.push(r.max));break;default:e.debug>=2&&e.log("Ignoring option 'colorDomain' due to unsupported length."+e.format(" Should have '{0}', but instead has '{1}'.",[this.desiredDomainCount,i.length])),
i=null}}if(!i&&(r||(r=this._getDataExtent(a)),r)){var o=r.min,l=r.max,u=(l-o)/(this.desiredDomainCount-1);
i=t.range(o,l+u,u)}return i}}),e.type("pvc.color.LinearScalesBuild",X.color.ScalesBuild).add({
_createScale:function(e){var i=t.Scale.linear();return e&&i.domain.apply(i,e),i.range.apply(i,this.range),
i}}),e.type("pvc.color.DiscreteScalesBuild",X.color.ScalesBuild).init(function(e){
this.base(e),this.domainRangeCountDif=1}).add({_createScale:function(i){function n(e){
if(null==e)return s;for(var t=0;a>t;t++)if(e<=i[t+1])return r[t];return r[o]}var a=i.length-1,r=this.range,s=this.nullRangeValue,o=r.length-1;
return e.copy(n,t.Scale.common),n.domain=function(){return i},n.range=function(){
return r},n}}),e.type("pvc.visual.Context").init(function(e,t,i){this.chart=e.chart,
this.panel=e,v.call(this,t,i)}).add({isPinned:!1,pin:function(){return this.isPinned=!0,
this},compatVersion:function(){return this.panel.compatVersion()},getCompatFlag:function(e){
return this.panel.getCompatFlag(e)},finished:function(e){return this.sign.finished(e);
},delegate:function(e){return this.sign.delegate(e)},getV1Series:function(){var t;
return e.nullyTo(this.scene.firstAtoms&&(t=this.scene.firstAtoms[this.panel._getV1DimName("series")])&&t.rawValue,"Series");
},getV1Category:function(){var e;return this.scene.firstAtoms&&(e=this.scene.firstAtoms[this.panel._getV1DimName("category")])&&e.rawValue;
},getV1Value:function(){var e;return this.scene.firstAtoms&&(e=this.scene.firstAtoms[this.panel._getV1DimName("value")])&&e.value;
},getV1Datum:function(){return this.panel._getV1Datum(this.scene)},get:function(e,t){
return this.scene.get(e,t)},getSeries:function(){return this.scene.get("series")},
getCategory:function(){return this.scene.get("category")},getValue:function(){return this.scene.get("value");
},getTick:function(){return this.scene.get("tick")},getX:function(){return this.scene.get("x");
},getY:function(){return this.scene.get("y")},getColor:function(){return this.scene.get("color");
},getSize:function(){return this.scene.get("size")},getSeriesLabel:function(){return this.scene.get("series","label");
},getCategoryLabel:function(){return this.scene.get("category","label")},getValueLabel:function(){
return this.scene.get("value","label")},getTickLabel:function(){return this.scene.get("tick","label");
},getXLabel:function(){return this.scene.get("x","label")},getYLabel:function(){return this.scene.get("y","label");
},getColorLabel:function(){return this.scene.get("color","label")},getSizeLabel:function(){
return this.scene.get("size","label")},select:function(e){return this.scene.select(e);
},toggleVisible:function(){return this.scene.toggleVisible()},click:function(){var e=this;
if(e.clickable()&&e.panel._onClick(e),e.selectableByClick()){var t=e.event;e.select({
replace:!t||!(t.ctrlKey||t.metaKey)})}},doubleClick:function(){this.doubleClickable()&&this.panel._onDoubleClick(this);
},clickable:function(){var e=this;return(e.sign?e.sign.clickable():e.panel.clickable())&&(!e.scene||e.scene.clickable());
},selectableByClick:function(){var e=this;return(e.sign?e.sign.selectableByClick():e.panel.selectableByClick())&&(!e.scene||e.scene.selectableByClick());
},doubleClickable:function(){var e=this;return(e.sign?e.sign.doubleClickable():e.panel.doubleClickable())&&(!e.scene||e.scene.doubleClickable());
},hoverable:function(){var e=this;return(e.sign?e.sign.hoverable():e.panel.hoverable())&&(!e.scene||e.scene.hoverable());
}}),Object.defineProperty)try{Object.defineProperty(X.visual.Context.prototype,"parent",{
get:function(){throw e.error.operationInvalid("The 'this.parent.index' idiom has no equivalent in this version. Please try 'this.pvMark.parent.index'.");
}})}catch(le){}X.text={getFitInfo:function(e,i,n,a,r){if(""===n)return{h:!0,v:!0,
d:!0};var s=t.Text.measureWidth(n,a);return{h:e>=s,v:i>=s,d:s<=Math.sqrt(e*e+i*i)-r
}},trimToWidthB:function(e,i,n,a,r){var s=t.Text.measureWidth(a,n),o=1.5*s;return X.text.trimToWidth(e,i,n,a,r,o);
},trimToWidth:function(e,i,n,a,r,s){if(""===i)return i;var o=t.Text.measureWidth(i,n);
return o>e&&(i=X.text.trimToWidthBin(e,i,n,a,r,s)),i},trimToWidthBin:function(e,i,n,a,r,s){
function o(e,t,i){return r?e.slice(t):e.slice(0,i)}var l=t.Text.measureWidth(i,n);
if(e>=l)return i;for(var u,c=0,h=Math.max(0,e-t.Text.measureWidth(a,n)),d=i.length,f=d-1,v=0;f>v&&f>0;){
var p=(h-c)/(l-c);u=Math.ceil(v*(1-p)+f*p);var g=o(i,d-u,u),m=t.Text.measureWidth(g,n);
if(m>h)f=u-1,l=m;else{if(!(t.Text.measureWidth(o(i,d-u-1,u+1),n)<h))return s&&s>=m?"":r?a+g:g+a;
v=u+1,c=m}}return i=o(i,d-f,f),m=t.Text.measureWidth(i,n),s&&s>=m?"":r?a+i:i+a},justify:function(e,i,n){
var a=[];if(i<t.Text.measureWidth("a",n))return a;for(var r=(e||"").split(/\s+/),s="";r.length;){
var o=r.shift();if(o){var l=s?s+" "+o:o;t.Text.measureWidth(l,n)>i?(s&&a.push(s),
s=o):s=l}}return s&&a.push(s),a},getLabelBBox:function(e,i,n,a,r,s){var o=t.Label.getPolygon(e,i,n,a,r,s),l=o.bbox();
return l.source=o,l.sourceAngle=r,l.sourceAlign=n,l.sourceTextWidth=e,l}},e.space("pvc.trends",function(t){
var i={};e.set(t,"define",function(t,n){t||e.fail.argumentRequired("type"),n||e.fail.argumentRequired("trendSpec"),
e.object.is(n)||e.fail.argumentInvalid("trendSpec","Must be a trend specification object."),
t=(""+t).toLowerCase(),e.debug>=2&&e.hasOwn(i,t)&&e.log(e.format("[WARNING] A trend type with the name '{0}' is already defined.",[t]));
var a=n.label||e.fail.argumentRequired("trendSpec.label"),r=n.model||e.fail.argumentRequired("trendSpec.model");
e.fun.is(r)||e.fail.argumentInvalid("trendSpec.mode","Must be a function.");var s={
dataPartAtom:{v:"trend",f:a},type:t,label:a,model:r};i[t]=s},"get",function(t){return t||e.fail.argumentRequired("type"),
e.getOwn(i,t)||e.fail.operationInvalid("Undefined trend type '{0}'.",[t])},"has",function(t){
return e.hasOwn(i,t)},"types",function(){return e.ownKeys(i)}),t.define("linear",{
label:"Linear trend",model:function(t){for(var i=e.get(t,"rows"),n=e.get(t,"x"),a=e.get(t,"y"),r=0,s=0,o=0,l=0,u=0,c=0,h=function(e){
return null!=e?+e:NaN};i.next();){var d=i.item,f=n?h(n(d)):r;if(!isNaN(f)){var v=h(a(d));
isNaN(v)||(s++,o+=f,l+=v,u+=f*v,c+=f*f)}r++}if(s>=2){var p=o/s,g=l/s,m=u/s,b=c/s,x=b-p*p,y=0===x?0:(m-p*g)/x,_=g-y*p;
return{alpha:_,beta:y,reset:e.noop,sample:function(e){return _+y*+e}}}}}),t.define("moving-average",{
label:"Moving average",model:function(t){var i=Math.max(+(e.get(t,"periods")||3),2),n=0,a=[];
return{reset:function(){n=0,a.length=0},sample:function(e,t){var r=i;return null!=t&&(a.unshift(t),
n+=t,r=a.length,r>i&&(n-=a.pop(),r=i)),n/r}}}}),t.define("weighted-moving-average",{
label:"Weighted Moving average",model:function(t){var i=Math.max(+(e.get(t,"periods")||3),2),n=0,a=0,r=[],s=0,o=0;
return{reset:function(){n=a=o=s=0,r.length=0},sample:function(e,t){if(null!=t)if(i>s)r.push(t),
s++,o+=s,a+=s*t,n+=t;else{a+=s*t-n,n+=t-r[0];for(var l=1;i>l;l++)r[l-1]=r[l];r[i-1]=t;
}return a/o}}}})}),X.spec={on:p.bind(null,"on"),before:p.bind(null,"before"),after:p.bind(null,"after")
},e("pvc.visual.SlidingWindow",X.visual.OptionsBase.extend({init:function(e){this.base(e,"slidingWindow",0,{
byNaked:!1}),this.length=this.option("Length")},methods:{length:null,dimension:null,
select:m,initFromOptions:function(){this.length&&(this.dimension=this.option("Dimension"),
this.override("select",this.option("Select")))},setDataFilter:function(e){e.select=this.select.bind(this);
},setDimensionsOptions:function(t){var n=this.chart,a=n.options.dimensions,r=n.options.dimensionGroups;
t.dimensionsList().forEach(function(s){if(s.isDiscrete){var o=s.name,l=n.visualRolesOf(o,!0);
if(l){var u=a&&a[o];if(!u||!u.comparer){var c=i.DimensionType.dimensionGroupName(o),h=r&&r[c];
h&&h.comparer||(s.setComparer(e.ascending),l.forEach(function(e){e.grouping.bind(t);
}))}}}})},setLayoutPreservation:function(e){null==e.options.preserveLayout&&(e.options.preserveLayout=!0);
},setAxesDefaults:function(e){e.axesList.forEach(function(e){var t=e.role;t&&(1===t.grouping.dimensionNames().length&&t.grouping.firstDimensionName()===this.dimension&&this._setAxisFixedRatio(e),
"color"===e.type&&e.option.defaults({PreserveMap:!0}))},this)},_setAxisFixedRatio:function(e){
var t=e.option;t.isDefined("FixedLength")&&t.isDefined("PreserveRatio")&&(this.option.isSpecified("Length")&&e.option.defaults({
FixedLength:this.length}),e.option.defaults({PreserveRatio:!0}))}},options:{Dimension:{
resolve:"_resolveFull",cast:function(e){return X.parseDimensionName(e,this.chart);
},getDefault:g},Length:{resolve:"_resolveFull",cast:function(e){return t.parseDatePrecision(e,null);
}},Select:{resolve:"_resolveFull",cast:e.fun.as,getDefault:function(){return m.bind(this);
}}}})),e.MetaType.subType(b,{methods:{variable:function(t,i){var n;if(this._vars[t])void 0!==i&&(n=e.set({},"_"+t+"EvalCore",e.fun.to(i)));else{
this._vars[t]=!0;var a=this.Ctor.prototype;n={};var r="_"+t+"Eval";n[t]=w(t,r);var s=r+"Core";
e.hasOwn(a,r)||(n[r]=e.methodCaller(s)),e.hasOwn(a,s)||(n[s]=e.fun.to(void 0===i?null:i));
}return n&&this.methods(n),this}}});var ue=b.Ctor;e("pvc.visual.Scene",ue.configure({
init:function(n,a){if(e.debug>=4&&(this.id=e.nextId("scene")),this._renderId=0,this.renderState={},
t.Dom.Node.call(this,null),this.parent=n||null,n){this.root=n.root;var r=e.get(a,"index",null);
n.insertAt(this,r)}else this.root=this,this._active=null,this._panel=e.get(a,"panel")||e.fail.argumentRequired("panel","Argument is required on root scene.");
var s,o,l,u,c,h,d,f=e.array.to(e.get(a,"source"));f&&f.length?(this.source=f,s=f[0],
s instanceof i.Data?(o=s,c=f,l=o.firstDatum()||e.query(c).select(function(e){return e.firstDatum();
}).first(e.notNully)):(s instanceof i.Datum||e.assert("not a datum"),l=s,u=f),h=s.atoms,
d=l&&l.atoms||h):h=d=n?Object.create(n.atoms):{},this.atoms=h,this.firstAtoms=d,c&&(this.groups=c),
o&&(this.group=o),u&&(this._datums=u),l&&(this.datum=l),(!s||s.isNull)&&(this.isNull=!0),
this.vars=n?Object.create(n.vars):{}},methods:[t.Dom.Node,X.visual.Interactive,{source:null,
groups:null,group:null,_datums:null,datum:null,isNull:!1,get:function(e,t){var i=this.vars[e];
return i&&i[t||"value"]},getSeries:function(){return this.get("series")},getCategory:function(){
return this.get("category")},getValue:function(){return this.get("value")},getTick:function(){
return this.get("tick")},getX:function(){return this.get("x")},getY:function(){return this.get("y");
},getColor:function(){return this.get("color")},getSize:function(){return this.get("size");
},getSeriesLabel:function(){return this.get("series","label")},getCategoryLabel:function(){
return this.get("category","label")},getValueLabel:function(){return this.get("value","label");
},getTickLabel:function(){return this.get("tick","label")},getXLabel:function(){return this.get("x","label");
},getYLabel:function(){return this.get("y","label")},getColorLabel:function(){return this.get("color","label");
},getSizeLabel:function(){return this.get("size","label")},data:function(){var e=this.group;
if(!e){for(var t=this;!e&&(t=t.parent);)e=t.group;e||(e=this.panel.data)}return e;
},allGroup:function(){return 1===this.groups.length?this.group:this._allGroup||(this._allGroup=this._calcAllGroup());
},_calcAllGroup:function(){var e=this.groups;return new i.Data(e&&e.length?{linkParent:i.Data.lca(e),
datums:this.datums(),where:function(t){return!!e&&e.some(function(e){return e.contains(t);
})}}:{linkParent:this.data(),datums:this.datums()})},datums:function(){return this.groups?e.query(this.groups).selectMany(function(e){
return e.datums()}):this._datums?e.query(this._datums):e.query()},format:function(t){
return e.format(t,this._formatScope,this)},_formatScope:function(t){if("#"===t.charAt(0)){
if(t=t.substr(1).split("."),t.length>2)throw e.error.operationInvalid("Scene format mask is invalid.");
var i=this.firstAtoms[t[0]];if(i){if(t.length>1)switch(t[1]){case"value":return i.value;
case"label":break;default:throw e.error.operationInvalid("Scene format mask is invalid.");
}return i}return null}return e.getPath(this.vars,t)},isRoot:function(){return this.root===this;
},panel:function(){return this.root._panel},chart:function(){return this.root._panel.chart;
},compatVersion:function(){return this.root._panel.compatVersion()},children:function(){
var t=this.childNodes;return t.length?e.query(t):e.query()},leafs:function(){function t(e){
for(;e.childNodes.length;)e=e.childNodes[0];return e}var i=this;return e.query(function(e){
if(!e){var n=t(i);return n===i?0:(this.item=n,1)}var a=this.item.nextSibling;if(a)return this.item=a,
1;for(var r=this.item;r!==i&&(r=r.parentNode);)if(a=r.nextSibling)return this.item=t(a),
1;return 0})},anyInteraction:function(){return!!this.root._active||this.anySelected();
},isActive:!1,getIsActive:function(){return(this.ownerScene||this).isActive},setActive:function(e){
e=!!e,this.getIsActive()===e||!e&&x(t.event)||this.chart()._setActiveScene(e?this:null);
},clearActive:function(){return!!this.active()&&this.chart()._setActiveScene(null);
},_setActive:function(e){this.isActive!==e&&_.call(this.root,this.isActive?null:this);
},_clearActive:function(){return _.call(this.root,null)},anyActive:function(){return!!this.root._active;
},active:function(){return this.root._active},activeSeries:function(){var e,t=this.active();
return t&&(e=t.vars.series)?e.value:void 0},isActiveSeries:function(){if(this.isActive)return!0;
var e=this.renderState.isActiveSeries;if(null==e){var t;e=void 0!==(t=this.activeSeries())&&t===this.vars.series.value,
this.renderState.isActiveSeries=e}return e},isActiveDatum:function(){return this.isActive?!0:!1;
},isActiveDescendantOrSelf:function(){return this.isActive||e.lazy(this.renderState,"isActiveDescOrSelf",this._calcIsActiveDescOrSelf,this);
},_calcIsActiveDescOrSelf:function(){var e=this.active();if(e)for(;e=e.parent;)if(e===this)return!0;
return!1},isVisible:function(){return this._visibleInfo().is},anyVisible:function(){
return this._visibleInfo().any},_visibleInfo:function(){return e.lazy(this.renderState,"visibleInfo",this._createVisibleInfo,this);
},_createVisibleInfo:function(){var t=this.chart().data.owner.visibleCount()>0,i=t&&this.datums().any(e.propGet("isVisible"));
return{any:t,is:i}},isSelected:function(){return this._selectedInfo().is},anySelected:function(){
return this._selectedInfo().any},_selectedInfo:function(){return e.lazy(this.renderState,"selectedInfo",this._createSelectedInfo,this);
},_createSelectedInfo:function(){var e=this.chart().data.owner.selectedCount()>0,t=e&&this.datums().any(i.Datum.isSelected);
return{any:e,is:t}},select:function(t){var n=this,a=n.datums().array();if(a.length){
var r=n.chart();r._updatingSelections(function(){a=r._onUserSelection(a),a&&a.length&&(r.options.ctrlSelectMode&&e.get(t,"replace",!0)?r.data.replaceSelected(a):i.Data.toggleSelected(a));
})}},isSelectedDescendantOrSelf:function(){return this.isSelected()||e.lazy(this.renderState,"isSelectedDescOrSelf",this._calcIsSelectedDescOrSelf,this);
},_calcIsSelectedDescOrSelf:function(){var e=this.firstChild;if(e)do if(e.isSelectedDescendantOrSelf())return!0;while(e=e.nextSibling);
return!1},toggleVisible:function(){i.Data.toggleVisible(this.datums())&&this.chart().render(!0,!0,!1);
},asView:function(e){return this.chart()._processViewSpec(e),this._asView(e.dimsKey,e.dimNames);
},_asView:function(t,i){if(this.ownerScene)return this.ownerScene._asView(t,i);var n=e.lazy(this,"_viewCache"),a=e.getOwn(n,t);
return void 0===a&&(n[t]=a=this._calcView(i)),a},_calcView:function(e){for(var t,n,a=null,r=0,s=e.length;s>r;r++){
if(n=e[r],t=this.atoms[n],!t||null==t.value)return null;(a||(a={}))[n]=t}return new i.Complex(this.data().owner,a,e,null,!0,!1);
}}]}));var ce=X.visual.ValueLabelVar=function(e,t,i,n){this.value=e,this.label=t,
void 0!==i&&(this.rawValue=i),void 0!==n&&(this.absLabel=n)};e.set(ce.prototype,"rawValue",void 0,"absLabel",void 0,"setValue",function(e){
return this.value=e,this},"setLabel",function(e){return this.label=e,this},"clone",function(){
return new ce(this.value,this.label,this.rawValue)},"toString",function(){var e=this.label||this.value;
return null==e?"":"string"!=typeof e?""+e:e}),ce.fromComplex=function(e){return e?new ce(e.value,e.label,e.rawValue,e.absLabel):new ce(null,"",null);
},ce.fromAtom=ce.fromComplex,e.space("pvc.visual").TraversalMode=e.makeEnum(["Tree","FlattenLeafs","FlattenDfsPre","FlattenDfsPost"],{
all:"AllMask"}),e.type("pvc.visual.Role").init(function(t,i){this.name=t,this.label=e.get(i,"label")||e.titleFromName(t),
this.index=e.get(i,"index")||0,this.plot=e.get(i,"plot"),this._legend={visible:!0
},this.dimensionDefaults=e.get(i,"dimensionDefaults")||{},e.get(i,"isRequired",!1)&&(this.isRequired=!0),
e.get(i,"autoCreateDimension",!1)&&(this.autoCreateDimension=!0);var n=e.get(i,"defaultSourceRole");
n&&(this.defaultSourceRoleName=this.plot?this.plot.ensureAbsRoleRef(n):n);var a=e.get(i,"defaultDimension");
if(a){this.defaultDimensionName=a;var r=a.match(/^(.*?)(\*)?$/);this.defaultDimensionGroup=r[1],
this.defaultDimensionGreedy=!!r[2]}var s=e.get(i,"rootLabel");null!=s&&(this.rootLabel=s);
var o=e.get(i,"traversalModes");o&&this.setTraversalModes(o);var l=e.get(i,"traversalMode");
if(l&&this.setTraversalMode(l),!a&&this.autoCreateDimension)throw e.error.argumentRequired("defaultDimension");
var u=e.get(i,"requireSingleDimension"),c=e.get(i,"requireIsDiscrete"),h=null!=c&&!c;
if(null==u&&(u=h),!c&&e.get(i,"isMeasure")){this.isMeasure=!0;var d=e.get(i,"isNormalized");
(d||e.get(i,"isPercent"))&&(this.isPercent=!0),d&&(this.isNormalized=!0)}var f=e.get(i,"valueType",null);
f!==this.valueType&&(this.valueType=this.dimensionDefaults.valueType=f),u!==this.requireSingleDimension&&(this.requireSingleDimension=u),
null!=c&&(this.requireIsDiscrete=this.dimensionDefaults.isDiscrete=!!c)}).add({isRequired:!1,
requireSingleDimension:!1,valueType:null,requireIsDiscrete:null,isMeasure:!1,isNormalized:!1,
isPercent:!1,defaultSourceRoleName:null,defaultDimensionName:null,defaultDimensionGroup:null,
defaultDimensionGreedy:null,grouping:null,traversalMode:X.visual.TraversalMode.FlattenLeafs,
traversalModes:X.visual.TraversalMode.AllMask,rootLabel:"",autoCreateDimension:!1,
isReversed:!1,label:null,sourceRole:null,_rootSourceRole:void 0,_legend:null,prettyId:function(){
return(this.plot?this.plot.prettyId+".":"")+this.name},legend:function(t){if(arguments.length){
if(null!=t)switch(typeof t){case"boolean":this._legend.visible=!!t;break;case"object":
e.each(t,function(e,t){void 0!==e&&("visible"===t&&(e=!!e),this[t]=e)},this._legend);
}return this}return this._legend},firstDimensionType:function(){var e=this.grouping;
return e&&e.firstDimensionType()},firstDimensionName:function(){var e=this.grouping;
return e&&e.firstDimensionName()},firstDimensionValueType:function(){var e=this.grouping;
return e&&e.firstDimensionValueType()},lastDimensionType:function(){var e=this.grouping;
return e&&e.lastDimensionType()},lastDimensionName:function(){var e=this.grouping;
return e&&e.lastDimensionName()},lastDimensionValueType:function(){var e=this.grouping;
return e&&e.lastDimensionValueType()},isDiscrete:function(){var e=this.grouping;return e&&e.isDiscrete();
},setSourceRole:function(e){this.sourceRole=e,this._rootSourceRole=void 0},getRootSourceRole:function(){
var e,t=this._rootSourceRole;if(void 0===t){if(t=this.sourceRole||null)for(;e=t.sourceRole;)t=e;
this._rootSourceRole=t}return t},setIsReversed:function(e){e?this.isReversed=!0:delete this.isReversed;
},setTraversalMode:function(t){var i=X.visual.TraversalMode;if(t=e.nullyTo(t,i.FlattenLeafs),
t!==this.traversalMode){if(!(t&this.traversalModes))throw e.error.argumentInvalid("traversalMode","Value is not currently valid.");
t===i.FlattenLeafs?delete this.traversalMode:this.traversalMode=t}},setTraversalModes:function(t){
if(t=this.traversalModes&=t,!t)throw e.error.argumentInvalid("traversalModes","Cannot become empty.");
var i=this.traversalMode&t;i||(i=t&-t,this.setTraversalMode(i))},setRootLabel:function(e){
e!==this.rootLabel&&(e?this.rootLabel=e:delete this.rootLabel,this.grouping&&this._updateBind(this.grouping));
},flatten:function(t,i){var n=this.flattenedGrouping(i)||e.fail.operationInvalid("Role is unbound.");
return t.groupBy(n,i)},flattenedGrouping:function(e){var t=this.grouping;if(t){e=e?Object.create(e):{};
var i=e.flatteningMode;return null==i&&(i=e.flatteningMode=this._flatteningMode()),
null!=e.isSingleLevel||i||(e.isSingleLevel=!0),t.ensure(e)}},_flatteningMode:function(){
var e=X.visual.TraversalMode,t=i.FlatteningMode;switch(this.traversalMode){case e.FlattenDfsPre:
return t.DfsPre;case e.FlattenDfsPost:return t.DfsPost}return t.None},select:function(t,n){
var a=this.grouping;return a?(e.setUDefaults(n,"flatteningMode",i.FlatteningMode.None),
t.groupBy(a.ensure(n),n)):void 0},view:function(e){var t=this.grouping;return t?t.view(e):void 0;
},preBind:function(e){return this.__grouping=e,this},isPreBound:function(){return!!this.__grouping;
},preBoundGrouping:function(){return this.__grouping},isBound:function(){return!!this.grouping;
},postBind:function(e){var t=this.__grouping;return t&&(delete this.__grouping,t.bind(e),
this.bind(t)),this},bind:function(e){return e=this._validateBind(e),this._updateBind(e),
this},_validateBind:function(t){if(t)if(t.isNull())t=null;else{if(this.requireSingleDimension&&!t.isSingleDimension)throw e.error.operationInvalid("Role '{0}' only accepts a single dimension.",[this.name]);
var n=this.valueType,a=this.requireIsDiscrete;t.dimensions().each(function(t){var r=t.type;
if(n&&r.valueType!==n)throw e.error.operationInvalid("Role '{0}' cannot be bound to dimension '{1}'. \nIt only accepts dimensions of type '{2}' and not of type '{3}'.",[this.name,r.name,i.DimensionType.valueTypeName(n),r.valueTypeName]);
if(null!=a&&r.isDiscrete!==a){if(!a)throw e.error.operationInvalid("Role '{0}' cannot be bound to dimension '{1}'.\nIt only accepts continuous dimensions.",[this.name,r.name]);
r._toDiscrete()}},this)}return t},canHaveSource:function(e){var t=this.valueType;return null==t||t===e.valueType;
},_updateBind:function(e){this.grouping=e,this.grouping&&(this.grouping=this.grouping.ensure({
reverse:this.isReversed,rootLabel:this.rootLabel}))}}).type().add({parse:function(t,n,a){
var r,s={isReversed:!1,source:null,grouping:null,legend:null};if(e.object.is(a)){
a.isReversed&&(s.isReversed=!0),s.legend=a.legend;var o=a.from;if(o){if(o===n)throw e.error.operationInvalid("Invalid source role.");
s.source=t(o)||e.fail.operationInvalid("Source visual role '{0}' is not defined.",[o]);
}else r=a.dimensions}else(null===a||e.string.is(a))&&(r=a);return void 0!==r&&(s.grouping=i.GroupingSpec.parse(r)),
s}}),X.visual.rolesBinder=function(){function t(){if(k(_,0),!g)throw e.error.argumentRequired("context");
if(!m)throw e.error.argumentRequired("complexTypeProject");return _=1,y=!!x&&x.level()>=3,
g.query().each(function(e){var t=g.getOptions(e);void 0!==t&&n(e,t)||l(e)}),S.forEach(function(e){
u(e)},this),S=[],c(),_=2,this}function n(e,t){var i,n=X.visual.Role.parse(g,e.name,t);
return n.isReversed&&e.setIsReversed(!0),null!=n.legend&&e.legend(n.legend),n.source?(e.setSourceRole(n.source),
a(e),1):(i=n.grouping)?(r(e,i),1):0}function a(e){S.push(e)}function r(e,t){e.preBind(t),
t.isNull()?C(e):s(e,t.dimensionNames())}function s(e,t){t.forEach(function(t){o(e,t);
})}function o(e,t){P[t]?delete w[t]:(P[t]=!0,w[t]=e,m.setDim(t))}function l(e){var t=g(e.name);
t&&t!==e&&e.canHaveSource(t)&&(e.setSourceRole(t),a(e))}function u(t,i){var n=t.prettyId();
if(i){if(e.hasOwn(i,n))throw e.error.argumentInvalid("visualRoles","Cyclic source role definition.");
}else i={};if(i[n]=!0,t.isPreBound())return t.preBoundGrouping();var a=t.sourceRole;
if(!a)return t.isPreBound()?t.preBoundGrouping():null;var r=u(a,i);return r&&(a.isReversed&&t.setIsReversed(!t.isReversed),
t.preBind(r)),r}function c(){e.eachOwn(w,function(e,t){m.setDimDefaults(t,e.dimensionDefaults);
})}function h(){k(_,2),_=3,g.query().each(function(e){e.isPreBound()||d(e)}),S.forEach(function(e){
u(e)||v(e)}),c();var e=new i.ComplexType;return m.configureComplexType(e,b),y&&x(e.describe()),
g.query().each(function(t){t.isPreBound()&&t.postBind(e)}),y&&p(),_=4,e}function d(e){
if(e.sourceRole)return a(e);var t=e.defaultDimensionGroup;if(t){if(e.defaultDimensionGreedy){
var i=m.groupDimensionsNames(t);if(i)return f(e,i)}else if(m.hasDim(t))return f(e,t);
if(e.autoCreateDimension)return m.setDim(t,{isHidden:!0}),f(e,t)}if(e.defaultSourceRoleName){
var n=g(e.defaultSourceRoleName);if(n)return e.setSourceRole(n),a(e)}v(e)}function f(e,t){
var n=i.GroupingSpec.parse(t);r(e,n)}function v(e){C(e),e.bind(null),e.setSourceRole(null);
}function p(){var t=e.textTable(3).rowSep().row("Visual Role","Source/From","Bound to Dimension(s)").rowSep();
g.query().each(function(e){t.row(e.prettyId(),e.sourceRole?e.sourceRole.prettyId():"-",String(e.grouping||"-"));
}),t.rowSep(!0),x("VISUAL ROLES MAP SUMMARY\n"+t()+"\n")}var g,m,b,x,y,_=0,S=[],w={},P={};
return{logger:function(e){return arguments.length?(k(_,0),x=e,this):x},dimensionsOptions:function(e){
return arguments.length?(k(_,0),b=e,this):b},context:function(e){return arguments.length?(k(_,0),
g=e,this):g},complexTypeProject:function(e){return arguments.length?(k(_,0),m=e,this):m;
},begin:t,end:h}},e.type("pvc.visual.RoleVarHelper").init(function(t,i,n,a){var r,s=e.get(a,"hasPercentSubVar",!1),o=this.grouping=n&&n.grouping;
if(o){this.role=n;var l=n.getRootSourceRole();this.sourceRoleName=l&&l.name,this.sourceRoleName===n.name&&(this.sourceRoleName=null),
r=t.panel(),this.panel=r,o.isDiscrete()||(this.rootContDim=r.data.owner.dimensions(o.lastDimensionName()),
s&&(this.percentFormatter=r.chart.options.percentValueFormat))}if(!i){if(!n)throw e.error.operationInvalid("Role is not defined, so the roleName argument is required.");
i=n.name}if(!o){var u=t.vars[i]=new ce(null,"");s&&(u.percent=new ce(null,""))}this.roleName=i,
t["is"+e.firstUpperCase(i)+"Bound"]=!!o,e.get(a,"allowNestedVars")&&(this.allowNestedVars=!0);
}).add({allowNestedVars:!1,isBound:function(){return!!this.grouping},onNewScene:function(t,i){
if(this.grouping){var n=this.roleName;if(this.allowNestedVars?!e.hasOwnProp.call(t.vars,n):!t.vars[n]){
var a,r=this.sourceRoleName;if(r&&(a=e.getOwn(t.vars,r)))t.vars[n]=a.clone();else if(i){
var s,o=this.rootContDim;if(o){var l,u,c=t.group,h=c?c.singleDatum():t.datum;if(h)h.isNull||(s=ce.fromAtom(h.atoms[o.name]),
null!=s.value&&this.percentFormatter&&(c?(u=c.dimensions(o.name),l=u.valuePercent({
visible:!0})):l=t.data().dimensions(o.name).percent(s.value)));else if(c){u=c.dimensions(o.name);
var d=u.value({visible:!0,zeroIfNone:!1});if(null!=d){var f=o.format(d);s=new ce(d,f,d),
this.percentFormatter&&(l=u.valuePercent({visible:!0}))}}s&&this.percentFormatter&&(s.percent=null==s.value?new ce(null,""):new ce(l,this.percentFormatter.call(null,l)));
}else{var v=t.datum;if(v&&(v.isNull&&(v=t.datums().where(P).first()),v)){var p=this.grouping.view(v);
s=ce.fromComplex(p)}}s||(s=new ce(null,""),this.percentFormatter&&(s.percent=new ce(null,""))),
t.vars[n]=s}}}}}),e.type("pvc.visual.DataCell").init(function(e,t,i,n,a){this.plot=e,
this.axisType=t,this.axisIndex=i,this.role=n,this.dataPartValue=a,this.key=[t,i,n.prettyId(),a].join("~");
}).add({legendVisible:function(){return this.role.legend().visible}}),e.type("pvc.visual.ColorDataCell",X.visual.DataCell).init(function(e,t,i,n,a){
this.base(e,t,i,n,a),this._legendGroupScene=null,this._legendSymbolRenderer=null}).add({
legendSymbolRenderer:function(e){return arguments.length?(e&&"object"==typeof e&&(e=X.visual.legend.symbolRenderer(e)),
this._legendSymbolRenderer=e,this):this._legendSymbolRenderer}});var he=e("pvc.visual.Axis",X.visual.OptionsBase.extend({
init:function(t,i,n,a){this.base(t,i,n,a),t._addAxis(this),this._state={},a&&a.state&&e.copy(this._state,a.state);
},methods:{_buildOptionId:function(){return this.id+"Axis"},scaleTreatsNullAs:function(){
return"null"},scaleNullRangeValue:function(){return null},scaleUsesAbs:e.retFalse,
scaleSumNormalized:e.retFalse,domainVisibleOnly:e.retTrue,domainIgnoreNulls:e.retFalse,
domainGroupOperator:function(){return"flatten"},domainItemValueProp:function(){return"value";
},bind:function(t){var i=this;return t||e.fail.argumentRequired("dataCells"),!i.dataCells||e.fail.operationInvalid("Axis is already bound."),
i.dataCells=e.array.to(t),i._dataCellsByKey=e.query(i.dataCells).uniqueIndex(function(e){
return e.key}),i.dataCell=i.dataCells[0],i.role=i.dataCell&&i.dataCell.role,i.scaleType=D(i.role.grouping),
i._domainData=null,i._domainValues=null,i._domainItems=null,i._conciliateVisualRoles(),
this},_buildState:function(){return{}},getState:function(){return this._buildState();
},setDataCellScaleInfo:function(t,i){if(this._dataCellsByKey[t.key]!==t)throw e.error.argumentInvalid("dataCell","Not present in this axis.");
e.lazy(this,"_dataCellsScaleInfoByKey")[t.key]=i},getDataCellScaleInfo:function(t){
return e.getOwn(this._dataCellsScaleInfoByKey,t.key)},domainData:function(){this.isBound()||e.fail.operationInvalid("Axis is not bound.");
var t=this._domainData;if(!t){var i=this.dataCells.map(M),n=this.chart.partData(i);
this._domainData=t=this._createDomainData(n)}return t},domainCellData:function(e){
var t=this.dataCells;if(1===t.length)return this.domainData();var i=t[e],n=this.chart.partData(i.dataPartValue);
return this._createDomainData(n)},domainCellItems:function(t){var i=this.dataCells;
if(1===i.length)return this.domainItems();var n=e.number.is(t)?this.domainCellData(t):t;
return this._selectDomainItems(n).array()},domainValues:function(){var e=this._domainValues;
return e||(this._calcDomainItems(),e=this._domainValues),e},domainItems:function(){
var e=this._domainItems;return e||(this._calcDomainItems(),e=this._domainItems),e;
},domainItemCount:function(){return this.domainItems().length},domainItemValue:function(t){
return e.nullyTo(t[this.domainItemValueProp()],"")},isDiscrete:function(){return!!this.role&&this.role.isDiscrete();
},isBound:function(){return!!this.role},setScale:function(t,i){return this.isBound()||e.fail.operationInvalid("Axis is not bound."),
this.scale=t?i?t:this._wrapScale(t):null,this},_wrapScale:function(t){t.type=this.scaleType;
var i;if("discrete"!==t.type){var n=this.scaleUsesAbs(),a=this.scaleTreatsNullAs();
if(a&&"null"!==a){var r="min"===a;i=n?function(e){return t(null==e?r?t.domain()[0]:0:0>e?-e:e);
}:function(e){return t(null==e?r?t.domain()[0]:0:e)}}else{var s=this.scaleNullRangeValue();
i=n?function(e){return null==e?s:t(0>e?-e:e)}:function(e){return null==e?s:t(e)}}
}else i=function(e){return t(null==e?"":e)};return e.copy(i,t)},sceneScale:function(t){
var i=e.get(t,"sceneVarName")||this.role.name,n=this.role.grouping,a=this.scale;if(n.lastDimensionValueType()===Number){
var r=e.get(t,"nullToZero",!0),s=function(e){var t=e.vars[i].value;if(null==t){if(!r)return t;
t=0}return a(t)};return e.copy(s,a),s}return a.by1(function(e){return e.vars[i].value;
})},_conciliateVisualRoles:function(){var t=this.dataCells.length;if(t>1){var i,n,a,r,s,o,l,u,c=this._getBoundRoleGrouping(this.role),h=function(t,i){
return e.error.operationInvalid(e.format(t,i))};if("discrete"===this.scaleType){for(a=this.role.traversalModes,
o=this.role.rootLabel,l=String(this.role.grouping.dimensionNames()),u=1;t>u&&a;u++)if(i=this.dataCells[u].role,
a&=i.traversalModes,o||(o=i.rootLabel),n=this._getBoundRoleGrouping(i),l!==String(n.dimensionNames()))throw h("The visual roles '{0}', on axis '{1}', assumed discrete, should be bound to the same dimension list.",[[this.role.prettyId(),i.prettyId()].join("', '"),this.id]);
if(!a)throw h("The visual roles on axis '{0}', assumed discrete, do not share a possible traversal mode.",[this.id]);
for(r=0,u=0;t>u;u++)i=this.dataCells[u].role,s=i.traversalMode,s&a&&s>r&&(r=s);for(r||(r=a&-a),
u=0;t>u;u++)i=this.dataCells[u].role,i.setRootLabel(o),i.setTraversalMode(r),i.setTraversalModes(r);
}else{if(!c.lastDimensionType().isComparable)throw h("The visual roles on axis '{0}', assumed continuous, should have 'comparable' groupings.",[this.id]);
for(u=1;t>u;u++){if(i=this.dataCells[u].role,n=this._getBoundRoleGrouping(i),this.scaleType!==D(n))throw h("The visual roles on axis '{0}', assumed continuous, should have scales of the same type.",[this.id]);
if(this.role.isNormalized!==i.isNormalized)throw h("The visual roles on axis '{0}', assumed normalized, should be of the same type.",[this.id]);
}}}},_getBoundRoleGrouping:function(t){var i=t.grouping;if(!i)throw e.error.operationInvalid("Axis' role '"+t.name+"' is unbound.");
return i},_createDomainData:function(e){var t={visible:this.domainVisibleOnly()?!0:null,
isNull:this.chart.options.ignoreNulls||this.domainIgnoreNulls()?!1:null};return this.role[this.domainGroupOperator()](e,t);
},_selectDomainItems:function(e){return e.children()},_calcDomainItems:function(){
var t=e.hasOwnProp,i={},n=[],a=[],r=this.domainData();this._selectDomainItems(r).each(function(e){
var r=this.domainItemValue(e);t.call(i,r)||(i[r]=1,n.push(r),a.push(e))},this),this._domainItems=a,
this._domainValues=n}}}));e("pvc.visual.ColorAxis",he.extend({methods:{scaleNullRangeValue:function(){
return this.option("Missing")||null},scaleUsesAbs:function(){return this.option("UseAbs");
},domainVisibleOnly:function(){return"discrete"!==this.scaleType},bind:function(t){
return this.base(t),this._legendGroupScene=null,this._plotList=e.query(t).select(function(e){
return e.plot}).distinct(function(e){return e&&e.id}).array(),this},_wrapScale:function(e){
var t=this.option.isSpecified,i="discrete"!==this.scaleType||t("Transform")||!t("Colors");
if(i){var n=this.option("Transform");n&&(e=e.transform(n))}return this.base(e)},_buildState:function(){
return{preservedMap:this._calcPreservedMap()}},_calcPreservedMap:function(){var t=this.scale;
if(t&&"discrete"===this.scaleType){var i=this._state.preservedMap||{};return t.domain().forEach(function(n){
e.hasOwn(i,n)||(i[n]=t(n))}),i}},_getPreservedMap:function(){return this.option("PreserveMap")?this._state.preservedMap:null;
},scheme:function(){return e.lazy(this,"_scheme",this._createScheme,this)},_createColorMapFilter:function(t){
var i=e.uniqueIndex(t,function(e){return e.key});return{domain:function(i){return!e.hasOwn(t,i);
},color:function(t){return!e.hasOwn(i,t.key)}}},_getBaseScheme:function(){return this.option("Colors");
},_createScheme:function(){var t=this,i=t._getBaseScheme();if("discrete"!==t.scaleType)return function(){
var e=i.apply(null,arguments);return t._wrapScale(e)};var n=this._getPreservedMap()||t.option("Map");
if(!n)return function(){var e=i.apply(null,arguments);return t._wrapScale(e)};var a=this._createColorMapFilter(n,i);
return function(r){var s;r instanceof Array||(r=e.array.copy(arguments)),r=r.filter(a.domain);
var o=i(r),l=o.range().filter(a.color);o.range(l),s=function(t){var i=e.getOwn(n,t);
return i||o(t)},e.copy(s,o);var u,c;return s.domain=function(){if(arguments.length)throw e.error.operationInvalid("The scale cannot be modified.");
return u||(u=e.array.append(e.ownKeys(n),r)),u},s.range=function(){if(arguments.length)throw e.error.operationInvalid("The scale cannot be modified.");
return c||(c=e.array.append(e.own(n),l)),c},t._wrapScale(s)}},sceneScale:function(t){
var i=e.get(t,"sceneVarName")||this.role.name,n=this.scalesByCateg;if(n){var a=this.option("Missing");
return function(e){var t=e.vars[i].value;if(null==t)return a;var r=e.group.parent.absKey;
return n[r](t)}}return this.scale.by1(function(e){return e&&e.vars[i].value})},_registerResolversNormal:function(e){
this.chart.compatVersion()<=1&&e.push(this._resolveByV1OnlyLogic),e.push(this._resolveByOptionId,this._resolveByScaleType,this._resolveByCommonId),
this.index||e.push(this._resolveByNaked)},_resolveByScaleType:X.options.specify(function(e){
var t=this.scaleType;if(t){var i=e.name,n=this._chartOption(t+"ColorAxis"+i);return void 0===n&&"discrete"!==t&&(n=this._chartOption("continuousColorAxis"+i)),
n}}),_resolveByCommonId:X.options.specify(function(e){return this._chartOption("colorAxes"+e.name);
}),_resolveByNaked:X.options.specify(function(t){return this._chartOption(this.id+e.firstUpperCase(t.name));
}),_specifyV1ChartOption:function(e,t){return!this.index&&this.chart.compatVersion()<=1&&this._specifyChartOption(e,t)?!0:void 0;
}}}));var de,fe={resolveDefault:function(t){return!this.index&&this._specifyChartOption(t,e.firstLowerCase(t.name))?!0:void 0;
}};X.visual.ColorAxis.options({Colors:{resolve:"_resolveFull",getDefault:A,data:{
resolveV1:function(e){return"discrete"===this.scaleType?0===this.index?this._specifyChartOption(e,"colors"):1===this.index&&this.chart._allowV1SecondAxis&&this._specifyChartOption(e,"secondAxisColor"):this._specifyChartOption(e,"colorRange"),
!0},resolveDefault:function(e){0===this.index&&this._specifyChartOption(e,"colors");
}},cast:X.colorScheme},Map:{resolve:"_resolveFull",cast:R},PreserveMap:{resolve:"_resolveFull",
cast:Boolean,value:!1},Transform:{resolve:"_resolveFull",data:{resolveDefault:function(t){
var i=this._plotList;if(i.length){var n=!1;if(e.query(i).each(function(e){if(e.isMain)return n=!1;
var t=e.name;("plot2"===t||"trend"===t)&&(n=!0)}),n)return t.defaultValue(X.brighterColorTransform),
!0}}},cast:e.fun.to},NormByCategory:{resolve:function(e){return this.chart._allowColorPerCategory?this._resolveFull(e):(e.specify(!1),
!0)},data:{resolveV1:function(e){return this._specifyV1ChartOption(e,"normPerBaseCategory"),
!0}},cast:Boolean,value:!1},ScaleType:{resolve:"_resolveFull",data:{resolveV1:function(e){
return this._specifyV1ChartOption(e,"scalingType"),!0}},cast:X.parseContinuousColorScaleType,
value:"linear"},UseAbs:{resolve:"_resolveFull",cast:Boolean,value:!1},Domain:{resolve:"_resolveFull",
data:{resolveV1:function(e){return this._specifyV1ChartOption(e,"colorRangeInterval"),
!0}},cast:e.array.to},Min:{resolve:"_resolveFull",data:{resolveV1:function(e){return this._specifyV1ChartOption(e,"minColor"),
!0}},cast:t.color},Max:{resolve:"_resolveFull",data:{resolveV1:function(e){return this._specifyV1ChartOption(e,"maxColor"),
!0}},cast:t.color},Missing:{resolve:"_resolveFull",data:{resolveV1:function(e){return this._specifyV1ChartOption(e,"nullColor"),
!0}},cast:t.color,value:t.color("lightgray")},Unbound:{resolve:"_resolveFull",getDefault:function(){
var e=this.option("Colors");return e().range()[0]||X.defaultColor},cast:t.color},
LegendVisible:{resolve:"_resolveFull",data:fe,cast:Boolean,value:!0},LegendClickMode:{
resolve:"_resolveFull",data:fe,cast:X.parseLegendClickMode,value:"togglevisible"},
LegendDrawLine:{resolve:"_resolveFull",data:fe,cast:Boolean,value:!1},LegendDrawMarker:{
resolve:"_resolveFull",data:fe,cast:Boolean,value:!0},LegendShape:{resolve:"_resolveFull",
data:fe,cast:X.parseShape}}),e("pvc.visual.SizeAxis",he.extend({init:function(t,i,n,a){
a=e.set(a,"byNaked",!1),this.base(t,i,n,a)},methods:{scaleTreatsNullAs:function(){
return"min"},scaleUsesAbs:function(){return this.option("UseAbs")},setScaleRange:function(t){
var i=this.scale;return i.min=t.min,i.max=t.max,i.size=t.max-t.min,i.range(i.min,i.max),
e.debug>=4&&e.log("Scale: "+e.describe(e.copyOwn(i))),this}},options:{OriginIsZero:{
resolve:"_resolveFull",cast:Boolean,value:!1},FixedMin:{resolve:"_resolveFull",cast:e.number.to
},FixedMax:{resolve:"_resolveFull",cast:e.number.to},FixedLength:{resolve:"_resolveFull",
cast:e.number.to},DomainAlign:{resolve:"_resolveFull",cast:X.parseDomainAlign,value:"center"
},UseAbs:{resolve:"_resolveFull",cast:Boolean,value:!1}}})),e("pvc.visual.NormalizedAxis",he.extend({
init:function(t,i,n,a){a=e.set(a,"byNaked",!1),this.base(t,i,n,a)},methods:{scaleTreatsNullAs:function(){
return"zero"},scaleUsesAbs:e.retTrue,scaleSumNormalized:e.retTrue,setScaleRange:function(t){
var i=this.scale;return i.min=t.min,i.max=t.max,i.size=t.max-t.min,i.range(i.min,i.max),
e.debug>=4&&e.log("Scale: "+e.describe(e.copyOwn(i))),this}},options:{OriginIsZero:{
value:!0}}})),e.type("pvc.BasePanel",X.Abstract).add(X.visual.Interactive).init(function(t,i,a){
if(this.chart=t,this.base(),this.axes=Object.create(t.axes),a){a.scenes&&(this._sceneTypeExtensions=a.scenes,
delete a.scenes);var r=a.axes;r&&(e.copy(this.axes,r),delete a.axes)}n.extend(this,a),
this.axes.color||(this.axes.color=t.axes.color),this.position={};var s=a&&a.margins;
i||void 0!==s||(s=3),this.margins=new ae(s),this.paddings=new ae(a&&a.paddings),this.size=new re(a&&a.size),
this.sizeMin=new re(a&&a.sizeMin),this.sizeMax=new re(a&&a.sizeMax),this.parent=i||null,
i?(this.isTopRoot=!1,this.isRoot=i.chart!==t,this.root=this.isRoot?this:i.root,this.topRoot=i.topRoot,
this.isRoot&&(this.position.left=t.left,this.position.top=t.top),i._addChild(this)):(this.root=this,
this.topRoot=this,this.isRoot=!0,this.isTopRoot=!0);var o=i||t;if(this.data=o.data,
this.isRoot)this.anchor=null,this.align=null,this.alignTo=null,this.offset=null;else{
this.align=X.parseAlign(this.anchor,this.align);var l=this.alignTo,u=this.anchor;null==l||""===l||"left"!==u&&"right"!==u?l=this.align:"page-middle"!==l&&(l=isNaN(+l.charAt(0))?X.parseAlign(u,l):ne.parse(l)),
this.alignTo=l,this.offset=new ie(this.offset)}if(null==this.borderWidth){var c,h=this._getExtensionId();
if(h){var d=this._getExtension(h,"strokeStyle");null!=d&&(c=+this._getConstantExtension(h,"lineWidth"),
(isNaN(c)||!isFinite(c))&&(c=null))}this.borderWidth=null==c?0:1.5}var f=o.ibits(),v=X.visual.Interactive,p=t.ibits();
f=e.bit.set(f,v.Clickable,p&v.Clickable&&!!this.clickAction),f=e.bit.set(f,v.DoubleClickable,p&v.DoubleClickable&&!!this.doubleClickAction),
f=e.bit.set(f,v.Animatable,p&v.Animatable),this._ibits&=f}).add({_ibits:~X.visual.Interactive.Animatable,
chart:null,parent:null,_children:null,type:t.Panel,_extensionPrefix:"",_rubberSelectableMarks:null,
height:null,width:null,borderWidth:null,anchor:"top",pvPanel:null,margins:null,paddings:null,
isRoot:!1,isTopRoot:!1,root:null,topRoot:null,_layoutInfo:null,_signs:null,data:null,
dataPartValue:null,_animating:0,_selectingByRubberband:!1,_v1DimRoleName:{series:"series",
category:"category",value:"value"},_sceneTypeExtensions:null,clickAction:null,doubleClickAction:null,
compatVersion:function(e){return this.chart.compatVersion(e)},getCompatFlag:function(e){
return this.chart.getCompatFlag(e)},_createLogId:function(){return""+e.qualNameOf(this.constructor)+this.chart._createLogChildSuffix();
},_getLegendRootScene:function(){return this.chart._getLegendRootScene()},_addChild:function(t){
t.parent===this||e.assert("Child has a != parent."),(this._children||(this._children=[])).push(t);
},_addSign:function(t){e.array.lazy(this,"_signs").push(t),t.selectableByRubberband()&&e.array.lazy(this,"_rubberSelectableMarks").push(t.pvMark);
},visibleData:function(e){return this.chart.visibleData(this.dataPartValue,e)},partData:function(){
return this.chart.partData(this.dataPartValue)},layout:function(i){function n(e){
var i=P[e]-w[e];if(i>t.epsilon){M[e]=i;var n=this.margins.getDirectionPercentage(e)+this.paddings.getDirectionPercentage(e);
n=Math.max(0,Math.min(1,n)),n>0&&(i/=1-n),y[e]=i,D[e]+=i}else 0>i&&(D[e]=P[e]+k.spacings[e]);
}var a=e.debug>=10,r=this._layoutInfo||null;if(r){if(!e.get(i,"force",!1))return;r.previous=null;
}var s=e.get(i,"canChange",!0),o=e.get(i,"sizeAvailable"),l=e.get(i,"sizeRef")||o&&re.clone(o),u=this.chart.parent?{
width:0,height:0}:this.sizeMin.resolve(null),c=this.sizeMax.resolve(l),h=e.get(i,"size")||this.size.resolve(l);
if(re.applyMin(c,u),re.applyMinMax(h,u,c),!o){if(null==h.width||null==h.height)throw e.error.operationInvalid("Panel layout without width or height set.");
o=re.clone(h),l||(l=re.clone(o))}var d=this.borderWidth/2,f=e.get(i,"margins"),v=e.get(i,"paddings"),p=f?ae.updateSize(f):ae.inflate(this.margins.resolve(l),d),g=v?ae.updateSize(v):ae.inflate(this.paddings.resolve(l),d),m=p.width+g.width,b=p.height+g.height,x=re.clone(o);
re.applyMinMax(o,u,c);var y={width:Math.max(0,o.width-x.width),height:Math.max(0,o.height-x.height)
},_=re.deflate(o,m,b),S=re.deflate(h,m,b),w=re.clone(_);a&&(o.width-x.width||o.height-x.height?(this.log("Size          -> "+e.describe(x)),
this.log("Size (min/max)-> "+e.describe(o))):this.log("Size          -> "+e.describe(o)),
(p.width||p.height)&&this.log(" Margins      -> "+e.describe(p)),(g.width||g.height)&&this.log("  Paddings    -> "+e.describe(g)),
this.log("   ClientSize -> "+e.describe(_)));var C={canChange:s,sizeMin:u,sizeMax:c,
size:h,clientSizeMin:re.deflate(u,m,b),clientSizeMax:re.deflate(c,m,b),clientSize:S
},k=this._layoutInfo={sizeRef:l,referenceSize:l,desiredClientSize:S,borderWidth:this.borderWidth,
margins:p,paddings:g,spacings:{width:m,height:b},size:o,clientSize:_,clientSizePage:r?r.clientSizePage:re.clone(_),
previous:r,restrictions:C,sizeIncrease:null,clientSizeIncrease:null},P=this._calcLayout(k)||_;
if(this.isVisible=P.width>0&&P.height>0,this.isVisible){k.clientSize=re.applyMinMax(P,C.clientSizeMin,C.clientSizeMax);
var M={width:0,height:0},D=k.size;if(n.call(this,"width"),n.call(this,"height"),(M.width||M.height)&&(k.clientSizeIncrease=M),
(y.width||y.height)&&(k.sizeIncrease=y),k.sizeIncrease&&(!f||!v)){var R=re.clone(l);
y.width&&(R.width+=y.width),y.height&&(R.height+=y.height),f||(p=ae.inflate(this.margins.resolve(R),d)),
v||(g=ae.inflate(this.paddings.resolve(R),d)),k.margins=p,k.paddings=g,k.spacings.width=p.width+g.width,
k.spacings.height=p.height+g.height}}else k.size={width:0,height:0};k.desiredClientSize=k.restrictions=k.previous=null,
this.width=this.isVisible?D.width:0,this.height=this.isVisible?D.height:0,a&&(this.log("   ClientSize <- "+e.describe(k.clientSize)),
k.clientSizeIncrease&&this.log("             (+) "+e.describe(k.clientSizeIncrease)),
(g.width||g.height)&&this.log("  Paddings    <- "+e.describe(k.paddings)),(p.width||p.height)&&this.log(" Margins      <- "+e.describe(k.margins)),
this.log("Size          <- "+e.describe(k.size)),k.sizeIncrease&&this.log("             (+) "+e.describe(k.sizeIncrease))),
this._onLaidOut()},_onLaidOut:function(){this.isRoot&&this.chart._onLaidOut()},_getLayoutState:function(){
var e=this._layoutInfo,t=this.anchor;return"fill"===t&&(t=null),{size:t?re.toOrtho(e.size,t).resolve():e.size,
margins:e.margins,paddings:e.paddings}},getLayout:function(){return this._layoutInfo||null;
},_calcLayout:function(t){function i(e,t,i){for(var n=e,a=0;n--;){if(t.call(i,n,a,e)===!1)return!0;
a++}return!1}function n(t,i,n){d&&f.log.group("Iteration #"+(i+1)+" / "+n);try{c=new ae(0),
h=e.copyOwn(u);for(var r,s=t>0,o=0,l=x.length;l>o;){r=x[o],d&&r.log.group("Layout SIDE child");
try{if(a.call(this,r,s))return!0}finally{d&&r.log.groupEnd()}o++}for(o=0,l=b.length;l>o;){
r=b[o],d&&r.log.group("Layout FILL child");try{if(a.call(this,r,s))return!0}finally{
d&&r.log.groupEnd()}o++}return!1}finally{d&&f.log.groupEnd()}}function a(t,n){var a,u=!1;
return i(6,function(i,c,f){d&&t.log.group("Iteration #"+(c+1)+" / "+f);try{if(y.sizeAvailable=new re(h),
y.paddings=a,y.canChange=n&&i>0,t.layout(y),t.isVisible){if(u=s.call(this,t,n))return!1;
var v=t._layoutInfo.contentOverflow;if(r(a,v)){if(a=v,i>0)return a=new ae(a),d&&t.log("Child changed content overflow: "+e.describe(a)),
!0;d&&t.log.warn("Child content overflow changed, but iterations limit has been reached.");
}o.call(this,t),"fill"!==t.anchor&&l.call(this,t)}return!1}finally{d&&t.log.groupEnd();
}},this),u}function r(t,i){return i?e.query(ae.names).each(function(e){var n=t&&t[e]||0,a=i&&i[e]||0;
return Math.abs(a-n)>=X.roundPixel.epsilon?!1:void 0}):!1}function s(e,t){function i(i){
var r=a[i];r>X.roundPixel.epsilon&&(t?(n=!0,h[i]+=r,u[i]+=r):d&&e.log.warn("Child wanted more "+i+", but layout iterations limit has been reached."));
}var n=!1,a=e.getLayout().sizeIncrease;return a&&("fill"===e.anchor?re.names.forEach(i):i(e.anchorLength())),
n}function o(i){var n,a=i.anchor,r=i.align,s=i.alignTo;"fill"===a?(a="left",n=c.left+h.width/2-i.width/2,
r=s="middle"):n=c[a];var o,l;switch(r){case"top":case"bottom":case"left":case"right":
o=r,l=0;break;case"center":case"middle":o=g[p[a]],l=-i[v[o]]/2}var u,d;switch(s){
case"top":case"bottom":case"left":case"right":d=s,u=d!==o?h[v[o]]:0;break;case"center":
case"middle":d=g[p[a]],u=h[v[o]]/2;break;case"page-center":case"page-middle":d=g[p[a]];
var f=v[o],b=Math.min(h[f],t.clientSizePage[f]);u=b/2}var x=c[d]+u+l,y=i.offset.resolve(h);
y&&(n+=y[m[a]]||0,x+=y[m[o]]||0),i.keepInBounds&&(0>n&&(n=0),0>x&&(x=0)),i.setPosition(e.set({},a,n,o,x));
}function l(e){var t=e.anchor,i=v[t],n=e[i];c[t]+=n,h[i]-=n}var u,c,h,d,f=this;if(f._children){
var v=X.BasePanel.orthogonalLength,p=X.BasePanel.relativeAnchor,g=X.BasePanel.leftTopAnchor,m=ie.namesSidesToOffset,b=[],x=[];
f._children.forEach(function(t){var i=t.anchor;i&&("fill"===i?b.push(t):(e.hasOwn(p,i)||e.fail.operationInvalid("Unknown anchor value '{0}'",[i]),
x.push(t)))}),d=e.debug>=10,u=e.copyOwn(t.clientSize);var y={force:!0,sizeRef:u};d&&f.log.group("CCC DOCK LAYOUT");
try{i(5,n,f)}finally{d&&f.log.groupEnd()}}return u},invalidateLayout:function(){this._layoutInfo=null,
this._children&&this._children.forEach(function(e){e.invalidateLayout()})},_create:function(i){
if(!this.pvPanel||i){if(this.pvPanel=null,this.pvRootPanel&&(this.pvRootPanel=null),
delete this._signs,this.isRoot&&this.layout(),this.isTopRoot&&this.chart._isMultiChartOverflowClip)return;
if(!this.isVisible)return;this.isRoot&&this._creating();var n=this._layoutInfo.margins,a=this._layoutInfo.paddings;
if(this.isTopRoot){this.pvRootPanel=this.pvPanel=(new t.Panel).canvas(this.chart.options.canvas);
var r=new X.visual.Scene(null,{panel:this});this.pvRootPanel.lock("data",[r]),(n.width>0||n.height>0)&&(this.pvPanel.width(this.width).height(this.height),
this.pvPanel=this.pvPanel.add(t.Panel))}else this.pvPanel=this.parent.pvPanel.add(this.type);
this.pvPanel.isPointingBarrier=!0;var s=this.pvPanel,o=this.width-n.width,l=this.height-n.height;
s.width(o).height(l),e.debug>=15&&(n.width>0||n.height>0)&&(this.isTopRoot?this.pvRootPanel:this.parent.pvPanel).add(this.type).width(this.width).height(this.height).left(null!=this.position.left?this.position.left:null).right(null!=this.position.right?this.position.right:null).top(null!=this.position.top?this.position.top:null).bottom(null!=this.position.bottom?this.position.bottom:null).strokeStyle("orange").lineWidth(1).strokeDasharray("- .");
var u={};e.eachOwn(this.position,function(e,t){s[t](e+n[t]),u[this.anchorLength(t)]=!0;
},this),u.width||(n.left>0&&s.left(n.left),n.right>0&&s.right(n.right)),u.height||(n.top>0&&s.top(n.top),
n.bottom>0&&s.bottom(n.bottom)),(a.width>0||a.height>0)&&(this.pvPanel=s.add(t.Panel).width(o-a.width).height(l-a.height).left(a.left).top(a.top)),
s.borderPanel=s,s.paddingPanel=this.pvPanel,this.pvPanel.paddingPanel=this.pvPanel,
this.pvPanel.borderPanel=s,e.debug>=15&&(this.pvPanel.strokeStyle("lightgreen").lineWidth(1).strokeDasharray("- "),
this.pvPanel!==s&&s.strokeStyle("blue").lineWidth(1).strokeDasharray(". "));var c=this._getExtensionId();
if(new X.visual.Panel(this,null,{panel:s,extensionId:c}),this._createCore(this._layoutInfo),
this.isTopRoot&&(this.chart._multiChartOverflowClipped&&this._addMultichartOverflowClipMarker(),
this._initSelection(),this.interactive()&&"near"===this.chart._pointingOptions.mode&&this._requirePointEvent()),
this.applyExtensions(),this.isRoot&&e.debug>5){var h=["SCALES SUMMARY",e.logSeparator];
this.chart.axesList.forEach(function(t){var i=t.scale;if(i){var n=i.domain&&i.domain(),a=i.range&&i.range();
h.push(t.id),h.push("    domain: "+(n?e.describe(n):"?")),h.push("    range : "+(a?e.describe(a):"?"));
}},this),this.log(h.join("\n"))}}},_creating:function(){this._children&&this._children.forEach(function(e){
e._creating()})},_createCore:function(){this._children&&this._children.forEach(function(e){
e._create()})},render:function(t){if(!this.isTopRoot)return this.topRoot.render(t);
if(this._create(e.get(t,"recreate",!1)),(!this.isTopRoot||!this.chart._isMultiChartOverflowClip)&&this.isVisible){
var i=this.pvRootPanel;this._onRender();var n=this._animating,a=this.animatable();
this._animating=a&&!e.get(t,"bypassAnimation",!1)?1:0;try{if(i.render(),this._animating){
this._animating=2;var r=this;i.transition().duration(2e3).ease("cubic-in-out").start(function(){
n?n=0:(r._animating=0,r._onRenderEnd(!0))})}else this._onRenderEnd(!1)}finally{this._animating=0;
}}},_onRender:function(){var e=this.chart.options.renderCallback;if(e)if(this.compatVersion()<=1)e.call(this.chart);else{
var t=this.context();e.call(t,t.scene)}},_onRenderEnd:function(e){if(this._children&&this._children.forEach(function(t){
t._onRenderEnd(e)}),this.isTopRoot){var t=this.chart.options.renderedCallback;if(t){
var i=this.context();t.call(i,i.scene)}}},renderInteractive:function(){if(this.isVisible){
var e=this._getSelectableMarks();if(e&&e.length)e.forEach(function(e){e.render()});else if(!this._children)return void this.pvPanel.render();
this._children&&this._children.forEach(function(e){e.renderInteractive()})}},_getSelectableMarks:function(){
return this._rubberSelectableMarks},animatable:function(){return this.base()||!!this._children&&this._children.some(function(e){
return e.animatable()})},animate:function(e,t){return 1===this.topRoot._animating?e:t;
},animatingStart:function(){return 1===this.topRoot._animating},animating:function(){
return this.topRoot._animating>0},setPosition:function(t){for(var i in t)if(e.hasOwn(ae.namesSet,i)){
var n=t[i];null===n?delete this.position[i]:(n=+n,!isNaN(n)&&isFinite(n)&&(this.position[i]=n));
}},createAnchoredSize:function(e,t){return this.isAnchorTopOrBottom()?{width:t.width,
height:Math.min(t.height,e)}:{width:Math.min(t.width,e),height:t.height}},applyExtensions:function(){
this._signs&&this._signs.forEach(function(e){e.applyExtensions()})},extend:function(e,t,i){
this.chart.extend(e,this._makeExtensionAbsId(t),i)},extendAbs:function(e,t,i){this.chart.extend(e,t,i);
},_extendSceneType:function(t,i,n){var a=e.get(this._sceneTypeExtensions,t);a&&X.extendType(i,a,n);
},_absBaseExtId:{abs:"base"},_absSmallBaseExtId:{abs:"smallBase"},_getExtensionId:function(){
return this.isRoot?this.chart.parent?this._absSmallBaseExtId:this._absBaseExtId:void 0;
},_getExtensionPrefix:function(){return this._extensionPrefix},_makeExtensionAbsId:function(e){
return X.makeExtensionAbsId(e,this._getExtensionPrefix())},_getExtension:function(e,t){
return this.chart._getExtension(this._makeExtensionAbsId(e),t)},_getExtensionAbs:function(e,t){
return this.chart._getExtension(e,t)},_getConstantExtension:function(e,t){return this.chart._getConstantExtension(this._makeExtensionAbsId(e),t);
},getPvPanel:function(i){var n=this.pvPanel;if(!i)return n;if(!this.parent)throw e.error.operationInvalid("Layers are not possible in a root panel.");
if(!n)throw e.error.operationInvalid("Cannot access layer panels without having created the main panel.");
var a=null;if(this._layers?a=this._layers[i]:this._layers={},!a){var r=this.parent.pvPanel;
a=r.borderPanel.add(this.type).extend(n.borderPanel);var s=a;n!==n.borderPanel&&(a=s.add(t.Panel).extend(n)),
s.borderPanel=s,s.paddingPanel=a,a.paddingPanel=a,a.borderPanel=s,this.initLayerPanel(a,i),
this._layers[i]=a}return a},initLayerPanel:function(){},_getV1DimName:function(e){
var t=this._v1DimName||(this._v1DimNameCache={}),i=t[e];if(null==i){var n=this.visualRoles[this._v1DimRoleName[e]];
i=n?n.lastDimensionName():"",t[e]=i}return i},_getV1Datum:function(e){return e.datum;
},context:function(){var e=this._context;return!e||e.isPinned?e=this._context=new X.visual.Context(this):v.call(e),
e},visualRolesOf:function(e,t){return t?this.chart.visualRolesOf(e):null},_isTooltipEnabled:function(){
return!this.selectingByRubberband()&&!this.animating()},_getTooltipFormatter:function(e){
var t=this.compatVersion()<=1,i=e.format;if(!i){if(!t)return this._summaryTooltipFormatter.bind(this);
if(i=this.chart.options.v1StyleTooltipFormat,!i)return}return t?function(e){return i.call(e.panel,e.getV1Series(),e.getV1Category(),e.getV1Value()||"",e.getV1Datum());
}:function(e){return i.call(e,e.scene)}},CSS_TT_CLASS:"ccc-tt",_summaryTooltipFormatter:function(t){
function i(){var e=[];return h.isTrend&&e.push(S("tr",{"class":w("trendLabel","trend-"+x(h.trend.type))
},S("td",{colspan:3},S("span",null,y(h.trend.label))))),A&&(e.push.apply(e,n()),p&&L&&e.push(S("tr",{
"class":w("dimSep")},'<td colspan="3"><hr/></td>'))),e.push.apply(e,a()),L&&e.push(S("tr",{
"class":w("datumCount")},'<td colspan="3"><span>'+D.length+"</span></td>")),e}function n(){
var t=k.atoms;return M.sortDimensionNames(e.keys(t)).map(function(e){var i,n,a=t[e];
return null==(i=a.value)||((p||(p={}))[e]=!0,n=a.dimension.type,n.isHidden)?"":s(n,i,a.label);
})}function a(){return M.dimensionsList().map(r)}function r(t){var i=t.name;if(t.isHidden||e.getOwn(p,i))return"";
var n,a,r,g,m,x,y;return I?(x=h.atoms[i],a=x.value,r=x.label,t.valueType===Number&&null!=a&&(m=l.bind(null,x)),
y=h.isInterpolated&&h.interpDimName===i?h.interpolation:null):(v||(v=c.allGroup()),
n=v.dimensions(i),t.valueType===Number?(L&&(g="sum"),a=n.value(b),r=n.format(a),m=null!=a?o.bind(null,n):null,
null==f&&(f=C.interpolatable()),f&&(y=d(u).where(function(e){return e.isInterpolated&&e.interpDimName===i;
}).select(function(e){return e.interpolation}).first())):(L&&(g="list"),a=r=n.atoms(b).filter(function(e){
return null!=e.value}).map(function(e){return e.label||"- "}).join(", "),a||(a=null))),
s(t,a,r,g,m,y)}function s(t,i,n,a,r,s){var o=w("dim","dimValueType-"+t.valueTypeName,"dim"+(t.isDiscrete?"Discrete":"Continuous"),a?"dimAgg":"",a?"dimAgg-"+a:""),l=!1,u=g.visualRolesOf(t.name,!0),c=u?u.map(function(e){
return r&&(l|=e.isPercent),S("span",{"class":w("role","role-"+e.name)},S("span",{
"class":w("roleIcon")},""),S("span",{"class":w("roleLabel")},y(e.label)))}):"";return S("tr",{
"class":o},S("td",{"class":w("dimLabel")},S("span",null,y(t.label))),S("td",{"class":w("dimRoles")
},c),S("td",{"class":w("dimValue",null==i?"valueNull":"")},S("span",{"class":w("value")
},y(n)),l?" "+S("span",{"class":w("valuePct")},function(){var e=r(),i=t.format().percent();
return y(i(e))}):"",s?" "+S("span",{"class":w("interp","interp-"+x(s))},y(e.firstUpperCase(s)+" interp.")):""));
}function o(e){return e.valuePercent(b)}function l(e){var t=e.dimension.name;return A?o(k.dimensions(t)):P.dimensions(t).percent(e.value,b);
}var u,c=t.scene,h=c.datum,d=e.query;if(!h)return"";if(u=c.datums().array(),d(u).all(function(e){
return e.isNull}))return"";var f,v,p,g=this,m=this.CSS_TT_CLASS,b={visible:!0},x=e.css.escapeClass,y=e.html.escape,_=e.html.classes,S=e.html.tag,w=_.bind(null,m),C=t.chart,k=c.group,P=c.data(),M=P.type,D=d(u).where(function(e){
return!e.isVirtual}).array(),R=t.sign.defaultColor(c),A=!!k&&1===c.groups.length,I=1===u.length,L=D.length>1;
return S("div",{"class":m},function(){var t=e.array.appendMany(["ds"],g._getTooltipPanelClasses(),"chartOrient-"+(C.isOrientationVertical()?"v":"h"));
return S("table",{"class":w.apply(null,t),"data-ccc-color":R&&"none"!==R.color?R.color:""
},S("tBody",null,i))})},_getTooltipPanelClasses:function(){},_requirePointEvent:function(){
return this.isTopRoot?void(this._attachedPointEvent||(this.pvPanel.root.events("all").event("mousemove",t.Behavior.point(this.chart._pointingOptions)),
this._attachedPointEvent=!0)):this.topRoot._requirePointEvent()},_requireTipsy:function(){
if(!this.isTopRoot)return this.topRoot._requireTipsy();if(!this._tipsy){var i=this.chart,n=e.create(i._tooltipOptions);
n.isEnabled=this._isTooltipEnabled.bind(this),"near"===i._pointingOptions.mode&&(n.usesPoint=!0),
this._tipsy=t.Behavior.tipsy(n)}return this._tipsy},_onClick:function(e){var t=this.clickAction;
t&&(this.compatVersion()<=1?this._onV1Click(e,t):t.call(e,e.scene))},_onDoubleClick:function(e){
var t=this.doubleClickAction;t&&(this.compatVersion()<=1?this._onV1DoubleClick(e,t):t.call(e,e.scene));
},_onV1Click:function(e,t){t.call(e.pvMark,e.getV1Series(),e.getV1Category(),e.getV1Value(),e.event,e.getV1Datum());
},_onV1DoubleClick:function(e,t){t.call(e.pvMark,e.getV1Series(),e.getV1Category(),e.getV1Value(),e.event,e.getV1Datum());
},_addMultichartOverflowClipMarker:function(){function t(e){var t=e.shapeRadius();
if(null==t){var i=e.shapeSize();null!=i&&(t=Math.sqrt(i))}return t||n}var i=10,n=5,a=new X.visual.Dot(this,this.pvPanel,{
noSelect:!0,noHover:!0,noClick:!0,noDoubleClick:!0,noTooltip:!1,freePosition:!0,extensionId:"multiChartOverflowMarker"
}).lock("data").pvMark.shape("triangle").shapeRadius(n).top(null).left(null).bottom(function(){
return t(this)+i}).right(function(){return t(this)+i}).shapeAngle(0).lineWidth(1.5).strokeStyle("red").fillStyle("rgba(255, 0, 0, 0.2)");
e.fun.is(a.tooltip)&&a.tooltip("Some charts did not fit the available space.")},selectingByRubberband:function(){
return this.topRoot._selectingByRubberband},_initSelection:function(){var i=this,n=i.chart;
if(i.interactive()){var a=i.unselectable(),r=i.selectableByRubberband();if(r||a){
var s=i.data,o=i.pvRootPanel||i.pvPanel.paddingPanel;if(i._getExtensionAbs("base","fillStyle")||o.fillStyle(X.invisibleFill),
o.lock("events","all"),r){var l=4;i._selectingByRubberband=!1;var u,c,h,d=this.selectBar=new X.visual.Bar(i,o,{
extensionId:"rubberBand",normalStroke:!0,noHover:!0,noSelect:!0,noClick:!0,noDoubleClick:!0,
noTooltip:!0}).override("defaultStrokeWidth",e.fun.constant(1.5)).override("defaultColor",function(e,t){
return"stroke"===t?"#86fe00":"rgba(203, 239, 163, 0.6)"}).override("interactiveColor",function(e,t){
return t}).pvMark.lock("visible",function(){return!!c}).lock("left",function(){return c.x;
}).lock("right").lock("top",function(){return c.y}).lock("bottom").lock("width",function(){
return c.dx}).lock("height",function(){return c.dy}).lock("cursor").lock("events","none");
o.intercept("data",function(){var e=this.delegate();return e&&e.forEach(function(e){
null==e.x&&(e.x=e.y=e.dx=e.dy=0)}),e}).event("mousedown",t.Behavior.select().autoRender(!1)).event("select",function(e){
if(c)c=new t.Shape.Rect(e.x,e.y,e.dx,e.dy);else{if(i.animating())return;if(e.dx*e.dx+e.dy*e.dy<=l)return;
c=new t.Shape.Rect(e.x,e.y,e.dx,e.dy),i._selectingByRubberband=!0,u||(u=o.toScreenTransform()),
i.rubberBand=c.apply(u)}d.render()}).event("selectend",function(){if(c){var e=arguments[arguments.length-1];
u||(u=o.toScreenTransform());var t=c.apply(u);c=null,i._selectingByRubberband=!1,
d.render();try{i._processRubberBand(t,e)}finally{h=new Date}}}),a&&o.event("click",function(){
if(h){var e=new Date-h;if(300>e)return void(h=null)}s.clearSelected()&&n.updateSelections();
})}else a&&o.event("click",function(){s.clearSelected()&&n.updateSelections()})}}
},_processRubberBand:function(e,t,i){this.rubberBand=e;try{this._onRubberBandSelectionEnd(t,i);
}finally{this.rubberBand=null}},_onRubberBandSelectionEnd:function(t,n){e.debug>=20&&this.log("rubberBand "+e.describe(this.rubberBand)),
n=Object.create(n||{}),n.toggle=!1;var a=this._getDatumsOnRubberBand(t,n);if(a&&a.length){
var r=this.chart;r._updatingSelections(function(){if(a=r._onUserSelection(a),a&&a.length){
var e=!(t.ctrlKey||t.metaKey)&&r.options.ctrlSelectMode;e?(r.data.owner.clearSelected(),
i.Data.setSelected(a,!0)):n.toggle?i.Data.toggleSelected(a):i.Data.setSelected(a,!0);
}})}},_getDatumsOnRubberBand:function(t,i){var n=new e.Map;return this._getDatumsOnRect(n,this.rubberBand,i),
n.values()},_getDatumsOnRect:function(e,t,i){this._getOwnDatumsOnRect(e,t,i);var n=this._children;
n&&n.forEach(function(n){n._getDatumsOnRect(e,t,i)})},_getOwnDatumsOnRect:function(t,i,n){
var a=this;if(!a.isVisible)return!1;var r=a._getSelectableMarks();if(!r||!r.length)return!1;
var s=t.count,o=e.get(n,"markSelectionMode"),l=function(e){e.isNull||t.set(e.id,e);
},u=function(e){e.selectableByRubberband()&&e.datums().each(l)},c=function(e){e.eachSceneWithDataOnRect(i,u,null,o);
};return r.forEach(c),s<t.count},isAnchorTopOrBottom:function(e){return e||(e=this.anchor),
"top"===e||"bottom"===e},isOrientationVertical:function(e){return this.chart.isOrientationVertical(e);
},isOrientationHorizontal:function(e){return this.chart.isOrientationHorizontal(e);
}}).type().add({relativeAnchor:{top:"left",bottom:"left",left:"bottom",right:"bottom"
},leftBottomAnchor:{top:"bottom",bottom:"bottom",left:"left",right:"left"},leftTopAnchor:{
top:"top",bottom:"top",left:"left",right:"left"},horizontalAlign:{top:"right",bottom:"left",
middle:"center",right:"right",left:"left",center:"center"},verticalAlign:{top:"top",
bottom:"bottom",middle:"middle",right:"bottom",left:"top",center:"middle"},verticalAlign2:{
top:"top",bottom:"bottom",middle:"middle",right:"top",left:"bottom",center:"middle"
},relativeAnchorMirror:{top:"right",bottom:"right",left:"top",right:"top"},oppositeAnchor:{
top:"bottom",bottom:"top",left:"right",right:"left"},parallelLength:{top:"width",
bottom:"width",right:"height",left:"height"},orthogonalLength:{top:"height",bottom:"height",
right:"width",left:"width"},oppositeLength:{width:"height",height:"width"}}),e.scope(function(){
var t=X.BasePanel,i={},n={anchorOrtho:"relativeAnchor",anchorOrthoMirror:"relativeAnchorMirror",
anchorOpposite:"oppositeAnchor",anchorLength:"parallelLength",anchorOrthoLength:"orthogonalLength"
};e.eachOwn(n,function(e,n){var a=t[e];i[n]=function(e){return a[e||this.anchor]};
}),t.add(i)}),e.type("pvc.ContentPanel",X.BasePanel).add({anchor:"fill",_getExtensionId:function(){
return[{abs:this.chart.parent?"smallContent":"content"}]}});var ve={};e("pvc.visual.Plot",X.visual.OptionsBase.extend({
init:function(t,i){var n=e.getPath(t,["plotsByType",this.type]),a=n?n.length:0,r=t.plotList.length,s=!r,o=e.get(i,"isInternal",!0);
if(i=e.setDefaults(i,"byNaked",s,"byName",o,"byV1",o),o||(i.optionId=X.uniqueExtensionAbsPrefix()),
this.base(t,this.type,a,i),this.name&&("$"===this.name||this.name.indexOf(".")>=0))throw e.error.argumentInvalid("name",e.format("Invalid plot name '{0}'.",[this.name]));
this.prettyId=this.name||this.id,this.isInternal=!!o,this.isMain=s;var l=this.extensionPrefixes=[this.optionId];
o&&(s&&l.push(""),this.name&&l.push(this.name)),this.visualRoles={},this.visualRoleList=[],
this.dataCellList=[],this.dataCellsByRole={};var u=e.get(i,"spec");u&&this.processSpec(u);
},methods:{_buildOptionId:function(t){return e.get(t,"optionId",this.id)},processSpec:function(t){
var i=this,n=i.chart.options,a=(i.isInternal?i.name:null)||i.optionId;i.chart._processExtensionPointsIn(t,a,function(t,a,r){
switch(r){case"name":case"type":break;case"visualRoles":i._visualRolesOptions=t,e.object.is(t)&&e.each(t,function(t){
e.object.is(t)&&t.from&&(t.from=i.ensureAbsRoleRef(t.from))});break;default:n[a]=t;
}})},ensureAbsRoleRef:function(e){return e&&e.indexOf(".")<0?this.prettyId+"."+e:e;
},_getColorRoleSpec:e.fun.constant(null),_addVisualRole:function(t,i){var n=this.visualRoleList;
i=e.set(i,"index",n.length,"plot",this);var a=new X.visual.Role(t,i);return this.visualRoles[t]=a,
n.push(a),a},_addDataCell:function(t){this.dataCellList.push(t),e.array.lazy(this.dataCellsByRole,t.role.name).push(t);
},interpolatable:function(){return!1},visualRole:function(t){return e.getOwn(this.visualRoles,t);
},initEnd:function(){this._initVisualRoles(),this._initDataCells()},_initVisualRoles:function(){
var e=this._getColorRoleSpec();e&&this._addVisualRole("color",e)},_initDataCells:function(){
if(this.visualRoles.color){var e=this._getColorDataCell();e&&this._addDataCell(e);
}},createVisibleData:function(e,t){var i=this.visualRoles.series;return i&&i.isBound()?i.flatten(e,t):e.where(null,t);
},interpolateDataCell:function(){},generateTrendsDataCell:function(){},getContinuousVisibleCellExtent:function(t,i,n){
if(n.plot!==this)throw e.error.operationInvalid("Datacell not of this plot.");var a=n.role;
if(t._warnSingleContinuousValueRole(a),"series"===a.name)throw e.error.notImplemented();
var r=i.scaleSumNormalized(),s=t.visiblePlotData(this,n.dataPartValue),o=a.lastDimensionName();
if(r){var l=s.dimensionsSumAbs(o);if(l)return{min:0,max:l}}else{var u=i.scaleUsesAbs(),c=s.dimensions(o).extent({
abs:u});if(c){var h=c.min.value,d=c.max.value;return{min:u?Math.abs(h):h,max:u?Math.abs(d):d
}}}},_getColorDataCell:function(){var e=this.visualRoles.color;return e?new X.visual.ColorDataCell(this,"color",this.option("ColorAxis")-1,e,this.option("DataPart")):void 0;
}},options:{Orientation:{resolve:function(e){return e.specify(this._chartOption("orientation")||"vertical"),
!0},cast:String},ValuesVisible:{resolve:"_resolveFull",data:{resolveV1:function(e){
if(0===this.globalIndex){var t=this._chartOption("showValues");return void 0!==t?e.specify(t):(t="point"!==this.type,
e.defaultValue(t)),!0}}},cast:Boolean,value:!1},ValuesAnchor:{resolve:"_resolveFull",
cast:X.parseAnchor},ValuesFont:{resolve:"_resolveFull",cast:String,value:"10px sans-serif"
},ValuesMask:{resolve:"_resolveFull",cast:String,value:"{value}"},ValuesOptimizeLegibility:{
resolve:"_resolveFull",cast:Boolean,value:!1},ValuesOverflow:{resolve:"_resolveFull",
cast:X.parseValuesOverflow,value:"hide"},DataPart:{resolve:"_resolveFull",cast:String,
value:"0"},ColorAxis:{resolve:X.options.resolvers([function(e){return 0===this.globalIndex?(e.specify(1),
!0):void 0},"_resolveFull"]),cast:function(t){return t=e.number.to(t),null!=t?e.between(t,1,10):1;
},value:1}},"type.methods":{registerClass:function(e){ve[e.prototype.type]=e},getClass:function(t){
return e.getOwn(ve,t)}}}));var pe={};e.type("pvc.PlotPanel",X.BasePanel).init(function(e,t,i,n){
null==n.sizeMin&&(n.sizeMin=this._getOptionSizeMin(e)),null==n.paddings&&(n.paddings=e._axisOffsetPct),
this.base(e,t,n),this.plot=i,this._extensionPrefix=i.extensionPrefixes,this.dataPartValue=i.option("DataPart"),
this.axes.color=e._getAxis("color",(i.option("ColorAxis")||0)-1),this.orientation=i.option("Orientation"),
this.valuesVisible=i.option("ValuesVisible"),this.valuesAnchor=i.option("ValuesAnchor"),
this.valuesMask=i.option("ValuesMask"),this.valuesFont=i.option("ValuesFont"),this.valuesOverflow=i.option("ValuesOverflow"),
this.valuesOptimizeLegibility=i.option("ValuesOptimizeLegibility"),this.visualRoles=i.visualRoles,
this.visualRoleList=i.visualRoleList}).add({anchor:"fill",visualRoles:null,visibleData:function(e){
return this.chart.visiblePlotData(this.plot,this.dataPartValue,e)},_getExtensionId:function(){
return["chart","plot"]},_getOptionSizeMin:function(e){var t=e.parent?null:e.options.plotSizeMin;
return null!=t?re.to(t):null},visualRolesOf:function(t,i){var n=this._visRolesByDim;
n||(n=this._visRolesByDim={},this.visualRoleList.forEach(function(t){var i=t.grouping;
i&&i.dimensionNames().forEach(function(i){e.array.lazy(n,i).push(t)})}));var a=e.getOwn(n,t,null),r=i?this.chart.visualRolesOf(t):null;
return a&&r?a.concat(r):a||r},_getTooltipPanelClasses:function(){return["plot","plot-"+this.plot.type];
},isOrientationVertical:function(){return this.orientation===X.orientation.vertical;
},isOrientationHorizontal:function(){return this.orientation===X.orientation.horizontal;
}}).type().add({registerClass:function(e,t){pe[t||e.prototype.plotType]=e},getClass:function(t){
return e.getOwn(pe,t)}}),e.type("pvc.PlotBgPanel",X.BasePanel).init(function(e,t,i){
this.base(e,t,i)}).add({anchor:"fill",_getExtensionId:function(){return"plotBg"},
_createCore:function(e){this.pvPanel.borderPanel.lock("zOrder",-13).antialias(!1),
this.base(e)}}),e("pvc.visual.Legend",X.visual.OptionsBase.extend({init:function(t,i,n,a){
a=e.set(a,"byNaked",!1),this.base(t,i,n,a)},options:{Position:{resolve:"_resolveFull",
cast:X.parsePosition,value:"bottom"},Size:{resolve:"_resolveFull",cast:I},SizeMax:{
resolve:"_resolveFull",cast:I},ItemCountMax:{resolve:"_resolveFull",cast:e.number.toPositive
},Align:{resolve:"_resolveFull",data:{resolveDefault:function(e){var t,i=this.option("Position");
return"top"!==i&&"bottom"!==i?t="top":this.chart.compatVersion()<=1&&(t="left"),e.defaultValue(t),
!0}},cast:L},Margins:{resolve:"_resolveFull",data:{resolveDefault:function(t){if(this.chart.compatVersion()>1){
var i=this.option("Position"),n=e.set({},X.BasePanel.oppositeAnchor[i],5);t.defaultValue(n);
}return!0}},cast:ae.as},Paddings:{resolve:"_resolveFull",cast:ae.as,value:5},Font:{
resolve:"_resolveFull",cast:String},ItemSize:{resolve:"_resolveFull",cast:T},Overflow:{
resolve:"_resolveFull",cast:X.parseLegendOverflow,value:"clip"}}})),e.type("pvc.LegendPanel",X.BasePanel).init(function(e,t,i){
if(this.base(e,t,i),void 0===i.font){var n=this._getConstantExtension("label","font");
n&&(this.font=n)}var a=X.visual.Interactive;this._ibits&a.Interactive&&(this._ibits|=a.Clickable);
}).add({pvRule:null,pvDot:null,pvLabel:null,anchor:"bottom",pvLegendPanel:null,textMargin:6,
itemPadding:2.5,itemSize:null,markerSize:15,font:"10px sans-serif",_calcLayout:function(e){
return this._getRootScene().layout(e)},_createCore:function(i){var n=i.clientSize,a=this._getRootScene(),r=a.vars.itemPadding,s=a.vars.contentSize,o=this.isAnchorTopOrBottom(),l=o?"top":"left",u=this.anchorOpposite(l),c=this.anchorLength(l),h=this.anchorOrthoLength(l),d=o?"center":"middle",f=o?"left":"top",v=this.anchorOpposite(f),p=0;
switch(this.align){case v:p=n[c]-s[c];break;case d:p=(n[c]-s[c])/2}this.pvPanel.borderPanel.overflow("hidden");
var g,m=this.pvPanel.add(t.Panel).data(a.vars.sections)[f](p)[l](function(){var e=this.sibling();
return e?e[l]+e[h]+r[h]:0})[c](function(e){return e.size[c]})[h](function(e){return e.size[h];
});this.compatVersion()<=1&&(g=function(e){return function(t){return e.call(this,t.vars.value.rawValue);
}});var b=this.pvLegendPanel=new X.visual.Panel(this,m,{extensionId:"panel",wrapper:g,
noSelect:!1,noHover:!0,noClick:!1,noClickSelect:!0}).pvMark.lock("data",function(e){
return e.items})[v](null)[u](null)[f](function(e){for(var t,i=this.index;i>0&&!(t=this.scene[--i]).visible;);
return t&&t.visible?t[f]+t[c]+e.vars.itemPadding[c]:0})[l](o?function(e){var t=e.vars;
return t.section.size.height/2-t.itemClientSize.height/2}:0).height(function(e){return e.vars.itemClientSize.height;
}).width(o?function(e){return e.vars.itemClientSize.width}:function(){return this.parent.width();
}),x=new X.visual.Panel(this,b,{extensionId:"markerPanel"}).pvMark.left(0).top(0).right(null).bottom(null).width(function(e){
return e.vars.markerSize}).height(function(e){return e.vars.itemClientSize.height;
});e.debug>=20&&(m.strokeStyle("red").lineWidth(.5).strokeDasharray("."),b.strokeStyle("green").lineWidth(.5).strokeDasharray("."),
x.strokeStyle("blue").lineWidth(.5).strokeDasharray(".")),a.childNodes.forEach(function(e){
var t=new X.visual.Panel(this,x).pvMark.visible(function(t){return t.parent===e});
e.renderer()(this,t,g)},this),this.pvLabel=new X.visual.Label(this,x.anchor("right"),{
extensionId:"label",noTooltip:!1,noClick:!1,wrapper:g}).intercept("textStyle",function(e){
this._finished=!1;var t=this.delegateExtension()||"black";return this._finished||e.isOn()?t:X.toGrayScale(t,null,void 0,150);
}).pvMark.textAlign("left").text(function(e){var t=e.labelText(),i=e.vars;return i.textSize.width>i.labelWidthMax&&(t=X.text.trimToWidthB(i.labelWidthMax,t,i.font,"..",!1)),
t}).textMargin(function(e){return e.vars.textMargin}).font(function(e){return e.vars.font;
}).textDecoration(function(e){return e.isOn()?"":"line-through"}).cursor(function(e){
return e.executable()?"pointer":"default"}),e.debug>=16&&x.anchor("right").add(t.Panel)[this.anchorLength()](0)[this.anchorOrthoLength()](0).fillStyle(null).strokeStyle(null).lineWidth(0).add(t.Line).data(function(e){
var t=e.vars,i=X.text.getLabelBBox(Math.min(t.labelWidthMax,t.textSize.width),2*t.textSize.height/3,"left","middle",0,t.textMargin),n=i.source.points();
return n.length>1&&(n=n.concat(n[0])),n}).left(function(e){return e.x}).top(function(e){
return e.y}).strokeStyle("red").lineWidth(.5).strokeDasharray("-")},_onClick:function(t){
var i=t.scene;e.fun.is(i.execute)&&i.executable()&&i.execute()},_getExtensionPrefix:function(){
return"legend"},_getExtensionId:function(){return"area"},_getSelectableMarks:function(){
return[this.pvLegendPanel]},_getRootScene:function(){var e=this._rootScene;return e||(this._rootScene=e=new X.visual.legend.LegendRootScene(null,{
panel:this,source:this.chart.data,horizontal:this.isAnchorTopOrBottom(),font:this.font,
markerSize:this.markerSize,textMargin:this.textMargin,itemPadding:this.itemPadding,
itemSize:this.itemSize,itemCountMax:this.itemCountMax,overflow:this.overflow})),e;
},_getTooltipFormatter:function(e){return e.isLazy=!1,function(e){var t=e.scene.vars.value,i=t.absLabel||t.label,n=e.pvMark.text();
return i!==n?i:""}}}),e.type("pvc.visual.legend.LegendRootScene",X.visual.Scene).init(function(t,i){
this.base(t,i),this._unresolvedMarkerDiam=e.get(i,"markerSize"),this._unresolvedItemPadding=new ae(e.get(i,"itemPadding",5)),
this._unresolvedItemSize=re.to(e.get(i,"itemSize"))||new re,this._itemCountMax=e.get(i,"itemCountMax"),
this._overflow=e.get(i,"overflow"),e.set(this.vars,"horizontal",e.get(i,"horizontal",!1),"font",e.get(i,"font"),"textMargin",e.get(i,"textMargin",6)-3);
}).add({layout:function(t){function i(t){var i=t.labelTextSize(),a=!i||!i.width||!i.height;
if(t.isHidden=a,!a){var r,o={width:p+i.width,height:Math.max(i.height,f)},l={width:h.width||u.width+o.width,
height:h.height||u.height+o.height},c={width:Math.max(0,l.width-u.width),height:Math.max(0,l.height-u.height)
};v?r=!v.items.length:(v=new X.visual.legend.LegendItemSceneSection(0),r=!0);var d=v.size[m]+c[m];
r||(d+=u[m]),!r&&d>S&&(n(!1),d=c[m]);var g=v.size;g[m]=d,g[b]=Math.max(g[b],c[b]);
var x=v.items.length;s++,v.items.push(t),e.set(t.vars,"section",v,"sectionIndex",x,"textSize",i,"itemSize",l,"itemClientSize",c,"itemContentSize",o);
}}function n(e){var t=v.size;y[b]+=t[b],x.length&&(y[b]+=u[b]),y[m]=Math.max(y[m],t[m]),
x.push(v),e||(v=new X.visual.legend.LegendItemSceneSection(x.length))}function a(e){
return s>e}function r(){var e=l.width||1/0,t=l.height||1/0;return Math.min(e,o.width)<y.width||Math.min(t,o.height)<y.height;
}var s=0,o=t.clientSize;if(!(o.width>0&&o.height>0))return new re(0,0);var l=t.restrictions.clientSize;
if(null!=l.width&&0==l.width||null!=l.height&&0==l.height)return new re(0,0);var u=this._unresolvedItemPadding.resolve(o),c={
width:o.width+u.width,height:o.height+u.height},h=this._unresolvedItemSize.resolve(c),d={
width:h.width&&Math.max(0,h.width-u.width),height:h.height&&Math.max(0,h.height-u.height)
},f=this._unresolvedMarkerDiam||d.height||15;this.vars.itemPadding=u,this.vars.desiredItemSize=h,
this.vars.desiredItemClientSize=d,this.vars.markerSize=f;var v,p=f+this.vars.textMargin,g=Math.max(0,Math.min(d.width||1/0,l.width||1/0,o.width)-p),m=this.vars.horizontal?"width":"height",b=X.BasePanel.oppositeLength[m],x=[],y={
width:0,height:0},_=l[m],S=_;if((!S||0>S)&&(S=o[m]),this.childNodes.forEach(function(e){
e.childNodes.forEach(i,this)},this),!v||"collapse"===this._overflow&&a(this._itemCountMax))return new re(0,0);
n(!0),e.set(this.vars,"sections",x,"contentSize",y,"labelWidthMax",g);var w=this.compatVersion()<=1,C=w?S:_,k=l[b];
return(!C||0>C)&&(C=y[m]),(!k||0>k)&&(k=y[b]),"collapse"===this._overflow&&r()?new re(0,0):this.vars.size=e.set({},m,Math.min(C,o[m]),b,Math.min(k,o[b]));
},defaultGroupSceneType:function(){var t=this._groupType;return t||(t=e.type(X.visual.legend.LegendGroupScene),
this._groupType=t),t},createGroup:function(e){var t=this.defaultGroupSceneType();return new t(this,e);
}}),e.type("pvc.visual.legend.LegendGroupScene",X.visual.Scene).init(function(t,i){
this.base(t,i),this.legendBaseIndex=e.get(i,"legendBaseIndex")||0,this.colorAxis=e.get(i,"colorAxis"),
this.clickMode=e.get(i,"clickMode"),!this.clickMode&&this.colorAxis&&(this.clickMode=this.colorAxis.option("LegendClickMode"));
}).add({_rendererCreate:function(t,i,n){function a(n){var a=new X.visual.Panel(t,i).pvMark;
return u&&a.visible(function(t){return t.group._disposed?(e.log.warn("[CCC] FIXME: Code running on disposed scene!"),
!1):!!t.group.dimensions(u).atom(n)}),a}function r(){var a=new X.visual.Panel(t,i).pvMark,r={
drawLine:s.option("LegendDrawLine"),drawMarker:s.option("LegendDrawMarker"),markerShape:s.option("LegendShape")
},l=X.visual.legend.symbolRenderer(r);l(t,a,n,e.indexedId("",o))}var s=this.colorAxis;
if(s){var o=this.legendBaseIndex,l=!1,u=s.chart._getDataPartDimName();s.dataCells.forEach(function(i,r){
var s=i.legendSymbolRenderer();if(s){l=!0;var u=a(i.plot.option("DataPart"));s(t,u,n,e.indexedId("",o+r));
}}),l||r()}},hasRenderer:function(){return!!this._renderer},renderer:function(e){
return arguments.length?(e&&"object"==typeof e&&(e=X.visual.legend.symbolRenderer(e)),
this._renderer=e,this):this._renderer||(this._renderer=this._rendererCreate.bind(this));
},itemSceneType:function(){var t=this._itemSceneType;if(!t){t=e.type(X.visual.legend.LegendItemScene);
var i=this.clickMode;switch(i){case"toggleselected":t.add(X.visual.legend.LegendItemSceneSelection);
break;case"togglevisible":t.add(X.visual.legend.LegendItemSceneVisibility)}var n=this.panel();
n._extendSceneType("item",t,["isOn","executable","execute","value","labelText"]);var a=X.makeExtensionAbsId(X.makeExtensionAbsId("ItemScene",[this.extensionPrefix,"$"]),n._getExtensionPrefix()),r=n.chart._getExtension(a,"value");
void 0!==r&&t.variable("value",r),this._itemSceneType=t}return t},createItem:function(e){
var t=this.itemSceneType();return new t(this,e)}}),e.type("pvc.visual.legend.LegendItemSceneSection").init(function(e){
this.index=e,this.items=[],this.size={width:0,height:0}}),e.type("pvc.visual.legend.LegendItemScene",X.visual.Scene).add({
_ibits:null,ibits:function(){var e=this._ibits;if(null==e){if(this.executable())e=-1;else{
var t=X.visual.Interactive;e=t.Interactive|t.ShowsInteraction|t.ShowsTooltip|t.Hoverable|t.SelectableAny;
}this._ibits=e}return e},isOn:e.fun.constant(!0),executable:e.fun.constant(!1),execute:e.fun.constant(),
labelText:function(){return this.value().label},labelTextSize:function(){return t.Text.measure(this.labelText(),this.vars.font);
},_valueEval:function(){var e=this._valueEvalCore();return e instanceof ce||(e=new ce(e,e)),
e},_valueEvalCore:function(){var e,t,i,n,a,r=this.group||this.datum;return r&&(e=r.value,
t=r.rawValue,a=this._getTrendLineSuffix(r),i=r.ensureLabel()+a,n=r.absLabel?r.absLabel+a:i),
new ce(e||null,i||"",t,n)},_getTrendLineSuffix:function(e){var t,i;return(t=e.firstDatum())&&(i=t.trend)?" ("+i.label+")":"";
}}).variable("value"),e.type("pvc.visual.legend.LegendItemSceneSelection").add({isOn:function(){
var e=this.group||this.datum;return!e.owner.selectedCount()||this.isSelected()},executable:function(){
return this.chart().selectableByClick()},execute:function(){var e=this.datums().array();
if(e.length){var t=this.chart();t._updatingSelections(function(){e=t._onUserSelection(e),
e&&e.length&&i.Data.toggleSelected(e,!0)})}}}),e.type("pvc.visual.legend.LegendItemSceneVisibility").add({
isOn:function(){var e=this._isOn;return null==e&&(e=this._isOn=this.datums().any(function(e){
return!e.isNull&&e.isVisible})),e},executable:function(){return e.lazy(this,"_execble",this._calcExecutable,this);
},_calcExecutable:function(){if(this._executableApriori())for(var e,t=this.root.childNodes,i=-1,n=t.length;++i<n;)if("togglevisible"===(e=t[i]).clickMode)for(var a,r=e.childNodes,s=-1,o=r.length;++s<o;)if((a=r[s])!==this&&a._executableApriori()&&a.isOn())return!0;
return!1},_executableApriori:function(){return e.lazy(this,"_execApriori",this._calcExecutableApriori,this);
},_calcExecutableApriori:function(){return this.datums().any(function(e){return!e.isTrend;
})},execute:function(){i.Data.toggleVisible(this.datums())&&(this.clearCachedState(),
this.chart().render(!0,!0,!1))},clearCachedState:function(){delete this._execble,
delete this._isOn,delete this._execApriori}}),e.space("pvc.visual.legend").symbolRenderer=function(t){
function i(e,t){var i=X.makeExtensionAbsId(e,t);return u?i.concat(X.makeExtensionAbsId(e,u)):i;
}function n(e,t,n,u){var c=X.extensionTag,h=function(e){return e.color},d=["$",u];
if(s){var f=(new ee).left(0).top(function(){return this.parent.height()/2}).width(function(){
return this.parent.width()}).lineWidth(1,c).strokeStyle(h,c).cursor(function(e){return e.executable()?"pointer":"default";
});l&&(f=l.extend(f)),new X.visual.Rule(e,t,{proto:f,noSelect:!1,noHover:!1,activeSeriesAware:!1,
extensionId:i("Rule",d),showsInteraction:!0,wrapper:n})}if(o){var v=(new ee).left(function(){
return this.parent.width()/2}).top(function(){return this.parent.height()/2}).shapeSize(function(){
return this.parent.width()},c).lineWidth(2,c).fillStyle(h,c).strokeStyle(h,c).shape(a,c).angle(s?0:Math.PI/2,c).antialias(function(){
var e=Math.abs(Math.cos(this.angle()));if(0!==e&&1!==e)switch(this.shape()){case"square":
case"bar":return!1}return!0},c).cursor(function(e){return e.executable()?"pointer":"default";
});r&&(v=r.extend(v)),new X.visual.Dot(e,t,{proto:v,freePosition:!0,activeSeriesAware:!1,
noTooltip:!0,noClick:!0,extensionId:i("Dot",d),wrapper:n}).pvMark.pointingRadiusMax(0);
}}var a,r,s=e.get(t,"drawLine",!1),o=!s||e.get(t,"drawMarker",!0),l=s?e.get(t,"rulePvProto"):null,u=e.array.to(e.get(t,"extensionPrefix"));
return o&&(a=e.get(t,"markerShape","square"),r=e.get(t,"markerPvProto")),n};var ge={
top:"left",bottom:"right",left:"left",right:"right",middle:"center",center:"center"
},me={top:"right",bottom:"left",left:"right",right:"left",middle:"center",center:"center"
},be={top:0,right:Math.PI/2,bottom:0,left:-Math.PI/2};e.type("pvc.TitlePanelAbstract",X.BasePanel).init(function(e,t,i){
i||(i={});var n=i.anchor||this.anchor;if(null==i.size){var a=i.titleSize;null!=a&&(i.size=(new re).setSize(a,{
singleProp:this.anchorOrthoLength(n)}))}if(null==i.sizeMax){var r=i.titleSizeMax;null!=r&&(i.sizeMax=(new re).setSize(r,{
singleProp:this.anchorOrthoLength(n)}))}if(null==i.paddings&&(i.paddings=this.defaultPaddings),
this.base(e,t,i),void 0===i.font){var s=this._getExtension("label","font");"string"==typeof s&&(this.font=s);
}}).add({pvLabel:null,anchor:"top",title:null,titleSize:void 0,font:"12px sans-serif",
defaultPaddings:2,_extensionPrefix:"title",_calcLayout:function(e){var i=new re,n=this.anchor,a=this.anchorLength(n),r=this.anchorOrthoLength(n),s=this.title||"",o=t.Text.measureWidth(s,this.font)+2,l=e.clientSize[a],u=e.restrictions.clientSize[a];
null==u?u=o>l?l:o:u>l&&(u=l);var c=s?o>u?X.text.justify(s,u,this.font):[s]:[],h=t.Text.fontHeight(this.font),d=c.length*h,f=e.clientSize[r],v=e.restrictions.clientSize[r];
if(null==v?v=d:v>f&&(v=f),d>v){var p=Math.max(1,Math.floor(v/h));if(c.length>p){var g=c[p];
c.length=p,d=v=p*h;var m=c[p-1]+" "+g;c[p-1]=X.text.trimToWidthB(u,m,this.font,"..");
}}return e.lines=c,e.topOffset=(v-d)/2,e.lineSize={width:u,height:h},e.a_width=a,
e.a_height=r,i[a]=u,i[r]=v,i},_createCore:function(e){var t,i=this._buildScene(e),n=this.isAnchorTopOrBottom(),a=this.align,r=X.BasePanel.leftTopAnchor[this.anchor];
this.compatVersion()<=1&&(t=function(e){return function(){return e.call(this)}}),
this.pvLabel=new X.visual.Label(this,this.pvPanel,{extensionId:"label",wrapper:t}).lock("data",i.lineScenes).pvMark.textAngle(be[this.anchor]).textAlign(function(){
var e=this.textAngle(),t=n?Math.cos(e)>=0:Math.sin(e)>=0;return(t?ge:me)[a]})[r](function(t){
return e.topOffset+t.vars.size.height/2+this.index*t.vars.size.height})[this.anchorOrtho(r)](function(e){
switch(a){case"middle":case"center":return e.vars.size.width/2;case"bottom":case"left":
return 0;case"top":case"right":return e.vars.size.width}}).text(function(e){return e.vars.textLines[this.index];
}).font(this.font).textBaseline("middle")},_buildScene:function(t){var i=new X.visual.Scene(null,{
panel:this,source:this.chart.data}),n=t.lines;return i.vars.size=t.lineSize,i.vars.textLines=n,
i.lineScenes=e.array.create(n.length,i),i},_getExtensionId:e.fun.constant("")}),e.type("pvc.TitlePanel",X.TitlePanelAbstract).init(function(e,t,i){
i||(i={});var n=e.compatVersion()<=1;if(n){var a=i.titleSize;null==a&&(i.titleSize=25);
}this._extensionPrefix=e.parent?"smallTitle":"title",this.base(e,t,i)}).add({font:"14px sans-serif",
defaultPaddings:4}),e.type("pvc.GridDockingPanel",X.ContentPanel).add({_getFillSizeMin:function(){
return null},_calcLayout:function(t){function i(){var i=0;try{v._children.forEach(n);
}finally{}g&&v.log.group("Phase 1 - Determine MARGINS and FILL SIZE from SIDE panels");
try{i=a()}finally{g&&(v.log("Final FILL margins = "+e.describe(k)),v.log("Final FILL border size = "+e.describe(P)),
v.log.groupEnd())}if(i|=h(m),!i){g&&v.log.group("Phase 2 - Determine COMMON PADDINGS");
try{i=s()}finally{g&&(v.log("Final COMMON paddings  = "+e.describe(R)),v.log("Final FILL client size = "+e.describe({
width:(P.width||0)-(R.width||0),height:(P.height||0)-(R.height||0)})),v.log.groupEnd());
}}m&&!i&&p&&(t.contentOverflow=p)}function n(e){var t=e.anchor;t&&("fill"===t?I.push(e):L.push(e));
}function a(){var e=0,t=new Array(L.length),i=5,n=0;do{n++,g&&v.log.group("Iteration #"+n+" / "+i);
try{if(e=r(t,n===i),e&&0!==(e&S))return g&&v.log("Restarting due to clientSize increase."),
e}finally{g&&v.log.groupEnd()}}while(i>n&&0!==(e&w));for(var n=-1,a=L.length,s=new ae(0);++n<a;){
var o=L[n];if(o.isVisible){var l=o.anchor,c=s[l]||0;o.position[l]=c,u(o,o.align),
s[l]=c+t[n]}else L.splice(n,1),t.splice(n,1),a--,n--}return 0}function r(e,i){var n=0,a=m&&!i;
p=null,R=new ae(0),A=!1;for(var r=-1,s=L.length;++r<s;){var o=L[r];g&&o.log.group("Layout");
try{var l=o.anchor,u=x[l],h=b[l],d=e[r];null!=d&&(k[l]-=d,P[h]+=d);var v={width:null,
height:null};v[u]=P[u],v[h]=t.clientSize[h];var y=new re(P);M&&y[u]<M[u]&&(y[u]=M[u]),
C.sizeAvailable=y,C.sizeRef=v,C.canChange=a,o.layout(C);var _;if(o.isVisible){if(c(o,a))return S;
_=null==d||Math.abs(o[h]-d)>X.roundPixel.epsilon?o[h]:d}else _=0;(null==d||_!=d)&&(n|=w),
e[r]=_,_&&(k[l]+=_,P[h]-=_),o.isVisible&&f(o,a)}finally{g&&o.log.groupEnd()}}return n;
}function s(){var e=0,t=9,i=0;do{i++,g&&v.log.group("Iteration #"+i+" / "+t);try{
if(e=o(1===i,i===t),e&&0!==(e&S))return g&&v.log("Restarting due to clientSize increase."),
e}finally{g&&v.log.groupEnd()}}while(t>i&&0!==(e&y));return 0}function o(e,t){var i,n=m&&!t,a=L.length,r=L.concat(I),s=-1,o=r.length;
for(0>s&&(p=null);++s<o;){var h=r[s],v=s>=a;g&&h.log.group("Layout");try{if(l(h,n,v),
h.isVisible){if(c(h,n))return S;if(i=d(h,n))return y;v||f(h,n),v?(u(h,"center"),u(h,"middle")):u(h,h.align);
}}finally{g&&h.log.groupEnd()}}return 0}function l(i,n,a){var r,s,o,l;if(a)r=re.clone(P),
o=P,l=e.copyOwn(R);else{var u=i.anchor,c=x[u],h=b[u];s={width:null,height:null},s[c]=P[c],
s[h]=i[h],o={width:null,height:null},o[c]=P[c],o[h]=t.clientSize[h],l=e.copyOwn(ae.filterAnchor(u,R));
}C.sizeAvailable=r,C.size=s,C.sizeRef=o,C.paddings=l,C.canChange=n,i.layout(C)}function u(e,t){
var i,n;switch(t){case"top":case"bottom":case"left":case"right":n=t,i=k[n];break;case"fill":
case"middle":n="bottom",i=k.bottom+P.height/2-e.height/2;break;case"center":n="left",
i=k.left+P.width/2-e.width/2}e.position[n]=i}function c(e,i){function n(n){var s=r[n];
s>X.roundPixel.epsilon&&(i?(a|=S,t.clientSize[n]+=s,D[n]+=s):g&&e.log.warn("Child wanted more "+n+", but layout iterations limit has been reached."));
}var a=0,r=e.getLayout().sizeIncrease;return r&&("fill"===e.anchor?re.names.forEach(n):n(e.anchorLength())),
a}function h(e){function i(i){var a=M[i]-P[i];a-=D[i],a>X.roundPixel.epsilon&&(e?(n|=S,
t.clientSize[i]+=a,g&&v.log.warn("Increasing client "+i+" by "+a+" to satisfy minimum fill "+i+".")):g&&v.log.warn("Wanted more fill "+i+", "+a+", but layout iterations limit has been reached."));
}var n=0;return M&&(i("width"),i("height")),n}function d(t,i){var n=0,a=t._layoutInfo.contentOverflow;
return a&&(g&&t.log("ContentOverflow="+e.describe(a)),ae.getAnchorSides(t.anchor).forEach(function(e){
var r=R[e]||0,s=a[e]||0;s-r>X.roundPixel.epsilon&&(i?(n|=y,R[e]=s,g&&t.log("Changed content overflow: "+e+" <- "+s)):g&&t.log.warn("CANNOT change but child wanted to: "+e+"="+s));
}),n&&ae.updateSize(R)),n}function f(i,n){var a,r=0;if(v.chart._preserveLayout||!(a=i._layoutInfo.contentOverflowOptional))return r;
g&&i.log("<= contentOverflowOptional="+e.describe(a));var s=t.paddings,o=i.anchorLength();
return ae.getAnchorSides(i.anchor).forEach(function(t){if(a.hasOwnProperty(t)){var l=s[t]||0,u=a[t]||0,c=i._layoutInfo.size[o],h=Math.max(0,c+u-P[o]),d=Math.max(0,h-k[t]);
d-l>X.roundPixel.epsilon&&(n?(r|=_,p||(p=new ae(s)),p[t]=Math.max(p[t]||0,d),g&&i.log("Changed optional content overflow "+t+" <- "+d)):e.debug>=2&&i.log.warn("CANNOT change optional content overflow but child wanted to: "+t+"="+d));
}}),r}var v=this;if(v._children){var p,g=e.debug>=10,m=t.restrictions.canChange!==!1,b=X.BasePanel.orthogonalLength,x=X.BasePanel.parallelLength,y=2,_=4,S=8,w=16,C={
force:!0},k=new ae(0),P=e.copyOwn(t.clientSize),M=this._getFillSizeMin();M&&(M=M.resolve(null));
var D={width:0,height:0},R=new ae(0),A=!1,I=[],L=[];g&&v.log.group("CCC GRID LAYOUT");
try{i()}finally{g&&v.log.groupEnd()}return t.gridMargins=ae.updateSize(k),t.gridPaddings=ae.updateSize(R),
t.gridSize=new re(P),t.clientSize}}}),e.type("pvc.BaseChart",X.Abstract).add(X.visual.Interactive).add(e.EventSource).init(function(t){
var n=t,a=this.parent=e.get(t,"parent")||null;a?t||e.fail.argumentRequired("options"):(xe&&xe(),
t=e.mixin.copy({},this.defaults,t)),this.options=t,a?(this.root=a.root,this.smallColIndex=t.smallColIndex,
this.smallRowIndex=t.smallRowIndex):(this.root=this,this._format=i.format.language().createChild()),
this.base(),e.debug>=3&&this.log.info("NEW CHART\n"+e.logSeparator.replace(/-/g,"=")+"\n  DebugLevel: "+e.debug),
e.debug>=3&&!a&&n&&(this.log.info("OPTIONS:\n",n),e.debug>=5&&this.log.debug(e.describe(n,{
ownOnly:!1,funs:!0}))),a&&a._addChild(this),this._constructData(t),this._constructVisualRoles(t);
}).add({_disposed:!1,parent:null,children:null,root:null,isCreated:!1,_createVersion:0,
renderCallback:void 0,multiChartPageCount:null,multiChartPageIndex:null,_multiChartOverflowClipped:!1,
left:0,top:0,width:null,height:null,margins:null,paddings:null,_allowV1SecondAxis:!1,
_preserveLayout:!1,compatVersion:function(e){return(e||this.options).compatVersion;
},getCompatFlag:function(e){return this.options.compatFlags[e]},_createLogId:function(){
return""+e.qualNameOf(this.constructor)+this._createLogChildSuffix()},_createLogChildSuffix:function(){
return this.parent?" ("+(this.smallRowIndex+1)+","+(this.smallColIndex+1)+")":""},
_addChild:function(t){t.parent===this||e.assert("Not a child of this chart."),this.children.push(t);
},_savePlotsLayout:function(){this.options.preserveLayout&&this.plotPanelList&&this.plotPanelList.length&&(this._preservedPlotsLayoutInfo={},
this.plotPanelList.forEach(function(e){this._preservedPlotsLayoutInfo[e.plot.id]=e._getLayoutState();
},this),this._preserveLayout=!0)},_create:function(e){this._createPhase1(e),this._createPhase2();
},_createPhase1:function(t){this._createVersion++,this.isCreated=!1,e.debug>=3&&this.log("Creating");
var i,n=!this.parent,a=this._isMultiChartOverflowClipRetry,r=n&&!a&&!this.data;this._savePlotsLayout(),
n&&(this.children=[]),this.plotPanels={},this.plotPanelList=[],n&&a||this._processOptions(),
r&&(this._processDataOptions(this.options),this._checkNoDataI(),this._initChartVisualRoles()),
(r||!n)&&this._initPlots(),a||(this._initData(t),n&&this._checkNoDataII()),i=this.visualRoles.multiChart.isBound(),
a||this._initAxesEnd(),n&&(i&&this._initMultiCharts(),this._interpolate(i),this._generateTrends(i)),
this._setAxesScales(this._chartLevel())},_createPhase2:function(){var e=this.visualRoles.multiChart.isBound();
this._initChartPanels(e),this.isCreated=!0},_setSmallLayout:function(t){function i(e){
var i=t[e];return null!=i?(n[e]=i,!0):void 0}if(t){var n=this,a=n.basePanel;i("left")|i("top")&&a&&e.set(a.position,"left",this.left,"top",this.top),
i("width")|i("height")&&a&&(a.size=new re(this.width,this.height)),i("margins")&&a&&(a.margins=new ae(this.margins)),
i("paddings")&&a&&(a.paddings=new ae(this.paddings))}},_processOptions:function(){
var t,i=this.options;return this.parent||(this.width=i.width,this.height=i.height,
this.margins=i.margins,this.paddings=i.paddings),this.compatVersion()<=1?i.plot2=this._allowV1SecondAxis&&!!i.secondAxis:!i.plot2&&(t=i.plots)&&(i.plot2=e.array.is(t)?e.query(t).where(function(e){
return"plot2"===e.name}).any():!!t.plot2),this._processFormatOptions(i),this._processOptionsCore(i),
this._processExtensionPoints(),i},_processOptionsCore:function(e){var i=this.parent;
if(i)r=i.ibits(),this._tooltipOptions=i._tooltipOptions,this._pointingOptions=i._pointingOptions;else{
var a="batik"!==t.renderer();a&&null==(a=e.interactive)&&(a=!0);var r=0;if(a){var s=X.visual.Interactive;
r=s.Interactive|s.ShowsInteraction,this._processTooltipOptions(e)&&(r|=s.ShowsTooltip),
e.animate&&n.support.svg&&(r|=s.Animatable);var o=!1;if(e.selectable)switch(r|=s.Selectable,
X.parseSelectionMode(e.selectionMode)){case"rubberband":r|=s.SelectableByRubberband|s.SelectableByClick;
break;case"focuswindow":r|=s.SelectableByFocusWindow,o=!0}o||"emptyspaceclick"!==X.parseClearSelectionMode(e.clearSelectionMode)||(r|=s.Unselectable),
e.hoverable&&(r|=s.Hoverable),e.clickable&&(r|=s.Clickable|s.DoubleClickable),this._processPointingOptions(e);
var l;(l=e.on)&&this.on(l),(l=e.before)&&this.before(l),(l=e.after)&&this.after(l);
}}this._ibits=r},_pointingDefaults:{radius:10,radiusHyst:4,stealClick:!0,collapse:"none"
},_tooltipDefaults:{gravity:"s",animate:void 0,delayIn:200,delayOut:80,offset:2,opacity:.9,
html:!0,fade:!0,useCorners:!1,arrowVisible:!0,followMouse:!1,format:void 0,className:""
},_processTooltipOptions:function(t){var i=this.compatVersion()<=1,n=t.tooltip,a=t.tooltipEnabled;
return null==a&&(n&&(a=n.enabled),null==a&&(i&&(a=t.showTooltips),null==a&&(a=!0))),
a&&(n=n?e.copy(n):{},i&&this._importV1TooltipOptions(n,t),e.eachOwn(this._tooltipDefaults,function(i,a){
var r=t["tooltip"+e.firstUpperCase(a)];void 0!==r?n[a]=r:void 0===n[a]&&(n[a]=i)})),
this._tooltipOptions=n||{},a},_importV1TooltipOptions:function(e,t){var i=t.tipsySettings;
if(i){this.extend(i,"tooltip");for(var n in i)void 0===e[n]&&(e[n]=i[n]);null==e.html&&(e.html=!1);
}},_processPointingOptions:function(t){var i=t.pointing,n=t.pointingMode;null==n&&(i&&(n=i.mode),
n||(n="near")),i=i?e.copyOwn(i):{},i.mode=X.parsePointingMode(n),e.eachOwn(this._pointingDefaults,function(e,t){
void 0===i[t]&&(i[t]=e)}),i.collapse=X.parsePointingCollapse(i.collapse),i.painted=!0,
this._pointingOptions=i||{}},_processFormatOptions:function(e){if(!this.parent){var t=e.format;
void 0!=t&&this.format(t);var i=this._format;this._processFormatOption(e,i,"number","valueFormat"),
this._processFormatOption(e,i,"percent","percentValueFormat")}},_processFormatOption:function(e,n,a,r){
var s=n[a]();if(s!==i.format.defaults[a]())e[r]=s;else{var o=e[r];o&&o!==s&&(o._nullWrapped||(e[r]=o=t.Format.createFormatter(o),
o._nullWrapped=1),n[a](o))}},_processDataOptions:function(t){function i(e,i,a){var r=t[e];
void 0!==r?n[i]=null==r||""===r?a:r:void 0!=a&&void 0===n[i]&&(n[i]=a)}var n=t.dataOptions||(t.dataOptions={});
i("dataSeparator","separator","~"),i("dataMeasuresInColumns","measuresInColumns"),
i("dataCategoriesCount","categoriesCount"),i("dataIgnoreMetadataLabels","ignoreMetadataLabels"),
i("dataWhere","where"),i("dataTypeCheckingMode","typeCheckingMode");var a,r,s=t.plot2;
s&&(this._allowV1SecondAxis&&this.compatVersion()<=1?r=t.secondAxisIdx:(a=t.plot2Series?e.array.as(t.plot2Series):null,
a&&a.length||(a=null,r=t.plot2SeriesIndexes)),a||(r=e.parseDistinctIndexArray(r,-1/0)||-1)),
t.plot2Series=a,t.plot2SeriesIndexes=r,n.measuresIndex=n.measuresIndex||n.measuresIdx,
n.measuresCount=n.measuresCount||n.numMeasures},format:function(t){var n=this.root;
if(n!==this)return n.format.apply(n,arguments);var a=this._format;if(arguments.length){
if(!t)throw e.error.argumentRequired("format");if(t!==a){if(!e.is(t,i.format)){if(a)return e.configure(a,t),
this;t=i.format(t)}this._format=t}return this}return a},render:function(t){var i,n,a,r,s,o,l=null;
1===arguments.length&&t&&"object"==typeof t?(n=t.bypassAnimation,a=t.recreate,o=a&&t.dataOnRecreate,
r="reload"===o,s="add"===o):(n=arguments[0],a=arguments[1],r=arguments[2],s=!1),e.debug>1&&this.log.group("CCC RENDER"),
this._lastRenderError=null,this._suspendSelectionUpdate();try{this.useTextMeasureCache(function(){
try{for(;;){if(this.parent||X.removeTipsyLegends(),(!this.isCreated||a)&&this._create({
reloadData:r,addData:s}),this.basePanel.render({bypassAnimation:n,recreate:a}),!this._isMultiChartOverflowClip){
this._isMultiChartOverflowClipRetry=!1;break}a=!0,r=!1,this._isMultiChartOverflowClipRetry=!0,
this._isMultiChartOverflowClip=!1,this._multiChartOverflowClipped=!0}}catch(t){l=t,
t instanceof X.NoDataException?this._addErrorPanelMessage(t.message,"noDataMessage"):t instanceof X.InvalidDataException?this._addErrorPanelMessage(t.message,"invalidDataMessage"):(i=!0,
this.log.error(t.message),e.debug>0&&this._addErrorPanelMessage("Error: "+t.message,"errorMessage"));
}})}finally{this._lastRenderError=l,i||this._resumeSelectionUpdate(),e.debug>1&&this.log.groupEnd();
}return this},getLastRenderError:function(){return this._lastRenderError},renderResize:function(e,t){
var i=null!=e,n=null!=t;if(!i&&!n)return this;var a=this.basePanel;if(a){i&&(i=e!==a.width),
n&&(n=t!==a.height);var r,s;if((r=a.getLayout())&&(s=r.sizeIncrease)&&(i&&(i=!s.width||e>a.width),
n&&(n=!s.height||t>a.height),!i&&!n))return this}return i?this.options.width=e:a&&(this.options.width=this.width),
n?this.options.height=t:a&&(this.options.height=this.height),this.render(!0,!0,!1);
},_addErrorPanelMessage:function(i,n){e.debug>1&&this.log(i);var a=!n||this._getExtension(n,"visible")!==!1;
if(a){var r=this.options,s=(new t.Panel).canvas(r.canvas).width(this.width).height(this.height),o=s.anchor("center").add(t.Label).text(i);
n&&this.extend(o,n),s.render()}},useTextMeasureCache:function(e,i){var n=this.root,a=n._textMeasureCache||(n._textMeasureCache=t.Text.createCache());
return t.Text.usingCache(a,e,i||this)},animate:function(e,t){return this.basePanel.animate(e,t);
},animatingStart:function(){return this.basePanel.animatingStart()},animating:function(){
return!!this.basePanel&&this.basePanel.animating()},isOrientationVertical:function(e){
return(e||this.options.orientation)===X.orientation.vertical},isOrientationHorizontal:function(e){
return(e||this.options.orientation)===X.orientation.horizontal},dispose:function(){
if(!this._disposed){this._disposed=!0;var e=this.basePanel&&this.basePanel.pvRootPanel,i=t.Behavior.tipsy;
i&&i.disposeAll&&i.disposeAll(e),e&&e.dispose()}},defaults:{width:400,height:300,
orientation:"vertical",ignoreNulls:!0,crosstabMode:!0,isMultiValued:!1,seriesInRows:!1,
groupedLabelSep:void 0,animate:!0,titlePosition:"top",titleAlign:"center",legend:!1,
legendPosition:"bottom",slidingWindow:!1,v1StyleTooltipFormat:function(e,t,i,n){return e+", "+t+":  "+this.chart.options.valueFormat(i)+(n&&n.percent?" ("+n.percent.label+")":"");
},clickable:!1,doubleClickMaxDelay:300,hoverable:!1,selectable:!1,selectionMode:"rubberband",
ctrlSelectMode:!0,clearSelectionMode:"emptySpaceClick",compatVersion:1/0,compatFlags:{
discreteTimeSeriesTickFormat:!0}}});var xe=function(){var e=X.BaseChart.prototype.defaults;
e.valueFormat||(e.valueFormat=i.format.defaults.number()),e.percentValueFormat||(e.percentValueFormat=i.format.defaults.percent()),
xe=null};X.BaseChart.add({visualRoles:null,visualRoleList:null,_measureVisualRoles:null,
visualRole:function(t){var i=e.getOwn(this.visualRoles,t);if(!i)throw e.error.operationInvalid("roleName","There is no visual role with name '{0}'.",[t]);
return i},measureVisualRoles:function(){return this.parent?this.parent.measureVisualRoles():this._measureVisualRoles||(this._measureVisualRoles=this.visualRoleList.filter(function(e){
return e.isBound()&&!e.isDiscrete()&&e.isMeasure}))},measureDimensionsNames:function(){
return e.query(this.measureVisualRoles()).selectMany(function(e){return e.grouping.dimensionNames();
}).distinct().array()},visualRolesOf:function(t,i){var n=this._visRolesByDim;return n||(n=this._visRolesByDim={},
this.visualRoleList.forEach(function(t){if(i||!t.plot){var a=t.grouping;a&&a.dimensionNames().forEach(function(i){
e.array.lazy(n,i).push(t)})}})),e.getOwn(n,t,null)},_constructVisualRoles:function(){
var e=this.parent;e?(this.visualRoles=e.visualRoles,this.visualRoleList=e.visualRoleList):(this.visualRoles={},
this.visualRoleList=[])},_addVisualRole:function(t,i){i=e.set(i,"index",this.visualRoleList.length);
var n=new X.visual.Role(t,i),a=[t];return n.plot||a.push("$."+t),this._addVisualRoleCore(n,a);
},_addVisualRoleCore:function(t,i){return i||(i=t.name),this.visualRoleList.push(t),
e.array.is(i)?i.forEach(function(e){this.visualRoles[e]=t},this):this.visualRoles[i]=t,
t},_initChartVisualRoles:function(){this._addVisualRole("multiChart",{defaultDimension:"multiChart*",
requireIsDiscrete:!0}),this._addVisualRole("dataPart",{defaultDimension:"dataPart",
requireIsDiscrete:!0,requireSingleDimension:!0,dimensionDefaults:{isHidden:!0,comparer:e.compare
}})},_getDataPartDimName:function(e){var t,i=this.visualRoles.dataPart;return i.isBound()?i.lastDimensionName():(t=i.preBoundGrouping())?t.lastDimensionName():e?i.defaultDimensionGroup:null;
},_processViewSpec:function(t){if(!t.dimsKeys)if(t.role){var i=this.visualRoles[t.role],n=i&&i.grouping;
n&&(t.dimNames=n.dimensionNames().slice().sort(),t.dimsKey=t.dimNames.join(","))}else{
if(!t.dims)throw e.error.argumentInvalid("viewSpec","Invalid view spec. No 'role' or 'dims' property.");
t.dimNames=O(t.dims),t.dimsKey=String(t.dimNames)}}}),X.BaseChart.add({dataEngine:null,
data:null,_partsDataCache:null,_visibleDataCache:null,resultset:[],metadata:[],_constructData:function(t){
this.parent&&(this.dataEngine=this.data=t.data||e.fail.argumentRequired("options.data"));
},_checkNoDataI:function(){if(!this.allowNoData&&!this.resultset.length)throw new X.NoDataException;
},_checkNoDataII:function(){if(!(this.allowNoData||this.data&&this.data.count()))throw this.data=null,
new X.NoDataException},_initData:function(t){if(this.parent)this.slidingWindow=this.parent.slidingWindow,
this._initAxes();else{var i=this.data;i?e.get(t,"reloadData",!0)?this._reloadData():(i.disposeChildren(),
i.clearVirtuals(),e.get(t,"addData",!1)?this._addData():this._initAxes()):this._loadData();
}this.slidingWindow&&this.slidingWindow.setAxesDefaults(this),delete this._partsDataCache,
delete this._visibleDataCache,e.debug>=3&&this.log(this.data.getInfo())},_initSlidingWindow:function(){
var e=this.options.slidingWindow?new X.visual.SlidingWindow(this):null;this.slidingWindow=e&&e.length?e:null;
},_loadData:function(){Q&&(!this.data&&!this._translation||e.assert("Invalid state."));
var t,n,a,r=this.options,s=this._createDimensionsOptions(r),o=this._createComplexTypeProject(),l=X.visual.rolesBinder().dimensionsOptions(s).logger(this._createLogger()).context(this._createVisualRolesContext()).complexTypeProject(o).begin(),u=this._getDataPartDimName(!0);
this._maybeAddPlot2SeriesDataPartCalc(o,u)||!this.visualRoles.dataPart.isPreBound()&&this.plots.trend&&o.setDim(u),
this.metadata.length&&(a=this._translation=this._createTranslation(o,s,u)),o.hasDim(u)&&!o.isReadOrCalc(u)&&this._addDefaultDataPartCalculation(o,u),
t=l.end(),this._initSlidingWindow(),this.slidingWindow&&(this.slidingWindow.setDimensionsOptions(t),
this.slidingWindow.setLayoutPreservation(this)),n=this.dataEngine=this.data=new i.Data({
type:t,labelSep:r.groupedLabelSep,keySep:r.dataOptions.separator}),this._initAxes(),
this.slidingWindow&&(this.slidingWindow.initFromOptions(),this.slidingWindow.setDataFilter(this.data)),
a&&this._loadDataCore(n,a)},_reloadData:function(){var t=this.data,i=this._translation;
t&&i||e.assert("Invalid state."),i.setSource(this.resultset),e.debug>=3&&this.log(i.logSource()),
this._initAxes(),this._loadDataCore(t,i)},_addData:function(){var t=this.data,i=this._translation;
t&&i||e.assert("Invalid state."),i.setSource(this.resultset),e.debug>=3&&this.log(i.logSource()),
this._isMultiChartOverflowClipRetry,this._initAxes(),this._loadDataCore(t,i,{isAdditive:!0
})},_loadDataCore:function(t,i,n){var a=e.copy(n,{where:this.options.dataOptions.where,
isNull:this._getIsNullDatum()}),r=i.execute(t);t.load(r,a)},_createVisualRolesContext:function(){
var t=this.options,i=t.visualRoles,n=this.visualRoles,a=this.visualRoleList,r=function(t){
return e.getOwn(n,t)};return r.query=function(){return e.query(a)},r.getOptions=function(e){
var n,a,r,s=e.plot,o=e.name;if(!s||s.isMain){if((n=t[o+"Role"])!==r)return n;if(i&&(n=i[o])!==r)return n;
}return s&&(a=s._visualRolesOptions)?a[o]:void 0},r},_createLogger:function(){function t(){
i.log.apply(i,arguments)}var i=this;return t.level=function(){return e.debug},t},
_createComplexTypeProject:function(){var e=this.options,t=new i.ComplexTypeProject(e.dimensionGroups),n=e.dimensions;
for(var a in n)t.setDim(a,n[a]);var r=e.calculations;return r&&r.forEach(t.setCalc,t),
t},_getIsNullDatum:function(){var e,t,i=this;return function(n){if(e||(e=i.measureDimensionsNames(),
t=e.length),!t)return!1;for(var a=n.atoms,r=0;t>r;r++)if(null!=a[e[r]].value)return!1;
return!0}},_createTranslation:function(t,i,n){var a=this._createTranslationOptions(i,n),r=this._getTranslationClass(a),s=new r(t,this.resultset,this.metadata,a);
return e.debug>=3&&(this.log(s.logSource()),this.log(s.logTranslatorType())),s.configureType(),
e.debug>=3&&this.log(s.logLogicalRow()),s},_getTranslationClass:function(e){return e.crosstabMode?i.CrosstabTranslationOper:i.RelationalTranslationOper;
},_createDimensionsOptions:function(e){return{isCategoryTimeSeries:e.timeSeries,formatProto:this._format,
timeSeriesFormat:e.timeSeriesFormat}},_createTranslationOptions:function(t,i){var n=this.options,a=n.dataOptions;
return e.create(t,{compatVersion:this.compatVersion(),plot2DataSeriesIndexes:n.plot2SeriesIndexes,
seriesInRows:n.seriesInRows,crosstabMode:n.crosstabMode,isMultiValued:n.isMultiValued,
dataPartDimName:i,readers:n.readers,measuresIndexes:n.measuresIndexes,multiChartIndexes:n.multiChartIndexes,
ignoreMetadataLabels:a.ignoreMetadataLabels,typeCheckingMode:X.parseDataTypeCheckingMode(a.typeCheckingMode),
separator:a.separator,measuresInColumns:a.measuresInColumns,categoriesCount:a.categoriesCount,
measuresIndex:a.measuresIndex,measuresCount:a.measuresCount})},_maybeAddPlot2SeriesDataPartCalc:function(t,n){
if(this.compatVersion()<=1)return!1;var a=this.options,r=this.visualRoles.series,s=r?a.plot2Series:null;
if(!s)return!1;var o,l,u,c,h,d=e.query(s).uniqueIndex(),f=e.hasOwnProp,v=function(e){
r.isBound()&&(o=r.grouping.dimensionNames(),l=e.owner.dimensions(n),o.length>1?h=i.Complex.compositeKey:(o=o[0],
h=function(e,t){return e.atoms[t].key})),v=null};return t.setCalc({names:n,calculation:function(e,t){
if(v&&v(e),l){var i=h(e,o);t[n]=f.call(d,i)?c||(c=l.intern("1")):u||(u=l.intern("0"));
}}}),!0},_addDefaultDataPartCalculation:function(e,t){var i,n;e.setCalc({names:t,
calculation:function(e,a){i||(i=e.owner.dimensions(t)),a[t]=n||(n=i.intern("0"))}
})},partData:function(t,i){if(i||(i=this.data),null==t)return i;if(this.parent)return this.root.partData(t,i);
var n=this.visualRoles.dataPart;if(!n||!n.isBound())return i;var a="\x00"+i.id+":"+e.nullyTo(t,""),r=e.lazy(this,"_partsDataCache"),s=r[a];
return s||(s=this._createPartData(i,n,t),r[a]=s),s},_createPartData:function(t,n,a){
var r=n.lastDimensionName(),s=t.dimensions(r).getDistinctAtoms(e.array.to(a)),o=i.whereSpecPredicate([e.set({},r,s)]);
return t.where(null,{where:o})},visibleData:function(t,i){var n=this.plots.main||e.fail.operationInvalid("There is no main plot defined.");
return this.visiblePlotData(n,t,i)},visiblePlotData:function(t,i,n){var a=e.get(n,"baseData")||this.data;
if(this.parent)return n=n?Object.create(n):{},n.baseData=a,this.root.visiblePlotData(t,i,n);
var r=!!e.get(n,"inverted",!1),s=!(!this.options.ignoreNulls&&!e.get(n,"ignoreNulls",!0)),o=[t.id,a.id,r,s,null!=i?i:null].join("|"),l=e.lazy(this,"_visibleDataCache"),u=l[o];
if(!u){var c=this.partData(i,a);n=n?Object.create(n):{},n.visible=!0,n.isNull=s?!1:null,
u=l[o]=t.createVisibleData(c,n)}return u},_initMultiCharts:function(){var t=this;t.multiOptions=new X.visual.MultiChart(t),
t.smallOptions=new X.visual.SmallChart(t);var i,n,a,r,s=t.multiOptions.option,o=t.visualRoles.multiChart.flatten(t.data,{
visible:!0,isNull:null}),l=o.childNodes;t._isMultiChartOverflowClipRetry?(n=t._clippedMultiChartRowsMax,
i=t._clippedMultiChartColsMax,r=i,a=n*i):a=s("Max");var u=Math.min(l.length,a);0===u?i=n=r=0:t._isMultiChartOverflowClipRetry||(r=s("ColumnsMax"),
i=Math.min(u,r),i>=1&&isFinite(i)||e.assert("Must be at least 1 and finite"),n=Math.ceil(u/i),
n>=1||e.assert("Must be at least 1")),t._multiInfo={data:o,smallDatas:l,count:u,rowCount:n,
colCount:i,colsMax:r}},interpolatable:function(){var e=this.plotList;return!!e&&e.some(function(e){
return e.interpolatable()})},_interpolate:function(t){if(this.interpolatable()){var i=e.query(this.axesList).selectMany(e.propGet("dataCells")).where(function(e){
var t=e.nullInterpolationMode;return!!t&&"none"!==t}).distinct(function(e){return[e.nullInterpolationMode,e.role.grouping.id,e.dataPartValue||""].join();
}).array();this._eachLeafDatasAndDataCells(t,i,function(e,t){e.plot.interpolateDataCell(e,t);
})}},_generateTrends:function(t){var i=this._getDataPartDimName();if(i&&this.plots.trend){
var n=e.query(this.axesList).selectMany(e.propGet("dataCells")).where(e.propGet("trend")).distinct(function(e){
return e.role.name+"|"+(e.dataPartValue||"")}).array(),a=[];this._eachLeafDatasAndDataCells(t,n,function(e,t){
e.plot.generateTrendsDataCell(a,e,t)}),a.length&&this.data.owner.add(a)}},_eachLeafDatasAndDataCells:function(e,t,i,n){
var a=t.length;if(a){var r,s;e?(r=this._multiInfo.smallDatas,s=this._multiInfo.count):(r=[this.data],
s=1);for(var o=0;s>o;o++)for(var l=r[o],u=0;a>u;u++)i.call(n,t[u],l,u,o)}},_getTrendDataPartAtom:function(){
var e=this._getDataPartDimName();return e?this.data.owner.dimensions(e).intern("trend"):void 0;
},setData:function(e,t){return this.setResultset(e&&e.resultset),this.setMetadata(e&&e.metadata),
n.extend(this.options,t),this},setResultset:function(t){return!this.parent||e.fail.operationInvalid("Can only set resultset on root chart."),
this.resultset=t||[],this.resultset.length||this.log.warn("Resultset is empty"),this;
},setMetadata:function(t){return!this.parent||e.fail.operationInvalid("Can only set metadata on root chart."),
this.metadata=t||[],this.metadata.length||this.log.warn("Metadata is empty"),this;
}}),X.BaseChart.add({_initPlots:function(){var e=this.parent;if(e)this.plots=e.plots,
this.plotList=e.plotList,this.plotsByType=e.plotsByType;else{this.plots={},this.plotList=[],
this.plotsByType={},this._createPlotsInternal();var t=this._defPlotsExternal();this._initPlotTrend(t);
}this._initPlotsEnd()},_createPlotsInternal:function(){},_defPlotsExternal:function(){
var e,t=this.plots,i=this.options.plots;return i&&i.forEach(function(i){if(i){var n=i.name;
"trend"===n?e=i:("plot2"!==n||t.plot2)&&this._defPlotExternal(n,i)}},this),e},_initPlotTrend:function(e){
var t=this.plotList.some(function(e){return e.option.isDefined("Trend")&&!!e.option("Trend");
});t&&(this._createPlotTrend(),e&&this.plots.trend&&this._defPlotExternal("trend",e));
},_defPlotExternal:function(t,i){var n,a=i.type;if(t&&(t=e.firstLowerCase(t),n=this.plots&&this.plots[t],
n&&a&&a!==n.type))throw e.error.argumentInvalid("plots","Plot named '{0}' is already defined and is of a different type: '{1}'",[t,n.type]);
n?n.processSpec(i):this._addPlot(this._createPlotExternal(t,a,i))},_createPlotExternal:function(t,i,n){
if(!i)throw e.error.argumentInvalid("plots","Plot 'type' option is required.");var a=X.visual.Plot.getClass(i);
if(!a)throw e.error.argumentInvalid("plots","The plot type '{0}' is not defined.",[i]);
return new a(this,{name:t,isInternal:!1,spec:n})},_createPlotTrend:function(){},_addPlot:function(t){
var i=this.plots,n=t.index,a=t.name,r=t.id;if(a&&e.hasOwn(i,a))throw e.error.operationInvalid("Plot name '{0}' already taken.",[a]);
if(e.hasOwn(i,r))throw e.error.operationInvalid("Plot id '{0}' already taken.",[r]);
var s=e.array.lazy(this.plotsByType,t.type);if(e.hasOwn(s,n))throw e.error.operationInvalid("Plot index '{0}' of type '{1}' already taken.",[n,t.type]);
t.globalIndex=this.plotList.length;var o=!t.globalIndex;s[n]=t,this.plotList.push(t),
i[r]=t,a&&(i[a]=t),o&&(i.main=t)},_initPlotsEnd:function(){var e;this.parent?e=this.parent._dataCellsByAxisTypeThenIndex:(e={},
this.plotList.forEach(function(t){t.initEnd(),this._registerPlotVisualRoles(t),this._indexPlotDataCells(t,e);
},this)),this._dataCellsByAxisTypeThenIndex=e},_registerPlotVisualRoles:function(e){
var t=e.name,i=e.id,n=e.isMain;e.visualRoleList.forEach(function(e){var a=e.name,r=[];
n&&(a in this.visualRoles||r.push(a),r.push("main."+a)),r.push(i+"."+a),t&&r.push(t+"."+a),
this._addVisualRoleCore(e,r)},this)},_indexPlotDataCells:function(t,i){t.dataCellList.forEach(function(t){
var n=e.array.lazy(i,t.axisType);e.array.lazy(n,t.axisIndex).push(t)})}}),X.BaseChart.add({
colors:null,axes:null,axesList:null,axesByType:null,_axisClassByType:{color:X.visual.ColorAxis,
size:X.visual.SizeAxis},_axisCreateChartLevel:{color:1,size:2,base:3,ortho:3},_axisSetScaleChartLevel:{
color:1,size:2,base:2,ortho:2},_axisCreationOrder:["color","size","base","ortho"],
_axisCreateIfUnbound:{},_chartLevel:function(){var e=0;return this.parent||(e|=1),
(this.parent||!this.visualRoles.multiChart.isBound())&&(e|=2),e},_initAxes:function(){
var t,i=this.axesByType;this.axes&&(t={},this.axesList.forEach(function(e){t[e.id]=e.getState();
}));var n=function(e,n){if(i){var a=i[e];if(a){var r=a[n].id,s=t?t[r]:void 0;return s;
}}};this.axes={},this.axesList=[],this.axesByType={},delete this._rolesColorScale;
var a=this._dataCellsByAxisTypeThenIndex;this.parent||e.eachOwn(a,function(e,t){for(var i=0,n=e.length;n>i;){
var r=e[i];r?(r=r.filter(function(e){return e.role.isBound()}),r.length?(e[i]=r,i++):(e.splice(i,1),
n--)):i++}e.length||delete a[t]});var r=this._chartLevel();this._axisCreationOrder.forEach(function(e){
if(0!==(this._axisCreateChartLevel[e]&r)){var t,i=a[e];i?(t=this._axisClassByType[e]||X.visual.Axis,
i.forEach(function(i){var a=i[0].axisIndex;new t(this,e,a,{state:n(e,a)})},this)):this._axisCreateIfUnbound[e]&&(t=this._axisClassByType[e]||X.visual.Axis,
t&&new t(this,e,0))}},this),this.parent&&this.root.axesList.forEach(function(t){e.hasOwn(this.axes,t.id)||this._addAxis(t);
},this),e.eachOwn(a,function(t,i){this._axisCreateChartLevel[i]&r&&t.forEach(function(t){
var n=t[0].axisIndex,a=this.axes[e.indexedId(i,n)];a.isBound()||a.bind(t)},this)},this);
},_initAxesEnd:function(){},_addAxis:function(t){this.axes[t.id]=t,t.chart===this&&(t.axisIndex=this.axesList.length),
this.axesList.push(t);var i=e.array.lazy(this.axesByType,t.type),n=i.count||0;return t.typeIndex=n,
i[t.index]=t,n||(i.first=t),i.count=n+1,"color"===t.type&&t.isBound()&&this._onColorAxisScaleSet(t),
this},_getAxis:function(e,t){var i;return null!=t&&+t>=0&&(i=this.axesByType[e])?i[t]:void 0;
},_setAxesScales:function(e){this.axesList.forEach(function(t){this._axisSetScaleChartLevel[t.type]&e&&t.isBound()&&this._setAxisScale(t,e);
},this)},_setAxisScale:function(e,t){this._setAxisScaleByScaleType(e,t)},_setAxisScaleByScaleType:function(t,i){
switch(t.scaleType){case"discrete":this._setDiscreteAxisScale(t,i);break;case"numeric":
this._setNumericAxisScale(t,i);break;case"timeSeries":this._setTimeSeriesAxisScale(t,i);
break;default:throw e.error("Unknown axis scale type.")}},_describeScale:function(t,i){
i.isNull&&e.debug>=3&&this.log(e.format("{0} scale for axis '{1}'- no data",[t.scaleType,t.id]));
},_setDiscreteAxisScale:function(e){if("color"===e.type)return this._setDiscreteColorAxisScale(e);
var i=e.domainValues(),n=new t.Scale.ordinal;i.length?n.domain(i):n.isNull=!0,this._describeScale(e,n),
e.setScale(n)},_setTimeSeriesAxisScale:function(e){var i=this._getContinuousVisibleExtentConstrained(e),n=new t.Scale.linear;
if(i){var a=i.min,r=i.max,s=1,o=function(){var e=r-a;e&&Math.abs(e)<s&&(r=a=new Date(Math.round((a+r)/2)),
e=0),e?0>e&&(!i.maxLocked||i.minLocked?r=new Date(a.getTime()+X.time.intervals.h):a=new Date(r.getTime()-X.time.intervals.h)):(i.minLocked||(a=new Date(a.getTime()-X.time.intervals.h)),
(!i.maxLocked||i.minLocked)&&(r=new Date(r.getTime()+X.time.intervals.h)))};o(),n.domain(a,r),
n.minLocked=i.minLocked,n.maxLocked=i.maxLocked}else n.isNull=!0;this._describeScale(e,n),
e.setScale(n)},_setNumericAxisScale:function(e){if("color"===e.type)return this._setNumericColorAxisScale(e);
var i=this._getContinuousVisibleExtentConstrained(e),n=new t.Scale.linear;if(i){var a=i.min,r=i.max,s=1e-10,o=function(){
var e=r-a;e&&Math.abs(e)<=s&&(a=(a+r)/2,a=r=+a.toFixed(10),e=0),e?0>e&&(!i.maxLocked||i.minLocked?r=Math.abs(a)>s?1.01*a:.1:a=Math.abs(r)>s?.99*r:-.1):(i.minLocked||(a=Math.abs(a)>s?.99*a:-.1),
(!i.maxLocked||i.minLocked)&&(r=Math.abs(r)>s?1.01*r:.1))};o();var l=!i.lengthLocked&&e.option.isDefined("OriginIsZero")&&e.option("OriginIsZero");
l&&(0===a?i.minLocked=!0:0===r?i.maxLocked=!0:a*r>0&&(a>0?i.minLocked||(i.minLocked=!0,
a=0):i.maxLocked||(i.maxLocked=!0,r=0),o())),n.domain(a,r),n.minLocked=i.minLocked,
n.maxLocked=i.maxLocked}else n.isNull=!0;this._describeScale(e,n),e.setScale(n)},
_warnSingleContinuousValueRole:function(t){t.grouping.isSingleDimension||this.log.warn("A linear scale can only be obtained for a single dimension role."),
t.grouping.isDiscrete()&&this.log.warn(e.format("The single dimension of role '{0}' should be continuous.",[t.name]));
},_getContinuousVisibleExtentConstrained:function(e){var t,i=this,n=e.option,a=function(n){
t||(t=i.data.owner.dimensions(e.role.grouping.lastDimensionName()));var n=t.read(n);
return null!=n?n.value:null},r=function(e){if(!n.isDefined(e))return null;var t=n(e);
return null!=t?a(t):t},s=n.isDefined("FixedLength")?n("FixedLength"):null,o=null,l=null,u=!1,c=!1;
if(null!=(o=r("FixedMin"))&&(u=!0,s&&(l=+o+s,c=!0)),null==l&&null!=(l=r("FixedMax"))&&(c=!0,
s&&(o=l-s,u=!0)),null==o||null==l){var h=this._getContinuousVisibleExtent(e);if(!h)return null;
if(s)switch(n("DomainAlign")){case"min":o=h.min,l=+o+s;break;case"max":l=h.max,o=l-s;
break;default:var d=h.max-(h.max-h.min)/2;o=d-s/2,l=d+s/2}else null==o&&(o=h.min),
null==l&&(l=h.max)}if(e.scaleUsesAbs()&&(0>o&&(o=-o),0>l&&(l=-l)),+o>+l){var f=o;o=l,
l=f}return{min:a(o),max:a(l),minLocked:u,maxLocked:c,lengthLocked:null!=s}},_getContinuousVisibleExtent:function(t){
var i=t.dataCells;if(1===i.length){var n=i[0];return n.plot.getContinuousVisibleCellExtent(this,t,n);
}return e.query(i).select(function(e){return e.plot.getContinuousVisibleCellExtent(this,t,e);
},this).reduce(X.unionExtents,null)},_setDiscreteColorAxisScale:function(e){var t=e.scheme()(e.domainValues());
this._describeScale(e,t),e.setScale(t,!0),this._onColorAxisScaleSet(e)},_setNumericColorAxisScale:function(t){
if(1!==t.dataCells.length)throw e.error("Can't handle multiple continuous datacells in color axis.");
this._warnSingleContinuousValueRole(t.role);var i=this.visiblePlotData(t.dataCell.plot,t.dataCell.dataPartValue),n=t.option("NormByCategory"),a={
type:t.option("ScaleType"),colors:t.option("Colors")().range(),colorDomain:t.option("Domain"),
colorMin:t.option("Min"),colorMax:t.option("Max"),colorMissing:t.option("Missing"),
data:i,colorDimension:t.role.lastDimensionName(),normPerBaseCategory:n};if(n)t.scalesByCateg=d(a);else{
var r=f(a);this._describeScale(t,r),t.setScale(r)}this._onColorAxisScaleSet(t)},_onColorAxisScaleSet:function(e){
switch(e.index){case 0:this.colors=e.scheme();break;case 1:this._allowV1SecondAxis&&(this.secondAxisColor=e.scheme());
}},_getRoleColorScale:function(t){return e.lazy(e.lazy(this,"_rolesColorScale"),t.id,this._createRoleColorScale,this);
},_createRoleColorScale:function(t){function i(t){var i=""+t;e.hasOwnProp.call(r,i)||(r[i]=a(t));
}var n,a,r={};return this.axesByType.color.forEach(function(e){var r=e.role;(r&&e.scale&&"discrete"===e.scaleType&&r.grouping.id===t&&0===e.index||e.option.isSpecified("Colors")||e.option.isSpecified("Map"))&&(a=e.scale,
n||(n=a),e.domainValues().forEach(i))},this),n?(a=function(t){var i=""+t;return e.hasOwnProp.call(r,i)?r[i]:r[i]=n(t);
},e.copy(a,n),a):X.createColorScheme()()},_onLaidOut:function(){}}),X.BaseChart.add({
basePanel:null,contentPanel:null,titlePanel:null,legendPanel:null,_multiChartPanel:null,
_initChartPanels:function(e){this._initBasePanel(),this._initTitlePanel();var t=this._initLegendPanel(),i=e&&!this.parent;
if(i&&this._initMultiChartPanel(),t&&this._initLegendScenes(t),!i){var n=this.options;
this.contentPanel=this._createContentPanel(this.basePanel,{margins:e?n.smallContentMargins:n.contentMargins,
paddings:e?n.smallContentPaddings:n.contentPaddings}),this._createContent(this.contentPanel,{
clickAction:n.clickAction,doubleClickAction:n.doubleClickAction})}},_initBasePanel:function(){
var e=this.parent;this.basePanel=new X.BasePanel(this,e&&e._multiChartPanel,{margins:this.margins,
paddings:this.paddings,size:{width:this.width,height:this.height}})},_initTitlePanel:function(){
var t=this.options,i=t.title,n=t.titleVisible;if(null==n&&(n=!e.empty(i)),n){var a,r=this.titlePanel;
r&&this._preserveLayout&&(a=r._getLayoutState()),this.titlePanel=new X.TitlePanel(this,this.basePanel,{
title:i,font:t.titleFont,anchor:t.titlePosition,align:t.titleAlign,alignTo:t.titleAlignTo,
offset:t.titleOffset,keepInBounds:t.titleKeepInBounds,margins:a?a.margins:t.titleMargins,
paddings:a?a.paddings:t.titlePaddings,titleSize:a?a.size:t.titleSize,titleSizeMax:t.titleSizeMax
})}},_initLegendPanel:function(){var t=this.options,i=t.legendAreaVisible;if(null==i&&(i=t.legend),
i){var n,a=new X.visual.Legend(this,"legend",0),r=this.legendPanel;return r&&this._preserveLayout&&(n=r._getLayoutState()),
this.legendPanel=new X.LegendPanel(this,this.basePanel,{anchor:a.option("Position"),
align:a.option("Align"),alignTo:t.legendAlignTo,offset:t.legendOffset,keepInBounds:t.legendKeepInBounds,
size:n?n.size:a.option("Size"),margins:n?n.margins:a.option("Margins"),paddings:n?n.paddings:a.option("Paddings"),
sizeMax:a.option("SizeMax"),font:a.option("Font"),scenes:e.getPath(t,"legend.scenes"),
textMargin:t.legendTextMargin,itemPadding:t.legendItemPadding,itemSize:a.option("ItemSize"),
itemCountMax:a.option("ItemCountMax"),overflow:a.option("Overflow"),markerSize:t.legendMarkerSize
})}},_getLegendRootScene:function(){return this.legendPanel&&this.legendPanel._getRootScene();
},_initMultiChartPanel:function(){var e=this.basePanel,t=this.options;this.contentPanel=this._multiChartPanel=new X.MultiChartPanel(this,e,{
margins:t.contentMargins,paddings:t.contentPaddings}),this._multiChartPanel.createSmallCharts(),
e._children.unshift(e._children.pop())},_coordinateSmallChartsLayout:function(){},
_registerInitLegendScenes:function(t){e.array.lazy(this,"_initLegendScenesHandlers").push(t);
},_initLegendScenes:function(t){this._initLegendScenesHandlers&&this._initLegendScenesHandlers.forEach(function(e){
e(t)});var i=this.axesByType.color;if(i){var n,a=this._getDataPartDimName(),r=0,s=function(){
return n||(n=t._getRootScene())};i.forEach(function(t){var i;if(t.option("LegendVisible")&&t.isBound()&&t.isDiscrete()&&(i=t.dataCells.filter(function(e){
return e.legendVisible()})).length){var n,o=t.scale,l=t.domainData(),u=a&&e.query(i).uniqueIndex(function(e){
return e.dataPartValue});n=s().createGroup({source:l,colorAxis:t,legendBaseIndex:r
}),t.domainItems(l).forEach(function(i){if(a){var r=i.dimensions(a).atoms().some(function(t){
return e.hasOwn(u,t.value)});if(!r)return}var s=n.createItem({source:i}),l=t.domainItemValue(i);
s.color=o(l)}),r+=t.dataCells.length}})}},_createContentPanel:function(e,t){return new X.ContentPanel(this,e,{
margins:t.margins,paddings:t.paddings})},_createContent:function(e,t){var i=0;this.plotList.forEach(function(n){
this._createPlotPanel(n,e,t,i),i++},this)},_createPlotPanel:function(t,i,n){var a=X.PlotPanel.getClass(t.type);
if(!a)throw e.error.invalidOperation("There is no registered panel class for plot type '{0}'.",[t.type]);
var r=Object.create(n);if(this._preserveLayout){var s=this._preservedPlotsLayoutInfo[t.id];
r.size=s.size,r.paddings=s.paddings,r.margins=s.margins}var o=new a(this,i,t,r),l=t.name,u=this.plotPanels;
u[t.id]=o,l&&(u[l]=o),t.globalIndex||(u.main=o),this.plotPanelList.push(o)}}),X.BaseChart.add({
_updateSelectionSuspendCount:0,_lastSelectedDatums:null,clearSelections:function(){
return this.data.owner.clearSelected()&&this.updateSelections(),this},_updatingSelections:function(e,t){
this._suspendSelectionUpdate();try{e.call(t||this)}finally{this._resumeSelectionUpdate();
}},_suspendSelectionUpdate:function(){this===this.root?this._updateSelectionSuspendCount++:this.root._suspendSelectionUpdate();
},_resumeSelectionUpdate:function(){this===this.root?this._updateSelectionSuspendCount>0&&!--this._updateSelectionSuspendCount&&this.updateSelections():this.root._resumeSelectionUpdate();
},renderInteractive:function(){return this.useTextMeasureCache(function(){this.basePanel.renderInteractive();
},this),this},updateSelections:function(t){if(this===this.root){if(this._inUpdateSelections||this._updateSelectionSuspendCount)return this;
var i=this._calcSelectedChangedDatums();if(!i)return this;X.removeTipsyLegends(),
this._inUpdateSelections=!0;try{var n=this.options.selectionChangedAction;if(n){var a=this.data.selectedDatums(),r=i.values();
n.call(this.basePanel.context(),a,r)}e.get(t,"render",!0)&&this.useTextMeasureCache(function(){
this.basePanel.renderInteractive()},this)}finally{this._inUpdateSelections=!1}}else this.root.updateSelections(t);
return this},_calcSelectedChangedDatums:function(){if(this.data){var e,t=this.data.selectedDatumMap(),i=this._lastSelectedDatums;
if(i){if(e=i.symmetricDifference(t),!e.count)return}else{if(!t.count)return;e=t.clone();
}return this._lastSelectedDatums=t,e}},_onUserSelection:function(e){if(!e||!e.length)return e;
if(this===this.root){var t=this.options.userSelectionAction;return t?t.call(this.basePanel.context(),e)||e:e;
}return this.root._onUserSelection(e)}}),X.BaseChart.add({_processExtensionPoints:function(){
this.parent?this._components=this.parent._components:(this._processExtensionPointsIn(this.options),
this._processExtensionPointsIn(this.options.extensionPoints))},_processExtensionPointsIn:function(t,i,n){
var r,s,o,l,u=this._components||(this._components={});for(r in t)l=r.indexOf("_"),
l>0?(s=r.substring(0,l),o=r.substring(l+1),s&&o&&(i&&(s=a(s,i)),(e.getOwn(u,s)||(u[s]=new e.OrderedMap)).add(o,t[r]))):n&&(s=i?a(r,i):r,
n(t[r],s,r))},extend:function(t,i,n){e.array.is(i)?i.forEach(function(e){this._extendCore(t,e,n);
},this):this._extendCore(t,i,n)},_extendCore:function(t,i,n){if(t){var a=e.getOwn(this._components,i);
if(a){t.borderPanel&&(t=t.borderPanel);var r=e.debug>=3?[]:null,s=e.get(n,"constOnly",!1),o=t.wrap,l={
tag:X.extensionTag},u=t instanceof ee,c=u&&(o||s),h=function(i,n){if(null!=i){var a=typeof i;
if("object"===a){if("svg"===n||"css"===n){var r=t.propertyValue(n);r&&(i=e.copy(r,i));
}else if(i instanceof Array)return i.map(function(e){return h(e,n)})}else if(c&&"function"===a){
if(s)return;"add"!==n&&"call"!==n&&(i=o.call(t,i,n))}}return i},d=function(e,i){return i instanceof Array?e.apply(t,i):e.call(t,i);
};a.forEach(function(i,n){if(t.isLocked&&t.isLocked(n))r&&r.push(n+": locked extension point!");else if(t.isIntercepted&&t.isIntercepted(n))r&&r.push(n+":"+e.describe(i)+" (controlled)");else if(r&&r.push(n+": "+e.describe(i)),
i=h(i,n),void 0!==i){var a=t[n];"function"==typeof a?u&&t.properties[n]?t.intercept(n,i,l):i instanceof Array?i.forEach(function(e){
d(a,e)}):d(a,i):t[n]=i}}),r&&(r.length?this.log("Applying Extension Points for: '"+i+"'\n	* "+r.join("\n	* ")):e.debug>=5&&this.log("No Extension Points for: '"+i+"'"));
}}else e.debug>=4&&this.log("Applying Extension Points for: '"+i+"' (target mark does not exist)");
},_getExtension:function(t,i){var n;if(e.array.is(t)){for(var a,r=t.length-1;r>=0;)if(n=e.getOwn(this._components,t[r--]),
n&&void 0!==(a=n.get(i)))return a}else if(n=e.getOwn(this._components,t))return n.get(i);
},_getComponentExtensions:function(t){return e.getOwn(this._components,t)},_getConstantExtension:function(t,i){
var n=this._getExtension(t,i);return e.fun.is(n)?void 0:n}}),X.BaseChart.add({activeScene:function(){
return this._activeScene||null},_setActiveScene:function(e){if(this.parent)return this.root._setActiveScene(e);
e?e.ownerScene&&(e=e.ownerScene):e=null;var t=this.activeScene();if(e===t)return!1;
var i=new X.visual.Context(this.basePanel),n=this._acting("active:change",function(){
return this.chart._activeSceneChange(this)});return n.from=t,n.to=e,i.event=n,n.trigger(i,[]),
!0},_activeSceneChange:function(e){this.useTextMeasureCache(function(){var t=e.event.from,i=e.event.to;
t&&t._clearActive(),(this._activeScene=i)&&i._setActive(!0),!t||i&&i.root===t.root||t.panel().renderInteractive(),
i&&i.panel().renderInteractive()})},_on:function(e,t){"active:change"===e&&(t.role||t.dims)&&B(e,t);
}}),e("pvc.visual.MultiChart",X.visual.OptionsBase.extend({init:function(e){this.base(e,"multiChart",0,{
byV1:!1,byNaked:!1})},options:{Max:{resolve:"_resolveFull",cast:e.number.toPositive,
value:1/0},ColumnsMax:{resolve:"_resolveFull",cast:e.number.toPositive,value:3},SingleRowFillsHeight:{
resolve:"_resolveFull",cast:Boolean,value:!0},SingleColFillsHeight:{resolve:"_resolveFull",
cast:Boolean,value:!0},Overflow:{resolve:"_resolveFull",cast:X.parseMultiChartOverflow,
value:"grow"}}})),e.type("pvc.MultiChartPanel",X.ContentPanel).add({createSmallCharts:function(){
var t,i=this.chart,n=i._multiInfo;if(n&&(t=n.count)){var a,r,s,o=this._getCoordinatedRootAxesByScopeType();
o&&(a={},r=function(t,i,n){var r=e.array.lazy(a,i);e.array.lazy(r,n).push(t)},s=function(e){
o.row&&r(e,"row",e.smallRowIndex),o.column&&r(e,"column",e.smallColIndex),o.global&&r(e,"global",0);
});for(var l=this._buildSmallChartsBaseOptions(),u=i.constructor,c=n.smallDatas,h=n.colCount,d=0;t>d;d++){
var f=c[d],v=d%h,p=Math.floor(d/h),g=e.set(Object.create(l),"smallColIndex",v,"smallRowIndex",p,"title",f.absLabel,"data",f),m=new u(g);
o?(m._createPhase1(),s(m)):m._create()}if(o){var b=this;e.eachOwn(o,function(e,t){
e.forEach(function(e){a[t].forEach(function(t){b._coordinateScopeAxes(e.id,t)})});
}),i.children.forEach(function(e){e._createPhase2()})}n.coordScopesByType=a}},_getCoordinatedRootAxesByScopeType:function(){
var t=!1,i=e.query(this.chart.axesList).multipleIndex(function(e){if("discrete"!==e.scaleType&&e.option.isDefined("DomainScope")){
var i=e.option("DomainScope");if("cell"!==i)return t=!0,i}});return t?i:null},_coordinateScopeAxes:function(t,i){
var n=e.query(i).select(function(e){var i=e.axes[t].scale;if(!i.isNull){var n=i.domain();
return{min:n[0],max:n[1]}}}).reduce(X.unionExtents,null);n&&i.forEach(function(e){
var i=e.axes[t],a=i.scale;a.isNull||(a.domain(n.min,n.max),i.setScale(a))})},_buildSmallChartsBaseOptions:function(){
var t=this.chart,i=t.options;return e.set(Object.create(i),"parent",t,"legendAreaVisible",!1,"titleVisible",i.smallTitleVisible,"titleFont",i.smallTitleFont,"titlePosition",i.smallTitlePosition,"titleAlign",i.smallTitleAlign,"titleAlignTo",i.smallTitleAlignTo,"titleOffset",i.smallTitleOffset,"titleKeepInBounds",i.smallTitleKeepInBounds,"titleMargins",i.smallTitleMargins,"titlePaddings",i.smallTitlePaddings,"titleSize",i.smallTitleSize,"titleSizeMax",i.smallTitleSizeMax);
},_calcLayout:function(t){var i=this.chart,n=i._multiInfo;if(n){var a=i.multiOptions.option,r=i.smallOptions.option,s=t.clientSize,o=t.previous,l=o?o.initialClientWidth:s.width,u=o?o.initialClientHeight:s.height,c=r("Width");
null!=c&&(c=ne.resolve(c,l));var h=r("Height");null!=h&&(h=ne.resolve(h,u));var d=r("AspectRatio"),f=n.rowCount,v=n.colCount;
null==c&&(isFinite(n.colsMax)?c=s.width/v:(null==h&&(h=u),c=d*h)),null==h&&(h=1===f&&a("SingleRowFillsHeight")||1===v&&a("SingleColFillsHeight")?u:c/d);
var p=c*v,g=h*f;if(!i._isMultiChartOverflowClipRetry)switch(i._isMultiChartOverflowClip=!1,
a("Overflow")){case"fit":p>l&&(p=l,c=p/v),g>u&&(g=u,h=g/f);break;case"clip":var m=v,b=f,x=p>l;
x&&(m=Math.floor(l/c));var y=g>u;y&&(b=Math.floor(u/h)),(y||x)&&(i._isMultiChartOverflowClip=!0,
i._clippedMultiChartRowsMax=b,i._clippedMultiChartColsMax=m)}return e.set(t,"initialClientWidth",l,"initialClientHeight",u,"width",c,"height",h),
{width:p,height:Math.max(s.height,g)}}},_createCore:function(t){var i=this.chart;!i._isMultiChartOverflowClip||e.assert("Overflow & Clip condition should be resolved.");
var n=i._multiInfo;if(n){var a=i.smallOptions.option,r=a("Margins"),s=a("Paddings");
i.children.forEach(function(e){e._setSmallLayout({left:e.smallColIndex*t.width,top:e.smallRowIndex*t.height,
width:t.width,height:t.height,margins:this._buildSmallMargins(e,r,n),paddings:s});
},this);var o=n.coordScopesByType;o&&i._coordinateSmallChartsLayout(o),this.base(t);
}},_buildSmallMargins:function(e,t,i){var n=i.colCount-1,a=i.rowCount-1,r=e.smallColIndex,s=e.smallRowIndex,o={};
return r>0&&(o.left=t.left),n>r&&(o.right=t.right),s>0&&(o.top=t.top),a>s&&(o.bottom=t.bottom),
o}}),e("pvc.visual.SmallChart",X.visual.OptionsBase.extend({init:function(e){this.base(e,"small",0,{
byV1:!1,byNaked:!1})},options:{Width:{resolve:"_resolveFull",cast:ne.parse,value:null
},Height:{resolve:"_resolveFull",cast:ne.parse,value:null},AspectRatio:{resolve:"_resolveFull",
cast:e.number.toPositive,getDefault:function(){return this.chart instanceof X.PieChart?10/7:5/4;
}},Margins:{resolve:"_resolveFull",cast:ae.as,value:new ae(new ne(.02))},Paddings:{
resolve:"_resolveFull",cast:ae.as,value:0}}})),ee.prototype.getSign=function(){return this.sign||V(this);
},ee.prototype.getScene=function(){return this.getSign().scene()},ee.prototype.getContext=function(){
return this.getSign().context()},ee.prototype.preBuildInstance=function(e){var t=e.data;
t instanceof X.visual.Scene&&y.call(t,this.renderId())},e("pvc.visual.BasicSign",e.Object.extend({
init:function(t,i){this.chart=t.chart,this.panel=t,!i.sign||e.assert("Mark already has an attached Sign."),
this.pvMark=i,i.sign=this},methods:{compatVersion:function(){return this.chart.compatVersion();
},localProperty:function(e,t){return this.pvMark.localProperty(e,t),this},lock:function(e,t){
return this.lockMark(e,this._bindWhenFun(t,e))},optional:function(e,t,i){return this.optionalMark(e,this._bindWhenFun(t,e),i);
},lockMark:function(e,t){return this.pvMark.lock(e,t),this},optionalMark:function(e,t,i){
return this.pvMark[e](t,i),this},delegate:function(e,t){return this.pvMark.delegate(e,t);
},delegateExtension:function(e){return this.pvMark.delegate(e,X.extensionTag)},delegateNotExtension:function(e){
return this.pvMark.delegateExcept(e,X.extensionTag)},hasDelegate:function(e){return this.pvMark.hasDelegate(e);
},_createPropInterceptor:function(e,t){var i=this;return function(){var n=this.sign;
return n&&n===i?t.apply(i,arguments):i._getPvSceneProp(e,this.index)}},_getPvSceneProp:function(t,i){
var n=this.pvMark,a=n.scene;if(a){var r=n.hasOwnProperty("index")?n.index:Math.min(i,a.length-1);
if(null!=r)return a[r][t]}throw e.error.operationInvalid("Cannot evaluate inherited property.");
},_bindWhenFun:function(t,i){if(e.fun.is(t)){var n=this;return n._createPropInterceptor(i,function(e){
return t.call(n,e)})}return t},_lockDynamic:function(e,t){var i=this;return i.lockMark(e,i._createPropInterceptor(e,function(e){
return i[t].call(i,e)}))},scene:function(){var e=this.pvMark.instance(),t=e&&e.data;
return t instanceof X.visual.Scene?t:null},instanceState:function(e){return this.pvMark.instanceState(e);
},context:function(e,t){var i;return t||!(i=this.instanceState())?this._createContext(e):i.cccContext||(i.cccContext=this._createContext(e));
},_createContext:function(e){return new X.visual.Context(this.panel,this.pvMark,e);
}}})),e("pvc.visual.Sign",X.visual.BasicSign.extend([{init:function(t,i,n){var a=this;
a.base(t,i,n),a._ibits=t.ibits();var r=e.get(n,"extensionId");if(null!=r&&(a.extensionAbsIds=e.array.to(t._makeExtensionAbsId(r))),
a.isActiveSeriesAware=e.get(n,"activeSeriesAware",!0),a.isActiveSeriesAware){var s=t.visualRoles,o=s&&s.series;
o&&o.isBound()||(a.isActiveSeriesAware=!1)}i.wrapper(e.get(n,"wrapper")||a.createDefaultWrapper()),
e.get(n,"freeColor",!0)||a._bindProperty("fillStyle","fillColor","color")._bindProperty("strokeStyle","strokeColor","color");
},postInit:function(e,t,i){this._addInteractive(i),e._addSign(this)},methods:[X.visual.Interactive],
"type.methods":{properties:function(t){var i;for(var n in t)void 0!==(i=t[n])&&(isNaN(+n)?this.property(n):e.string.is(i)&&this.property(i));
return this},property:e.configurable(!1,function(t){var i=e.firstUpperCase(t),n="base"+i,a="default"+i,r="normal"+i,s="interactive"+i,o={};
return o[t]=function(e,t){this._finished=!1,this._arg=t;var i=this[n](e,t);return null==i?null:this._finished?i:(i=this[this.showsInteraction()&&e.anyInteraction()?s:r](e,i,t),
this._arg=null,i)},o[n]=function(){return this.delegateExtension()},o[a]=function(){},
o[r]=function(e,t){return t},o[s]=function(e,t){return t},this.methods(o)})}},{properties:["color"]
},{methods:{extensionAbsIds:null,_processedIbits:!1,ibits:function(){var e=this._ibits,t=this.pvMark;
if(!this._processedIbits){this._processedIbits=!0;var i=this.extensionAbsIds;i&&i.forEach(function(e){
var i=this.panel._getExtensionAbs(e,"ibits");null!=i&&t.ibits(i),i=this.panel._getExtensionAbs(e,"imask"),
null!=i&&t.imask(i)},this)}var n=t.imask();if(n){var a=n&t.ibits(),r=~n|a;e|=a,e&=r;
}return e},createDefaultWrapper:function(){var e=this;return function(t){return function(i){
return t.call(e.context(),i)}}},anyInteraction:function(e){return e.anyInteraction();
},finished:function(e){return this._finished=!0,e},applyExtensions:function(){if(!this._extended){
this._extended=!0;var e=this.extensionAbsIds;e&&e.forEach(function(e){this.panel.extendAbs(this.pvMark,e);
},this)}return this},intercept:function(e,t){var i=this._createPropInterceptor(e,t);
return this._intercept(e,i)},lockDimensions:function(){return this.pvMark.lock("left").lock("right").lock("top").lock("bottom").lock("width").lock("height"),
this},_extensionKeyArgs:{tag:X.extensionTag},_bindProperty:function(t,i,n){var a=this;
n||(n=i);var r="default"+e.firstUpperCase(n);if(e.fun.is(a[r])&&!a.pvMark.hasDelegateValue(t,X.extensionTag)){
var s=function(e){return a[r](e,a._arg)};a.pvMark.intercept(t,s,a._extensionKeyArgs);
}var o=this._createPropInterceptor(t,function(e){return a[i](e)});return a._intercept(t,o);
},_intercept:function(t,i){var n=this.pvMark,a=this.extensionAbsIds;return a&&e.query(a).select(function(e){
return this.panel._getExtensionAbs(e,t)},this).where(e.notUndef).each(function(e){
e=n.wrap(e,t),n.intercept(t,e,this._extensionKeyArgs)},this),(n._intercepted||(n._intercepted={}))[t]=!0,
n.intercept(t,i),this},_addInteractive:function(t){var i=this,n=e.get;if(i.interactive()){
var a=i.ibits(),r=X.visual.Interactive;n(t,"noTooltip")&&(a&=~r.ShowsTooltip),n(t,"noHover")&&(a&=~r.Hoverable),
n(t,"noClick")&&(a&=~r.Clickable),n(t,"noDoubleClick")&&(a&=~r.DoubleClickable),n(t,"noSelect")?a&=~r.SelectableAny:this.selectable()&&(n(t,"noClickSelect")&&(a&=~r.SelectableByClick),
n(t,"noRubberSelect")&&(a&=~r.SelectableByRubberband)),i.showsInteraction()&&(n(t,"showsInteraction")===!1&&(a&=~r.ShowsInteraction),
i.showsActivity()&&n(t,"showsActivity")===!1&&(a&=~r.ShowsActivity),i.showsSelection()&&n(t,"showsSelection")===!1&&(a&=~r.ShowsSelection)),
i._ibits=a}i.handlesEvents()?(i.showsTooltip()&&i._addPropTooltip(n(t,"tooltipArgs")),
i.hoverable()&&i._addPropHoverable(),i.handlesClickEvent()&&i._addPropClick(),i.doubleClickable()&&i._addPropDoubleClick()):i.pvMark.events("none");
},fillColor:function(e){return this.color(e,"fill")},strokeColor:function(e){return this.color(e,"stroke");
},defaultColor:function(e){return this.scaleColor(e)},scaleColor:function(e){return this.defaultColorSceneScale()(e);
},dimColor:function(e,t){return"text"===t?X.toGrayScale(e,-.75,null,null):X.toGrayScale(e,-.3,null,null);
},defaultColorSceneScale:function(){return e.lazy(this,"_defaultColorSceneScale",this._initDefColorScale,this);
},_initDefColorScale:function(){var t=this.panel.axes.color;return t?t.sceneScale({
sceneVarName:"color"}):e.fun.constant(X.defaultColor)},mayShowActive:function(e,t){
if(!this.showsActivity())return!1;var i;return e.isActive||((i=e.ownerScene)&&i!==e?i.isActive:!1)||!t&&this.isActiveSeriesAware&&e.isActiveSeries()||e.isActiveDatum();
},mayShowNotAmongSelected:function(e){return this.mayShowAnySelected(e)&&!e.isSelected();
},mayShowSelected:function(e){return this.showsSelection()&&e.isSelected()},mayShowAnySelected:function(e){
return this.showsSelection()&&e.anySelected()},_addPropTooltip:function(t){if(!this.pvMark.tooltipOptions){
var i=this.panel._requireTipsy(),n=this.chart._pointingOptions,a=e.create(this.chart._tooltipOptions,e.get(t,"options"));
a.isLazy=e.get(t,"isLazy",!0);var r=e.get(t,"buildTooltip")||this._getTooltipFormatter(a);
if(r){var s="near"===n.mode,o=e.get(t,"tipsyEvent")||(s?"point":"mouseover");this.pvMark.localProperty("tooltip").tooltip(this._createTooltipProp(r,a.isLazy)).title(e.fun.constant("")).ensureEvents().event(o,i).tooltipOptions=a;
}}},_getTooltipFormatter:function(e){return this.panel._getTooltipFormatter(e)},_isTooltipEnabled:function(){
return this.panel._isTooltipEnabled()},_createTooltipProp:function(e,t){var i,n=this;
return i=t?function(t){var i,a=n.context(t,!0);return function(){return a&&(i=e(a),
a=null),i}}:function(t){var i=n.context(t);return e(i)},function(e){return e&&e.showsTooltip()?i(e):void 0;
}},_addPropHoverable:function(){var e,i,n=this.chart._pointingOptions,a=this.panel;
"near"===n.mode?(e="point",i="unpoint"):(e="mouseover",i="mouseout"),this.pvMark.ensureEvents().event(e,function(e){
!e.hoverable()||a.selectingByRubberband()||a.animating()||e.setActive(!0)}).event(i,function(e){
!e.hoverable()||a.selectingByRubberband()||a.animating()||t.event&&t.event.isPointSwitch||e.clearActive();
}),this.pvMark._hasHoverable=!0},_ignoreClicks:0,_propCursorClick:function(e){var t=this.ibits()&e.ibits(),i=X.visual.Interactive;
return t&i.HandlesClickEvent||t&i.DoubleClickable?"pointer":null},_addPropClick:function(){
var e=this;e.pvMark.cursor(e._propCursorClick.bind(e)).ensureEvents().event("click",e._handleClick.bind(e));
},_addPropDoubleClick:function(){var e=this;e.pvMark.cursor(e._propCursorClick.bind(e)).ensureEvents().event("dblclick",e._handleDoubleClick.bind(e));
},_handleClick:function(){var e=this,i=e.pvMark,n=i.instance(),a=n.data,r=e.doubleClickable()&&a.doubleClickable();
if(r){var s=i.scene,o=i.index,l=t.event;window.setTimeout(function(){if(e._ignoreClicks)e._ignoreClicks--;else try{
t.event=l,i.context(s,o,function(){e._handleClickCore()})}catch(n){t.error(n)}finally{
delete t.event}},e.chart.options.doubleClickMaxDelay||300)}else e._ignoreClicks?e._ignoreClicks--:e._handleClickCore();
},_handleClickCore:function(){this._onClick(this.context())},_handleDoubleClick:function(){
var e=this,t=e.scene();t&&t.doubleClickable()&&(e._ignoreClicks=2,e._onDoubleClick(e.context(t)));
},_onClick:function(e){e.click()},_onDoubleClick:function(e){e.doubleClick()}}}])),
X.finished=function(t){return void 0===t?function(){return this.finished(this.delegate());
}:e.fun.is(t)?function(){return(this.finished?this:this.getSign()).finished(t.apply(this,arguments));
}:function(){return(this.finished?this:this.getSign()).finished(t)}},e("pvc.visual.Panel",X.visual.Sign.extend({
init:function(i,n,a){var r=e.get(a,"panel");if(!r){var s=e.get(a,"panelType")||t.Panel;
r=n.add(s)}this.base(i,r,a)},methods:{_addInteractive:function(t){var i=!0;t=e.setDefaults(t,"noSelect",i,"noHover",i,"noTooltip",i,"noClick",i,"noDoubleClick",i),
this.base(t)}}})),e("pvc.visual.Label",X.visual.Sign.extend({init:function(e,i,n){
var a=i.add(t.Label);this.base(e,a,n)},methods:{_addInteractive:function(t){var i=!0;
t=e.setDefaults(t,"noSelect",i,"noHover",i,"noTooltip",i,"noClick",i,"noDoubleClick",i,"showsInteraction",!1),
this.base(t)},defaultColor:e.fun.constant(t.Color.names.black)}}));var ye=t.Color.names.white;
e("pvc.visual.ValueLabel",X.visual.Label.extend({init:function(t,i,n){this.valuesFont=e.get(n,"valuesFont")||t.valuesFont,
this.valuesMask=e.get(n,"valuesMask")||t.valuesMask,this.valuesOptimizeLegibility=e.get(n,"valuesOptimizeLegibility",t.valuesOptimizeLegibility),
this.valuesOverflow=e.get(n,"valuesOverflow",t.valuesOverflow),this.hideOverflowed="hide"===this.valuesOverflow,
this.trimOverflowed=!this.hideOverflowed&&"trim"===this.valuesOverflow,this.hideOrTrimOverflowed=this.hideOverflowed||this.trimOverflowed;
var a=e.get(n,"noAnchor",!1)?i:i.anchor(t.valuesAnchor);n&&null==n.extensionId&&(n.extensionId="label"),
this.base(t,a,n),this.pvMark.font(this.valuesFont),this._bindProperty("text","text")._bindProperty("textStyle","textColor","color").intercept("visible",this.visible);
},properties:["text","textStyle"],type:{methods:{maybeCreate:function(e,t,i){return e.valuesVisible&&e.valuesMask?new X.visual.ValueLabel(e,t,i):null;
},isNeeded:function(e){return e.valuesVisible&&!!e.valuesMask}}},methods:{_addInteractive:function(t){
t=e.setDefaults(t,"showsInteraction",!0,"noSelect",!0,"noTooltip",!0,"noClick",!0,"noDoubleClick",!0,"noHover",!0),
this.base(t)},visible:function(e){var t=this.getAnchoredToMark();if(t&&!t.visible())return!1;
if(!this.hideOrTrimOverflowed)return this.delegate(!0);var i;if(this.hasDelegate(X.extensionTag)&&(i=this.delegateExtension(),
null!=i))return i;if(i=this.delegateNotExtension(),i===!1)return!1;if(e.isActive&&this.showsActivity())return!0;
var n=this.textFitInfo(e);return!(n&&n.hide)},textFitInfo:function(e){var t=e.renderState,i=t.textFitInfo;
return void 0!==i?i:t.textFitInfo=this.calcTextFitInfo(e,this._evalBaseText())||null;
},calcTextFitInfo:function(){return null},_evalBaseText:function(){var e=this.pvMark,t=e.binds.properties.text.proto;
return e.evalInPropertyContext(this.baseText.bind(this),t)},baseText:function(e){
var t=e.renderState,i=t.baseText;return void 0!==i?i:this.base(e)},defaultText:function(e){
return e.format(this.valuesMask)},normalText:function(e,t){var i;return this.trimOverflowed&&(i=this.textFitInfo(e))?this.trimText(e,t,i):t;
},interactiveText:function(e,t){var i;return!this.trimOverflowed||e.isActive&&this.showsActivity()||!(i=this.textFitInfo(e))?t:this.trimText(e,t,i);
},trimText:function(e,t,i){var n=i&&i.widthMax;return null!=n?X.text.trimToWidthB(n,t,this.pvMark.font(),".."):t;
},textColor:function(e){return this.color(e,"text")},backgroundColor:function(t,i){
var n=this.instanceState();if(!n)return this.calcBackgroundColor(t,i);var a=e.lazy(n,"cccBgColorCache");
return e.getOwn(a,i)||(a[i]=this.calcBackgroundColor(t,i))},calcBackgroundColor:function(e){
var t=this.getAnchoredToMark();if(t){var i=t.fillStyle();if(i&&i!==ye&&this.isAnchoredInside(e,t))return i;
}return ye},getAnchoredToMark:function(){return this.pvMark.target||this.pvMark.parent;
},isAnchoredInside:function(e,i){if(!i&&!(i=this.getAnchoredToMark()))return!1;var n,a=this.pvMark,r=a.text(),s=t.Text.measure(r,a.font()),o=a.left(),l=a.top();
null==o&&(n=a.parent,o=n.width()-(a.right()||0)),null==l&&(n||(n=a.parent),l=n.height()-(a.bottom()||0));
var u,c=t.Label.getPolygon(s.width,s.height,a.textAlign(),a.textBaseline(),a.textAngle(),a.textMargin()).center().plus(o,l);
return u=i===a.parent?new t.Shape.Rect(0,0,i.width(),i.height()):i.getShape(i.scene,i.index),
u.containsPoint(c)},maybeOptimizeColorLegibility:function(e,t,i){if(t&&this.valuesOptimizeLegibility){
var n=this.backgroundColor(e,i);if(n){var a=t.complementary(),r=t.contrastRatioTo(n),s=a.contrastRatioTo(n);
if(s>r)return a}}return t},normalColor:function(e,t,i){return this.maybeOptimizeColorLegibility(e,t,i);
},interactiveColor:function(e,t,i){return!this.mayShowActive(e)&&this.mayShowNotAmongSelected(e)?this.dimColor(t,i):this.maybeOptimizeColorLegibility(e,t,i);
}}})),e("pvc.visual.Dot",X.visual.Sign.extend({init:function(i,n,a){var r=n.add(t.Dot),s=e.get(a,"proto");
if(s&&r.extend(s),a=e.setDefaults(a,"freeColor",!1),this.base(i,r,a),!e.get(a,"freePosition",!1)){
var o=i.isOrientationVertical()?"left":"bottom",l=i.anchorOrtho(o);this._lockDynamic(o,"x")._lockDynamic(l,"y");
}this.pvMark.shapeRadius(function(e){return Math.sqrt(this.sign.defaultSize(e))}),
this._bindProperty("shape","shape")._bindProperty("shapeRadius","radius")._bindProperty("shapeSize","size"),
this.optional("strokeDasharray",void 0).optional("lineWidth",1.5)},properties:["size","shape"],
methods:{y:e.fun.constant(0),x:e.fun.constant(0),radius:function(){var e=this.instanceState();
return this._finished=!1,e.cccRadius=this.delegateExtension(),e.cccRadiusFinished=this._finished,
null},baseSize:function(t){this.pvMark.shapeRadius();var i=this.instanceState(),n=i.cccRadius;
return null!=n?(this._finished=i.cccRadiusFinished,e.sqr(n)):this.base(t)},defaultSize:e.fun.constant(12),
interactiveSize:function(e,t){return this.mayShowActive(e,!0)?2*Math.max(t,5):t},
interactiveColor:function(e,t,i){if(this.mayShowActive(e,!0)){if("stroke"===i)return t.brighter(1);
}else if(this.mayShowNotAmongSelected(e)){if(this.mayShowActive(e))return t.alpha(.8);
switch(i){case"fill":return this.dimColor(t,i);case"stroke":return t.alpha(.45)}}
return this.base(e,t,i)}}})),e("pvc.visual.DotSizeColor",X.visual.Dot.extend({init:function(e,i,n){
if(this.base(e,i,n),this._bindProperty("lineWidth","strokeWidth").intercept("visible",function(e){
if(!this.canShow(e))return!1;var t=this.delegateExtension();return null==t?this.defaultVisible(e):t;
}),this._initColor(),this._initSize(),this.isSizeBound){var a=e.axes.size;if(a.scaleUsesAbs()){
this.isSizeAbs=!0;var r=this._sceneDefColor;this._sceneDefColor=function(e,i){return"stroke"===i&&e.vars.size.value<0?t.Color.names.black:r.call(this,e,i);
},this.pvMark.lineCap("round").strokeDasharray(function(e){return e.vars.size.value<0?"dash":null;
})}}},properties:["strokeWidth"],methods:{isColorBound:!1,isColorDiscrete:!1,isSizeBound:!1,
isSizeAbs:!1,canShow:function(e){return!e.isIntermediate},defaultVisible:function(e){
return!e.isNull&&(!this.isSizeBound&&!this.isColorBound||this.isSizeBound&&null!=e.vars.size.value||this.isColorBound&&(this.isColorDiscrete||null!=e.vars.color.value));
},_initColor:function(){var t,i,n=this.panel,a=n.visualRoles.color;if(a){this.isColorDiscrete=a.isDiscrete();
var r=n.axes.color;a.isBound()?(this.isColorBound=!0,i=r.sceneScale({sceneVarName:"color"
})):r&&(t=r.option("Unbound"))}this._sceneDefColor=i||e.fun.constant(t||X.defaultColor);
},_initSize:function(){var t,i,n=this.panel,a=n.plot,r=a.option("Shape"),s=a.option("NullShape"),o=n.visualRoles.size;
if(o){var l=n.axes.size,u=l&&l.scale,c=!!u&&o.isBound();if(c){this.isSizeBound=!0;
var h=u.min+.05*(u.max-u.min);this.nullSizeShapeHasStrokeOnly="cross"===s,i=function(e){
return null!=e.vars.size.value?r:s},t=function(e){var t=e.vars.size.value;return null!=t?u(t):s?h:0;
}}}t||(i=e.fun.constant(r),t=function(e){return this.base(e)}),this._sceneDefSize=t,
this._sceneDefShape=i},defaultColor:function(e,t){return this._sceneDefColor(e,t);
},normalColor:function(e,t,i){return"stroke"===i?t.darker():this.base(e,t,i)},interactiveColor:function(e,t,i){
if(this.mayShowActive(e,!0))switch(i){case"fill":return this.isSizeBound?t.alpha(.75):t;
case"stroke":return t.darker()}else if(this.showsSelection()){var n=e.isSelected(),a=!n&&e.anySelected();
if(a){if(this.mayShowActive(e))return t.alpha(.8);switch(i){case"fill":return this.dimColor(t,i);
case"stroke":return t.alpha(.45)}}if(n&&h(t))return t.darker("stroke"===i?3:2)}return"stroke"===i?t.darker():t;
},defaultSize:function(e){return this._sceneDefSize(e)},defaultShape:function(e){
return this._sceneDefShape(e)},interactiveSize:function(t,i){if(!this.mayShowActive(t,!0))return i;
var n=Math.sqrt(i),a=Math.max(1,Math.min(1.1*n,2));return e.sqr(n+a)},defaultStrokeWidth:function(e){
return this.nullSizeShapeHasStrokeOnly&&null==e.vars.size.value?1.8:1},interactiveStrokeWidth:function(e,t){
return this.mayShowActive(e,!0)?2*t:this.mayShowSelected(e)?1.5*t:t}}})),t.LineInterm=function(){
t.Line.call(this)},t.LineInterm.prototype=t.extend(t.Line),t.LineInterm.prototype.getNearestInstanceToMouse=function(e,i){
var n=t.Line.prototype.getNearestInstanceToMouse.call(this,e,i),a=e[n];return a&&a.data&&a.data.isIntermediate&&n+1<e.length&&n++,
n},e("pvc.visual.Line",X.visual.Sign.extend({init:function(i,n,a){var r=n.add(t.LineInterm);
if(this.base(i,r,a),this.lock("segmented","smart").lock("antialias",!0),!e.get(a,"freePosition",!1)){
var s=i.isOrientationVertical()?"left":"bottom",o=i.anchorOrtho(s);this._lockDynamic(o,"y")._lockDynamic(s,"x");
}this._bindProperty("strokeStyle","strokeColor","color")._bindProperty("lineWidth","strokeWidth");
},properties:["strokeWidth"],methods:{_addInteractive:function(t){t=e.setDefaults(t,"noTooltip",!0),
this.base(t)},y:e.fun.constant(0),x:e.fun.constant(0),defaultStrokeWidth:e.fun.constant(1.5),
interactiveStrokeWidth:function(e,t){return this.mayShowActive(e)?2.5*Math.max(1,t):t;
},interactiveColor:function(e,i,n){return this.mayShowNotAmongSelected(e)?this.mayShowActive(e)?t.Color.names.darkgray.darker().darker():this.dimColor(i,n):this.base(e,i,n);
}}})),t.AreaInterm=function(){t.Area.call(this)},t.AreaInterm.prototype=t.extend(t.Area),
t.AreaInterm.prototype.getNearestInstanceToMouse=function(e,i){var n=t.Area.prototype.getNearestInstanceToMouse.call(this,e,i),a=e[n];
return a&&a.data&&a.data.isIntermediate&&n+1<e.length&&n++,n},e("pvc.visual.Area",X.visual.Sign.extend({
init:function(i,n,a){var r=n.add(t.AreaInterm);a||(a={}),a.freeColor=!0,this.base(i,r,a);
var s=e.get(a,"antialias",!0);if(this.lock("segmented","smart").lock("antialias",s),
!e.get(a,"freePosition",!1)){var o=i.isOrientationVertical()?"left":"bottom",l=i.anchorOrtho(o),u=i.anchorOrthoLength(l);
this._lockDynamic(o,"x")._lockDynamic(l,"y")._lockDynamic(u,"dy")}this._bindProperty("fillStyle","fillColor","color"),
this.lock("strokeStyle",null).lock("lineWidth",0)},methods:{_addInteractive:function(t){
t=e.setDefaults(t,"noTooltip",!0),this.base(t)},y:e.fun.constant(0),x:e.fun.constant(0),
dy:e.fun.constant(0),interactiveColor:function(e,t,i){return"fill"===i&&this.mayShowNotAmongSelected(e)?this.dimColor(t,i):this.base(e,t,i);
}}})),e("pvc.visual.Bar",X.visual.Sign.extend({init:function(i,n,a){var r=n.add(t.Bar);
a=e.setDefaults(a,"freeColor",!1),this.base(i,r,a),this.normalStroke=e.get(a,"normalStroke",!1),
this._bindProperty("lineWidth","strokeWidth")},properties:["strokeWidth"],methods:{
normalColor:function(e,t,i){return"stroke"!==i||this.normalStroke?t:null},interactiveColor:function(e,i,n){
if("stroke"===n){if(this.mayShowActive(e,!0))return i.brighter(1.3).alpha(.7);if(!this.normalStroke)return null;
if(this.mayShowNotAmongSelected(e))return this.mayShowActive(e)?t.Color.names.darkgray.darker().darker():this.dimColor(i,n);
if(this.mayShowActive(e))return i.brighter(1).alpha(.7)}else if("fill"===n){if(this.mayShowActive(e,!0))return i.brighter(.2).alpha(.8);
if(this.mayShowNotAmongSelected(e))return this.mayShowActive(e)?t.Color.names.darkgray.darker(2).alpha(.8):this.dimColor(i,n);
if(this.mayShowActive(e))return i.brighter(.2).alpha(.8)}return this.base(e,i,n)},
defaultStrokeWidth:function(){return.5},interactiveStrokeWidth:function(e,t){return this.mayShowActive(e,!0)?1.3*Math.max(1,t):t;
}}})),e("pvc.visual.Rule",X.visual.Sign.extend({init:function(i,n,a){var r=n.add(t.Rule);
r.pointingRadiusMax(2);var s=e.get(a,"proto");s&&r.extend(s),this.base(i,r,a),e.get(a,"freeStyle")||this._bindProperty("strokeStyle","strokeColor","color")._bindProperty("lineWidth","strokeWidth");
},properties:["strokeWidth"],methods:{_addInteractive:function(t){var i=!0;t=e.setDefaults(t,"noHover",i,"noSelect",i,"noTooltip",i,"noClick",i,"noDoubleClick",i,"showsInteraction",!1),
this.base(t)},defaultStrokeWidth:e.fun.constant(1),interactiveStrokeWidth:function(e,t){
return this.mayShowActive(e,!0)?2.2*Math.max(1,t):t},interactiveColor:function(e,t,i){
return e.datum&&!this.mayShowActive(e,!0)&&this.mayShowNotAmongSelected(e)?this.dimColor(t,i):this.base(e,t,i);
}}})),e.space("pvc.visual").discreteBandsLayout=N;var _e=e("pvc.visual.CartesianAxis",he.extend({
init:function(e,t,i,n){var a=e.options;this.orientation=_e.getOrientation(t,a.orientation),
this.orientedId=_e.getOrientedId(this.orientation,i),e._allowV1SecondAxis&&1===i&&(this.v1SecondOrientedId="second"+this.orientation.toUpperCase()),
this.base(e,t,i,n),e.axes[this.orientedId]=this,this.v1SecondOrientedId&&(e.axes[this.v1SecondOrientedId]=this),
this.extensionPrefixes=G.call(this)},methods:{bind:function(e){return this.base(e),
this._syncExtensionPrefixes(),this},_syncExtensionPrefixes:function(){this.extensionPrefixes=G.call(this);
},_buildState:function(){return{ratio:this.option("PreserveRatio")?this._getCurrentRatio():null
}},_getCurrentRatio:function(){var e=this._state.ratio||this.option("Ratio");if(null==e){
var t=this.scale;if(t){var i=t.size,n=t.domain(),a=n[1]-n[0];e=i/a}}return e},setScale:function(e,t){
var i=!!this.scale;if(this.base(e,t),i&&(delete this.domain,delete this.domainNice,
delete this.ticks,delete this._roundingOverflow),e&&!e.isNull&&"discrete"!==this.scaleType){
this.domain=e.domain(),this.domain.minLocked=!!e.minLocked,this.domain.maxLocked=!!e.maxLocked;
var n=this.option("TickFormatter");n&&e.tickFormatter(n);var a=this.option("DomainRoundMode");
"nice"===a&&"numeric"===e.type&&e.nice(),this.domainNice=e.domain()}return this},
setTicks:function(t){var i=this.scale;if(i&&!i.isNull||e.fail.operationInvalid("Scale must be set and non-null."),
this.ticks=t,delete this._roundingOverflow,"discrete"!==i.type&&"tick"===this.option("DomainRoundMode")){
delete this._roundingOverflow;var n=t?t.length:0;if(n>=2){var a=this._adjustDomain(i,t[0],t[n-1]);
a&&this._removeTicks(t)}else this._adjustDomain(i,null,null,!0)}},_adjustDomain:function(e,i,n,a){
var r=this.domainNice;if(!r)return!1;var s=+r[0],o=+r[1];if(null==s||null==o)return!1;
var l=null!=i?Math.min(+i,s):s,u=null!=n?Math.max(+n,o):o,c=!1,h=e.size;if(h){var d=this._state.ratio||this.option("Ratio");
if(null!=d){c=!0;var f=h/d;switch(this.option("DomainAlign")){case"min":u=l+f;break;
case"max":l=u-f;break;case"center":var v=u-(u-l)/2;u=v+f/2,l=v-f/2}}}if(!a&&t.floatEqual(l,s)&&t.floatEqual(u,o))return!1;
var p=this.chart.data.owner.dimensions(this.role.grouping.lastDimensionName());return l=p.read(l).value,
u=p.read(u).value,e.domain(l,u),c},_removeTicks:function(e){var t=this.option;if(this._state.ratio||t("Ratio")){
var i=e[0],n=e[e.length-1],a=this.scale.domain(),r=this.chart.axesPanels[this.id]._layoutInfo;
if(e!==r.ticks)throw new Error("Assertion failed.");var s=function(t){var i=e.indexOf(t);
e.splice(i,1),r.ticksText.splice(i,1)};switch(t("DomainAlign")){case"min":n>a[1]&&s(n);
break;case"max":i<a[0]&&s(i);break;default:n>a[1]&&s(n),i<a[0]&&s(i)}}},setScaleRange:function(e){
var t=this.getScaleRangeInfo();t&&(null!=t.value?e=t.value:null!=t.min&&(e=Math.max(Math.min(e,t.max),t.min)));
var i=this.scale;return i.min=0,i.max=e,i.size=e,delete this._roundingOverflow,"discrete"===i.type?t&&("abs"===t.mode?i.splitBandedCenterAbs(i.min,i.max,t.band,t.space):i.splitBandedCenter(i.min,i.max,t.ratio)):(i.range(i.min,i.max),
this._adjustDomain(i)),i},getScaleRangeInfo:function(){if(!this.isDiscrete())return null;
var e=X.visual.discreteBandsLayout(this.domainItemCount(),this.option("BandSize"),this.option("BandSizeMin")||0,this.option("BandSizeMax"),this.option("BandSpacing"),this.option("BandSpacingMin")||0,this.option("BandSpacingMax"),this.option("BandSizeRatio"));
return e&&this.chart.visualRoles.multiChart.isBound()?{mode:"rel",min:0,max:1/0,ratio:e.ratio
}:e},getRoundingOverflow:function(){var e=this._roundingOverflow;if(!e){e=this._roundingOverflow={
begin:0,end:0,beginLocked:!1,endLocked:!1};var i=this.scale,n=this.domain;if(i&&n&&!i.isNull&&"discrete"!==i.type&&(e.beginLocked=n.minLocked,
e.endLocked=n.maxLocked,null!=i.size&&"tick"===this.option("DomainRoundMode"))){var a=i.domain(),r=n[0]-a[0],s=a[1]-n[1],o=t.epsilon;
if(r>o||s>o){var l=i(0);r>o&&(e.begin=i(r)-l),s>o&&(e.end=i(s)-l)}}}return e},calcContinuousTicks:function(e){
return this.scale.ticks(this.desiredTickCount(),{roundInside:"tick"!==this.option("DomainRoundMode"),
tickCountMax:e,precision:this.option("TickUnit"),precisionMin:this.tickUnitMinEf(),
precisionMax:this.tickUnitMaxEf()})},desiredTickCount:function(){var e=this.option("DesiredTickCount"),t="timeSeries"===this.scaleType;
return null==e?t?null:1/0:t&&isFinite(e)&&e>10?10:e},tickUnitMinEf:function(){var e=this.option("TickUnitMin"),t=this.option("TickExponentMin");
return null==e&&(e=0),null!=t&&isFinite(t)&&(e=Math.max(e,Math.pow(10,Math.floor(t)))),
e},tickUnitMaxEf:function(){var e=this.option("TickUnitMax"),t=this.option("TickExponentMax");
return null==e&&(e=1/0),null!=t&&isFinite(t)&&(e=Math.min(e,9.999*Math.pow(10,Math.floor(t)))),
e},_registerResolversNormal:function(e){this.chart.compatVersion()<=1&&e.push(this._resolveByV1OnlyLogic),
e.push(this._resolveByOptionId,this._resolveByOrientedId),1===this.index&&e.push(this._resolveByV1OptionId),
e.push(this._resolveByScaleType,this._resolveByCommonId)},_resolveByOrientedId:X.options.specify(function(e){
return this._chartOption(this.orientedId+"Axis"+e.name)}),_resolveByV1OptionId:X.options.specify(function(e){
return this._chartOption("secondAxis"+e.name)}),_resolveByScaleType:X.options.specify(function(e){
var t=this.scaleType;if(t){var i=e.name,n=this._chartOption(t+"Axis"+i);return void 0===n&&"discrete"!==t&&(n=this._chartOption("continuousAxis"+i)),
n}}),_resolveByCommonId:X.options.specify(function(e){return this._chartOption("axis"+e.name);
})}}));_e.getOrientation=function(e,t){return"base"===e==("vertical"===t)?"x":"y";
},_e.getOrientedId=function(e,t){return 0===t?e:e+(t+1)};var Se={resolve:"_resolveFull",
data:{resolveV1:function(e){return this.index||"ortho"!==this.type||this._specifyChartOption(e,this.id+e.name),
!0}}},we={resolveV1:function(e){if(this.index){if(this._resolveByV1OptionId(e))return!0;
}else if(this._resolveByOrientedId(e))return!0;return this._resolveDefault(e),!0}
},Ce=X.options.defaultValue(function(){if(!this.typeIndex)return"x"===this.orientation?"bottom":"left";
var e=this.chart.axesByType[this.type].first,t=e.option("Position");return X.BasePanel.oppositeAnchor[t];
});_e.options({Visible:{resolve:"_resolveFull",data:{resolveV1:function(t){if(this.index<=1){
var i=0===this.index?e.firstUpperCase(this.orientation):"Second";this._specifyChartOption(t,"show"+i+"Scale");
}return!0}},cast:Boolean,value:!0},Composite:{resolve:function(e){return this.index>0?(e.specify(!1),
!0):this._resolveFull(e)},data:{resolveV1:function(e){return this._specifyChartOption(e,"useCompositeAxis"),
!0}},cast:Boolean,value:!1},Size:{resolve:"_resolveFull",data:we,cast:W},SizeMax:{
resolve:"_resolveFull",cast:W},Position:{resolve:"_resolveFull",data:{resolveV1:we.resolveV1,
resolveDefault:Ce},cast:E},FixedMin:Se,FixedMax:Se,FixedLength:{resolve:"_resolveFull",
cast:X.parseAxisFixedLength},Ratio:{resolve:"_resolveFull",cast:X.parseAxisRatio},
DomainAlign:{resolve:"_resolveFull",cast:X.parseDomainAlign,value:"center"},PreserveRatio:{
resolve:"_resolveFull",cast:Boolean,value:!1},OriginIsZero:{resolve:"_resolveFull",
data:{resolveV1:function(e){switch(this.index){case 0:this._specifyChartOption(e,"originIsZero");
break;case 1:this.chart._allowV1SecondAxis&&this._specifyChartOption(e,"secondAxisOriginIsZero");
}return!0}},cast:Boolean,value:!0},DomainScope:{resolve:"_resolveFull",cast:F,value:"global"
},Offset:{resolve:"_resolveFull",data:{resolveV1:function(e){switch(this.index){case 0:
this._specifyChartOption(e,"axisOffset");break;case 1:this.chart._allowV1SecondAxis&&this._specifyChartOption(e,"secondAxisOffset");
}return!0}},cast:e.number.to},BandSizeRatio:{resolve:function(e){return this._resolveFull(e)||this._specifyChartOption(e,"panelSizeRatio");
},cast:function(t){return t=e.number.toNonNegative(t),null!=t&&t>1&&(t=null),t},getDefault:function(){
return this.chart._defaultAxisBandSizeRatio}},BandSize:{resolve:"_resolveFull",cast:e.number.toNonNegative
},BandSpacing:{resolve:"_resolveFull",cast:e.number.toNonNegative},BandSizeMin:{resolve:"_resolveFull",
cast:e.number.toNonNegative},BandSpacingMin:{resolve:"_resolveFull",cast:e.number.toNonNegative
},BandSizeMax:{resolve:"_resolveFull",cast:e.number.toNonNegative},BandSpacingMax:{
resolve:"_resolveFull",cast:e.number.toNonNegative},LabelSpacingMin:{resolve:"_resolveFull",
cast:e.number.to},LabelRotationDirection:{resolve:"_resolveFull",cast:X.parseLabelRotationDirection,
value:"clockwise"},LabelDesiredAngles:{resolve:"_resolveFull",cast:H,value:[]},OverlappedLabelsMode:{
resolve:"_resolveFull",cast:X.parseOverlappedLabelsMode,value:"hide"},Grid:{resolve:"_resolveFull",
data:{resolveV1:function(e){return this.index||this._specifyChartOption(e,this.orientation+"AxisFullGrid"),
!0}},cast:Boolean,value:!1},GridCrossesMargin:{resolve:"_resolveFull",cast:Boolean,
value:!0},EndLine:{resolve:"_resolveFull",cast:Boolean},ZeroLine:{resolve:"_resolveFull",
cast:Boolean,value:!0},RuleCrossesMargin:{resolve:"_resolveFull",cast:Boolean,value:!0
},Ticks:{resolve:"_resolveFull",cast:Boolean},DesiredTickCount:{resolve:"_resolveFull",
data:{resolveV1:we.resolveV1,resolveDefault:function(e){return this.chart.compatVersion()<=1?(e.defaultValue(5),
!0):void 0}},cast:e.number.toPositive},MinorTicks:{resolve:"_resolveFull",data:we,
cast:Boolean,value:!0},TickFormatter:{resolve:"_resolveFull",cast:e.fun.as},DomainRoundMode:{
resolve:"_resolveFull",data:{resolveV1:we.resolveV1,resolveDefault:function(e){return this.chart.compatVersion()<=1?(e.defaultValue("none"),
!0):void 0}},cast:X.parseDomainRoundingMode,value:"tick"},TickExponentMin:{resolve:"_resolveFull",
cast:e.number.to},TickExponentMax:{resolve:"_resolveFull",cast:e.number.to},TickUnit:{
resolve:"_resolveFull"},TickUnitMin:{resolve:"_resolveFull"},TickUnitMax:{resolve:"_resolveFull"
},Title:{resolve:"_resolveFull",cast:String},TitleVisible:{resolve:"_resolveFull",
cast:Boolean,getDefault:function(){return!e.empty(this.option("Title"))}},TitleSize:{
resolve:"_resolveFull",cast:q},TitleSizeMax:{resolve:"_resolveFull",cast:q},TitleFont:{
resolve:"_resolveFull",cast:String},TitleMargins:{resolve:"_resolveFull",cast:ae.as
},TitlePaddings:{resolve:"_resolveFull",cast:ae.as},TitleAlign:{resolve:"_resolveFull",
cast:function(e){var t=this.option("Position");return X.parseAlign(t,e)}},Font:{resolve:"_resolveFull",
cast:String},ClickAction:{resolve:"_resolveFull",data:we},DoubleClickAction:{resolve:"_resolveFull",
data:we},TooltipEnabled:{resolve:"_resolveFull",cast:Boolean,value:!0},TooltipFormat:{
resolve:"_resolveFull",cast:e.fun.as,value:null},TooltipAutoContent:{resolve:"_resolveFull",
cast:X.parseTooltipAutoContent,value:"value"}}),e.type("pvc.visual.CartesianAxisRootScene",X.visual.Scene),
e.type("pvc.visual.CartesianAxisTickScene",X.visual.Scene).init(function(t,i){this.base(t,i),
this.vars.tick=new ce(e.get(i,"tick"),e.get(i,"tickLabel"),e.get(i,"tickRaw")),e.get(i,"isHidden")&&(this.isHidden=!0);
}).add({isHidden:!1}),e.type("pvc.AxisPanel",X.BasePanel).init(function(t,i,n,a){
a=e.create(a,{anchor:n.option("Position")});var r=a.anchor||this.anchor;if(null==a.paddings&&(a.paddings=ae.filterAnchor(r,t._axisOffsetPct)),
this.axis=n,this.base(t,i,a),this.roleName=n.role.name,this.isDiscrete=n.role.isDiscrete(),
this._extensionPrefix=n.extensionPrefixes,null==this.labelSpacingMin&&(this.labelSpacingMin=this.isDiscrete?.25:1.1),
null==this.showTicks&&(this.showTicks=!this.isDiscrete),void 0===a.font){var s=this._getConstantExtension("label","font");
s&&(this.font=s)}if(void 0===a.tickLength){var o=+this._getConstantExtension("ticks",this.anchorOrthoLength(r));
!isNaN(o)&&isFinite(o)&&(this.tickLength=o)}var l=this._getConstantExtension("label","visible");
null==l||l||(this.showLabels=!1)}).add({pvRule:null,pvTicks:null,pvLabel:null,pvRuleGrid:null,
pvScale:null,isDiscrete:!1,roleName:null,axis:null,anchor:"bottom",tickLength:6,scale:null,
ruleCrossesMargin:!0,font:"9px sans-serif",labelSpacingMin:null,showMinorTicks:!0,
showTicks:null,showLabels:!0,hiddenLabelText:"·",_isScaleSetup:!1,_createLogId:function(){
return this.base()+" - "+this.axis.id},getTicks:function(){return this._layoutInfo&&this._layoutInfo.ticks;
},_calcLayout:function(e){var t=this.axis.scale,i=e.clientSize;if(this._isScaleSetup||(this.pvScale=t,
this.scale=t,this.extend(t,"scale"),this._isScaleSetup=!0),t.isNull)e.axisSize=e.restrictions.clientSize[this.anchorOrthoLength()]||0;else{
var n=this.anchorLength(),a=this.axis.getScaleRangeInfo();a&&(null!=a.value?i[n]=a.value:null!=a.min&&(i[n]=Math.max(Math.min(i[n],a.max),a.min))),
this.axis.setScaleRange(i[n]),this._calcLayoutCore(e)}return this.createAnchoredSize(e.axisSize,i);
},_calcLayoutCore:function(e){var i=e.restrictions.clientSize[this.anchorOrthoLength()];
if(e.axisSize=i,this.isDiscrete&&this.useCompositeAxis)null==e.axisSize&&(e.axisSize=50);else{
if(this._readTextProperties(e),this._calcTicks(),"discrete"===this.scale.type){var n=this.axis.option("OverlappedLabelsMode"),a="counterclockwise"===this.axis.option("LabelRotationDirection")?-1:1,r=this.axis.option("LabelDesiredAngles"),s=this.scale.range().step,o=this.labelSpacingMin,l=t.Text.measureWidth("x",this.font),u=this.anchor;
X.AxisPanel._calcDiscreteOverlapSettings(n,a,r,s,o,l,u,e)}this._calcAxisSizeFromLabelBBox(e),
null==e.axisSize&&(e.axisSize=e.requiredAxisSize),this._calcMaxTextLengthThatFits(),
this._calcContentOverflowOptional()}},_readTextProperties:function(t){var i=this._getExtension("label","textAngle");
t.textAngle=e.number.to(i,0),t.textMargin=e.number.to(this._getExtension("label","textMargin"),3);
var n=this._getExtension("label","textAlign");"string"!=typeof n&&(n=this.isAnchorTopOrBottom()?"center":"left"==this.anchor?"right":"left"),
t.textAlign=n;var a=this._getExtension("label","textBaseline");if("string"!=typeof a)switch(this.anchor){
case"right":case"left":case"center":a="middle";break;case"bottom":a="top";break;default:
a="bottom"}t.textBaseline=a},_calcAxisSizeFromLabelBBox:function(t){var i=this.showLabels?this._calcMaxLabelBBox():null,n=i?this._getLabelBBoxQuadrantLength(i,this.anchor):0,a=(this.showTicks||this.showLabels?this.tickLength:0)+n,r=i?i.sourceAngle:0;
!this.showLabels||0===r&&this.isAnchorTopOrBottom()||(a+=this.tickLength),t.requiredAxisSize=Math.max(1,a,e.number.as(this._getConstantExtension("rule","linewidth"),1)/2);
},_getLabelBBoxQuadrantLength:function(e,t){var i;switch(t){case"left":i=-e.x;break;
case"right":i=e.x2;break;case"top":i=-e.y;break;case"bottom":i=e.y2}return Math.max(i,0);
},_calcContentOverflowOptional:function(){this._layoutInfo.restrictions.canChange?this.showLabels&&this._calcContentOverflowOptionalFromLabelBBox():e.debug>=2&&this.log.warn("Layout cannot change. Skipping calculation of optional content overflow.");
},_calcContentOverflowOptionalFromLabelBBox:function(){var t=null,i=this,n=i._layoutInfo,a=n.ticks;
if(a.length){var r=n.ticksBBoxes||this._calcTicksLabelBBoxes(n),s=i.isAnchorTopOrBottom(),o=s?"left":"bottom",l=s?"right":"top",u=i.scale,c="discrete"===u.type,h=c?n.tickVisibilityStep:1,d=n.clientSize[i.anchorLength()],f=function(r,s,o,l){
if(!(h>1&&l%h!==0)){var f=i._getLabelBBoxQuadrantLength(r,s);if(f>1){var v=u(c?a[l].value:a[l]),p=o?v-f:v+f,g=Math.max(0,o?-p:p-d);
if(g>1&&(g-=n.paddings[s]||0,g>1))if(c&&(g*=1.05),t){var m=t[s];(null==m||g>m)&&(t[s]=g);
}else t=e.set({},s,g)}}};r.forEach(function(e,t){f(e,o,!0,t),f(e,l,!1,t)}),e.debug>=6&&t&&i.log("ContentOverflowOptional = "+e.describe(t));
}n.contentOverflowOptional=t},_calcMaxTextLengthThatFits:function(){var i=this._layoutInfo;
if(!this.showLabels||this.compatVersion()<=1)i.maxTextWidth=null;else{var n=i.clientSize[this.anchorOrthoLength()],a=Math.min(i.axisSize,n);
if(a>=i.requiredAxisSize-this.tickLength)i.maxTextWidth=null;else{var r,s,o=i.maxLabelBBox,l=a-this.tickLength;
switch(this.anchor){case"left":s=t.vector(0,1),r=t.vector(-l,0);break;case"right":
s=t.vector(0,1),r=t.vector(l,0);break;case"top":s=t.vector(1,0),r=t.vector(0,-l);break;
case"bottom":s=t.vector(1,0),r=t.vector(0,l)}var u=r.norm(),c=o.source.points(),h=c[0],d=c[1],f=c[2],v=c[3],p=f.minus(v),g=d.minus(h),m=t.SvgScene.lineIntersect,b=m(r,s,h,g),x=m(r,s,v,p),y=o.sourceTextWidth,_=y,S=b.minus(h),w=S.length();
y>=w&&S.dot(p)>=0&&(_=h.dot(u)<d.dot(u)?w:b.minus(d).length());var C=x.minus(v),k=C.length();
if(y>=k&&C.dot(p)>=0&&(_=v.dot(u)<f.dot(u)?Math.min(_,k):Math.min(_,x.minus(f).length())),
"center"===o.sourceAlign){var P=y-_;_-=P}i.maxTextWidth=_,i.maxLabelBBox=this._calcLabelBBox(_),
e.debug>=3&&this.log("Trimming labels' text at length "+_.toFixed(2)+"px maxOrthoLength="+l.toFixed(2)+"px");
}}},_calcTicks:function(){var i=this._layoutInfo;switch(i.textHeight=4*t.Text.fontHeight(this.font)/5,
i.maxTextWidth=null,this.axis.setTicks(null),this.scale.type){case"discrete":this._calcDiscreteTicks();
break;case"timeSeries":case"numeric":this._calcContinuousTicks();break;default:throw e.error.operationInvalid("Undefined axis scale type");
}this.axis.setTicks(this._layoutInfo.ticks),null==i.maxTextWidth&&this._calcTicksTextLength(i);
},_calcDiscreteTicks:function(){var i=this.axis,n=this._layoutInfo;n.ticks=i.domainItems();
var a,r=i.role.grouping,s=i.option("TickFormatter");if(this.getCompatFlag("discreteTimeSeriesTickFormat")&&r.isSingleDimension&&r.lastDimensionValueType()===Date){
var o=i.domainValues(),l=e.query(o).range();if(l&&l.min!==l.max){var u=new t.Scale.linear(l.min,l.max),c=u.ticks();
s?(e.copyProps(o,c,["step","base","mult","format"]),a=function(e,t){return s.call(o,o[t],o.step,t);
}):a=function(e,t){return c.format(o[t])}}else if(s){var h=r.lastDimensionType().formatter();
o.step=o.base=X.time.intervals.d,o.mult=1,o.format=function(e){return h(e)},a=function(e,t){
return s.call(o,o[t],o.step,t)}}}else s&&(a=function(e){return s(e.value,e.absLabel);
});a||(a=function(e){return e.absLabel}),n.ticksText=n.ticks.map(a),this._clearTicksTextDeps(n);
},_clearTicksTextDeps:function(e){e.maxTextWidth=e.ticksTextLength=e.ticksBBoxes=null;
},_calcContinuousTicks:function(){var t=e.debug>=7;t&&this.log.group("_calcContinuousTicks");
var i=this._layoutInfo;i.ticks=i.ticksText=null;var n=this._calcContinuousBandSizeMin(),a=i.clientSize[this.anchorLength()],r=this._calcContinuousTickCountMax(n,a),s=i.ticks,o="tick"===this.axis.option("DomainRoundMode");
if((!s||s.length>(o?3:1)&&s.length>r)&&(this._calcContinuousTicksValue(i,r),this._calcContinuousTicksText(i),
s=i.ticks),o){var l=s.length;l>r&&2>=r&&3>=l&&(l-1)*n>a&&(3===l?(i.ticksText[0]="",
i.ticksText[2]="",i.maxTextWidth=null):2===l&&(i.ticksText[s[1]?1:0]="",i.maxTextWidth=null));
}e.debug>=5&&this.log.info("RESULT count="+s.length+" step="+s.step),t&&this.log.groupEnd();
},_calcContinuousTicksValue:function(t,i){t.ticks=this.axis.calcContinuousTicks(i),
e.debug>4&&(this.log("DOMAIN: "+e.describe(this.scale.domain())),this.log("TICKS:  "+e.describe(t.ticks)));
},_calcContinuousTicksText:function(e){var t=e.ticksText=e.ticks.map(function(e,t){
return this.scale.tickFormat(e,t)},this);return this._clearTicksTextDeps(e),t},_calcContinuousTickCountMax:function(e,t){
if(!e&&this.showLabels)return 1;var i=this._layoutInfo,n=i.textHeight*Math.max(0,this.labelSpacingMin);
return 1+Math.floor(t/(e+n))},_calcContinuousBandSizeMin:function(){var e=this.scale.domain(),t=Math.abs(e[1]-e[0]);
if(1e-10>t||!isFinite(t))return 0;var i=this._layoutInfo;return this.isAnchorTopOrBottom()?(this._calcContinuousTicksValue(i),
this._calcTicksTextLength(i),Math.max(i.maxTextWidth,i.textHeight)):i.textHeight},
_calcTicksTextLength:function(e){var i=0,n=this.font,a=e.ticksText||this._calcContinuousTicksText(e),r=e.ticksTextLength=a.map(function(e){
var a=t.Text.measureWidth(e,n);return a>i&&(i=a),a});return e.maxTextWidth=e.maxTextWidthReal=i,
e.ticksBBoxes=null,e.maxLabelBBox=null,r},_calcTicksLabelBBoxes:function(e){var t=this,i=t._layoutInfo,n=e.ticksTextLength||t._calcTicksTextLength(e),a=i.maxTextWidth||i.maxTextWidthReal,r=null;
return e.ticksBBoxes=n.map(function(e){var i=t._calcLabelBBox(Math.min(e,a));return r||e!==a||(r=i),
i},t),i.maxLabelBBox=r,e.ticksBBoxes},_calcMaxLabelBBox:function(){var e=this._layoutInfo;
return e.ticksTextLength||this._calcTicksTextLength(e),e.maxLabelBBox=this._calcLabelBBox(e.maxTextWidth);
},_calcLabelBBox:function(e){var t=this._layoutInfo;return X.text.getLabelBBox(e,t.textHeight,t.textAlign,t.textBaseline,t.textAngle,t.textMargin);
},_createCore:function(){if(!this.scale.isNull){var t=this._layoutInfo.clientSize,i=this._layoutInfo.paddings,n=this.anchorOrtho(),a=this.anchorOpposite(n),r=this.anchorOrthoLength(n),s=this.ruleCrossesMargin?-i[n]:0,o=t[r]+(this.ruleCrossesMargin?i[a]:0),l=o-s;
this._rSize=l;var u=this._getRootScene();this.pvRule=new X.visual.Rule(this,this.pvPanel,{
extensionId:"rule"}).lock("data",[u]).override("defaultColor",e.fun.constant("#666666")).lock(this.anchorOpposite(),0).lock(n,s).lock(r,l).pvMark.zOrder(30).strokeDasharray(null).lineCap("square"),
this.isDiscrete?this.useCompositeAxis?this.renderCompositeOrdinalAxis():this.renderOrdinalAxis():this.renderLinearAxis();
}},_getExtensionId:function(){return""},_getRootScene:function(){if(!this._rootScene){
var t=this._rootScene=new X.visual.CartesianAxisRootScene(null,{panel:this,source:this._getRootData()
}),i=this._layoutInfo,n=i.ticks,a=i.ticksText;if(this.isDiscrete)if(this.useCompositeAxis)this._buildCompositeScene(t);else{
var r,s,o,l,u,c=i.tickVisibilityStep,h=this.hiddenLabelText;t.vars.tickIncludeModulo=c,
t.vars.hiddenLabelText=h,c>2&&(e.debug>=3&&this.log.info("Showing only one in every "+c+" tick labels"),
u=t.group.owner.keySep,o=function(){var e=r.map(function(e){return e.key}).join(u),i=s.slice(0,10).join(", ")+(s.length>10?", ...":""),n=new X.visual.CartesianAxisTickScene(t,{
source:r,tick:e,tickRaw:e,tickLabel:i,isHidden:!0});n.dataIndex=l,r=s=l=null}),n.forEach(function(e,i){
var n=i%c!==0;if(n&&c>2)null==l&&(l=i),(r||(r=[])).push(e),(s||(s=[])).push(a[i]);else{
r&&o();var u=new X.visual.CartesianAxisTickScene(t,{source:e,tick:e.value,tickRaw:e.rawValue,
tickLabel:a[i],isHidden:n});u.dataIndex=i}}),r&&o()}else n.forEach(function(e,i){
var n=new X.visual.CartesianAxisTickScene(t,{tick:e,tickRaw:e,tickLabel:a[i]});n.dataIndex=i;
},this)}return this._rootScene},_buildCompositeScene:function(e){function t(e){var a=e.group;
if(i){var r=e.vars.tick;e.nodeValue=e.value=r.rawValue,e.nodeLabel=e.label=r.label;
}a.childCount()&&a.children().each(function(i){var a=n?n(i.value,i.label):i.label,r=new X.visual.CartesianAxisTickScene(e,{
source:i,tick:i.value,tickRaw:i.rawValue,tickLabel:a});r.dataIndex=i.childIndex(),
t(r)})}var i=this.compatVersion()<=1,n=this.axis.option("TickFormatter");e.vars.tick=new ce("",""),
t(e)},_getRootData:function(){var e;if(this.isDiscrete&&this.useCompositeAxis){var t=this.anchor,i={
visible:this.axis.domainVisibleOnly()?!0:null,isNull:this.chart.options.ignoreNulls||this.axis.domainIgnoreNulls()?!1:null,
reverse:"bottom"==t||"left"==t};e=this.axis.role.select(this.data,i)}else e=this.data;
return e},renderOrdinalAxis:function(){var e,i=this.scale,n=this.hiddenLabelText,a=this._layoutInfo.tickVisibilityStep,r=a*i.range().step/2,s=this.anchorOpposite(),o=this.anchorLength(),l=this.anchorOrtho(),u=this.anchorOrthoLength(),c=this.pvRule,h=this._getRootScene(),d=this._layoutInfo,f=this.compatVersion()<=1;
if(f){var v=function(e){this.value=this.absValue=e.rawValue,this.nodeName=""+(this.value||""),
this.path=this.nodeName?[this.nodeName]:[],this.label=this.absLabel=e.label};v.prototype.toString=function(){
return""+this.value},e=function(e){return function(t){var i=Object.create(this);return i.index=this.parent.index,
e.call(i,new v(t.vars.tick))}}}var p=new X.visual.Panel(this,this.pvPanel,{extensionId:"ticksPanel"
}).lock("data",h.childNodes).lock(s,0).lockMark(l,function(e){return e.isHidden?i(e.previousSibling.vars.tick.value)+r:i(e.vars.tick.value);
}).lock("strokeDasharray",null).lock("strokeStyle",null).lock("fillStyle",null).lock("lineWidth",0).pvMark.zOrder(20);
(f||this.showTicks)&&(this.pvTicks=new X.visual.Rule(this,p,{extensionId:"ticks",
wrapper:e}).lock("data").intercept("visible",function(e){return!e.isHidden&&this.delegateExtension(!0);
}).optional("lineWidth",1).lock(s,0).lock(l,0).lock(o,null).optional(u,2*this.tickLength/3).override("defaultColor",function(){
return f?t.Color.names.transparent:c.scene?c.scene[0].strokeStyle:"#666666"}).pvMark);
var g=this.font,m=this._layoutInfo.maxTextWidth;isFinite(m)||(m=0),this.pvLabel=new X.visual.Label(this,p,{
extensionId:"label",showsInteraction:!0,noClick:!1,noDoubleClick:!1,noSelect:!1,noTooltip:!1,
noHover:!1,wrapper:e}).intercept("visible",function(e){return e.isHidden?!!e.vars.hiddenLabelText:this.delegateExtension(!0);
}).intercept("text",function(e){var t;return e.isHidden?t=n:(t=this.delegateExtension(),
void 0===t&&(t=e.vars.tick.label),!m||this.showsInteraction()&&e.isActive||(t=X.text.trimToWidthB(m,t,g,"..",!1))),
t}).pvMark.zOrder(40).lock(s,this.tickLength).lock(l,0).font(g).textStyle("#666666"),
d.textAngleLocked?this.pvLabel.lock("textAngle",d.textAngle):this.pvLabel.textAngle(d.textAngle),
d.textAlignLocked?this.pvLabel.lock("textAlign",d.textAlign):this.pvLabel.textAlign(d.textAlign),
d.textBaselineLocked?this.pvLabel.lock("textBaseline",d.textBaseline):this.pvLabel.textBaseline(d.textBaseline),
this._debugTicksPanel(p)},_getTooltipFormatter:function(e){if(this.axis.option("TooltipEnabled")){
e.gravity=this._calcTipsyGravity();var t=this.axis.option("TooltipFormat");if(t)return function(e){
return t.call(e,e.scene)};var i=this.axis.option("TooltipAutoContent");if("summary"===i)return this._summaryTooltipFormatter.bind(this);
if("value"===i)return e.isLazy=!1,function(e){var t=e.pvMark,i=e.scene.vars.tick.label;
return t.textAngle()||t.text()!==i?i:""}}},_getTooltipPanelClasses:function(){return["cart-axis"];
},_debugTicksPanel:function(i){if(e.debug>=16&&this.showLabels){var n=this._layoutInfo,a=n.ticksBBoxes||this._calcTicksLabelBBoxes(n);
i.add(t.Panel)[this.anchorOpposite()](this.tickLength)[this.anchorOrtho()](0)[this.anchorLength()](0)[this.anchorOrthoLength()](0).fillStyle(null).strokeStyle(null).lineWidth(0).visible(function(e){
return!e.isHidden}).add(t.Line).data(function(e){var t=a[e.dataIndex],i=t.source.points();
return i.length>1&&(i=i.concat(i[0])),i}).left(function(e){return e.x}).top(function(e){
return e.y}).strokeStyle("red").lineWidth(.5).strokeDasharray("-")}},renderLinearAxis:function(){
var e,t=this.scale,i=this.pvRule,n=this.anchorOpposite(),a=this.anchorLength(),r=this.anchorOrtho(),s=this.anchorOrthoLength(),o=this._getRootScene();
this.compatVersion()<=1&&(e=function(e){return function(t){var i=Object.create(this);
return i.index=this.parent.index,e.call(i,t.vars.tick.rawValue)}});var l=new X.visual.Panel(this,this.pvPanel,{
extensionId:"ticksPanel"}).lock("data",o.childNodes).lock(n,0).lockMark(r,function(e){
return t(e.vars.tick.value)}).lock("strokeStyle",null).lock("fillStyle",null).lock("lineWidth",0).pvMark.zOrder(20);
if(this.showTicks){var u=this.pvTicks=new X.visual.Rule(this,l,{extensionId:"ticks",
wrapper:e}).lock("data").override("defaultColor",function(){return i.scene?i.scene[0].strokeStyle:"#666666";
}).lock(n,0).lock(r,0).lock(a,null).optional(s,this.tickLength).pvMark;if(this.showMinorTicks){
var c=this._layoutInfo,h=c.ticks,d=h.length,f=d>1?Math.abs(t(h[1])-t(h[0]))/2:0;this.pvMinorTicks=new X.visual.Rule(this,this.pvTicks,{
extensionId:"minorTicks",wrapper:e}).lock("data").intercept("visible",function(e){
var t=e.childIndex()<d-1&&(!u.scene||u.scene[0].visible);return t&&this.delegateExtension(!0);
}).override("defaultColor",function(){return u.scene?u.scene[0].strokeStyle:"#666666";
}).lock(n,0).lock(a,null).optional(s,this.tickLength/2).lockMark(r,f).pvMark}}this.renderLinearAxisLabel(l,e),
this._debugTicksPanel(l)},renderLinearAxisLabel:function(e,t){var i=this.anchorOpposite(),n=this.anchorOrtho(),a=this.font,r=this._layoutInfo.maxTextWidth;
isFinite(r)||(r=0);var s=this.pvLabel=new X.visual.Label(this,e,{extensionId:"label",
noHover:!1,showsInteraction:!0,wrapper:t}).lock("data").optional("text",function(e){
var t=e.vars.tick.label;return!r||this.showsInteraction()&&e.isActive||(t=X.text.trimToWidthB(r,t,a,"..",!1)),
t}).pvMark.lock(i,this.tickLength).lock(n,0).zOrder(40).font(this.font).textStyle("#666666"),o=this.pvPanel.root;
this.isAnchorTopOrBottom()?s.textBaseline(i).textAlign(function(e){var t;if(0===this.index){
if(t=s.toScreenTransform().transformHPosition(s.left()),0>=t)return"left"}else if(this.index===e.parent.childNodes.length-1&&(t=s.toScreenTransform().transformHPosition(s.left()),
t>=o.width()))return"right";return"center"}):s.textAlign(i).textBaseline(function(e){
var t;if(0===this.index){if(t=s.toScreenTransform().transformVPosition(s.top()),t>=o.height())return"bottom";
}else if(this.index===e.parent.childNodes.length-1&&(t=s.toScreenTransform().transformVPosition(s.top()),
0>=t))return"top";return"middle"})},_onV1Click:function(e,t){this.isDiscrete&&this.useCompositeAxis&&t.call(e.pvMark,e.scene,e.event);
},_onV1DoubleClick:function(e,t){this.isDiscrete&&this.useCompositeAxis&&t.call(e.pvMark,e.scene,e.event);
},_getSelectableMarks:function(){return this.isDiscrete&&this.isVisible&&this.pvLabel?this.base():void 0;
},renderCompositeOrdinalAxis:function(){var i,n=this.isAnchorTopOrBottom(),a=n?"h":"v",r=.3,s=1.27,o=2,l=2,u=this.font,c=t.Text.fontHeight(u)/2,h=this._pvLayout=this._getCompositeLayoutSingleCluster(),d=n?"center":"left"==this.anchor?"right":"left";
h.node.def("fitInfo",null).height(function(e){var t=X.text.getFitInfo(e.dx,e.dy,e.vars.tick.label,u,c);
return t.h||("v"===a&&t.v?l=Math.min(o,e.depth):o=Math.min(o,e.depth)),this.fitInfo(t),
e.dy}),h.node.add(t.Bar).fillStyle("rgba(127,127,127,.001)").strokeStyle(function(e){
return 1!==e.maxDepth&&e.maxDepth?"rgba(127,127,127,0.3)":null}).lineWidth(function(e){
return 1!==e.maxDepth&&e.maxDepth?.5:0}).text(function(e){return e.vars.tick.label;
}),this.compatVersion()<=1&&(i=function(e){return function(t){return e.call(this,t);
}}),this.pvLabel=new X.visual.Label(this,h.label,{extensionId:"label",noClick:!1,
noDoubleClick:!1,noSelect:!1,noTooltip:!1,noHover:!1,showsInteraction:!0,wrapper:i,
tooltipArgs:{options:{offset:2*c}}}).pvMark.def("lblDirection","h").textAngle(function(e){
if(e.depth>=l&&e.depth<o)return this.lblDirection("v"),-Math.PI/2;if(e.depth>=o){
var t=e.dy/e.dx,i=Math.atan(t);if(i>s)return this.lblDirection("v"),-Math.PI/2;if(i>r)return this.lblDirection("d"),
-i}return this.lblDirection("h"),0}).textMargin(1).textAlign(function(e){return"v"!=a||e.depth>=l||e.depth>=o?"center":d;
}).left(function(e){return"v"!=a||e.depth>=l||e.depth>=o?e.x+e.dx/2:"right"==d?e.x+e.dx:e.x;
}).font(u).textStyle("#666666").text(function(t){var i=t.vars.tick.label;if(!t.isActive||!this.sign.showsInteraction()){
var n=this.fitInfo();switch(this.lblDirection()){case"h":if(!n.h)return X.text.trimToWidthB(t.dx,i,u,"..");
break;case"v":if(!n.v)return X.text.trimToWidthB(t.dy,i,u,"..");break;case"d":if(!n.d){
var a=Math.sqrt(e.sqr(t.dy)+e.sqr(t.dx));return X.text.trimToWidthB(a-c,i,u,"..");
}}}return i})},_getCompositeLayoutSingleCluster:function(){var i=this._getRootScene(),n=this.anchor,a=i.group.treeHeight+1,r=this._layoutInfo.axisSize,s=a>2?1/12*r:0,o=r/a-s,l=a/(a-1),u=X.BasePanel.orthogonalLength[n],c="width"==u?"left"===n?[-o,0]:[o,0]:"top"===n?[0,-o]:[0,o];
this.pvRule.sign.override("defaultColor",e.fun.constant(null)).override("defaultStrokeWidth",e.fun.constant(0));
var h=this.pvRule.add(t.Panel)[u](r).strokeStyle(null).lineWidth(0).add(t.Panel)[u](r*l).strokeStyle(null).lineWidth(0);
return h.transform(t.Transform.identity.translate(c[0],c[1])),h.add(t.Layout.Cluster.Fill).nodes(i.nodes()).orient(n);
},_calcTipsyGravity:function(){switch(this.anchor){case"bottom":return"s";case"top":
return"n";case"left":return"w";case"right":return"e"}return"s"}}),X.AxisPanel._calcDiscreteOverlapSettings=function(e,t,i,n,a,r,s,o){
var l=Math.PI,u=l/2,c=2*l;o.tickVisibilityStep=1;var h=!1,d=!1;switch(e){case"hide":
h=!0;break;case"rotate":d=!0;break;case"rotatethenhide":h=!0,d=!0;break;default:return;
}null==t&&(t=1),i=i?i.slice().sort(function(e,t){return Math.abs(e)-Math.abs(t)}):[];
var f=o.textHeight,v=o.maxTextWidth,p=f*a,g=p,m=r+p,b="bottom"===s,x="left"===s,y=b||"top"===s,_=0,S=c,w=f+g>n;
!w&&v+m>n&&(y?_=X.normAngle(Math.asin(f/(n-g))):S=X.normAngle(Math.acos(f/(n-g))));
var C;if(d){if(i.length>0)for(var k=0;k!==i.length;++k){C=X.normAngle(i[k]*t);var P=C>l?Math.abs(C-c):C,M=u>P?P:P-l;
if(!w&&M>=_){h=h&&(w||M>S);break}}else w?C=y?u:0:(C=X.normAngle(_*t),h=!1);o.textAngle=C,
o.textAngleLocked=!0;var D="center",R="middle";y?(C>0&&l>C?D=b?"left":"right":C>l&&c>C&&(D=b?"right":"left"),
C>=0&&u>C||C>l+u&&c>C?R=b?"top":"bottom":C>u&&c-u>C&&(R=b?"bottom":"top")):(C>=0&&u>C||C>l+u&&c>C?D=x?"right":"left":C>u&&c-u>C&&(D=x?"left":"right"),
C>0&&l>C?R=x?"top":"bottom":C>l&&c>C&&(R=x?"bottom":"top")),o.textAlign=D,o.textAlignLocked=!0,
o.textBaseline=R,o.textBaselineLocked=!0}else C=o.textAngle?X.normAngle(o.textAngle*t):0,
o.textAngle=C,o.textAngleLocked=!0;var A=o.ticks.length;if(h&&A>2){var I;if(I=y?Math.min(v,Math.abs(f/Math.sin(C)))+(w||_>C?m:g):Math.min(v,Math.abs(f/Math.cos(C)))+(w||C>S?m:g),
I>n){var L=Math.ceil(I/n);(!isFinite(L)||1>L||Math.ceil(A/L)<2)&&(L=1),o.tickVisibilityStep=L;
}}},e.type("pvc.AxisTitlePanel",X.TitlePanelAbstract).init(function(e,t,i,n){this.axis=i,
this.base(e,t,n),this._extensionPrefix=i.extensionPrefixes.map(function(e){return e+"Title";
})}).add({_calcLayout:function(e){var t=this.axis.scale;return!t||t.isNull?new re(0,0):this.base(e);
},_createCore:function(e){var t=this.axis.scale;return t&&!t.isNull?this.base(e):void 0;
}}),e("pvc.visual.CartesianFocusWindow",X.visual.OptionsBase.extend({init:function(e){
this.base(e,"focusWindow",0,{byNaked:!1});var t=e.axes.base;this.base=new X.visual.CartesianFocusWindowAxis(this,t);
},methods:{_exportData:function(){return{base:e.copyProps(this.base,X.visual.CartesianFocusWindowAxis.props)
}},_importData:function(e){var t=e.base;this.base.option.specify({Begin:t.begin,End:t.end,
Length:t.length})},_initFromOptions:function(){this.base._initFromOptions()},_onAxisChanged:function(){
var e=this.option("Changed");e&&e.call(this.chart.basePanel.context())}},options:{
Changed:{resolve:"_resolveFull",cast:e.fun.as}}})),e("pvc.visual.CartesianFocusWindowAxis",X.visual.OptionsBase.extend({
init:function(t,i){this.window=t,this.axis=i,this.isDiscrete=i.isDiscrete(),this.base(i.chart,"focusWindow"+e.firstUpperCase(i.type),0,{
byNaked:!1})},type:{methods:{props:["begin","end","length"]}},methods:{_initFromOptions:function(){
var e=this.option;this.set({begin:e("Begin"),end:e("End"),length:e("Length")})},set:function(t){
var i,n,a,r=this,s=e.get(t,"render"),o=e.get(t,"select",!0);if(t=r._readArgs(t))i=t.begin,
n=t.end,a=t.length;else if(null!=this.begin&&null!=this.end&&null!=this.length)return;
var l,u,c,h,d,f,v,p=r.axis,g=p.scale,m=r.isDiscrete,b=m?null:p.role.lastDimensionType().cast,x=g.domain();
if(m)u=x.length,null!=i&&(f=+i,isNaN(f)||(1/0===f?(c=u-1,i=x[c]):f===-1/0&&(c=0,i=x[c])),
null==c&&(c=x.indexOf(""+i),0>c&&(c=0,i=x[c]))),null!=n&&(v=+n,isNaN(v)||(1/0===v?(h=u-1,
n=x[h]):v===-1/0&&(h=0,n=x[h])),null==h&&(h=x.indexOf(""+n),0>h&&(h=u-1,n=x[h]))),
null!=a&&(a=+a,isNaN(a)?a=null:0>a&&(null!=i||null!=n)&&(l=i,d=c,i=n,c=h,n=l,h=d,
a=-a)),null!=i?null!=n?(c>h&&(l=i,d=c,i=n,c=h,n=l,h=d),a=h-c+1):(null==a&&(a=u-c),
h=c+a-1,h>u-1&&(h=u-1,a=h-c+1),n=x[h]):null!=n?(null==a&&(a=h),c=h-a+1,0>c&&(c=0,
a=h-c+1),i=x[c]):(null==a&&(a=Math.max(~~(u/3),1)),a>u?(a=u,c=0,h=u-1):(d=~~(u/2),
c=d-~~(a/2),h=c+a-1),i=x[c],n=x[h]);else{null!=a&&(a=+a,isNaN(a)?a=null:0>a&&(null!=i||null!=n)&&(l=i,
i=n,n=l,a=-a));var y,_,S=x[0],w=x[1];u=w-S,null!=i&&(S>i&&(i=S),i>w&&(i=w)),null!=n&&(S>n&&(n=S),
n>w&&(n=w)),null!=i?null!=n?(i>n&&(l=i,i=n,n=l),a=n-i):(null==a&&(a=w-i),n=i+a,n>w&&(n=w,
a=n-i)):null!=n?(null==a&&(a=n-S),i=n-a,S>i&&(i=S,a=n-i)):(null==a&&(a=Math.max(~~(u/3),1)),
a>u?(a=u,i=S,n=w):(l=~~(u/2),i=l-~~(a/2),y=+i,_=+a,n=y+_)),i=b(i),n=b(n),a=b(a);var C=r.option("Constraint");
if(C){var k={type:"new",target:"begin",value:i,length:a,length0:a,min:S,max:w,minView:S,
maxView:w};C(k),i=b(k.value),a=b(k.length),y=+i,_=+a,n=b(y+_)}}r._set(i,n,a,o,s)},
_updatePosition:function(e,t,i,n){var a,r,s,o=this,l=o.axis,u=l.scale;if(o.isDiscrete){
var c=u.invertIndex(e),h=u.invertIndex(t)-1,d=u.domain();a=d[c],r=d[h],s=h-c+1}else a=u.invert(e),
r=u.invert(t),s=r-a;this._set(a,r,s,i,n)},_constraintPosition:function(e){var t,i=this,n=i.axis,a=n.scale;
if(i.isDiscrete){var r=Math.floor(a.invertIndex(e.point,!0));if(r>=0){var s=a.range(),o=a.domain().length,l=(s.max-s.min)/o;
r>=o&&("new"===e.type||"resize-begin"===e.type)&&(r=o-1),e.point=r*l}}else if(t=i.option("Constraint")){
var u,c,h,d=n.role.lastDimensionType().cast,f=d(a.invert(e.point)),v="begin"===e.target?1:-1,p=e.point+v*e.length,g=d(a.invert(p)),m=d(v*(g-f));
e.length===e.length0?u=m:(c=e.point+v*e.length0,h=d(a.invert(c)),u=d(v*(h-f)));var b=d(a.invert(e.min)),x=d(a.invert(e.max)),y={
type:e.type,target:e.target,value:f,length:m,length0:u,min:b,max:x,minView:d(a.invert(e.minView)),
maxView:d(a.invert(e.maxView))};t(y),+y.value!==+f&&(f=y.value,e.point=a(f));var _=y.length;
if(+_!==+m)if(+_===+u)e.length=e.length0;else{var S=+f+v*+_,w=a(S);e.length=w-v*e.point;
}+y.min!==+b&&(e.min=a(y.min)),+y.max!==+x&&(e.max=a(y.max))}},_compare:function(e,t){
return this.isDiscrete?""+e==""+t:+e===+t},_set:function(e,t,i,n,a){var r=this,s=!1;
return r._compare(e,r.begin)||(r.begin=e,s=!0),r._compare(t,r.end)||(r.end=t,s=!0),
r._compare(i,r.length)||(r.length=i,s=!0),s&&r.window._onAxisChanged(r),n&&r._updateSelection({
render:a}),s},_readArgs:function(e){if(e){var t={},i=0,n=function(n){var a=e[n];null!=a?i=!0:a=this[n],
t[n]=a};if(X.visual.CartesianFocusWindowAxis.props.forEach(n,this),i)return t}},_updateSelection:function(t){
var n,a,r=this,s=r.axis,o=s.isDiscrete(),l=s.chart,u=s.dataCell,c=u.role,h=l.partData(u.dataPartValue);
if(o){a=c.flatten(h);var d=a.child(r.begin),f=a.child(r.end);if(d&&f){var v=d.childIndex(),p=f.childIndex();
n=e.range(v,p-v+1).select(function(e){return a.childNodes[e]}).selectMany(e.propGet("_datums")).where(i.Datum.isVisibleT).distinct(e.propGet("key"));
}}else{a=h;var g=c.lastDimensionName();n=e.query(h._datums).where(i.Datum.isVisibleT).where(function(e){
var t=e.atoms[g].value;return null!=t&&t>=r.begin&&t<=r.end})}n&&(l.data.replaceSelected(n),
l.root.updateSelections(t))}},options:{Resizable:{resolve:"_resolveFull",cast:Boolean,
value:!0},Movable:{resolve:"_resolveFull",cast:Boolean,value:!0},Begin:{resolve:"_resolveFull"
},End:{resolve:"_resolveFull"},Length:{resolve:"_resolveFull"},Constraint:{resolve:"_resolveFull",
cast:e.fun.as}}})),e.type("pvc.visual.CartesianOrthoDataCell",X.visual.DataCell).init(function(e,t,i,n,a,r,s,o){
this.base(e,t,i,n,a),this.isStacked=r,this.nullInterpolationMode=s,this.trend=o}),
e("pvc.visual.CartesianPlot",X.visual.Plot.extend({init:function(t,i){if(this.base(t,i),
!(t instanceof X.CartesianAbstract))throw e.error(e.format("Plot type '{0}' can only be used from within a cartesian chart.",[this.type]));
},methods:{_initVisualRoles:function(){this.base();var e=this._getSeriesRoleSpec();
e&&this._addVisualRole("series",e)},_getColorRoleSpec:function(){return{isRequired:!0,
defaultDimension:"color*",defaultSourceRole:"series",requireIsDiscrete:!0}},_getSeriesRoleSpec:function(){
return{isRequired:!0,defaultDimension:"series*",autoCreateDimension:!0,requireIsDiscrete:!0
}},_initDataCells:function(){this.base();var e=this.option("DataPart"),t=this._getBaseRole(),i=this._getOrthoRoles();
if(t&&this._addDataCell(new X.visual.DataCell(this,"base",this.option("BaseAxis")-1,t,e)),
i){var n=this.option("OrthoAxis")-1,a=this.option.isDefined("Stacked")?this.option("Stacked"):void 0,r=this.option("NullInterpolationMode"),s=this.option("Trend");
i.forEach(function(t){this._addDataCell(new X.visual.CartesianOrthoDataCell(this,"ortho",n,t,e,a,r,s));
},this)}},_getOrthoRoles:function(){},_getBaseRole:function(){}},options:{BaseAxis:{
value:1},OrthoAxis:{resolve:function(e){return 0===this.globalIndex?(e.specify(1),
!0):this._resolveFull(e)},data:{resolveV1:function(e){return"plot2"===this.name&&this.chart._allowV1SecondAxis&&this._chartOption("secondAxisIndependentScale")&&e.specify(2),
!0}},cast:function(t){return t=e.number.to(t),null!=t?e.between(t,1,10):1},value:1
},Trend:{resolve:"_resolveFull",data:{resolveDefault:function(e){var t=this.option("TrendType");
return t?(e.defaultValue({type:t}),!0):void 0}},cast:U},TrendType:{resolve:"_resolveFull",
cast:X.parseTrendType},TrendLabel:{resolve:"_resolveFull",cast:String},NullInterpolationMode:{
resolve:"_resolveFull",cast:X.parseNullInterpolationMode,value:"none"}}})),e.type("pvc.CartesianAbstract",X.BaseChart).init(function(e){
this.axesPanels={},this.base(e)}).add({_axisClassByType:{base:_e,ortho:_e},contentPanel:null,
_defaultAxisBandSizeRatio:.9,axesPanels:null,yAxisPanel:null,xAxisPanel:null,secondXAxisPanel:null,
secondYAxisPanel:null,yScale:null,xScale:null,_setAxisScale:function(e,t){this.base(e,t);
var i="ortho"===e.type,n=i||"base"===e.type;n&&(i&&1===e.index?this.secondScale=e.scale:e.index||(this[e.orientation+"Scale"]=e.scale));
},_initAxesEnd:function(){var t=this.parent;this._axisOffsetPaddings=t?t._axisOffsetPaddings:this._calcAxesOffsetPaddings(),
this._plotsClientSizeInfo=t?t._plotsClientSizeInfo:this._calcPlotsClientSizeInfo();
var i=this._axisOffsetPct={};e.eachOwn(this._axisOffsetPaddings,function(e,t){null!=e&&(i[t]=new ne(e));
}),this.base()},_eachCartAxis:function(e,t){var i=this.axesByType;["base","ortho"].forEach(function(n){
var a=i[n];a&&a.forEach(function(i){e.call(t,i)})})},_calcPlotsClientSizeInfo:function(){
if(!this.parent){var e=new re(0,0),i=new re(1/0,1/0),n=new re;return this._eachCartAxis(function(t){
var a="x"===t.orientation?"width":"height",r=t.getScaleRangeInfo();r&&(null!=r.value?n[a]=Math.max(n[a]||0,r.value):null!=r.min&&(e[a]=Math.max(e[a],r.min),
i[a]=Math.min(i[a],r.max)))}),i.width=Math.max(i.width,e.width),i.height=Math.max(i.height,e.height),
null!=n.width?n.width=Math.max(Math.min(n.width,i.width),e.width):t.floatEqual(e.width,i.width)&&(n.width=e.width),
null!=n.height?n.height=Math.max(Math.min(n.height,i.height),e.height):t.floatEqual(e.height,i.height)&&(n.height=e.height),
{value:n,min:e,max:i}}},_calcAxesOffsetPaddings:function(){function e(e){var i=e&&e.option("Offset");
null!=i&&i>=0&&.5>i&&("x"===e.orientation?(t("left",i),t("right",i)):(t("top",i),
t("bottom",i)))}function t(e,t){var a=i[e];(null==a||t>a)&&(n=!0,i[e]=t)}var i={},n=!1;
return this._eachCartAxis(e),n?i:null},_createContentPanel:function(e,t){this._createFocusWindow();
var i=new X.CartesianGridDockingPanel(this,e,{margins:t.margins,paddings:t.paddings
});return this._gridDockPanel=i,i},_createContent:function(t,i){["base","ortho"].forEach(function(t){
var i=this.axesByType[t];i&&e.query(i).reverse().each(function(e){this._createAxisPanel(e);
},this)},this),this.base(t,{clickAction:i.clickAction,doubleClickAction:i.doubleClickAction
})},_createFocusWindow:function(){if(this.selectableByFocusWindow()){var e,t=this.focusWindow;
t&&(e=t._exportData()),t=this.focusWindow=new X.visual.CartesianFocusWindow(this),
e&&t._importData(e),t._initFromOptions()}else this.focusWindow&&delete this.focusWindow;
},_createAxisPanel:function(e){var t=e.option;if(t("Visible")){var i,n,a=this.axesPanels[e.id];
if(t("TitleVisible")){var i=a&&a.titlePanel;i&&this._preserveLayout&&(n=i._getLayoutState()),
i=new X.AxisTitlePanel(this,this.contentPanel,e,{title:t("Title"),font:t("TitleFont")||t("Font"),
anchor:t("Position"),align:t("TitleAlign"),margins:n?n.margins:t("TitleMargins"),
paddings:n?n.paddings:t("TitlePaddings"),size:n?n.size:t("TitleSize"),sizeMax:t("TitleSizeMax")
})}n=a&&this._preserveLayout?a._getLayoutState():void 0;var a=new X.AxisPanel(this,this.contentPanel,e,{
anchor:t("Position"),size:n?n.size:t("Size"),margins:n&&n.margins,paddings:n&&n.paddings,
sizeMax:t("SizeMax"),clickAction:t("ClickAction"),doubleClickAction:t("DoubleClickAction"),
useCompositeAxis:t("Composite"),font:t("Font"),labelSpacingMin:t("LabelSpacingMin"),
grid:t("Grid"),gridCrossesMargin:t("GridCrossesMargin"),ruleCrossesMargin:t("RuleCrossesMargin"),
zeroLine:t("ZeroLine"),showTicks:t("Ticks"),showMinorTicks:t("MinorTicks")});return i&&(a.titlePanel=i),
this.axesPanels[e.id]=a,this.axesPanels[e.orientedId]=a,e.v1SecondOrientedId&&(this[e.v1SecondOrientedId+"AxisPanel"]=a),
a}},_onLaidOut:function(){this.plotPanelList&&this.plotPanelList[0]&&this._eachCartAxis(this._setCartAxisScaleRange,this);
},_setCartAxisScaleRange:function(e){var t=this.plotPanelList[0]._layoutInfo,i=t.clientSize,n="x"===e.orientation?i.width:i.height;
return e.setScaleRange(n),e.scale&&!e.scale.isNull&&e.setTicks(e.ticks),e.scale},
_getAxesRoundingOverflow:function(){function e(e,i,n){var a=t[e];null==a||i>a?(t[e]=i,
t[e+"Locked"]=n):n&&(t[e+"Locked"]=n)}var t={};return this._eachCartAxis(function(t){
var i=t.getRoundingOverflow();if(i){var n="x"===t.orientation;e(n?"left":"bottom",i.begin,i.beginLocked),
e(n?"right":"top",i.end,i.endLocked)}}),t},_getContinuousVisibleExtentConstrained:function(e){
return"ortho"===e.type&&1==e.role.isNormalized?{min:0,max:100,minLocked:!0,maxLocked:!0,
lengthLocked:!0}:this.base(e)},_coordinateSmallChartsLayout:function(t){this.base(t);
var i,n=0,a=null,r={};this.children.forEach(function(t){t.basePanel.layout();var s,o=t.titlePanel;
o&&(i||(i=o.anchorOrthoLength()),s=o[i],s>n&&(n=s));var l=t.axesPanels;a||(a=e.query(e.ownKeys(l)).where(function(e){
return e===l[e].axis.id}).select(function(e){return r[e]={axis:0,title:0},e}).array()),
a.forEach(function(e){var t=l[e],i=r[e],n="x"===t.axis.orientation?"height":"width";
s=t[n],s>i.axis&&(i.axis=s);var a=t.titlePanel;a&&(s=a[n],s>i.title&&(i.title=s));
})},this),this.children.forEach(function(e){if(n>0){var t=e.titlePanel;t.size=t.size.clone().set(i,n);
}var s=e.axesPanels;a.forEach(function(e){var t=s[e],i=r[e],n="x"===t.axis.orientation?"height":"width";
t.size=t.size.clone().set(n,i.axis);var a=t.titlePanel;a&&(a.size=a.size.clone().set(n,i.title));
}),e.basePanel.invalidateLayout()},this)},markEventDefaults:{strokeStyle:"#5BCBF5",
lineWidth:"0.5",textStyle:"#5BCBF5",verticalOffset:10,verticalAnchor:"bottom",horizontalAnchor:"right",
forceHorizontalAnchor:!1,horizontalAnchorSwapLimit:80,font:"10px sans-serif"},markEvent:function(i,a,r){
var s=this,o=s.axes.base,l=s.axes.ortho,u=o.role,c=o.scale,h=s.data.owner.dimensions(u.grouping.lastDimensionName());
if(o.isDiscrete())return s.log.warn("Can only mark events in charts with a continuous base scale."),
s;var d=n.extend({},s.markEventDefaults,r),f=h.read(i,a),v=c(f.value),p=c.range(),g=p[1];
if(v<p[0]||v>g)return s.log.warn("Cannot mark event because it is outside the base scale's domain."),
s;var m=this.plotPanelList[0].pvPanel,b=l.scale.range()[1],x=d.horizontalAnchor;if(!d.forceHorizontalAnchor){
var y="right"===x,_=y?g-v:v,S=t.Text.measureWidth(f.label,d.font);S>_&&(x=y?"left":"right");
}var w="top"===d.verticalAnchor?d.verticalOffset:b-d.verticalOffset,C=m.add(t.Line).data([0,b]).bottom(e.identity).left(v).lineWidth(d.lineWidth).strokeStyle(d.strokeStyle);
return C.anchor(x).visible(function(){return!this.index}).top(w).add(t.Label).font(d.font).text(f.label).textStyle(d.textStyle),
s},defaults:{timeSeries:!1,timeSeriesFormat:"%Y-%m-%d"}}),e.type("pvc.CartesianGridDockingPanel",X.GridDockingPanel).init(function(e,t,i){
this.base(e,t,i),this._plotBgPanel=new X.PlotBgPanel(e,this)}).add({_getFillSizeMin:function(){
var e=this.chart.parent?null:this.chart.options.plotSizeMin;return null!=e?re.to(e):null;
},_createCore:function(t){var i=this.chart,n=i.axes,a=n.x,r=n.y;a.isBound()||(a=null),
r.isBound()||(r=null),a&&a.option("Grid")&&(this.xGridRule=this._createGridRule(a)),
r&&r.option("Grid")&&(this.yGridRule=this._createGridRule(r)),this.base(t),i.focusWindow&&this._createFocusWindow(t);
var s=i.compatVersion()>1?e.get(i.options,"plotFrameVisible",!0):!(!a.option("EndLine")&&!r.option("EndLine"));
s&&(this.pvFrameBar=this._createFrame(t,n)),a&&"numeric"===a.scaleType&&a.option("ZeroLine")&&(this.xZeroLine=this._createZeroLine(a,t)),
r&&"numeric"===r.scaleType&&r.option("ZeroLine")&&(this.yZeroLine=this._createZeroLine(r,t));
},_createGridRule:function(i){var n=i.scale;if(!n.isNull){var a=i.role.grouping.isDiscrete(),r=this._getAxisGridRootScene(i);
if(r){var s,o=this._layoutInfo.gridMargins,l=this._layoutInfo.gridPaddings,u="x"===i.orientation?"left":"bottom",c=this.anchorLength(u),h=this.anchorOrtho(u),d=this.anchorOpposite(h),f=this.chart.plotPanelList[0],v="x"===i.orientation?(f.position.left||0)+l.left:(f.position.bottom||0)+l.bottom,p=o[h],g=o[d],m=r.leafs().array(),b=m.length;
a&&b&&m.push(m[b-1]),this.compatVersion()<=1&&(s=function(e){return function(t){return e.call(this,t.vars.tick.rawValue);
}});var x=new X.visual.Rule(this,this.pvPanel,{extensionId:i.extensionPrefixes.map(function(e){
return e+"Grid"}),wrapper:s}).lock("data",m).lock(c,null).override("defaultColor",e.fun.constant(t.color("#f0f0f0"))).pvMark.antialias(!0)[h](p)[d](g).zOrder(-12).events("none");
if(a){var y=n.range().step/2;x[u](function(e){var t=v+n(e.vars.tick.value),i=this.index===b;
return t+(i?y:-y)})}else x[u](function(e){return v+n(e.vars.tick.value)});return x;
}}},_getAxisGridRootScene:function(e){var t=e.isDiscrete(),i=t?e.domainData():this.data,n=new X.visual.CartesianAxisRootScene(null,{
panel:this,source:i});if(t)i.childNodes.forEach(function(e){new X.visual.CartesianAxisTickScene(n,{
source:e,tick:e.value,tickRaw:e.rawValue,tickLabel:e.label})});else{var a=e.ticks||e.calcContinuousTicks();
a.forEach(function(t,i){new X.visual.CartesianAxisTickScene(n,{tick:t,tickRaw:t,tickLabel:e.scale.tickFormat(t,i)
})},this)}return n},_createFrame:function(e,t){if(!t.base.scale.isNull&&(!t.ortho.scale.isNull||t.ortho2&&!t.ortho2.scale.isNull)){
var i=e.gridMargins,n=i.left,a=i.right,r=i.top,s=i.bottom,o=[];return this.compatVersion()<=1&&o.push("xAxisEndLine","yAxisEndLine"),
o.push("plotFrame"),new X.visual.Panel(this,this.pvPanel,{extensionId:o}).pvMark.lock("left",n).lock("right",a).lock("top",r).lock("bottom",s).lock("fillStyle",null).events("none").strokeStyle("#666666").lineWidth(1).antialias(!1).zOrder(-8);
}},_createZeroLine:function(i,n){var a=i.scale;if(!a.isNull){var r=a.domain();if(r[0]*r[1]<-1e-12){
var s="x"===i.orientation?"left":"bottom",o=this.anchorLength(s),l=this.anchorOrtho(s),u=this.anchorOpposite(l),c=n.gridMargins,h=n.gridPaddings,d=c[s]+h[s]+a(0),f=c[l],v=c[u],p=new X.visual.Scene(null,{
panel:this});return new X.visual.Rule(this,this.pvPanel,{extensionId:i.extensionPrefixes.map(function(e){
return e+"ZeroLine"})}).lock("data",[p]).lock(o,null).lock(l,f).lock(u,v).lock(s,d).override("defaultColor",e.fun.constant(t.color("#666666"))).pvMark.events("none").lineWidth(1).antialias(!0).zOrder(-9);
}}},_createFocusWindow:function(i){function n(){E[D]=0-I[_],E[R]=z+I[_]+I[k]}function a(e){
return function(){return E[e]}}function r(){var e=E[P];return Math.max(0,Math.min(V,e));
}function s(){var e=r(),t=E[P]+E[M];return t=Math.max(0,Math.min(V,t)),t-e}function o(e,t){
return new X.visual.Bar(c,e,{extensionId:t,normalStroke:!0,noHover:!0,noSelect:!0,
noClick:!0,noDoubleClick:!0,noTooltip:!0,showsInteraction:!1}).pvMark.lock("data").lock("visible").lock(y,r).lock(S,s).lock(_,a(D)).lock(C,a(R)).lock(k).lock(w).sign;
}function l(){var e=arguments[arguments.length-1],t="end"===e.drag.phase;h._selectingByRubberband=!t,
H.render(),U.render();var i=E[P],n=E[P]+E[M];if(!x){var a=V-i;i=V-n,n=a}f._updatePosition(i,n,t,!0);
}function u(e,t){var i,n,a=e.m,r=a[Y],s=E[Q];switch(t){case"new":i=0,n="begin";break;
case"resize-begin":i=E[Y]+s-r,n="begin";break;case"move":i=s,n="begin";break;case"resize-end":
i=r-E[Y],n="end"}var o=e.min[Y],l=e.max[Y],u={type:t,target:n,point:r,length:i,length0:s,
min:o,max:l,minView:0,maxView:V};switch(f._constraintPosition(u),a[Y]=u.point,t){
case"new":u.length!==i&&(e[Q+"min"]=i=u.length);break;case"resize-begin":u.max=Math.min(u.max,E[Y]+E[Q]);
break;case"resize-end":u.min=Math.max(u.min,E[Y])}e.min[Y]=u.min,e.max[Y]=u.max}var c=this,h=c.topRoot,d=c.chart,f=d.focusWindow.base,v=f.axis,p=v.scale;
if(!p.isNull){var g=f.option("Resizable"),m=f.option("Movable"),b=v.isDiscrete(),x=d.isOrientationVertical(),y=x?"left":"top",_=x?"top":"left",S=c.anchorOrthoLength(y),w=c.anchorOpposite(y),C=c.anchorOrthoLength(_),k=c.anchorOpposite(_),P=x?"x":"y",M="d"+P,D=x?"y":"x",R="d"+D,A=i.gridMargins,I=i.gridPaddings,L={
left:A.left+I.left,right:A.right+I.right,top:A.top+I.top,bottom:A.bottom+I.bottom
},T=i.clientSize,O=T[S],B=T[C];L.width=L.left+L.right,L.height=L.top+L.bottom;var V=O-L[S],z=B-L[C],N=I[y],F=I[w],E=new X.visual.Scene(null,{
panel:this}),W=b?p.range().step:0,q=W/2;E[P]=p(f.begin)-q,E[M]=W+(p(f.end)-q)-E[P],
n();var H=this._plotBgPanel.pvPanel.borderPanel;H.lock("data",[E]),m&&g?H.paddingPanel.events("all").cursor("crosshair").event("mousedown",t.Behavior.select().autoRender(!1).collapse(x?"y":"x").positionConstraint(function(e){
var t="start"===e.phase?"new":"resize-end";return u(e,t)})).event("selectstart",function(){
n(),l.apply(null,arguments)}).event("select",l).event("selectend",l):H.paddingPanel.events("all");
var G=o(H.paddingPanel,"focusWindowBg").override("defaultColor",e.fun.constant(X.invisibleFill)).pvMark;
m?G.events("all").cursor("move").event("mousedown",t.Behavior.drag().autoRender(!1).collapse(x?"y":"x").positionConstraint(function(e){
u(e,"move")})).event("drag",l).event("dragend",l):G.events("none");var U=new X.visual.Panel(c,c.pvPanel).pvMark.lock("data",[E]).lock("visible").lock("fillStyle",X.invisibleFill).lock("left",L.left).lock("right",L.right).lock("top",L.top).lock("bottom",L.bottom).lock("zOrder",10).events(function(){
var e=E.drag;return e&&"end"!==e.phase?"all":"none"}).cursor(function(){var e=E.drag;
return e&&"end"!==e.phase?"drag"===e.type||"select"===e.type&&!g?"move":x?"ew-resize":"ns-resize":null;
}).antialias(!1),j="rgba(20, 20, 20, 0.1)";new X.visual.Bar(c,U,{extensionId:"focusWindowBaseCurtain",
normalStroke:!0,noHover:!0,noSelect:!0,noClick:!0,noDoubleClick:!0,noTooltip:!0,showsInteraction:!1
}).override("defaultColor",function(e,t){return"stroke"===t?null:j}).pvMark.lock("data",[E,E]).lock("visible").events("none").lock(y,function(){
return this.index?r()+s():-N}).lock(w,function(){return this.index?-F:null}).lock(S,function(){
return this.index?null:N+r()}).lock(_,a(D)).lock(C,a(R)).lock(k);var K=o(U,"focusWindow").override("defaultColor",e.fun.constant(null)).pvMark.events("none"),Z=function(i){
var n="left"===i||"top"===i?"begin":"end",a=c.anchorOpposite(i),r="linear-gradient(to "+a+", "+j+", #444 90%)",s=new X.visual.Bar(c,K.anchor(i),{
extensionId:f.id+"Grip"+e.firstUpperCase(n),normalStroke:!0,noHover:!0,noSelect:!0,
noClick:!0,noDoubleClick:!0,noTooltip:!0,showsInteraction:!1}).override("defaultColor",function(e,t){
return"stroke"===t?null:r}).pvMark.lock("data").lock("visible")[_](E[D])[C](E[R]);
if(g){var o="resize-"+n;s.events("all")[S](5).cursor(x?"ew-resize":"ns-resize").event("mousedown",t.Behavior.resize(i).autoRender(!1).positionConstraint(function(e){
u(e,o)}).preserveOrtho(!0)).event("resize",l).event("resizeend",l)}else s.events("none")[S](1);
return s};Z(y),Z(w);var Y=P,Q=M}},_getDatumsOnRect:function(t,i,n){var a,r,s=this.chart,o=s.axesPanels.x,l=s.axesPanels.y;
o&&(a=new e.Map,o._getDatumsOnRect(a,i,n),a.count||(a=null)),l&&(r=new e.Map,l._getOwnDatumsOnRect(r,i,n),
r.count||(r=null)),a&&r?(a.intersect(r,t),n.toggle=!0):a?t.copy(a):r?t.copy(r):s.plotPanelList.forEach(function(e){
e._getDatumsOnRect(t,i,n)},this)}}),e.type("pvc.CartesianAbstractPanel",X.PlotPanel).init(function(e,t,i,n){
function a(e){r[e.type]=e,r[e.orientedId]=e,e.v1SecondOrientedId&&(r[e.v1SecondOrientedId]=e);
}this.base(e,t,i,n);var r=this.axes;a(e._getAxis("base",i.option("BaseAxis")-1)),
a(e._getAxis("ortho",i.option("OrthoAxis")-1))}).add({_getOptionSizeMin:function(){
return null},_calcLayout:function(e){var t,i=this.chart,n=i._plotsClientSizeInfo;if(n){
t=e.clientSize;var a=n.value,r=n.min,s=n.max;t.width=null!=a.width?a.width:Math.max(Math.min(t.width,s.width),r.width),
t.height=null!=a.height?a.height:Math.max(Math.min(t.height,s.height),r.height)}return i._preserveLayout||(e.contentOverflow=this._calcContentOverflow(e)),
t},_calcContentOverflow:function(e){var t,i=this.chart._axisOffsetPaddings;if(i){
var n=this.chart._getAxesRoundingOverflow();ae.names.forEach(function(a){if(!n[a+"Locked"]){
var r=X.BasePanel.orthogonalLength[a],s=e.size[r]*(i[a]||0),o=n[a]||0;(t||(t={}))[a]=Math.max(s-o,0);
}},this)}return t},_createCore:function(){this.pvPanel.zOrder(-10);var e=this.chart.options.leafContentOverflow||"auto",t="auto"===e?this._guessHideOverflow():"hidden"===e;
t&&this.pvPanel.borderPanel.overflow("hidden")},_guessHideOverflow:function(){return j(this.axes.ortho)||j(this.axes.base);
}}),e("pvc.visual.CategoricalPlot",X.visual.CartesianPlot.extend({methods:{createVisibleData:function(t,i){
var n=this.visualRoles.series,a=n&&n.flattenedGrouping(),r=this.visualRole("category").flattenedGrouping();
return a?t.groupBy(e.get(i,"inverted",!1)?[a,r]:[r,a],i):t.groupBy(r,i)},interpolatable:function(){
return!0},_initVisualRoles:function(){this.base(),this._addVisualRole("category",this._getCategoryRoleSpec());
},_getCategoryRoleSpec:function(){return{isRequired:!0,defaultDimension:"category*",
autoCreateDimension:!0}},getContinuousVisibleCellExtent:function(t,i,n){var a=n.role;
switch(a.name){case"series":case"category":return this.base(t,i,n)}if(n.plot!==this)throw e.error.operationInvalid("DataCell not of this plot.");
t._warnSingleContinuousValueRole(a);var r=n.dataPartValue,s=a.lastDimensionName(),o=t.visiblePlotData(this,r),l=i.scaleUsesAbs();
return"ortho"===i.type&&n.isStacked?o.children().select(function(e){var t=this._getStackedCategoryValueExtent(e,s,l);
return t?{range:t,group:e}:void 0},this).where(e.notNully).reduce(function(e,a){return this._reduceStackedCategoryValueExtent(t,e,a.range,a.group,i,n);
}.bind(this),null):o.leafs().select(function(e){var t=e.dimensions(s).value();return l&&0>t?-t:t;
}).range()},_getStackedCategoryValueExtent:function(e,t,i){var n=null,a=null;return e.children().select(function(e){
var n=e.dimensions(t).value();return i&&0>n?-n:n}).each(function(e){null!=e&&(e>=0?n+=e:a+=e);
}),null==n&&null==a?null:{max:n||0,min:a||0}},_reduceStackedCategoryValueExtent:function(e,t,i){
return X.unionExtents(t,i)},_getBaseRole:function(){return this.visualRoles.category;
},_getOrthoRoles:function(){return[this.visualRoles.value]},interpolateDataCell:function(e,t){
var i=this._getNullInterpolationOperType(e.nullInterpolationMode);if(i){this.chart._warnSingleContinuousValueRole(e.role);
var n=e.dataPartValue,a=this.chart.partData(n,t),r=this.chart.visiblePlotData(this,n,{
baseData:t});r.childCount()>0&&new i(t,a,r,this.visualRoles.category,this.visualRoles.series,e.role,!0).interpolate();
}},_getNullInterpolationOperType:function(t){switch(t){case"linear":return i.LinearInterpolationOper;
case"zero":return i.ZeroInterpolationOper;case"none":break;default:throw e.error.argumentInvalid("nullInterpolationMode",""+t);
}},generateTrendsDataCell:function(t,n,a){function r(n){var a=f?null:function(e){
return e.atoms[h].value},r=function(e){var t=g.child(e.key);return t&&n&&(t=t.child(n.key)),
t?t.dimensions(d).value(v):null},s=e.create(u,{rows:e.query(x),x:a,y:r}),o=c.model(s);
o&&x.forEach(function(a,s){var l=f?s:a.atoms[h].value,c=o.sample(l,r(a),s);if(null!=c){
var v,p=g.child(a.key),x=p||a;if(n){var y=p&&p.child(n.key);y?v=Object.create(y._datums[0].atoms):(v=Object.create(x._datums[0].atoms),
e.copyOwn(v,n.atoms))}else v=Object.create(x._datums[0].atoms);v[d]=c,v[b]=m,t.push(new i.TrendDatum(x.owner,v,u));
}})}var s=this.visualRoles.series,o=this.visualRoles.category,l=n.role,u=n.trend,c=u.info;
this.chart._warnSingleContinuousValueRole(l);var h,d=l.lastDimensionName(),f=o.isDiscrete();
f||(h=o.lastDimensionName());var v={zeroIfNone:!1},p=this.chart.partData(n.dataPartValue,a),g=this.chart.visiblePlotData(this,n.dataPartValue,{
baseData:a}),m=this.chart._getTrendDataPartAtom(),b=m.dimension.name,x=o.flatten(a,{
visible:!0}).childNodes,y=s&&s.isBound()?s.flatten(p,{visible:!0}).children():e.query([null]);
y.each(r)}},options:{Stacked:{resolve:"_resolveFull",cast:Boolean,value:!1}}})),e.type("pvc.CategoricalAbstract",X.CartesianAbstract).add({
_onWillCreatePlotPanelScene:function(){}}),e.type("pvc.CategoricalAbstractPanel",X.CartesianAbstractPanel).init(function(e,t,i,n){
this.base(e,t,i,n),this.stacked=i.option("Stacked")}).add({_buildScene:function(e,t,i){
return this.chart._onWillCreatePlotPanelScene(this,e,t,i),this._buildSceneCore(e,t,i);
}}),e("pvc.visual.MetricXYPlot",X.visual.CartesianPlot.extend({methods:{_initVisualRoles:function(){
this.base(),this._addVisualRole("x",{isMeasure:!0,isRequired:!0,requireSingleDimension:!0,
requireIsDiscrete:!1,defaultDimension:"x",dimensionDefaults:{valueType:this.chart.options.timeSeries?Date:Number
}}),this._addVisualRole("y",{isMeasure:!0,isRequired:!0,requireSingleDimension:!0,
requireIsDiscrete:!1,defaultDimension:"y",dimensionDefaults:{valueType:Number}})},
_getBaseRole:function(){return this.visualRoles.x},_getOrthoRoles:function(){return[this.visualRoles.y];
},generateTrendsDataCell:function(t,n,a){function r(n){var a=function(e){return e.atoms[h].value;
},r=function(e){return e.atoms[d].value},s=n.datums().sort(null,a).array(),o=e.create(u,{
rows:e.query(s),x:a,y:r}),l=c.model(o);l&&s.forEach(function(s,o){var c,g=a(s);if(g&&null!=(c=l.sample(g,r(s),o))){
var m=e.set(Object.create(n.atoms),h,g,d,c,p,v);t.push(new i.TrendDatum(f.owner,m,u));
}})}var s=this.visualRoles.series,o=this.visualRoles.x,l=n.role,u=n.trend,c=u.info;
this.chart._warnSingleContinuousValueRole(l);var h=o.lastDimensionName(),d=l.lastDimensionName(),f=this.chart.visiblePlotData(this,n.dataPartValue,{
baseData:a}),v=this.chart._getTrendDataPartAtom(),p=v.dimension.name;(s.isBound()?f.children():e.query([f])).each(r);
}},options:{OrthoAxis:{resolve:null}}})),e.type("pvc.MetricXYAbstract",X.CartesianAbstract).add({
_defaultAxisBandSizeRatio:1}),e.type("pvc.BarAbstract",X.CategoricalAbstract),e("pvc.visual.BarPlotAbstract",X.visual.CategoricalPlot.extend({
methods:{_initVisualRoles:function(){this.base(),this._addVisualRole("value",{isMeasure:!0,
isRequired:!0,isPercent:this.option("Stacked"),isNormalized:this.option("ValuesNormalized"),
requireSingleDimension:!0,requireIsDiscrete:!1,valueType:Number,defaultDimension:"value"
})},_getCategoryRoleSpec:function(){return e.set(this.base(),"requireIsDiscrete",!0);
}},options:{BarSizeRatio:{resolve:"_resolveFull",cast:function(t){return t=e.number.to(t),
null==t?1:.05>t?.05:t>1?1:t},value:.9},BarSizeMax:{resolve:"_resolveFull",data:{resolveV1:function(e){
return this._specifyChartOption(e,"maxBarSize"),!0}},cast:function(t){return t=e.number.to(t),
null==t?1/0:1>t?1:t},value:2e3},BarOrthoSizeMin:{resolve:"_resolveFull",cast:e.number.toNonNegative,
value:1.5},BarStackedMargin:{resolve:"_resolveFull",cast:function(t){return t=e.number.to(t),
null!=t&&0>t?0:t},value:0},OverflowMarkersVisible:{resolve:"_resolveFull",cast:Boolean,
value:!0},ValuesAnchor:{value:"center"},ValuesNormalized:{resolve:"_resolveFull",
cast:"boolean","default":!1}}})),e.type("pvc.BarAbstractPanel",X.CategoricalAbstractPanel).add({
pvBar:null,pvBarLabel:null,pvCategoryPanel:null,pvSecondLine:null,pvSecondDot:null,
_creating:function(){var e=this.plot.dataCellsByRole.color[0];if(!e.legendSymbolRenderer()&&e.legendVisible()){
var i=this.axes.color,n=i.option("LegendDrawLine"),a=!n||i.option("LegendDrawMarker");
if(a){var r=X.uniqueExtensionAbsPrefix();this.chart._processExtensionPointsIn(e.role.legend(),r);
var s={drawMarker:!0,markerShape:i.option("LegendShape"),drawLine:n,extensionPrefix:{
abs:r},markerPvProto:new t.Dot};this.extend(s.markerPvProto,"bar",{constOnly:!0}),
e.legendSymbolRenderer(s)}}},_createCore:function(){this.base();var e,i,n=this,a=n.chart,r=n.plot,s=!!n.stacked,o=n.isOrientationVertical(),l=n.visibleData({
ignoreNulls:!1}),u=n.axes.ortho,c=n.axes.base,h=c.domainItems(),d=n.visualRoles.series.flatten(n.partData(),{
visible:!0,isNull:a.options.ignoreNulls?!1:null}).childNodes,f=n._buildScene(l,d,h),v=u.scale,p=v(0),g=u.sceneScale({
sceneVarName:"value",nullToZero:!1}),m=c.sceneScale({sceneVarName:"category"}),b=r.option("BarSizeRatio"),x=r.option("BarSizeMax"),y=r.option("BarStackedMargin"),_=r.option("BarOrthoSizeMin"),S=c.scale.range(),w=S.band,C=S.step,k=S.margin,P=o===s;
s?e=w:(i=d.length,e=i?1===i?w:b*w/i:0),e>x&&(e=x),n.barWidth=e,n.barStepWidth=C;var M;
n.compatVersion()<=1&&(M=function(e){return function(t){var i=Object.create(this.parent),n=Object.create(this);
n.parent=i;var a=t.parent.childIndex(),r=t.childIndex();return s?(i.index=a,n.index=r):(i.index=r,
n.index=a),e.call(n,t.vars.value.rawValue)}}),n.pvBarPanel=new X.visual.Panel(n,n.pvPanel,{
panelType:t.Layout.Band,extensionId:"panel"}).lock("layers",f.childNodes).lockMark("values",function(e){
return e.childNodes}).lockMark("orient",o?"bottom-left":"left-bottom").lockMark("layout",s?"stacked":"grouped").lockMark("verticalMode",n._barVerticalMode()).lockMark("yZero",p).optionalMark("hZero",_).pvMark.band.x(m).w(w).differentialControl(n._barDifferentialControl()).item.order(P?"reverse":null).h(function(e){
var t=g(e);return null!=t?a.animate(0,t-p):null}).w(e).horizontalRatio(b).verticalMargin(y).end;
var D=4>=e||2>k,R=this.pvBar=new X.visual.Bar(n,n.pvBarPanel.item,{extensionId:"bar",
freePosition:!0,wrapper:M}).lockDimensions().optional("visible",function(e){return null!=e.getValue();
}).pvMark.antialias(function(e){if(D)return!0;var t=g(e),i=null==t?0:Math.abs(t-p);
return 1e-8>i});r.option("OverflowMarkersVisible")&&this._addOverflowMarkers(M);var A=X.visual.ValueLabel.maybeCreate(n,R,{
wrapper:M});if(A){var I;A.hideOrTrimOverflowed&&(I=w,!s&&i>1&&(I/=i)),n.pvBarLabel=A.override("calcTextFitInfo",function(e,i){
var n=this.pvMark,a=n.textMargin();if(!(-1e-6>a)){var r=n.textAngle(),s=Math.sin(r),l=Math.abs(s)<1e-6,u=!l&&Math.abs(Math.cos(r))<1e-6;
if(l||u&&o){var c,h,d,f=R.height(),v=R.width(),p=o?f:v,g=o?v:f,m=t.Text.measure(i,n.font()),b=.75*m.height,x=m.width,y=n.name(),_=n.textBaseline(),S=n.textAlign(),w="center"===y,C=!1;
if(o)if(l){if(h=w||y===_,!h)return;C|=w&&"middle"!==_?b+a>p/2:b+2*a>p}else C|=b>p,
d="center"===S,h=w,h||d||(h=s>=1e-6?"left"===S?"top"===y:"bottom"===y:"left"===S?"bottom"===y:"top"===y),
h?(c=!w||d?p-2*a:(p-a)/2,C|=("middle"===_?b>g:b>g/2)||this.hideOverflowed&&x>c):C|=b>=Math.max(g,I);else C|=b>p,
h=w||y===S,h?(c=w&&"center"!==S?(p-a)/2:p-2*a,C|=("middle"===_?b>g:b>g/2)||this.hideOverflowed&&x>c):C|=b>=Math.max(g,I);
return{hide:C,widthMax:c}}}}).pvMark}},_barVerticalMode:function(){return this.plot.option("ValuesNormalized")?"expand":null;
},_barDifferentialControl:function(){return null},_getV1Datum:function(e){var t=e.datum;
if(t){var i=Object.create(t);i.percent=e.vars.value.percent,t=i}return t},_guessHideOverflow:function(){
return this.base()||!this.stacked&&!this.axes.ortho.option("OriginIsZero")},_addOverflowMarkers:function(e){
var t=this.axes.ortho,i=this.stacked||t.option("OriginIsZero");i&&null==t.option("FixedMax")||(this.pvOverflowMarker=this._addOverflowMarker(!1,t.scale,e)),
i&&null==t.option("FixedMin")||(this.pvUnderflowMarker=this._addOverflowMarker(!0,t.scale,e));
},_addOverflowMarker:function(e,t,i){var n,a=this.isOrientationVertical(),r=a?"bottom":"left",s=this.anchorOpposite(r),o=this.anchorOrthoLength(r),l=this.anchorLength(r),u=this.plot.option("BarOrthoSizeMin")/2,c=this._layoutInfo.paddings,h=t.min-c[r],d=t.max+c[s],f=e?h:d;
return n=e?a?0:Math.PI/2:a?Math.PI:-Math.PI/2,new X.visual.Dot(this,this.pvBar.anchor("center"),{
noSelect:!0,noHover:!0,noClick:!0,noDoubleClick:!0,noTooltip:!1,freePosition:!0,extensionId:e?"underflowMarker":"overflowMarker",
wrapper:i}).intercept("visible",function(t){var i=this.delegateExtension();if(void 0!==i&&!i)return!1;
var n=t.vars.value.value;if(null==n)return!1;var a=this.pvMark.scene.target[this.pvMark.index],s=a[r],l=s+a[o],c=0>n?s:l,f=e?h>=l||h>c:s>=d||c>d;
if(!f)return!1;if(0!==n)return!0;var v=e?h-l:l-d;return v>u}).pvMark.shape("triangle").shapeRadius(function(){
return Math.min(Math.sqrt(10),this.scene.target[this.index][l]/2)}).shapeAngle(n).lineWidth(1.5).strokeStyle("red").fillStyle("white")[s](null)[r](function(){
return f+(e?1:-1)*(this.shapeRadius()+2)})},renderInteractive:function(){this.pvPanel.render();
},_buildSceneCore:function(e,t,i){function n(t){var n=new X.visual.Scene(a,{source:t
}),r=t.key;n.vars.series=ce.fromComplex(t),o.onNewScene(n,!1),i.forEach(function(t){
var i=e.child(t.key),a=i&&i.child(r),l=new X.visual.Scene(n,{source:a}),u=l.vars.category=ce.fromComplex(i);
u.group=i,s.onNewScene(l,!0),o.onNewScene(l,!0)})}var a=new X.visual.Scene(null,{
panel:this,source:e}),r=this.visualRoles,s=new X.visual.RoleVarHelper(a,"value",r.value,{
hasPercentSubVar:this.stacked}),o=new X.visual.RoleVarHelper(a,"color",r.color);return t.forEach(n),
a}}),t.PieSlice=function(){t.Wedge.call(this)},t.PieSlice.prototype=t.extend(t.Wedge).property("offsetRadius");
var ke=t.Shape.normalizeAngle;return t.PieSlice.prototype.midAngle=function(){var e=this.instance();
return ke(e.startAngle)+ke(e.angle)/2},t.PieSlice.prototype.defaults=(new t.PieSlice).extend(t.Wedge.prototype.defaults).offsetRadius(0),
e("pvc.visual.PieSlice",X.visual.Sign.extend({init:function(i,n,a){var r=n.add(t.PieSlice);
a=e.setDefaults(a,"freeColor",!1),this.base(i,r,a),this._activeOffsetRadius=e.get(a,"activeOffsetRadius",0),
this._maxOffsetRadius=e.get(a,"maxOffsetRadius",0),this._resolvePctRadius=e.get(a,"resolvePctRadius"),
this._center=e.get(a,"center"),this.optional("lineWidth",.6)._bindProperty("angle","angle")._bindProperty("offsetRadius","offsetRadius")._lockDynamic("bottom","y")._lockDynamic("left","x").lock("top",null).lock("right",null);
},properties:["offsetRadius"],methods:{angle:e.fun.constant(0),x:function(){return this._center.x+this._offsetSlice("cos");
},y:function(){return this._center.y-this._offsetSlice("sin")},_offsetSlice:function(e){
var t=this.pvMark.offsetRadius()||0;return t&&(t*=Math[e](this.pvMark.midAngle())),
t},defaultColor:function(e,t){return"stroke"===t?null:this.base(e,t)},interactiveColor:function(e,t,i){
if(this.mayShowActive(e,!0))switch(i){case"fill":return t.brighter(.2).alpha(.8);case"stroke":
return t.brighter(1.3).alpha(.7)}else if(this.mayShowNotAmongSelected(e)&&"fill"===i)return this.dimColor(t,i);
return this.base(e,t,i)},offsetRadius:function(e){var t=this.base(e);return Math.min(Math.max(0,t),this._maxOffsetRadius);
},baseOffsetRadius:function(e){var t=this.base(e)||0;return this._resolvePctRadius(ne.parse(t));
},interactiveOffsetRadius:function(e,t){return t+(this.mayShowActive(e,!0)?this._activeOffsetRadius:0);
}}})),e("pvc.visual.PiePlot",X.visual.Plot.extend({init:function(t,i){if(this.base(t,i),
!(t instanceof X.PieChart))throw e.error(e.format("Plot type '{0}' can only be used from within a pie chart.",[this.type]));
},methods:{type:"pie",_initVisualRoles:function(){this.base(),this._addVisualRole("category",{
isRequired:!0,defaultDimension:"category*",autoCreateDimension:!0}),this._addVisualRole("value",{
isMeasure:!0,isRequired:!0,isPercent:!0,requireSingleDimension:!0,requireIsDiscrete:!1,
valueType:Number,defaultDimension:"value"})},_getColorRoleSpec:function(){return{
isRequired:!0,defaultSourceRole:"category",defaultDimension:"color*",requireIsDiscrete:!0
}},createVisibleData:function(e,t){return this.visualRoles.category.flatten(e,t)},
_initDataCells:function(){this.base();var e=this.option("DataPart");this._addDataCell(new X.visual.DataCell(this,"category",this.index,this.visualRole("category"),e)),
this._addDataCell(new X.visual.DataCell(this,"angle",this.index,this.visualRoles.value,e));
}},options:{ActiveSliceRadius:{resolve:"_resolveFull",cast:ne.parse,value:new ne(.05)
},ExplodedSliceRadius:{resolve:"_resolveFull",cast:ne.parse,value:0},ExplodedSliceIndex:{
resolve:"_resolveFull",cast:e.number.to,value:null},ValuesAnchor:{cast:X.parseAnchorWedge,
value:"outer"},ValuesVisible:{value:!0},ValuesLabelStyle:{resolve:function(e){return this.chart.compatVersion()>1?this._resolveFull(e):(e.specify("inside"),
!0)},cast:function(t){switch(t){case"inside":case"linked":return t}return e.debug>=2&&e.log("[Warning] Invalid 'ValuesLabelStyle' value: '"+t+"'."),
"linked"},value:"linked"},ValuesMask:{resolve:"_resolveFull",data:{resolveDefault:function(e){
return e.defaultValue("linked"===this.option("ValuesLabelStyle")?"{value} ({value.percent})":"{value}"),
!0}}},LinkInsetRadius:{resolve:"_resolveFull",cast:ne.parse,value:new ne(.05)},LinkOutsetRadius:{
resolve:"_resolveFull",cast:ne.parse,value:new ne(.025)},LinkMargin:{resolve:"_resolveFull",
cast:ne.parse,value:new ne(.025)},LinkHandleWidth:{resolve:"_resolveFull",cast:e.number.to,
value:.5},LinkLabelSize:{resolve:"_resolveFull",cast:ne.parse,value:new ne(.15)},
LinkLabelSpacingMin:{resolve:"_resolveFull",cast:e.number.to,value:.5}}})),X.visual.Plot.registerClass(X.visual.PiePlot),
e.type("pvc.PiePanel",X.PlotPanel).init(function(e,t,i,n){var a=i.option("ValuesLabelStyle");
this.base(e,t,i,n),this.explodedOffsetRadius=i.option("ExplodedSliceRadius"),this.explodedSliceIndex=i.option("ExplodedSliceIndex"),
this.activeOffsetRadius=i.option("ActiveSliceRadius"),this.labelStyle=a,"linked"===a&&(this.linkInsetRadius=i.option("LinkInsetRadius"),
this.linkOutsetRadius=i.option("LinkOutsetRadius"),this.linkMargin=i.option("LinkMargin"),
this.linkHandleWidth=i.option("LinkHandleWidth"),this.linkLabelSize=i.option("LinkLabelSize"),
this.linkLabelSpacingMin=i.option("LinkLabelSpacingMin")),e.pieChartPanel||(e.pieChartPanel=this),
this.axes.category=e._getAxis("category",i.index),this.axes.angle=e._getAxis("angle",i.index);
}).add({plotType:"pie",_ibits:-1,pvPie:null,pvPieLabel:null,valueRoleName:"value",
_getV1Datum:function(e){var t=e.datum;if(t){var i=Object.create(t);i.percent=e.vars.value.percent,
t=i}return t},_calcLayout:function(i){function n(t){return e.between(ne.resolve(t,o),0,o);
}function a(t){return e.between(ne.resolve(t,s),0,s)}var r=i.clientSize,s=r.width,o=Math.min(s,r.height)/2;
if(!o)return new re(0,0);var l=t.vector(r.width/2,r.height/2),u=this._getConstantExtension("label","font");
e.string.is(u)||(u=this.valuesFont);var c=o;if(this.valuesVisible&&"linked"===this.labelStyle){
var h=e.number.to(this._getConstantExtension("label","textMargin"),3),d=t.Text.fontHeight(u),f=this.linkHandleWidth*d,v=n(this.linkInsetRadius),p=n(this.linkOutsetRadius),g=a(this.linkMargin)+f,m=a(this.linkLabelSize),b=this.linkLabelSpacingMin*d,x=Math.max(0,s/2-o),y=Math.max(0,p+g+m-x),_=p+d,S=Math.max(0,_,y);
S>=c?(this.valuesVisible=!1,e.debug>=2&&this.log("Hiding linked labels due to insufficient space.")):(c-=S,
i.link={insetRadius:v,outsetRadius:p,elbowRadius:c+p,linkMargin:g,handleWidth:f,labelSize:m,
maxTextWidth:m-h,labelSpacingMin:b,textMargin:h,lineHeight:d})}var w=n(this.explodedOffsetRadius),C=0;
this.hoverable()&&(C=n(this.activeOffsetRadius));var k=w+C,P=c-k;return 0>P?new re(0,0):(i.resolvePctRadius=n,
i.center=l,i.clientRadius=o,i.normalRadius=P,i.explodedOffsetRadius=w,i.activeOffsetRadius=C,
i.maxOffsetRadius=k,void(i.labelFont=u))},_createCore:function(i){var n,a=this,r=a.chart,s=this._buildScene(),o=i.center,l=i.normalRadius,u=["slice"];
if(this.compatVersion()<=1&&(u.push(""),n=function(e){return function(t){return e.call(this,t.vars.value.value);
}}),this.pvPie=new X.visual.PieSlice(this,this.pvPanel,{extensionId:u,center:o,activeOffsetRadius:i.activeOffsetRadius,
maxOffsetRadius:i.maxOffsetRadius,resolvePctRadius:i.resolvePctRadius,wrapper:n,tooltipArgs:{
options:{useCorners:!0,gravity:function(){var e=this.midAngle(),t=Math.cos(e)>=0,i=Math.sin(e)>=0;
return t?i?"nw":"sw":i?"ne":"se"}}}}).lock("data",s.childNodes).override("angle",function(e){
return e.vars.value.angle}).override("defaultOffsetRadius",function(){var e=a.explodedSliceIndex;
return null==e||e==this.pvMark.index?i.explodedOffsetRadius:0}).optionalMark("outerRadius",function(){
return r.animate(0,l)}).localProperty("innerRadiusEx",ne.parse).intercept("innerRadius",function(){
var e=this.delegateExtension();if(null==e){var t=this.pvMark.innerRadiusEx();e=null!=t?ne.resolve(t,this.pvMark.outerRadius())||0:0;
}return e>0?r.animate(0,e):0}).pvMark,this.valuesVisible){if(this.valuesFont=i.labelFont,
"inside"===this.labelStyle)this.pvPieLabel=X.visual.ValueLabel.maybeCreate(this,this.pvPie,{
wrapper:n}).override("defaultText",function(e){return e.vars.value.sliceLabel}).override("calcTextFitInfo",function(e,i){
var n=this.pvMark,r=n.textMargin();if(!(-1e-6>r)){var s=n.textBaseline();if("middle"===s){
var o=X.normAngle(a.pvPie.midAngle()),l=X.normAngle(n.textAngle()),u=Math.abs(o-l)<1e-6,c=!1;
if(!u){var h=X.normAngle(l+Math.PI);c=Math.abs(o-h)<1e-6}if(u||c){var d=n.name(),f=n.textAlign(),v="outer"===d?f===(u?"right":"left"):!1;
if(v){var p=!1,g=t.Text.measure(i,n.font()),m=.85*g.height,b=a.pvPie.outerRadius(),x=a.pvPie.innerRadius(),y=e.vars.value.angle,_=m+r/2,S=y<Math.PI?Math.max(x,_/(2*Math.tan(y/2))):x,w=b-r-S;
return p|=0>=w,w-=r,p|=this.hideOverflowed&&g.width>w,{hide:p,widthMax:w}}}}}}).pvMark.textMargin(10);else if("linked"===this.labelStyle){
var c=i.link;s.layoutLinkLabels(i),this.pvLinkPanel=this.pvPanel.add(t.Panel).data(s.childNodes).localProperty("pieSlice").pieSlice(function(){
return a.pvPie.scene[this.index]});var h=!1,d=!0;if(this.pvLinkLine=new X.visual.Line(this,this.pvLinkPanel,{
extensionId:"linkLine",freePosition:d,noClick:d,noDoubleClick:d,noSelect:d,noTooltip:d,
noHover:d,showsActivity:h}).lockMark("data",function(e){var t=this.parent.pieSlice(),i=t.startAngle+t.angle/2,n=t.outerRadius-c.insetRadius,a=t.left+n*Math.cos(i),r=t.top+n*Math.sin(i),s=e.childNodes[0];
return s&&s._isFirstDynamicScene?(s.x=a,s.y=r):(s=new X.visual.PieLinkLineScene(e,a,r,0),
s._isFirstDynamicScene=d),e.childNodes}).override("defaultColor",function(e,t){return"stroke"===t?"black":this.base(e,t);
}).override("defaultStrokeWidth",e.fun.constant(.5)).pvMark.lock("visible").lock("top",function(e){
return e.y}).lock("left",function(e){return e.x}),this.pvPieLabel=new X.visual.Label(this,this.pvLinkPanel,{
extensionId:"label",noClick:h,noDoubleClick:h,noSelect:h,noHover:h,showsInteraction:d
}).lockMark("data",function(e){return e.lineScenes}).intercept("textStyle",function(e){
this._finished=h;var t=this.delegate();return t&&!this._finished&&!this.mayShowActive(e)&&this.mayShowNotAmongSelected(e)&&(t=this.dimColor(t,"text")),
t}).pvMark.lock("visible").left(function(e){return e.vars.link.labelX}).top(function(e){
return e.vars.link.labelY+(this.index+1)*c.lineHeight}).textAlign(function(e){return e.vars.link.labelAnchor;
}).textMargin(c.textMargin).textBaseline("bottom").text(function(e){return e.vars.link.labelLines[this.index];
}),e.debug>=20){this.pvPanel.add(t.Panel).zOrder(-10).left(o.x-i.clientRadius).top(o.y-i.clientRadius).width(2*i.clientRadius).height(2*i.clientRadius).strokeStyle("red"),
this.pvPanel.strokeStyle("green");var f=t.Colors.category10();this.pvLinkLine.segmented(d).strokeStyle(function(){
return f(this.index)})}}this.pvPieLabel.font(i.labelFont)}},renderInteractive:function(){
this.pvPanel.render()},_buildScene:function(){var e=new X.visual.PieRootScene(this);
return this.sum=e.vars.sumAbs.value,e}}),X.PlotPanel.registerClass(X.PiePanel),e.type("pvc.visual.PieRootScene",X.visual.Scene).init(function(t){
function i(e,t){if(t){var i=t._datums;if(1===i.length)return i[0].atoms[s].label}
return o.format(e)}var n=t.axes.category,a=n.domainData();this.base(null,{panel:t,
source:a});var r=new X.visual.RoleVarHelper(this,"color",t.visualRoles.color),s=t.visualRoles[t.valueRoleName].lastDimensionName(),o=a.dimensions(s),l=t.chart.options.percentValueFormat,u=t.axes.angle.scale,c=u.isNull?0:u.domain()[1],h=this;
this.vars.sumAbs=new ce(c,i(c));var d=e.type(X.visual.PieCategoryScene).init(function(e,t){
this.base(h,{source:e}),this.vars.category=ce.fromComplex(e);var n=new ce(t,i(t,e));
n.angle=u(t);var a=Math.abs(t)/c;n.percent=new ce(a,l(a)),this.vars.value=n,n.sliceLabel=this.sliceLabel(),
r.onNewScene(this,!0)});t._extendSceneType("category",d,["sliceLabel","sliceLabelMask"]);
var f=n.domainItems();if(f.length&&(f.forEach(function(e){var t=e.dimensions(s).value();
0!==t&&new d(e,t)}),!h.childNodes.length&&!t.chart.visualRoles.multiChart.isBound()))throw new X.InvalidDataException("Unable to create a pie chart, please check the data values.","all-zero-data");
}).add({layoutLinkLabels:function(e){var t=-Math.PI/2,i=[],n=[];this.childNodes.forEach(function(a){
t=a.layoutI(e,t),(a.vars.link.dir>0?n:i).push(a)}),this._distributeLabels(-1,i,e),
this._distributeLabels(1,n,e)},_distributeLabels:function(t,i,n){i.sort(function(t,i){
return e.compare(t.vars.link.targetY,i.vars.link.targetY)}),this._distributeLabelsDownwards(i,n)&&this._distributeLabelsUpwards(i,n)&&this._distributeLabelsEvenly(i,n),
i.forEach(function(e){e.layoutII(n)})},_distributeLabelsDownwards:function(e,t){for(var i=t.link,n=i.labelSpacingMin,a=t.clientSize.height,r=!1,s=0,o=e.length-1;o>s;s++){
var l=e[s].vars.link;!s&&l.labelTop()<0&&(r=!0);var u=e[s+1].vars.link,c=l.labelBottom()+n;
if(u.labelTop()<c){var h=u.labelHeight/2,d=c+h,f=a-h;d>f?(r=!0,u.targetY=f):u.targetY=d;
}}return r},_distributeLabelsUpwards:function(e,t){for(var i=t.link,n=i.labelSpacingMin,a=!1,r=e.length-1;r>0;r--){
var s=e[r-1].vars.link,o=e[r].vars.link;1===r&&s.labelTop()<0&&(a=!0);var l=o.labelTop()-n;
if(s.labelBottom()>l){var u=s.labelHeight/2,c=l-u,h=u;h>c?(a=!0,s.targetY=h):s.targetY=c;
}}return a},_distributeLabelsEvenly:function(e,t){var i=0;e.forEach(function(e){i+=e.vars.link.labelHeight;
});var n=t.clientSize.height-i,a=n;e.length>1&&(a/=e.length-1);var r=0;return e.forEach(function(e){
var t=e.vars.link,i=t.labelHeight/2;r+=i,t.targetY=r,r+=i+a}),!0}}),e.type("pvc.visual.PieLinkLabelVar").add({
labelTop:function(){return this.targetY-this.labelHeight/2},labelBottom:function(){
return this.targetY+this.labelHeight/2}}),e.type("pvc.visual.PieCategoryScene",X.visual.Scene).add({
sliceLabelMask:function(){return this.panel().valuesMask},sliceLabel:function(){return this.format(this.sliceLabelMask());
},layoutI:function(t,i){var n=this.vars.value,a=i+n.angle,r=(i+a)/2,s=this.vars.link=new X.visual.PieLinkLabelVar,o=t.link,l=X.text.justify(n.sliceLabel,o.maxTextWidth,t.labelFont),u=l.length;
s.labelLines=l,s.labelHeight=u*o.lineHeight,this.lineScenes=e.array.create(u,this);
var c=Math.cos(r),h=Math.sin(r),d=c>=0,f=d?1:-1;s.labelAnchor=d?"left":"right";var v=t.center,p=o.elbowRadius,g=v.x+p*c,m=v.y+p*h,b=v.x+f*p,x=b+f*o.linkMargin;
return new X.visual.PieLinkLineScene(this,g,m),new X.visual.PieLinkLineScene(this,b,m),
s.elbowY=m,s.targetY=m+0,s.targetX=x,s.dir=f,a},layoutII:function(e){var t=this.vars.link,i=t.targetY,n=t.targetX,a=e.link.handleWidth;
a>0&&new X.visual.PieLinkLineScene(this,n-t.dir*a,i),new X.visual.PieLinkLineScene(this,n,i),
t.labelX=n,t.labelY=i-t.labelHeight/2}}),e.type("pvc.visual.PieLinkLineScene",X.visual.Scene).init(function(e,t,i,n){
this.base(e,{source:e.group,index:n}),this.x=t,this.y=i}).add(t.Vector),e.type("pvc.PieChart",X.BaseChart).add({
_axisClassByType:{category:X.visual.Axis,angle:X.visual.NormalizedAxis},_axisCreateChartLevel:{
category:2,angle:2},_axisSetScaleChartLevel:{category:2,angle:2},_axisCreationOrder:function(){
var e=X.BaseChart.prototype._axisCreationOrder.slice();return e.push("category","angle"),
e}(),_createPlotsInternal:function(){this._addPlot(new X.visual.PiePlot(this))},_setAxisScale:function(e,t){
this.base(e,t),2&t&&"angle"===e.type&&e.setScaleRange({min:0,max:2*Math.PI})},_createContentPanel:function(t,i){
var n=this.compatVersion()<=1;if(n){var a=e.number.to(this.options.innerGap)||.95;
a=e.between(a,.1,1),i.paddings=(100*(1-a)/2).toFixed(2)+"%"}else null==i.paddings&&(i.paddings=new ne(.025));
return this.base(t,i)},_createContent:function(t,i){i.scenes=e.getPath(this.options,"pie.scenes"),
this.base(t,i)}}),e("pvc.visual.BarPlot",X.visual.BarPlotAbstract.extend({methods:{
type:"bar"}})),X.visual.Plot.registerClass(X.visual.BarPlot),e.type("pvc.BarPanel",X.BarAbstractPanel).add({
plotType:"bar",_ibits:-1}),X.PlotPanel.registerClass(X.BarPanel),e.type("pvc.BarChart",X.BarAbstract).add({
_allowV1SecondAxis:!0,_createPlotsInternal:function(){this._createMainPlot(),this.options.plot2&&this._addPlot(new X.visual.PointPlot(this,{
name:"plot2",defaults:{DataPart:"1",ColorAxis:2,LinesVisible:!0,DotsVisible:!0}}));
},_createMainPlot:function(){this._addPlot(new X.visual.BarPlot(this))},_createPlotTrend:function(){
this._addPlot(new X.visual.PointPlot(this,{name:"trend",spec:{visualRoles:{color:{
from:"series"}}},fixed:{TrendType:"none",NullInterpolatioMode:"none"},defaults:{DataPart:"trend",
ColorAxis:2,LinesVisible:!0,DotsVisible:!1}}))},_createContent:function(e,t){this.base(e,t);
var i=this.plotPanels.bar,n=this.plotPanels.plot2;n&&"point"===n.plot.type&&(i&&(i.pvSecondLine=n.pvLine,
i.pvSecondDot=n.pvDot),n._applyV1BarSecondExtensions=!0)}}),e.type("pvc.NormalizedBarChart",X.BarChart).add({
_createMainPlot:function(){this._addPlot(new X.visual.BarPlot(this,{fixed:{ValuesNormalized:!0,
Stacked:!0}}))}}),X.parseWaterDirection=function(t){if(t){switch(t=(""+t).toLowerCase()){
case"up":case"down":return t}e.debug>=2&&e.log("[Warning] Invalid 'WaterDirection' value: '"+t+"'.");
}},e("pvc.visual.WaterfallPlot",X.visual.BarPlotAbstract.extend({init:function(e,t){
this.base(e,t),e._registerInitLegendScenes(this._initLegendScenes.bind(this))},methods:{
type:"water",_waterColor:t.color("#1f77b4").darker(),_initEnd:function(){var e=X.makeExtensionAbsId("line",this.extensionPrefixes),i=this.chart._getConstantExtension(e,"strokeStyle");
i&&(this._waterColor=t.color(i)),this.base()},_getCategoryRoleSpec:function(){var e=this.base(),t=this.isFalling()?"FlattenDfsPre":"FlattenDfsPost";
return e.traversalModes=X.visual.TraversalMode[t],e.rootLabel=this.option("AllCategoryLabel"),
e},isFalling:function(){return"down"===this.option("Direction")},_reduceStackedCategoryValueExtent:function(e,t,i,n,a,r){
var s,o=t?t.offset:0,l=i.min+i.max;if(!t)return i?(s=o+l,a.setDataCellScaleInfo(r,[{
offset:s,group:n,range:i}]),{min:i.min,max:i.max,offset:s}):null;var u=this.isFalling(),c=n._isFlattenGroup&&!n._isDegenerateFlattenGroup;
if(c){var h=-i.min;if(h>0){var d=o+h;d>t.max&&(t.max=d)}var f=-i.max;if(0>f){var v=o+f;
v<t.min&&(t.min=v)}}else{var p=u?-1:1;s=t.offset=o+p*l,s>t.max?t.max=s:s<t.min&&(t.min=s);
}return a.getDataCellScaleInfo(r).push({offset:u?o:t.offset,group:n,range:i}),t},
_initLegendScenes:function(t){var i=t._getLegendRootScene();new X.visual.legend.WaterfallLegendGroupScene(i,this,{
extensionPrefix:e.indexedId("",1),label:this.option("TotalLineLabel"),color:this._waterColor
})}},options:{Stacked:{resolve:null,value:!0},ValuesNormalized:{resolve:null,value:!1
},TotalLineLabel:{resolve:"_resolveFull",cast:String,value:"Accumulated"},TotalValuesVisible:{
resolve:"_resolveFull",data:{resolveDefault:function(e){return e.defaultValue(this.option("ValuesVisible")),
!0}},cast:Boolean},Direction:{resolve:"_resolveFull",cast:X.parseWaterDirection,value:"down"
},AreasVisible:{resolve:"_resolveFull",cast:Boolean,value:!0},AllCategoryLabel:{resolve:"_resolveFull",
cast:String,value:"All"}}})),X.visual.Plot.registerClass(X.visual.WaterfallPlot),
e.type("pvc.visual.legend.WaterfallLegendGroupScene",X.visual.legend.LegendGroupScene).init(function(t,i,n){
n=e.set(n,"clickMode","none"),this.base(t,n),this.plot=i,this.createItem(n)}).add({
itemSceneType:function(){return X.visual.legend.WaterfallLegendItemScene}}),e.type("pvc.visual.legend.WaterfallLegendItemScene",X.visual.legend.LegendItemScene).init(function(t,i){
this.base.apply(this,arguments);var n=X.visual.Interactive;this._ibits=n.Interactive|n.ShowsInteraction,
this.color=e.get(i,"color"),this.vars.value=new ce(null,e.get(i,"label"))}),e.type("pvc.WaterfallPanel",X.BarAbstractPanel).init(function(e,t,i,n){
this.base(e,t,i,n),e.wfChartPanel||(e.wfChartPanel=this)}).add({plotType:"water",
_ibits:-1,pvWaterfallLine:null,ruleData:null,_barDifferentialControl:function(){var e=this.plot.isFalling();
return function(t){if(e&&!this.index)return 1;var i=t.vars.category.group,n=i._isFlattenGroup&&!i._isDegenerateFlattenGroup;
return n?-2:e?-1:1}},_creating:function(){var i=this._getLegendRootScene();if(i){
var n=e.query(i.childNodes).first(function(e){return e.plot===this},this.plot);if(n&&!n.hasRenderer()){
var a={drawLine:!0,drawMarker:!1,rulePvProto:new t.Rule};this.extend(a.rulePvProto,"line",{
constOnly:!0}),n.renderer(a)}}},_createCore:function(){this.base();var i=this.chart,n=this.isOrientationVertical(),a=n?"bottom":"left",r=this.anchorOrtho(a),s=this.axes.ortho,o=this.axes.base,l=this.plot.dataCellsByRole.value[0],u=s.getDataCellScaleInfo(l),c=this._buildRuleScene(u),h=s.scale,d=h(0),f=s.sceneScale({
sceneVarName:"value"}),v=o.sceneScale({sceneVarName:"category"}),p=o.scale,g=this.barWidth/2,m=this.barWidth,b=this.barStepWidth,x=this.plot.isFalling(),y=this.plot._waterColor;
if(this.plot.option("AreasVisible")){var _=t.Colors.category10(),S=this._buildWaterGroupScene(u),w=h.range(),C=.04*(w[1]-w[0]);
this.pvWaterfallGroupPanel=new X.visual.Panel(this,this.pvPanel,{extensionId:"group"
}).lock("data",S.childNodes).pvMark.zOrder(-1).fillStyle(function(){return _(0).alpha(.15);
})[r](function(e){var t=e.vars.category;return p(t.valueLeft)-b/2})[this.anchorLength(a)](function(e){
var t=e.vars.category,i=Math.abs(p(t.valueRight)-p(t.valueLeft));return i+b})[a](function(e){
var t=e.vars.value,n=h(t.valueBottom)-C/2;return i.animate(d,n)})[this.anchorOrthoLength(a)](function(e){
var t=e.vars.value,n=h(t.valueTop)-h(t.valueBottom)+C;return i.animate(0,n)})}this.pvBar.sign.override("baseColor",function(e,i){
var n=this.base(e,i);return"fill"!==i||e.vars.category.group._isFlattenGroup?n:t.color(n).alpha(.5);
}),this.pvWaterfallLine=new X.visual.Rule(this,this.pvPanel,{extensionId:"line",noTooltip:!1,
noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1}).lock("data",c.childNodes).optional("visible",function(e){
return x&&!!e.previousSibling||!x&&!!e.nextSibling}).optional(a,function(e){return d+i.animate(0,f(e)-d);
}).optional(this.anchorLength(a),b+m).optional(r,x?function(e){return v(e)-b-g}:function(e){
return v(e)-g}).override("defaultColor",e.fun.constant(y)).pvMark.antialias(!0).lineCap("butt"),
this.plot.option("TotalValuesVisible")&&(this.pvWaterfallLabel=new X.visual.Label(this,this.pvWaterfallLine,{
extensionId:"lineLabel"}).intercept("visible",function(e){return!e.vars.category.group._isFlattenGroup&&(x||!!e.nextSibling);
}).pvMark[a](function(e){return d+i.animate(0,f(e)-d)})[this.anchorOrtho(a)](v).textAlign(n?"center":"left").textBaseline(function(e){
if(!n)return"middle";var t=e.vars.direction;if(null==t)return"bottom";var i=!x;return i===("up"===t)?"bottom":"top";
}).textStyle(t.Color.names.darkgray.darker(2)).textMargin(5).text(function(e){return e.vars.value.label;
}))},_buildRuleScene:function(t){function i(e){var t=e.group,i=new X.visual.Scene(o,{
source:t}),n=i.vars.category=ce.fromComplex(t),a=e.offset;n.group=t,i.vars.value=new ce(a,s.format(a));
}function n(e,t){var i=e.vars.value.value;e.vars.direction=t&&a!==i?r===i>a?"up":"down":null,
a=i}var a,r,s,o=new X.visual.Scene(null,{panel:this,source:this.visibleData({ignoreNulls:!1
})});if(t){s=this.chart.data.dimensions(this.visualRoles.value.lastDimensionName()),
t.forEach(i,this);var l=e.query(o.childNodes);r=!this.plot.isFalling(),r||(l=l.reverse()),
l.each(n,this)}return o},_buildWaterGroupScene:function(t){function i(e,t){var a=e.children().where(function(e){
return""!==e.key});if(a.next()){t&&n(e,t),t++;do i(a.item,t);while(a.next())}}function n(e,t){
var i=new X.visual.Scene(c,{source:e}),n=i.vars.category=ce.fromComplex(e);n.group=e,
n.level=t;var l,u,h,d,f,v=i.vars.value={},p=s[e.absKey],g=p.offset,m=p.range,b=-m.min+m.max;
o?(l=r(e),u=s[l.absKey],h=p.group.value,d=u.group.value,f=g-m.max):(l=a(e),u=s[l.absKey],
h=u.group.value,d=p.group.value,f=g-m.max),n.valueLeft=h,n.valueRight=d,v.valueHeight=b,
v.valueBottom=f,v.valueTop=f+b}function a(e){var t=e.childNodes,i=t&&t[0];return i?a(i):e;
}function r(e){var t=e.childNodes,i=t&&t[t.length-1];return i?r(i):e}var s,o,l=this.chart,u=this.visualRoles.category.select(l.partData(this.dataPartValue),{
visible:!0}),c=new X.visual.Scene(null,{panel:this,source:u});return t&&(s=e.query(t).object({
name:function(e){return e.group.absKey}}),o=this.plot.isFalling(),i(u,0)),c}}),X.PlotPanel.registerClass(X.WaterfallPanel),
e.type("pvc.WaterfallChart",X.BarAbstract).add({_processOptionsCore:function(e){e.baseAxisComposite=!1,
this.base(e)},_createPlotsInternal:function(){this._addPlot(new X.visual.WaterfallPlot(this));
}}),e("pvc.visual.PointPlot",X.visual.CategoricalPlot.extend({methods:{type:"point",
_initVisualRoles:function(){this.base(),this._addVisualRole("value",{isMeasure:!0,
isRequired:!0,isPercent:this.option("Stacked"),requireSingleDimension:!0,requireIsDiscrete:!1,
valueType:Number,defaultDimension:"value"})}},options:{DotsVisible:{resolve:"_resolveFull",
data:K("Dots",!0),cast:Boolean,value:!1},LinesVisible:{resolve:"_resolveFull",data:K("Lines",!0),
cast:Boolean,value:!1},AreasVisible:{resolve:"_resolveFull",data:K("Areas",!1),cast:Boolean,
value:!1},AreasFillOpacity:{resolve:"_resolveFull",cast:e.number.toNonNegative,value:null
},ValuesAnchor:{value:"right"}}})),X.visual.Plot.registerClass(X.visual.PointPlot),
e.type("pvc.PointPanel",X.CategoricalAbstractPanel).init(function(e,t,i,n){this.base(e,t,i,n),
this.linesVisible=i.option("LinesVisible"),this.dotsVisible=i.option("DotsVisible"),
this.areasVisible=i.option("AreasVisible"),this.linesVisible||this.dotsVisible||this.areasVisible||(this.linesVisible=!0,
i.option.specify({LinesVisible:!0})),this.areasVisible&&!this.stacked&&(this.areasFillOpacity=i.option("AreasFillOpacity"),
null==this.areasFillOpacity&&(this.areasFillOpacity=.5)),e.scatterChartPanel||(e.scatterChartPanel=this);
}).add({plotType:"point",_ibits:-1,pvLine:null,pvArea:null,pvDot:null,pvLabel:null,
pvScatterPanel:null,_creating:function(){var i=this.plot.dataCellsByRole.color[0];
if(!i.legendSymbolRenderer()&&i.legendVisible()){var n=this.axes.color,a=e.nullyTo(n.option("LegendDrawMarker",!0),this.dotsVisible||this.areasVisible),r=!a||e.nullyTo(n.option("LegendDrawLine",!0),this.linesVisible&&!this.areasVisible),s=X.uniqueExtensionAbsPrefix(),o={
drawMarker:a,drawLine:r,extensionPrefix:{abs:s}};if(this.chart._processExtensionPointsIn(i.role.legend(),s),
a){var l=n.option("LegendShape",!0);o.markerPvProto=new t.Dot,this.dotsVisible&&(l||(l="circle"),
o.markerPvProto.lineWidth(1.5,X.extensionTag).shapeSize(12,X.extensionTag)),o.markerShape=l,
this._applyV1BarSecondExtensions&&this.chart.extend(o.markerPvProto,"barSecondDot",{
constOnly:!0}),this.extend(o.markerPvProto,"dot",{constOnly:!0})}r&&(o.rulePvProto=(new t.Rule).lineWidth(1.5,X.extensionTag),
this._applyV1BarSecondExtensions&&this.chart.extend(o.rulePvProto,"barSecondLine",{
constOnly:!0}),this.extend(o.rulePvProto,"line",{constOnly:!0})),i.legendSymbolRenderer(o);
}},_createCore:function(){this.base();var i,n=this,a=this.chart,r=this.stacked,s=this.dotsVisible,o=this.areasVisible,l=this.linesVisible,u=this.isOrientationVertical()?"bottom":"left",c=this.axes.base,h=c.domainItems(),d=c.role.grouping.isDiscrete(),f=this.visibleData({
ignoreNulls:!1}),v=this.visualRoles.series.isBound()?this.visualRoles.series.flatten(this.partData(),{
visible:!0,isNull:a.options.ignoreNulls?!1:null}).childNodes:[null],p=this._buildScene(f,v,h);
this.pvPanel.zOrder(o?-7:1),this.pvScatterPanel=new X.visual.Panel(this,this.pvPanel,{
extensionId:"panel"}).lock("data",p.childNodes).pvMark;var g=this.areasFillOpacity;
this.compatVersion()<=1&&(i=r?function(e){return function(t){return e.call(this,t.vars.value.rawValue);
}}:function(e){return function(t){var i={category:t.vars.category.rawValue,value:t.vars.value.rawValue
},n=Object.create(this);return n.index=t.dataIndex,e.call(n,i)}});var m=function(e){
return!e.isNull},b=function(e){return!e.isNull||e.isIntermediate},x=d&&r?b:m,y=a.selectableByFocusWindow();
this.pvArea=new X.visual.Area(this,this.pvScatterPanel,{extensionId:"area",noTooltip:!1,
wrapper:i,noSelect:y,noRubberSelect:!0,showsSelection:!y}).lockMark("data",function(e){
return e.childNodes}).lockMark("visible",x).override("x",function(e){return e.basePosition;
}).override("y",function(e){return e.orthoPosition}).override("dy",function(e){return a.animate(0,e.orthoLength);
}).override("color",function(e,t){return o?this.base(e,t):null}).override("baseColor",function(t,i){
var n=this.base(t,i);return!this._finished&&n&&null!=g?n.alpha(e.between(n.opacity*g,0,1)):n;
}).override("dimColor",function(e,t){return r?X.toGrayScale(e,1,null,null).brighter():this.base(e,t);
}).lock("events",o?"painted":"none").pvMark;var _=s&&!l&&!o,S=r&&o,w=["line"];this._applyV1BarSecondExtensions&&w.push({
abs:"barSecondLine"});var C=_?!1:d&&r&&o?b:m,k=o&&!l;this.pvLine=new X.visual.Line(this,this.pvArea.anchor(this.anchorOpposite(u)),{
extensionId:w,freePosition:!0,wrapper:i,noTooltip:k,noDoubleClick:k,noClick:k,noHover:k,
noSelect:k||y,showsSelection:!y}).lockMark("visible",C).override("defaultColor",function(e,t){
var i=this.base(e,t);return!this._finished&&S&&i?i.darker(.6):i}).override("normalColor",function(e,t){
return l?t:null}).override("interactiveColor",function(e,t,i){return l||this.mayShowAnySelected(e)||this.mayShowActive(e)?this.base(e,t,i):null;
}).override("baseStrokeWidth",function(e){var t;return l&&(t=this.base(e)),null==t?1.5:t;
}).intercept("strokeDasharray",function(e){var t=this.delegateExtension();if(void 0===t){
var i=e.isInterpolated;if(!i){var n=e.nextSibling;if(i=n&&n.isIntermediate&&n.isInterpolated,
!i){var a=e.previousSibling;i=a&&e.isIntermediate&&a.isInterpolated}}t=i?". ":null;
}return t}).pvMark;var P=!(o&&d&&r);w=["dot"],this._applyV1BarSecondExtensions&&w.push({
abs:"barSecondDot"}),this.pvDot=new X.visual.Dot(this,this.pvLine,{extensionId:w,
freePosition:!0,wrapper:i,tooltipArgs:{options:{ignoreRadius:l}}}).intercept("visible",function(e){
return!e.isNull&&!e.isIntermediate&&this.delegateExtension(!0)}).override("color",function(e,t){
if(!s){var i=(P?e.isAlone:e.isSingle)||e.isActive&&this.showsActivity();if(!i)return X.invisibleFill;
}return this.base(e,t)}).override("defaultColor",function(e,t){var i=this.base(e,t);
return i&&!this._finished&&(S&&(i=i.darker(.6)),e.isInterpolated&&"fill"===t&&(i=i.brighter(.5))),
i}).override("interactiveColor",function(e,i,n){var a=!s&&(e.isSingle||e.isAlone)&&!e.isActive&&this.mayShowNotAmongSelected(e)&&this.mayShowActive(e);
return a?t.Color.names.darkgray.darker().darker():this.base(e,i,n)}).optional("lineWidth",function(e){
var t=!(s||!e.isSingle&&!e.isAlone||e.isActive&&this.showsActivity());return t?0:1.5;
}).override("size",function(t){var i=!s&&!(t.isActive&&this.showsActivity())&&(!P&&t.isSingle||P&&t.isAlone);
if(i){var a=Math.max(n.pvLine.visible()?n.pvLine.lineWidth():0,1),r=a/2+1;return e.sqr(r);
}return this.base(t)}).override("baseSize",function(e){var t=this.base(e);return!this._finished&&e.isInterpolated?.8*t:t;
}).pvMark;var M=X.visual.ValueLabel.maybeCreate(this,this.pvDot,{wrapper:i});M&&(this.pvLabel=M.pvMark);
},renderInteractive:function(){this.pvScatterPanel.render()},_buildSceneCore:function(t,i,n){
function a(e){for(var t,i=[],n=e.childNodes,a=0,o=null,l=0,u=0,h=n.length;h>l;l++,
u++){var d=n[u],f=2*l;if(i[f]=d,r.call(this,t,d,x&&x[f]),d.isAlone&&!o&&(o=d),d.isNull||a++,
t){var v=s.call(this,e,t,d,u,x&&x[f-1]);v&&(i[f-1]=v,u++)}t=d}1===a&&o&&1===h&&(o.isSingle=!0),
c&&(x=i)}function r(e,t,i){var n=t.vars.value.accValue;i&&(t.isNull&&!u?n=g:n+=i.vars.value.accValue,
t.vars.value.accValue=n),t.basePosition=b(t),t.orthoPosition=m,t.orthoLength=p(n)-m;
var a=!e||e.isNull,r=a&&!t.isNull;if(r){var s=t.nextSibling;r=!s||s.isNull}t.isAlone=r,
t.isSingle=!1}function s(e,t,i,n,a){var r,s,o,h=t.isNull||i.isNull,f=this.areasVisible;
if(h){if(f&&a&&u){var x=a.vars.value;s=x.accValue,r=x[l.name]}else r=s=g;o=f?c&&u?i.basePosition-b.range().step/2:t.isNull?i.basePosition:t.basePosition:(i.basePosition+t.basePosition)/2;
}else{var y=t.vars.value,_=i.vars.value;r=(_.value+y.value)/2,s=(_.accValue+y.accValue)/2,
o=(i.basePosition+t.basePosition)/2}var S=new X.visual.Scene(e,{index:n,source:i.source
});S.dataIndex=i.dataIndex,S.vars.category=i.vars.category;var w=new ce(r,v.format(r),r);
return w.accValue=s,S.vars.value=w,S.ownerScene=i,S.isInterpolated=i.isInterpolated,
S.isIntermediate=!0,S.isSingle=!1,S.isNull=h,S.isAlone=h&&i.isNull&&t.isNull,S.basePosition=o,
S.orthoPosition=m,S.orthoLength=p(s)-m,d.onNewScene(S,!0),S}var o=new X.visual.Scene(null,{
panel:this,source:t}),l=this.visualRoles.value,u=this.axes.base.role.grouping.isDiscrete(),c=this.stacked,h=new X.visual.RoleVarHelper(o,"value",l,{
hasPercentSubVar:c}),d=new X.visual.RoleVarHelper(o,"color",this.visualRoles.color),f=l.lastDimensionName(),v=t.owner.dimensions(f),p=this.axes.ortho.scale,g=e.scope(function(){
var e=p.domain(),t=e[0],i=e[1];return t*i>=0?t>=0?t:i:0}),m=p(g),b=this.axes.base.sceneScale({
sceneVarName:"category"});i.forEach(function(i){var a=new X.visual.Scene(o,{source:i||t
});a.vars.series=ce.fromComplex(i),d.onNewScene(a,!1),n.forEach(function(n,r){var s=t.child(n.key),o=s;
o&&i&&(o=o.child(i.key));var l=new X.visual.Scene(a,{source:o});l.dataIndex=r,l.vars.category=ce.fromComplex(n),
h.onNewScene(l,!0);var u=l.vars.value,c=u.value;u.accValue=null!=c?c:g,d.onNewScene(l,!0);
var f=null!=o&&o.datums().prop("isInterpolated").any(e.truthy);l.isInterpolated=f,
l.isNull=null==c,l.isIntermediate=!1},this)},this);var x;return o.children().reverse().each(a,this),
o}}),X.PlotPanel.registerClass(X.PointPanel),e.type("pvc.PointAbstract",X.CategoricalAbstract).add({
_defaultAxisBandSizeRatio:1,_createPlotsInternal:function(){this._addPlot(this._createPointPlot()),
this.options.plot2&&this._addPlot(new X.visual.PointPlot(this,{name:"plot2",defaults:{
DataPart:"1",ColorAxis:2,LinesVisible:!0,DotsVisible:!0}}))},_createPlotTrend:function(){
this._addPlot(new X.visual.PointPlot(this,{name:"trend",spec:{visualRoles:{color:{
from:"series"}}},fixed:{TrendType:"none",NullInterpolatioMode:"none"},defaults:{DataPart:"trend",
ColorAxis:2,LinesVisible:!0,DotsVisible:!1}}))},_initAxesEnd:function(){var e=this.axesByType.base;
e&&e.forEach(function(e){"discrete"!==e.scaleType&&e.option.defaults({Offset:.01});
}),e=this.axesByType.ortho,e&&e.forEach(function(e){e.option.defaults({Offset:.04
})}),this.base()},defaults:{tooltipOffset:10}}),e.type("pvc.DotChart",X.PointAbstract).add({
_createPointPlot:function(){return new X.visual.PointPlot(this,{fixed:{DotsVisible:!0
}})}}),e.type("pvc.LineChart",X.PointAbstract).add({_createPointPlot:function(){return new X.visual.PointPlot(this,{
fixed:{LinesVisible:!0}})}}),e.type("pvc.AreaChart",X.PointAbstract).add({_createPointPlot:function(){
return new X.visual.PointPlot(this,{fixed:{AreasVisible:!0}})}}),X.mStackedLineChart=e.type("pvc.StackedLineChart",X.PointAbstract).add({
_createPointPlot:function(){return new X.visual.PointPlot(this,{fixed:{LinesVisible:!0,
Stacked:!0}})}}),e.type("pvc.StackedDotChart",X.PointAbstract).add({_createPointPlot:function(){
return new X.visual.PointPlot(this,{fixed:{DotsVisible:!0,Stacked:!0}})}}),X.mStackedAreaChart=e.type("pvc.StackedAreaChart",X.PointAbstract).add({
_createPointPlot:function(){return new X.visual.PointPlot(this,{fixed:{AreasVisible:!0,
Stacked:!0},defaults:{LinesVisible:!0}})}}),e("pvc.visual.MetricPointPlot",X.visual.MetricXYPlot.extend({
methods:{type:"scatter",_initVisualRoles:function(){this.base(),this._addVisualRole("size",{
isMeasure:!0,requireSingleDimension:!0,requireIsDiscrete:!1,defaultDimension:"size",
dimensionDefaults:{valueType:Number}})},_getColorRoleSpec:function(){return{isMeasure:!0,
defaultSourceRole:"series",defaultDimension:"color*",dimensionDefaults:{valueType:Number
}}},_initDataCells:function(){this.base(),this.option("DotsVisible")&&this._addDataCell(new X.visual.DataCell(this,"size",this.option("SizeAxis")-1,this.visualRoles.size,this.option("DataPart")));
}},options:{SizeRole:{resolve:"_resolveFixed",value:"size"},SizeAxis:{resolve:"_resolveFixed",
value:1},Shape:{resolve:"_resolveFull",cast:X.parseShape,value:"circle"},NullShape:{
resolve:"_resolveFull",cast:X.parseShape,value:"cross"},DotsVisible:{resolve:"_resolveFull",
data:Z("Dots"),cast:Boolean,value:!1},LinesVisible:{resolve:"_resolveFull",data:Z("Lines"),
cast:Boolean,value:!1},ValuesAnchor:{value:"right"},ValuesMask:{value:"{x},{y}"},
AutoPaddingByDotSize:{resolve:"_resolveFull",cast:Boolean,value:!0}}})),X.visual.Plot.registerClass(X.visual.MetricPointPlot),
X.parseMetricPointSizeAxisRatioTo=X.makeEnumParser("ratioTo",["minWidthHeight","height","width"],"minWidthHeight"),
e("pvc.visual.MetricPointSizeAxis",X.visual.SizeAxis.extend({options:{Ratio:{resolve:"_resolveFull",
cast:e.number.toNonNegative,value:.2},RatioTo:{resolve:"_resolveFull",cast:X.parseMetricPointSizeAxisRatioTo,
value:"minwidthheight"}}})),e.type("pvc.MetricPointPanel",X.CartesianAbstractPanel).init(function(e,t,i,n){
this.base(e,t,i,n);var a=this.axes.size=e._getAxis("size",(i.option("SizeAxis")||0)-1);
a&&(this.sizeAxisRatio=a.option("Ratio"),this.sizeAxisRatioTo=a.option("RatioTo"),
this.autoPaddingByDotSize=i.option("AutoPaddingByDotSize")),this.linesVisible=i.option("LinesVisible"),
this.dotsVisible=i.option("DotsVisible"),this.linesVisible||this.dotsVisible||(this.linesVisible=!0,
i.option.specify({LinesVisible:!0})),e.scatterChartPanel||(e.scatterChartPanel=this);
}).add({plotType:"scatter",_v1DimRoleName:{category:"x",value:"y"},_creating:function(){
var i=this.plot.dataCellsByRole.color[0];if(!i.legendSymbolRenderer()&&i.legendVisible()){
var n=this.axes.color,a=e.nullyTo(n.option("LegendDrawMarker",!0),this.dotsVisible),r=e.nullyTo(n.option("LegendDrawLine",!0),this.linesVisible);
if(a||r){var s=X.uniqueExtensionAbsPrefix(),o={drawMarker:a,drawLine:r,extensionPrefix:{
abs:s}};this.chart._processExtensionPointsIn(i.role.legend(),s),a&&(o.markerShape=n.option("LegendShape",!0)||"circle",
o.markerPvProto=(new t.Dot).lineWidth(1.5,X.extensionTag).shapeSize(12,X.extensionTag),
this.extend(o.markerPvProto,"dot",{constOnly:!0})),r&&(o.rulePvProto=(new t.Rule).lineWidth(1.5,X.extensionTag),
this.extend(o.rulePvProto,"line",{constOnly:!0})),i.legendSymbolRenderer(o)}}},_getRootScene:function(){
return e.lazy(this,"_rootScene",this._buildScene,this)},_calcLayout:function(e){var t=this.base(e),i=this._getRootScene();
return i.isSizeBound&&this.axes.size.setScaleRange(this._calcDotAreaRange(e)),this._calcAxesPadding(e,i),
t},_getDotDiameterRefLength:function(t){var i=t.size;switch(this.sizeAxisRatioTo){
case"minwidthheight":return Math.min(i.width,i.height);case"width":return i.width;
case"height":return i.height}return e.debug>=2&&this.log(e.format("Invalid option 'sizeAxisRatioTo' value. Assuming 'minWidthHeight'.",[this.sizeAxisRatioTo])),
this.sizeRatioTo="minwidthheight",this._getDotDiameterRefLength(t)},_calcDotRadiusRange:function(e){
return{min:Math.sqrt(12),max:this.sizeAxisRatio/2*this._getDotDiameterRefLength(e)
}},_calcDotAreaRange:function(t){var i=this._calcDotRadiusRange(t);"diamond"===this.shape&&(i.max/=Math.SQRT2,
i.min/=Math.SQRT2);var n=e.sqr(i.max),a=e.sqr(i.min),r=n-a;return 1>=r&&(n=Math.max(n,2),
a=1,r=n-a,e.debug>=3&&this.log("Using rescue mode dot area calculation due to insufficient space.")),
{min:a,max:n,span:r}},_calcAxesPadding:function(t,i){var n;if(this.autoPaddingByDotSize){
var a=this.axes,r=t.clientSize,s=t.paddings;n={},a.x.setScaleRange(r.width),a.y.setScaleRange(r.height);
var o=this.isOrientationVertical(),l=a.x.sceneScale({sceneVarName:o?"x":"y"}),u=a.y.sceneScale({
sceneVarName:o?"y":"x"}),c=a.x.scale.max,h=a.y.scale.max,d=i.isSizeBound,f=d?a.size.scale:null;
if(!f){var v=e.number.to(this._getExtension("dot","shapeRadius"),0);0>=v?(v=e.number.to(this._getExtension("dot","shapeSize"),0),
0>=v&&(v=12)):v=e.sqr(v),f=e.fun.constant(v)}n={};var p,g=this.chart._axisOffsetPaddings;
g&&(p={},ae.names.forEach(function(e){var t=X.BasePanel.orthogonalLength[e];p[e]=(g[e]||0)*(r[t]+s[t]);
}));var m=function(e,t){p&&(t+=p[e]||0),0>t&&(t=0);var i=n[e];(null==i||t>i)&&(n[e]=t);
},b=function(e){var t=l(e),i=u(e),n=Math.sqrt(f(d?e.vars.size.value:0));m("left",n-t),
m("bottom",n-i),m("right",t+n-c),m("top",i+n-h)};i.children().selectMany(function(e){
return e.childNodes}).each(b)}else n=this._calcContentOverflow(t);t.contentOverflow=n;
},_createCore:function(){var t=this;t.base();var i=t.chart,n=t._getRootScene(),a=t._buildSignsWrapper(),r=t.compatVersion()<=1;
this._finalizeScene(n),t.pvPanel.zOrder(1),this.pvScatterPanel=new X.visual.Panel(t,t.pvPanel,{
extensionId:"panel"}).lock("data",n.childNodes).pvMark;var s=i.selectableByFocusWindow(),o=n.isColorBound&&this.visualRoles.color.isDiscrete(),l=new X.visual.Line(t,t.pvScatterPanel,{
extensionId:"line",wrapper:a,noTooltip:!1,noSelect:s,showsSelection:!s}).lockMark("data",function(e){
return e.childNodes}).intercept("visible",function(e){if(!t.linesVisible)return!1;
var i=this.delegateExtension();return null==i&&(i=!e.isNull&&(!n.isSizeBound&&!n.isColorBound||n.isSizeBound&&null!=e.vars.size.value||n.isColorBound&&(o||null!=e.vars.color.value))),
i}).override("x",function(e){return e.basePosition}).override("y",function(e){return e.orthoPosition;
});t.pvLine=l.pvMark;var u=new X.visual.DotSizeColor(t,t.pvLine,{extensionId:"dot",
wrapper:a,activeSeriesAware:t.linesVisible,tooltipArgs:{options:{ignoreRadius:n.isSizeBound?!1:t.linesVisible
}}}).override("x",function(e){return e.basePosition}).override("y",function(e){return e.orthoPosition;
}).override("color",function(e,i){return t.dotsVisible||e.isActive||e.isSingle?this.base(e,i):X.invisibleFill;
});if(n.isSizeBound?t.autoPaddingByDotSize&&"minwidthheight"===t.sizeAxisRatioTo||t.pvPanel.borderPanel.overflow("hidden"):u.override("size",function(i){
var n=!t.dotsVisible&&i.isSingle&&!(i.isActive&&this.showsActivity());if(n){var a=Math.max(t.pvLine.visible()?t.pvLine.lineWidth():0,1),r=a/2+1;
return e.sqr(r)}return this.base(i)}),t.pvDot=u.pvMark,t.pvDot.rubberBandSelectionMode="center",
X.visual.ValueLabel.isNeeded(t)){var c=["label"];r&&c.push("lineLabel");var h=X.visual.ValueLabel.maybeCreate(t,t.pvDot,{
extensionId:c,wrapper:a});h&&(t.pvHeatGridLabel=h.pvMark)}},_buildSignsWrapper:function(){
return this.compatVersion()>1?null:function(e){return function(t){var i={category:t.vars.x.rawValue,
value:t.vars.y.rawValue},n=Object.create(this);return n.index=t.dataIndex,e.call(n,i);
}}},renderInteractive:function(){this.pvScatterPanel.render()},_buildScene:function(){
function e(e){var t=new X.visual.Scene(a,{source:e});t.vars.series=ce.fromComplex(e),
s.onNewScene(t,!1),e.datums().each(function(e,i){var n=e.atoms[l.name];if(null!=n.value){
var a=e.atoms[u.name];if(null!=a.value){var r=new X.visual.Scene(t,{source:e});r.dataIndex=i,
r.vars.x=ce.fromAtom(n),r.vars.y=ce.fromAtom(a),o.onNewScene(r,!0),s.onNewScene(r,!0),
r.isIntermediate=!1}}})}function t(e){for(var t,n=e.childNodes,a=0,r=0,s=n.length;s>a;a++,
r++){var o=n[r];if(o.isSingle=!t&&!o.nextSibling,t){var l=i(e,t,o,r);l&&r++}t=o}}
function i(e,t,i,n){var a=+i.vars.y.value,r=+t.vars.y.value,c=+i.vars.x.value,h=+t.vars.x.value,d=u.type.cast.call(null,(a+r)/2),f=l.type.cast.call(null,(c+h)/2),v=new X.visual.Scene(e,{
index:n,source:i.datum});return v.dataIndex=i.dataIndex,v.vars.x=new ce(f,l.format(f),f),
v.vars.y=new ce(d,u.format(d),d),o.onNewScene(v,!0),s.onNewScene(v,!0),v.ownerScene=i,
v.isIntermediate=!0,v.isSingle=!1,v}var n=this.visibleData({ignoreNulls:!1}),a=new X.visual.Scene(null,{
panel:this,source:n}),r=this.visualRoles,s=new X.visual.RoleVarHelper(a,"color",r.color),o=new X.visual.RoleVarHelper(a,"size",r.size),l=n.owner.dimensions(r.x.lastDimensionName()),u=n.owner.dimensions(r.y.lastDimensionName());
return n.children().each(e,this),a.children().each(t,this),a},_finalizeScene:function(e){
var t=this.axes,i=t.base.sceneScale({sceneVarName:"x"}),n=t.ortho.sceneScale({sceneVarName:"y"
});return e.children().selectMany(function(e){return e.childNodes}).each(function(e){
e.basePosition=i(e),e.orthoPosition=n(e)}),e}}),X.PlotPanel.registerClass(X.MetricPointPanel),
e.type("pvc.MetricPointAbstract",X.MetricXYAbstract).add({_axisClassByType:{size:X.visual.MetricPointSizeAxis
},_createPlotsInternal:function(){this._addPlot(this._createPointPlot())},_createPointPlot:function(){},
_createPlotTrend:function(){this._addPlot(new X.visual.MetricPointPlot(this,{name:"trend",
spec:{visualRoles:{color:{from:"series"},size:null}},fixed:{TrendType:"none",NullInterpolatioMode:"none",
SizeRole:null,SizeAxis:null,OrthoAxis:1},defaults:{DataPart:"trend",ColorAxis:2,LinesVisible:!0,
DotsVisible:!1}}))},_getTranslationClass:function(t){return e.type(this.base(t)).methods({
_configureTypeCore:function(){this._configureTypeByOrgLevel(["series"],["x","y","color","size"]);
}})},_calcAxesOffsetPaddings:function(){var e=this.base();return e||new ae(.01)},
defaults:{axisOriginIsZero:!1,tooltipOffset:10}}),e.type("pvc.MetricDotChart",X.MetricPointAbstract).add({
_createPointPlot:function(){return new X.visual.MetricPointPlot(this,{fixed:{DotsVisible:!0
}})}}),e.type("pvc.MetricLineChart",X.MetricPointAbstract).add({_createPointPlot:function(){
return new X.visual.MetricPointPlot(this,{fixed:{LinesVisible:!0}})}}),e("pvc.visual.HeatGridPlot",X.visual.CategoricalPlot.extend({
methods:{type:"heatGrid",interpolatable:function(){return!1},_initVisualRoles:function(){
this.base();var e=this.chart,t=e.compatVersion()>1||1===e.options.sizeValIdx?"value2":"value";
this._addVisualRole("size",{isMeasure:!0,requireSingleDimension:!0,requireIsDiscrete:!1,
valueType:Number,defaultDimension:t})},_getColorRoleSpec:function(){var e=this.chart,t=e.compatVersion()<=1&&1===e.options.colorValIdx?"value2":"value";
return{isMeasure:!0,requireSingleDimension:!0,requireIsDiscrete:!1,valueType:Number,
defaultDimension:t}},_getCategoryRoleSpec:function(){var e=this.base();return e.requireIsDiscrete=!0,
e},_initDataCells:function(){this.base(),this.option("UseShapes")&&this._addDataCell(new X.visual.DataCell(this,"size",this.option("SizeAxis")-1,this.visualRoles.size,this.option("DataPart")));
},_getOrthoRoles:function(){return[this.visualRole("series")]}},options:{SizeRole:{
value:"size"},SizeAxis:{value:1},UseShapes:{resolve:"_resolveFull",cast:Boolean,value:!1
},Shape:{resolve:"_resolveFull",cast:X.parseShape,value:"square"},NullShape:{resolve:"_resolveFull",
cast:X.parseShape,value:"cross"},ValuesVisible:{getDefault:function(){return!this.option("UseShapes");
},value:null},ValuesMask:{value:null},ValuesAnchor:{value:"center"},OrthoAxis:{resolve:null
},NullInterpolationMode:{resolve:null,value:"none"},Stacked:{resolve:null,value:!1
}}})),X.visual.Plot.registerClass(X.visual.HeatGridPlot),e.type("pvc.HeatGridPanel",X.CategoricalAbstractPanel).init(function(e,t,i,n){
this.base(e,t,i,n),this.axes.size=e._getAxis("size",i.option("SizeAxis")-1);var a=this.visualRoles;
a.size=e.visualRole(i.option("SizeRole")),this.useShapes=i.option("UseShapes"),this.shape=i.option("Shape"),
this.nullShape=i.option("NullShape"),e.heatGridChartPanel||(e.heatGridChartPanel=this);
}).add({plotType:"heatGrid",defaultBorder:1,nullBorder:2,selectedBorder:2,_createCore:function(){
var t=this;t.base();var i=t._calcCellSize(),n=t.isOrientationVertical()?"bottom":"left",a=X.BasePanel.relativeAnchor[n],r=X.BasePanel.parallelLength[n],s=X.BasePanel.orthogonalLength[n],o=t.visualRoles.series.flatten(t.partData(),{
visible:!0,isNull:t.chart.options.ignoreNulls?!1:null}).childNodes,l=t.visibleData({
ignoreNulls:!1}),u=t._buildScene(l,o,l.childNodes);u.cellSize=i;var c=u.isColorBound,h=u.isSizeBound,d=t._buildSignsWrapper(u),f=t.compatVersion()<=1,v=this.axes.base.scale,p=this.axes.ortho.scale,g=v.range().band,m=p.range().band,b=g/2,x=m/2,y=new X.visual.Panel(t,t.pvPanel).pvMark.data(u.childNodes)[n](function(e){
return p(e.vars.series.value)-x})[s](m),_=["panel"];f&&_.push("");var S={extensionId:_,
wrapper:d};if(!t.useShapes){var w=!1;e.copy(S,{noSelect:w,noHover:w,noClick:w,noDoubleClick:w,
freeColor:w,noTooltip:f})}t.pvHeatGrid=new X.visual.Panel(t,y,S).pvMark.lock("data",function(e){
return e.childNodes}).lock(a,function(e){return v(e.vars.category.value)-b}).lock(r,g).antialias(!1),
t.shapes=t.useShapes?t._createShapesHeatMap(i,d,c,h):t._createNoShapesHeatMap(c),
t.valuesVisible&&!t.valuesMask&&(t.valuesMask=t._getDefaultValuesMask(c,h));var C=X.visual.ValueLabel.maybeCreate(t,t.pvHeatGrid,{
wrapper:d});C&&(t.pvHeatGridLabel=C.pvMark,t.useShapes&&C.override("getAnchoredToMark",e.fun.constant(t.shapes)));
},_calcCellSize:function(){var e=this.axes.x.scale,t=this.axes.y.scale,i=(e.max-e.min)/e.domain().length,n=(t.max-t.min)/t.domain().length;
if(!this.isOrientationVertical()){var a=i;i=n,n=a}return{width:i,height:n}},_buildSignsWrapper:function(t){
if(this.compatVersion()>1)return null;var i=e.query(t.childNodes).object({name:function(e){
return""+e.vars.series.value},value:function(t){return e.query(t.childNodes).object({
name:function(e){return""+e.vars.category.value},value:function(e){var t=e.vars.color;
return t?""+t.value:null}})}});return function(e){return function(t){var n=i[t.vars.series.value],a=t.vars.category.rawValue,r=Object.create(this.parent),s=Object.create(this),o=t.childIndex(),l=t.parent.childIndex();
return s.parent=r,r.index=o,s.index=l,e.call(s,n,a)}}},_getDefaultValuesMask:function(e,t){
var i=this.visualRoles,n=e?"color":t?"size":null;if(n){var a=i[n].lastDimensionName();
return"{#"+a+"}"}},_createNoShapesHeatMap:function(e){var t=this._buildGetBaseFillColor(e);
return this.pvHeatGrid.sign.override("defaultColor",function(e,i){return"stroke"===i?null:t.call(this.pvMark,e);
}).override("interactiveColor",function(e,t,i){return e.isActive?t.alpha(.6):e.anySelected()&&!e.isSelected()?this.dimColor(t,i):this.base(e,t,i);
}).override("dimColor",function(e){return X.toGrayScale(e,.6)}).pvMark.lineWidth(1.5);
},_buildGetBaseFillColor:function(t){var i=this.axes.color;return t?i.sceneScale({
sceneVarName:"color"}):e.fun.constant(i.option("Unbound"))},_createShapesHeatMap:function(t,i,n,a){
var r=this,s=r._calcDotAreaRange(t);a&&r.axes.size.setScaleRange(s);var o={extensionId:"dot",
freePosition:!0,activeSeriesAware:!1,wrapper:i,tooltipArgs:r._buildShapesTooltipArgs(n,a)
},l=new X.visual.DotSizeColor(r,r.pvHeatGrid,o).override("dimColor",function(e){return X.toGrayScale(e,.6);
}).pvMark;return a||l.sign.override("defaultSize",e.fun.constant(s.max)),l},_calcDotAreaRange:function(t){
var i=t.width,n=t.height,a=Math.min(i,n)/2;"diamond"===this.shape&&(a/=Math.SQRT2),
a-=2;var r=e.sqr(a),s=12,o=r-s;return 1>=o&&(r=Math.max(r,2),s=1,o=r-s,e.debug>=2&&this.log.warn("Using rescue mode dot area calculation due to insufficient space.")),
{min:s,max:r,span:o}},_buildShapesTooltipArgs:function(e,t){var n=this.chart;if(this.compatVersion()<=1&&this.showsTooltip()){
var a=n.options,r=a.customTooltip;r||(r=function(e,t,i){return null!=i&&void 0!==i[0]?i.join(", "):i;
});var s=this.visualRoles,o=s.series.grouping.dimensionNames(),l=s.category.grouping.dimensionNames();
return{buildTooltip:a.isMultiValued?function(n){var s=n.scene.group;if(!s)return"";
var u=i.Complex.values(s,o),c=i.Complex.values(s,l),h=[],d=n.scene.vars;return t&&(h[a.sizeValIdx||0]=d.size.value),
e&&(h[a.colorValIdx||0]=d.color.value),r.call(a,u,c,h)}:function(t){var i=t.scene.vars,n=i.series.rawValue,s=i.category.rawValue,o=i[e?"color":"size"],l=o?o.value:null;
return r.call(a,n,s,l)}}}},renderInteractive:function(){this.pvPanel.render()},_buildSceneCore:function(e,t,i){
function n(e){var t=new X.visual.Scene(s,{source:e});t.vars.series=ce.fromComplex(e),
i.forEach(function(i){a.call(r,t,i,e)})}function a(t,i,n){var a=e.child(i.key).child(n.key),r=new X.visual.Scene(t,{
source:a});r.vars.category=ce.fromComplex(i),l.onNewScene(r,!0),u.onNewScene(r,!0);
}var r=this,s=new X.visual.Scene(null,{panel:r,source:e}),o=r.visualRoles,l=new X.visual.RoleVarHelper(s,"color",o.color),u=new X.visual.RoleVarHelper(s,"size",o.size);
return t.forEach(n),s}}),X.PlotPanel.registerClass(X.HeatGridPanel),e.type("pvc.HeatGridChart",X.CategoricalAbstract).add({
_allowColorPerCategory:!0,_defaultAxisBandSizeRatio:1,_axisCreateIfUnbound:{color:!0
},_processOptionsCore:function(e){this.base(e),e.legend=!1},_createPlotsInternal:function(){
this._addPlot(new X.visual.HeatGridPlot(this))},defaults:{colorValIdx:0,sizeValIdx:1,
measuresIndexes:[2],axisOffset:0,plotFrameVisible:!1,colorNormByCategory:!0,numSD:2
}}),X.parseBoxLayoutMode=X.makeEnumParser("layoutMode",["overlapped","grouped"],"grouped"),
e("pvc.visual.BoxPlot",X.visual.CategoricalPlot.extend({methods:{type:"box",_initVisualRoles:function(){
this.base();var t={isMeasure:!0,requireSingleDimension:!0,requireIsDiscrete:!1,valueType:Number
};[{name:"median",label:"Median",defaultDimension:"median"},{name:"lowerQuartil",
label:"Lower Quartil",defaultDimension:"lowerQuartil"},{name:"upperQuartil",label:"Upper Quartil",
defaultDimension:"upperQuartil"},{name:"minimum",label:"Minimum",defaultDimension:"minimum"
},{name:"maximum",label:"Maximum",defaultDimension:"maximum"}].forEach(function(i){
this._addVisualRole(i.name,e.create(t,i))},this)},_getOrthoRoles:function(){return X.visual.BoxPlot.measureRolesNames.map(this.visualRole,this);
},_getCategoryRoleSpec:function(){return e.set(this.base(),"requireIsDiscrete",!0);
}},type:{methods:{measureRolesNames:["median","lowerQuartil","upperQuartil","minimum","maximum"]
}},options:{Stacked:{resolve:null,value:!1},LayoutMode:{resolve:"_resolveFull",cast:X.parseBoxLayoutMode,
value:"grouped"},BoxSizeRatio:{resolve:"_resolveFull",cast:function(t){return t=e.number.to(t),
null==t?1:.05>t?.05:t>1?1:t},value:.9},BoxSizeMax:{resolve:"_resolveFull",data:{resolveV1:function(e){
return this._specifyChartOption(e,"maxBoxSize"),!0}},cast:function(t){return t=e.number.to(t),
null==t?1/0:1>t?1:t},value:1/0}}})),X.visual.Plot.registerClass(X.visual.BoxPlot),
e.type("pvc.BoxplotPanel",X.CategoricalAbstractPanel).init(function(e,t,i,n){this.base(e,t,i,n),
this.boxSizeRatio=i.option("BoxSizeRatio"),this.boxSizeMax=i.option("BoxSizeMax"),
e.bpChartPanel||(e.bpChartPanel=this)}).add({plotType:"box",_v1DimRoleName:{value:"median"
},_createCore:function(){function t(e,t){var i=this.base(e,t);return"stroke"===t?i.darker(1):i;
}function i(e){return e.optionalMark(f,function(){return this.parent[f]()}).optionalMark(d,function(){
return this.parent[f]()/2-this[f]()/2}),e}function n(e){return e.override("defaultColor",t).override("interactiveStrokeWidth",function(e,t){
return t}).override("interactiveColor",function(e,t,i){return"stroke"===i?t:this.base(e,t,i);
})}function a(e){return n(e).optionalMark(d,function(){return this.parent[f]()/2-this[f]()/2;
})}function r(e){return n(i(e))}this.base();var s=this.visibleData({ignoreNulls:!1
}),o=this.axes.base,l=o.domainItems(),u=this.visualRoles.series.flatten(this.partData(),{
visible:!0,isNull:this.chart.options.ignoreNulls?!1:null}).childNodes,c=this._buildScene(s,u,l),h=this.isOrientationVertical()?"bottom":"left",d=this.anchorOrtho(h),f=this.anchorLength(h),v=this.anchorOrthoLength(h),p=new X.visual.Panel(this,this.pvPanel).lock("data",c.childNodes).pvMark,g=["panel"];
this.compatVersion()<=1&&g.push(""),this.pvBoxPanel=new X.visual.Panel(this,p,{extensionId:g
}).lock("data",function(e){return e.childNodes}).pvMark[f](function(e){return e.vars.category.boxWidth;
})[d](function(e){var t=e.vars.category;return t.boxLeft+t.boxWidth/2-this[f]()/2;
}),this.pvBar=i(new X.visual.Bar(this,this.pvBoxPanel,{extensionId:"boxBar",freePosition:!0,
normalStroke:!0})).intercept("visible",function(e){return e.vars.category.showBox&&this.delegateExtension(!0);
}).lockMark(h,function(e){return e.vars.category.boxBottom}).lockMark(v,function(e){
return e.vars.category.boxHeight}).override("defaultColor",t).override("interactiveColor",function(e,t,i){
return"stroke"===i?t:this.base(e,t,i)}).override("defaultStrokeWidth",e.fun.constant(1)).override("interactiveStrokeWidth",function(e,t){
return t}).pvMark,this.pvRuleWhiskerUpper=a(new X.visual.Rule(this,this.pvBoxPanel,{
extensionId:"boxRuleWhisker",freePosition:!0,noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1,
noTooltip:!1,showsInteraction:!0})).intercept("visible",function(e){return e.vars.category.showRuleWhiskerUpper&&this.delegateExtension(!0);
}).pvMark.lock(h,function(e){return e.vars.category.ruleWhiskerUpperBottom}).lock(v,function(e){
return e.vars.category.ruleWhiskerUpperHeight}),this.pvRuleWhiskerLower=a(new X.visual.Rule(this,this.pvBoxPanel,{
extensionId:"boxRuleWhisker",freePosition:!0,noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1,
noTooltip:!1,showsInteraction:!0})).intercept("visible",function(e){return e.vars.category.showRuleWhiskerBelow&&this.delegateExtension(!0);
}).pvMark.lock(h,function(e){return e.vars.category.ruleWhiskerLowerBottom}).lock(v,function(e){
return e.vars.category.ruleWhiskerLowerHeight}),this.pvRuleMin=r(new X.visual.Rule(this,this.pvBoxPanel,{
extensionId:"boxRuleMin",freePosition:!0,noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1,
noTooltip:!1,showsInteraction:!0})).intercept("visible",function(e){return null!=e.vars.minimum.value&&this.delegateExtension(!0);
}).pvMark.lock(h,function(e){return e.vars.minimum.position}),this.pvRuleMax=r(new X.visual.Rule(this,this.pvBoxPanel,{
extensionId:"boxRuleMax",freePosition:!0,noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1,
noTooltip:!1,showsInteraction:!0})).intercept("visible",function(e){return null!=e.vars.maximum.value&&this.delegateExtension(!0);
}).pvMark.lock(h,function(e){return e.vars.maximum.position}),this.pvRuleMedian=r(new X.visual.Rule(this,this.pvBoxPanel,{
extensionId:"boxRuleMedian",freePosition:!0,noHover:!1,noSelect:!1,noClick:!1,noDoubleClick:!1,
noTooltip:!1,showsInteraction:!0})).intercept("visible",function(e){return null!=e.vars.median.value&&this.delegateExtension(!0);
}).lockMark(h,function(e){return e.vars.median.position}).override("defaultStrokeWidth",e.fun.constant(2)).pvMark;
},renderInteractive:function(){this.pvBoxPanel.render()},_buildSceneCore:function(t,i,n){
function a(e,t){var i=new X.visual.Scene(h,{source:e}),a=e.key;i.vars.series=ce.fromComplex(e),
g.onNewScene(i,!1),n.forEach(function(e){r(i,a,e,t)})}function r(i,n,a,r){var h=t.child(a.key),v=h&&h.child(n),b=new X.visual.Scene(i,{
source:v}),x=b.vars,y=x.category=ce.fromComplex(h),_=d(h.value),S=_+(m?l+r*o:-s/2);
e.set(y,"group",h,"x",_,"width",f,"boxWidth",s,"boxLeft",S),u.forEach(function(e){
var t,i;if(v&&(t=e.dimName)){var n=v.dimensions(t),a=n.value(c);i=new ce(a,n.format(a)),
i.position=p(a)}else i=new ce(null,""),i.position=null;x[e.roleName]=i}),g.onNewScene(b,!0);
var w,C,k=null!=x.minimum.value,P=null!=x.lowerQuartil.value,M=null!=x.median.value,D=null!=x.upperQuartil.value,R=P||D;
R&&(w=P?x.lowerQuartil.position:M?x.median.position:x.upperQuartil.position,C=D?x.upperQuartil.position:M?x.median.position:x.lowerQuartil.position,
R=C!==w,R&&(y.boxBottom=w,y.boxHeight=C-w)),y.showBox=R,R=null!=x.maximum.value,R&&(w=D?x.upperQuartil.position:M?x.median.position:P?x.lowerQuartil.position:k?x.minimum.position:null,
R=null!=w,R&&(y.ruleWhiskerUpperBottom=w,y.ruleWhiskerUpperHeight=x.maximum.position-w)),
y.showRuleWhiskerUpper=R,R=k,R&&(C=P?x.lowerQuartil.position:M?x.median.position:D?x.upperQuartil.position:null,
R=null!=C,R&&(w=x.minimum.position,y.ruleWhiskerLowerHeight=C-w,y.ruleWhiskerLowerBottom=w)),
y.showRuleWhiskerBelow=R}var s,o,l,u=e.query(this.visualRoleList).where(function(e){
return!e.isDiscrete()&&e.isMeasure}).select(function(e){return{roleName:e.name,dimName:e.lastDimensionName()
}}).array(),c={visible:!0,zeroIfNone:!1},h=new X.visual.Scene(null,{panel:this,source:t
}),d=this.axes.base.scale,f=d.range().band,v=this.boxSizeMax,p=this.axes.ortho.scale,g=new X.visual.RoleVarHelper(h,"color",this.visualRoles.color),m="overlapped"!==this.plot.option("LayoutMode");
if(m){var b,x,y,_=i.length,S=this.boxSizeRatio;if(s=_?1===_?f:S*f/_:0,b=s>v,b&&(s=v),
x=_*s,b?(y=x/S,l=-y/2):(y=f,l=-f/2),_>1){var w=(y-x)/(_-1);o=s+w}else o=0}else s=Math.min(f,v);
return i.forEach(a),h}}),X.PlotPanel.registerClass(X.BoxplotPanel),e.type("pvc.BoxplotChart",X.CategoricalAbstract).add({
_defaultAxisBandSizeRatio:1/3,_getTranslationClass:function(t){return e.type(this.base(t)).methods({
_configureTypeCore:function(){this._configureTypeByPhysicalGroup("series"),this._configureTypeByPhysicalGroup("category"),
X.visual.BoxPlot.measureRolesNames.forEach(function(e){this._configureTypeByPhysicalGroup("value",e,1,1);
},this)}})},_createPlotsInternal:function(){this._addPlot(new X.visual.BoxPlot(this)),
this.options.plot2&&this._addPlot(new X.visual.PointPlot(this,{name:"plot2",spec:{
visualRoles:{value:{from:"main.median"}}},defaults:{LinesVisible:!0,DotsVisible:!0,
ColorAxis:2,OrthoAxis:1}}))},_initAxesEnd:function(){var e=this.axesByType.ortho;e&&e.forEach(function(e){
e.option.defaults({Offset:.02})}),this.base()},defaults:{crosstabMode:!1}}),X.parseTreemapLayoutMode=X.makeEnumParser("layoutMode",["squarify","slice-and-dice","slice","dice"],"squarify"),
X.parseTreemapColorMode=X.makeEnumParser("colorMode",["byParent","bySelf"],"byParent"),
e("pvc.visual.TreemapPlot",X.visual.Plot.extend({init:function(t,i){if(this.base(t,i),
!(t instanceof X.TreemapChart))throw e.error(e.format("Plot type '{0}' can only be used from within a treemap chart.",[this.type]));
},methods:{type:"treemap",_initVisualRoles:function(){this.base(),this._addVisualRole("category",{
isRequired:!0,defaultDimension:"category*",autoCreateDimension:!0,rootLabel:this.option("RootCategoryLabel")
}),this._addVisualRole("size",{isMeasure:!0,isRequired:!1,isPercent:!0,requireSingleDimension:!0,
requireIsDiscrete:!1,valueType:Number,defaultDimension:"size"})},_getColorRoleSpec:function(){
return{defaultSourceRole:"category",defaultDimension:"color*",rootLabel:this.option("RootCategoryLabel"),
requireIsDiscrete:!0}},createVisibleData:function(e,t){return this.visualRoles.category.select(e,t);
},_initDataCells:function(){this.base(),this._addDataCell(new X.visual.DataCell(this,"size",this.option("SizeAxis")-1,this.visualRole("size"),this.option("DataPart")));
}},options:{SizeRole:{resolve:"_resolveFixed",value:"size"},SizeAxis:{resolve:"_resolveFixed",
value:1},ValuesAnchor:{cast:X.parseAnchor,value:"center"},ValuesVisible:{value:!0
},ValuesMask:{resolve:"_resolveFull",value:"{category}"},ValuesOptimizeLegibility:{
value:!0},LayoutMode:{resolve:"_resolveFull",cast:X.parseTreemapLayoutMode,value:"squarify"
},ColorMode:{resolve:"_resolveFull",cast:X.parseTreemapColorMode,value:"byparent"
},RootCategoryLabel:{resolve:"_resolveFull",cast:String,value:"All"}}})),X.visual.Plot.registerClass(X.visual.TreemapPlot),
e.type("pvc.visual.TreemapDiscreteColorAxis",X.visual.ColorAxis).init(function(e,t,i,n){
this.base(e,t,i,n),this.isByParent="byparent"===e.plots.treemap.option("ColorMode");
}).add({domainItemValueProp:function(){return this.role&&this.role.grouping.isSingleDimension?"value":"absKey";
},domainGroupOperator:function(){return"select"},_calcAvgColor:function(e){var i=e.length;
if(i>1){var n=0,a=0,r=0,s=0;e.forEach(function(e){var t=e.rgb();n+=t.r,a+=t.g,r+=t.b,
s+=t.a});var o=Math.floor;return t.rgb(o(n/i),o(a/i),o(r/i),o(s/i))}var l=e[0];return i?l.darker(.7):l;
},_getBaseScheme:function(){var t=this,i=function(e){return null!=e.value},n=function(e){
return e.children().where(i)},a=function(e){return n(e).any()},r=function(e){return n(e).any(a);
},s=e.query(this.domainData().nodes()).where(r).array(),o=t.option("Colors");return function(i){
var a=i instanceof Array?i:e.array.copy(arguments),r=e.query(s).object({name:function(e){
return t.domainItemValue(e)}});e.array.removeIf(a,function(t){return e.hasOwnProp.call(r,t);
});var l=o(a),u={},c=function(i){var a,s=t.domainItemValue(i);if(e.hasOwnProp.call(r,s)){
if(a=e.getOwn(u,s),!a){var o=n(i).select(c).array();if(!o.length)throw e.assert("Should have at least one child that is also a parent.");
a=u[s]=t._calcAvgColor(o)}}else{var h=t.option.isSpecified("Map")&&t.option("Map");
a=h&&h[s]?h[s]:t.option("PreserveMap")&&t._state.preservedMap&&t._state.preservedMap[s]?t._state.preservedMap[s]:l(s);
}return a};s.forEach(c);var h=function(t){return e.getOwn(u,t)||l(t)};e.copy(h,l);
var d,f;return h.domain=function(){if(arguments.length)throw e.error.operationInvalid("The scale cannot be modified.");
return d||(d=e.array.append(e.ownKeys(u),a))},h.range=function(t){if(arguments.length){
var i=e.own(u).map(function(e){return e.key}),n=t;e.array.removeIf(n,function(e){
return i.indexOf(e.key)>-1}),n.length&&l.range(n),u={},s.forEach(c)}return f||(f=e.array.append(e.own(u),l.range()));
},h}},_selectDomainItems:function(t){var i=e.query(t.nodes()),n=function(e){return null!=e.value;
},a=function(e){return e.children().where(n)},r=function(e){return a(e).any()},s=function(e){
return!r(e)};return i.where(this.isByParent?function(e){return e.parent?n(e)&&r(e):s(e)||a(e).any(s);
}:function(e){return(!e.parent||n(e))&&s(e)})}}),e.type("pvc.TreemapPanel",X.PlotPanel).init(function(e,t,i,n){
this.base(e,t,i,n),this.axes.size=e._getAxis("size",(i.option("SizeAxis")||0)-1),
this.layoutMode=i.option("LayoutMode")}).add({plotType:"treemap",_createCore:function(i){
var n=this,a=i.clientSize,r=n._buildScene();if(r){if(!r.childNodes.length&&!this.chart.visualRoles.multiChart.isBound())throw new X.InvalidDataException("Unable to create a treemap chart, please check the data values.","all-zero-data");
var s=e.number.to(n._getConstantExtension("leaf","lineWidth"),1),o=s,l=o/2,u=n.visualRoles.size.isBound()?n.axes.size.scale.by1(function(e){
return e.vars.size.value}):100,c=n.pvTreemapPanel=new X.visual.Panel(n,n.pvPanel,{
panelType:t.Layout.Treemap,extensionId:"panel"}).pvMark.lock("visible",!0).lock("nodes",r.nodes()).lock("left",l).lock("top",l).lock("width",a.width-o).lock("height",a.height-o).lock("size",u).lock("mode",n.layoutMode).lock("order",null).lock("round",!1);
c.node.left(function(e){return e.x+l}).top(function(e){return e.y+l}).width(function(e){
return e.dx-o}).height(function(e){return e.dy-o});var h=n.axes.color,d=n.visualRoles.color.isBound()?h.sceneScale({
sceneVarName:"color"}):e.fun.constant(h.option("Unbound")),f=new X.visual.Bar(n,c.leaf,{
extensionId:"leaf"}).lockMark("visible").override("defaultColor",function(e){return d(e);
}).override("defaultStrokeWidth",function(){return s}).pvMark.antialias(!1).lineCap("round").strokeDasharray(function(e){
return e.vars.size.value<0?"dash":null});new X.visual.Bar(n,c.node,{extensionId:"ascendant",
noHover:!0,noSelect:!0,noClick:!0,noDoubleClick:!0,noTooltip:!0}).intercept("visible",function(e){
return!!e.parent&&!!e.firstChild&&this.delegateExtension(!0)}).override("anyInteraction",function(e){
return e.anyInteraction()||e.isActiveDescendantOrSelf()}).override("defaultStrokeWidth",function(){
return 1.5*o}).override("interactiveStrokeWidth",function(e,t){return this.showsActivity()&&e.isActiveDescendantOrSelf()?1.5*Math.max(1,t):t;
}).override("defaultColor",function(e){return d(e)}).override("normalColor",e.fun.constant(null)).override("interactiveColor",function(e,i,n){
if("stroke"===n){if(this.showsActivity()){if(e.isActiveDescendantOrSelf())return t.color(i).brighter(.5);
if(e.anyActive())return null}if(this.showsSelection()&&e.isSelectedDescendantOrSelf())return t.color(i).brighter(.5);
}return null}).pvMark.antialias(!1);var v=X.visual.ValueLabel.maybeCreate(n,c.label,{
noAnchor:!0});v&&v.pvMark.textMargin(3).sign.optional("textAngle",function(e){var i=this.defaultText(e),n=this.pvMark;
return e.dx-2*n.textMargin()>t.Text.measureWidth(i,n.font())?0:e.dx>=e.dy?0:-Math.PI/2;
}).override("calcTextFitInfo",function(e,i){var n=this.pvMark,a=n.textMargin();if(!(-1e-6>a)){
var r=n.textAngle(),s=Math.abs(Math.sin(r))<1e-6,o=!s&&Math.abs(Math.cos(r))<1e-6;
if(s||o){var l=!1,u=t.Text.measure(i,n.font()),c=.75*u.height,h=e[o?"dx":"dy"];"middle"!==n.textBaseline()&&(h/=2),
h-=2*a,l|=c>h;var d=e[o?"dy":"dx"];return"center"!==n.textAlign()&&(d/=2),d-=2*a,
l|=0>=d||this.hideOverflowed&&u.width>d,{hide:l,widthMax:d}}}}).override("getAnchoredToMark",function(){
return f})}},renderInteractive:function(){this.pvTreemapPanel.render()},_buildScene:function(){
function e(t){var i=t.group;if(t.vars.category=ce.fromComplex(i),a.onNewScene(t,!0),
r&&!t.vars.size.value)return t.parentNode&&t.parentNode.removeChild(t),t;var n=i.children().where(function(e){
return null!=e.value}).array();if(s){var l=o&&!n.length?i.parent:i;if(l){var u=s.view(l);
t.vars.color=new ce(u.keyTrimmed(),u.label)}else t.vars.color=new ce(null,"")}else t.parent||(t.vars.color=new ce(null,""));
return n.forEach(function(i){e(new X.visual.Scene(t,{source:i}))}),t}var t=this.visibleData({
ignoreNulls:!1});if(!t.childCount())return null;var i=this.visualRoles,n=new X.visual.Scene(null,{
panel:this,source:t}),a=new X.visual.RoleVarHelper(n,"size",i.size,{allowNestedVars:!0,
hasPercentSubVar:!0}),r=i.size.isBound(),s=i.color&&i.color.grouping,o=s&&"byparent"===this.plot.option("ColorMode");
return e(n)}}),X.PlotPanel.registerClass(X.TreemapPanel),e.type("pvc.TreemapChart",X.BaseChart).add({
_axisClassByType:{size:X.visual.NormalizedAxis},_axisCreateIfUnbound:{color:!0},_getTranslationClass:function(t){
return e.type(this.base(t)).methods({_configureTypeCore:function(){this._configureTypeByOrgLevel(["category"],["size"]);
}})},_getIsNullDatum:e.fun.constant(),_createPlotsInternal:function(){this._addPlot(new X.visual.TreemapPlot(this));
},_initPlotsEnd:function(){this.base(),null==this.options.legend&&(this.options.legend="byparent"===this.plots.treemap.option("ColorMode"));
},_initAxes:function(){return this.visualRoles.color.isDiscrete()?(e.hasOwnProp.call(this,"_axisClassByType")||(this._axisClassByType=Object.create(this._axisClassByType)),
this._axisClassByType.color=X.visual.TreemapDiscreteColorAxis):delete this._axisClassByType,
this.base()},defaults:{legend:null}}),X.parseSunburstSliceOrder=X.makeEnumParser("sliceOrder",["bySizeAscending","bySizeDescending","none"],"bySizeDescending"),
X.parseSunburstColorMode=X.makeEnumParser("colorMode",["fan","slice","level"],"fan"),
e("pvc.visual.SunburstPlot",X.visual.Plot.extend({init:function(t,i){if(this.base(t,i),
!(t instanceof X.SunburstChart))throw e.error(e.format("Plot type '{0}' can only be used from within a sunburst chart.",[this.type]));
},methods:{type:"sunburst",_initVisualRoles:function(){this.base(),this._addVisualRole("category",{
isRequired:!0,defaultDimension:"category*",autoCreateDimension:!0,rootLabel:this.option("RootCategoryLabel")
}),this._addVisualRole("size",{isMeasure:!0,isRequired:!1,isPercent:!0,requireSingleDimension:!0,
requireIsDiscrete:!1,valueType:Number,defaultDimension:"size"})},_getColorRoleSpec:function(){
return{defaultSourceRole:"category",defaultDimension:"color*",requireIsDiscrete:!0,
rootLabel:this.option("RootCategoryLabel")}},createVisibleData:function(e,t){return this.visualRoles.category.select(e,t);
},_initDataCells:function(){this.base(),this._addDataCell(new X.visual.DataCell(this,"size",this.option("SizeAxis")-1,this.visualRoles.size,this.option("DataPart")));
}},options:{SizeRole:{resolve:"_resolveFixed",value:"size"},SizeAxis:{resolve:"_resolveFixed",
value:1},ValuesAnchor:{cast:X.parseAnchor,value:"center"},ValuesVisible:{value:!0
},ValuesMask:{resolve:"_resolveFull",value:"{category}"},ValuesOptimizeLegibility:{
value:!0},ColorMode:{resolve:"_resolveFull",cast:X.parseSunburstColorMode,value:"fan"
},RootCategoryLabel:{resolve:"_resolveFull",cast:String,value:"All"},SliceOrder:{
resolve:"_resolveFull",cast:X.parseSunburstSliceOrder,value:"bySizeDescending"},EmptySlicesVisible:{
resolve:"_resolveFull",cast:Boolean,value:!1},EmptySlicesLabel:{resolve:"_resolveFull",
cast:String,value:""}}})),X.visual.Plot.registerClass(X.visual.SunburstPlot),e("pvc.visual.SunburstDiscreteColorAxis",X.visual.ColorAxis.extend({
methods:{domainItemValueProp:function(){return this.role&&this.role.grouping.isSingleDimension?"value":"absKey";
},domainGroupOperator:function(){return"select"},_getBaseScheme:function(){var t="slice"!==this.chart.plots.sunburst.option("ColorMode");
if(!t)return this.base();var i=function(e){return null!=e.value},n=e.query(this.domainData().childNodes).where(i).select(this.domainItemValue.bind(this)).object(),a=this.option("Colors");
return function(){function t(t){return e.hasOwn(n,t)?i(t):null}var i=a.apply(null,arguments);
return e.copy(t,i),t}},_selectDomainItems:function(t){var i=function(e){return null!=e.value;
},n="slice"!==this.chart.plots.sunburst.option("ColorMode");return n?e.query(t.childNodes).where(i):e.query(t.nodes()).where(function(e){
return e.parent?i(e)&&!e.parent.parent:!1})}},options:{SliceBrightnessFactor:{resolve:"_resolveFull",
cast:e.number.toNonNegative,value:1},SliceLevelAlphaRatio:{resolve:"_resolveFull",
cast:Y,value:.15},SliceLevelAlphaMin:{resolve:"_resolveFull",cast:Y,value:.1}}})),
e.type("pvc.SunburstPanel",X.PlotPanel).init(function(e,t,i,n){this.base(e,t,i,n),
this.axes.size=e._getAxis("size",(i.option("SizeAxis")||0)-1),this.sliceOrder=i.option("SliceOrder"),
this.emptySlicesVisible=i.option("EmptySlicesVisible"),this.emptySlicesLabel=this.emptySlicesVisible?i.option("EmptySlicesLabel"):"";
}).add({plotType:"sunburst",_createCore:function(){var i=this._getConstantExtension("label","font");
e.string.is(i)&&(this.valuesFont=i);var n=this,a=n._buildScene();if(a){if(!a.childNodes.length&&!this.chart.visualRoles.multiChart.isBound())throw new X.InvalidDataException("Unable to create a sunburst chart, please check the data values.","all-zero-data");
var r=n.visualRoles.size.isBound()?n.axes.size.scale.by1(function(e){return e.vars.size.value;
}):e.fun.constant(100),s=n.pvSunburstPanel=new X.visual.Panel(n,n.pvPanel,{panelType:t.Layout.Partition.Fill,
extensionId:"panel"}).pvMark.lock("visible",!0).lock("nodes",a.nodes()).lock("size",r).lock("orient","radial"),o=new X.visual.SunburstSlice(this,s.node,{
extensionId:"slice",tooltipArgs:{options:{useCorners:!0,gravity:function(){var e=this.midAngle(),t=Math.cos(e)>=0,i=Math.sin(e)>=0;
return t?i?"nw":"sw":i?"ne":"se"}}}}),l=X.visual.ValueLabel.maybeCreate(n,s.label,{
noAnchor:!0});l&&l.override("defaultText",function(e){return e.isRoot()?"":this.base(e);
}).override("calcTextFitInfo",function(e,i){var n=this.pvMark,a=n.textMargin();if(!(-1e-6>a)&&"center"===n.textAlign()&&i){
var r=X.normAngle(e.midAngle),s=X.normAngle(n.textAngle()),o=Math.abs(r-s)<1e-6,l=!1;
if(!o){var u=X.normAngle(s+Math.PI);l=Math.abs(r-u)<1e-6}if(o||l){var c,h=e.innerRadius,d=h,f=e.outerRadius,v=e.angle,p=t.Text.measure(i,n.font()),g=!1;
if(v<Math.PI){var m=.85*p.height,b=n.textBaseline(),x="middle"===b?m+a/2:2*(m+3*a/2);
d=Math.max(d,x/(2*Math.tan(v/2)))}return c=f-a-d,g|=0>=c,c-=a,g|=this.hideOverflowed&&p.width>c,
{hide:g,widthMax:c}}}}).override("getAnchoredToMark",function(){return o.pvMark});
}},renderInteractive:function(){this.pvSunburstPanel.render()},_buildScene:function(){
function t(e,i){i>x&&(x=i);var n=e.group,s=e.vars.category=ce.fromComplex(n);if(r&&null==s.value&&(s.value=r),
d.onNewScene(e,!0),h&&!e.vars.size.value)return e.parentNode&&e.parentNode.removeChild(e),
e;var o=n.children();if(a||(o=o.where(function(e){return null!=e.value})),f){var l=f.view(n);
e.vars.color=new ce(l.keyTrimmed(),l.label)}else e.vars.color=new ce(null,"");return o.each(function(n){
t(new X.visual.SunburstScene(e,{source:n}),i+1)}),e}function i(e,t,n,a){var r=null,u=e.parent;
if(u&&(r=b(e),!r&&!u.isRoot()&&(r=u.color)))if(g)t&&s&&(r=r.brighter(s*t/(n-1)));else if(m){
r=r.rgb();var c=o*(a-1),h=Math.max(l,(1-c)*r.a);r=r.alpha(h)}e.color=r;var d=e.childNodes,f=d.length;
d.forEach(function(e,t){i(e,t,f,a+1)})}var n=this.visibleData({ignoreNulls:!1}),a=this.emptySlicesVisible,r=this.emptySlicesLabel;
if(!n.childCount())return null;var s,o,l,u=this.visualRoles,c=new X.visual.SunburstScene(null,{
panel:this,source:n}),h=u.size.isBound(),d=new X.visual.RoleVarHelper(c,"size",u.size,{
allowNestedVars:!0,hasPercentSubVar:!0}),f=u.color&&u.color.grouping,v=this.axes.color,p=this.plot.option("ColorMode"),g="fan"===p,m="level"===p,b=u.color.isBound()?v.sceneScale({
sceneVarName:"color"}):e.fun.constant(v.option("Unbound")),x=0;if(g?s=v.option("SliceBrightnessFactor"):m&&(o=v.option("SliceLevelAlphaRatio"),
l=v.option("SliceLevelAlphaMin")),t(c,0),this.sliceOrder&&h&&"none"!==this.sliceOrder){
var y="bysizeascending"===this.sliceOrder?e.ascending:e.descending;c.sort(function(t,i){
return y(t.vars.size.value,i.vars.size.value)||e.ascending(t.childIndex(),i.childIndex());
})}return i(c,0,0,0),c}}),X.PlotPanel.registerClass(X.SunburstPanel),e.type("pvc.visual.SunburstScene",X.visual.Scene).add({
_createSelectedInfo:function(){var e=this.chart().data.owner.selectedCount()>0,t=e&&this.datums().all(i.Datum.isSelected);
return{any:e,is:t}}}),e.type("pvc.SunburstChart",X.BaseChart).add({_axisClassByType:{
size:X.visual.NormalizedAxis,color:X.visual.SunburstDiscreteColorAxis},_axisCreateIfUnbound:{
color:!0},_getTranslationClass:function(t){return e.type(this.base(t)).methods({_configureTypeCore:function(){
this._configureTypeByOrgLevel(["category"],["size"])}})},_getIsNullDatum:e.fun.constant(),
_createPlotsInternal:function(){var e=new X.visual.SunburstPlot(this);this._addPlot(e),
this.options.legend=!1}}),e("pvc.visual.SunburstSlice",X.visual.Sign.extend({init:function(i,n,a){
var r=n.add(t.Wedge);a=e.setDefaults(a,"freeColor",!1),this.base(i,r,a),this._bindProperty("lineWidth","strokeWidth");
},properties:["strokeWidth"],methods:{defaultStrokeWidth:e.fun.constant(.5),interactiveStrokeWidth:function(e,t){
return this.showsActivity()&&e.isActiveDescendantOrSelf()?2*Math.max(1,t):t},defaultColor:function(e){
return e.color},normalColor:function(e,t,i){return t&&"stroke"===i?t.darker():t},
interactiveColor:function(e,t,i){if(this.showsActivity())if("stroke"===i){if(e.isActiveDescendantOrSelf())return t.brighter(2).alpha(.7);
}else if(e.isActive)return t.brighter(.2).alpha(.8);return this.mayShowNotAmongSelected(e)?this.dimColor(t,i):this.normalColor(e,t,i);
}}})),e.type("pvc.visual.BulletPlot",X.visual.Plot.extend({methods:{type:"bullet",
_initVisualRoles:function(){this.base(),this._addVisualRole("title",{defaultDimension:"title*"
}),this._addVisualRole("subTitle",{defaultDimension:"subTitle*"}),this._addVisualRole("value",{
isMeasure:!0,requireIsDiscrete:!1,requireSingleDimension:!1,valueType:Number,defaultDimension:"value*"
}),this._addVisualRole("marker",{isMeasure:!0,requireIsDiscrete:!1,requireSingleDimension:!1,
valueType:Number,defaultDimension:"marker*"}),this._addVisualRole("range",{isMeasure:!0,
requireIsDiscrete:!1,requireSingleDimension:!1,valueType:Number,defaultDimension:"range*"
})}},options:{ValuesVisible:{value:!0}}})),X.visual.Plot.registerClass(X.visual.BulletPlot),
e.type("pvc.BulletChart",X.BaseChart).add({bulletChartPanel:null,allowNoData:!0,_processOptionsCore:function(e){
e.legend=!1,e.selectable=!1,this.base(e)},_getTranslationClass:function(t){return e.type(this.base(t)).methods({
_configureTypeCore:function(){this._configureTypeByOrgLevel([{name:"title",greedy:!1,
maxCount:1},{name:"subTitle",greedy:!1,maxCount:1}],["value","marker",{name:"range",
greedy:!0,maxCount:1/0}])}})},_createPlotsInternal:function(){this._addPlot(new X.visual.BulletPlot(this));
},defaults:{compatVersion:1,orientation:"horizontal",bulletSize:30,bulletSpacing:50,
bulletMargin:100,bulletTitle:"Title",bulletSubtitle:"",bulletTitlePosition:"left",
tooltipFormat:function(e,t,i){return this.chart.options.valueFormat(i)},crosstabMode:!1,
seriesInRows:!1,dataTypeCheckingMode:"extended"}}),e.type("pvc.BulletChartPanel",X.PlotPanel).add({
plotType:"bullet",pvBullets:null,pvBullet:null,data:null,onSelectionChange:null,_createCore:function(e){
var i,n,a,r,s,o,l,u,c,h=this.chart,d=h.options,f=this.buildData(),v=this,p="horizontal"==d.orientation?"left":"bottom";
if("horizontal"==d.orientation){switch(i=e.clientSize.width-this.chart.options.bulletMargin-20,
n=0,d.bulletTitlePosition){case"top":l=this.chart.options.bulletMargin,r=0,a="left",
s=-12,c=parseInt(d.titleSize/2,10);break;case"bottom":l=this.chart.options.bulletMargin,
r=0,a="left",s=d.bulletSize+32,c=0;break;case"right":l=5,r=i+5,a="left",s=parseInt(d.bulletSize/2,10),
c=0;break;case"left":default:l=this.chart.options.bulletMargin,r=0,s=parseInt(d.bulletSize/2,10),
a="right",c=0}o="bottom",u=function(){return this.index*(d.bulletSize+d.bulletSpacing)+c;
}}else{switch(i=e.clientSize.height-this.chart.options.bulletMargin-20,d.bulletTitlePosition){
case"top":l=this.chart.options.bulletMargin,r=0,a="left",s=-20,n=0,u=void 0;break;
case"bottom":l=this.chart.options.bulletMargin,r=0,a="left",s=i+20,n=0,u=20;break;
case"right":l=5,r=this.chart.options.bulletSize+40,a="left",s=i,n=-Math.PI/2,u=void 0;
break;case"left":default:l=this.chart.options.bulletMargin,r=-12,s=this.height-this.chart.options.bulletMargin-20,
a="left",n=-Math.PI/2,u=void 0}o="right",l=function(){return d.bulletMargin+this.index*(d.bulletSize+d.bulletSpacing);
}}if(this.pvBullets=this.pvPanel.add(t.Panel).data(f)[X.BasePanel.orthogonalLength[p]](i)[X.BasePanel.parallelLength[p]](this.chart.options.bulletSize).margin(20).left(l).top(u),
this.pvBullet=this.pvBullets.add(t.Layout.Bullet).orient(p).ranges(function(e){return e.ranges;
}).measures(function(e){return e.measures}).markers(function(e){return e.markers}),
h.clickable()&&this.clickAction){var v=this;this.pvBullet.cursor("pointer").event("click",function(e){
var i=e.title,n=e.subtitle,a=t.event;return v.clickAction(i,n,e.measures,a)})}if(this.pvBulletRange=this.pvBullet.range.add(t.Bar),
this.pvBulletMeasure=this.pvBullet.measure.add(t.Bar).text(function(e,t){return t.formattedMeasures[this.index];
}),this.pvBulletMarker=this.pvBullet.marker.add(t.Dot).shape("square").fillStyle("white").text(function(e,t){
return t.formattedMarkers[this.index]}),this.showsTooltip()){var g=this;this.pvBulletMeasure.localProperty("tooltip").tooltip(function(e,t){
var i=t.title,n=t.subtitle;return h.options.tooltipFormat.call(g,i,n,e)}),this.pvBulletMarker.localProperty("tooltip").tooltip(function(e,t){
var i=t.title,n=t.subtitle;return h.options.tooltipFormat.call(g,i,n,e)}),this.pvBulletMeasure.event("mouseover",t.Behavior.tipsy(this.chart._tooltipOptions)),
this.pvBulletMarker.event("mouseover",t.Behavior.tipsy(this.chart._tooltipOptions));
}this.pvBulletRule=this.pvBullet.tick.add(t.Rule),this.pvBulletRuleLabel=this.pvBulletRule.anchor(o).add(t.Label).text(function(e){
return v.pvBullet.x.tickFormat(e,this.index)}),this.pvBulletTitle=this.pvBullet.anchor(p).add(t.Label).font("bold 12px sans-serif").textAngle(n).left(-10).textAlign(a).textBaseline("bottom").left(r).top(s).text(function(e){
return e.formattedTitle}),this.pvBulletSubtitle=this.pvBullet.anchor(p).add(t.Label).textStyle("#666").textAngle(n).textAlign(a).textBaseline("top").left(r).top(s).text(function(e){
return e.formattedSubtitle});var m="function"==typeof d.axisDoubleClickAction?function(e,t){
d.axisDoubleClickAction(e,t)}:null;h.doubleClickable()&&m&&(this.pvBulletTitle.cursor("pointer").events("all").event("dblclick",function(e){
m(e,arguments[arguments.length-1])}),this.pvBulletSubtitle.cursor("pointer").events("all").event("dblclick",function(e){
m(e,arguments[arguments.length-1])}))},applyExtensions:function(){this.base(),this.extend(this.pvBullets,"bulletsPanel"),
this.extend(this.pvBullet,"bulletPanel"),this.extend(this.pvBulletRange,"bulletRange"),
this.extend(this.pvBulletMeasure,"bulletMeasure"),this.extend(this.pvBulletMarker,"bulletMarker"),
this.extend(this.pvBulletRule,"bulletRule"),this.extend(this.pvBulletRuleLabel,"bulletRuleLabel"),
this.extend(this.pvBulletTitle,"bulletTitle"),this.extend(this.pvBulletSubtitle,"bulletSubtitle");
},_getExtensionId:function(){return[{abs:"content"}].concat(this.base())},buildData:function(){
var t,i=this.chart,n=i.options,a=i.visualRoles.title,r=a.grouping,s=i.visualRoles.subTitle,o=s.grouping,l=i.visualRoles.value,u=l.grouping,c=i.visualRoles.marker,h=c.grouping,d=i.visualRoles.range,f=d.grouping,v={
title:n.bulletTitle,formattedTitle:n.bulletTitle,subtitle:n.bulletSubtitle,formattedSubtitle:n.bulletSubtitle,
ranges:e.array.to(n.bulletRanges)||[],measures:e.array.to(n.bulletMeasures)||[],markers:e.array.to(n.bulletMarkers)||[]
};return e.set(v,"formattedRanges",v.ranges.map(String),"formattedMeasures",v.measures.map(String),"formattedMarkers",v.markers.map(String)),
t=u||r||h||o||f?i.data.datums().select(function(e){var t,i=Object.create(v);return u&&(t=u.view(e),
i.measures=t.values(),i.formattedMeasures=t.labels()),r&&(t=r.view(e),i.title=t.value,
i.formattedTitle=t.label),o&&(t=o.view(e),i.subtitle=t.value,i.formattedSubtitle=t.label),
h&&(t=h.view(e),i.markers=t.values(),i.formattedMarkers=t.labels()),f&&(t=f.view(e),
i.ranges=t.values(),i.formattedRanges=t.labels()),i},this).array():[v]}}),X.PlotPanel.registerClass(X.BulletChartPanel),
e.type("pvc.ParallelCoordinates",X.BaseChart).init(function(e){e=e||{},e.dimensions=e.dimensions||{},
e.dimensions.value||(e.dimensions.value={valueType:null}),this.base(e)}).add({parCoordPanel:null,
_createContent:function(t,i){this.parCoordPanel=new X.ParCoordPanel(this,t,e.create(i,{
topRuleOffset:this.options.topRuleOffset,botRuleOffset:this.options.botRuleOffset,
leftRuleOffset:this.options.leftRuleOffset,rightRuleOffset:this.options.rightRuleOffset,
sortCategorical:this.options.sortCategorical,mapAllDimensions:this.options.mapAllDimensions,
numDigits:this.options.numDigits}))},defaults:e.create(X.BaseChart.prototype.defaults,{
compatVersion:1,topRuleOffset:30,botRuleOffset:30,leftRuleOffset:60,rightRuleOffset:60,
sortCategorical:!0,mapAllDimensions:!0,numDigits:0})}),e.type("pvc.ParCoordPanel",X.BasePanel).add({
anchor:"fill",pvParCoord:null,dimensions:null,dimensionDescr:null,data:null,retrieveData:function(){
var e=this.chart.data,t=this.chart.options.numDigits;this.dimensions=e.getVisibleCategories();
var i=e.getValues(),n=e.getVisibleSeriesIndexes(),a=e.getVisibleCategoriesIndexes(),r=e.getCategories(),s=a.map(this.chart.options.mapAllDimensions?function(e){
return isNaN(i[e][0])?{categorical:!0,len:0,map:[]}:{categorical:!1,len:0,map:[],
displayValue:[]}}:function(e){return isNaN(i[e][0])?{categorical:!0,len:0,map:[]}:null;
}),o=function(e,i){var n=s[e],a=null;if(n.categorical)a=n.map[i],null==a&&(a=n.len,
n.len++,n.map[i]=a);else{var r=i.toFixed(t);a=n.map[r],null==a&&(a=n.len,n.len++,
n.map[r]=a,n.displayValue[r]=i)}return a};for(var l in s)s.hasOwnProperty(l)&&s[l]&&s[l].categorical&&(s[l].displayValue=s[l].map);
var u,c,h;if(this.chart.options.sortCategorical||this.chart.options.mapAllDimensions)for(u=0;u<s.length;u++)if(s[u]){
for(var d=0;d<i[u].length;d++)o(u,i[u][d]);var f=s[u].map,v=[];for(c in f)f.hasOwnProperty(c)&&v.push(c);
if(v.sort(),s[u].categorical)for(h=0;h<v.length;h++)f[v[h]]=h;else for(h=0;h<v.length;h++)f[v[h]].index=h;
}var p=function(e){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[r[n]]=s[n]?o(n,i[n][e]):i[n][e]);
return t};this.data=n.map(function(e){return p(e)});var g=this.dimensions.map(function(e){
var t={},i=e.split("__");return t.id=e,t.name=i[0],t.unit=i.length>1?i[1]:"",t});for(u=0;u<g.length;u++){
c=g[u];var m=a[u];c.orgRowIndex=m;var b,x,y,_,S,w=i[m].length;if(s[m])for(b=x=y=_=s[m].displayValue[i[m][0]],
h=1;w>h;h++)S=s[m].displayValue[i[m][h]],b>S&&(y=b,b=S),S>x&&(_=x,x=S);else for(b=x=y=_=i[m][0],
h=1;w>h;h++)S=i[m][h],b>S&&(y=b,b=S),S>x&&(_=x,x=S);var C=(x-_+(y-b))/2;if(c.min=b,
c.max=x,c.step=C,c.categorical=!1,s[m]&&(c.map=s[m].map,c.mapLength=s[m].len,c.categorical=s[m].categorical,
!c.categorical)){c.orgValue=[];var k=s[m].map;for(var P in k)k.hasOwnProperty(P)&&(c.orgValue[k[P]]=0+P);
}}var M=function(e,t){for(var i={},n=0;n<e.length;n++)i[e[n]]=t[n];return i};this.dimensionDescr=M(this.dimensions,g);
},_createCore:function(){function e(e){var t=e.dim;return _[t].min=Math.max(x[t].domain()[0],x[t].invert(a-e.y-e.dy)),
_[t].max=Math.min(x[t].domain()[1],x[t].invert(a-e.y)),S=t,L.render(),!1}function i(e){
if(e.dy<3){var t=e.dim;_[t].min=Math.max(x[t].domain()[0],x[t].invert(0)),_[t].max=Math.min(x[t].domain()[1],x[t].invert(a)),
e.y=o,e.dy=h,S=t,L.render()}return!1}var n=this;this.retrieveData();var a=this.height,r=this.chart.options.numDigits,s=this.chart.options.topRuleOffset,o=this.chart.options.botRuleOffset,l=this.chart.options.leftRuleOffset,u=this.width-this.chart.options.rightRuleOffset,c=this.height-s,h=c-o,d=s-12,f=this.dimensions,v=this.dimensionDescr,p=function(e,i){
var n=v[e].min,a=v[e].max,r=v[e].step;return i&&(n-=r,a+=r),t.Scale.linear(n,a).range(o,c);
},g=function(e){var t=p(e,!0).range(o,c),i=v[e];if(i.orgValue&&!i.categorical){var n=function(e){
var n=t(i.orgValue[e]);return n};return n.domain=function(){return t.domain()},n.invert=function(e){
return t.invert(e)},n}return t},m=function(e){var t=p(e,!1).range("steelblue","brown");
return t},b=t.Scale.ordinal(f).splitFlush(l,u),x=t.dict(f,g),y=t.dict(f,m),_=t.dict(f,function(e){
return{min:x[e].domain()[0],max:x[e].domain()[1]}}),S=f[0],w=this.chart.options.mapAllDimensions?function(e){
return f.every(function(t){var i=v[t],n=i.orgValue&&!i.categorical?i.orgValue[e[t]]:e[t];
return n>=_[t].min&&n<=_[t].max})}:function(e){return f.every(function(t){return e[t]>=_[t].min&&e[t]<=_[t].max;
})};this.pvParCoord=this.pvPanel.add(t.Panel).data(n.data).visible(w).add(t.Line).data(f).left(function(e){
return b(e)}).bottom(function(e,t){var i=x[e](t[e]);return i}).strokeStyle("#ddd").lineWidth(1).antialias(!1);
var C=this.pvPanel.add(t.Rule).data(f).left(b).top(s).bottom(o);C.anchor("top").add(t.Label).top(d).font("bold 10px sans-serif").text(function(e){
return v[e].name});var k=[],P=6,M=3;for(var D in v)if(v.hasOwnProperty(D)){var R=v[D];
if(R.categorical){var A=b(R.id)+P;for(var I in R.map)R.map.hasOwnProperty(I)&&(k[k.length]={
x:A,y:x[R.id](R.map[I])+M,label:I})}}this.pvPanel.add(t.Panel).data(k).add(t.Label).left(function(e){
return e.x}).bottom(function(e){return e.y}).text(function(e){return e.label}).textAlign("left");
var L=this.pvPanel.add(t.Panel);L.add(t.Panel).data(n.data).visible(w).add(t.Line).data(f).left(function(e){
return b(e)}).bottom(function(e,t){return x[e](t[e])}).strokeStyle(function(e,t){
var i=v[S],n=i.orgValue&&!i.categorical?i.orgValue[t[S]]:t[S];return y[S](n)}).lineWidth(1);
var T=L.add(t.Panel).data(f.map(function(e){return{y:o,dy:h,dim:e}})).left(function(e){
return b(e.dim)-30}).width(60).fillStyle("rgba(0,0,0,.001)").cursor("crosshair").event("mousedown",t.Behavior.select()).event("select",e).event("selectend",i).add(t.Bar).left(25).top(function(e){
return e.y}).width(10).height(function(e){return e.dy}).fillStyle(function(e){return e.dim==S?y[e.dim]((_[e.dim].max+_[e.dim].min)/2):"hsla(0,0,50%,.5)";
}).strokeStyle("white").cursor("move").event("mousedown",t.Behavior.drag()).event("dragstart",e).event("drag",e);
T.anchor("bottom").add(t.Label).textBaseline("top").text(function(e){return v[e.dim].categorical?"":_[e.dim].min.toFixed(r)+v[e.dim].unit;
}),T.anchor("top").add(t.Label).textBaseline("bottom").text(function(e){return v[e.dim].categorical?"":_[e.dim].max.toFixed(r)+v[e.dim].unit;
}),this.extend(this.pvParCoord,"parCoord"),this.extend(this.pvPanel,"chart")}}),e.type("pvc.DataTree",X.BaseChart).init(function(e){
e=e||{},e.dimensionGroups=e.dimensionGroups||{},e.dimensionGroups.value||(e.dimensionGroups.value={
valueType:null}),this.base(e)}).add({structEngine:null,structMetadata:null,structDataset:null,
DataTreePanel:null,_getColorRoleSpec:function(){return{isRequired:!0,defaultSourceRole:"category",
requireIsDiscrete:!0}},setStructData:function(e){this.structDataset=e.resultset,this.structDataset.length||this.log("Warning: Structure-dataset is empty"),
this.structMetadata=e.metadata,this.structMetadata.length||this.log("Warning: Structure-Metadata is empty");
},_createContent:function(t,n){var a=this.structEngine,r=a?a.type:new i.ComplexType;
r.addDimension("value",{});var s={seriesInRows:!0,crosstabMode:!0},o=new i.CrosstabTranslationOper(r,this.structDataset,this.structMetadata,s);
o.configureType(),a||(a=this.structEngine=new i.Data({type:r})),a.load(o.execute(a)),
e.debug>=3&&this.log(this.structEngine.getInfo()),this.dataTreePanel=new X.DataTreePanel(this,t,e.create(n,{
topRuleOffset:this.options.topRuleOffset,botRuleOffset:this.options.botRuleOffset,
leftRuleOffset:this.options.leftRuleOffset,rightRuleOffset:this.options.rightRuleOffset,
boxplotColor:this.options.boxplotColor,valueFontsize:this.options.valueFontsize,headerFontsize:this.options.headerFontsize,
border:this.options.border,perpConnector:this.options.perpConnector,numDigits:this.options.numDigits,
minVerticalSpace:this.options.minVerticalSpace,connectorSpace:this.options.connectorSpace,
minAspectRatio:this.options.minAspectRatio}))},defaults:{compatVersion:1,topRuleOffset:30,
botRuleOffset:30,leftRuleOffset:60,rightRuleOffset:60,boxplotColor:"grey",headerFontsize:16,
valueFontsize:20,border:2,perpConnector:!1,numDigits:0,connectorSpace:.15,minVerticalSpace:.05,
minAspectRatio:2}}),e.type("pvc.DataTreePanel",X.PlotPanel).add({pvDataTree:null,
treeElements:null,structMap:null,structArr:null,hRules:null,vRules:null,rules:null,
generatePerpConnectors:function(e){this.hRules=[],this.vRules=[],this.rules=[];for(var t in this.structMap){
var i=this.structMap[t];if(null!=i.children){var n=1e4,a=-1e4,r=i.left+i.width;this.hRules.push({
left:r,width:e,bottom:i.bottom+i.height/2}),r+=e;for(var s in i.children){var o=this.structMap[i.children[s]],l=o.bottom+o.height/2;
l>a&&(a=l),n>l&&(n=l),this.hRules.push({left:r,width:o.left-r,bottom:l})}a>n&&this.vRules.push({
left:r,bottom:n,height:a-n})}}},generateLineSegment:function(e,t,i,n){var a=[];a.push({
x:e,y:t}),a.push({x:i,y:n}),this.rules.push(a)},generateConnectors:function(e){if(this.hRules=[],
this.vRules=[],this.chart.options.perpConnector)this.generatePerpConnectors(e);else{
this.rules=[];for(var t in this.structMap){var i=this.structMap[t];if(null!=i.children){
var n,a,r,s=1e4,o=-1e4;for(r in i.children)a=this.structMap[i.children[r]],n=a.bottom+a.height/2,
n>o&&(o=n),s>n&&(s=n);var l=(o+s)/2,u=i.left+i.width,c=u+e;this.generateLineSegment(u,i.bottom+i.height/2,c,l);
for(r in i.children)a=this.structMap[i.children[r]],n=a.bottom+a.height/2,this.generateLineSegment(c,l,a.left,n);
}}}},retrieveStructure:function(){var e=this.chart.structEngine,t=this.chart.options,i=e.getVisibleCategories();
this.treeElements=e.getVisibleSeries();var a,r=e.getValues(),s=i.length>4;for(a in this.treeElements)this.treeElements[a]=n.trim(this.treeElements[a]);
var o=[];o.getElement=function(e){return null==o[e]&&(o[e]={min:1e4,max:-1e4}),o[e];
},o.addValue=function(e,t){var i=o.getElement(e);return t<i.min&&(i.min=t),t>i.max&&(i.max=t),
i};var l,u,c,h;for(a in this.treeElements)c=this.treeElements[a],l=c[0],u=l.charCodeAt(0),
h=parseInt(c.slice(1),10),o.addValue("__cols",u),o.addValue(l,h);var d=o.getElement("__cols"),f=this.innerWidth/(d.max-d.min+1),v=t.connectorSpace*f,p=f-v,g=p/t.minAspectRatio,m=d.min;
delete o.__cols;for(a in o)if(d=o[a],"function"!=typeof d){var b=d.max-d.min+1;d.gridHeight=this.innerHeight/b,
d.cellHeight=d.gridHeight*(1-t.minVerticalSpace),d.cellHeight>g&&(d.cellHeight=g),
d.relBottom=(d.gridHeight-d.cellHeight)/2,d.numRows=b}var x=new RegExp("[\\s\"']+","g");
this.structMap={};for(a in this.treeElements){var y={};c=this.treeElements[a],y.box_id=c,
this.structMap[c]=y,l=c[0],u=l.charCodeAt(0),h=parseInt(c.slice(1),10),d=o.getElement(l),
y.colIndex=u-m,y.rowIndex=d.numRows-(h-d.min)-1,y.left=this.leftOffs+y.colIndex*f,
y.width=p,s?(y.bottom=r[4][a],y.height=r[5][a]):(y.bottom=this.botOffs+y.rowIndex*d.gridHeight+d.relBottom,
y.height=d.cellHeight),y.label=r[0][a],y.selector=r[1][a],y.aggregation=r[2][a];var _=(r[3][a]||"").replace(x," ");
y.children=" "===_||""===_?null:_.split(" ")}this.generateConnectors((f-p)/2),this.structArr=[];
for(a in this.structMap)c=this.structMap[a],this.structArr.push(c)},findDataValue:function(e,t){
for(var i=0;i<t[0].length;i++)if(t[0][i]==e)return t[1][i];this.log("Error: value with key : "+e+" not found.");
},generateBoxPlots:function(){var e=this.chart.options;for(var i in this.structArr){
var n=this.structArr[i];if(n.values.length){n.subplot={};var a=n.subplot,r=[],s=15,o=n.width/6;
a.hRules=[],a.vRules=[],a.marks=[],a.labels=[],r.push(this.findDataValue("_p5",n.values)),
r.push(this.findDataValue("_p25",n.values)),r.push(this.findDataValue("_p50",n.values)),
r.push(this.findDataValue("_p75",n.values)),r.push(this.findDataValue("_p95",n.values));
var l=!1;if("undefined"!=typeof r[2]){r[4]<r[0]&&(r=r.reverse(),this.log(" dataset "+n.box_id+" repaired (_p95 was smaller than _p5)")),
r[4]>r[0]?a.hScale=t.Scale.linear(r[0],r[4]):(l=!0,a.hScale=t.Scale.linear(r[0]-1e-10,r[0]+1e-10)),
a.hScale.range(n.left+o,n.left+n.width-o);var u,c=""+r[2];for(u=0;u<r.length;u++)r[u]=a.hScale(r[u]);
a.bot=n.bottom+n.height/3,a.top=n.bottom+2*n.height/3,a.mid=(a.top+a.bot)/2,a.textBottom=n.bottom+s,
a.textBottom=a.bot-e.valueFontsize-1;var h=3;if(l)a.vRules.push({left:r[0],bottom:a.bot,
lWidth:h,height:a.top-a.bot});else for(a.hRules.push({left:r[0],width:r[1]-r[0],lWidth:1,
bottom:a.mid}),a.hRules.push({left:r[1],width:r[3]-r[1],lWidth:1,bottom:a.bot}),a.hRules.push({
left:r[1],width:r[3]-r[1],lWidth:1,bottom:a.top}),a.hRules.push({left:r[3],width:r[4]-r[3],
lWidth:1,bottom:a.mid}),u=0;u<r.length;u++)a.vRules.push({left:r[u],bottom:a.bot,
lWidth:2==u?h:1,height:a.top-a.bot});a.labels.push({left:r[2],bottom:a.textBottom,
text:this.labelFixedDigits(c),size:e.smValueFont,color:e.boxplotColor})}}}},labelFixedDigits:function(e){
if("string"==typeof e&&(e=parseFloat(e)),"number"==typeof e){var t=this.chart.options.numDigits;
e=e.toFixed(t)}return""+e},addDataPoint:function(e){var t=this.chart.options;for(var i in this.structArr){
var n=this.structArr[i];if(n.values.length){var a=this.findDataValue(e,n.values);if("undefined"!=typeof a){
var r=n.subplot,s=r.hScale(a),o="green";r.marks.push({left:s,bottom:r.mid,color:o
}),r.labels.push({left:s,bottom:r.textBottom,text:this.labelFixedDigits(a),size:t.valueFont,
color:o})}}}},retrieveData:function(){var e,t=this.chart.data,i=this.chart.options,n=t.getVisibleSeries(),a=t.getValues(),r={},s=a.length;
for(var o in this.structArr){var l=this.structArr[o];for(l.values=[],e=0;s>e;e++)l.values.push([]);
r[l.selector]=l}var u={};for(e in n){var c=r[n[e]];if("undefined"!=typeof c)for(var h in a)c.values[h].push(a[h][e]);else u[n[e]]=!0;
}for(var d in u)this.log("Could'nt find box for selector: "+d);this.generateBoxPlots();
var f=new RegExp("[\\s\"']+","g");if(i.selectParam){var v=i.selectParam.replace(f,"");
"undefined"!=v&&v.length>0&&"undefined"!=typeof window[v]&&(v=window[v],this.addDataPoint(v));
}},_createCore:function(){var e=this,i=this.chart.options;i.smValueFontsize=Math.round(.6*i.valueFontsize),
i.smValueFont=""+i.smValueFontsize+"px sans-serif",i.valueFont=""+i.valueFontsize+"px sans-serif";
var n=i.topRuleOffset,a=i.botRuleOffset,r=i.leftRuleOffset;this.innerWidth=this.width-r-i.rightRuleOffset,
this.innerHeight=this.height-n-a,this.botOffs=a,this.leftOffs=r,this.retrieveStructure(),
this.retrieveData();var s,o=i.headerFontsize+3,l=this.rules;for(s=0;s<l.length;s++)this.pvPanel.add(t.Line).data(l[s]).left(function(e){
return e.x}).bottom(function(e){return e.y}).lineWidth(1).strokeStyle("black");for(this.pvDataTree=this.pvPanel.add(t.Bar).data(e.structArr).left(function(e){
return e.left}).bottom(function(e){return e.bottom}).height(function(e){return e.height;
}).width(function(e){return e.width}).fillStyle("green").add(t.Bar).left(function(e){
return e.left+i.border}).bottom(function(e){return e.bottom+i.border}).height(function(e){
return e.height-i.border-o}).width(function(e){return e.width-2*i.border}).fillStyle("white").add(t.Label).text(function(e){
return e.label}).textAlign("center").left(function(e){return e.left+e.width/2}).bottom(function(e){
return e.bottom+e.height-i.headerFontsize-5+i.headerFontsize/5}).font(""+i.headerFontsize+"px sans-serif").textStyle("white").fillStyle("blue"),
s=0;s<this.structArr.length;s++){var u=this.structArr[s];this.pvPanel.add(t.Rule).data(u.subplot.hRules).left(function(e){
return e.left}).width(function(e){return e.width}).bottom(function(e){return e.bottom;
}).lineWidth(function(e){return e.lWidth}).strokeStyle(e.chart.options.boxplotColor),
this.pvPanel.add(t.Rule).data(u.subplot.vRules).left(function(e){return e.left}).height(function(e){
return e.height}).bottom(function(e){return e.bottom}).lineWidth(function(e){return e.lWidth;
}).strokeStyle(e.chart.options.boxplotColor),this.pvPanel.add(t.Dot).data(u.subplot.marks).left(function(e){
return e.left}).bottom(function(e){return e.bottom}).fillStyle(function(e){return e.color;
}),this.pvPanel.add(t.Label).data(u.subplot.labels).left(function(e){return e.left;
}).bottom(function(e){return e.bottom}).font(function(e){return e.size}).text(function(e){
return e.text}).textAlign("center").textStyle(function(e){return e.color})}i.perpConnector&&(this.pvPanel.add(t.Rule).data(e.vRules).left(function(e){
return e.left}).bottom(function(e){return e.bottom}).height(function(e){return e.height;
}).strokeStyle("black"),this.pvPanel.add(t.Rule).data(e.hRules).left(function(e){
return e.left}).bottom(function(e){return e.bottom}).width(function(e){return e.width;
}).strokeStyle("black"))},applyExtensions:function(){this.extend(this.pvDataTree,"dataTree");
}}),X});