!function(e){"undefined"==typeof e.fn.each2&&e.extend(e.fn,{each2:function(t){for(var s=e([0]),i=-1,n=this.length;++i<n&&(s.context=s[0]=this[i])&&t.call(s[0],i,s)!==!1;);
return this}})}(jQuery),function(e,t){"use strict";function s(t){var s=e(document.createTextNode(""));
t.before(s),s.before(t),s.remove()}function i(e){function t(e){return W[e]||e}return e.replace(/[^\u0000-\u007E]/g,t);
}function n(e,t){for(var s=0,i=t.length;i>s;s+=1)if(a(e,t[s]))return s;return-1}function o(){
var t=e(z);t.appendTo("body");var s={width:t.width()-t[0].clientWidth,height:t.height()-t[0].clientHeight
};return t.remove(),s}function a(e,s){return e===s?!0:e===t||s===t?!1:null===e||null===s?!1:e.constructor===String?e+""==s+"":s.constructor===String?s+""==e+"":!1;
}function r(t,s){var i,n,o;if(null===t||t.length<1)return[];for(i=t.split(s),n=0,
o=i.length;o>n;n+=1)i[n]=e.trim(i[n]);return i}function c(e){return e.outerWidth(!1)-e.width();
}function l(s){var i="keyup-change-value";s.on("keydown",function(){e.data(s,i)===t&&e.data(s,i,s.val());
}),s.on("keyup",function(){var n=e.data(s,i);n!==t&&s.val()!==n&&(e.removeData(s,i),
s.trigger("keyup-change"))})}function h(s){s.on("mousemove",function(s){var i=F;(i===t||i.x!==s.pageX||i.y!==s.pageY)&&e(s.target).trigger("mousemove-filtered",s);
})}function u(e,s,i){i=i||t;var n;return function(){var t=arguments;window.clearTimeout(n),
n=window.setTimeout(function(){s.apply(i,t)},e)}}function d(e,t){var s=u(e,function(e){
t.trigger("scroll-debounced",e)});t.on("scroll",function(e){n(e.target,t.get())>=0&&s(e);
})}function p(e){e[0]!==document.activeElement&&window.setTimeout(function(){var t,s=e[0],i=e.val().length;
e.focus();var n=s.offsetWidth>0||s.offsetHeight>0;n&&s===document.activeElement&&(s.setSelectionRange?s.setSelectionRange(i,i):s.createTextRange&&(t=s.createTextRange(),
t.collapse(!1),t.select()))},0)}function f(t){t=e(t)[0];var s=0,i=0;if("selectionStart"in t)s=t.selectionStart,
i=t.selectionEnd-s;else if("selection"in document){t.focus();var n=document.selection.createRange();
i=document.selection.createRange().text.length,n.moveStart("character",-t.value.length),
s=n.text.length-i}return{offset:s,length:i}}function g(e){e.preventDefault(),e.stopPropagation();
}function m(e){e.preventDefault(),e.stopImmediatePropagation()}function v(t){if(!L){
var s=t[0].currentStyle||window.getComputedStyle(t[0],null);L=e(document.createElement("div")).css({
position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:s.fontSize,
fontFamily:s.fontFamily,fontStyle:s.fontStyle,fontWeight:s.fontWeight,letterSpacing:s.letterSpacing,
textTransform:s.textTransform,whiteSpace:"nowrap"}),L.attr("class","select2-sizer"),
e("body").append(L)}return L.text(t.val()),L.width()}function w(t,s,i){var n,o,a=[];
n=e.trim(t.attr("class")),n&&(n=""+n,e(n.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&a.push(this);
})),n=e.trim(s.attr("class")),n&&(n=""+n,e(n.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(o=i(this),
o&&a.push(o))})),t.attr("class",a.join(" "))}function b(e,t,s,n){var o=i(e.toUpperCase()).indexOf(i(t.toUpperCase())),a=t.length;
return 0>o?void s.push(n(e)):(s.push(n(e.substring(0,o))),s.push("<span class='select2-match'>"),
s.push(n(e.substring(o,o+a))),s.push("</span>"),void s.push(n(e.substring(o+a,e.length))));
}function C(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;",
"'":"&#39;","/":"&#47;"};return String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e];
})}function S(s){var i,n=null,o=s.quietMillis||100,a=s.url,r=this;return function(c){
window.clearTimeout(i),i=window.setTimeout(function(){var i=s.data,o=a,l=s.transport||e.fn.select2.ajaxDefaults.transport,h={
type:s.type||"GET",cache:s.cache||!1,jsonpCallback:s.jsonpCallback||t,dataType:s.dataType||"json"
},u=e.extend({},e.fn.select2.ajaxDefaults.params,h);i=i?i.call(r,c.term,c.page,c.context):null,
o="function"==typeof o?o.call(r,c.term,c.page,c.context):o,n&&"function"==typeof n.abort&&n.abort(),
s.params&&(e.isFunction(s.params)?e.extend(u,s.params.call(r)):e.extend(u,s.params)),
e.extend(u,{url:o,dataType:s.dataType,data:i,success:function(e){var t=s.results(e,c.page,c);
c.callback(t)}}),n=l.call(r,u)},o)}}function y(t){var s,i,n=t,o=function(e){return""+e.text;
};e.isArray(n)&&(i=n,n={results:i}),e.isFunction(n)===!1&&(i=n,n=function(){return i;
});var a=n();return a.text&&(o=a.text,e.isFunction(o)||(s=a.text,o=function(e){return e[s];
})),function(t){var s,i=t.term,a={results:[]};return""===i?void t.callback(n()):(s=function(n,a){
var r,c;if(n=n[0],n.children){r={};for(c in n)n.hasOwnProperty(c)&&(r[c]=n[c]);r.children=[],
e(n.children).each2(function(e,t){s(t,r.children)}),(r.children.length||t.matcher(i,o(r),n))&&a.push(r);
}else t.matcher(i,o(n),n)&&a.push(n)},e(n().results).each2(function(e,t){s(t,a.results);
}),void t.callback(a))}}function E(s){var i=e.isFunction(s);return function(n){var o=n.term,a={
results:[]},r=i?s(n):s;e.isArray(r)&&(e(r).each(function(){var e=this.text!==t,s=e?this.text:this;
(""===o||n.matcher(o,s))&&a.results.push(e?this:{id:this,text:this})}),n.callback(a));
}}function x(t,s){if(e.isFunction(t))return!0;if(!t)return!1;if("string"==typeof t)return!0;
throw new Error(s+" must be a string, function, or falsy value")}function T(t,s){
if(e.isFunction(t)){var i=Array.prototype.slice.call(arguments,2);return t.apply(s,i);
}return t}function O(t){var s=0;return e.each(t,function(e,t){t.children?s+=O(t.children):s++;
}),s}function P(e,s,i,n){var o,r,c,l,h,u=e,d=!1;if(!n.createSearchChoice||!n.tokenSeparators||n.tokenSeparators.length<1)return t;
for(;;){for(r=-1,c=0,l=n.tokenSeparators.length;l>c&&(h=n.tokenSeparators[c],r=e.indexOf(h),
!(r>=0));c++);if(0>r)break;if(o=e.substring(0,r),e=e.substring(r+h.length),o.length>0&&(o=n.createSearchChoice.call(this,o,s),
o!==t&&null!==o&&n.id(o)!==t&&null!==n.id(o))){for(d=!1,c=0,l=s.length;l>c;c++)if(a(n.id(o),n.id(s[c]))){
d=!0;break}d||i(o)}}return u!==e?e:void 0}function I(){var t=this;e.each(arguments,function(e,s){
t[s].remove(),t[s]=null})}function k(t,s){var i=function(){};return i.prototype=new t,
i.prototype.constructor=i,i.prototype.parent=t.prototype,i.prototype=e.extend(i.prototype,s),
i}if(window.Select2===t){var A,R,D,H,M,L,N,U,F={x:0,y:0},A={TAB:9,ENTER:13,ESC:27,
SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,
HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){switch(e=e.which?e.which:e){
case A.LEFT:case A.RIGHT:case A.UP:case A.DOWN:return!0}return!1},isControl:function(e){
var t=e.which;switch(t){case A.SHIFT:case A.CTRL:case A.ALT:return!0}return e.metaKey?!0:!1;
},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e}},z="<div class='select2-measure-scrollbar'></div>",W={
"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A",
"Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A",
"Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A",
"Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY",
"Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C",
"Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D",
"Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ",
"Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E",
"Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E",
"Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E",
"Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G",
"Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H",
"Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",
"Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I",
"Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J",
"Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K",
"Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L",
"Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj",
"Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N",
"Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N",
"Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O",
"Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O",
"Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O",
"Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O",
"Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P",
"Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R",
"Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R",
"Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S",
"Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T",
"Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ",
"Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U",
"Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U",
"Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U",
"Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W",
"Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X",
"Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y",
"Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z",
"Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a",
"ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a",
"ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a",
"ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae",
"ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b",
"ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c",
"ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d",
"ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e",
"è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e",
"ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e",
"ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f",
"ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g",
"ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h",
"ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i",
"í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i",
"ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k",
"ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k",
"ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l",
"ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m",
"ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n",
"ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n",
"ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o",
"õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o",
"ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o",
"ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o",
"ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p",
"ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r",
"ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r",
"ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s",
"ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t",
"ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t",
"ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u",
"ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u",
"ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u",
"ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy",
"ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x",
"ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y",
"ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z",
"ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε",
"Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι",
"ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};N=e(document),M=function(){
var e=1;return function(){return e++}}(),R=k(Object,{bind:function(e){var t=this;return function(){
e.apply(t,arguments)}},init:function(s){var i,n,a=".select2-results";this.opts=s=this.prepareOpts(s),
this.id=s.id,s.element.data("select2")!==t&&null!==s.element.data("select2")&&s.element.data("select2").destroy(),
this.container=this.createContainer(),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"
}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(s.element.attr("id")||"autogen"+M()),
this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),
this.container.attr("id",this.containerId),this.container.attr("title",s.element.attr("title")),
this.body=e("body"),w(this.container,this.opts.element,this.opts.adaptContainerCssClass),
this.container.attr("style",s.element.attr("style")),this.container.css(T(s.containerCss,this.opts.element)),
this.container.addClass(T(s.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),
this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",g),
this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),
w(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(T(s.dropdownCssClass,this.opts.element)),
this.dropdown.data("select2",this),this.dropdown.on("click",g),this.results=i=this.container.find(a),
this.search=n=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,
this.context=null,this.initContainer(),this.container.on("click",g),h(this.results),
this.dropdown.on("mousemove-filtered",a,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",a,this.bind(function(e){
this._touchEvent=!0,this.highlightUnderEvent(e)})),this.dropdown.on("touchmove",a,this.bind(this.touchMoved)),
this.dropdown.on("touchstart touchend",a,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(e){
this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),d(80,this.results),
this.dropdown.on("scroll-debounced",a,this.bind(this.loadMoreIfNeeded)),e(this.container).on("change",".select2-input",function(e){
e.stopPropagation()}),e(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation();
}),e.fn.mousewheel&&i.mousewheel(function(e,t,s,n){var o=i.scrollTop();n>0&&0>=o-n?(i.scrollTop(0),
g(e)):0>n&&i.get(0).scrollHeight-i.scrollTop()+n<=i.height()&&(i.scrollTop(i.get(0).scrollHeight-i.height()),
g(e))}),l(n),n.on("keyup-change input paste",this.bind(this.updateResults)),n.on("focus",function(){
n.addClass("select2-focused")}),n.on("blur",function(){n.removeClass("select2-focused");
}),this.dropdown.on("mouseup",a,this.bind(function(t){e(t.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(t),
this.selectHighlighted(t))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(e){
e.stopPropagation()}),this.nextSearchTerm=t,e.isFunction(this.opts.initSelection)&&(this.initSelection(),
this.monitorSource()),null!==s.maximumInputLength&&this.search.attr("maxlength",s.maximumInputLength);
var r=s.element.prop("disabled");r===t&&(r=!1),this.enable(!r);var c=s.element.prop("readonly");
c===t&&(c=!1),this.readonly(c),U=U||o(),this.autofocus=s.element.prop("autofocus"),
s.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",s.searchInputPlaceholder);
},destroy:function(){var e=this.opts.element,s=e.data("select2");this.close(),e.length&&e[0].detachEvent&&e.each(function(){
this.detachEvent("onpropertychange",this._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),
this.propertyObserver=null),this._sync=null,s!==t&&(s.container.remove(),s.liveRegion.remove(),
s.dropdown.remove(),e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),
this.elementTabIndex?e.attr({tabindex:this.elementTabIndex}):e.removeAttr("tabindex"),
e.show()),I.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(e){
return e.is("option")?{id:e.prop("value"),text:e.text(),element:e.get(),css:e.attr("class"),
disabled:e.prop("disabled"),locked:a(e.attr("locked"),"locked")||a(e.data("locked"),!0)
}:e.is("optgroup")?{text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")
}:void 0},prepareOpts:function(s){var i,n,o,c,l=this;if(i=s.element,"select"===i.get(0).tagName.toLowerCase()&&(this.select=n=s.element),
n&&e.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){
if(this in s)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");
}),s=e.extend({},{populateResults:function(i,n,o){var a,r=this.opts.id,c=this.liveRegion;
(a=function(i,n,h){var u,d,p,f,g,m,v,w,b,C;i=s.sortResults(i,n,o);var S=[];for(u=0,
d=i.length;d>u;u+=1)p=i[u],g=p.disabled===!0,f=!g&&r(p)!==t,m=p.children&&p.children.length>0,
v=e("<li></li>"),v.addClass("select2-results-dept-"+h),v.addClass("select2-result"),
v.addClass(f?"select2-result-selectable":"select2-result-unselectable"),g&&v.addClass("select2-disabled"),
m&&v.addClass("select2-result-with-children"),v.addClass(l.opts.formatResultCssClass(p)),
v.attr("role","presentation"),w=e(document.createElement("div")),w.addClass("select2-result-label"),
w.attr("id","select2-result-label-"+M()),w.attr("role","option"),C=s.formatResult(p,w,o,l.opts.escapeMarkup),
C!==t&&(w.html(C),v.append(w)),m&&(b=e("<ul></ul>"),b.addClass("select2-result-sub"),
a(p.children,b,h+1),v.append(b)),v.data("select2-data",p),S.push(v[0]);n.append(S),
c.text(s.formatMatches(i.length))})(n,i,0)}},e.fn.select2.defaults,s),"function"!=typeof s.id&&(o=s.id,
s.id=function(e){return e[o]}),e.isArray(s.element.data("select2Tags"))){if("tags"in s)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+s.element.attr("id");
s.tags=s.element.data("select2Tags")}if(n?(s.query=this.bind(function(e){var s,n,o,a={
results:[],more:!1},r=e.term;o=function(t,s){var i;t.is("option")?e.matcher(r,t.text(),t)&&s.push(l.optionToData(t)):t.is("optgroup")&&(i=l.optionToData(t),
t.children().each2(function(e,t){o(t,i.children)}),i.children.length>0&&s.push(i));
},s=i.children(),this.getPlaceholder()!==t&&s.length>0&&(n=this.getPlaceholderOption(),
n&&(s=s.not(n))),s.each2(function(e,t){o(t,a.results)}),e.callback(a)}),s.id=function(e){
return e.id}):"query"in s||("ajax"in s?(c=s.element.data("ajax-url"),c&&c.length>0&&(s.ajax.url=c),
s.query=S.call(s.element,s.ajax)):"data"in s?s.query=y(s.data):"tags"in s&&(s.query=E(s.tags),
s.createSearchChoice===t&&(s.createSearchChoice=function(t){return{id:e.trim(t),text:e.trim(t)
}}),s.initSelection===t&&(s.initSelection=function(t,i){var n=[];e(r(t.val(),s.separator)).each(function(){
var t={id:this,text:this},i=s.tags;e.isFunction(i)&&(i=i()),e(i).each(function(){
return a(this.id,t.id)?(t=this,!1):void 0}),n.push(t)}),i(n)}))),"function"!=typeof s.query)throw"query function not defined for Select2 "+s.element.attr("id");
if("top"===s.createSearchChoicePosition)s.createSearchChoicePosition=function(e,t){
e.unshift(t)};else if("bottom"===s.createSearchChoicePosition)s.createSearchChoicePosition=function(e,t){
e.push(t)};else if("function"!=typeof s.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
return s},monitorSource:function(){var s,i=this.opts.element,n=this;i.on("change.select2",this.bind(function(e){
this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),
this._sync=this.bind(function(){var e=i.prop("disabled");e===t&&(e=!1),this.enable(!e);
var s=i.prop("readonly");s===t&&(s=!1),this.readonly(s),w(this.container,this.opts.element,this.opts.adaptContainerCssClass),
this.container.addClass(T(this.opts.containerCssClass,this.opts.element)),w(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),
this.dropdown.addClass(T(this.opts.dropdownCssClass,this.opts.element))}),i.length&&i[0].attachEvent&&i.each(function(){
this.attachEvent("onpropertychange",n._sync)}),s=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,
s!==t&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),
this.propertyObserver=new s(function(t){e.each(t,n._sync)}),this.propertyObserver.observe(i.get(0),{
attributes:!0,subtree:!1}))},triggerSelect:function(t){var s=e.Event("select2-selecting",{
val:this.id(t),object:t,choice:t});return this.opts.element.trigger(s),!s.isDefaultPrevented();
},triggerChange:function(t){t=t||{},t=e.extend({},t,{type:"change",val:this.val()
}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(t),
this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur();
},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){
var e=this._enabled&&!this._readonly,t=!e;return e===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",t),
this.close(),this.enabledInterface=e,!0)},enable:function(e){e===t&&(e=!0),this._enabled!==e&&(this._enabled=e,
this.opts.element.prop("disabled",!e),this.enableInterface())},disable:function(){
this.enable(!1)},readonly:function(e){e===t&&(e=!1),this._readonly!==e&&(this._readonly=e,
this.opts.element.prop("readonly",e),this.enableInterface())},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1;
},positionDropdown:function(){var t,s,i,n,o,a=this.dropdown,r=this.container.offset(),c=this.container.outerHeight(!1),l=this.container.outerWidth(!1),h=a.outerHeight(!1),u=e(window),d=u.width(),p=u.height(),f=u.scrollLeft()+d,g=u.scrollTop()+p,m=r.top+c,v=r.left,w=g>=m+h,b=r.top-h>=u.scrollTop(),C=a.outerWidth(!1),S=f>=v+C,y=a.hasClass("select2-drop-above");
y?(s=!0,!b&&w&&(i=!0,s=!1)):(s=!1,!w&&b&&(i=!0,s=!0)),i&&(a.hide(),r=this.container.offset(),
c=this.container.outerHeight(!1),l=this.container.outerWidth(!1),h=a.outerHeight(!1),
f=u.scrollLeft()+d,g=u.scrollTop()+p,m=r.top+c,v=r.left,C=a.outerWidth(!1),S=f>=v+C,
a.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(o=e(".select2-results",a)[0],
a.addClass("select2-drop-auto-width"),a.css("width",""),C=a.outerWidth(!1)+(o.scrollHeight===o.clientHeight?0:U.width),
C>l?l=C:C=l,h=a.outerHeight(!1),S=f>=v+C):this.container.removeClass("select2-drop-auto-width"),
"static"!==this.body.css("position")&&(t=this.body.offset(),m-=t.top,v-=t.left),S||(v=r.left+this.container.outerWidth(!1)-C),
n={left:v,width:l},s?(n.top=r.top-h,n.bottom="auto",this.container.addClass("select2-drop-above"),
a.addClass("select2-drop-above")):(n.top=m,n.bottom="auto",this.container.removeClass("select2-drop-above"),
a.removeClass("select2-drop-above")),n=e.extend(n,T(this.opts.dropdownCss,this.opts.element)),
a.css(n)},shouldOpen:function(){var t;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(t=e.Event("select2-opening"),
this.opts.element.trigger(t),!t.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){
this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above");
},open:function(){return this.shouldOpen()?(this.opening(),N.on("mousemove.select2Event",function(e){
F.x=e.pageX,F.y=e.pageY}),!0):!1},opening:function(){var t,i=this.containerEventName,n="scroll."+i,o="resize."+i,a="orientationchange."+i;
this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),
t=e("#select2-drop-mask"),0==t.length&&(t=e(document.createElement("div")),t.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),
t.hide(),t.appendTo(this.body),t.on("mousedown touchstart click",function(i){s(t);
var n,o=e("#select2-drop");o.length>0&&(n=o.data("select2"),n.opts.selectOnBlur&&n.selectHighlighted({
noFocus:!0}),n.close(),i.preventDefault(),i.stopPropagation())})),this.dropdown.prev()[0]!==t[0]&&this.dropdown.before(t),
e("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),t.show(),
this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");
var r=this;this.container.parents().add(window).each(function(){e(this).on(o+" "+n+" "+a,function(e){
r.opened()&&r.positionDropdown()})})},close:function(){if(this.opened()){var t=this.containerEventName,s="scroll."+t,i="resize."+t,n="orientationchange."+t;
this.container.parents().add(window).each(function(){e(this).off(s).off(i).off(n);
}),this.clearDropdownAlignmentPreference(),e("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),
this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),
this.results.empty(),N.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),
this.opts.element.trigger(e.Event("select2-close"))}},externalSearch:function(e){
this.open(),this.search.val(e),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){
return T(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){
var t,s,i,n,o,a,r,c,l=this.results;if(s=this.highlight(),!(0>s)){if(0==s)return void l.scrollTop(0);
t=this.findHighlightableChoices().find(".select2-result-label"),i=e(t[s]),c=(i.offset()||{}).top||0,
n=c+i.outerHeight(!0),s===t.length-1&&(r=l.find("li.select2-more-results"),r.length>0&&(n=r.offset().top+r.outerHeight(!0))),
o=l.offset().top+l.outerHeight(!0),n>o&&l.scrollTop(l.scrollTop()+(n-o)),a=c-l.offset().top,
0>a&&"none"!=i.css("display")&&l.scrollTop(l.scrollTop()+a)}},findHighlightableChoices:function(){
return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
},moveHighlight:function(t){for(var s=this.findHighlightableChoices(),i=this.highlight();i>-1&&i<s.length;){
i+=t;var n=e(s[i]);if(n.hasClass("select2-result-selectable")&&!n.hasClass("select2-disabled")&&!n.hasClass("select2-selected")){
this.highlight(i);break}}},highlight:function(t){var s,i,o=this.findHighlightableChoices();
return 0===arguments.length?n(o.filter(".select2-highlighted")[0],o.get()):(t>=o.length&&(t=o.length-1),
0>t&&(t=0),this.removeHighlight(),s=e(o[t]),s.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",s.find(".select2-result-label").attr("id")),
this.ensureHighlightVisible(),this.liveRegion.text(s.text()),i=s.data("select2-data"),
void(i&&this.opts.element.trigger({type:"select2-highlight",val:this.id(i),choice:i
})))},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted");
},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1;
},countSelectableResults:function(){return this.findHighlightableChoices().length;
},highlightUnderEvent:function(t){var s=e(t.target).closest(".select2-result-selectable");
if(s.length>0&&!s.is(".select2-highlighted")){var i=this.findHighlightableChoices();
this.highlight(i.index(s))}else 0==s.length&&this.removeHighlight()},loadMoreIfNeeded:function(){
var e,t=this.results,s=t.find("li.select2-more-results"),i=this.resultsPage+1,n=this,o=this.search.val(),a=this.context;
0!==s.length&&(e=s.offset().top-t.offset().top-t.height(),e<=this.opts.loadMorePadding&&(s.addClass("select2-active"),
this.opts.query({element:this.opts.element,term:o,page:i,context:a,matcher:this.opts.matcher,
callback:this.bind(function(e){n.opened()&&(n.opts.populateResults.call(this,t,e.results,{
term:o,page:i,context:a}),n.postprocessResults(e,!1,!1),e.more===!0?(s.detach().appendTo(t).text(T(n.opts.formatLoadMore,n.opts.element,i+1)),
window.setTimeout(function(){n.loadMoreIfNeeded()},10)):s.remove(),n.positionDropdown(),
n.resultsPage=i,n.context=e.context,this.opts.element.trigger({type:"select2-loaded",
items:e}))})})))},tokenize:function(){},updateResults:function(s){function i(){l.removeClass("select2-active"),
d.positionDropdown(),h.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?d.liveRegion.text(h.text()):d.liveRegion.text(d.opts.formatMatches(h.find(".select2-result-selectable").length));
}function n(e){h.html(e),i()}var o,r,c,l=this.search,h=this.results,u=this.opts,d=this,p=l.val(),f=e.data(this.container,"select2-last-term");
if((s===!0||!f||!a(p,f))&&(e.data(this.container,"select2-last-term",p),s===!0||this.showSearchInput!==!1&&this.opened())){
c=++this.queryCount;var g=this.getMaximumSelectionSize();if(g>=1&&(o=this.data(),
e.isArray(o)&&o.length>=g&&x(u.formatSelectionTooBig,"formatSelectionTooBig")))return void n("<li class='select2-selection-limit'>"+T(u.formatSelectionTooBig,u.element,g)+"</li>");
if(l.val().length<u.minimumInputLength)return n(x(u.formatInputTooShort,"formatInputTooShort")?"<li class='select2-no-results'>"+T(u.formatInputTooShort,u.element,l.val(),u.minimumInputLength)+"</li>":""),
void(s&&this.showSearch&&this.showSearch(!0));if(u.maximumInputLength&&l.val().length>u.maximumInputLength)return void n(x(u.formatInputTooLong,"formatInputTooLong")?"<li class='select2-no-results'>"+T(u.formatInputTooLong,u.element,l.val(),u.maximumInputLength)+"</li>":"");
u.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+T(u.formatSearching,u.element)+"</li>"),
l.addClass("select2-active"),this.removeHighlight(),r=this.tokenize(),r!=t&&null!=r&&l.val(r),
this.resultsPage=1,u.query({element:u.element,term:l.val(),page:this.resultsPage,
context:null,matcher:u.matcher,callback:this.bind(function(o){var r;if(c==this.queryCount){
if(!this.opened())return void this.search.removeClass("select2-active");if(this.context=o.context===t?null:o.context,
this.opts.createSearchChoice&&""!==l.val()&&(r=this.opts.createSearchChoice.call(d,l.val(),o.results),
r!==t&&null!==r&&d.id(r)!==t&&null!==d.id(r)&&0===e(o.results).filter(function(){
return a(d.id(this),d.id(r))}).length&&this.opts.createSearchChoicePosition(o.results,r)),
0===o.results.length&&x(u.formatNoMatches,"formatNoMatches"))return void n("<li class='select2-no-results'>"+T(u.formatNoMatches,u.element,l.val())+"</li>");
h.empty(),d.opts.populateResults.call(this,h,o.results,{term:l.val(),page:this.resultsPage,
context:null}),o.more===!0&&x(u.formatLoadMore,"formatLoadMore")&&(h.append("<li class='select2-more-results'>"+u.escapeMarkup(T(u.formatLoadMore,u.element,this.resultsPage))+"</li>"),
window.setTimeout(function(){d.loadMoreIfNeeded()},10)),this.postprocessResults(o,s),
i(),this.opts.element.trigger({type:"select2-loaded",items:o})}})})}},cancel:function(){
this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0
}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),
this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
},focusSearch:function(){p(this.search)},selectHighlighted:function(e){if(this._touchMoved)return void this.clearTouchMoved();
var t=this.highlight(),s=this.results.find(".select2-highlighted"),i=s.closest(".select2-result").data("select2-data");
i?(this.highlight(t),this.onSelect(i,e)):e&&e.noFocus&&this.close()},getPlaceholder:function(){
var e;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((e=this.getPlaceholderOption())!==t?e.text():t);
},getPlaceholderOption:function(){if(this.select){var s=this.select.children("option").first();
if(this.opts.placeholderOption!==t)return"first"===this.opts.placeholderOption&&s||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);
if(""===e.trim(s.text())&&""===s.val())return s}},initContainerWidth:function(){function s(){
var s,i,n,o,a,r;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";
if("copy"===this.opts.width||"resolve"===this.opts.width){if(s=this.opts.element.attr("style"),
s!==t)for(i=s.split(";"),o=0,a=i.length;a>o;o+=1)if(r=i[o].replace(/\s/g,""),n=r.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
null!==n&&n.length>=1)return n[1];return"resolve"===this.opts.width?(s=this.opts.element.css("width"),
s.indexOf("%")>0?s:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null;
}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}var i=s.call(this);
null!==i&&this.container.css("width",i)}}),D=k(R,{createContainer:function(){var t=e(document.createElement("div")).attr({
"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));
return t},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled());
},opening:function(){var s,i,n;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),
this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),
this.opts.shouldFocusInput(this)&&(this.search.focus(),s=this.search.get(0),s.createTextRange?(i=s.createTextRange(),
i.collapse(!1),i.select()):s.setSelectionRange&&(n=this.search.val().length,s.setSelectionRange(n,n))),
""===this.search.val()&&this.nextSearchTerm!=t&&(this.search.val(this.nextSearchTerm),
this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),
this.opts.element.trigger(e.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),
this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus());
},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),
this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active");
},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),
this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){e("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),
this.parent.destroy.apply(this,arguments),I.call(this,"selection","focusser")},initContainer:function(){
var t,i,n=this.container,o=this.dropdown,a=M();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),
this.selection=t=n.find(".select2-choice"),this.focusser=n.find(".select2-focusser"),
t.find(".select2-chosen").attr("id","select2-chosen-"+a),this.focusser.attr("aria-labelledby","select2-chosen-"+a),
this.results.attr("id","select2-results-"+a),this.search.attr("aria-owns","select2-results-"+a),
this.focusser.attr("id","s2id_autogen"+a),i=e("label[for='"+this.opts.element.attr("id")+"']"),
this.focusser.prev().text(i.text()).attr("for",this.focusser.attr("id"));var r=this.opts.element.attr("title");
this.opts.element.attr("title",r||i.text()),this.focusser.attr("tabindex",this.elementTabIndex),
this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(e("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),
this.search.on("keydown",this.bind(function(e){if(this.isInterfaceEnabled()){if(e.which===A.PAGE_UP||e.which===A.PAGE_DOWN)return void g(e);
switch(e.which){case A.UP:case A.DOWN:return this.moveHighlight(e.which===A.UP?-1:1),
void g(e);case A.ENTER:return this.selectHighlighted(),void g(e);case A.TAB:return void this.selectHighlighted({
noFocus:!0});case A.ESC:return this.cancel(e),void g(e)}}})),this.search.on("blur",this.bind(function(e){
document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){
this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(e){
if(this.isInterfaceEnabled()&&e.which!==A.TAB&&!A.isControl(e)&&!A.isFunctionKey(e)&&e.which!==A.ESC){
if(this.opts.openOnEnter===!1&&e.which===A.ENTER)return void g(e);if(e.which==A.DOWN||e.which==A.UP||e.which==A.ENTER&&this.opts.openOnEnter){
if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;return this.open(),void g(e);
}return e.which==A.DELETE||e.which==A.BACKSPACE?(this.opts.allowClear&&this.clear(),
void g(e)):void 0}})),l(this.focusser),this.focusser.on("keyup-change input",this.bind(function(e){
if(this.opts.minimumResultsForSearch>=0){if(e.stopPropagation(),this.opened())return;
this.open()}})),t.on("mousedown touchstart","abbr",this.bind(function(e){this.isInterfaceEnabled()&&(this.clear(),
m(e),this.close(),this.selection.focus())})),t.on("mousedown touchstart",this.bind(function(i){
s(t),this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),
this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),g(i)})),o.on("mousedown touchstart",this.bind(function(){
this.opts.shouldFocusInput(this)&&this.search.focus()})),t.on("focus",this.bind(function(e){
g(e)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),
this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){
this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(e.Event("select2-blur")));
})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),
this.container.addClass("select2-container-active")})),this.initContainerWidth(),
this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(t){
var s=this.selection.data("select2-data");if(s){var i=e.Event("select2-clearing");
if(this.opts.element.trigger(i),i.isDefaultPrevented())return;var n=this.getPlaceholderOption();
this.opts.element.val(n?n.val():""),this.selection.find(".select2-chosen").empty(),
this.selection.removeData("select2-data"),this.setPlaceholder(),t!==!1&&(this.opts.element.trigger({
type:"select2-removed",val:this.id(s),choice:s}),this.triggerChange({removed:s}));
}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),
this.close(),this.setPlaceholder();else{var e=this;this.opts.initSelection.call(null,this.opts.element,function(s){
s!==t&&null!==s&&(e.updateSelection(s),e.close(),e.setPlaceholder(),e.nextSearchTerm=e.opts.nextSearchTerm(s,e.search.val()));
})}},isPlaceholderOptionSelected:function(){var e;return this.getPlaceholder()===t?!1:(e=this.getPlaceholderOption())!==t&&e.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===t||null===this.opts.element.val();
},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),s=this;
return"select"===t.element.get(0).tagName.toLowerCase()?t.initSelection=function(e,t){
var i=e.find("option").filter(function(){return this.selected&&!this.disabled});t(s.optionToData(i));
}:"data"in t&&(t.initSelection=t.initSelection||function(s,i){var n=s.val(),o=null;
t.query({matcher:function(e,s,i){var r=a(n,t.id(i));return r&&(o=i),r},callback:e.isFunction(i)?function(){
i(o)}:e.noop})}),t},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===t?t:this.parent.getPlaceholder.apply(this,arguments);
},setPlaceholder:function(){var e=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&e!==t){
if(this.select&&this.getPlaceholderOption()===t)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)),
this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear");
}},postprocessResults:function(e,t,s){var i=0,n=this;if(this.findHighlightableChoices().each2(function(e,t){
return a(n.id(t.data("select2-data")),n.opts.element.val())?(i=e,!1):void 0}),s!==!1&&(t===!0&&i>=0?this.highlight(i):this.highlight(0)),
t===!0){var o=this.opts.minimumResultsForSearch;o>=0&&this.showSearch(O(e.results)>=o);
}},showSearch:function(t){this.showSearchInput!==t&&(this.showSearchInput=t,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!t),
this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!t),e(this.dropdown,this.container).toggleClass("select2-with-searchbox",t));
},onSelect:function(e,t){if(this.triggerSelect(e)){var s=this.opts.element.val(),i=this.data();
this.opts.element.val(this.id(e)),this.updateSelection(e),this.opts.element.trigger({
type:"select2-selected",val:this.id(e),choice:e}),this.nextSearchTerm=this.opts.nextSearchTerm(e,this.search.val()),
this.close(),t&&t.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),
a(s,this.id(e))||this.triggerChange({added:e,removed:i})}},updateSelection:function(e){
var s,i,n=this.selection.find(".select2-chosen");this.selection.data("select2-data",e),
n.empty(),null!==e&&(s=this.opts.formatSelection(e,n,this.opts.escapeMarkup)),s!==t&&n.append(s),
i=this.opts.formatSelectionCssClass(e,n),i!==t&&n.addClass(i),this.selection.removeClass("select2-default"),
this.opts.allowClear&&this.getPlaceholder()!==t&&this.container.addClass("select2-allowclear");
},val:function(){var e,s=!1,i=null,n=this,o=this.data();if(0===arguments.length)return this.opts.element.val();
if(e=arguments[0],arguments.length>1&&(s=arguments[1]),this.select)this.select.val(e).find("option").filter(function(){
return this.selected}).each2(function(e,t){return i=n.optionToData(t),!1}),this.updateSelection(i),
this.setPlaceholder(),s&&this.triggerChange({added:i,removed:o});else{if(!e&&0!==e)return void this.clear(s);
if(this.opts.initSelection===t)throw new Error("cannot call val() if initSelection() is not defined");
this.opts.element.val(e),this.opts.initSelection(this.opts.element,function(e){n.opts.element.val(e?n.id(e):""),
n.updateSelection(e),n.setPlaceholder(),s&&n.triggerChange({added:e,removed:o})});
}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(e){
var s,i=!1;return 0===arguments.length?(s=this.selection.data("select2-data"),s==t&&(s=null),
s):(arguments.length>1&&(i=arguments[1]),void(e?(s=this.data(),this.opts.element.val(e?this.id(e):""),
this.updateSelection(e),i&&this.triggerChange({added:e,removed:s})):this.clear(i)));
}}),H=k(R,{createContainer:function(){var t=e(document.createElement("div")).attr({
"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
return t},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),s=this;
return"select"===t.element.get(0).tagName.toLowerCase()?t.initSelection=function(e,t){
var i=[];e.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(e,t){
i.push(s.optionToData(t))}),t(i)}:"data"in t&&(t.initSelection=t.initSelection||function(s,i){
var n=r(s.val(),t.separator),o=[];t.query({matcher:function(s,i,r){var c=e.grep(n,function(e){
return a(e,t.id(r))}).length;return c&&o.push(r),c},callback:e.isFunction(i)?function(){
for(var e=[],s=0;s<n.length;s++)for(var r=n[s],c=0;c<o.length;c++){var l=o[c];if(a(r,t.id(l))){
e.push(l),o.splice(c,1);break}}i(e)}:e.noop})}),t},selectChoice:function(e){var t=this.container.find(".select2-search-choice-focus");
t.length&&e&&e[0]==t[0]||(t.length&&this.opts.element.trigger("choice-deselected",t),
t.removeClass("select2-search-choice-focus"),e&&e.length&&(this.close(),e.addClass("select2-search-choice-focus"),
this.opts.element.trigger("choice-selected",e)))},destroy:function(){e("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),
this.parent.destroy.apply(this,arguments),I.call(this,"searchContainer","selection");
},initContainer:function(){var t,s=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),
this.selection=t=this.container.find(s);var i=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(t){
i.search[0].focus(),i.selectChoice(e(this))}),this.search.attr("id","s2id_autogen"+M()),
this.search.prev().text(e("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),
this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open());
})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(e){
if(this.isInterfaceEnabled()){++this.keydowns;var s=t.find(".select2-search-choice-focus"),i=s.prev(".select2-search-choice:not(.select2-locked)"),n=s.next(".select2-search-choice:not(.select2-locked)"),o=f(this.search);
if(s.length&&(e.which==A.LEFT||e.which==A.RIGHT||e.which==A.BACKSPACE||e.which==A.DELETE||e.which==A.ENTER)){
var a=s;return e.which==A.LEFT&&i.length?a=i:e.which==A.RIGHT?a=n.length?n:null:e.which===A.BACKSPACE?this.unselect(s.first())&&(this.search.width(10),
a=i.length?i:n):e.which==A.DELETE?this.unselect(s.first())&&(this.search.width(10),
a=n.length?n:null):e.which==A.ENTER&&(a=null),this.selectChoice(a),g(e),void(a&&a.length||this.open());
}if((e.which===A.BACKSPACE&&1==this.keydowns||e.which==A.LEFT)&&0==o.offset&&!o.length)return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()),
void g(e);if(this.selectChoice(null),this.opened())switch(e.which){case A.UP:case A.DOWN:
return this.moveHighlight(e.which===A.UP?-1:1),void g(e);case A.ENTER:return this.selectHighlighted(),
void g(e);case A.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();
case A.ESC:return this.cancel(e),void g(e)}if(e.which!==A.TAB&&!A.isControl(e)&&!A.isFunctionKey(e)&&e.which!==A.BACKSPACE&&e.which!==A.ESC){
if(e.which===A.ENTER){if(this.opts.openOnEnter===!1)return;if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;
}this.open(),(e.which===A.PAGE_UP||e.which===A.PAGE_DOWN)&&g(e),e.which===A.ENTER&&g(e);
}}})),this.search.on("keyup",this.bind(function(e){this.keydowns=0,this.resizeSearch();
})),this.search.on("blur",this.bind(function(t){this.container.removeClass("select2-container-active"),
this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),
t.stopImmediatePropagation(),this.opts.element.trigger(e.Event("select2-blur"))})),
this.container.on("click",s,this.bind(function(t){this.isInterfaceEnabled()&&(e(t.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),
this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),
this.open(),this.focusSearch(),t.preventDefault()))})),this.container.on("focus",s,this.bind(function(){
this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),
this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),
this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),
this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled());
},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),
this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var e=this;
this.opts.initSelection.call(null,this.opts.element,function(s){s!==t&&null!==s&&(e.updateSelection(s),
e.close(),e.clearSearch())})}},clearSearch:function(){var e=this.getPlaceholder(),s=this.getMaxSearchWidth();
e!==t&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(e).addClass("select2-default"),
this.search.width(s>0?s:this.container.css("width"))):this.search.val("").width(10);
},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default");
},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),
this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=t&&(this.search.val(this.nextSearchTerm),
this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),
this.opts.element.trigger(e.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments);
},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused");
},updateSelection:function(t){var s=[],i=[],o=this;e(t).each(function(){n(o.id(this),s)<0&&(s.push(o.id(this)),
i.push(this))}),t=i,this.selection.find(".select2-search-choice").remove(),e(t).each(function(){
o.addSelectedChoice(this)}),o.postprocessResults()},tokenize:function(){var e=this.search.val();
e=this.opts.tokenizer.call(this,e,this.data(),this.bind(this.onSelect),this.opts),
null!=e&&e!=t&&(this.search.val(e),e.length>0&&this.open())},onSelect:function(e,s){
this.triggerSelect(e)&&(this.addSelectedChoice(e),this.opts.element.trigger({type:"selected",
val:this.id(e),choice:e}),this.nextSearchTerm=this.opts.nextSearchTerm(e,this.search.val()),
this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(e,!1,this.opts.closeOnSelect===!0),
this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),
this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=t&&(this.search.val(this.nextSearchTerm),
this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),
this.search.width(10)),this.triggerChange({added:e}),s&&s.noFocus||this.focusSearch());
},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(s){
var i,n,o=!s.locked,a=e("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),r=e("<li class='select2-search-choice select2-locked'><div></div></li>"),c=o?a:r,l=this.id(s),h=this.getVal();
i=this.opts.formatSelection(s,c.find("div"),this.opts.escapeMarkup),i!=t&&c.find("div").replaceWith("<div>"+i+"</div>"),
n=this.opts.formatSelectionCssClass(s,c.find("div")),n!=t&&c.addClass(n),o&&c.find(".select2-search-choice-close").on("mousedown",g).on("click dblclick",this.bind(function(t){
this.isInterfaceEnabled()&&(this.unselect(e(t.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
g(t),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),
this.dropdown.addClass("select2-drop-active"))})),c.data("select2-data",s),c.insertBefore(this.searchContainer),
h.push(l),this.setVal(h)},unselect:function(t){var s,i,o=this.getVal();if(t=t.closest(".select2-search-choice"),
0===t.length)throw"Invalid argument: "+t+". Must be .select2-search-choice";if(s=t.data("select2-data")){
var a=e.Event("select2-removing");if(a.val=this.id(s),a.choice=s,this.opts.element.trigger(a),
a.isDefaultPrevented())return!1;for(;(i=n(this.id(s),o))>=0;)o.splice(i,1),this.setVal(o),
this.select&&this.postprocessResults();return t.remove(),this.opts.element.trigger({
type:"select2-removed",val:this.id(s),choice:s}),this.triggerChange({removed:s}),
!0}},postprocessResults:function(e,t,s){var i=this.getVal(),o=this.results.find(".select2-result"),a=this.results.find(".select2-result-with-children"),r=this;
o.each2(function(e,t){var s=r.id(t.data("select2-data"));n(s,i)>=0&&(t.addClass("select2-selected"),
t.find(".select2-result-selectable").addClass("select2-selected"))}),a.each2(function(e,t){
t.is(".select2-result-selectable")||0!==t.find(".select2-result-selectable:not(.select2-selected)").length||t.addClass("select2-selected");
}),-1==this.highlight()&&s!==!1&&r.highlight(0),!this.opts.createSearchChoice&&!o.filter(".select2-result:not(.select2-selected)").length>0&&(!e||e&&!e.more&&0===this.results.find(".select2-no-results").length)&&x(r.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+T(r.opts.formatNoMatches,r.opts.element,r.search.val())+"</li>");
},getMaxSearchWidth:function(){return this.selection.width()-c(this.search)},resizeSearch:function(){
var e,t,s,i,n,o=c(this.search);e=v(this.search)+10,t=this.search.offset().left,s=this.selection.width(),
i=this.selection.offset().left,n=s-(t-i)-o,e>n&&(n=s-o),40>n&&(n=s-o),0>=n&&(n=e),
this.search.width(Math.floor(n))},getVal:function(){var e;return this.select?(e=this.select.val(),
null===e?[]:e):(e=this.opts.element.val(),r(e,this.opts.separator))},setVal:function(t){
var s;this.select?this.select.val(t):(s=[],e(t).each(function(){n(this,s)<0&&s.push(this);
}),this.opts.element.val(0===s.length?"":s.join(this.opts.separator)))},buildChangeDetails:function(e,t){
for(var t=t.slice(0),e=e.slice(0),s=0;s<t.length;s++)for(var i=0;i<e.length;i++)a(this.opts.id(t[s]),this.opts.id(e[i]))&&(t.splice(s,1),
s>0&&s--,e.splice(i,1),i--);return{added:t,removed:e}},val:function(s,i){var n,o=this;
if(0===arguments.length)return this.getVal();if(n=this.data(),n.length||(n=[]),!s&&0!==s)return this.opts.element.val(""),
this.updateSelection([]),this.clearSearch(),void(i&&this.triggerChange({added:this.data(),
removed:n}));if(this.setVal(s),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),
i&&this.triggerChange(this.buildChangeDetails(n,this.data()));else{if(this.opts.initSelection===t)throw new Error("val() cannot be called if initSelection() is not defined");
this.opts.initSelection(this.opts.element,function(t){var s=e.map(t,o.id);o.setVal(s),
o.updateSelection(t),o.clearSearch(),i&&o.triggerChange(o.buildChangeDetails(n,o.data()));
})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var t=[],s=this;
this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),
this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){
t.push(s.opts.id(e(this).data("select2-data")))}),this.setVal(t),this.triggerChange();
},data:function(t,s){var i,n,o=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){
return e(this).data("select2-data")}).get():(n=this.data(),t||(t=[]),i=e.map(t,function(e){
return o.opts.id(e)}),this.setVal(i),this.updateSelection(t),this.clearSearch(),s&&this.triggerChange(this.buildChangeDetails(n,this.data())),
void 0)}}),e.fn.select2=function(){var s,i,o,a,r,c=Array.prototype.slice.call(arguments,0),l=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],h=["opened","isFocused","container","dropdown"],u=["val","data"],d={
search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])s=0===c.length?{}:e.extend({},c[0]),
s.element=e(this),"select"===s.element.get(0).tagName.toLowerCase()?r=s.element.prop("multiple"):(r=s.multiple||!1,
"tags"in s&&(s.multiple=r=!0)),i=r?new window.Select2["class"].multi:new window.Select2["class"].single,
i.init(s);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;
if(n(c[0],l)<0)throw"Unknown method: "+c[0];if(a=t,i=e(this).data("select2"),i===t)return;
if(o=c[0],"container"===o?a=i.container:"dropdown"===o?a=i.dropdown:(d[o]&&(o=d[o]),
a=i[o].apply(i,c.slice(1))),n(c[0],h)>=0||n(c[0],u)>=0&&1==c.length)return!1}}),a===t?this:a;
},e.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,
containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,s,i){
var n=[];return b(e.text,s.term,n,i),n.join("")},formatSelection:function(e,s,i){
return e?i(e.text):t},sortResults:function(e,t,s){return e},formatResultCssClass:function(e){
return e.css},formatSelectionCssClass:function(e,s){return t},formatMatches:function(e){
return 1===e?"One result is available, press enter to select it.":e+" results are available, use up and down arrow keys to navigate.";
},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(e,t){
var s=t-e.length;return"Please enter "+s+" or more character"+(1==s?"":"s")},formatInputTooLong:function(e,t){
var s=e.length-t;return"Please delete "+s+" character"+(1==s?"":"s")},formatSelectionTooBig:function(e){
return"You can only select "+e+" item"+(1==e?"":"s")},formatLoadMore:function(e){
return"Loading more results…"},formatSearching:function(){return"Searching…"},minimumResultsForSearch:0,
minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){
return e==t?null:e.id},matcher:function(e,t){return i(""+t).toUpperCase().indexOf(i(""+e).toUpperCase())>=0;
},separator:",",tokenSeparators:[],tokenizer:P,escapeMarkup:C,blurOnChange:!1,selectOnBlur:!1,
adaptContainerCssClass:function(e){return e},adaptDropdownCssClass:function(e){return null;
},nextSearchTerm:function(e,s){return t},searchInputPlaceholder:"",createSearchChoicePosition:"top",
shouldFocusInput:function(e){var t="ontouchstart"in window||navigator.msMaxTouchPoints>0;
return t&&e.opts.minimumResultsForSearch<0?!1:!0}},e.fn.select2.ajaxDefaults={transport:e.ajax,
params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:S,local:y,
tags:E},util:{debounce:u,markMatch:b,escapeMarkup:C,stripDiacritics:i},"class":{"abstract":R,
single:D,multi:H}}}}(jQuery);