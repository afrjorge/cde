define(["../../../AddIn","../../../Dashboard","../../../lib/jquery","amd!../../../lib/underscore","../../../lib/CCC/tipsy"],function(e,t,a,n){
var i=new e({name:"bubble",label:"bubble",defaults:{containerSize:30,radius:function(e){
var t=n.map(e.data.metadata,function(e){return e.colName}),a=n.indexOf(t,e.id),i=e.data.resultset.map(function(e){
return Number(e[a])}),r=n.max(i),l=n.min(i);return(Number(e.value)-l)/(r-l)*100},
color:function(e){return"rgba(200, 200, 200, 0.6)"},title:function(e,t){return"Value: "+e.value;
},cssClass:"bubbleContainer",layout:"<div></div>"},init:function(){},implementation:function(e,t,n){
var i,r,l=(t.value,{});for(i in n)n.hasOwnProperty(i)&&(r=n[i],l[i]="function"==typeof r?r.call(this,t,n):r);
a(e).empty().html(a(l.layout).addClass(l.cssClass).append(a(n.layout).attr("title",l.title).css({
width:l.radius+"%",height:l.radius+"%","border-radius":"100%","background-color":l.color,
display:"inline-block","text-align":"center","vertical-align":"middle"})).css({width:l.containerSize,
height:l.containerSize}))}});return t.registerGlobalAddIn("Template","templateType",i),
i});