define(["../../lib/jquery"],function(e){return{name:"localizedText",label:"Localized Text",
defaults:{localize:function(e,t,i){return t.dashboard.i18nSupport.prop(e)}},init:function(){},
implementation:function(e,t,i){"function"==typeof i.localize&&t.dashboard&&t.dashboard.i18nSupport?this.setText(this.defaults.localize(t.value,t,i),e,i):this.setText(t.value,e,i);
},setText:function(t,i,n){e(i).empty().append(t)}}});