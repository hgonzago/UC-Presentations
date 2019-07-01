require([
  "esri/WebMap",
  "esri/views/MapView"
], function (WebMap, MapView) {

  /******************************************************************
   *
   * Webmap example
   *
   ******************************************************************/

  // Step 1: Pass a webmap instance to the map and specify the id for the webmap item
  const map = new WebMap({
    portalItem: { // autocast (no need to specifically require it above)
      id: "b45ec95aeeb743399dd4b557abd20ee2"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    // Step 2: Set the view's map to that of the specified webmap above
    map: map
    // zoom: 3,
    // center: [-99.14, 36.48]
  });

});
