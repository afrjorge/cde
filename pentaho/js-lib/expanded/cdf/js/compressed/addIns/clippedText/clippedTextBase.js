define(["../../lib/jquery","../../lib/CCC/tipsy"],function(t){return{name:"clippedText",
label:"Clipped Text",defaults:{showTooltip:!0,useTipsy:!1,applyFormat:function(t){
return t},tipsyOptions:{gravity:"s",html:!1},cssClass:"clippedTextContainer",layout:"<div></div>"
},init:function(){},implementation:function(i,p,e){var l="function"==typeof e.applyFormat?e.applyFormat(p.value):p.value,s=t(e.layout).addClass(e.cssClass).append(l).attr("title",e.showTooltip?l:"");
e.useTipsy&&s.tipsy(e.tipsyOptions),t(i).empty().html(s)}}});