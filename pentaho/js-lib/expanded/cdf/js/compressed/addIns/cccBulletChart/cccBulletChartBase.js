define(["../../lib/CCC/pvc","../../lib/jquery"],function(t,e){return{name:"cccBulletChart",
label:"CCC Bullet Chart",defaults:{chartOptions:{height:40,animate:!1,orientation:"horizontal",
bulletSize:16,bulletSpacing:150,bulletMargin:5,bulletRanges:[30,80,100],extensionPoints:{
bulletMarker_shape:"triangle",bulletTitle_textStyle:"green",bulletMeasure_fillStyle:"black",
bulletRuleLabel_font:"8px sans-serif",bulletRule_height:5}},cssClass:"cccBulletChartContainer",
layout:"<span></span>"},init:function(){},sort:function(){},implementation:function(l,a,n){
var i=n.chartOptions,s=e(n.layout).addClass(n.cssClass),r=e(l).empty().append(s),u=a.value.split(",");
i.canvas=s.get(0),i.width=i.width||r.width(),i.bulletMeasures=[u[0]],i.bulletMarkers=[u[1]];
var o=new t.BulletChart(i);o.setData(this.getData(u),{}),o.render()},getData:function(t){
for(var e={resultset:[t],metadata:[]},l=0,a=t.length;a>l;l++)e.metadata.push({colIndex:l,
colType:"String",colName:""});return e}}});