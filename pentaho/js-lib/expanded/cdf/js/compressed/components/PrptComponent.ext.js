define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder"],function(e,o){return{
getReport:function(n,t,r){return"string"==typeof n||n instanceof String?o.encode(CONTEXT_PATH+"api/repos/{0}/"+t,o.encodeRepositoryPath(n),r):o.encode(CONTEXT_PATH+"api/repos/{0}/"+t,o.encodeRepositoryPath(e.composePath(n)),r);
}}});