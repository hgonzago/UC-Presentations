require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/FeatureTable",
], function (WebMap, MapView, Legend, FeatureTable) {
  const highlights = [];

  const map = new WebMap({
    portalItem: {
      // autocast
      id: "f9a9a7e3857d4d51b2c801cf8c399add"
    }
  });
  const view = new MapView({
    container: "viewDiv",
    map: map
  });
  /******************************************************************
   *
   * Widget example - Add legend widget
   *
   ******************************************************************/
  view.when(function () {
    const chicagoCrime = map.layers.getItemAt(0); // bottom

    // Step 1: Create the widget
    const legend = new Legend({
      // Step 2: Specify any additional properties for the legend. In this case,
      // we are just setting the view to where the legend should apply
      view: view,
      style: "card",
      layerInfos: [{
          layer: chicagoCrime,
          title: "Chicago Crime Tracts"
        }
      ]
    });

    // Step 3: Add the widget to the view's UI, specify the docking position as well
    view.ui.add(legend, "top-right");

   /******************************************************************
    *
    * Widget example - Add FeatureTable widget
    *
   /******************************************************************/

    // create FeatureTable
    const featureTable = new FeatureTable({
      layer: chicagoCrime,
      container: document.getElementById("tableDiv")
    });

     // Get the FeatureLayer's layerView and listen for the table's selection-change event
     view.whenLayerView(chicagoCrime).then(function (layerView) {
      featureTable.on("selection-change", function (changes) {
        // If the selection is removed remove its highlighted feature from the layerView
        changes.removed.forEach(function (item) {
          const data = highlights.find(function (data) {
            return data.feature === item.feature;
          });
          if (data) {
            highlights.splice(highlights.indexOf(data), 1);
            data.highlight.remove();
          }
        });

        // If the selection is added, push all added selections to array and highlight on layerView
        changes.added.forEach(function (item) {
          const feature = item.feature;
          highlight = layerView.highlight(item.feature);
          highlights.push({
            feature: feature,
            highlight: highlight
          });
        });
      });
    });

  });
});