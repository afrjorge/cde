define(["../../../AddIn","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/jquery","amd!../../../lib/datatables"],function(t,a,e,n){
var o=new t({name:"formattedText",label:"Formatted Text",defaults:{textFormat:function(t,a,n){
return a.colFormat?e(a.colFormat,t):t}},init:function(){n.fn.dataTableExt.oSort[this.name+"-asc"]=n.fn.dataTableExt.oSort["string-asc"],
n.fn.dataTableExt.oSort[this.name+"-desc"]=n.fn.dataTableExt.oSort["string-desc"];
},implementation:function(t,a,e){n(t).empty().append(e.textFormat.call(this,a.value,a,e));
}});return a.registerGlobalAddIn("Table","colType",o),o});