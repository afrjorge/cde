define(["../../../AddIn","../clippedTextBase","../../../Dashboard","../../../lib/jquery","amd!../../../lib/datatables","css!./clippedText"],function(a,t,e,n){
var d=new a(n.extend(!0,{},t,{init:function(){n.fn.dataTableExt.oSort[this.name+"-asc"]=n.fn.dataTableExt.oSort["string-asc"],
n.fn.dataTableExt.oSort[this.name+"-desc"]=n.fn.dataTableExt.oSort["string-desc"];
}}));return e.registerGlobalAddIn("Table","colType",d),d});