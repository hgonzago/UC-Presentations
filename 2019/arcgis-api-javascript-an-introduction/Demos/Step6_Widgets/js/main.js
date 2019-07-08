require(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Legend', 'esri/widgets/Slider'], function (
  WebMap,
  MapView,
  Legend,
  Slider
) {
  const map = new WebMap({
    portalItem: {
      // autocast
      id: 'b45ec95aeeb743399dd4b557abd20ee2'
    }
  });
  const view = new MapView({
    container: 'viewDiv',
    map: map,
    zoom: 3,
    center: [-99.14, 36.48]
  });
  /******************************************************************
   *
   * Widget example - Add legend widget
   *
   ******************************************************************/
  view.when(function () {
    const privateSchoolsPoly = map.layers.getItemAt(0);
    const privateSchoolsCentroid = map.layers.getItemAt(1);
    // Step 1: Create the widget
    const legend = new Legend({
      // Step 2: Specify any additional properties for the legend. In this case,
      // we are just setting the view to where the legend should apply
      view: view,
      layerInfos: [{
        layer: privateSchoolsPoly,
        title: 'Private school enrollment'
      }]
    });

    // Step 3: Add the widget to the view's UI, specify the docking position as well
    view.ui.add(legend, 'bottom-left');

    // Step 4: Add slider widget
    view.whenLayerView(privateSchoolsCentroid).then(function (layerView) {
      const slider = new Slider({
        container: 'sliderDiv',
        min: 0,
        max: 3300,
        steps: 50,
        values: [0],
        rangeLabelsVisible: true,
        labelsVisible: true,
        tickConfigs: [{
          mode: 'percent',
          values: 10
        }]
      });
      view.ui.add(slider, 'bottom-right');
      slider.on('value-change', function () {
        layerView.filter = {
          where: `TotalPrivate < ${slider.values[0]}`
        };
      });
    });
  });
});
