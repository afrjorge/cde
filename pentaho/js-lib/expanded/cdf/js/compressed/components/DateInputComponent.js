define(["../lib/jquery","./BaseComponent","css!./DateInputComponent"],function(e,t){
return t.extend({update:function(){var t,n,a=this,o=void 0==a.dateFormat||null==a.dateFormat?"yy-mm-dd":a.dateFormat,d=a.name,r=a.dashboard.getParameterValue(a.parameter);
"TODAY"==a.startDate?t=new Date:a.startDate&&(t=e.datepicker.parseDate(o,a.startDate)),
"TODAY"==a.endDate?n=new Date:a.endDate&&(n=e.datepicker.parseDate(o,a.endDate)),
a.on("onOpen:dateInput",a.onOpenEvent),a.on("onClose:dateInput",a.onCloseEvent),a.placeholder().addClass("date-input-container").html('<input class="date-input" id="'+d+'" value="'+r+'"/>'),
e(function(){if(a.placeholder("input").datepicker({beforeShow:function(){a.triggerOnOpen();
},onClose:function(){a.triggerOnClose()},dateFormat:o,changeMonth:!0,changeYear:!0,
minDate:t,maxDate:n,onSelect:function(e,t){a.dashboard.processChange(d)}}),"undefined"!=typeof a.dashboard.i18nSupport&&null!=a.dashboard.i18nSupport){
var r=a.placeholder("input");r.datepicker("option",e.datepicker.regional[a.dashboard.i18nCurrentLanguageCode]),
r.parent().append(e("<hidden>").attr("id",d+"_hidden")),r.datepicker("option","altField","#"+d+"_hidden"),
r.datepicker("option","altFormat",o)}a._doAutoFocus()})},triggerOnOpen:function(){
this.placeholder("input").toggleClass("dInputComponentExpanded",!0),this.trigger("onOpen:dateInput");
},triggerOnClose:function(){this.placeholder("input").toggleClass("dInputComponentExpanded",!1),
this.trigger("onClose:dateInput")},getValue:function(){return"undefined"!=typeof this.dashboard.i18nSupport&&null!=this.dashboard.i18nSupport?e("#"+this.name+"_hidden").val():e("#"+this.name).val();
}})});