define(["./Dashboard.ext"],function(e){return{getView:function(i){return e.getCdfBase()+"/views/"+i;
},getViewFromUrl:function(){var e=window.location.search;if(-1==e.indexOf("view"))return"";
var i=e.match("[?|&]view=([^&]+)");return i[1]?i[1]:void 0}}});