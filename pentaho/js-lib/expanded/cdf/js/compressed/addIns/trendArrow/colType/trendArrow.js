define(["../../../AddIn","../trendArrowBase","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/jquery","amd!../../../lib/datatables","css!./trendArrow"],function(a,t,e,n,r){
var d=new a(r.extend(!0,{},t,{defaults:{valueFormat:function(a,t,e,r){return n(t||"%.1f",a);
},cssClass:"trend",layout:'<div class="trend">&nbsp;</div>'},init:function(){r.fn.dataTableExt.oSort[this.name+"-asc"]=r.fn.dataTableExt.oSort["numeric-asc"],
r.fn.dataTableExt.oSort[this.name+"-desc"]=r.fn.dataTableExt.oSort["numeric-desc"];
}}));return e.registerGlobalAddIn("Table","colType",d),d});