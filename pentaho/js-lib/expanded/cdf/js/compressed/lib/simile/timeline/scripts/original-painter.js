Timeline.OriginalEventPainter=function(t){this._params=t,this._onSelectListeners=[],
this._filterMatcher=null,this._highlightMatcher=null,this._frc=null,this._eventIdToElmt={};
},Timeline.OriginalEventPainter.prototype.initialize=function(t,e){this._band=t,this._timeline=e,
this._backLayer=null,this._eventLayer=null,this._lineLayer=null,this._highlightLayer=null,
this._eventIdToElmt=null},Timeline.OriginalEventPainter.prototype.addOnSelectListener=function(t){
this._onSelectListeners.push(t)},Timeline.OriginalEventPainter.prototype.removeOnSelectListener=function(t){
for(var e=0;e<this._onSelectListeners.length;e++)if(this._onSelectListeners[e]==t){
this._onSelectListeners.splice(e,1);break}},Timeline.OriginalEventPainter.prototype.getFilterMatcher=function(){
return this._filterMatcher},Timeline.OriginalEventPainter.prototype.setFilterMatcher=function(t){
this._filterMatcher=t},Timeline.OriginalEventPainter.prototype.getHighlightMatcher=function(){
return this._highlightMatcher},Timeline.OriginalEventPainter.prototype.setHighlightMatcher=function(t){
this._highlightMatcher=t},Timeline.OriginalEventPainter.prototype.paint=function(){
var t=this._band.getEventSource();if(null!=t){this._eventIdToElmt={},this._prepareForPainting();
for(var e=this._params.theme.event,i=Math.max(e.track.height,e.tape.height+this._frc.getLineHeight()),n={
trackOffset:e.track.gap,trackHeight:i,trackGap:e.track.gap,trackIncrement:i+e.track.gap,
icon:e.instant.icon,iconWidth:e.instant.iconWidth,iconHeight:e.instant.iconHeight,
labelWidth:e.label.width},a=this._band.getMinDate(),r=this._band.getMaxDate(),l=null!=this._filterMatcher?this._filterMatcher:function(t){
return!0},h=null!=this._highlightMatcher?this._highlightMatcher:function(t){return-1;
},s=t.getEventReverseIterator(a,r);s.hasNext();){var o=s.next();l(o)&&this.paintEvent(o,n,this._params.theme,h(o));
}this._highlightLayer.style.display="block",this._lineLayer.style.display="block",
this._eventLayer.style.display="block"}},Timeline.OriginalEventPainter.prototype.softPaint=function(){},
Timeline.OriginalEventPainter.prototype._prepareForPainting=function(){var t=this._band;
if(null==this._backLayer){this._backLayer=this._band.createLayerDiv(0,"timeline-band-events"),
this._backLayer.style.visibility="hidden";var e=document.createElement("span");e.className="timeline-event-label",
this._backLayer.appendChild(e),this._frc=SimileAjax.Graphics.getFontRenderingContext(e);
}this._frc.update(),this._tracks=[],null!=this._highlightLayer&&t.removeLayerDiv(this._highlightLayer),
this._highlightLayer=t.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",
null!=this._lineLayer&&t.removeLayerDiv(this._lineLayer),this._lineLayer=t.createLayerDiv(110,"timeline-band-lines"),
this._lineLayer.style.display="none",null!=this._eventLayer&&t.removeLayerDiv(this._eventLayer),
this._eventLayer=t.createLayerDiv(115,"timeline-band-events"),this._eventLayer.style.display="none";
},Timeline.OriginalEventPainter.prototype.paintEvent=function(t,e,i,n){t.isInstant()?this.paintInstantEvent(t,e,i,n):this.paintDurationEvent(t,e,i,n);
},Timeline.OriginalEventPainter.prototype.paintInstantEvent=function(t,e,i,n){t.isImprecise()?this.paintImpreciseInstantEvent(t,e,i,n):this.paintPreciseInstantEvent(t,e,i,n);
},Timeline.OriginalEventPainter.prototype.paintDurationEvent=function(t,e,i,n){t.isImprecise()?this.paintImpreciseDurationEvent(t,e,i,n):this.paintPreciseDurationEvent(t,e,i,n);
},Timeline.OriginalEventPainter.prototype.paintPreciseInstantEvent=function(t,e,i,n){
var a=(this._timeline.getDocument(),t.getText()),r=t.getStart(),l=Math.round(this._band.dateToPixelOffset(r)),h=Math.round(l+e.iconWidth/2),s=Math.round(l-e.iconWidth/2),o=this._frc.computeSize(a),c=h+i.event.label.offsetFromLine,p=c+o.width,g=p,m=this._findFreeTrack(g),v=Math.round(e.trackOffset+m*e.trackIncrement+e.trackHeight/2-o.height/2),d=this._paintEventIcon(t,m,s,e,i),u=this._paintEventLabel(t,a,c,v,o.width,o.height,i),_=this,f=function(e,i,n){
return _._onClickInstantEvent(d.elmt,i,t)};SimileAjax.DOM.registerEvent(d.elmt,"mousedown",f),
SimileAjax.DOM.registerEvent(u.elmt,"mousedown",f),this._createHighlightDiv(n,d,i),
this._eventIdToElmt[t.getID()]=d.elmt,this._tracks[m]=s},Timeline.OriginalEventPainter.prototype.paintImpreciseInstantEvent=function(t,e,i,n){
var a=(this._timeline.getDocument(),t.getText()),r=t.getStart(),l=t.getEnd(),h=Math.round(this._band.dateToPixelOffset(r)),s=Math.round(this._band.dateToPixelOffset(l)),o=Math.round(h+e.iconWidth/2),c=Math.round(h-e.iconWidth/2),p=this._frc.computeSize(a),g=o+i.event.label.offsetFromLine,m=g+p.width,v=Math.max(m,s),d=this._findFreeTrack(v),u=Math.round(e.trackOffset+d*e.trackIncrement+e.trackHeight/2-p.height/2),_=this._paintEventIcon(t,d,c,e,i),f=this._paintEventLabel(t,a,g,u,p.width,p.height,i),y=this._paintEventTape(t,d,h,s,i.event.instant.impreciseColor,i.event.instant.impreciseOpacity,e,i),E=this,O=function(e,i,n){
return E._onClickInstantEvent(_.elmt,i,t)};SimileAjax.DOM.registerEvent(_.elmt,"mousedown",O),
SimileAjax.DOM.registerEvent(y.elmt,"mousedown",O),SimileAjax.DOM.registerEvent(f.elmt,"mousedown",O),
this._createHighlightDiv(n,_,i),this._eventIdToElmt[t.getID()]=_.elmt,this._tracks[d]=c;
},Timeline.OriginalEventPainter.prototype.paintPreciseDurationEvent=function(t,e,i,n){
var a=(this._timeline.getDocument(),t.getText()),r=t.getStart(),l=t.getEnd(),h=Math.round(this._band.dateToPixelOffset(r)),s=Math.round(this._band.dateToPixelOffset(l)),o=this._frc.computeSize(a),c=h,p=c+o.width,g=Math.max(p,s),m=this._findFreeTrack(g),v=Math.round(e.trackOffset+m*e.trackIncrement+i.event.tape.height),d=t.getColor();
d=null!=d?d:i.event.duration.color;var u=this._paintEventTape(t,m,h,s,d,100,e,i),_=this._paintEventLabel(t,a,c,v,o.width,o.height,i),f=this,y=function(e,i,n){
return f._onClickDurationEvent(u.elmt,i,t)};SimileAjax.DOM.registerEvent(u.elmt,"mousedown",y),
SimileAjax.DOM.registerEvent(_.elmt,"mousedown",y),this._createHighlightDiv(n,u,i),
this._eventIdToElmt[t.getID()]=u.elmt,this._tracks[m]=h},Timeline.OriginalEventPainter.prototype.paintImpreciseDurationEvent=function(t,e,i,n){
var a=(this._timeline.getDocument(),t.getText()),r=t.getStart(),l=t.getLatestStart(),h=t.getEnd(),s=t.getEarliestEnd(),o=Math.round(this._band.dateToPixelOffset(r)),c=Math.round(this._band.dateToPixelOffset(l)),p=Math.round(this._band.dateToPixelOffset(h)),g=Math.round(this._band.dateToPixelOffset(s)),m=this._frc.computeSize(a),v=c,d=v+m.width,u=Math.max(d,p),_=this._findFreeTrack(u),f=Math.round(e.trackOffset+_*e.trackIncrement+i.event.tape.height),y=t.getColor();
y=null!=y?y:i.event.duration.color;var E=(this._paintEventTape(t,_,o,p,i.event.duration.impreciseColor,i.event.duration.impreciseOpacity,e,i),
this._paintEventTape(t,_,c,g,y,100,e,i)),O=this._paintEventLabel(t,a,v,f,m.width,m.height,i),b=this,T=function(e,i,n){
return b._onClickDurationEvent(E.elmt,i,t)};SimileAjax.DOM.registerEvent(E.elmt,"mousedown",T),
SimileAjax.DOM.registerEvent(O.elmt,"mousedown",T),this._createHighlightDiv(n,E,i),
this._eventIdToElmt[t.getID()]=E.elmt,this._tracks[_]=o},Timeline.OriginalEventPainter.prototype._findFreeTrack=function(t){
for(var e=0;e<this._tracks.length;e++){var i=this._tracks[e];if(i>t)break}return e;
},Timeline.OriginalEventPainter.prototype._paintEventIcon=function(t,e,i,n,a){var r=t.getIcon();
r=null!=r?r:n.icon;var l=n.trackOffset+e*n.trackIncrement+n.trackHeight/2,h=Math.round(l-n.iconHeight/2),s=SimileAjax.Graphics.createTranslucentImage(r),o=this._timeline.getDocument().createElement("div");
return o.className="timeline-event-icon",o.style.left=i+"px",o.style.top=h+"px",o.appendChild(s),
null!=t._title&&(o.title=t._title),this._eventLayer.appendChild(o),{left:i,top:h,
width:n.iconWidth,height:n.iconHeight,elmt:o}},Timeline.OriginalEventPainter.prototype._paintEventLabel=function(t,e,i,n,a,r,l){
var h=this._timeline.getDocument(),s=h.createElement("div");s.className="timeline-event-label",
s.style.left=i+"px",s.style.width=a+"px",s.style.top=n+"px",s.innerHTML=e,null!=t._title&&(s.title=t._title);
var o=t.getTextColor();null==o&&(o=t.getColor()),null!=o&&(s.style.color=o);var c=t.getClassName();
return c&&(s.className+=" "+c),this._eventLayer.appendChild(s),{left:i,top:n,width:a,
height:r,elmt:s}},Timeline.OriginalEventPainter.prototype._paintEventTape=function(t,e,i,n,a,r,l,h){
var s=n-i,o=h.event.tape.height,c=l.trackOffset+e*l.trackIncrement,p=this._timeline.getDocument().createElement("div");
return p.className="timeline-event-tape",p.style.left=i+"px",p.style.width=s+"px",
p.style.top=c+"px",null!=t._title&&(p.title=t._title),SimileAjax.Graphics.setOpacity(p,r),
this._eventLayer.appendChild(p),{left:i,top:c,width:s,height:o,elmt:p}},Timeline.OriginalEventPainter.prototype._createHighlightDiv=function(t,e,i){
if(t>=0){var n=this._timeline.getDocument(),a=i.event,r=(a.highlightColors[Math.min(t,a.highlightColors.length-1)],
n.createElement("div"));r.style.position="absolute",r.style.overflow="hidden",r.style.left=e.left-2+"px",
r.style.width=e.width+4+"px",r.style.top=e.top-2+"px",r.style.height=e.height+4+"px",
this._highlightLayer.appendChild(r)}},Timeline.OriginalEventPainter.prototype._onClickInstantEvent=function(t,e,i){
var n=SimileAjax.DOM.getPageCoordinates(t);return this._showBubble(n.left+Math.ceil(t.offsetWidth/2),n.top+Math.ceil(t.offsetHeight/2),i),
this._fireOnSelect(i.getID()),e.cancelBubble=!0,SimileAjax.DOM.cancelEvent(e),!1},
Timeline.OriginalEventPainter.prototype._onClickDurationEvent=function(t,e,i){if("pageX"in e)var n=e.pageX,a=e.pageY;else var r=SimileAjax.DOM.getPageCoordinates(t),n=e.offsetX+r.left,a=e.offsetY+r.top;
return this._showBubble(n,a,i),this._fireOnSelect(i.getID()),e.cancelBubble=!0,SimileAjax.DOM.cancelEvent(e),
!1},Timeline.OriginalEventPainter.prototype.showBubble=function(t){var e=this._eventIdToElmt[t.getID()];
if(e){var i=SimileAjax.DOM.getPageCoordinates(e);this._showBubble(i.left+e.offsetWidth/2,i.top+e.offsetHeight/2,t);
}},Timeline.OriginalEventPainter.prototype._showBubble=function(t,e,i){var n=document.createElement("div");
i.fillInfoBubble(n,this._params.theme,this._band.getLabeller()),SimileAjax.WindowManager.cancelPopups(),
SimileAjax.Graphics.createBubbleForContentAndPoint(n,t,e,this._params.theme.event.bubble.width);
},Timeline.OriginalEventPainter.prototype._fireOnSelect=function(t){for(var e=0;e<this._onSelectListeners.length;e++)this._onSelectListeners[e](t);
};