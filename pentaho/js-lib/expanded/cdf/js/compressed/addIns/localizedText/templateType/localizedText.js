define(["../../../AddIn","../localizedTextBase","../../../Dashboard","../../../lib/jquery"],function(e,a,t,l){
var d=new e(l.extend(!0,{},a,{defaults:{cssClass:"localizedTextContainer",layout:"<div></div>"
},setText:function(e,a,t){l(a).empty().html(l(t.layout).append(e).addClass(t.cssClass));
}}));return t.registerGlobalAddIn("Template","templateType",d),d});