(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;
case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(e,t){
return Te.call(e,t)}function s(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,
charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,
iso:!1}}function a(e){we.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e);
}function i(e,t){var n=!0;return _(function(){return n&&(a(e),n=!1),t.apply(this,arguments);
},t)}function r(e,t){gt[e]||(a(t),gt[e]=!0)}function o(e,t){return function(n){return p(e.call(this,n),t);
}}function u(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t);
}}function c(e,t){var n,s,a=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(a,"months");
return 0>t-i?(n=e.clone().add(a-1,"months"),s=(t-i)/(i-n)):(n=e.clone().add(a+1,"months"),
s=(t-i)/(n-i)),-(a+s)}function l(e,t,n){var s;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(s=e.isPM(n),
s&&12>t&&(t+=12),s||12!==t||(t=0),t):t}function d(){}function f(e,t){t!==!1&&F(e),
m(this,e),this._d=new Date(+e._d),Dt===!1&&(Dt=!0,we.updateOffset(this),Dt=!1)}function h(e){
var t=S(e),n=t.year||0,s=t.quarter||0,a=t.month||0,i=t.week||0,r=t.day||0,o=t.hour||0,u=t.minute||0,c=t.second||0,l=t.millisecond||0;
this._milliseconds=+l+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+a+3*s+12*n,
this._data={},this._locale=we.localeData(),this._bubble()}function _(e,t){for(var s in t)n(t,s)&&(e[s]=t[s]);
return n(t,"toString")&&(e.toString=t.toString),n(t,"valueOf")&&(e.valueOf=t.valueOf),
e}function m(e,t){var n,s,a;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),
"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),
"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),
"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),
"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),
xe.length>0)for(n in xe)s=xe[n],a=t[s],"undefined"!=typeof a&&(e[s]=a);return e}function y(e){
return 0>e?Math.ceil(e):Math.floor(e)}function p(e,t,n){for(var s=""+Math.abs(e),a=e>=0;s.length<t;)s="0"+s;
return(a?n?"+":"":"-")+s}function g(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),
e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),
n}function M(e,t){var n;return t=H(t,e),e.isBefore(t)?n=g(e,t):(n=g(t,e),n.milliseconds=-n.milliseconds,
n.months=-n.months),n}function D(e,t){return function(n,s){var a,i;return null===s||isNaN(+s)||(r(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),
i=n,n=s,s=i),n="string"==typeof n?+n:n,a=we.duration(n,s),w(this,a,e),this}}function w(e,t,n,s){
var a=t._milliseconds,i=t._days,r=t._months;s=null==s?!0:s,a&&e._d.setTime(+e._d+a*n),
i&&me(e,"Date",_e(e,"Date")+i*n),r&&he(e,_e(e,"Month")+r*n),s&&we.updateOffset(e,i||r);
}function Y(e){return"[object Array]"===Object.prototype.toString.call(e)}function v(e){
return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function k(e,t,n){
var s,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0;for(s=0;a>s;s++)(n&&e[s]!==t[s]||!n&&O(e[s])!==O(t[s]))&&r++;
return r+i}function b(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=dt[e]||ft[t]||t;
}return e}function S(e){var t,s,a={};for(s in e)n(e,s)&&(t=b(s),t&&(a[t]=e[s]));return a;
}function T(t){var n,s;if(0===t.indexOf("week"))n=7,s="day";else{if(0!==t.indexOf("month"))return;
n=12,s="month"}we[t]=function(a,i){var r,o,u=we._locale[t],c=[];if("number"==typeof a&&(i=a,
a=e),o=function(e){var t=we().utc().set(s,e);return u.call(we._locale,t,a||"")},null!=i)return o(i);
for(r=0;n>r;r++)c.push(o(r));return c}}function O(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),
n}function U(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function W(e,t,n){
return ce(we([e,11,31+t-n]),t,n).week}function C(e){return G(e)?366:365}function G(e){
return e%4===0&&e%100!==0||e%400===0}function F(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[Ue]<0||e._a[Ue]>11?Ue:e._a[We]<1||e._a[We]>U(e._a[Oe],e._a[Ue])?We:e._a[Ce]<0||e._a[Ce]>24||24===e._a[Ce]&&(0!==e._a[Ge]||0!==e._a[Fe]||0!==e._a[Pe])?Ce:e._a[Ge]<0||e._a[Ge]>59?Ge:e._a[Fe]<0||e._a[Fe]>59?Fe:e._a[Pe]<0||e._a[Pe]>999?Pe:-1,
e._pf._overflowDayOfYear&&(Oe>t||t>We)&&(t=We),e._pf.overflow=t)}function P(t){return null==t._isValid&&(t._isValid=!isNaN(t._d.getTime())&&t._pf.overflow<0&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated,
t._strict&&(t._isValid=t._isValid&&0===t._pf.charsLeftOver&&0===t._pf.unusedTokens.length&&t._pf.bigHour===e)),
t._isValid}function L(e){return e?e.toLowerCase().replace("_","-"):e}function x(e){
for(var t,n,s,a,i=0;i<e.length;){for(a=L(e[i]).split("-"),t=a.length,n=L(e[i+1]),
n=n?n.split("-"):null;t>0;){if(s=I(a.slice(0,t).join("-")))return s;if(n&&n.length>=t&&k(a,n,!0)>=t-1)break;
t--}i++}return null}function I(e){var t=null;if(!Le[e]&&Ie)try{t=we.locale(),require("./locale/"+e),
we.locale(t)}catch(n){}return Le[e]}function H(e,t){var n,s;return t._isUTC?(n=t.clone(),
s=(we.isMoment(e)||v(e)?+e:+we(e))-+n,n._d.setTime(+n._d+s),we.updateOffset(n,!1),
n):we(e).local()}function A(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");
}function z(e){var t,n,s=e.match(Ze);for(t=0,n=s.length;n>t;t++)pt[s[t]]?s[t]=pt[s[t]]:s[t]=A(s[t]);
return function(a){var i="";for(t=0;n>t;t++)i+=s[t]instanceof Function?s[t].call(a,e):s[t];
return i}}function Z(e,t){return e.isValid()?(t=E(t,e.localeData()),ht[t]||(ht[t]=z(t)),
ht[t](e)):e.localeData().invalidDate()}function E(e,t){function n(e){return t.longDateFormat(e)||e;
}var s=5;for(Ee.lastIndex=0;s>=0&&Ee.test(e);)e=e.replace(Ee,n),Ee.lastIndex=0,s-=1;
return e}function N(e,t){var n,s=t._strict;switch(e){case"Q":return Ke;case"DDDD":
return tt;case"YYYY":case"GGGG":case"gggg":return s?nt:qe;case"Y":case"G":case"g":
return at;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return s?st:Ve;case"S":
if(s)return Ke;case"SS":if(s)return et;case"SSS":if(s)return tt;case"DDD":return je;
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Je;case"a":case"A":return t._locale._meridiemParse;
case"x":return Qe;case"X":return Xe;case"Z":case"ZZ":return Re;case"T":return Be;case"SSSS":
return $e;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":
case"ss":case"ww":case"WW":return s?et:Ne;case"M":case"D":case"d":case"H":case"h":
case"m":case"s":case"w":case"W":case"e":case"E":return Ne;case"Do":return s?t._locale._ordinalParse:t._locale._ordinalParseLenient;
default:return n=new RegExp(X(Q(e.replace("\\","")),"i"))}}function j(e){e=e||"";var t=e.match(Re)||[],n=t[t.length-1]||[],s=(n+"").match(ct)||["-",0,0],a=+(60*s[1])+O(s[2]);
return"+"===s[0]?a:-a}function q(e,t,n){var s,a=n._a;switch(e){case"Q":null!=t&&(a[Ue]=3*(O(t)-1));
break;case"M":case"MM":null!=t&&(a[Ue]=O(t)-1);break;case"MMM":case"MMMM":s=n._locale.monthsParse(t,e,n._strict),
null!=s?a[Ue]=s:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(a[We]=O(t));
break;case"Do":null!=t&&(a[We]=O(parseInt(t.match(/\d{1,2}/)[0],10)));break;case"DDD":
case"DDDD":null!=t&&(n._dayOfYear=O(t));break;case"YY":a[Oe]=we.parseTwoDigitYear(t);
break;case"YYYY":case"YYYYY":case"YYYYYY":a[Oe]=O(t);break;case"a":case"A":n._meridiem=t;
break;case"h":case"hh":n._pf.bigHour=!0;case"H":case"HH":a[Ce]=O(t);break;case"m":
case"mm":a[Ge]=O(t);break;case"s":case"ss":a[Fe]=O(t);break;case"S":case"SS":case"SSS":
case"SSSS":a[Pe]=O(1e3*("0."+t));break;case"x":n._d=new Date(O(t));break;case"X":
n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=j(t);break;
case"dd":case"ddd":case"dddd":s=n._locale.weekdaysParse(t),null!=s?(n._w=n._w||{},
n._w.d=s):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":
case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),
t&&(n._w=n._w||{},n._w[e]=O(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=we.parseTwoDigitYear(t);
}}function V(e){var n,s,a,i,r,o,u;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(r=1,o=4,
s=t(n.GG,e._a[Oe],ce(we(),1,4).year),a=t(n.W,1),i=t(n.E,1)):(r=e._locale._week.dow,
o=e._locale._week.doy,s=t(n.gg,e._a[Oe],ce(we(),r,o).year),a=t(n.w,1),null!=n.d?(i=n.d,
r>i&&++a):i=null!=n.e?n.e+r:r),u=le(s,a,i,o,r),e._a[Oe]=u.year,e._dayOfYear=u.dayOfYear;
}function $(e){var n,s,a,i,r=[];if(!e._d){for(a=R(e),e._w&&null==e._a[We]&&null==e._a[Ue]&&V(e),
e._dayOfYear&&(i=t(e._a[Oe],a[Oe]),e._dayOfYear>C(i)&&(e._pf._overflowDayOfYear=!0),
s=ie(i,0,e._dayOfYear),e._a[Ue]=s.getUTCMonth(),e._a[We]=s.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=r[n]=a[n];
for(;7>n;n++)e._a[n]=r[n]=null==e._a[n]?2===n?1:0:e._a[n];24===e._a[Ce]&&0===e._a[Ge]&&0===e._a[Fe]&&0===e._a[Pe]&&(e._nextDay=!0,
e._a[Ce]=0),e._d=(e._useUTC?ie:ae).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[Ce]=24)}}function J(e){var t;e._d||(t=S(e._i),e._a=[t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],
$(e))}function R(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()];
}function B(t){if(t._f===we.ISO_8601)return void ee(t);t._a=[],t._pf.empty=!0;var n,s,a,i,r,o=""+t._i,u=o.length,c=0;
for(a=E(t._f,t._locale).match(Ze)||[],n=0;n<a.length;n++)i=a[n],s=(o.match(N(i,t))||[])[0],
s&&(r=o.substr(0,o.indexOf(s)),r.length>0&&t._pf.unusedInput.push(r),o=o.slice(o.indexOf(s)+s.length),
c+=s.length),pt[i]?(s?t._pf.empty=!1:t._pf.unusedTokens.push(i),q(i,s,t)):t._strict&&!s&&t._pf.unusedTokens.push(i);
t._pf.charsLeftOver=u-c,o.length>0&&t._pf.unusedInput.push(o),t._pf.bigHour===!0&&t._a[Ce]<=12&&(t._pf.bigHour=e),
t._a[Ce]=l(t._locale,t._a[Ce],t._meridiem),$(t),F(t)}function Q(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,a){
return t||n||s||a})}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
}function K(e){var t,n,a,i,r;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(NaN));
for(i=0;i<e._f.length;i++)r=0,t=m({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._pf=s(),
t._f=e._f[i],B(t),P(t)&&(r+=t._pf.charsLeftOver,r+=10*t._pf.unusedTokens.length,t._pf.score=r,
(null==a||a>r)&&(a=r,n=t));_(e,n||t)}function ee(e){var t,n,s=e._i,a=it.exec(s);if(a){
for(e._pf.iso=!0,t=0,n=ot.length;n>t;t++)if(ot[t][1].exec(s)){e._f=ot[t][0]+(a[6]||" ");
break}for(t=0,n=ut.length;n>t;t++)if(ut[t][1].exec(s)){e._f+=ut[t][0];break}s.match(Re)&&(e._f+="Z"),
B(e)}else e._isValid=!1}function te(e){ee(e),e._isValid===!1&&(delete e._isValid,
we.createFromInputFallback(e))}function ne(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));
return s}function se(t){var n,s=t._i;s===e?t._d=new Date:v(s)?t._d=new Date(+s):null!==(n=He.exec(s))?t._d=new Date(+n[1]):"string"==typeof s?te(t):Y(s)?(t._a=ne(s.slice(0),function(e){
return parseInt(e,10)}),$(t)):"object"==typeof s?J(t):"number"==typeof s?t._d=new Date(s):we.createFromInputFallback(t);
}function ae(e,t,n,s,a,i,r){var o=new Date(e,t,n,s,a,i,r);return 1970>e&&o.setFullYear(e),
o}function ie(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),
t}function re(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null;
}else e=parseInt(e,10);return e}function oe(e,t,n,s,a){return a.relativeTime(t||1,!!n,e,s);
}function ue(e,t,n){var s=we.duration(e).abs(),a=Se(s.as("s")),i=Se(s.as("m")),r=Se(s.as("h")),o=Se(s.as("d")),u=Se(s.as("M")),c=Se(s.as("y")),l=a<_t.s&&["s",a]||1===i&&["m"]||i<_t.m&&["mm",i]||1===r&&["h"]||r<_t.h&&["hh",r]||1===o&&["d"]||o<_t.d&&["dd",o]||1===u&&["M"]||u<_t.M&&["MM",u]||1===c&&["y"]||["yy",c];
return l[2]=t,l[3]=+e>0,l[4]=n,oe.apply({},l)}function ce(e,t,n){var s,a=n-t,i=n-e.day();
return i>a&&(i-=7),a-7>i&&(i+=7),s=we(e).add(i,"d"),{week:Math.ceil(s.dayOfYear()/7),
year:s.year()}}function le(e,t,n,s,a){var i,r,o=ie(e,0,1).getUTCDay();return o=0===o?7:o,
n=null!=n?n:a,i=a-o+(o>s?7:0)-(a>o?7:0),r=7*(t-1)+(n-a)+i+1,{year:r>0?e:e-1,dayOfYear:r>0?r:C(e-1)+r
}}function de(t){var n,s=t._i,a=t._f;return t._locale=t._locale||we.localeData(t._l),
null===s||a===e&&""===s?we.invalid({nullInput:!0}):("string"==typeof s&&(t._i=s=t._locale.preparse(s)),
we.isMoment(s)?new f(s,!0):(a?Y(a)?K(t):B(t):se(t),n=new f(t),n._nextDay&&(n.add(1,"d"),
n._nextDay=e),n))}function fe(e,t){var n,s;if(1===t.length&&Y(t[0])&&(t=t[0]),!t.length)return we();
for(n=t[0],s=1;s<t.length;++s)t[s][e](n)&&(n=t[s]);return n}function he(e,t){var n;
return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),U(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function _e(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]();
}function me(e,t,n){return"Month"===t?he(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n);
}function ye(e,t){return function(n){return null!=n?(me(this,e,n),we.updateOffset(this,t),
this):_e(this,e)}}function pe(e){return 400*e/146097}function ge(e){return 146097*e/400;
}function Me(e){we.duration.fn[e]=function(){return this._data[e]}}function De(e){
"undefined"==typeof ender&&(Ye=be.moment,e?be.moment=i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",we):be.moment=we);
}for(var we,Ye,ve,ke="2.9.0",be="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Se=Math.round,Te=Object.prototype.hasOwnProperty,Oe=0,Ue=1,We=2,Ce=3,Ge=4,Fe=5,Pe=6,Le={},xe=[],Ie="undefined"!=typeof module&&module&&module.exports,He=/^\/?Date\((\-?\d+)/i,Ae=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ze=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Ze=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ee=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ne=/\d\d?/,je=/\d{1,3}/,qe=/\d{1,4}/,Ve=/[+\-]?\d{1,6}/,$e=/\d+/,Je=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Re=/Z|[\+\-]\d\d:?\d\d/gi,Be=/T/i,Qe=/[\+\-]?\d+/,Xe=/[\+\-]?\d+(\.\d{1,3})?/,Ke=/\d/,et=/\d\d/,tt=/\d{3}/,nt=/\d{4}/,st=/[+-]?\d{6}/,at=/[+-]?\d+/,it=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,rt="YYYY-MM-DDTHH:mm:ssZ",ot=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ut=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ct=/([\+\-]|\d\d)/gi,lt=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6
}),dt={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",
W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",
gg:"weekYear",GG:"isoWeekYear"},ft={dayofyear:"dayOfYear",isoweekday:"isoWeekday",
isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ht={},_t={s:45,m:45,
h:22,d:26,M:11},mt="DDD w W M D d".split(" "),yt="M D H h m s w W".split(" "),pt={
M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e);
},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date();
},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){
return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e);
},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week();
},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},
YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5);
},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+p(Math.abs(e),6)},gg:function(){
return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){
return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){
return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},
e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){
return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1);
},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){
return this.minutes()},s:function(){return this.seconds()},S:function(){return O(this.milliseconds()/100);
},SS:function(){return p(O(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3);
},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var e=this.utcOffset(),t="+";
return 0>e&&(e=-e,t="-"),t+p(O(e/60),2)+":"+p(O(e)%60,2)},ZZ:function(){var e=this.utcOffset(),t="+";
return 0>e&&(e=-e,t="-"),t+p(O(e/60),2)+p(O(e)%60,2)},z:function(){return this.zoneAbbr();
},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){
return this.unix()},Q:function(){return this.quarter()}},gt={},Mt=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],Dt=!1;mt.length;)ve=mt.pop(),
pt[ve+"o"]=u(pt[ve],ve);for(;yt.length;)ve=yt.pop(),pt[ve+ve]=o(pt[ve],2);pt.DDDD=o(pt.DDD,3),
_(d.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t;
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source);
},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e,t,n){
var s,a,i;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),
s=0;12>s;s++){if(a=we.utc([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),
this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),
n||this._monthsParse[s]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),
n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;
if(!n&&this._monthsParse[s].test(e))return s}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){
var t,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=we([2e3,1]).day(t),
s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),
this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t;
},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",
LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];
return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){
return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0);
},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM";
},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t,n){
var s=this._calendar[e];return"function"==typeof s?s.apply(t,[n]):s},_relativeTime:{
future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},relativeTime:function(e,t,n,s){var a=this._relativeTime[n];return"function"==typeof a?a(e,t,n,s):a.replace(/%d/i,e);
},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t);
},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,
preparse:function(e){return e},postformat:function(e){return e},week:function(e){
return ce(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){
return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",
invalidDate:function(){return this._invalidDate}}),we=function(t,n,a,i){var r;return"boolean"==typeof a&&(i=a,
a=e),r={},r._isAMomentObject=!0,r._i=t,r._f=n,r._l=a,r._strict=i,r._isUTC=!1,r._pf=s(),
de(r)},we.suppressDeprecationWarnings=!1,we.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))}),we.min=function(){var e=[].slice.call(arguments,0);
return fe("isBefore",e)},we.max=function(){var e=[].slice.call(arguments,0);return fe("isAfter",e);
},we.utc=function(t,n,a,i){var r;return"boolean"==typeof a&&(i=a,a=e),r={},r._isAMomentObject=!0,
r._useUTC=!0,r._isUTC=!0,r._l=a,r._i=t,r._f=n,r._strict=i,r._pf=s(),de(r).utc()},
we.unix=function(e){return we(1e3*e)},we.duration=function(e,t){var s,a,i,r,o=e,u=null;
return we.isDuration(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(o={},
t?o[t]=e:o.milliseconds=e):(u=Ae.exec(e))?(s="-"===u[1]?-1:1,o={y:0,d:O(u[We])*s,
h:O(u[Ce])*s,m:O(u[Ge])*s,s:O(u[Fe])*s,ms:O(u[Pe])*s}):(u=ze.exec(e))?(s="-"===u[1]?-1:1,
i=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*s},o={
y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(r=M(we(o.from),we(o.to)),
o={},o.ms=r.milliseconds,o.M=r.months),a=new h(o),we.isDuration(e)&&n(e,"_locale")&&(a._locale=e._locale),
a},we.version=ke,we.defaultFormat=rt,we.ISO_8601=function(){},we.momentProperties=xe,
we.updateOffset=function(){},we.relativeTimeThreshold=function(t,n){return _t[t]===e?!1:n===e?_t[t]:(_t[t]=n,
!0)},we.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(e,t){
return we.locale(e,t)}),we.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?we.defineLocale(e,t):we.localeData(e),
n&&(we.duration._locale=we._locale=n)),we._locale._abbr},we.defineLocale=function(e,t){
return null!==t?(t.abbr=e,Le[e]||(Le[e]=new d),Le[e].set(t),we.locale(e),Le[e]):(delete Le[e],
null)},we.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(e){
return we.localeData(e)}),we.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),
!e)return we._locale;if(!Y(e)){if(t=I(e))return t;e=[e]}return x(e)},we.isMoment=function(e){
return e instanceof f||null!=e&&n(e,"_isAMomentObject")},we.isDuration=function(e){
return e instanceof h};for(ve=Mt.length-1;ve>=0;--ve)T(Mt[ve]);we.normalizeUnits=function(e){
return b(e)},we.invalid=function(e){var t=we.utc(NaN);return null!=e?_(t._pf,e):t._pf.userInvalidated=!0,
t},we.parseZone=function(){return we.apply(null,arguments).parseZone()},we.parseTwoDigitYear=function(e){
return O(e)+(O(e)>68?1900:2e3)},we.isDate=v,_(we.fn=f.prototype,{clone:function(){
return we(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){
return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){
var e=we(this).utc();return 0<e.year()&&e.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():Z(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()];
},isValid:function(){return P(this)},isDSTShifted:function(){return this._a?this.isValid()&&k(this._a,(this._isUTC?we.utc(this._a):we(this._a)).toArray())>0:!1;
},parsingFlags:function(){return _({},this._pf)},invalidAt:function(){return this._pf.overflow;
},utc:function(e){return this.utcOffset(0,e)},local:function(e){return this._isUTC&&(this.utcOffset(0,e),
this._isUTC=!1,e&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(e){
var t=Z(this,e||we.defaultFormat);return this.localeData().postformat(t)},add:D(1,"add"),
subtract:D(-1,"subtract"),diff:function(e,t,n){var s,a,i=H(e,this),r=6e4*(i.utcOffset()-this.utcOffset());
return t=b(t),"year"===t||"month"===t||"quarter"===t?(a=c(this,i),"quarter"===t?a/=3:"year"===t&&(a/=12)):(s=this-i,
a="second"===t?s/1e3:"minute"===t?s/6e4:"hour"===t?s/36e5:"day"===t?(s-r)/864e5:"week"===t?(s-r)/6048e5:s),
n?a:y(a)},from:function(e,t){return we.duration({to:this,from:e}).locale(this.locale()).humanize(!t);
},fromNow:function(e){return this.from(we(),e)},calendar:function(e){var t=e||we(),n=H(t,this).startOf("day"),s=this.diff(n,"days",!0),a=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse";
return this.format(this.localeData().calendar(a,this,we(t)))},isLeapYear:function(){
return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=re(e,this.localeData()),
this.add(e-t,"d")):t},month:ye("Month",!0),startOf:function(e){switch(e=b(e)){case"year":
this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":
this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":
this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),
"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(t){return t=b(t),
t===e||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms");
},isAfter:function(e,t){var n;return t=b("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=we.isMoment(e)?e:we(e),
+this>+e):(n=we.isMoment(e)?+e:+we(e),n<+this.clone().startOf(t))},isBefore:function(e,t){
var n;return t=b("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=we.isMoment(e)?e:we(e),
+e>+this):(n=we.isMoment(e)?+e:+we(e),+this.clone().endOf(t)<n)},isBetween:function(e,t,n){
return this.isAfter(e,n)&&this.isBefore(t,n)},isSame:function(e,t){var n;return t=b(t||"millisecond"),
"millisecond"===t?(e=we.isMoment(e)?e:we(e),+this===+e):(n=+we(e),+this.clone().startOf(t)<=n&&n<=+this.clone().endOf(t));
},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){
return e=we.apply(null,arguments),this>e?this:e}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){
return e=we.apply(null,arguments),e>this?this:e}),zone:i("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(e,t){
return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset();
}),utcOffset:function(e,t){var n,s=this._offset||0;return null!=e?("string"==typeof e&&(e=j(e)),
Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._dateUtcOffset()),this._offset=e,
this._isUTC=!0,null!=n&&this.add(n,"m"),s!==e&&(!t||this._changeInProgress?w(this,we.duration(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,
we.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:this._dateUtcOffset();
},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC;
},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":"";
},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){
return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(j(this._i)),
this},hasAlignedHourOffset:function(e){return e=e?we(e).utcOffset():0,(this.utcOffset()-e)%60===0;
},daysInMonth:function(){return U(this.year(),this.month())},dayOfYear:function(e){
var t=Se((we(this).startOf("day")-we(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d");
},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3);
},weekYear:function(e){var t=ce(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=ce(this,1,4).year;
return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);
return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=ce(this,1,4).week;
return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;
return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7);
},isoWeeksInYear:function(){return W(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;
return W(this.year(),e.dow,e.doy)},get:function(e){return e=b(e),this[e]()},set:function(e,t){
var n;if("object"==typeof e)for(n in e)this.set(n,e[n]);else e=b(e),"function"==typeof this[e]&&this[e](t);
return this},locale:function(t){var n;return t===e?this._locale._abbr:(n=we.localeData(t),
null!=n&&(this._locale=n),this)},lang:i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){
return t===e?this.localeData():this.locale(t)}),localeData:function(){return this._locale;
},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15);
}}),we.fn.millisecond=we.fn.milliseconds=ye("Milliseconds",!1),we.fn.second=we.fn.seconds=ye("Seconds",!1),
we.fn.minute=we.fn.minutes=ye("Minutes",!1),we.fn.hour=we.fn.hours=ye("Hours",!0),
we.fn.date=ye("Date",!0),we.fn.dates=i("dates accessor is deprecated. Use date instead.",ye("Date",!0)),
we.fn.year=ye("FullYear",!0),we.fn.years=i("years accessor is deprecated. Use year instead.",ye("FullYear",!0)),
we.fn.days=we.fn.day,we.fn.months=we.fn.month,we.fn.weeks=we.fn.week,we.fn.isoWeeks=we.fn.isoWeek,
we.fn.quarters=we.fn.quarter,we.fn.toJSON=we.fn.toISOString,we.fn.isUTC=we.fn.isUtc,
_(we.duration.fn=h.prototype,{_bubble:function(){var e,t,n,s=this._milliseconds,a=this._days,i=this._months,r=this._data,o=0;
r.milliseconds=s%1e3,e=y(s/1e3),r.seconds=e%60,t=y(e/60),r.minutes=t%60,n=y(t/60),
r.hours=n%24,a+=y(n/24),o=y(pe(a)),a-=y(ge(o)),i+=y(a/30),a%=30,o+=y(i/12),i%=12,
r.days=a,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),
this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),
this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),
this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),
this._data.years=Math.abs(this._data.years),this},weeks:function(){return y(this.days()/7);
},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*O(this._months/12);
},humanize:function(e){var t=ue(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),
this.localeData().postformat(t)},add:function(e,t){var n=we.duration(e,t);return this._milliseconds+=n._milliseconds,
this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){
var n=we.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,
this._months-=n._months,this._bubble(),this},get:function(e){return e=b(e),this[e.toLowerCase()+"s"]();
},as:function(e){var t,n;if(e=b(e),"month"===e||"year"===e)return t=this._days+this._milliseconds/864e5,
n=this._months+12*pe(t),"month"===e?n:n/12;switch(t=this._days+Math.round(ge(this._months/12)),
e){case"week":return t/7+this._milliseconds/6048e5;case"day":return t+this._milliseconds/864e5;
case"hour":return 24*t+this._milliseconds/36e5;case"minute":return 24*t*60+this._milliseconds/6e4;
case"second":return 24*t*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*t*60*60*1e3)+this._milliseconds;
default:throw new Error("Unknown unit "+e)}},lang:we.fn.lang,locale:we.fn.locale,
toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){
return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),a=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3);
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(s||a||i?"T":"")+(s?s+"H":"")+(a?a+"M":"")+(i?i+"S":""):"P0D";
},localeData:function(){return this._locale},toJSON:function(){return this.toISOString();
}}),we.duration.fn.toString=we.duration.fn.toISOString;for(ve in lt)n(lt,ve)&&Me(ve.toLowerCase());
we.duration.fn.asMilliseconds=function(){return this.as("ms")},we.duration.fn.asSeconds=function(){
return this.as("s")},we.duration.fn.asMinutes=function(){return this.as("m")},we.duration.fn.asHours=function(){
return this.as("h")},we.duration.fn.asDays=function(){return this.as("d")},we.duration.fn.asWeeks=function(){
return this.as("weeks")},we.duration.fn.asMonths=function(){return this.as("M")},
we.duration.fn.asYears=function(){return this.as("y")},we.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,
ordinal:function(e){var t=e%10,n=1===O(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";
return e+n}}),Ie?module.exports=we:"function"==typeof define&&define.amd?(define(["require","exports","module"],function(e,t,n){
return n.config&&n.config()&&n.config().noGlobal===!0&&(be.moment=Ye),we}),De(!0)):De();
}).call(this);