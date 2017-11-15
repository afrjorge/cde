define(["amd!cdf/lib/underscore","./Tree"],function(t,e){var n={SOME:null,NONE:!1,
ALL:!0},i=e.extend({defaults:{id:void 0,label:"",isSelected:!1,isVisible:!0,numberOfSelectedItems:0,
numberOfItems:0},constructor:function(t,e){return null!=(null!=t?t.label:void 0)&&(null==t.id||(null!=e?e.useValueAsId:void 0)===!0)&&(t.id=t.label),
this.base(t,e),this},initialize:function(){this.base.apply(this,arguments),this.parent()&&this._inheritSelectionFromParent();
var t=this.root().get("searchPattern");return this._filterBy(t),this.on("add remove",this.update);
},_inheritSelectionFromParent:function(){var t=this.parent().getSelection();t===n.ALL?this.setSelection(n.ALL):t===n.NONE&&this.setSelection(n.NONE);
},setSelection:function(t){return this.getSelection()===t?this:(this.set("isSelected",t),
t!==n.SOME&&this.children()&&this.children().each(function(e){return e.setSelection(t);
}),this.parent()&&this.parent().updateSelection(),this)},getSelection:function(){
return this.get("isSelected")},setAndUpdateSelection:function(t){return this.setSelection(t),
this.update(),this.trigger("selection",this)},setVisibility:function(t){var e=this.get("isVisible");
return e!==t?this.set("isVisible",t):void 0},getVisibility:function(){return this.get("isVisible");
},getSelectedItems:function(e){var i=function(t){return function(){return t.get(e||"id");
}}(this),r=this.getSelection();switch(r){case n.SOME:case void 0:return this.children()?t.flatten(this.children().map(function(t){
return t.getSelectedItems(e)||[]})):i();case n.ALL:return i();case n.NONE:return[];
default:return[]}},setSelectedItems:function(e){var i=this.flatten();return i.filter(function(t){
return null==t.children()}).each(function(i){var r=i.get("id");return t.contains(e,r)?i.setSelection(n.ALL):i.setSelection(n.NONE);
}),i.filter(function(t){return null!=t.children()}).each(function(i){var r=i.get("id");
return t.contains(e,r)?i.setSelection(n.ALL):void 0}),this.update(),this.root().updateSelectedItems({
silent:!0})},updateSelectedItems:function(t){var e=this.root();return e.set("selectedItems",e._getSelectionSnapshot(),t);
},restoreSelectedItems:function(){var t=this.root().get("selectedItems");return null==t&&(t={
none:this.flatten()}),t.none.each(function(t){return t.setSelection(n.NONE)}),null!=t.all&&t.all.each(function(t){
return t.setSelection(n.ALL)}),this.update()},_getSelectionSnapshot:function(){var t=this.flatten(),e={
none:t.filter(function(t){return t.getSelection()===n.NONE}),some:t.filter(function(t){
return t.getSelection()===n.SOME}),all:t.filter(function(t){return t.getSelection()===n.ALL;
})};return e},update:function(){this.root().updateSelection();var t=this.root().get("numberOfItemsAtServer");
return null!=t?this.root().set("numberOfItems",t):this.root().updateCountOfItems("numberOfItems",function(t){
return 1}),this.root().updateCountOfItems("numberOfSelectedItems",function(t){return t.getSelection()===n.ALL?1:0;
}),this},updateSelection:function(){var e=function(e){var i=t.every(e,function(t){
return t===n.ALL}),r=t.every(e,function(t){return t===n.NONE});return i?n.ALL:r?n.NONE:n.SOME;
};return this.inferSelection(e,function(t,e){return t.children()&&t.getSelection()!==e?t.setSelection(e):void 0;
})},inferSelection:function(e,n){var i=function(t){return t.getSelection()},r=function(e,i){
return t.isFunction(n)&&n(e,i),i};return this.walkDown(i,e,r)},countItems:function(t){
var e;return e=this.children()?this.children().reduce(function(e,n){return e+n.countItems(t);
},0):t(this)},updateCountOfItems:function(e,n){var i=function(t){return n(t)},r=function(e){
return t.reduce(e,function(t,e){return t+e},0)},u=function(t,n){return t.children()&&t.set(e,n),
n};return this.walkDown(i,r,u)},countSelectedItems:function(){return this.countItems(function(t){
return t.getSelection()===n.ALL?1:0})},updateCountOfSelectedItems:function(){var e=function(t){
return t.getSelection()===n.ALL?1:0},i=function(e){return t.reduce(e,function(t,e){
return t+e},0)},r=function(t,e){return t.children()&&t.set("numberOfSelectedItems",e),
e};return this.walkDown(e,i,r)},hasChanged:function(){var e=!1,n=this.get("selectedItems");
return null!=n&&(e=t.any(t.map(this._getSelectionSnapshot(),function(t,e){var i,r;
return r=n[e],i=t.intersection(r.value()).value(),!(t.isEqual(i).value()&&r.isEqual(i).value());
}))),e},filterBy:function(t){return this.root().set("searchPattern",t),this._filterBy(t),
this},_filterBy:function(t){this._filter(t,"",this.get("matcher")),this.root().setVisibility(!0);
},_filter:function(e,n,i){var r,u=this,s=t.chain(["label"]).map(function(t){return u.get(t);
}).compact().value().join(" ");return n&&(s=n+s),this.children()?r=t.any(this.children().map(function(t){
var n;return n=t._filter(e,s,i),t.setVisibility(n),n})):t.isEmpty(e)?r=!0:(r=t.isFunction(i)?i(s,e):s.toLowerCase().indexOf(e.toLowerCase())>-1,
this.debug("fullstring  "+s+" match to "+e+": "+r)),this.setVisibility(r),r}},{SelectionStates:n
});return i});