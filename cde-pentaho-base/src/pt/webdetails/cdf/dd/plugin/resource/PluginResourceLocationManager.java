package pt.webdetails.cdf.dd.plugin.resource;

import java.util.List;

import org.apache.commons.lang.NotImplementedException;

import pt.webdetails.cdf.dd.DashboardDesignerContentGenerator;
import pt.webdetails.cdf.dd.FsPluginResourceLocations;
import pt.webdetails.cdf.dd.IPluginResourceLocationManager;
import pt.webdetails.cdf.dd.cdf.CdfStyles;
import pt.webdetails.cpf.packager.origin.PathOrigin;
import pt.webdetails.cpf.repository.api.IReadAccess;

public class PluginResourceLocationManager implements IPluginResourceLocationManager {

  private FsPluginResourceLocations resourceLocator;

  public IReadAccess[] getAllCustomComponentsResourceLocations() {
    throw new NotImplementedException( "shouldn't be using this anymore" );
  }

  @Override
  public String getMessagePropertiesResourceLocation() {
    return "lang/messages.properties";
  }

  @Override
  public String getStyleResourceLocation( String arg0 ) {
    return new CdfStyles().getResourceLocation( arg0 );
  }

  public synchronized List<PathOrigin> getCustomComponentsLocations() {
    if ( resourceLocator == null ) {
      resourceLocator = new FsPluginResourceLocations();
    }
    return resourceLocator.getCustomComponentLocations();
  }

  public synchronized List<PathOrigin> getCustomPropertiesLocations() {
    if ( resourceLocator == null ) {
      resourceLocator = new FsPluginResourceLocations();
    }
    return resourceLocator.getCustomPropertyLocations();
  }
}
