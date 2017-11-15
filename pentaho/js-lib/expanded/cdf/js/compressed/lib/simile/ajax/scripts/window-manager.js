SimileAjax.WindowManager={_initialized:!1,_listeners:[],_draggedElement:null,_draggedElementCallback:null,
_dropTargetHighlightElement:null,_lastCoords:null,_ghostCoords:null,_draggingMode:"",
_dragging:!1,_layers:[]},SimileAjax.WindowManager.initialize=function(){SimileAjax.WindowManager._initialized||(SimileAjax.DOM.registerEvent(document.body,"mousedown",SimileAjax.WindowManager._onBodyMouseDown),
SimileAjax.DOM.registerEvent(document.body,"mousemove",SimileAjax.WindowManager._onBodyMouseMove),
SimileAjax.DOM.registerEvent(document.body,"mouseup",SimileAjax.WindowManager._onBodyMouseUp),
SimileAjax.DOM.registerEvent(document,"keydown",SimileAjax.WindowManager._onBodyKeyDown),
SimileAjax.DOM.registerEvent(document,"keyup",SimileAjax.WindowManager._onBodyKeyUp),
SimileAjax.WindowManager._layers.push({index:0}),SimileAjax.WindowManager._historyListener={
onBeforeUndoSeveral:function(){},onAfterUndoSeveral:function(){},onBeforeUndo:function(){},
onAfterUndo:function(){},onBeforeRedoSeveral:function(){},onAfterRedoSeveral:function(){},
onBeforeRedo:function(){},onAfterRedo:function(){}},SimileAjax.History.addListener(SimileAjax.WindowManager._historyListener),
SimileAjax.WindowManager._initialized=!0)},SimileAjax.WindowManager.getBaseLayer=function(){
return SimileAjax.WindowManager.initialize(),SimileAjax.WindowManager._layers[0]},
SimileAjax.WindowManager.getHighestLayer=function(){return SimileAjax.WindowManager.initialize(),
SimileAjax.WindowManager._layers[SimileAjax.WindowManager._layers.length-1]},SimileAjax.WindowManager.registerEventWithObject=function(e,i,a,n,o){
SimileAjax.WindowManager.registerEvent(e,i,function(e,i,o){return a[n].call(a,e,i,o);
},o)},SimileAjax.WindowManager.registerEvent=function(e,i,a,n){null==n&&(n=SimileAjax.WindowManager.getHighestLayer());
var o=function(e,i,o){if(SimileAjax.WindowManager._canProcessEventAtLayer(n)){SimileAjax.WindowManager._popToLayer(n.index);
try{a(e,i,o)}catch(r){SimileAjax.Debug.exception(r)}}return SimileAjax.DOM.cancelEvent(i),
!1};SimileAjax.DOM.registerEvent(e,i,o)},SimileAjax.WindowManager.pushLayer=function(e,i,a){
var n={onPop:e,index:SimileAjax.WindowManager._layers.length,ephemeral:i,elmt:a};return SimileAjax.WindowManager._layers.push(n),
n},SimileAjax.WindowManager.popLayer=function(e){for(var i=1;i<SimileAjax.WindowManager._layers.length;i++)if(SimileAjax.WindowManager._layers[i]==e){
SimileAjax.WindowManager._popToLayer(i-1);break}},SimileAjax.WindowManager.popAllLayers=function(){
SimileAjax.WindowManager._popToLayer(0)},SimileAjax.WindowManager.registerForDragging=function(e,i,a){
SimileAjax.WindowManager.registerEvent(e,"mousedown",function(e,a,n){SimileAjax.WindowManager._handleMouseDown(e,a,i);
},a)},SimileAjax.WindowManager._popToLayer=function(e){for(;e+1<SimileAjax.WindowManager._layers.length;)try{
var i=SimileAjax.WindowManager._layers.pop();null!=i.onPop&&i.onPop()}catch(a){}},
SimileAjax.WindowManager._canProcessEventAtLayer=function(e){if(e.index==SimileAjax.WindowManager._layers.length-1)return!0;
for(var i=e.index+1;i<SimileAjax.WindowManager._layers.length;i++)if(!SimileAjax.WindowManager._layers[i].ephemeral)return!1;
return!0},SimileAjax.WindowManager.cancelPopups=function(e){for(var i=e?SimileAjax.DOM.getEventPageCoordinates(e):{
x:-1,y:-1},a=SimileAjax.WindowManager._layers.length-1;a>0&&SimileAjax.WindowManager._layers[a].ephemeral;){
var n=SimileAjax.WindowManager._layers[a];if(null!=n.elmt){var o=n.elmt,r=SimileAjax.DOM.getPageCoordinates(o);
if(i.x>=r.left&&i.x<r.left+o.offsetWidth&&i.y>=r.top&&i.y<r.top+o.offsetHeight)break;
}a--}SimileAjax.WindowManager._popToLayer(a)},SimileAjax.WindowManager._onBodyMouseDown=function(e,i,a){
"eventPhase"in i&&i.eventPhase!=i.BUBBLING_PHASE||SimileAjax.WindowManager.cancelPopups(i);
},SimileAjax.WindowManager._handleMouseDown=function(e,i,a){return SimileAjax.WindowManager._draggedElement=e,
SimileAjax.WindowManager._draggedElementCallback=a,SimileAjax.WindowManager._lastCoords={
x:i.clientX,y:i.clientY},SimileAjax.DOM.cancelEvent(i),!1},SimileAjax.WindowManager._onBodyKeyDown=function(e,i,a){
if(SimileAjax.WindowManager._dragging)if(27==i.keyCode)SimileAjax.WindowManager._cancelDragging();else if((17==i.keyCode||16==i.keyCode)&&"copy"!=SimileAjax.WindowManager._draggingMode){
SimileAjax.WindowManager._draggingMode="copy";var n=SimileAjax.Graphics.createTranslucentImage(SimileAjax.urlPrefix+"images/copy.png");
n.style.position="absolute",n.style.left=SimileAjax.WindowManager._ghostCoords.left-16+"px",
n.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",document.body.appendChild(n),
SimileAjax.WindowManager._draggingModeIndicatorElmt=n}},SimileAjax.WindowManager._onBodyKeyUp=function(e,i,a){
SimileAjax.WindowManager._dragging&&(17==i.keyCode||16==i.keyCode)&&(SimileAjax.WindowManager._draggingMode="",
null!=SimileAjax.WindowManager._draggingModeIndicatorElmt&&(document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt),
SimileAjax.WindowManager._draggingModeIndicatorElmt=null))},SimileAjax.WindowManager._onBodyMouseMove=function(e,i,a){
if(null!=SimileAjax.WindowManager._draggedElement){var n=SimileAjax.WindowManager._draggedElementCallback,o=SimileAjax.WindowManager._lastCoords,r=i.clientX-o.x,l=i.clientY-o.y;
if(SimileAjax.WindowManager._dragging)try{if(SimileAjax.WindowManager._lastCoords={
x:i.clientX,y:i.clientY},"onDragBy"in n&&n.onDragBy(r,l),"_ghostElmt"in n){var g=n._ghostElmt;
if(SimileAjax.WindowManager._ghostCoords.left+=r,SimileAjax.WindowManager._ghostCoords.top+=l,
g.style.left=SimileAjax.WindowManager._ghostCoords.left+"px",g.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",
null!=SimileAjax.WindowManager._draggingModeIndicatorElmt){var t=SimileAjax.WindowManager._draggingModeIndicatorElmt;
t.style.left=SimileAjax.WindowManager._ghostCoords.left-16+"px",t.style.top=SimileAjax.WindowManager._ghostCoords.top+"px";
}if("droppable"in n&&n.droppable){var d=SimileAjax.DOM.getEventPageCoordinates(i),a=SimileAjax.DOM.hittest(d.x,d.y,[SimileAjax.WindowManager._ghostElmt,SimileAjax.WindowManager._dropTargetHighlightElement]);
if(a=SimileAjax.WindowManager._findDropTarget(a),a!=SimileAjax.WindowManager._potentialDropTarget){
null!=SimileAjax.WindowManager._dropTargetHighlightElement&&(document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement),
SimileAjax.WindowManager._dropTargetHighlightElement=null,SimileAjax.WindowManager._potentialDropTarget=null);
var m=!1;if(null!=a&&("canDropOn"in n&&!n.canDropOn(a)||"canDrop"in a&&!a.canDrop(SimileAjax.WindowManager._draggedElement)||(m=!0)),
m){var x=4,M=SimileAjax.DOM.getPageCoordinates(a),s=document.createElement("div");
s.style.border=x+"px solid yellow",s.style.backgroundColor="yellow",s.style.position="absolute",
s.style.left=M.left+"px",s.style.top=M.top+"px",s.style.width=a.offsetWidth-2*x+"px",
s.style.height=a.offsetHeight-2*x+"px",SimileAjax.Graphics.setOpacity(s,30),document.body.appendChild(s),
SimileAjax.WindowManager._potentialDropTarget=a,SimileAjax.WindowManager._dropTargetHighlightElement=s;
}}}}}catch(A){SimileAjax.Debug.exception("WindowManager: Error handling mouse move",A),
SimileAjax.WindowManager._cancelDragging()}else if(Math.abs(r)>5||Math.abs(l)>5)try{
if("onDragStart"in n&&n.onDragStart(),"ghost"in n&&n.ghost){var S=SimileAjax.WindowManager._draggedElement;
SimileAjax.WindowManager._ghostCoords=SimileAjax.DOM.getPageCoordinates(S),SimileAjax.WindowManager._ghostCoords.left+=r,
SimileAjax.WindowManager._ghostCoords.top+=l;var g=S.cloneNode(!0);g.style.position="absolute",
g.style.left=SimileAjax.WindowManager._ghostCoords.left+"px",g.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",
g.style.zIndex=1e3,SimileAjax.Graphics.setOpacity(g,50),document.body.appendChild(g),
n._ghostElmt=g}SimileAjax.WindowManager._dragging=!0,SimileAjax.WindowManager._lastCoords={
x:i.clientX,y:i.clientY},document.body.focus()}catch(A){SimileAjax.Debug.exception("WindowManager: Error handling mouse down",A),
SimileAjax.WindowManager._cancelDragging()}return SimileAjax.DOM.cancelEvent(i),!1;
}},SimileAjax.WindowManager._onBodyMouseUp=function(e,i,a){if(null!=SimileAjax.WindowManager._draggedElement){
try{if(SimileAjax.WindowManager._dragging){var n=SimileAjax.WindowManager._draggedElementCallback;
if("onDragEnd"in n&&n.onDragEnd(),"droppable"in n&&n.droppable){var o=!1,a=SimileAjax.WindowManager._potentialDropTarget;
null!=a&&("canDropOn"in n&&!n.canDropOn(a)||"canDrop"in a&&!a.canDrop(SimileAjax.WindowManager._draggedElement)||("onDropOn"in n&&n.onDropOn(a),
a.ondrop(SimileAjax.WindowManager._draggedElement,SimileAjax.WindowManager._draggingMode),
o=!0))}}}finally{SimileAjax.WindowManager._cancelDragging()}return SimileAjax.DOM.cancelEvent(i),
!1}},SimileAjax.WindowManager._cancelDragging=function(){var e=SimileAjax.WindowManager._draggedElementCallback;
if("_ghostElmt"in e){var i=e._ghostElmt;document.body.removeChild(i),delete e._ghostElmt;
}null!=SimileAjax.WindowManager._dropTargetHighlightElement&&(document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement),
SimileAjax.WindowManager._dropTargetHighlightElement=null),null!=SimileAjax.WindowManager._draggingModeIndicatorElmt&&(document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt),
SimileAjax.WindowManager._draggingModeIndicatorElmt=null),SimileAjax.WindowManager._draggedElement=null,
SimileAjax.WindowManager._draggedElementCallback=null,SimileAjax.WindowManager._potentialDropTarget=null,
SimileAjax.WindowManager._dropTargetHighlightElement=null,SimileAjax.WindowManager._lastCoords=null,
SimileAjax.WindowManager._ghostCoords=null,SimileAjax.WindowManager._draggingMode="",
SimileAjax.WindowManager._dragging=!1},SimileAjax.WindowManager._findDropTarget=function(e){
for(;null!=e&&!("ondrop"in e&&"function"==typeof e.ondrop);)e=e.parentNode;return e;
};