define(["../dashboard/Dashboard.ext","./NavigatorBaseComponent","../lib/jquery","amd!../lib/jquery.jdMenu"],function(e,t,n){
return t.extend({update:function(){var a=this;-1==t.navigatorResponse?n.getJSON(e.getJSONSolution()+"?mode=navigator&path="+t.path,function(e){
a.processNavigatorResponse(e)}):this.processNavigatorResponse(t.navigatorResponse);
},processNavigatorResponse:function(e){t.navigatorResponse=e;var a=this.includeSolutions?e.solution.folders[0].folders:t.getSolutionJSON(t.solution);
a.sort(function(e,t){return e.name>t.name});var r=this.generateMenuFromArray(a,0);
n("#"+this.htmlObject).html(r),n(function(){n("ul.jd_menu").jdMenu({activateDelay:50,
showDelay:50,disableLinks:!1})}),n("ul.jd_menu a").tooltip({showURL:!1,track:!0,delay:1e3,
opacity:.5})},generateMenuFromArray:function(e,t){var n="";if(void 0==e)return n;for(var a=0;a<e.length;a++){
var r=e[a];n+=this.generateMenuFromFile(r,t+1)}if(n.length>0){var o;if(0==t){var i="vertical"==this.mode?"jd_menu jd_menu_slate jd_menu_vertical":"jd_menu jd_menu_slate";
o='class="'+i+'"'}n="<ul "+o+">"+n+"</ul>"}return n},generateMenuFromFile:function(n,a){
var r="",o=this.dashboard.webAppPath;if(1==n.visible){var i=t.isAncestor(n.solution,n.path)?'class="ancestor"':"",s="";
n.path.length>0&&(s="path="+n.path);var l=void 0!=t.template&&void 0!=t.template.length&&t.template.length>0?"&amp;template="+t.template:"";
r+=void 0!=n.link?"<li><a "+i+' title="'+n.title+'"  href="'+("/"==o.substring(o.length-1)?o.substring(0,o.length-1)+n.link:o+n.link)+'">'+n.title+"</a>":"<li><a "+i+' title="'+n.title+'" onClick="return false;" href="'+e.getRenderHTML()+"?solution="+n.solution+"&amp;"+s+l+'">'+n.title+"</a>";
var u=n.folders||[];u.sort(function(e,t){return e.name>t.name});var h=n.files||[];
h.sort(function(e,t){return e.name>t.name});var d=this.generateMenuFromArray(u.concat(h));
d.length>0&&(d=" &raquo;"+d),r+=d+"</li>"}return r}})});