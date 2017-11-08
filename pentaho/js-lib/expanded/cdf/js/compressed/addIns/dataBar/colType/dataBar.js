define(["../../../AddIn","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/raphael","amd!../../../lib/underscore","../../../lib/jquery","../../../lib/CCC/protovis-compat!","amd!../../../lib/datatables","css!./dataBar"],function(a,t,e,r,l,i,n){
var o=new a({name:"dataBar",label:"Data Bar",defaults:{width:void 0,widthRatio:1,
height:void 0,align:null,startColor:"#55A4D6",endColor:"#448FC8",backgroundImage:void 0,
stroke:null,max:void 0,min:void 0,includeValue:!1,absValue:!0,valueFormat:function(a,t,r,l){
return""+e(t||"%.1f",a)}},init:function(){i.fn.dataTableExt.oSort[this.name+"-asc"]=i.fn.dataTableExt.oSort["numeric-asc"],
i.fn.dataTableExt.oSort[this.name+"-desc"]=i.fn.dataTableExt.oSort["numeric-desc"];
},implementation:function(a,t,e){var r=Math.max.apply(Math,t.tableData.map(function(a){
return a[t.colIdx]})),n=Math.min.apply(Math,t.tableData.map(function(a){return a[t.colIdx];
})),o=parseFloat(e.max),s=parseFloat(e.min),d=function(a){return l.isNumber(a)&&isFinite(a);
},c=d(o),p=d(s);if(e.absValue){var h=1==c?o:Math.max(Math.abs(r),Math.abs(n)),u=1==p?s:0,m=Math.abs(parseFloat(t.value));
u=Math.max(u,0)}else var h=1==c?o:Math.max(0,r),u=1==p?s:Math.min(0,n),m=parseFloat(t.value);
var g=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),b=i(a).empty(),f=i("<div>&nbsp;</div>").addClass("dataBarContainer").appendTo(b),v=e.width||f.width();
if("string"==typeof v)if(g){var w=parseFloat(v);w=(1!=e.widthRatio&&w>=98?100:w)*e.widthRatio,
v=w+"%"}else v=f.width()*e.widthRatio;else v*=e.widthRatio;var V,M=e.height||f.height(),x=Math.min(m,0),C=Math.max(m,0),y={
scale:100,wtmp:v,htmp:M,align:e.align,barHeight:100,r:C,l:x,hasSVG:g,target:f.get(0),
processVal:function(a){return a+"%"}};if(g&&"string"==typeof v?V=this.drawPaper(u,h,y):(y.processVal=function(a){
return a},y.scale=v,y.barHeight=M,y.legacy=!0,V=this.drawPaper(u,h,y)),V.attr({fill:e.backgroundImage?"url('"+e.backgroundImage+"')":"90-"+e.startColor+"-"+e.endColor,
stroke:e.stroke,title:"Value: "+t.value}),e.includeValue){var S=e.valueFormat(t.value,t.colFormat,t,e),F=i("<span></span>").addClass("value");
F.append(S),y.legacy?F.appendTo(f):g&&"right"==e.align?(F.addClass("alignRight").appendTo(f),
f.find("svg").css("float","right")):F.prependTo(f)}},drawPaper:function(a,t,e){var l=n.Scale.linear(a,t).range(0,e.scale),i=r(e.target,e.legacy?l(Math.min(e.r,t))-l(a):e.wtmp,e.htmp);
return!e.legacy&&e.hasSVG&&"right"==e.align?i.rect(e.processVal(l(t)-l(e.r)),e.processVal(0),e.processVal(l(e.r)-l(e.l)),e.processVal(e.barHeight)):i.rect(e.processVal(l(e.l)),e.processVal(0),e.processVal(l(e.r)-l(e.l)),e.processVal(e.barHeight));
}});return t.registerGlobalAddIn("Table","colType",o),o});