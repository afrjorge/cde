define(["../../../AddIn","../sparklineBase","../../../Dashboard","../../../Logger","../../../lib/jquery","amd!../../../lib/datatables","amd!../../../lib/jquery.sparkline","css!./sparkline"],function(t,r,e,i,n){
var a=new t(n.extend(!0,{},r,{defaults:{type:"line"},init:function(){var t=this;n.fn.dataTableExt.oSort[this.name+"-asc"]=function(r,e){
return t.sort(r,e)},n.fn.dataTableExt.oSort[this.name+"-desc"]=function(r,e){return t.sort(e,r);
}},sort:function(t,r){return this.sumStrArray(t)-this.sumStrArray(r)},sumStrArray:function(t){
return t.split(",").reduce(function(t,r,e,n){return i.log("Current "+r+"; prev "+t),
parseFloat(r)+("number"==typeof t?t:parseFloat(t))})},getData:function(t,r){var e=t.value.split(/,/);
if(r.trim){if("both"==r.trim.type||"right"==r.trim.type)for(var i=e.length-1;i>=0;i--)-1!=n.inArray(e[i].trim(),r.trim.values)&&e.splice(i,1);
if("both"==r.trim.type||"left"==r.trim.type)for(var i=0;i<e.length;i++)-1!=n.inArray(e[i].trim(),r.trim.values)&&e.splice(i,1);
}return e}}));return e.registerGlobalAddIn("Table","colType",a),a});