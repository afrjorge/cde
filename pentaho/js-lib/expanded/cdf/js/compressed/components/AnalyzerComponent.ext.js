define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder"],function(e,o){return{
getAnalyzer:function(n,r,t){return o.encode(CONTEXT_PATH+"api/repos/{0}/"+r,o.encodeRepositoryPath(e.composePath(n)),t);
}}});