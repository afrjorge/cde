define(["../../../AddIn","../../../Dashboard","../../../lib/raphael","../../../lib/jquery"],function(e,a,i,l){
var n=new e({name:"circle",label:"Circle",defaults:{canvasSize:10,radius:4,color:"black",
title:function(e,a){return"Value: "+e.value}},implementation:function(e,a,n){l(e).empty();
var t,r,c,o={};for(t in n)n.hasOwnProperty(t)&&(r=n[t],o[t]="function"==typeof r?r.call(this,a,n):r);
c=o.canvasSize,i(e,o.canvasSize,o.canvasSize).circle(c/2,c/2,o.radius).attr({fill:o.color,
opacity:1,stroke:"none",title:o.title})}});return a.registerGlobalAddIn("Table","colType",n),
n});