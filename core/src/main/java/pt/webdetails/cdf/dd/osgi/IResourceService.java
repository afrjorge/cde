package pt.webdetails.cdf.dd.osgi;

import java.net.URL;
import java.util.Map;

public interface IResourceService {
  Map<String,URL> getResourcePath( String filename );
}
