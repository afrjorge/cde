define(["./XactionComponent.ext","../Logger","../lib/jquery","./BaseComponent","../dashboard/Utils"],function(e,t,a,o,n){
return o.extend({reset:function(){this.timeplot=void 0,this.chartDefinition.dateRangeInput=this.InitialDateRangeInput,
this.listeners=this.InitialListeners},update:function(){var o=this,i=o.chartDefinition;
if(o.InitialListeners=void 0==o.InitialListeners?o.listeners:o.InitialListeners,o.InitialDateRangeInput=void 0==o.InitialDateRangeInput?i.dateRangeInput:o.InitialDateRangeInput,
1==i.updateOnDateRangeInputChange||void 0==o.timeplot||void 0==i.dateRangeInput){
void 0!=i.dateRangeInput&&void 0==o.timeplot&&(i.dateRangeInput=o.dashboard.getComponent(i.dateRangeInput),
o.startDateParameter=i.dateRangeInput.parameter[0],o.endDateParameter=i.dateRangeInput.parameter[1],
o.listeners=void 0==o.listeners?[]:o.listeners,o.listeners=o.listeners.concat(o.startDateParameter).concat(o.endDateParameter)),
"undefined"!=typeof Timeplot&&void 0==o.dashboard.timePlotColors&&(o.dashboard.timePlotColors=[new Timeplot.Color("#820000"),new Timeplot.Color("#13E512"),new Timeplot.Color("#1010E1"),new Timeplot.Color("#E532D1"),new Timeplot.Color("#1D2DE1"),new Timeplot.Color("#83FC24"),new Timeplot.Color("#A1D2FF"),new Timeplot.Color("#73F321")]);
var r=new Timeplot.DefaultTimeGeometry({gridColor:"#000000",axisLabelsPlacement:"top",
gridType:"short",yAxisColor:"rgba(255,255,255,0)",gridColor:"rgba(100,100,100,1)"
}),l=new Timeplot.DefaultValueGeometry({gridColor:"#000000",min:0,axisLabelsPlacement:"left",
gridType:"short",valueFormat:function(e){return toFormatedString(e)}}),s=new Timeplot.DefaultEventSource,d=new Timeplot.DefaultEventSource;
if(void 0==i)return void t.log("Fatal - No chart definition passed","error");void 0==i.showValues&&(i.showValues=!0);
var p=n.ev(i.columns);if(void 0==p||0==p.length)return void t.log("Fatal - No 'columns' property passed in chartDefinition","error");
var m=a("<div></div>");void 0!=i.title&&m.append('<span style="text-transform: lowercase;">'+i.title+"&nbsp; &nbsp; &nbsp;</span>");
for(var u=[],h=0,g=0;h<p.length;h++,g++){g=g>7?0:g,m.append('<span id="'+o.name+"Plot"+h+'Header" style="color:'+o.dashboard.timePlotColors[g].toHexString()+'">'+p[h]+" &nbsp;&nbsp;</span>");
var v={id:o.name+"Plot"+h,name:p[h],dataSource:new Timeplot.ColumnSource(s,h+1),valueGeometry:l,
timeGeometry:r,lineColor:o.dashboard.timePlotColors[g],showValues:i.showValues,hideZeroToolTipValues:void 0!=i.hideZeroToolTipValues?i.hideZeroToolTipValues:!1,
showValuesMode:void 0!=i.showValuesMode?i.showValuesMode:"header",toolTipFormat:function(e,t){
return t._name+" = "+toFormatedString(e)},headerFormat:function(e,t){return t._name+" = "+toFormatedString(e)+"&nbsp;&nbsp;";
}};1==i.dots&&(v.dotColor=o.dashboard.timePlotColors[g]),1==i.fill&&(v.fillColor=o.dashboard.timePlotColors[g].transparency(.5)),
u.push(new Timeplot.createPlotInfo(v))}var d=void 0,c=void 0;(void 0!=i.dateRangeInput||i.events&&1==i.events.show)&&(o.rangeColor="00FF00",
d=new Timeplot.DefaultEventSource,c=Timeplot.createPlotInfo({id:void 0!=i.dateRangeInput?"eventPlot":"events",
eventSource:d,timeGeometry:r,lineColor:"#FF0000",rangeColor:o.rangeColor,getSelectedRegion:function(e,t){
o.updateDateRangeInput(e,t)}}),u.push(c)),a("#"+o.htmlObject).html(m),a("#"+o.htmlObject).append("<div class='timeplot'></div>"),
i.height>0&&a("#"+o.htmlObject+" > div.timeplot").css("height",i.height),i.width>0&&a("#"+o.htmlObject+" > div.timeplot").css("width",i.width),
timeplot=Timeplot.create(a("#"+o.htmlObject+" > div.timeplot")[0],u),o.timeplot=timeplot,
o.geometry=r;"string"==typeof i.dataSource&&i.dataSource&&(i=a.extend({},this.dashboard.getDataSource(i.dataSource),i),
delete i.dataSource);var f=e.getCdfXaction("pentaho-cdf/actions","timelinefeeder.xaction",null,i);
if(i.events&&1==i.events.show){var D=e.getCdfXaction("pentaho-cdf/actions","timelineeventfeeder.xaction",null,i.events);
timeplot.loadText(f,",",s,null,null,function(e){timeplot.loadJSON(D,d,function(t){
if(t.events=o.filterEvents(t.events,e),i.dateRangeInput){var a=timeplot._plots[timeplot._plots.length-1];
"eventPlot"==a._id&&a._addSelectEvent(o.dashboard.getParameterValue(o.startDateParameter)+" 00:00:00",o.dashboard.getParameterValue(o.endDateParameter)+" 23:59:59",d,"iso8601",r._earliestDate,r._latestDate);
}})})}else timeplot.loadText(f,",",s,null,null,function(){if(i.dateRangeInput){var e=timeplot._plots[timeplot._plots.length-1];
"eventPlot"==e._id&&e._addSelectEvent(o.dashboard.getParameterValue(o.startDateParameter)+" 00:00:00",o.dashboard.getParameterValue(o.endDateParameter)+" 23:59:59",d,"iso8601",r._earliestDate,r._latestDate);
}})}else if(0!=o.updateTimeplot&&o.timeplot._plots.length>0){var b=o.timeplot._plots[o.timeplot._plots.length-1];
"eventPlot"==b._id&&b._addSelectEvent(o.dashboard.getParameterValue(o.startDateParameter)+" 00:00:00",o.dashboard.getParameterValue(o.endDateParameter)+" 23:59:59",b._eventSource,"iso8601",o.geometry._earliestDate,o.geometry._latestDate);
}},filterEvents:function(e,t){var a=[],o=MetaLayer.toDateString(new Date(t.earliestDate)),n=MetaLayer.toDateString(new Date(t.latestDate));
for(i=0;i<e.length;i++)e[i].start>=o&&(void 0==e[i].end&&e[i].start<=n||e[i].end<=n)&&a.push(e[i]);
return a},updateDateRangeInput:function(e,t){var a=function(e){var t="0"+(e.getMonth()+1),a="0"+e.getDate();
return e.getFullYear()+"-"+t.substring(t.length-2,t.length)+"-"+a.substring(a.length-2,a.length);
};if(void 0!=this.chartDefinition.dateRangeInput){if(e>t){var o=e;e=t,t=o}this.dashboard.setParameter(this.startDateParameter,a(e)),
this.dashboard.setParameter(this.endDateParameter,a(t)),this.updateTimeplot=!1,this.dashboard.update(this.chartDefinition.dateRangeInput),
this.dashboard.fireChange(this.startDateParameter,a(e)),this.updateTimeplot=!0}}});
});