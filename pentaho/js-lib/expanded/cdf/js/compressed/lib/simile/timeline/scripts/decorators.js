Timeline.SpanHighlightDecorator=function(t){this._unit="unit"in t?t.unit:SimileAjax.NativeDateUnit,
this._startDate="string"==typeof t.startDate?this._unit.parseFromObject(t.startDate):t.startDate,
this._endDate="string"==typeof t.endDate?this._unit.parseFromObject(t.endDate):t.endDate,
this._startLabel=t.startLabel,this._endLabel=t.endLabel,this._color=t.color,this._cssClass="cssClass"in t?t.cssClass:null,
this._opacity="opacity"in t?t.opacity:100},Timeline.SpanHighlightDecorator.prototype.initialize=function(t,i){
this._band=t,this._timeline=i,this._layerDiv=null},Timeline.SpanHighlightDecorator.prototype.paint=function(){
null!=this._layerDiv&&this._band.removeLayerDiv(this._layerDiv),this._layerDiv=this._band.createLayerDiv(10),
this._layerDiv.setAttribute("name","span-highlight-decorator"),this._layerDiv.style.display="none";
var t=this._band.getMinDate(),i=this._band.getMaxDate();if(this._unit.compare(this._startDate,i)<0&&this._unit.compare(this._endDate,t)>0){
t=this._unit.later(t,this._startDate),i=this._unit.earlier(i,this._endDate);var e=this._band.dateToPixelOffset(t),s=this._band.dateToPixelOffset(i),a=this._timeline.getDocument(),l=function(){
var t=a.createElement("table");return t.insertRow(0).insertCell(0),t},h=a.createElement("div");
h.className="timeline-highlight-decorator",this._cssClass&&(h.className+=" "+this._cssClass),
this._opacity<100&&SimileAjax.Graphics.setOpacity(h,this._opacity),this._layerDiv.appendChild(h);
var n=l();n.className="timeline-highlight-label timeline-highlight-label-start";var r=n.rows[0].cells[0];
r.innerHTML=this._startLabel,this._cssClass&&(r.className="label_"+this._cssClass),
this._layerDiv.appendChild(n);var o=l();o.className="timeline-highlight-label timeline-highlight-label-end";
var _=o.rows[0].cells[0];_.innerHTML=this._endLabel,this._cssClass&&(_.className="label_"+this._cssClass),
this._layerDiv.appendChild(o),this._timeline.isHorizontal()?(h.style.left=e+"px",
h.style.width=s-e+"px",n.style.right=this._band.getTotalViewLength()-e+"px",n.style.width=this._startLabel.length+"em",
o.style.left=s+"px",o.style.width=this._endLabel.length+"em"):(h.style.top=e+"px",
h.style.height=s-e+"px",n.style.bottom=e+"px",n.style.height="1.5px",o.style.top=s+"px",
o.style.height="1.5px")}this._layerDiv.style.display="block"},Timeline.SpanHighlightDecorator.prototype.softPaint=function(){},
Timeline.PointHighlightDecorator=function(t){this._unit="unit"in t?t.unit:SimileAjax.NativeDateUnit,
this._date="string"==typeof t.date?this._unit.parseFromObject(t.date):t.date,this._width="width"in t?t.width:10,
this._color=t.color,this._cssClass="cssClass"in t?t.cssClass:"",this._opacity="opacity"in t?t.opacity:100;
},Timeline.PointHighlightDecorator.prototype.initialize=function(t,i){this._band=t,
this._timeline=i,this._layerDiv=null},Timeline.PointHighlightDecorator.prototype.paint=function(){
null!=this._layerDiv&&this._band.removeLayerDiv(this._layerDiv),this._layerDiv=this._band.createLayerDiv(10),
this._layerDiv.setAttribute("name","span-highlight-decorator"),this._layerDiv.style.display="none";
var t=this._band.getMinDate(),i=this._band.getMaxDate();if(this._unit.compare(this._date,i)<0&&this._unit.compare(this._date,t)>0){
var e=this._band.dateToPixelOffset(this._date),s=e-Math.round(this._width/2),a=this._timeline.getDocument(),l=a.createElement("div");
l.className="timeline-highlight-point-decorator",l.className+=" "+this._cssClass,
this._opacity<100&&SimileAjax.Graphics.setOpacity(l,this._opacity),this._layerDiv.appendChild(l),
this._timeline.isHorizontal()?l.style.left=s+"px":l.style.top=s+"px"}this._layerDiv.style.display="block";
},Timeline.PointHighlightDecorator.prototype.softPaint=function(){};