define(["../../lib/jquery"],function(e){return{name:"hyperlink",label:"hyperlink",
defaults:{openInNewTab:!0,prependHttpIfNeeded:!0,regexp:null,pattern:null,urlReference:2,
labelReference:1,cssClass:"hyperlinkContainer",layout:"<a></a>"},init:function(){},
implementation:function(n,t,a){var l,r,p=e(n);if(a.pattern){var u=new RegExp(a.pattern),i=[];
t.value.replace(u,function(e,n){i.push(n)}),l=i[a.urlReference],r=i[a.labelReference];
}else l=t.value,r=t.value;if(a.prependHttpIfNeeded&&!/^https?:\/\//.test(l)&&(l="http://"+l),
null==a.regexp||new RegExp(a.regexp).test(t.value)){var f=e(a.layout).attr("href",l).text(r);
a.openInNewTab&&f.attr("target","_blank"),p.empty().append(f)}}}});