define(["./Utils"],function(n){var t={init:function(){if("undefined"==typeof arguments)return null;
if(arguments.length<1)return null;if("string"!=typeof arguments[0])return null;if("undefined"==typeof RegExp)return null;
for(var e=arguments[0],r=new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g),a=new Array,g=new Array,i=0,u=0,s=0,o=0,m="",l=null;l=r.exec(e);){
l[9]&&(i+=1),u=o,s=r.lastIndex-l[0].length,g[g.length]=e.substring(u,s),o=r.lastIndex;
var c=parseInt(arguments[i])<0;c||(c=parseFloat(arguments[i])<0),a[a.length]={match:l[0],
left:l[3]?!0:!1,sign:l[4]||"",pad:l[5]||" ",min:l[6]||0,precision:l[8],code:l[9]||"%",
negative:c,argument:String(arguments[i])}}if(g[g.length]=e.substring(o),0==a.length)return e;
if(arguments.length-1<i)return null;l=null;var d=null;for(d=0;d<a.length;d++){var p,f=a[d];
"%"==f.code?p="%":"b"==f.code?(f.argument=String(Math.abs(parseInt(f.argument)).toString(2)),
p=t.convert(f,!0)):"c"==f.code?(f.argument=String(String.fromCharCode(parseInt(Math.abs(parseInt(f.argument))))),
p=t.convert(f,!0)):"d"==f.code?(f.argument=n.toFormatedString(String(Math.abs(parseInt(f.argument)))),
p=t.convert(f)):"f"==f.code?(f.argument=n.toFormatedString(String(Math.abs(parseFloat(f.argument)).toFixed(f.precision?f.precision:6))),
p=t.convert(f)):"o"==f.code?(f.argument=String(Math.abs(parseInt(f.argument)).toString(8)),
p=t.convert(f)):"s"==f.code?(f.argument=f.argument.substring(0,f.precision?f.precision:f.argument.length),
p=t.convert(f,!0)):"x"==f.code?(f.argument=String(Math.abs(parseInt(f.argument)).toString(16)),
p=t.convert(f)):"X"==f.code?(f.argument=String(Math.abs(parseInt(f.argument)).toString(16)),
p=t.convert(f).toUpperCase()):p=f.match,m+=g[d],m+=p}return m+=g[d]},convert:function(n,t){
t?n.sign="":n.sign=n.negative?"-":n.sign;var e=n.min-n.argument.length+1-n.sign.length,r=new Array(0>e?0:e).join(n.pad);
return n.left?"0"==n.pad||t?n.sign+n.argument+r.replace(/0/g," "):n.sign+n.argument+r:"0"==n.pad||t?n.sign+r+n.argument:r+n.sign+n.argument;
}};return t.init});