define(["../../lib/jquery"],function(e){return{name:"trendArrow",label:"Trend Arrows",
defaults:{good:!0,thresholds:{up:0,down:0},includeValue:!1,valueFormat:function(e,a,n,l){
return e||""}},init:function(){},implementation:function(a,n,l){var u=l.good?"good":"bad",o="number"==typeof n.value||"string"==typeof n.value&&"NaN"!==Number(n.value).toString(),d=o?n.value>l.thresholds.up?"up":n.value<l.thresholds.down?"down":"neutral":"invalid",t=(e(l.layout),
e(a).empty());l.includeValue&&t.append(e("<div class='value'></div>").append(l.valueFormat(n.value,n.colFormat,n,l))),
t.append(e(l.layout)).find("."+l.cssClass).addClass(d).addClass(u)}}});