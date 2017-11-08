Timeline.GregorianEtherPainter=function(e){this._params=e,this._theme=e.theme,this._unit=e.unit,
this._multiple="multiple"in e?e.multiple:1},Timeline.GregorianEtherPainter.prototype.initialize=function(e,t){
this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),
this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&void 0!=this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],a="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,a),
this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer);
},Timeline.GregorianEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t);
},Timeline.GregorianEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),
this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),
this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),
this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),
this._lineLayer.style.display="none";var e=this._band.getMinDate(),t=this._band.getMaxDate(),i=this._band.getTimeZone(),a=this._band.getLabeller();
SimileAjax.DateTime.roundDownToInterval(e,this._unit,i,this._multiple,this._theme.firstDayOfWeek);
for(var r=this,n=function(e){for(var t=0;t<r._multiple;t++)SimileAjax.DateTime.incrementByInterval(e,r._unit);
};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,a,this._unit,this._markerLayer,this._lineLayer),
n(e);this._markerLayer.style.display="block",this._lineLayer.style.display="block";
},Timeline.GregorianEtherPainter.prototype.softPaint=function(){},Timeline.GregorianEtherPainter.prototype.zoom=function(e){
0!=e&&(this._unit+=e)},Timeline.HotZoneGregorianEtherPainter=function(e){this._params=e,
this._theme=e.theme,this._zones=[{startTime:Number.NEGATIVE_INFINITY,endTime:Number.POSITIVE_INFINITY,
unit:e.unit,multiple:1}];for(var t=0;t<e.zones.length;t++)for(var i=e.zones[t],a=SimileAjax.DateTime.parseGregorianDateTime(i.start).getTime(),r=SimileAjax.DateTime.parseGregorianDateTime(i.end).getTime(),n=0;n<this._zones.length&&r>a;n++){
var h=this._zones[n];a<h.endTime&&(a>h.startTime&&(this._zones.splice(n,0,{startTime:h.startTime,
endTime:a,unit:h.unit,multiple:h.multiple}),n++,h.startTime=a),r<h.endTime?(this._zones.splice(n,0,{
startTime:a,endTime:r,unit:i.unit,multiple:i.multiple?i.multiple:1}),n++,h.startTime=r,
a=r):(h.multiple=i.multiple,h.unit=i.unit,a=h.endTime))}},Timeline.HotZoneGregorianEtherPainter.prototype.initialize=function(e,t){
this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),
this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&void 0!=this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],a="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,a),
this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer);
},Timeline.HotZoneGregorianEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t);
},Timeline.HotZoneGregorianEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),
this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),
this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),
this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),
this._lineLayer.style.display="none";for(var e=this._band.getMinDate(),t=this._band.getMaxDate(),i=this._band.getTimeZone(),a=this._band.getLabeller(),r=function(e,t){
for(var i=0;i<t.multiple;i++)SimileAjax.DateTime.incrementByInterval(e,t.unit)},n=0;n<this._zones.length&&!(e.getTime()<this._zones[n].endTime);)n++;
for(var h=this._zones.length-1;h>=0&&!(t.getTime()>this._zones[h].startTime);)h--;
for(var s=n;h>=s;s++){var l=this._zones[s],m=new Date(Math.max(e.getTime(),l.startTime)),o=new Date(Math.min(t.getTime(),l.endTime));
for(SimileAjax.DateTime.roundDownToInterval(m,l.unit,i,l.multiple,this._theme.firstDayOfWeek),
SimileAjax.DateTime.roundUpToInterval(o,l.unit,i,l.multiple,this._theme.firstDayOfWeek);m.getTime()<o.getTime();)this._intervalMarkerLayout.createIntervalMarker(m,a,l.unit,this._markerLayer,this._lineLayer),
r(m,l)}this._markerLayer.style.display="block",this._lineLayer.style.display="block";
},Timeline.HotZoneGregorianEtherPainter.prototype.softPaint=function(){},Timeline.HotZoneGregorianEtherPainter.prototype.zoom=function(e){
if(0!=e)for(var t=0;t<this._zones.length;++t)this._zones[t]&&(this._zones[t].unit+=e);
},Timeline.YearCountEtherPainter=function(e){this._params=e,this._theme=e.theme,this._startDate=SimileAjax.DateTime.parseGregorianDateTime(e.startDate),
this._multiple="multiple"in e?e.multiple:1},Timeline.YearCountEtherPainter.prototype.initialize=function(e,t){
this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),
this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],a="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,a),
this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer);
},Timeline.YearCountEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t);
},Timeline.YearCountEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),
this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),
this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),
this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),
this._lineLayer.style.display="none";var e=new Date(this._startDate.getTime()),t=this._band.getMaxDate(),i=this._band.getMinDate().getUTCFullYear()-this._startDate.getUTCFullYear();
e.setUTCFullYear(this._band.getMinDate().getUTCFullYear()-i%this._multiple);for(var a=this,r=function(e){
for(var t=0;t<a._multiple;t++)SimileAjax.DateTime.incrementByInterval(e,SimileAjax.DateTime.YEAR);
},n={labelInterval:function(e,t){var i=e.getUTCFullYear()-a._startDate.getUTCFullYear();
return{text:i,emphasized:0==i}}};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,n,SimileAjax.DateTime.YEAR,this._markerLayer,this._lineLayer),
r(e);this._markerLayer.style.display="block",this._lineLayer.style.display="block";
},Timeline.YearCountEtherPainter.prototype.softPaint=function(){},Timeline.QuarterlyEtherPainter=function(e){
this._params=e,this._theme=e.theme,this._startDate=SimileAjax.DateTime.parseGregorianDateTime(e.startDate);
},Timeline.QuarterlyEtherPainter.prototype.initialize=function(e,t){this._band=e,
this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),
this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],a="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,a),
this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer);
},Timeline.QuarterlyEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t);
},Timeline.QuarterlyEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),
this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),
this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),
this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),
this._lineLayer.style.display="none";var e=new Date(0),t=this._band.getMaxDate();e.setUTCFullYear(Math.max(this._startDate.getUTCFullYear(),this._band.getMinDate().getUTCFullYear())),
e.setUTCMonth(this._startDate.getUTCMonth());for(var i=this,a=function(e){e.setUTCMonth(e.getUTCMonth()+3);
},r={labelInterval:function(e,t){var a=(4+(e.getUTCMonth()-i._startDate.getUTCMonth())/3)%4;
return 0!=a?{text:"Q"+(a+1),emphasized:!1}:{text:"Y"+(e.getUTCFullYear()-i._startDate.getUTCFullYear()+1),
emphasized:!0}}};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,r,SimileAjax.DateTime.YEAR,this._markerLayer,this._lineLayer),
a(e);this._markerLayer.style.display="block",this._lineLayer.style.display="block";
},Timeline.QuarterlyEtherPainter.prototype.softPaint=function(){},Timeline.EtherIntervalMarkerLayout=function(e,t,i,a,r){
var n=e.isHorizontal();n?"Top"==a?this.positionDiv=function(e,t){e.style.left=t+"px",
e.style.top="0px"}:this.positionDiv=function(e,t){e.style.left=t+"px",e.style.bottom="0px";
}:"Left"==a?this.positionDiv=function(e,t){e.style.top=t+"px",e.style.left="0px"}:this.positionDiv=function(e,t){
e.style.top=t+"px",e.style.right="0px"};var h=i.ether.interval.marker,s=i.ether.interval.line,l=i.ether.interval.weekend,m=(n?"h":"v")+a,o=(h[m+"Styler"],
h[m+"EmphasizedStyler"],SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY]);
this.createIntervalMarker=function(a,h,m,_,y){var g=Math.round(t.dateToPixelOffset(a));
if(r&&m!=SimileAjax.DateTime.WEEK){var u=e.getDocument().createElement("div");u.className="timeline-ether-lines",
s.opacity<100&&SimileAjax.Graphics.setOpacity(u,s.opacity),n?u.style.left=g+"px":u.style.top=g+"px",
y.appendChild(u)}if(m==SimileAjax.DateTime.WEEK){var p=i.firstDayOfWeek,v=new Date(a.getTime()+(6-p-7)*o),d=new Date(v.getTime()+2*o),L=Math.round(t.dateToPixelOffset(v)),T=Math.round(t.dateToPixelOffset(d)),c=Math.max(1,T-L),D=e.getDocument().createElement("div");
D.className="timeline-ether-weekends",l.opacity<100&&SimileAjax.Graphics.setOpacity(D,l.opacity),
n?(D.style.left=L+"px",D.style.width=c+"px"):(D.style.top=L+"px",D.style.height=c+"px"),
y.appendChild(D)}var b=h.labelInterval(a,m),k=e.getDocument().createElement("div");
return k.innerHTML=b.text,k.className="timeline-date-label",b.emphasized&&(k.className+=" timeline-date-label-em"),
this.positionDiv(k,g),_.appendChild(k),k}},Timeline.EtherHighlight=function(e,t,i,a){
var r=e.isHorizontal();this._highlightDiv=null,this._createHighlightDiv=function(){
if(null==this._highlightDiv){this._highlightDiv=e.getDocument().createElement("div"),
this._highlightDiv.setAttribute("name","ether-highlight"),this._highlightDiv.className="timeline-ether-highlight";
var t=i.ether.highlightOpacity;100>t&&SimileAjax.Graphics.setOpacity(this._highlightDiv,t),
a.appendChild(this._highlightDiv)}},this.position=function(e,i){this._createHighlightDiv();
var a=Math.round(t.dateToPixelOffset(e)),n=Math.round(t.dateToPixelOffset(i)),h=Math.max(n-a,3);
r?(this._highlightDiv.style.left=a+"px",this._highlightDiv.style.width=h+"px",this._highlightDiv.style.height=t.getViewWidth()-4+"px"):(this._highlightDiv.style.top=a+"px",
this._highlightDiv.style.height=h+"px",this._highlightDiv.style.width=t.getViewWidth()-4+"px");
}};