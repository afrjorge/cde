SimileAjax.Graphics=new Object,SimileAjax.Graphics.pngIsTranslucent=!SimileAjax.Platform.browser.isIE||SimileAjax.Platform.browser.majorVersion>6,
SimileAjax.Graphics._createTranslucentImage1=function(e,t){var i=document.createElement("img");
return i.setAttribute("src",e),null!=t&&(i.style.verticalAlign=t),i},SimileAjax.Graphics._createTranslucentImage2=function(e,t){
var i=document.createElement("img");return i.style.width="1px",i.style.height="1px",
i.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image')",
i.style.verticalAlign=null!=t?t:"middle",i},SimileAjax.Graphics.createTranslucentImage=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImage1:SimileAjax.Graphics._createTranslucentImage2,
SimileAjax.Graphics._createTranslucentImageHTML1=function(e,t){return'<img src="'+e+'"'+(null!=t?' style="vertical-align: '+t+';"':"")+" />";
},SimileAjax.Graphics._createTranslucentImageHTML2=function(e,t){var i="width: 1px; height: 1px; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image');"+(null!=t?" vertical-align: "+t+";":"");
return"<img src='"+e+"' style=\""+i+'" />'},SimileAjax.Graphics.createTranslucentImageHTML=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImageHTML1:SimileAjax.Graphics._createTranslucentImageHTML2,
SimileAjax.Graphics.setOpacity=function(e,t){if(SimileAjax.Platform.browser.isIE)e.style.filter="progid:DXImageTransform.Microsoft.Alpha(Style=0,Opacity="+t+")";else{
var i=(t/100).toString();e.style.opacity=i,e.style.MozOpacity=i}},SimileAjax.Graphics._bubbleMargins={
top:33,bottom:42,left:33,right:40},SimileAjax.Graphics._arrowOffsets={top:0,bottom:9,
left:1,right:8},SimileAjax.Graphics._bubblePadding=15,SimileAjax.Graphics._bubblePointOffset=6,
SimileAjax.Graphics._halfArrowWidth=18,SimileAjax.Graphics.createBubbleForContentAndPoint=function(e,t,i,a,l){
"number"!=typeof a&&(a=300),e.style.position="absolute",e.style.left="-5000px",e.style.top="0px",
e.style.width=a+"px",document.body.appendChild(e),window.setTimeout(function(){var a=e.scrollWidth+10,r=e.scrollHeight+10,n=SimileAjax.Graphics.createBubbleForPoint(t,i,a,r,l);
document.body.removeChild(e),e.style.position="static",e.style.left="",e.style.top="",
e.style.width=a+"px",n.content.appendChild(e)},200)},SimileAjax.Graphics.createBubbleForPoint=function(e,t,i,a,l){
function r(){return"number"==typeof window.innerHeight?{w:window.innerWidth,h:window.innerHeight
}:document.documentElement&&document.documentElement.clientHeight?{w:document.documentElement.clientWidth,
h:document.documentElement.clientHeight}:document.body&&document.body.clientHeight?{
w:document.body.clientWidth,h:document.body.clientHeight}:void 0}var n=function(){
o._closed||(document.body.removeChild(o._div),o._doc=null,o._div=null,o._content=null,
o._closed=!0)},o={_closed:!1},s=r(),p=s.w,m=s.h,c=SimileAjax.Graphics._bubbleMargins;
i=parseInt(i,10),a=parseInt(a,10);var h=c.left+i+c.right,d=c.top+a+c.bottom,u=SimileAjax.Graphics.pngIsTranslucent,g=SimileAjax.urlPrefix,f=function(e,t,i,a){
e.style.position="absolute",e.style.width=i+"px",e.style.height=a+"px",u?e.style.background="url("+t+")":e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='crop')";
},b=document.createElement("div");b.style.width=h+"px",b.style.height=d+"px",b.style.position="absolute",
b.style.zIndex=1e3;var x=SimileAjax.WindowManager.pushLayer(n,!0,b);o._div=b,o.close=function(){
SimileAjax.WindowManager.popLayer(x)};var y=document.createElement("div");y.style.width="100%",
y.style.height="100%",y.style.position="relative",b.appendChild(y);var A=function(e,t,i,a,l){
var r=document.createElement("div");r.style.left=t+"px",r.style.top=i+"px",f(r,e,a,l),
y.appendChild(r)};A(g+"images/bubble-top-left.png",0,0,c.left,c.top),A(g+"images/bubble-top.png",c.left,0,i,c.top),
A(g+"images/bubble-top-right.png",c.left+i,0,c.right,c.top),A(g+"images/bubble-left.png",0,c.top,c.left,a),
A(g+"images/bubble-right.png",c.left+i,c.top,c.right,a),A(g+"images/bubble-bottom-left.png",0,c.top+a,c.left,c.bottom),
A(g+"images/bubble-bottom.png",c.left,c.top+a,i,c.bottom),A(g+"images/bubble-bottom-right.png",c.left+i,c.top+a,c.right,c.bottom);
var S=document.createElement("div");S.style.left=h-c.right+SimileAjax.Graphics._bubblePadding-16-2+"px",
S.style.top=c.top-SimileAjax.Graphics._bubblePadding+1+"px",S.style.cursor="pointer",
f(S,g+"images/close-button.png",16,16),SimileAjax.WindowManager.registerEventWithObject(S,"click",o,"close"),
y.appendChild(S);var j=document.createElement("div");return j.style.position="absolute",
j.style.left=c.left+"px",j.style.top=c.top+"px",j.style.width=i+"px",j.style.height=a+"px",
j.style.overflow="auto",j.style.background="white",y.appendChild(j),o.content=j,function(){
if(e-SimileAjax.Graphics._halfArrowWidth-SimileAjax.Graphics._bubblePadding>0&&e+SimileAjax.Graphics._halfArrowWidth+SimileAjax.Graphics._bubblePadding<p){
var r=e-Math.round(i/2)-c.left;if(r=p/2>e?Math.max(r,-(c.left-SimileAjax.Graphics._bubblePadding)):Math.min(r,p+(c.right-SimileAjax.Graphics._bubblePadding)-h),
l&&"top"==l||!l&&t-SimileAjax.Graphics._bubblePointOffset-d>0){var n=document.createElement("div");
return n.style.left=e-SimileAjax.Graphics._halfArrowWidth-r+"px",n.style.top=c.top+a+"px",
f(n,g+"images/bubble-bottom-arrow.png",37,c.bottom),y.appendChild(n),b.style.left=r+"px",
void(b.style.top=t-SimileAjax.Graphics._bubblePointOffset-d+SimileAjax.Graphics._arrowOffsets.bottom+"px");
}if(l&&"bottom"==l||!l&&t+SimileAjax.Graphics._bubblePointOffset+d<m){var n=document.createElement("div");
return n.style.left=e-SimileAjax.Graphics._halfArrowWidth-r+"px",n.style.top="0px",
f(n,g+"images/bubble-top-arrow.png",37,c.top),y.appendChild(n),b.style.left=r+"px",
void(b.style.top=t+SimileAjax.Graphics._bubblePointOffset-SimileAjax.Graphics._arrowOffsets.top+"px");
}}var o=t-Math.round(a/2)-c.top;if(o=m/2>t?Math.max(o,-(c.top-SimileAjax.Graphics._bubblePadding)):Math.min(o,m+(c.bottom-SimileAjax.Graphics._bubblePadding)-d),
l&&"left"==l||!l&&e-SimileAjax.Graphics._bubblePointOffset-h>0){var n=document.createElement("div");
n.style.left=c.left+i+"px",n.style.top=t-SimileAjax.Graphics._halfArrowWidth-o+"px",
f(n,g+"images/bubble-right-arrow.png",c.right,37),y.appendChild(n),b.style.left=e-SimileAjax.Graphics._bubblePointOffset-h+SimileAjax.Graphics._arrowOffsets.right+"px",
b.style.top=o+"px"}else if(l&&"right"==l||!l&&e-SimileAjax.Graphics._bubblePointOffset-h<p){
var n=document.createElement("div");n.style.left="0px",n.style.top=t-SimileAjax.Graphics._halfArrowWidth-o+"px",
f(n,g+"images/bubble-left-arrow.png",c.left,37),y.appendChild(n),b.style.left=e+SimileAjax.Graphics._bubblePointOffset-SimileAjax.Graphics._arrowOffsets.left+"px",
b.style.top=o+"px"}}(),document.body.appendChild(b),o},SimileAjax.Graphics.createMessageBubble=function(e){
var t=e.createElement("div");if(SimileAjax.Graphics.pngIsTranslucent){var i=e.createElement("div");
i.style.height="33px",i.style.background="url("+SimileAjax.urlPrefix+"images/message-top-left.png) top left no-repeat",
i.style.paddingLeft="44px",t.appendChild(i);var a=e.createElement("div");a.style.height="33px",
a.style.background="url("+SimileAjax.urlPrefix+"images/message-top-right.png) top right no-repeat",
i.appendChild(a);var l=e.createElement("div");l.style.background="url("+SimileAjax.urlPrefix+"images/message-left.png) top left repeat-y",
l.style.paddingLeft="44px",t.appendChild(l);var r=e.createElement("div");r.style.background="url("+SimileAjax.urlPrefix+"images/message-right.png) top right repeat-y",
r.style.paddingRight="44px",l.appendChild(r);var n=e.createElement("div");r.appendChild(n);
var o=e.createElement("div");o.style.height="55px",o.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-left.png) bottom left no-repeat",
o.style.paddingLeft="44px",t.appendChild(o);var s=e.createElement("div");s.style.height="55px",
s.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-right.png) bottom right no-repeat",
o.appendChild(s)}else{t.style.border="2px solid #7777AA",t.style.padding="20px",t.style.background="white",
SimileAjax.Graphics.setOpacity(t,90);var n=e.createElement("div");t.appendChild(n);
}return{containerDiv:t,contentDiv:n}},SimileAjax.Graphics.createAnimation=function(e,t,i,a,l){
return new SimileAjax.Graphics._Animation(e,t,i,a,l)},SimileAjax.Graphics._Animation=function(e,t,i,a,l){
this.f=e,this.cont="function"==typeof l?l:function(){},this.from=t,this.to=i,this.current=t,
this.duration=a,this.start=(new Date).getTime(),this.timePassed=0},SimileAjax.Graphics._Animation.prototype.run=function(){
var e=this;window.setTimeout(function(){e.step()},50)},SimileAjax.Graphics._Animation.prototype.step=function(){
this.timePassed+=50;var e=this.timePassed/this.duration,t=-Math.cos(e*Math.PI)/2+.5,i=t*(this.to-this.from)+this.from;
try{this.f(i,i-this.current)}catch(a){}this.current=i,this.timePassed<this.duration?this.run():(this.f(this.to,0),
this.cont())},SimileAjax.Graphics.createStructuredDataCopyButton=function(e,t,i,a){
var l=document.createElement("div");l.style.position="relative",l.style.display="inline",
l.style.width=t+"px",l.style.height=i+"px",l.style.overflow="hidden",l.style.margin="2px",
SimileAjax.Graphics.pngIsTranslucent?l.style.background="url("+e+") no-repeat":l.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image')";
var r;r=SimileAjax.Platform.browser.isIE?"filter:alpha(opacity=0)":"opacity: 0",l.innerHTML="<textarea rows='1' autocomplete='off' value='none' style='"+r+"' />";
var n=l.firstChild;return n.style.width=t+"px",n.style.height=i+"px",n.onmousedown=function(e){
e=e?e:event?event:null,2==e.button&&(n.value=a(),n.select())},l},SimileAjax.Graphics.getFontRenderingContext=function(e,t){
return new SimileAjax.Graphics._FontRenderingContext(e,t)},SimileAjax.Graphics._FontRenderingContext=function(e,t){
this._elmt=e,this._elmt.style.visibility="hidden","string"==typeof t?this._elmt.style.width=t:"number"==typeof t&&(this._elmt.style.width=t+"px");
},SimileAjax.Graphics._FontRenderingContext.prototype.dispose=function(){this._elmt=null;
},SimileAjax.Graphics._FontRenderingContext.prototype.update=function(){this._elmt.innerHTML="A",
this._lineHeight=this._elmt.offsetHeight},SimileAjax.Graphics._FontRenderingContext.prototype.computeSize=function(e){
return this._elmt.innerHTML=e,{width:this._elmt.offsetWidth,height:this._elmt.offsetHeight
}},SimileAjax.Graphics._FontRenderingContext.prototype.getLineHeight=function(){return this._lineHeight;
};