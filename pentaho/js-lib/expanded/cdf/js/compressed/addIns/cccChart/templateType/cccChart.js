define(["../../../AddIn","../../../Dashboard","../../../lib/jquery","amd!../../../lib/underscore","../../../lib/CCC/pvc"],function(t,a,e,r,s){
var n=new t({name:"cccChart",label:"cccChart",defaults:{type:"BarChart",chartOpts:{
compatVersion:2,height:100,animate:!1,crosstabMode:!1,seriesInRows:!1,timeSeries:!1
},transformData:function(t){var a={metadata:[],resultset:[]};try{t=JSON.parse(t);r.each(t,function(t,e){
0==e&&r.each(t,function(t,e){a.metadata.push({colIndex:e,colName:"Col"+e,colType:"String"
})}),a.resultset.push(t)})}catch(e){return null}return a},layout:"<span></span>",
cssClass:"cccChartContainer"},init:function(){},implementation:function(t,a,n){var c=r.isFunction(n.transformData)?n.transformData(a.value):a.value;
if($tgt=e(t).empty().append(e(n.layout).addClass(n.cssClass).append(c)),c){n.chartOpts.canvas=$tgt.get(0),
n.chartOpts.width=n.width||$tgt.width(),n.chartOpts.bulletMeasures=[c[0]],n.chartOpts.bulletMarkers=[c[1]];
var l=new s[n.type](n.chartOpts);l.setData(c,{}),l.render()}}});return a.registerGlobalAddIn("Template","templateType",n),
n});