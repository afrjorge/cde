define(["./ToggleButtonBaseComponent","../lib/jquery"],function(e,n){return e.extend({
getValue:function(){return"undefined"!=this.currentVal&&null!=this.currentVal?this.currentVal:this.placeholder("."+this.name+":checked").val();
}})});