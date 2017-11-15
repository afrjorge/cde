OpenLayers.Util.OSM={},OpenLayers.Util.OSM.MISSING_TILE_URL="http://openstreetmap.org/openlayers/img/404.png",
OpenLayers.Util.OSM.originalOnImageLoadError=OpenLayers.Util.onImageLoadError,OpenLayers.Util.onImageLoadError=function(){
this.src.match(/^http:\/\/[abc]\.[a-z]+\.openstreetmap\.org\//)?this.src=OpenLayers.Util.OSM.MISSING_TILE_URL:this.src.match(/^http:\/\/[def]\.tah\.openstreetmap\.org\//)||OpenLayers.Util.OSM.originalOnImageLoadError;
},OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.TMS,{initialize:function(e,t,a){
a=OpenLayers.Util.extend({attribution:"Data by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
maxExtent:new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508),maxResolution:156543,
units:"m",projection:"EPSG:900913"},a);var r=[e,t,a];OpenLayers.Layer.TMS.prototype.initialize.apply(this,r);
},getURL:function(e){var t=this.map.getResolution(),a=Math.round((e.left-this.maxExtent.left)/(t*this.tileSize.w)),r=Math.round((this.maxExtent.top-e.top)/(t*this.tileSize.h)),p=this.map.getZoom(),n=Math.pow(2,p);
if(0>r||r>=n)return OpenLayers.Util.OSM.MISSING_TILE_URL;a=(a%n+n)%n;var i=this.url,s=p+"/"+a+"/"+r+".png";
return i instanceof Array&&(i=this.selectUrl(s,i)),i+s},CLASS_NAME:"OpenLayers.Layer.OSM"
}),OpenLayers.Layer.OSM.Mapnik=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(e,t){
var a=["http://a.tile.openstreetmap.org/","http://b.tile.openstreetmap.org/","http://c.tile.openstreetmap.org/"];
t=OpenLayers.Util.extend({numZoomLevels:19},t);var r=[e,a,t];OpenLayers.Layer.OSM.prototype.initialize.apply(this,r);
},CLASS_NAME:"OpenLayers.Layer.OSM.Mapnik"}),OpenLayers.Layer.OSM.Osmarender=OpenLayers.Class(OpenLayers.Layer.OSM,{
initialize:function(e,t){var a=["http://a.tah.openstreetmap.org/Tiles/tile.php/","http://b.tah.openstreetmap.org/Tiles/tile.php/","http://c.tah.openstreetmap.org/Tiles/tile.php/"];
t=OpenLayers.Util.extend({numZoomLevels:18},t);var r=[e,a,t];OpenLayers.Layer.OSM.prototype.initialize.apply(this,r);
},CLASS_NAME:"OpenLayers.Layer.OSM.Osmarender"}),OpenLayers.Layer.OSM.Maplint=OpenLayers.Class(OpenLayers.Layer.OSM,{
initialize:function(e,t){var a=["http://d.tah.openstreetmap.org/Tiles/maplint.php/","http://e.tah.openstreetmap.org/Tiles/maplint.php/","http://f.tah.openstreetmap.org/Tiles/maplint.php/"];
t=OpenLayers.Util.extend({numZoomLevels:18,isBaseLayer:!1,visibility:!1},t);var r=[e,a,t];
OpenLayers.Layer.OSM.prototype.initialize.apply(this,r)},CLASS_NAME:"OpenLayers.Layer.OSM.Maplint"
});