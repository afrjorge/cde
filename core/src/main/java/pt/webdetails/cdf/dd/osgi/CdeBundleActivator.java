package pt.webdetails.cdf.dd.osgi;

import org.osgi.framework.*;

import java.net.URL;
import java.util.Map;

public class CdeBundleActivator implements BundleActivator {

  private static Bundle bundle;

  public void start( BundleContext context ) {
    bundle = context.getBundle();
  }

  public void stop( BundleContext context ) { }

  public static Bundle getBundle() {
    return bundle;
  }

  public static synchronized Map<String, URL> getResourcePath(String dashboardName ) {
    Map<String, URL> resources = null;
    final BundleContext bc = CdeBundleActivator.getBundle().getBundleContext();
    final ServiceReference<IResourceService> sr = bc.getServiceReference( IResourceService.class );

    if ( sr == null) {
      System.out.println( "RenderApi.getResourcePath resource service found" );
    }

    System.out.println( "RenderApi.getResourcePath service reference keys" );
    // debug
    String[] propertyKeys = sr.getPropertyKeys();
    for (String key: propertyKeys) {
      Object prop = sr.getProperty( key );
      System.out.println( "  key: " + prop.toString() );
    }

    IResourceService resourceService = bc.getService( sr );
    try {
      resources = resourceService.getResourcePath( dashboardName );
    } catch( Exception e ) {
      System.out.println( e );
    } finally {
      bc.ungetService( sr );
      return resources;
    }
  }
}

