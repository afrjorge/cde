define(["amd!cdf/lib/underscore","amd!cdf/lib/backbone.treemodel","cdf/lib/BaseEvents","cdf/Logger"],function(n,e,t,r){
var i=t.extendWithEvents(e.TreeModel).extend(r).extend({url:"",loglevel:"log",children:function(){
return this.nodes.apply(this,arguments)},parse:function(n,e){return n},walkDown:function(e,t,r){
var i;return t||(t=function(n){return n}),i=this.children()?t(this.children().map(function(n){
return n.walkDown(e,t,r)})):e(this),n.isFunction(r)&&(i=r(this,i)),i},flatten:function(){
var e=[this];return this.children()&&this.children().each(function(n){return n.flatten().each(function(n){
return e.push(n)})}),n.chain(e)},leafs:function(){return this.flatten().filter(function(n){
return null===n.children()})}});return i});