define(["../../../AddIn","../cccBulletChartBase","../../../Dashboard","../../../lib/jquery"],function(e,t,l,a){
var r=new e(a.extend(!0,{},t,{defaults:{chartOptions:{compatVersion:2,height:60,bulletTitle:"",
extensionPoints:{bulletMarker_shape:"circle",bulletTitle_textStyle:"#fff",bulletMeasure_fillStyle:"#666"
}}}}));return l.registerGlobalAddIn("Template","templateType",r),r});