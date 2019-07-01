require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/views/MapView"
], function (Map, FeatureLayer, MapView) {
  /******************************************************************
   *
   * Add featurelayers to the map example
   *
   ******************************************************************/

  const privateSchoolsPoint = new FeatureLayer({
    // Private Schools centroids
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Centroids/FeatureServer/0"
    //url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/PrivateSchools/FeatureServer/0"
  });

  const privateSchoolsPoly = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/PrivateSchoolEnrollmentNoRendering/FeatureServer/0"
  });

  // Set map's basemap
  const map = new Map({
    basemap: "gray-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 3,
    center: [-99.14, 36.48]
  });

  view.when(function () {
    //map.addMany([privateSchoolsPoly, privateSchoolsPoint]);
    map.add(privateSchoolsPoly);
  });
});
