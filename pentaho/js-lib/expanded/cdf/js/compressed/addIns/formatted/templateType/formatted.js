define(["../../../AddIn","../../../Dashboard","../../../dashboard/Utils","../../../lib/jquery"],function(t,a,n,e){
var o=new t({name:"formatted",label:"Formatted Value",defaults:{formatFunction:"numberFormat",
formatMask:"#,#.#",applyFormat:function(t){return"function"==typeof n[this.formatFunction]?n[this.formatFunction](t,this.formatMask):t;
},cssClass:"formatterContainer",layout:"<div></div>"},init:function(){},implementation:function(t,a,n){
var o="function"==typeof n.applyFormat?n.applyFormat(a.value):a.value;e(t).empty().html(e(n.layout).append(o).addClass(n.cssClass));
}});return a.registerGlobalAddIn("Template","templateType",o),o});