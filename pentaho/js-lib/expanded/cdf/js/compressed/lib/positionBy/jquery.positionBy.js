!function(i){var t=function(i,t,o,n){this.x1=i,this.x2=o,this.y1=t,this.y2=n};t.prototype.contains=function(i){
return this.x1<=i.x1&&i.x2<=this.x2&&this.y1<=i.y1&&i.y2<=this.y2},t.prototype.transform=function(i,o){
return new t(this.x1+i,this.y1+o,this.x2+i,this.y2+o)},i.fn.positionBy=function(o){
new Date;if(0==this.length)return this;var o=i.extend({target:null,targetPos:null,
elementPos:null,x:null,y:null,positions:null,addClass:!1,force:!1,container:window,
hideAfterPosition:!1},o);if(null!=o.x)var n=o.x,s=o.y,e=0,r=0;else var l=i(i(o.target)[0]),e=l.outerWidth(),r=l.outerHeight(),a=l.offset(),n=a.left,s=a.top;
var p=n+e,w=s+r;return this.each(function(){var e=i(this);e.is(":visible")||e.css({
left:-3e3,top:-3e3}).show();var r=e.outerWidth(),l=e.outerHeight(),a=[],y=[];if(a[0]=new t(p,s,p+r,s+l),
y[0]=[1,7,4],a[1]=new t(p,w-l,p+r,w),y[1]=[0,6,4],a[2]=new t(p,w,p+r,w+l),y[2]=[1,3,10],
a[3]=new t(p-r,w,p,w+l),y[3]=[1,6,10],a[4]=new t(n,w,n+r,w+l),y[4]=[1,6,9],a[5]=new t(n-r,w,n,w+l),
y[5]=[6,4,9],a[6]=new t(n-r,w-l,n,w),y[6]=[7,1,4],a[7]=new t(n-r,s,n,s+l),y[7]=[6,0,4],
a[8]=new t(n-r,s-l,n,s),y[8]=[7,9,4],a[9]=new t(n,s-l,n+r,s),y[9]=[0,7,4],a[10]=new t(p-r,s-l,p,s),
y[10]=[0,7,3],a[11]=new t(p,s-l,p+r,s),y[11]=[0,10,3],a[12]=new t(p-r,s,p,s+l),y[12]=[13,7,10],
a[13]=new t(p-r,w-l,p,w),y[13]=[12,6,3],a[14]=new t(n,w-l,n+r,w),y[14]=[15,1,4],a[15]=new t(n,s,n+r,s+l),
y[15]=[14,0,9],null!==o.positions)var f=o.positions[0];else if(null!=o.targetPos&&null!=o.elementPos){
var f=[];f[0]=[],f[0][0]=15,f[0][1]=7,f[0][2]=8,f[0][3]=9,f[1]=[],f[1][0]=0,f[1][1]=12,
f[1][2]=10,f[1][3]=11,f[2]=[],f[2][0]=2,f[2][1]=3,f[2][2]=13,f[2][3]=1,f[3]=[],f[3][0]=4,
f[3][1]=5,f[3][2]=6,f[3][3]=14;var f=f[o.targetPos][o.elementPos]}var h=a[f];if(!o.force){
$window=i(window);var u,c=$window.scrollLeft(),d=$window.scrollTop(),v=new t(c,d,c+$window.width(),d+$window.height());
u=o.positions?o.positions:[f];for(var B=[];u.length>0;){var x=u.shift();if(!B[x]){
if(B[x]=!0,v.contains(a[x])){h=a[x];break}null===o.positions&&(u=jQuery.merge(u,y[x]));
}}}e.parents().each(function(){var t=i(this);if("static"!=t.css("position")){var o=t.offset();
return h=h.transform(-o.left,-o.top),!1}});var g={left:h.x1,top:h.y1};o.hideAfterPosition&&(g.display="none"),
e.css(g),o.addClass&&e.removeClass("positionBy0 positionBy1 positionBy2 positionBy3 positionBy4 positionBy5 positionBy6 positionBy7 positionBy8 positionBy9 positionBy10 positionBy11 positionBy12 positionBy13 positionBy14 positionBy15").addClass("positionBy"+x);
})}}(jQuery);