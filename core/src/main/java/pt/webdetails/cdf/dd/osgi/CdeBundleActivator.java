package pt.webdetails.cdf.dd.osgi;

import org.osgi.framework.*;

public class CdeBundleActivator implements BundleActivator {
  // context.getBundle().getResources("styles/Clean.html").nextElement().getFile()
  private static Bundle cdeBundle;
  public void start( BundleContext context ) {
    System.out.println("Hello from CDE!!!!!");
    cdeBundle = context.getBundle();
  }

  public void stop( BundleContext context ) {
    System.out.println("Goodbye from CDE!!!!!");
  }

  public static Bundle getCdeBundle() {
    return cdeBundle;
  }
}

