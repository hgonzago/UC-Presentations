  require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Editor"], (MapView, WebMap, Editor) => {
    /************************************************************
      * Creates a new WebMap instance. A WebMap must reference
      * a PortalItem ID that represents a WebMap saved to
      * arcgis.com or an on-premise portal.
      *
      * To load a WebMap from an on-premise portal, set the portal
      * url with esriConfig.portalUrl.
      ************************************************************/
     // This webmap contains information for how the form should be configured
    const webmap = new WebMap({
      portalItem: {
         // autocasts as new PortalItem()
        id: "8865c066b268496fa8eb36191642f0c4"
      }
    });

    /************************************************************
      * Set the WebMap instance to the map property in a MapView.
      ************************************************************/
  const view = new MapView({
      map: webmap,
      container: "viewDiv",
      center: {
        longitude: -82.9569861296617,
        latitude: 42.34420657681644
      }
    });
    view.when(() => {
      view.map.loadAll().then(() => {
        const editor = new Editor({
          view: view
        });

         // Add the widget to the view
        view.ui.add(editor, "top-right");
      });
    });
  });