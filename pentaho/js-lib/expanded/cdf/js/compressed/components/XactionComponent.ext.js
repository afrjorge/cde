define(["../dashboard/Utils","../dashboard/Dashboard.ext","common-ui/util/URLEncoder","../lib/jquery"],function(e,t,n,a){
return{getCdfXaction:function(i,r,o,d){if(d){var u={};for(var l in d)d.hasOwnProperty(l)&&(u[l]=e.ev(d[l]));
return n.encode(t.getCdfBase()+"/viewAction",null,a.extend({path:t.getFullPath(i,r),
ts:(new Date).getTime()},u))}return n.encode(t.getCdfBase()+"/viewAction",null,{path:t.getFullPath(i,r),
ts:(new Date).getTime()})}}});