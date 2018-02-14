/*!
 * Copyright 2018 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

(function() {

  requireCfg.config = requireCfg.config || {};

  var prefix;
  if(typeof KARMA_RUN !== "undefined") { // unit tests
    requireCfg.paths['cde'] = 'src/main/javascript';

  } else if(typeof CONTEXT_PATH !== "undefined") { // production
    prefix = CONTEXT_PATH;

  } else if(typeof FULL_QUALIFIED_URL !== "undefined") { // embedded
    prefix = FULL_QUALIFIED_URL;

  } else { // build
    requireCfg.paths['cde'] = 'cde';
  }

  // configure the CDE endpoint to be used by the dash! loader plugin
  requireCfg.config['dash'] = {
    'endpoint': '/cxf/cde/renderer/getDashboard?path='
  };

})();
