define(["./JFreeChartComponent.ext","../lib/jquery","./JFreeChartComponent"],function(JFreeChartComponentExt,$,JFreeChartComponent){
var OpenFlashChartComponent=JFreeChartComponent.extend({callPentahoAction:function(){
this.dashboard.incrementRunningCalls();var myself=this,getDataFunction;this.dashboard.callPentahoAction(myself,"system","pentaho-cdf/actions","openflashchart.xaction",this.getParameters(),function(e){
if(null!=e){var t=JFreeChartComponentExt.getOpenFlashChart(e.find("ExecuteActivityResponse:first-child").text());
getDataFunction=t.match(/getData.*\(\)/gi),$("#"+myself.htmlObject).html(t)}myself.dashboard.decrementRunningCalls();
}),OpenFlashChartComponent.prototype.onClick=function(value){if(null!=getDataFunction&&void 0!=myself.chartDefinition.urlTemplate&&void 0!=myself.chartDefinition.parameterName&&(myself.data=void 0!=myself.data?myself.data:eval("("+eval(getDataFunction[0])+")"),
void 0!=myself.data.x_axis)){var urlTemplate=myself.chartDefinition.urlTemplate.replace("{"+myself.chartDefinition.parameterName+"}",myself.data.x_axis.labels.labels[value]);
eval(urlTemplate)}}}});return OpenFlashChartComponent});