package pt.webdetails.cdf.dd.osgi;

import org.osgi.framework.*;

public class CdeBundleActivator implements BundleActivator {

  private static Bundle bundle;

  public void start( BundleContext context ) {
    bundle = context.getBundle();
  }

  public void stop( BundleContext context ) { }

  public static Bundle getBundle() {
    return bundle;
  }
}

