define(["./UnmanagedComponent","amd!../lib/underscore"],function(e,n){return e.extend({
update:function(){var e=n.bind(this.render,this);"undefined"==typeof this.manageCallee||this.manageCallee?this.synchronous(e):e();
},render:function(){var e=this.parameters||[];this.customfunction(e)}})});