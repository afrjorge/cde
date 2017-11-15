function lonLatToMercator(e){var t=20037508.34*e.lon/180,a=Math.log(Math.tan((90+e.lat)*Math.PI/360))/(Math.PI/180);
return a=20037508.34*a/180,new OpenLayers.LonLat(t,a)}function init_map(e,t,a,o,r,n,p,s){
map_div=e,oDiv=this.document.getElementById(map_div),oDiv.innerHTML="",center_lon=t,
center_lat=a,show_layer_control=n,zoom_level=o,use_mercator=r,center_point="true"==use_mercator?lonLatToMercator(new OpenLayers.LonLat(t,a)):new OpenLayers.LonLat(t,a),
show_custom_map=p,custom_map_code=s,show_map(zoom_level),"true"==n&&show_layers();
}function show_map(){"true"==show_custom_map?eval(custom_map_code):(map=new OpenLayers.Map(map_div,{
maxExtent:new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508),numZoomLevels:18,
maxResolution:156543,units:"m",projection:"EPSG:41001"}),layer=new OpenLayers.Layer.TMS("OpenStreetMap","http://tile.openstreetmap.org/",{
type:"png",getURL:osm_getTileURL,transparent:"true",displayOutsideMaxExtent:!0}),
map.addLayer(layer)),markers=new OpenLayers.Layer.Markers("Markers"),map.addLayer(markers),
map.setCenter(center_point,zoom_level)}function add_marker(e,t){}function delete_marker(e){}
function change_marker(e,t){}function show_bubble(e,t){null!=popup&&(markers.map.removePopup(popup),
popup.destroy(),popup=null),feature=new OpenLayers.Feature(markers,e),feature.popupClass=OpenLayers.Popup.FramedCloud,
popup=feature.createPopup(!0),popup.setContentHTML(t),markers.map.addPopup(popup);
}function show_positon(){map.addControl(new OpenLayers.Control.MousePosition)}function show_layers(){
map.addControl(new OpenLayers.Control.LayerSwitcher)}function osm_getTileURL(e){var t=this.map.getResolution(),a=Math.round((e.left-this.maxExtent.left)/(t*this.tileSize.w)),o=Math.round((this.maxExtent.top-e.top)/(t*this.tileSize.h)),r=this.map.getZoom(),n=Math.pow(2,r);
return 0>o||o>=n?OpenLayers.Util.getImagesLocation()+"404.png":(a=(a%n+n)%n,this.url+r+"/"+a+"/"+o+"."+this.type);
}var map,slayer,layerMapnik,layerTah,center_point,markers,show_layer_control,popup,feature,marker,zoom_level,show_custom_map,custom_map_code,use_mercator;