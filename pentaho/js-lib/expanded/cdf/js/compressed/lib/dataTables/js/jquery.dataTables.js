!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){
return t(e,window,document)}):"object"==typeof exports?module.exports=function(e,n){
return e||(e=window),n||(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),
t(n,e,e.document)}:t(jQuery,window,document)}(function(t,e,n,a){"use strict";function r(e){
var n,a,o="a aa ai ao as b fn i m o s ",i={};t.each(e,function(t,s){n=t.match(/^([^A-Z]+?)([A-Z])/),
n&&-1!==o.indexOf(n[1]+" ")&&(a=t.replace(n[0],n[2].toLowerCase()),i[a]=t,"o"===n[1]&&r(e[t]));
}),e._hungarianMap=i}function o(e,n,i){e._hungarianMap||r(e);var s;t.each(n,function(r,l){
s=e._hungarianMap[r],s===a||!i&&n[s]!==a||("o"===s.charAt(0)?(n[s]||(n[s]={}),t.extend(!0,n[s],n[r]),
o(e[s],n[s],i)):n[s]=n[r])})}function i(t){var e=$t.defaults.oLanguage,n=t.sZeroRecords;
!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&jt(t,t,"sZeroRecords","sEmptyTable"),
!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&jt(t,t,"sZeroRecords","sLoadingRecords"),
t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var a=t.sDecimal;a&&Et(a)}function s(t){
pe(t,"ordering","bSort"),pe(t,"orderMulti","bSortMulti"),pe(t,"orderClasses","bSortClasses"),
pe(t,"orderCellsTop","bSortCellsTop"),pe(t,"order","aaSorting"),pe(t,"orderFixed","aaSortingFixed"),
pe(t,"paging","bPaginate"),pe(t,"pagingType","sPaginationType"),pe(t,"pageLength","iDisplayLength"),
pe(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),
"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;
if(e)for(var n=0,a=e.length;a>n;n++)e[n]&&o($t.models.oSearch,e[n])}function l(e){
pe(e,"orderable","bSortable"),pe(e,"orderData","aDataSort"),pe(e,"orderSequence","asSorting"),
pe(e,"orderDataType","sortDataType");var n=e.aDataSort;n&&!t.isArray(n)&&(e.aDataSort=[n]);
}function u(e){if(!$t.__browser){var n={};$t.__browser=n;var a=t("<div/>").css({position:"fixed",
top:0,left:0,height:1,width:1,overflow:"hidden"}).append(t("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(t("<div/>").css({width:"100%",height:10
}))).appendTo("body"),r=a.children(),o=r.children();n.barWidth=r[0].offsetWidth-r[0].clientWidth,
n.bScrollOversize=100===o[0].offsetWidth&&100!==r[0].clientWidth,n.bScrollbarLeft=1!==Math.round(o.offset().left),
n.bBounding=a[0].getBoundingClientRect().width?!0:!1,a.remove()}t.extend(e.oBrowser,$t.__browser),
e.oScroll.iBarWidth=$t.__browser.barWidth}function c(t,e,n,r,o,i){var s,l=r,u=!1;for(n!==a&&(s=n,
u=!0);l!==o;)t.hasOwnProperty(l)&&(s=u?e(s,t[l],l,t):t[l],u=!0,l+=i);return s}function f(e,a){
var r=$t.defaults.column,o=e.aoColumns.length,i=t.extend({},$t.models.oColumn,r,{
nTh:a?a:n.createElement("th"),sTitle:r.sTitle?r.sTitle:a?a.innerHTML:"",aDataSort:r.aDataSort?r.aDataSort:[o],
mData:r.mData?r.mData:o,idx:o});e.aoColumns.push(i);var s=e.aoPreSearchCols;s[o]=t.extend({},$t.models.oSearch,s[o]),
d(e,o,t(a).data())}function d(e,n,r){var i=e.aoColumns[n],s=e.oClasses,u=t(i.nTh);
if(!i.sWidthOrig){i.sWidthOrig=u.attr("width")||null;var c=(u.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
c&&(i.sWidthOrig=c[1])}r!==a&&null!==r&&(l(r),o($t.defaults.column,r),r.mDataProp===a||r.mData||(r.mData=r.mDataProp),
r.sType&&(i._sManualType=r.sType),r.className&&!r.sClass&&(r.sClass=r.className),
t.extend(i,r),jt(i,r,"sWidth","sWidthOrig"),r.iDataSort!==a&&(i.aDataSort=[r.iDataSort]),
jt(i,r,"aDataSort"));var f=i.mData,d=I(f),h=i.mRender?I(i.mRender):null,p=function(t){
return"string"==typeof t&&-1!==t.indexOf("@")};i._bAttrSrc=t.isPlainObject(f)&&(p(f.sort)||p(f.type)||p(f.filter)),
i._setter=null,i.fnGetData=function(t,e,n){var r=d(t,e,a,n);return h&&e?h(r,e,t,n):r;
},i.fnSetData=function(t,e,n){return A(f)(t,e,n)},"number"!=typeof f&&(e._rowReadObject=!0),
e.oFeatures.bSort||(i.bSortable=!1,u.addClass(s.sSortableNone));var g=-1!==t.inArray("asc",i.asSorting),b=-1!==t.inArray("desc",i.asSorting);
i.bSortable&&(g||b)?g&&!b?(i.sSortingClass=s.sSortableAsc,i.sSortingClassJUI=s.sSortJUIAscAllowed):!g&&b?(i.sSortingClass=s.sSortableDesc,
i.sSortingClassJUI=s.sSortJUIDescAllowed):(i.sSortingClass=s.sSortable,i.sSortingClassJUI=s.sSortJUI):(i.sSortingClass=s.sSortableNone,
i.sSortingClassJUI="")}function h(t){if(t.oFeatures.bAutoWidth!==!1){var e=t.aoColumns;
vt(t);for(var n=0,a=e.length;a>n;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;
(""!==r.sY||""!==r.sX)&&gt(t),kt(t,null,"column-sizing",[t])}function p(t,e){var n=v(t,"bVisible");
return"number"==typeof n[e]?n[e]:null}function g(e,n){var a=v(e,"bVisible"),r=t.inArray(n,a);
return-1!==r?r:null}function b(e){var n=0;return t.each(e.aoColumns,function(e,a){
a.bVisible&&"none"!==t(a.nTh).css("display")&&n++}),n}function v(e,n){var a=[];return t.map(e.aoColumns,function(t,e){
t[n]&&a.push(e)}),a}function S(t){var e,n,r,o,i,s,l,u,c,f=t.aoColumns,d=t.aoData,h=$t.ext.type.detect;
for(e=0,n=f.length;n>e;e++)if(l=f[e],c=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){
for(r=0,o=h.length;o>r;r++){for(i=0,s=d.length;s>i&&(c[i]===a&&(c[i]=T(t,i,e,"type")),
u=h[r](c[i],t),u||r===h.length-1)&&"html"!==u;i++);if(u){l.sType=u;break}}l.sType||(l.sType="string");
}}function m(e,n,r,o){var i,s,l,u,c,d,h,p=e.aoColumns;if(n)for(i=n.length-1;i>=0;i--){
h=n[i];var g=h.targets!==a?h.targets:h.aTargets;for(t.isArray(g)||(g=[g]),l=0,u=g.length;u>l;l++)if("number"==typeof g[l]&&g[l]>=0){
for(;p.length<=g[l];)f(e);o(g[l],h)}else if("number"==typeof g[l]&&g[l]<0)o(p.length+g[l],h);else if("string"==typeof g[l])for(c=0,
d=p.length;d>c;c++)("_all"==g[l]||t(p[c].nTh).hasClass(g[l]))&&o(c,h)}if(r)for(i=0,
s=r.length;s>i;i++)o(i,r[i])}function D(e,n,r,o){var i=e.aoData.length,s=t.extend(!0,{},$t.models.oRow,{
src:r?"dom":"data",idx:i});s._aData=n,e.aoData.push(s);for(var l=e.aoColumns,u=0,c=l.length;c>u;u++)l[u].sType=null;
e.aiDisplayMaster.push(i);var f=e.rowIdFn(n);return f!==a&&(e.aIds[f]=s),(r||!e.oFeatures.bDeferRender)&&H(e,i,r,o),
i}function y(e,n){var a;return n instanceof t||(n=t(n)),n.map(function(t,n){return a=j(e,n),
D(e,a.data,n,a.cells)})}function _(t,e){return e._DT_RowIndex!==a?e._DT_RowIndex:null;
}function C(e,n,a){return t.inArray(a,e.aoData[n].anCells)}function T(t,e,n,r){var o=t.iDraw,i=t.aoColumns[n],s=t.aoData[e]._aData,l=i.sDefaultContent,u=i.fnGetData(s,r,{
settings:t,row:e,col:n});if(u===a)return t.iDrawError!=o&&null===l&&(Rt(t,0,"Requested unknown parameter "+("function"==typeof i.mData?"{function}":"'"+i.mData+"'")+" for row "+e+", column "+n,4),
t.iDrawError=o),l;if(u!==s&&null!==u||null===l||r===a){if("function"==typeof u)return u.call(s);
}else u=l;return null===u&&"display"==r?"":u}function w(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;
r.fnSetData(o,a,{settings:t,row:e,col:n})}function x(e){return t.map(e.match(/(\\.|[^\.])+/g)||[""],function(t){
return t.replace(/\\./g,".")})}function I(e){if(t.isPlainObject(e)){var n={};return t.each(e,function(t,e){
e&&(n[t]=I(e))}),function(t,e,r,o){var i=n[e]||n._;return i!==a?i(t,e,r,o):t}}if(null===e)return function(t){
return t};if("function"==typeof e)return function(t,n,a,r){return e(t,n,a,r)};if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,n){
return t[e]};var r=function(e,n,o){var i,s,l,u;if(""!==o)for(var c=x(o),f=0,d=c.length;d>f;f++){
if(i=c[f].match(ge),s=c[f].match(be),i){if(c[f]=c[f].replace(ge,""),""!==c[f]&&(e=e[c[f]]),
l=[],c.splice(0,f+1),u=c.join("."),t.isArray(e))for(var h=0,p=e.length;p>h;h++)l.push(r(e[h],n,u));
var g=i[0].substring(1,i[0].length-1);e=""===g?l:l.join(g);break}if(s)c[f]=c[f].replace(be,""),
e=e[c[f]]();else{if(null===e||e[c[f]]===a)return a;e=e[c[f]]}}return e};return function(t,n){
return r(t,n,e)}}function A(e){if(t.isPlainObject(e))return A(e._);if(null===e)return function(){};
if("function"==typeof e)return function(t,n,a){e(t,"set",n,a)};if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,n){
t[e]=n};var n=function(e,r,o){for(var i,s,l,u,c,f=x(o),d=f[f.length-1],h=0,p=f.length-1;p>h;h++){
if(s=f[h].match(ge),l=f[h].match(be),s){if(f[h]=f[h].replace(ge,""),e[f[h]]=[],i=f.slice(),
i.splice(0,h+1),c=i.join("."),t.isArray(r))for(var g=0,b=r.length;b>g;g++)u={},n(u,r[g],c),
e[f[h]].push(u);else e[f[h]]=r;return}l&&(f[h]=f[h].replace(be,""),e=e[f[h]](r)),
(null===e[f[h]]||e[f[h]]===a)&&(e[f[h]]={}),e=e[f[h]]}d.match(be)?e=e[d.replace(be,"")](r):e[d.replace(ge,"")]=r;
};return function(t,a){return n(t,a,e)}}function F(t){return le(t.aoData,"_aData");
}function L(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,
t.aIds={}}function P(t,e,n){for(var r=-1,o=0,i=t.length;i>o;o++)t[o]==e?r=o:t[o]>e&&t[o]--;
-1!=r&&n===a&&t.splice(r,1)}function R(t,e,n,r){var o,i,s=t.aoData[e],l=function(n,a){
for(;n.childNodes.length;)n.removeChild(n.firstChild);n.innerHTML=T(t,e,a,"display");
};if("dom"!==n&&(n&&"auto"!==n||"dom"!==s.src)){var u=s.anCells;if(u)if(r!==a)l(u[r],r);else for(o=0,
i=u.length;i>o;o++)l(u[o],o)}else s._aData=j(t,s,r,r===a?a:s._aData).data;s._aSortData=null,
s._aFilterData=null;var c=t.aoColumns;if(r!==a)c[r].sType=null;else{for(o=0,i=c.length;i>o;o++)c[o].sType=null;
N(t,s)}}function j(e,n,r,o){var i,s,l,u=[],c=n.firstChild,f=0,d=e.aoColumns,h=e._rowReadObject;
o=o!==a?o:h?{}:[];var p=function(t,e){if("string"==typeof t){var n=t.indexOf("@");
if(-1!==n){var a=t.substring(n+1),r=A(t);r(o,e.getAttribute(a))}}},g=function(e){
if(r===a||r===f)if(s=d[f],l=t.trim(e.innerHTML),s&&s._bAttrSrc){var n=A(s.mData._);
n(o,l),p(s.mData.sort,e),p(s.mData.type,e),p(s.mData.filter,e)}else h?(s._setter||(s._setter=A(s.mData)),
s._setter(o,l)):o[f]=l;f++};if(c)for(;c;)i=c.nodeName.toUpperCase(),("TD"==i||"TH"==i)&&(g(c),
u.push(c)),c=c.nextSibling;else{u=n.anCells;for(var b=0,v=u.length;v>b;b++)g(u[b]);
}var S=n.firstChild?n:n.nTr;if(S){var m=S.getAttribute("id");m&&A(e.rowId)(o,m)}return{
data:o,cells:u}}function H(e,a,r,o){var i,s,l,u,c,f=e.aoData[a],d=f._aData,h=[];if(null===f.nTr){
for(i=r||n.createElement("tr"),f.nTr=i,f.anCells=h,i._DT_RowIndex=a,N(e,f),u=0,c=e.aoColumns.length;c>u;u++)l=e.aoColumns[u],
s=r?o[u]:n.createElement(l.sCellType),s._DT_CellIndex={row:a,column:u},h.push(s),
r&&!l.mRender&&l.mData===u||t.isPlainObject(l.mData)&&l.mData._===u+".display"||(s.innerHTML=T(e,a,u,"display")),
l.sClass&&(s.className+=" "+l.sClass),l.bVisible&&!r?i.appendChild(s):!l.bVisible&&r&&s.parentNode.removeChild(s),
l.fnCreatedCell&&l.fnCreatedCell.call(e.oInstance,s,T(e,a,u),d,a,u);kt(e,"aoRowCreatedCallback",null,[i,d,a]);
}f.nTr.setAttribute("role","row")}function N(e,n){var a=n.nTr,r=n._aData;if(a){var o=e.rowIdFn(r);
if(o&&(a.id=o),r.DT_RowClass){var i=r.DT_RowClass.split(" ");n.__rowc=n.__rowc?he(n.__rowc.concat(i)):i,
t(a).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)}r.DT_RowAttr&&t(a).attr(r.DT_RowAttr),
r.DT_RowData&&t(a).data(r.DT_RowData)}}function O(e){var n,a,r,o,i,s=e.nTHead,l=e.nTFoot,u=0===t("th, td",s).length,c=e.oClasses,f=e.aoColumns;
for(u&&(o=t("<tr/>").appendTo(s)),n=0,a=f.length;a>n;n++)i=f[n],r=t(i.nTh).addClass(i.sClass),
u&&r.appendTo(o),e.oFeatures.bSort&&(r.addClass(i.sSortingClass),i.bSortable!==!1&&(r.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),
xt(e,i.nTh,n))),i.sTitle!=r[0].innerHTML&&r.html(i.sTitle),Wt(e,"header")(e,r,i,c);
if(u&&B(e.aoHeader,s),t(s).find(">tr").attr("role","row"),t(s).find(">tr>th, >tr>td").addClass(c.sHeaderTH),
t(l).find(">tr>th, >tr>td").addClass(c.sFooterTH),null!==l){var d=e.aoFooter[0];for(n=0,
a=d.length;a>n;n++)i=f[n],i.nTf=d[n].cell,i.sClass&&t(i.nTf).addClass(i.sClass)}}
function k(e,n,r){var o,i,s,l,u,c,f,d,h,p=[],g=[],b=e.aoColumns.length;if(n){for(r===a&&(r=!1),
o=0,i=n.length;i>o;o++){for(p[o]=n[o].slice(),p[o].nTr=n[o].nTr,s=b-1;s>=0;s--)e.aoColumns[s].bVisible||r||p[o].splice(s,1);
g.push([])}for(o=0,i=p.length;i>o;o++){if(f=p[o].nTr)for(;c=f.firstChild;)f.removeChild(c);
for(s=0,l=p[o].length;l>s;s++)if(d=1,h=1,g[o][s]===a){for(f.appendChild(p[o][s].cell),
g[o][s]=1;p[o+d]!==a&&p[o][s].cell==p[o+d][s].cell;)g[o+d][s]=1,d++;for(;p[o][s+h]!==a&&p[o][s].cell==p[o][s+h].cell;){
for(u=0;d>u;u++)g[o+u][s+h]=1;h++}t(p[o][s].cell).attr("rowspan",d).attr("colspan",h);
}}}}function M(e){var n=kt(e,"aoPreDrawCallback","preDraw",[e]);if(-1!==t.inArray(!1,n))return void ht(e,!1);
var r=[],o=0,i=e.asStripeClasses,s=i.length,l=(e.aoOpenRows.length,e.oLanguage),u=e.iInitDisplayStart,c="ssp"==Ut(e),f=e.aiDisplay;
e.bDrawing=!0,u!==a&&-1!==u&&(e._iDisplayStart=c?u:u>=e.fnRecordsDisplay()?0:u,e.iInitDisplayStart=-1);
var d=e._iDisplayStart,h=e.fnDisplayEnd();if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,
ht(e,!1);else if(c){if(!e.bDestroying&&!V(e))return}else e.iDraw++;if(0!==f.length)for(var p=c?0:d,g=c?e.aoData.length:h,v=p;g>v;v++){
var S=f[v],m=e.aoData[S];null===m.nTr&&H(e,S);var D=m.nTr;if(0!==s){var y=i[o%s];m._sRowStripe!=y&&(t(D).removeClass(m._sRowStripe).addClass(y),
m._sRowStripe=y)}kt(e,"aoRowCallback",null,[D,m._aData,o,v]),r.push(D),o++}else{var _=l.sZeroRecords;
1==e.iDraw&&"ajax"==Ut(e)?_=l.sLoadingRecords:l.sEmptyTable&&0===e.fnRecordsTotal()&&(_=l.sEmptyTable),
r[0]=t("<tr/>",{"class":s?i[0]:""}).append(t("<td />",{valign:"top",colSpan:b(e),
"class":e.oClasses.sRowEmpty}).html(_))[0]}kt(e,"aoHeaderCallback","header",[t(e.nTHead).children("tr")[0],F(e),d,h,f]),
kt(e,"aoFooterCallback","footer",[t(e.nTFoot).children("tr")[0],F(e),d,h,f]);var C=t(e.nTBody);
C.children().detach(),C.append(t(r)),kt(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,
e.bFiltered=!1,e.bDrawing=!1}function W(t,e){var n=t.oFeatures,a=n.bSort,r=n.bFilter;
a&&Ct(t),r?z(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),e!==!0&&(t._iDisplayStart=0),
t._drawHold=e,M(t),t._drawHold=!1}function U(e){var n=e.oClasses,a=t(e.nTable),r=t("<div/>").insertBefore(a),o=e.oFeatures,i=t("<div/>",{
id:e.sTableId+"_wrapper","class":n.sWrapper+(e.nTFoot?"":" "+n.sNoFooter)});e.nHolding=r[0],
e.nTableWrapper=i[0],e.nTableReinsertBefore=e.nTable.nextSibling;for(var s,l,u,c,f,d,h=e.sDom.split(""),p=0;p<h.length;p++){
if(s=null,l=h[p],"<"==l){if(u=t("<div/>")[0],c=h[p+1],"'"==c||'"'==c){for(f="",d=2;h[p+d]!=c;)f+=h[p+d],
d++;if("H"==f?f=n.sJUIHeader:"F"==f&&(f=n.sJUIFooter),-1!=f.indexOf(".")){var g=f.split(".");
u.id=g[0].substr(1,g[0].length-1),u.className=g[1]}else"#"==f.charAt(0)?u.id=f.substr(1,f.length-1):u.className=f;
p+=d}i.append(u),i=t(u)}else if(">"==l)i=i.parent();else if("l"==l&&o.bPaginate&&o.bLengthChange)s=ut(e);else if("f"==l&&o.bFilter)s=$(e);else if("r"==l&&o.bProcessing)s=dt(e);else if("t"==l)s=pt(e);else if("i"==l&&o.bInfo)s=at(e);else if("p"==l&&o.bPaginate)s=ct(e);else if(0!==$t.ext.feature.length)for(var b=$t.ext.feature,v=0,S=b.length;S>v;v++)if(l==b[v].cFeature){
s=b[v].fnInit(e);break}if(s){var m=e.aanFeatures;m[l]||(m[l]=[]),m[l].push(s),i.append(s);
}}r.replaceWith(i),e.nHolding=null}function B(e,n){var a,r,o,i,s,l,u,c,f,d,h,p=t(n).children("tr"),g=function(t,e,n){
for(var a=t[e];a[n];)n++;return n};for(e.splice(0,e.length),o=0,l=p.length;l>o;o++)e.push([]);
for(o=0,l=p.length;l>o;o++)for(a=p[o],c=0,r=a.firstChild;r;){if("TD"==r.nodeName.toUpperCase()||"TH"==r.nodeName.toUpperCase())for(f=1*r.getAttribute("colspan"),
d=1*r.getAttribute("rowspan"),f=f&&0!==f&&1!==f?f:1,d=d&&0!==d&&1!==d?d:1,u=g(e,o,c),
h=1===f?!0:!1,s=0;f>s;s++)for(i=0;d>i;i++)e[o+i][u+s]={cell:r,unique:h},e[o+i].nTr=a;
r=r.nextSibling}}function E(t,e,n){var a=[];n||(n=t.aoHeader,e&&(n=[],B(n,e)));for(var r=0,o=n.length;o>r;r++)for(var i=0,s=n[r].length;s>i;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);
return a}function J(e,n,a){if(kt(e,"aoServerParams","serverParams",[n]),n&&t.isArray(n)){
var r={},o=/(.*?)\[\]$/;t.each(n,function(t,e){var n=e.name.match(o);if(n){var a=n[0];
r[a]||(r[a]=[]),r[a].push(e.value)}else r[e.name]=e.value}),n=r}var i,s=e.ajax,l=e.oInstance,u=function(t){
kt(e,null,"xhr",[e,t,e.jqXHR]),a(t)};if(t.isPlainObject(s)&&s.data){i=s.data;var c=t.isFunction(i)?i(n,e):i;
n=t.isFunction(i)&&c?c:t.extend(!0,n,c),delete s.data}var f={data:n,success:function(t){
var n=t.error||t.sError;n&&Rt(e,0,n),e.json=t,u(t)},dataType:"json",cache:!1,type:e.sServerMethod,
error:function(n,a,r){var o=kt(e,null,"xhr",[e,null,e.jqXHR]);-1===t.inArray(!0,o)&&("parsererror"==a?Rt(e,0,"Invalid JSON response",1):4===n.readyState&&Rt(e,0,"Ajax error",7)),
ht(e,!1)}};e.oAjaxData=n,kt(e,null,"preXhr",[e,n]),e.fnServerData?e.fnServerData.call(l,e.sAjaxSource,t.map(n,function(t,e){
return{name:e,value:t}}),u,e):e.sAjaxSource||"string"==typeof s?e.jqXHR=t.ajax(t.extend(f,{
url:s||e.sAjaxSource})):t.isFunction(s)?e.jqXHR=s.call(l,n,u,e):(e.jqXHR=t.ajax(t.extend(f,s)),
s.data=i)}function V(t){return t.bAjaxDataGet?(t.iDraw++,ht(t,!0),J(t,X(t),function(e){
q(t,e)}),!1):!0}function X(e){var n,a,r,o,i=e.aoColumns,s=i.length,l=e.oFeatures,u=e.oPreviousSearch,c=e.aoPreSearchCols,f=[],d=_t(e),h=e._iDisplayStart,p=l.bPaginate!==!1?e._iDisplayLength:-1,g=function(t,e){
f.push({name:t,value:e})};g("sEcho",e.iDraw),g("iColumns",s),g("sColumns",le(i,"sName").join(",")),
g("iDisplayStart",h),g("iDisplayLength",p);var b={draw:e.iDraw,columns:[],order:[],
start:h,length:p,search:{value:u.sSearch,regex:u.bRegex}};for(n=0;s>n;n++)r=i[n],
o=c[n],a="function"==typeof r.mData?"function":r.mData,b.columns.push({data:a,name:r.sName,
searchable:r.bSearchable,orderable:r.bSortable,search:{value:o.sSearch,regex:o.bRegex
}}),g("mDataProp_"+n,a),l.bFilter&&(g("sSearch_"+n,o.sSearch),g("bRegex_"+n,o.bRegex),
g("bSearchable_"+n,r.bSearchable)),l.bSort&&g("bSortable_"+n,r.bSortable);l.bFilter&&(g("sSearch",u.sSearch),
g("bRegex",u.bRegex)),l.bSort&&(t.each(d,function(t,e){b.order.push({column:e.col,
dir:e.dir}),g("iSortCol_"+t,e.col),g("sSortDir_"+t,e.dir)}),g("iSortingCols",d.length));
var v=$t.ext.legacy.ajax;return null===v?e.sAjaxSource?f:b:v?f:b}function q(t,e){
var n=function(t,n){return e[t]!==a?e[t]:e[n]},r=G(t,e),o=n("sEcho","draw"),i=n("iTotalRecords","recordsTotal"),s=n("iTotalDisplayRecords","recordsFiltered");
if(o){if(1*o<t.iDraw)return;t.iDraw=1*o}L(t),t._iRecordsTotal=parseInt(i,10),t._iRecordsDisplay=parseInt(s,10);
for(var l=0,u=r.length;u>l;l++)D(t,r[l]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,
M(t),t._bInitComplete||st(t,e),t.bAjaxDataGet=!0,ht(t,!1)}function G(e,n){var r=t.isPlainObject(e.ajax)&&e.ajax.dataSrc!==a?e.ajax.dataSrc:e.sAjaxDataProp;
return"data"===r?n.aaData||n[r]:""!==r?I(r)(n):n}function $(e){var a=e.oClasses,r=e.sTableId,o=e.oLanguage,i=e.oPreviousSearch,s=e.aanFeatures,l='<input type="search" class="'+a.sFilterInput+'"/>',u=o.sSearch;
u=u.match(/_INPUT_/)?u.replace("_INPUT_",l):u+l;var c=t("<div/>",{id:s.f?null:r+"_filter",
"class":a.sFilter}).append(t("<label/>").append(u)),f=function(){var t=(s.f,this.value?this.value:"");
t!=i.sSearch&&(z(e,{sSearch:t,bRegex:i.bRegex,bSmart:i.bSmart,bCaseInsensitive:i.bCaseInsensitive
}),e._iDisplayStart=0,M(e))},d=null!==e.searchDelay?e.searchDelay:"ssp"===Ut(e)?400:0,h=t("input",c).val(i.sSearch).attr("placeholder",o.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",d?ye(f,d):f).bind("keypress.DT",function(t){
return 13==t.keyCode?!1:void 0}).attr("aria-controls",r);return t(e.nTable).on("search.dt.DT",function(t,a){
if(e===a)try{h[0]!==n.activeElement&&h.val(i.sSearch)}catch(r){}}),c[0]}function z(t,e,n){
var r=t.oPreviousSearch,o=t.aoPreSearchCols,i=function(t){r.sSearch=t.sSearch,r.bRegex=t.bRegex,
r.bSmart=t.bSmart,r.bCaseInsensitive=t.bCaseInsensitive},s=function(t){return t.bEscapeRegex!==a?!t.bEscapeRegex:t.bRegex;
};if(S(t),"ssp"!=Ut(t)){Q(t,e.sSearch,n,s(e),e.bSmart,e.bCaseInsensitive),i(e);for(var l=0;l<o.length;l++)Z(t,o[l].sSearch,l,s(o[l]),o[l].bSmart,o[l].bCaseInsensitive);
Y(t)}else i(e);t.bFiltered=!0,kt(t,null,"search",[t])}function Y(e){for(var n,a,r=$t.ext.search,o=e.aiDisplay,i=0,s=r.length;s>i;i++){
for(var l=[],u=0,c=o.length;c>u;u++)a=o[u],n=e.aoData[a],r[i](e,n._aFilterData,a,n._aData,u)&&l.push(a);
o.length=0,t.merge(o,l)}}function Z(t,e,n,a,r,o){if(""!==e)for(var i,s=t.aiDisplay,l=K(e,a,r,o),u=s.length-1;u>=0;u--)i=t.aoData[s[u]]._aFilterData[n],
l.test(i)||s.splice(u,1)}function Q(t,e,n,a,r,o){var i,s,l,u=K(e,a,r,o),c=t.oPreviousSearch.sSearch,f=t.aiDisplayMaster;
if(0!==$t.ext.search.length&&(n=!0),s=tt(t),e.length<=0)t.aiDisplay=f.slice();else for((s||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=f.slice()),
i=t.aiDisplay,l=i.length-1;l>=0;l--)u.test(t.aoData[i[l]]._sFilterRow)||i.splice(l,1);
}function K(e,n,a,r){if(e=n?e:ve(e),a){var o=t.map(e.match(/"[^"]+"|[^ ]+/g)||[""],function(t){
if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}return t.replace('"',"");
});e="^(?=.*?"+o.join(")(?=.*?")+").*$"}return new RegExp(e,r?"i":"")}function tt(t){
var e,n,a,r,o,i,s,l,u=t.aoColumns,c=$t.ext.type.search,f=!1;for(n=0,r=t.aoData.length;r>n;n++)if(l=t.aoData[n],
!l._aFilterData){for(i=[],a=0,o=u.length;o>a;a++)e=u[a],e.bSearchable?(s=T(t,n,a,"filter"),
c[e.sType]&&(s=c[e.sType](s)),null===s&&(s=""),"string"!=typeof s&&s.toString&&(s=s.toString())):s="",
s.indexOf&&-1!==s.indexOf("&")&&(Se.innerHTML=s,s=me?Se.textContent:Se.innerText),
s.replace&&(s=s.replace(/[\r\n]/g,"")),i.push(s);l._aFilterData=i,l._sFilterRow=i.join("  "),
f=!0}return f}function et(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,
caseInsensitive:t.bCaseInsensitive}}function nt(t){return{sSearch:t.search,bSmart:t.smart,
bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function at(e){var n=e.sTableId,a=e.aanFeatures.i,r=t("<div/>",{
"class":e.oClasses.sInfo,id:a?null:n+"_info"});return a||(e.aoDrawCallback.push({
fn:rt,sName:"information"}),r.attr("role","status").attr("aria-live","polite"),t(e.nTable).attr("aria-describedby",n+"_info")),
r[0]}function rt(e){var n=e.aanFeatures.i;if(0!==n.length){var a=e.oLanguage,r=e._iDisplayStart+1,o=e.fnDisplayEnd(),i=e.fnRecordsTotal(),s=e.fnRecordsDisplay(),l=s?a.sInfo:a.sInfoEmpty;
s!==i&&(l+=" "+a.sInfoFiltered),l+=a.sInfoPostFix,l=ot(e,l);var u=a.fnInfoCallback;
null!==u&&(l=u.call(e.oInstance,e,r,o,i,s,l)),t(n).html(l)}}function ot(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;
return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)));
}function it(t){var e,n,a,r=t.iInitDisplayStart,o=t.aoColumns,i=t.oFeatures,s=t.bDeferLoading;
if(!t.bInitialised)return void setTimeout(function(){it(t)},200);for(U(t),O(t),k(t,t.aoHeader),
k(t,t.aoFooter),ht(t,!0),i.bAutoWidth&&vt(t),e=0,n=o.length;n>e;e++)a=o[e],a.sWidth&&(a.nTh.style.width=yt(a.sWidth));
kt(t,null,"preInit",[t]),W(t);var l=Ut(t);("ssp"!=l||s)&&("ajax"==l?J(t,[],function(n){
var a=G(t,n);for(e=0;e<a.length;e++)D(t,a[e]);t.iInitDisplayStart=r,W(t),ht(t,!1),
st(t,n)},t):(ht(t,!1),st(t)))}function st(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&h(t),
kt(t,null,"plugin-init",[t,e]),kt(t,"aoInitComplete","init",[t,e])}function lt(t,e){
var n=parseInt(e,10);t._iDisplayLength=n,Mt(t),kt(t,null,"length",[t,n])}function ut(e){
for(var n=e.oClasses,a=e.sTableId,r=e.aLengthMenu,o=t.isArray(r[0]),i=o?r[0]:r,s=o?r[1]:r,l=t("<select/>",{
name:a+"_length","aria-controls":a,"class":n.sLengthSelect}),u=0,c=i.length;c>u;u++)l[0][u]=new Option(s[u],i[u]);
var f=t("<div><label/></div>").addClass(n.sLength);return e.aanFeatures.l||(f[0].id=a+"_length"),
f.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),t("select",f).val(e._iDisplayLength).bind("change.DT",function(n){
lt(e,t(this).val()),M(e)}),t(e.nTable).bind("length.dt.DT",function(n,a,r){e===a&&t("select",f).val(r);
}),f[0]}function ct(e){var n=e.sPaginationType,a=$t.ext.pager[n],r="function"==typeof a,o=function(t){
M(t)},i=t("<div/>").addClass(e.oClasses.sPaging+n)[0],s=e.aanFeatures;return r||a.fnInit(e,i,o),
s.p||(i.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(t){if(r){var e,n,i=t._iDisplayStart,l=t._iDisplayLength,u=t.fnRecordsDisplay(),c=-1===l,f=c?0:Math.ceil(i/l),d=c?1:Math.ceil(u/l),h=a(f,d);
for(e=0,n=s.p.length;n>e;e++)Wt(t,"pageButton")(t,s.p[e],e,h,f,d)}else a.fnUpdate(t,o);
},sName:"pagination"})),i}function ft(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay();
0===o||-1===r?a=0:"number"==typeof e?(a=e*r,a>o&&(a=0)):"first"==e?a=0:"previous"==e?(a=r>=0?a-r:0,
0>a&&(a=0)):"next"==e?o>a+r&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:Rt(t,0,"Unknown paging action: "+e,5);
var i=t._iDisplayStart!==a;return t._iDisplayStart=a,i&&(kt(t,null,"page",[t]),n&&M(t)),
i}function dt(e){return t("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",
"class":e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0];
}function ht(e,n){e.oFeatures.bProcessing&&t(e.aanFeatures.r).css("display",n?"block":"none"),
kt(e,null,"processing",[e,n])}function pt(e){var n=t(e.nTable);n.attr("role","grid");
var a=e.oScroll;if(""===a.sX&&""===a.sY)return e.nTable;var r=a.sX,o=a.sY,i=e.oClasses,s=n.children("caption"),l=s.length?s[0]._captionSide:null,u=t(n[0].cloneNode(!1)),c=t(n[0].cloneNode(!1)),f=n.children("tfoot"),d="<div/>",h=function(t){
return t?yt(t):null};f.length||(f=null);var p=t(d,{"class":i.sScrollWrapper}).append(t(d,{
"class":i.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:r?h(r):"100%"
}).append(t(d,{"class":i.sScrollHeadInner}).css({"box-sizing":"content-box",width:a.sXInner||"100%"
}).append(u.removeAttr("id").css("margin-left",0).append("top"===l?s:null).append(n.children("thead"))))).append(t(d,{
"class":i.sScrollBody}).css({position:"relative",overflow:"auto",width:h(r)}).append(n));
f&&p.append(t(d,{"class":i.sScrollFoot}).css({overflow:"hidden",border:0,width:r?h(r):"100%"
}).append(t(d,{"class":i.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append("bottom"===l?s:null).append(n.children("tfoot")))));
var g=p.children(),b=g[0],v=g[1],S=f?g[2]:null;return r&&t(v).on("scroll.DT",function(t){
var e=this.scrollLeft;b.scrollLeft=e,f&&(S.scrollLeft=e)}),t(v).css(o&&a.bCollapse?"max-height":"height",o),
e.nScrollHead=b,e.nScrollBody=v,e.nScrollFoot=S,e.aoDrawCallback.push({fn:gt,sName:"scrolling"
}),p[0]}function gt(e){var n,r,o,i,s,l,u,c,f,d=e.oScroll,g=d.sX,b=d.sXInner,v=d.sY,S=d.iBarWidth,m=t(e.nScrollHead),D=m[0].style,y=m.children("div"),_=y[0].style,C=y.children("table"),T=e.nScrollBody,w=t(T),x=T.style,I=t(e.nScrollFoot),A=I.children("div"),F=A.children("table"),L=t(e.nTHead),P=t(e.nTable),R=P[0],j=R.style,H=e.nTFoot?t(e.nTFoot):null,N=e.oBrowser,O=N.bScrollOversize,k=le(e.aoColumns,"nTh"),M=[],W=[],U=[],B=[],J=function(t){
var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",
e.height=0},V=T.scrollHeight>T.clientHeight;if(e.scrollBarVis!==V&&e.scrollBarVis!==a)return e.scrollBarVis=V,
void h(e);e.scrollBarVis=V,P.children("thead, tfoot").remove(),H&&(l=H.clone().prependTo(P),
r=H.find("tr"),i=l.find("tr")),s=L.clone().prependTo(P),n=L.find("tr"),o=s.find("tr"),
s.find("th, td").removeAttr("tabindex"),g||(x.width="100%",m[0].style.width="100%"),
t.each(E(e,s),function(t,n){u=p(e,t),n.style.width=e.aoColumns[u].sWidth}),H&&bt(function(t){
t.style.width=""},i),f=P.outerWidth(),""===g?(j.width="100%",O&&(P.find("tbody").height()>T.offsetHeight||"scroll"==w.css("overflow-y"))&&(j.width=yt(P.outerWidth()-S)),
f=P.outerWidth()):""!==b&&(j.width=yt(b),f=P.outerWidth()),bt(J,o),bt(function(e){
U.push(e.innerHTML),M.push(yt(t(e).css("width")))},o),bt(function(e,n){-1!==t.inArray(e,k)&&(e.style.width=M[n]);
},n),t(o).height(0),H&&(bt(J,i),bt(function(e){B.push(e.innerHTML),W.push(yt(t(e).css("width")));
},i),bt(function(t,e){t.style.width=W[e]},r),t(i).height(0)),bt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+U[e]+"</div>",
t.style.width=M[e]},o),H&&bt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+B[e]+"</div>",
t.style.width=W[e]},i),P.outerWidth()<f?(c=T.scrollHeight>T.offsetHeight||"scroll"==w.css("overflow-y")?f+S:f,
O&&(T.scrollHeight>T.offsetHeight||"scroll"==w.css("overflow-y"))&&(j.width=yt(c-S)),
(""===g||""!==b)&&Rt(e,1,"Possible column misalignment",6)):c="100%",x.width=yt(c),
D.width=yt(c),H&&(e.nScrollFoot.style.width=yt(c)),v||O&&(x.height=yt(R.offsetHeight+S));
var X=P.outerWidth();C[0].style.width=yt(X),_.width=yt(X);var q=P.height()>T.clientHeight||"scroll"==w.css("overflow-y"),G="padding"+(N.bScrollbarLeft?"Left":"Right");
_[G]=q?S+"px":"0px",H&&(F[0].style.width=yt(X),A[0].style.width=yt(X),A[0].style[G]=q?S+"px":"0px"),
P.children("colgroup").insertBefore(P.children("thead")),w.scroll(),!e.bSorted&&!e.bFiltered||e._drawHold||(T.scrollTop=0);
}function bt(t,e,n){for(var a,r,o=0,i=0,s=e.length;s>i;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),
o++),a=a.nextSibling,r=n?r.nextSibling:null;i++}}function vt(n){var a,r,o,i=n.nTable,s=n.aoColumns,l=n.oScroll,u=l.sY,c=l.sX,f=l.sXInner,d=s.length,g=v(n,"bVisible"),S=t("th",n.nTHead),m=i.getAttribute("width"),D=i.parentNode,y=!1,_=n.oBrowser,C=_.bScrollOversize,T=i.style.width;
for(T&&-1!==T.indexOf("%")&&(m=T),a=0;a<g.length;a++)r=s[g[a]],null!==r.sWidth&&(r.sWidth=St(r.sWidthOrig,D),
y=!0);if(C||!y&&!c&&!u&&d==b(n)&&d==S.length)for(a=0;d>a;a++){var w=p(n,a);null!==w&&(s[w].sWidth=yt(S.eq(a).width()));
}else{var x=t(i).clone().css("visibility","hidden").removeAttr("id");x.find("tbody tr").remove();
var I=t("<tr/>").appendTo(x.find("tbody"));for(x.find("thead, tfoot").remove(),x.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()),
x.find("tfoot th, tfoot td").css("width",""),S=E(n,x.find("thead")[0]),a=0;a<g.length;a++)r=s[g[a]],
S[a].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?yt(r.sWidthOrig):"",r.sWidthOrig&&c&&t(S[a]).append(t("<div/>").css({
width:r.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(n.aoData.length)for(a=0;a<g.length;a++)o=g[a],
r=s[o],t(mt(n,o)).clone(!1).append(r.sContentPadding).appendTo(I);t("[name]",x).removeAttr("name");
var A=t("<div/>").css(c||u?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"
}:{}).append(x).appendTo(D);c&&f?x.width(f):c?(x.css("width","auto"),x.removeAttr("width"),
x.width()<D.clientWidth&&m&&x.width(D.clientWidth)):u?x.width(D.clientWidth):m&&x.width(m);
var F=0;for(a=0;a<g.length;a++){var L=t(S[a]),P=L.outerWidth()-L.width(),R=_.bBounding?Math.ceil(S[a].getBoundingClientRect().width):L.outerWidth();
F+=R,s[g[a]].sWidth=yt(R-P)}i.style.width=yt(F),A.remove()}if(m&&(i.style.width=yt(m)),
(m||c)&&!n._reszEvt){var j=function(){t(e).bind("resize.DT-"+n.sInstance,ye(function(){
h(n)}))};C?setTimeout(j,1e3):j(),n._reszEvt=!0}}function St(e,a){if(!e)return 0;var r=t("<div/>").css("width",yt(e)).appendTo(a||n.body),o=r[0].offsetWidth;
return r.remove(),o}function mt(e,n){var a=Dt(e,n);if(0>a)return null;var r=e.aoData[a];
return r.nTr?r.anCells[n]:t("<td/>").html(T(e,a,n,"display"))[0]}function Dt(t,e){
for(var n,a=-1,r=-1,o=0,i=t.aoData.length;i>o;o++)n=T(t,o,e,"display")+"",n=n.replace(De,""),
n=n.replace(/&nbsp;/g," "),n.length>a&&(a=n.length,r=o);return r}function yt(t){return null===t?"0px":"number"==typeof t?0>t?"0px":t+"px":t.match(/\d$/)?t+"px":t;
}function _t(e){var n,r,o,i,s,l,u,c=[],f=e.aoColumns,d=e.aaSortingFixed,h=t.isPlainObject(d),p=[],g=function(e){
e.length&&!t.isArray(e[0])?p.push(e):t.merge(p,e)};for(t.isArray(d)&&g(d),h&&d.pre&&g(d.pre),
g(e.aaSorting),h&&d.post&&g(d.post),n=0;n<p.length;n++)for(u=p[n][0],i=f[u].aDataSort,
r=0,o=i.length;o>r;r++)s=i[r],l=f[s].sType||"string",p[n]._idx===a&&(p[n]._idx=t.inArray(p[n][1],f[s].asSorting)),
c.push({src:u,col:s,dir:p[n][1],index:p[n]._idx,type:l,formatter:$t.ext.type.order[l+"-pre"]
});return c}function Ct(t){var e,n,a,r,o,i=[],s=$t.ext.type.order,l=t.aoData,u=(t.aoColumns,
0),c=t.aiDisplayMaster;for(S(t),o=_t(t),e=0,n=o.length;n>e;e++)r=o[e],r.formatter&&u++,
At(t,r.col);if("ssp"!=Ut(t)&&0!==o.length){for(e=0,a=c.length;a>e;e++)i[c[e]]=e;u===o.length?c.sort(function(t,e){
var n,a,r,s,u,c=o.length,f=l[t]._aSortData,d=l[e]._aSortData;for(r=0;c>r;r++)if(u=o[r],
n=f[u.col],a=d[u.col],s=a>n?-1:n>a?1:0,0!==s)return"asc"===u.dir?s:-s;return n=i[t],
a=i[e],a>n?-1:n>a?1:0}):c.sort(function(t,e){var n,a,r,u,c,f,d=o.length,h=l[t]._aSortData,p=l[e]._aSortData;
for(r=0;d>r;r++)if(c=o[r],n=h[c.col],a=p[c.col],f=s[c.type+"-"+c.dir]||s["string-"+c.dir],
u=f(n,a),0!==u)return u;return n=i[t],a=i[e],a>n?-1:n>a?1:0})}t.bSorted=!0}function Tt(t){
for(var e,n,a=t.aoColumns,r=_t(t),o=t.oLanguage.oAria,i=0,s=a.length;s>i;i++){var l=a[i],u=l.asSorting,c=l.sTitle.replace(/<.*?>/g,""),f=l.nTh;
f.removeAttribute("aria-sort"),l.bSortable?(r.length>0&&r[0].col==i?(f.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),
n=u[r[0].index+1]||u[0]):n=u[0],e=c+("asc"===n?o.sSortAscending:o.sSortDescending)):e=c,
f.setAttribute("aria-label",e)}}function wt(e,n,r,o){var i,s=e.aoColumns[n],l=e.aaSorting,u=s.asSorting,c=function(e,n){
var r=e._idx;return r===a&&(r=t.inArray(e[1],u)),r+1<u.length?r+1:n?null:0};if("number"==typeof l[0]&&(l=e.aaSorting=[l]),
r&&e.oFeatures.bSortMulti){var f=t.inArray(n,le(l,"0"));-1!==f?(i=c(l[f],!0),null===i&&1===l.length&&(i=0),
null===i?l.splice(f,1):(l[f][1]=u[i],l[f]._idx=i)):(l.push([n,u[0],0]),l[l.length-1]._idx=0);
}else l.length&&l[0][0]==n?(i=c(l[0]),l.length=1,l[0][1]=u[i],l[0]._idx=i):(l.length=0,
l.push([n,u[0]]),l[0]._idx=0);W(e),"function"==typeof o&&o(e)}function xt(t,e,n,a){
var r=t.aoColumns[n];Nt(e,{},function(e){r.bSortable!==!1&&(t.oFeatures.bProcessing?(ht(t,!0),
setTimeout(function(){wt(t,n,e.shiftKey,a),"ssp"!==Ut(t)&&ht(t,!1)},0)):wt(t,n,e.shiftKey,a));
})}function It(e){var n,a,r,o=e.aLastSort,i=e.oClasses.sSortColumn,s=_t(e),l=e.oFeatures;
if(l.bSort&&l.bSortClasses){for(n=0,a=o.length;a>n;n++)r=o[n].src,t(le(e.aoData,"anCells",r)).removeClass(i+(2>n?n+1:3));
for(n=0,a=s.length;a>n;n++)r=s[n].src,t(le(e.aoData,"anCells",r)).addClass(i+(2>n?n+1:3));
}e.aLastSort=s}function At(t,e){var n,a=t.aoColumns[e],r=$t.ext.order[a.sSortDataType];
r&&(n=r.call(t.oInstance,t,e,g(t,e)));for(var o,i,s=$t.ext.type.order[a.sType+"-pre"],l=0,u=t.aoData.length;u>l;l++)o=t.aoData[l],
o._aSortData||(o._aSortData=[]),(!o._aSortData[e]||r)&&(i=r?n[l]:T(t,l,e,"sort"),
o._aSortData[e]=s?s(i):i)}function Ft(e){if(e.oFeatures.bStateSave&&!e.bDestroying){
var n={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:t.extend(!0,[],e.aaSorting),
search:et(e.oPreviousSearch),columns:t.map(e.aoColumns,function(t,n){return{visible:t.bVisible,
search:et(e.aoPreSearchCols[n])}})};kt(e,"aoStateSaveParams","stateSaveParams",[e,n]),
e.oSavedState=n,e.fnStateSaveCallback.call(e.oInstance,e,n)}}function Lt(e,n){var r,o,i=e.aoColumns;
if(e.oFeatures.bStateSave){var s=e.fnStateLoadCallback.call(e.oInstance,e);if(s&&s.time){
var l=kt(e,"aoStateLoadParams","stateLoadParams",[e,s]);if(-1===t.inArray(!1,l)){
var u=e.iStateDuration;if(!(u>0&&s.time<+new Date-1e3*u)&&i.length===s.columns.length){
for(e.oLoadedState=t.extend(!0,{},s),s.start!==a&&(e._iDisplayStart=s.start,e.iInitDisplayStart=s.start),
s.length!==a&&(e._iDisplayLength=s.length),s.order!==a&&(e.aaSorting=[],t.each(s.order,function(t,n){
e.aaSorting.push(n[0]>=i.length?[0,n[1]]:n)})),s.search!==a&&t.extend(e.oPreviousSearch,nt(s.search)),
r=0,o=s.columns.length;o>r;r++){var c=s.columns[r];c.visible!==a&&(i[r].bVisible=c.visible),
c.search!==a&&t.extend(e.aoPreSearchCols[r],nt(c.search))}kt(e,"aoStateLoaded","stateLoaded",[e,s]);
}}}}}function Pt(e){var n=$t.settings,a=t.inArray(e,le(n,"nTable"));return-1!==a?n[a]:null;
}function Rt(t,n,a,r){if(a="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+a,
r&&(a+=". For more information about this error, please see http://datatables.net/tn/"+r),
n)e.console&&console.log&&console.log(a);else{var o=$t.ext,i=o.sErrMode||o.errMode;
if(t&&kt(t,null,"error",[t,r,a]),"alert"==i)alert(a);else{if("throw"==i)throw new Error(a);
"function"==typeof i&&i(t,r,a)}}}function jt(e,n,r,o){return t.isArray(r)?void t.each(r,function(a,r){
t.isArray(r)?jt(e,n,r[0],r[1]):jt(e,n,r)}):(o===a&&(o=r),void(n[r]!==a&&(e[o]=n[r])));
}function Ht(e,n,a){var r;for(var o in n)n.hasOwnProperty(o)&&(r=n[o],t.isPlainObject(r)?(t.isPlainObject(e[o])||(e[o]={}),
t.extend(!0,e[o],r)):a&&"data"!==o&&"aaData"!==o&&t.isArray(r)?e[o]=r.slice():e[o]=r);
return e}function Nt(e,n,a){t(e).bind("click.DT",n,function(t){e.blur(),a(t)}).bind("keypress.DT",n,function(t){
13===t.which&&(t.preventDefault(),a(t))}).bind("selectstart.DT",function(){return!1;
})}function Ot(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function kt(e,n,a,r){var o=[];
if(n&&(o=t.map(e[n].slice().reverse(),function(t,n){return t.fn.apply(e.oInstance,r);
})),null!==a){var i=t.Event(a+".dt");t(e.nTable).trigger(i,r),o.push(i.result)}return o;
}function Mt(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;e>=n&&(e=n-a),
e-=e%a,(-1===a||0>e)&&(e=0),t._iDisplayStart=e}function Wt(e,n){var a=e.renderer,r=$t.ext.renderer[n];
return t.isPlainObject(a)&&a[n]?r[a[n]]||r._:"string"==typeof a?r[a]||r._:r._}function Ut(t){
return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function Bt(t,e){
var n=[],a=Ve.numbers_length,r=Math.floor(a/2);return a>=e?n=ce(0,e):r>=t?(n=ce(0,a-2),
n.push("ellipsis"),n.push(e-1)):t>=e-1-r?(n=ce(e-(a-2),e),n.splice(0,0,"ellipsis"),
n.splice(0,0,0)):(n=ce(t-r+2,t+r-1),n.push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis"),
n.splice(0,0,0)),n.DT_el="span",n}function Et(e){t.each({num:function(t){return Xe(t,e);
},"num-fmt":function(t){return Xe(t,e,ee)},"html-num":function(t){return Xe(t,e,Zt);
},"html-num-fmt":function(t){return Xe(t,e,Zt,ee)}},function(t,n){Vt.type.order[t+e+"-pre"]=n,
t.match(/^html\-/)&&(Vt.type.search[t+e]=Vt.type.search.html)})}function Jt(t){return function(){
var e=[Pt(this[$t.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return $t.ext.internal[t].apply(this,e);
}}var Vt,Xt,qt,Gt,$t=function(e){this.$=function(t,e){return this.api(!0).$(t,e)},
this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new Xt(t?Pt(this[Vt.iApiIndex]):this);
},this.fnAddData=function(e,n){var r=this.api(!0),o=t.isArray(e)&&(t.isArray(e[0])||t.isPlainObject(e[0]))?r.rows.add(e):r.row.add(e);
return(n===a||n)&&r.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){
var e=this.api(!0).columns.adjust(),n=e.settings()[0],r=n.oScroll;t===a||t?e.draw(!1):(""!==r.sX||""!==r.sY)&&gt(n);
},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===a||t)&&e.draw()},
this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){
var r=this.api(!0),o=r.rows(t),i=o.settings()[0],s=i.aoData[o[0][0]];return o.remove(),
e&&e.call(this,i,s),(n===a||n)&&r.draw(),s},this.fnDestroy=function(t){this.api(!0).destroy(t);
},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,r,o,i){
var s=this.api(!0);null===e||e===a?s.search(t,n,r,i):s.column(e).search(t,n,r,i),
s.draw()},this.fnGetData=function(t,e){var n=this.api(!0);if(t!==a){var r=t.nodeName?t.nodeName.toLowerCase():"";
return e!==a||"td"==r||"th"==r?n.cell(t,e).data():n.row(t).data()||null}return n.data().toArray();
},this.fnGetNodes=function(t){var e=this.api(!0);return t!==a?e.row(t).node():e.rows().nodes().flatten().toArray();
},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();if("TR"==n)return e.row(t).index();
if("TD"==n||"TH"==n){var a=e.cell(t).index();return[a.row,a.columnVisible,a.column];
}return null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown();
},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0];
},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);(e===a||e)&&n.draw(!1);
},this.fnSetColumnVis=function(t,e,n){var r=this.api(!0).column(t).visible(e);(n===a||n)&&r.columns.adjust().draw();
},this.fnSettings=function(){return Pt(this[Vt.iApiIndex])},this.fnSort=function(t){
this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n);
},this.fnUpdate=function(t,e,n,r,o){var i=this.api(!0);return n===a||null===n?i.row(e).data(t):i.cell(e,n).data(t),
(o===a||o)&&i.columns.adjust(),(r===a||r)&&i.draw(),0},this.fnVersionCheck=Vt.fnVersionCheck;
var n=this,r=e===a,c=this.length;r&&(e={}),this.oApi=this.internal=Vt.internal;for(var h in $t.ext.internal)h&&(this[h]=Jt(h));
return this.each(function(){var h,p={},g=c>1?Ht(p,e,!0):e,b=0,v=this.getAttribute("id"),S=!1,_=$t.defaults,C=t(this);
if("table"!=this.nodeName.toLowerCase())return void Rt(null,0,"Non-table node initialisation ("+this.nodeName+")",2);
s(_),l(_.column),o(_,_,!0),o(_.column,_.column,!0),o(_,t.extend(g,C.data()));var T=$t.settings;
for(b=0,h=T.length;h>b;b++){var w=T[b];if(w.nTable==this||w.nTHead.parentNode==this||w.nTFoot&&w.nTFoot.parentNode==this){
var x=g.bRetrieve!==a?g.bRetrieve:_.bRetrieve,A=g.bDestroy!==a?g.bDestroy:_.bDestroy;
if(r||x)return w.oInstance;if(A){w.oInstance.fnDestroy();break}return void Rt(w,0,"Cannot reinitialise DataTable",3);
}if(w.sTableId==this.id){T.splice(b,1);break}}(null===v||""===v)&&(v="DataTables_Table_"+$t.ext._unique++,
this.id=v);var F=t.extend(!0,{},$t.models.oSettings,{sDestroyWidth:C[0].style.width,
sInstance:v,sTableId:v});F.nTable=this,F.oApi=n.internal,F.oInit=g,T.push(F),F.oInstance=1===n.length?n:C.dataTable(),
s(g),g.oLanguage&&i(g.oLanguage),g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=t.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]),
g=Ht(t.extend(!0,{},_),g),jt(F.oFeatures,g,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),
jt(F,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]),
jt(F.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),
jt(F.oLanguage,g,"fnInfoCallback"),Ot(F,"aoDrawCallback",g.fnDrawCallback,"user"),
Ot(F,"aoServerParams",g.fnServerParams,"user"),Ot(F,"aoStateSaveParams",g.fnStateSaveParams,"user"),
Ot(F,"aoStateLoadParams",g.fnStateLoadParams,"user"),Ot(F,"aoStateLoaded",g.fnStateLoaded,"user"),
Ot(F,"aoRowCallback",g.fnRowCallback,"user"),Ot(F,"aoRowCreatedCallback",g.fnCreatedRow,"user"),
Ot(F,"aoHeaderCallback",g.fnHeaderCallback,"user"),Ot(F,"aoFooterCallback",g.fnFooterCallback,"user"),
Ot(F,"aoInitComplete",g.fnInitComplete,"user"),Ot(F,"aoPreDrawCallback",g.fnPreDrawCallback,"user"),
F.rowIdFn=I(g.rowId),u(F);var L=F.oClasses;if(g.bJQueryUI?(t.extend(L,$t.ext.oJUIClasses,g.oClasses),
g.sDom===_.sDom&&"lfrtip"===_.sDom&&(F.sDom='<"H"lfr>t<"F"ip>'),F.renderer?t.isPlainObject(F.renderer)&&!F.renderer.header&&(F.renderer.header="jqueryui"):F.renderer="jqueryui"):t.extend(L,$t.ext.classes,g.oClasses),
C.addClass(L.sTable),F.iInitDisplayStart===a&&(F.iInitDisplayStart=g.iDisplayStart,
F._iDisplayStart=g.iDisplayStart),null!==g.iDeferLoading){F.bDeferLoading=!0;var P=t.isArray(g.iDeferLoading);
F._iRecordsDisplay=P?g.iDeferLoading[0]:g.iDeferLoading,F._iRecordsTotal=P?g.iDeferLoading[1]:g.iDeferLoading;
}var R=F.oLanguage;t.extend(!0,R,g.oLanguage),""!==R.sUrl&&(t.ajax({dataType:"json",
url:R.sUrl,success:function(e){i(e),o(_.oLanguage,e),t.extend(!0,R,e),it(F)},error:function(){
it(F)}}),S=!0),null===g.asStripeClasses&&(F.asStripeClasses=[L.sStripeOdd,L.sStripeEven]);
var j=F.asStripeClasses,H=C.children("tbody").find("tr").eq(0);-1!==t.inArray(!0,t.map(j,function(t,e){
return H.hasClass(t)}))&&(t("tbody tr",this).removeClass(j.join(" ")),F.asDestroyStripes=j.slice());
var N,O=[],k=this.getElementsByTagName("thead");if(0!==k.length&&(B(F.aoHeader,k[0]),
O=E(F)),null===g.aoColumns)for(N=[],b=0,h=O.length;h>b;b++)N.push(null);else N=g.aoColumns;
for(b=0,h=N.length;h>b;b++)f(F,O?O[b]:null);if(m(F,g.aoColumnDefs,N,function(t,e){
d(F,t,e)}),H.length){var M=function(t,e){return null!==t.getAttribute("data-"+e)?e:null;
};t(H[0]).children("th, td").each(function(t,e){var n=F.aoColumns[t];if(n.mData===t){
var r=M(e,"sort")||M(e,"order"),o=M(e,"filter")||M(e,"search");(null!==r||null!==o)&&(n.mData={
_:t+".display",sort:null!==r?t+".@data-"+r:a,type:null!==r?t+".@data-"+r:a,filter:null!==o?t+".@data-"+o:a
},d(F,t))}})}var W=F.oFeatures;if(g.bStateSave&&(W.bStateSave=!0,Lt(F,g),Ot(F,"aoDrawCallback",Ft,"state_save")),
g.aaSorting===a){var U=F.aaSorting;for(b=0,h=U.length;h>b;b++)U[b][1]=F.aoColumns[b].asSorting[0];
}It(F),W.bSort&&Ot(F,"aoDrawCallback",function(){if(F.bSorted){var e=_t(F),n={};t.each(e,function(t,e){
n[e.src]=e.dir}),kt(F,null,"order",[F,e,n]),Tt(F)}}),Ot(F,"aoDrawCallback",function(){
(F.bSorted||"ssp"===Ut(F)||W.bDeferRender)&&It(F)},"sc");var J=C.children("caption").each(function(){
this._captionSide=C.css("caption-side")}),V=C.children("thead");0===V.length&&(V=t("<thead/>").appendTo(this)),
F.nTHead=V[0];var X=C.children("tbody");0===X.length&&(X=t("<tbody/>").appendTo(this)),
F.nTBody=X[0];var q=C.children("tfoot");if(0===q.length&&J.length>0&&(""!==F.oScroll.sX||""!==F.oScroll.sY)&&(q=t("<tfoot/>").appendTo(this)),
0===q.length||0===q.children().length?C.addClass(L.sNoFooter):q.length>0&&(F.nTFoot=q[0],
B(F.aoFooter,F.nTFoot)),g.aaData)for(b=0;b<g.aaData.length;b++)D(F,g.aaData[b]);else(F.bDeferLoading||"dom"==Ut(F))&&y(F,t(F.nTBody).children("tr"));
F.aiDisplay=F.aiDisplayMaster.slice(),F.bInitialised=!0,S===!1&&it(F)}),n=null,this;
},zt={},Yt=/[\r\n]/g,Zt=/<.*?>/g,Qt=/^[\w\+\-]/,Kt=/[\w\+\-]$/,te=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),ee=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,ne=function(t){
return t&&t!==!0&&"-"!==t?!1:!0},ae=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null;
},re=function(t,e){return zt[e]||(zt[e]=new RegExp(ve(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(zt[e],"."):t;
},oe=function(t,e,n){var a="string"==typeof t;return ne(t)?!0:(e&&a&&(t=re(t,e)),
n&&a&&(t=t.replace(ee,"")),!isNaN(parseFloat(t))&&isFinite(t))},ie=function(t){return ne(t)||"string"==typeof t;
},se=function(t,e,n){if(ne(t))return!0;var a=ie(t);return a&&oe(de(t),e,n)?!0:null;
},le=function(t,e,n){var r=[],o=0,i=t.length;if(n!==a)for(;i>o;o++)t[o]&&t[o][e]&&r.push(t[o][e][n]);else for(;i>o;o++)t[o]&&r.push(t[o][e]);
return r},ue=function(t,e,n,r){var o=[],i=0,s=e.length;if(r!==a)for(;s>i;i++)t[e[i]][n]&&o.push(t[e[i]][n][r]);else for(;s>i;i++)o.push(t[e[i]][n]);
return o},ce=function(t,e){var n,r=[];e===a?(e=0,n=t):(n=e,e=t);for(var o=e;n>o;o++)r.push(o);
return r},fe=function(t){for(var e=[],n=0,a=t.length;a>n;n++)t[n]&&e.push(t[n]);return e;
},de=function(t){return t.replace(Zt,"")},he=function(t){var e,n,a,r=[],o=t.length,i=0;
t:for(n=0;o>n;n++){for(e=t[n],a=0;i>a;a++)if(r[a]===e)continue t;r.push(e),i++}return r;
};$t.util={throttle:function(t,e){var n,r,o=e!==a?e:200;return function(){var e=this,i=+new Date,s=arguments;
n&&n+o>i?(clearTimeout(r),r=setTimeout(function(){n=a,t.apply(e,s)},o)):(n=i,t.apply(e,s));
}},escapeRegex:function(t){return t.replace(te,"\\$1")}};var pe=function(t,e,n){t[e]!==a&&(t[n]=t[e]);
},ge=/\[.*?\]$/,be=/\(\)$/,ve=$t.util.escapeRegex,Se=t("<div>")[0],me=Se.textContent!==a,De=/<.*?>/g,ye=$t.util.throttle,_e=[],Ce=Array.prototype,Te=function(e){
var n,a,r=$t.settings,o=t.map(r,function(t,e){return t.nTable});return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?(n=t.inArray(e,o),
-1!==n?[r[n]]:null):e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?a=t(e):e instanceof t&&(a=e),
a?a.map(function(e){return n=t.inArray(this,o),-1!==n?r[n]:null}).toArray():void 0):[];
};Xt=function(e,n){if(!(this instanceof Xt))return new Xt(e,n);var a=[],r=function(t){
var e=Te(t);e&&(a=a.concat(e))};if(t.isArray(e))for(var o=0,i=e.length;i>o;o++)r(e[o]);else r(e);
this.context=he(a),n&&t.merge(this,n),this.selector={rows:null,cols:null,opts:null
},Xt.extend(this,this,_e)},$t.Api=Xt,t.extend(Xt.prototype,{any:function(){return 0!==this.count();
},concat:Ce.concat,context:[],count:function(){return this.flatten().length},each:function(t){
for(var e=0,n=this.length;n>e;e++)t.call(this,this[e],e,this);return this},eq:function(t){
var e=this.context;return e.length>t?new Xt(e[t],this[t]):null},filter:function(t){
var e=[];if(Ce.filter)e=Ce.filter.call(this,t,this);else for(var n=0,a=this.length;a>n;n++)t.call(this,this[n],n,this)&&e.push(this[n]);
return new Xt(this.context,e)},flatten:function(){var t=[];return new Xt(this.context,t.concat.apply(t,this.toArray()));
},join:Ce.join,indexOf:Ce.indexOf||function(t,e){for(var n=e||0,a=this.length;a>n;n++)if(this[n]===t)return n;
return-1},iterator:function(t,e,n,r){var o,i,s,l,u,c,f,d,h=[],p=this.context,g=this.selector;
for("string"==typeof t&&(r=n,n=e,e=t,t=!1),i=0,s=p.length;s>i;i++){var b=new Xt(p[i]);
if("table"===e)o=n.call(b,p[i],i),o!==a&&h.push(o);else if("columns"===e||"rows"===e)o=n.call(b,p[i],this[i],i),
o!==a&&h.push(o);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(f=this[i],
"column-rows"===e&&(c=Le(p[i],g.opts)),l=0,u=f.length;u>l;l++)d=f[l],o="cell"===e?n.call(b,p[i],d.row,d.column,i,l):n.call(b,p[i],d,i,l,c),
o!==a&&h.push(o)}if(h.length||r){var v=new Xt(p,t?h.concat.apply([],h):h),S=v.selector;
return S.rows=g.rows,S.cols=g.cols,S.opts=g.opts,v}return this},lastIndexOf:Ce.lastIndexOf||function(t,e){
return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){
var e=[];if(Ce.map)e=Ce.map.call(this,t,this);else for(var n=0,a=this.length;a>n;n++)e.push(t.call(this,this[n],n));
return new Xt(this.context,e)},pluck:function(t){return this.map(function(e){return e[t];
})},pop:Ce.pop,push:Ce.push,reduce:Ce.reduce||function(t,e){return c(this,t,e,0,this.length,1);
},reduceRight:Ce.reduceRight||function(t,e){return c(this,t,e,this.length-1,-1,-1);
},reverse:Ce.reverse,selector:null,shift:Ce.shift,sort:Ce.sort,splice:Ce.splice,toArray:function(){
return Ce.slice.call(this)},to$:function(){return t(this)},toJQuery:function(){return t(this);
},unique:function(){return new Xt(this.context,he(this))},unshift:Ce.unshift}),Xt.extend=function(e,n,a){
if(a.length&&n&&(n instanceof Xt||n.__dt_wrapper)){var r,o,i,s=function(t,e,n){return function(){
var a=e.apply(t,arguments);return Xt.extend(a,a,n.methodExt),a}};for(r=0,o=a.length;o>r;r++)i=a[r],
n[i.name]="function"==typeof i.val?s(e,i.val,i):t.isPlainObject(i.val)?{}:i.val,n[i.name].__dt_wrapper=!0,
Xt.extend(e,n[i.name],i.propExt)}},Xt.register=qt=function(e,n){if(t.isArray(e))for(var a=0,r=e.length;r>a;a++)Xt.register(e[a],n);else{
var o,i,s,l,u=e.split("."),c=_e,f=function(t,e){for(var n=0,a=t.length;a>n;n++)if(t[n].name===e)return t[n];
return null};for(o=0,i=u.length;i>o;o++){l=-1!==u[o].indexOf("()"),s=l?u[o].replace("()",""):u[o];
var d=f(c,s);d||(d={name:s,val:{},methodExt:[],propExt:[]},c.push(d)),o===i-1?d.val=n:c=l?d.methodExt:d.propExt;
}}},Xt.registerPlural=Gt=function(e,n,r){Xt.register(e,r),Xt.register(n,function(){
var e=r.apply(this,arguments);return e===this?this:e instanceof Xt?e.length?t.isArray(e[0])?new Xt(e.context,e[0]):e[0]:a:e;
})};var we=function(e,n){if("number"==typeof e)return[n[e]];var a=t.map(n,function(t,e){
return t.nTable});return t(a).filter(e).map(function(e){var r=t.inArray(this,a);return n[r];
}).toArray()};qt("tables()",function(t){return t?new Xt(we(t,this.context)):this}),
qt("table()",function(t){var e=this.tables(t),n=e.context;return n.length?new Xt(n[0]):e;
}),Gt("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){
return t.nTable},1)}),Gt("tables().body()","table().body()",function(){return this.iterator("table",function(t){
return t.nTBody},1)}),Gt("tables().header()","table().header()",function(){return this.iterator("table",function(t){
return t.nTHead},1)}),Gt("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){
return t.nTFoot},1)}),Gt("tables().containers()","table().container()",function(){
return this.iterator("table",function(t){return t.nTableWrapper},1)}),qt("draw()",function(t){
return this.iterator("table",function(e){"page"===t?M(e):("string"==typeof t&&(t="full-hold"===t?!1:!0),
W(e,t===!1))})}),qt("page()",function(t){return t===a?this.page.info().page:this.iterator("table",function(e){
ft(e,t)})}),qt("page.info()",function(t){if(0===this.context.length)return a;var e=this.context[0],n=e._iDisplayStart,r=e.oFeatures.bPaginate?e._iDisplayLength:-1,o=e.fnRecordsDisplay(),i=-1===r;
return{page:i?0:Math.floor(n/r),pages:i?1:Math.ceil(o/r),start:n,end:e.fnDisplayEnd(),
length:r,recordsTotal:e.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===Ut(e)
}}),qt("page.len()",function(t){return t===a?0!==this.context.length?this.context[0]._iDisplayLength:a:this.iterator("table",function(e){
lt(e,t)})});var xe=function(t,e,n){if(n){var a=new Xt(t);a.one("draw",function(){
n(a.ajax.json())})}if("ssp"==Ut(t))W(t,e);else{ht(t,!0);var r=t.jqXHR;r&&4!==r.readyState&&r.abort(),
J(t,[],function(n){L(t);for(var a=G(t,n),r=0,o=a.length;o>r;r++)D(t,a[r]);W(t,e),
ht(t,!1)})}};qt("ajax.json()",function(){var t=this.context;return t.length>0?t[0].json:void 0;
}),qt("ajax.params()",function(){var t=this.context;return t.length>0?t[0].oAjaxData:void 0;
}),qt("ajax.reload()",function(t,e){return this.iterator("table",function(n){xe(n,e===!1,t);
})}),qt("ajax.url()",function(e){var n=this.context;return e===a?0===n.length?a:(n=n[0],
n.ajax?t.isPlainObject(n.ajax)?n.ajax.url:n.ajax:n.sAjaxSource):this.iterator("table",function(n){
t.isPlainObject(n.ajax)?n.ajax.url=e:n.ajax=e})}),qt("ajax.url().load()",function(t,e){
return this.iterator("table",function(n){xe(n,e===!1,t)})});var Ie=function(e,n,r,o,i){
var s,l,u,c,f,d,h=[],p=typeof n;for(n&&"string"!==p&&"function"!==p&&n.length!==a||(n=[n]),
u=0,c=n.length;c>u;u++)for(l=n[u]&&n[u].split?n[u].split(","):[n[u]],f=0,d=l.length;d>f;f++)s=r("string"==typeof l[f]?t.trim(l[f]):l[f]),
s&&s.length&&(h=h.concat(s));var g=Vt.selector[e];if(g.length)for(u=0,c=g.length;c>u;u++)h=g[u](o,i,h);
return he(h)},Ae=function(e){return e||(e={}),e.filter&&e.search===a&&(e.search=e.filter),
t.extend({search:"none",order:"current",page:"all"},e)},Fe=function(t){for(var e=0,n=t.length;n>e;e++)if(t[e].length>0)return t[0]=t[e],
t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t},Le=function(e,n){
var a,r,o,i=[],s=e.aiDisplay,l=e.aiDisplayMaster,u=n.search,c=n.order,f=n.page;if("ssp"==Ut(e))return"removed"===u?[]:ce(0,l.length);
if("current"==f)for(a=e._iDisplayStart,r=e.fnDisplayEnd();r>a;a++)i.push(s[a]);else if("current"==c||"applied"==c)i="none"==u?l.slice():"applied"==u?s.slice():t.map(l,function(e,n){
return-1===t.inArray(e,s)?e:null});else if("index"==c||"original"==c)for(a=0,r=e.aoData.length;r>a;a++)"none"==u?i.push(a):(o=t.inArray(a,s),
(-1===o&&"removed"==u||o>=0&&"applied"==u)&&i.push(a));return i},Pe=function(e,n,r){
var o=function(n){var o=ae(n);if(null!==o&&!r)return[o];var i=Le(e,r);if(null!==o&&-1!==t.inArray(o,i))return[o];
if(!n)return i;if("function"==typeof n)return t.map(i,function(t){var a=e.aoData[t];
return n(t,a._aData,a.nTr)?t:null});var s=fe(ue(e.aoData,i,"nTr"));if(n.nodeName){
if(n._DT_RowIndex!==a)return[n._DT_RowIndex];if(n._DT_CellIndex)return[n._DT_CellIndex.row];
var l=t(n).closest("*[data-dt-row]");return l.length?[l.data("dt-row")]:[]}if("string"==typeof n&&"#"===n.charAt(0)){
var u=e.aIds[n.replace(/^#/,"")];if(u!==a)return[u.idx]}return t(s).filter(n).map(function(){
return this._DT_RowIndex}).toArray()};return Ie("row",n,o,e,r)};qt("rows()",function(e,n){
e===a?e="":t.isPlainObject(e)&&(n=e,e=""),n=Ae(n);var r=this.iterator("table",function(t){
return Pe(t,e,n)},1);return r.selector.rows=e,r.selector.opts=n,r}),qt("rows().nodes()",function(){
return this.iterator("row",function(t,e){return t.aoData[e].nTr||a},1)}),qt("rows().data()",function(){
return this.iterator(!0,"rows",function(t,e){return ue(t.aoData,e,"_aData")},1)}),
Gt("rows().cache()","row().cache()",function(t){return this.iterator("row",function(e,n){
var a=e.aoData[n];return"search"===t?a._aFilterData:a._aSortData},1)}),Gt("rows().invalidate()","row().invalidate()",function(t){
return this.iterator("row",function(e,n){R(e,n,t)})}),Gt("rows().indexes()","row().index()",function(){
return this.iterator("row",function(t,e){return e},1)}),Gt("rows().ids()","row().id()",function(t){
for(var e=[],n=this.context,a=0,r=n.length;r>a;a++)for(var o=0,i=this[a].length;i>o;o++){
var s=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);e.push((t===!0?"#":"")+s)}return new Xt(n,e);
}),Gt("rows().remove()","row().remove()",function(){var t=this;return this.iterator("row",function(e,n,r){
var o,i,s,l,u,c,f=e.aoData,d=f[n];for(f.splice(n,1),o=0,i=f.length;i>o;o++)if(u=f[o],
c=u.anCells,null!==u.nTr&&(u.nTr._DT_RowIndex=o),null!==c)for(s=0,l=c.length;l>s;s++)c[s]._DT_CellIndex.row=o;
P(e.aiDisplayMaster,n),P(e.aiDisplay,n),P(t[r],n,!1),Mt(e);var h=e.rowIdFn(d._aData);
h!==a&&delete e.aIds[h]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;n>e;e++)t.aoData[e].idx=e;
}),this}),qt("rows.add()",function(e){var n=this.iterator("table",function(t){var n,a,r,o=[];
for(a=0,r=e.length;r>a;a++)n=e[a],n.nodeName&&"TR"===n.nodeName.toUpperCase()?o.push(y(t,n)[0]):o.push(D(t,n));
return o},1),a=this.rows(-1);return a.pop(),t.merge(a,n),a}),qt("row()",function(t,e){
return Fe(this.rows(t,e))}),qt("row().data()",function(t){var e=this.context;return t===a?e.length&&this.length?e[0].aoData[this[0]]._aData:a:(e[0].aoData[this[0]]._aData=t,
R(e[0],this[0],"data"),this)}),qt("row().node()",function(){var t=this.context;return t.length&&this.length?t[0].aoData[this[0]].nTr||null:null;
}),qt("row.add()",function(e){e instanceof t&&e.length&&(e=e[0]);var n=this.iterator("table",function(t){
return e.nodeName&&"TR"===e.nodeName.toUpperCase()?y(t,e)[0]:D(t,e)});return this.row(n[0]);
});var Re=function(e,n,a,r){var o=[],i=function(n,a){if(t.isArray(n)||n instanceof t)for(var r=0,s=n.length;s>r;r++)i(n[r],a);else if(n.nodeName&&"tr"===n.nodeName.toLowerCase())o.push(n);else{
var l=t("<tr><td/></tr>").addClass(a);t("td",l).addClass(a).html(n)[0].colSpan=b(e),
o.push(l[0])}};i(a,r),n._details&&n._details.remove(),n._details=t(o),n._detailsShow&&n._details.insertAfter(n.nTr);
},je=function(t,e){var n=t.context;if(n.length){var r=n[0].aoData[e!==a?e:t[0]];r&&r._details&&(r._details.remove(),
r._detailsShow=a,r._details=a)}},He=function(t,e){var n=t.context;if(n.length&&t.length){
var a=n[0].aoData[t[0]];a._details&&(a._detailsShow=e,e?a._details.insertAfter(a.nTr):a._details.detach(),
Ne(n[0]))}},Ne=function(t){var e=new Xt(t),n=".dt.DT_details",a="draw"+n,r="column-visibility"+n,o="destroy"+n,i=t.aoData;
e.off(a+" "+r+" "+o),le(i,"_details").length>0&&(e.on(a,function(n,a){t===a&&e.rows({
page:"current"}).eq(0).each(function(t){var e=i[t];e._detailsShow&&e._details.insertAfter(e.nTr);
})}),e.on(r,function(e,n,a,r){if(t===n)for(var o,s=b(n),l=0,u=i.length;u>l;l++)o=i[l],
o._details&&o._details.children("td[colspan]").attr("colspan",s)}),e.on(o,function(n,a){
if(t===a)for(var r=0,o=i.length;o>r;r++)i[r]._details&&je(e,r)}))},Oe="",ke=Oe+"row().child",Me=ke+"()";
qt(Me,function(t,e){var n=this.context;return t===a?n.length&&this.length?n[0].aoData[this[0]]._details:a:(t===!0?this.child.show():t===!1?je(this):n.length&&this.length&&Re(n[0],n[0].aoData[this[0]],t,e),
this)}),qt([ke+".show()",Me+".show()"],function(t){return He(this,!0),this}),qt([ke+".hide()",Me+".hide()"],function(){
return He(this,!1),this}),qt([ke+".remove()",Me+".remove()"],function(){return je(this),
this}),qt(ke+".isShown()",function(){var t=this.context;return t.length&&this.length?t[0].aoData[this[0]]._detailsShow||!1:!1;
});var We=/^(.+):(name|visIdx|visible)$/,Ue=function(t,e,n,a,r){for(var o=[],i=0,s=r.length;s>i;i++)o.push(T(t,r[i],e));
return o},Be=function(e,n,a){var r=e.aoColumns,o=le(r,"sName"),i=le(r,"nTh"),s=function(n){
var s=ae(n);if(""===n)return ce(r.length);if(null!==s)return[s>=0?s:r.length+s];if("function"==typeof n){
var l=Le(e,a);return t.map(r,function(t,a){return n(a,Ue(e,a,0,0,l),i[a])?a:null});
}var u="string"==typeof n?n.match(We):"";if(u)switch(u[2]){case"visIdx":case"visible":
var c=parseInt(u[1],10);if(0>c){var f=t.map(r,function(t,e){return t.bVisible?e:null;
});return[f[f.length+c]]}return[p(e,c)];case"name":return t.map(o,function(t,e){return t===u[1]?e:null;
});default:return[]}if(n.nodeName&&n._DT_CellIndex)return[n._DT_CellIndex.column];
var d=t(i).filter(n).map(function(){return t.inArray(this,i)}).toArray();if(d.length||!n.nodeName)return d;
var h=t(n).closest("*[data-dt-column]");return h.length?[h.data("dt-column")]:[]};
return Ie("column",n,s,e,a)},Ee=function(e,n,r){var o,i,s,l,u=e.aoColumns,c=u[n],f=e.aoData;
if(r===a)return c.bVisible;if(c.bVisible!==r){if(r){var d=t.inArray(!0,le(u,"bVisible"),n+1);
for(i=0,s=f.length;s>i;i++)l=f[i].nTr,o=f[i].anCells,l&&l.insertBefore(o[n],o[d]||null);
}else t(le(e.aoData,"anCells",n)).detach();c.bVisible=r,k(e,e.aoHeader),k(e,e.aoFooter),
Ft(e)}};qt("columns()",function(e,n){e===a?e="":t.isPlainObject(e)&&(n=e,e=""),n=Ae(n);
var r=this.iterator("table",function(t){return Be(t,e,n)},1);return r.selector.cols=e,
r.selector.opts=n,r}),Gt("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){
return t.aoColumns[e].nTh},1)}),Gt("columns().footer()","column().footer()",function(t,e){
return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),Gt("columns().data()","column().data()",function(){
return this.iterator("column-rows",Ue,1)}),Gt("columns().dataSrc()","column().dataSrc()",function(){
return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),Gt("columns().cache()","column().cache()",function(t){
return this.iterator("column-rows",function(e,n,a,r,o){return ue(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",n);
},1)}),Gt("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){
return ue(t.aoData,r,"anCells",e)},1)}),Gt("columns().visible()","column().visible()",function(t,e){
var n=this.iterator("column",function(e,n){return t===a?e.aoColumns[n].bVisible:void Ee(e,n,t);
});return t!==a&&(this.iterator("column",function(n,a){kt(n,null,"column-visibility",[n,a,t,e]);
}),(e===a||e)&&this.columns.adjust()),n}),Gt("columns().indexes()","column().index()",function(t){
return this.iterator("column",function(e,n){return"visible"===t?g(e,n):n},1)}),qt("columns.adjust()",function(){
return this.iterator("table",function(t){h(t)},1)}),qt("column.index()",function(t,e){
if(0!==this.context.length){var n=this.context[0];if("fromVisible"===t||"toData"===t)return p(n,e);
if("fromData"===t||"toVisible"===t)return g(n,e)}}),qt("column()",function(t,e){return Fe(this.columns(t,e));
});var Je=function(e,n,r){var o,i,s,l,u,c,f,d=e.aoData,h=Le(e,r),p=fe(ue(d,h,"anCells")),g=t([].concat.apply([],p)),b=e.aoColumns.length,v=function(n){
var r="function"==typeof n;if(null===n||n===a||r){for(i=[],s=0,l=h.length;l>s;s++)for(o=h[s],
u=0;b>u;u++)c={row:o,column:u},r?(f=d[o],n(c,T(e,o,u),f.anCells?f.anCells[u]:null)&&i.push(c)):i.push(c);
return i}if(t.isPlainObject(n))return[n];var p=g.filter(n).map(function(t,e){return{
row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray();return p.length||!n.nodeName?p:(f=t(n).closest("*[data-dt-row]"),
f.length?[{row:f.data("dt-row"),column:f.data("dt-column")}]:[])};return Ie("cell",n,v,e,r);
};qt("cells()",function(e,n,r){if(t.isPlainObject(e)&&(e.row===a?(r=e,e=null):(r=n,
n=null)),t.isPlainObject(n)&&(r=n,n=null),null===n||n===a)return this.iterator("table",function(t){
return Je(t,e,Ae(r))});var o,i,s,l,u,c=this.columns(n,r),f=this.rows(e,r),d=this.iterator("table",function(t,e){
for(o=[],i=0,s=f[e].length;s>i;i++)for(l=0,u=c[e].length;u>l;l++)o.push({row:f[e][i],
column:c[e][l]});return o},1);return t.extend(d.selector,{cols:n,rows:e,opts:r}),
d}),Gt("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){
var r=t.aoData[e];return r&&r.anCells?r.anCells[n]:a},1)}),qt("cells().data()",function(){
return this.iterator("cell",function(t,e,n){return T(t,e,n)},1)}),Gt("cells().cache()","cell().cache()",function(t){
return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",function(e,n,a){
return e.aoData[n][t][a]},1)}),Gt("cells().render()","cell().render()",function(t){
return this.iterator("cell",function(e,n,a){return T(e,n,a,t)},1)}),Gt("cells().indexes()","cell().index()",function(){
return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:g(t,n)
}},1)}),Gt("cells().invalidate()","cell().invalidate()",function(t){return this.iterator("cell",function(e,n,a){
R(e,n,t,a)})}),qt("cell()",function(t,e,n){return Fe(this.cells(t,e,n))}),qt("cell().data()",function(t){
var e=this.context,n=this[0];return t===a?e.length&&n.length?T(e[0],n[0].row,n[0].column):a:(w(e[0],n[0].row,n[0].column,t),
R(e[0],n[0].row,"data",n[0].column),this)}),qt("order()",function(e,n){var r=this.context;
return e===a?0!==r.length?r[0].aaSorting:a:("number"==typeof e?e=[[e,n]]:e.length&&!t.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),
this.iterator("table",function(t){t.aaSorting=e.slice()}))}),qt("order.listener()",function(t,e,n){
return this.iterator("table",function(a){xt(a,t,e,n)})}),qt("order.fixed()",function(e){
if(!e){var n=this.context,r=n.length?n[0].aaSortingFixed:a;return t.isArray(r)?{pre:r
}:r}return this.iterator("table",function(n){n.aaSortingFixed=t.extend(!0,{},e)});
}),qt(["columns().order()","column().order()"],function(e){var n=this;return this.iterator("table",function(a,r){
var o=[];t.each(n[r],function(t,n){o.push([n,e])}),a.aaSorting=o})}),qt("search()",function(e,n,r,o){
var i=this.context;return e===a?0!==i.length?i[0].oPreviousSearch.sSearch:a:this.iterator("table",function(a){
a.oFeatures.bFilter&&z(a,t.extend({},a.oPreviousSearch,{sSearch:e+"",bRegex:null===n?!1:n,
bSmart:null===r?!0:r,bCaseInsensitive:null===o?!0:o}),1)})}),Gt("columns().search()","column().search()",function(e,n,r,o){
return this.iterator("column",function(i,s){var l=i.aoPreSearchCols;return e===a?l[s].sSearch:void(i.oFeatures.bFilter&&(t.extend(l[s],{
sSearch:e+"",bRegex:null===n?!1:n,bSmart:null===r?!0:r,bCaseInsensitive:null===o?!0:o
}),z(i,i.oPreviousSearch,1)))})}),qt("state()",function(){return this.context.length?this.context[0].oSavedState:null;
}),qt("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{});
})}),qt("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null;
}),qt("state.save()",function(){return this.iterator("table",function(t){Ft(t)})}),
$t.versionCheck=$t.fnVersionCheck=function(t){for(var e,n,a=$t.version.split("."),r=t.split("."),o=0,i=r.length;i>o;o++)if(e=parseInt(a[o],10)||0,
n=parseInt(r[o],10)||0,e!==n)return e>n;return!0},$t.isDataTable=$t.fnIsDataTable=function(e){
var n=t(e).get(0),a=!1;return t.each($t.settings,function(e,r){var o=r.nScrollHead?t("table",r.nScrollHead)[0]:null,i=r.nScrollFoot?t("table",r.nScrollFoot)[0]:null;
(r.nTable===n||o===n||i===n)&&(a=!0)}),a},$t.tables=$t.fnTables=function(e){var n=!1;
t.isPlainObject(e)&&(n=e.api,e=e.visible);var a=t.map($t.settings,function(n){return!e||e&&t(n.nTable).is(":visible")?n.nTable:void 0;
});return n?new Xt(a):a},$t.camelToHungarian=o,qt("$()",function(e,n){var a=this.rows(n).nodes(),r=t(a);
return t([].concat(r.filter(e).toArray(),r.find(e).toArray()))}),t.each(["on","one","off"],function(e,n){
qt(n+"()",function(){var e=Array.prototype.slice.call(arguments);e[0].match(/\.dt\b/)||(e[0]+=".dt");
var a=t(this.tables().nodes());return a[n].apply(a,e),this})}),qt("clear()",function(){
return this.iterator("table",function(t){L(t)})}),qt("settings()",function(){return new Xt(this.context,this.context);
}),qt("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),qt("data()",function(){
return this.iterator("table",function(t){return le(t.aoData,"_aData")}).flatten();
}),qt("destroy()",function(n){return n=n||!1,this.iterator("table",function(a){var r,o=a.nTableWrapper.parentNode,i=a.oClasses,s=a.nTable,l=a.nTBody,u=a.nTHead,c=a.nTFoot,f=t(s),d=t(l),h=t(a.nTableWrapper),p=t.map(a.aoData,function(t){
return t.nTr});a.bDestroying=!0,kt(a,"aoDestroyCallback","destroy",[a]),n||new Xt(a).columns().visible(!0),
h.unbind(".DT").find(":not(tbody *)").unbind(".DT"),t(e).unbind(".DT-"+a.sInstance),
s!=u.parentNode&&(f.children("thead").detach(),f.append(u)),c&&s!=c.parentNode&&(f.children("tfoot").detach(),
f.append(c)),a.aaSorting=[],a.aaSortingFixed=[],It(a),t(p).removeClass(a.asStripeClasses.join(" ")),
t("th, td",u).removeClass(i.sSortable+" "+i.sSortableAsc+" "+i.sSortableDesc+" "+i.sSortableNone),
a.bJUI&&(t("th span."+i.sSortIcon+", td span."+i.sSortIcon,u).detach(),t("th, td",u).each(function(){
var e=t("div."+i.sSortJUIWrapper,this);t(this).append(e.contents()),e.detach()})),
d.children().detach(),d.append(p);var g=n?"remove":"detach";f[g](),h[g](),!n&&o&&(o.insertBefore(s,a.nTableReinsertBefore),
f.css("width",a.sDestroyWidth).removeClass(i.sTable),r=a.asDestroyStripes.length,
r&&d.children().each(function(e){t(this).addClass(a.asDestroyStripes[e%r])}));var b=t.inArray(a,$t.settings);
-1!==b&&$t.settings.splice(b,1)})}),t.each(["column","row","cell"],function(t,e){
qt(e+"s().every()",function(t){var n=this.selector.opts,r=this;return this.iterator(e,function(o,i,s,l,u){
t.call(r[e](i,"cell"===e?s:n,"cell"===e?n:a),i,s,l,u)})})}),qt("i18n()",function(e,n,r){
var o=this.context[0],i=I(e)(o.oLanguage);return i===a&&(i=n),r!==a&&t.isPlainObject(i)&&(i=i[r]!==a?i[r]:i._),
i.replace("%d",r)}),$t.version="1.10.12",$t.settings=[],$t.models={},$t.models.oSearch={
bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},$t.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,
idx:-1},$t.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,
bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,
fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,
sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,
sTitle:null,sType:null,sWidth:null,sWidthOrig:null},$t.defaults={aaData:null,aaSorting:[[0,"asc"]],
aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,
aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,
bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,
bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,
fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){
return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,
fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,
fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname));
}catch(e){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){
try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e));
}catch(n){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,
iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",
sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",
sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",
sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",
sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",
sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"
},oSearch:t.extend({},$t.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",
searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",
sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},r($t.defaults),$t.defaults.column={
aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,
bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",
sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null
},r($t.defaults.column),$t.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,
bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,
bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,
iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{
bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],
aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],
oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,
asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],
aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,
nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,
aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,
aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,
sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:a,oAjaxData:a,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,
bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,
bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],
fnRecordsTotal:function(){return"ssp"==Ut(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length;
},fnRecordsDisplay:function(){return"ssp"==Ut(this)?1*this._iRecordsDisplay:this.aiDisplay.length;
},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;
return r.bServerSide?o===!1||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||n>a||-1===t?a:n;
},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],
oPlugins:{},rowIdFn:null,rowId:null},$t.ext=Vt={buttons:{},classes:{},builder:"-source-",
errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},
legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],
search:{},order:{}},_unique:0,fnVersionCheck:$t.fnVersionCheck,iApiIndex:0,oJUIClasses:{},
sVersion:$t.version},t.extend(Vt,{afnFiltering:Vt.search,aTypes:Vt.type.detect,ofnSearch:Vt.type.search,
oSort:Vt.type.order,afnSortData:Vt.order,aoFeatures:Vt.feature,oApi:Vt.internal,oStdClasses:Vt.classes,
oPagination:Vt.pager}),t.extend($t.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",
sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",
sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",
sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",
sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",
sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",
sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",
sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",
sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""
}),function(){var e="";e="";var n=e+"ui-state-default",a=e+"css_right ui-icon ui-icon-",r=e+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
t.extend($t.ext.oJUIClasses,$t.ext.classes,{sPageButton:"fg-button ui-button "+n,
sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
sSortAsc:n+" sorting_asc",sSortDesc:n+" sorting_desc",sSortable:n+" sorting",sSortableAsc:n+" sorting_asc_disabled",
sSortableDesc:n+" sorting_desc_disabled",sSortableNone:n+" sorting_disabled",sSortJUIAsc:a+"triangle-1-n",
sSortJUIDesc:a+"triangle-1-s",sSortJUI:a+"carat-2-n-s",sSortJUIAscAllowed:a+"carat-1-n",
sSortJUIDescAllowed:a+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",
sScrollHead:"dataTables_scrollHead "+n,sScrollFoot:"dataTables_scrollFoot "+n,sHeaderTH:n,
sFooterTH:n,sJUIHeader:r+" ui-corner-tl ui-corner-tr",sJUIFooter:r+" ui-corner-bl ui-corner-br"
})}();var Ve=$t.ext.pager;t.extend(Ve,{simple:function(t,e){return["previous","next"];
},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){
return[Bt(t,e)]},simple_numbers:function(t,e){return["previous",Bt(t,e),"next"]},
full_numbers:function(t,e){return["first","previous",Bt(t,e),"next","last"]},_numbers:Bt,
numbers_length:7}),t.extend(!0,$t.ext.renderer,{pageButton:{_:function(e,a,r,o,i,s){
var l,u,c,f=e.oClasses,d=e.oLanguage.oPaginate,h=e.oLanguage.oAria.paginate||{},p=0,g=function(n,a){
var o,c,b,v,S=function(t){ft(e,t.data.action,!0)};for(o=0,c=a.length;c>o;o++)if(v=a[o],
t.isArray(v)){var m=t("<"+(v.DT_el||"div")+"/>").appendTo(n);g(m,v)}else{switch(l=null,
u="",v){case"ellipsis":n.append('<span class="ellipsis">&#x2026;</span>');break;case"first":
l=d.sFirst,u=v+(i>0?"":" "+f.sPageButtonDisabled);break;case"previous":l=d.sPrevious,
u=v+(i>0?"":" "+f.sPageButtonDisabled);break;case"next":l=d.sNext,u=v+(s-1>i?"":" "+f.sPageButtonDisabled);
break;case"last":l=d.sLast,u=v+(s-1>i?"":" "+f.sPageButtonDisabled);break;default:
l=v+1,u=i===v?f.sPageButtonActive:""}null!==l&&(b=t("<a>",{"class":f.sPageButton+" "+u,
"aria-controls":e.sTableId,"aria-label":h[v],"data-dt-idx":p,tabindex:e.iTabIndex,
id:0===r&&"string"==typeof v?e.sTableId+"_"+v:null}).html(l).appendTo(n),Nt(b,{action:v
},S),p++)}};try{c=t(a).find(n.activeElement).data("dt-idx")}catch(b){}g(t(a).empty(),o),
c&&t(a).find("[data-dt-idx="+c+"]").focus()}}}),t.extend($t.ext.type.detect,[function(t,e){
var n=e.oLanguage.sDecimal;return oe(t,n)?"num"+n:null},function(t,e){if(!(!t||t instanceof Date||Qt.test(t)&&Kt.test(t)))return null;
var n=Date.parse(t);return null!==n&&!isNaN(n)||ne(t)?"date":null},function(t,e){
var n=e.oLanguage.sDecimal;return oe(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal;
return se(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return se(t,n,!0)?"html-num-fmt"+n:null;
},function(t,e){return ne(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null;
}]),t.extend($t.ext.type.search,{html:function(t){return ne(t)?t:"string"==typeof t?t.replace(Yt," ").replace(Zt,""):"";
},string:function(t){return ne(t)?t:"string"==typeof t?t.replace(Yt," "):t}});var Xe=function(t,e,n,a){
return 0===t||t&&"-"!==t?(e&&(t=re(t,e)),t.replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),
1*t):-(1/0)};t.extend(Vt.type.order,{"date-pre":function(t){return Date.parse(t)||0;
},"html-pre":function(t){return ne(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+"";
},"string-pre":function(t){return ne(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():"";
},"string-asc":function(t,e){return e>t?-1:t>e?1:0},"string-desc":function(t,e){return e>t?1:t>e?-1:0;
}}),Et(""),t.extend(!0,$t.ext.renderer,{header:{_:function(e,n,a,r){t(e.nTable).on("order.dt.DT",function(t,o,i,s){
if(e===o){var l=a.idx;n.removeClass(a.sSortingClass+" "+r.sSortAsc+" "+r.sSortDesc).addClass("asc"==s[l]?r.sSortAsc:"desc"==s[l]?r.sSortDesc:a.sSortingClass);
}})},jqueryui:function(e,n,a,r){t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon+" "+a.sSortingClassJUI)).appendTo(n),
t(e.nTable).on("order.dt.DT",function(t,o,i,s){if(e===o){var l=a.idx;n.removeClass(r.sSortAsc+" "+r.sSortDesc).addClass("asc"==s[l]?r.sSortAsc:"desc"==s[l]?r.sSortDesc:a.sSortingClass),
n.find("span."+r.sSortIcon).removeClass(r.sSortJUIAsc+" "+r.sSortJUIDesc+" "+r.sSortJUI+" "+r.sSortJUIAscAllowed+" "+r.sSortJUIDescAllowed).addClass("asc"==s[l]?r.sSortJUIAsc:"desc"==s[l]?r.sSortJUIDesc:a.sSortingClassJUI);
}})}}});var qe=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t;
};return $t.render={number:function(t,e,n,a,r){return{display:function(o){if("number"!=typeof o&&"string"!=typeof o)return o;
var i=0>o?"-":"",s=parseFloat(o);if(isNaN(s))return qe(o);o=Math.abs(s);var l=parseInt(o,10),u=n?e+(o-l).toFixed(n).substring(2):"";
return i+(a||"")+l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+u+(r||"")}}},text:function(){
return{display:qe}}},t.extend($t.ext.internal,{_fnExternApiFunc:Jt,_fnBuildAjax:J,
_fnAjaxUpdate:V,_fnAjaxParameters:X,_fnAjaxUpdateDraw:q,_fnAjaxDataSrc:G,_fnAddColumn:f,
_fnColumnOptions:d,_fnAdjustColumnSizing:h,_fnVisibleToColumnIndex:p,_fnColumnIndexToVisible:g,
_fnVisbleColumns:b,_fnGetColumns:v,_fnColumnTypes:S,_fnApplyColumnDefs:m,_fnHungarianMap:r,
_fnCamelToHungarian:o,_fnLanguageCompat:i,_fnBrowserDetect:u,_fnAddData:D,_fnAddTr:y,
_fnNodeToDataIndex:_,_fnNodeToColumnIndex:C,_fnGetCellData:T,_fnSetCellData:w,_fnSplitObjNotation:x,
_fnGetObjectDataFn:I,_fnSetObjectDataFn:A,_fnGetDataMaster:F,_fnClearTable:L,_fnDeleteIndex:P,
_fnInvalidate:R,_fnGetRowElements:j,_fnCreateTr:H,_fnBuildHead:O,_fnDrawHead:k,_fnDraw:M,
_fnReDraw:W,_fnAddOptionsHtml:U,_fnDetectHeader:B,_fnGetUniqueThs:E,_fnFeatureHtmlFilter:$,
_fnFilterComplete:z,_fnFilterCustom:Y,_fnFilterColumn:Z,_fnFilter:Q,_fnFilterCreateSearch:K,
_fnEscapeRegex:ve,_fnFilterData:tt,_fnFeatureHtmlInfo:at,_fnUpdateInfo:rt,_fnInfoMacros:ot,
_fnInitialise:it,_fnInitComplete:st,_fnLengthChange:lt,_fnFeatureHtmlLength:ut,_fnFeatureHtmlPaginate:ct,
_fnPageChange:ft,_fnFeatureHtmlProcessing:dt,_fnProcessingDisplay:ht,_fnFeatureHtmlTable:pt,
_fnScrollDraw:gt,_fnApplyToChildren:bt,_fnCalculateColumnWidths:vt,_fnThrottle:ye,
_fnConvertToWidth:St,_fnGetWidestNode:mt,_fnGetMaxLenString:Dt,_fnStringToCss:yt,
_fnSortFlatten:_t,_fnSort:Ct,_fnSortAria:Tt,_fnSortListener:wt,_fnSortAttachListener:xt,
_fnSortingClasses:It,_fnSortData:At,_fnSaveState:Ft,_fnLoadState:Lt,_fnSettingsFromNode:Pt,
_fnLog:Rt,_fnMap:jt,_fnBindAction:Nt,_fnCallbackReg:Ot,_fnCallbackFire:kt,_fnLengthOverflow:Mt,
_fnRenderer:Wt,_fnDataSource:Ut,_fnRowAttributes:N,_fnCalculateEnd:function(){}}),
t.fn.dataTable=$t,$t.$=t,t.fn.dataTableSettings=$t.settings,t.fn.dataTableExt=$t.ext,
t.fn.DataTable=function(e){return t(this).dataTable(e).api()},t.each($t,function(e,n){
t.fn.DataTable[e]=n}),t.fn.dataTable});