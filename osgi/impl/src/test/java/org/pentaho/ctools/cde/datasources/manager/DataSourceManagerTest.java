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

package org.pentaho.ctools.cde.datasources.manager;

import org.json.JSONException;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import pt.webdetails.cdf.dd.datasources.IDataSourceProvider;
import java.util.Collections;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class DataSourceManagerTest {
  private DataSourceManager dataSourceManager;

  @Before
  public void setUp() {
    dataSourceManager = new DataSourceManager();
  }

  @After
  public void tearDown() {
    dataSourceManager = null;
  }

  @Test
  public void testGetJsDefinition() throws JSONException {
    assertNull( dataSourceManager.getJsDefinition() );
  }

  @Test
  public void testGetProviderJsDefinition() {
    assertNull( dataSourceManager.getProviderJsDefinition( null ) );
    assertNull( dataSourceManager.getProviderJsDefinition( "" ) );
    assertNull( dataSourceManager.getProviderJsDefinition( null, true ) );
    assertNull( dataSourceManager.getProviderJsDefinition( null, false ) );
    assertNull( dataSourceManager.getProviderJsDefinition( "", true ) );
    assertNull( dataSourceManager.getProviderJsDefinition( "", false ) );
  }

  @Test
  public void testGetProvider() {
    assertNull( dataSourceManager.getProvider( null ) );
    assertNull( dataSourceManager.getProvider( "" ) );
  }

  @Test
  public void testGetProviders() {
    List<IDataSourceProvider> expected = Collections.emptyList();
    assertEquals( expected, dataSourceManager.getProviders() );
  }

  @Test
  public void testRefresh() {
    dataSourceManager.refresh();
    List<IDataSourceProvider> expected = Collections.emptyList();
    assertEquals( expected, dataSourceManager.getProviders() );
    assertNull( dataSourceManager.getProvider( null ) );
    assertNull( dataSourceManager.getProvider( "" ) );
  }
}
