define(["../../lib/jquery","amd!../../lib/jquery.sparkline"],function(e){return{name:"sparkline",
label:"Sparkline",defaults:{type:"line",cssClass:"sparklineContainer",layout:"<div></div>"
},init:function(){},implementation:function(n,a,i){e(n).sparkline(this.getData(a,i),i).removeClass("sparkline").addClass(i.cssClass);
},getData:function(e,n){return e.value}}});