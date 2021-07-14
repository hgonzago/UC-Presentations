// @ts-check

import Map from "esri/Map.js";
import Camera from "esri/Camera.js";
import FeatureLayer from "esri/layers/FeatureLayer.js";
import SceneLayer from "esri/layers/SceneLayer.js";
import SimpleRenderer from "esri/renderers/SimpleRenderer.js";
import SceneView from "esri/views/SceneView.js";
import Editor from "esri/widgets/Editor.js";


const view = new SceneView({
  container: "viewDiv",
  qualityProfile: "high",
  popup: {
    autoOpenEnabled: false, //disable popups
  },
  environment: {
    lighting: {
      directShadowsEnabled: true,
    }
  },
  camera: {
    position: {
      longitude: 8.51958574,
      latitude: 47.39115318,
      z: 579.85971
    },
    heading: 324.72,
    tilt: 60.85
  },
  map: new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
    layers: [
      new SceneLayer({
        portalItem: {
          id: "ad9b99f24b2b43b8b1c8f87c677ff147",
        },
        renderer: {
          type: "simple",
          symbol: {
            type: "mesh-3d",
            symbolLayers: [
              {
                type: "fill",
                material: {
                  color: [255, 255, 255],
                  colorMixMode: "replace"
                },
                edges: {
                  type: "solid",
                  color: [120, 120, 120],
                  size: 0.5
                }
              }
            ]
          }
        },
      }),
    ],
  }),
});

window["view"] = view;

view.when().then(() => {
  addHeliLayer();
  addBoatLayer();
});

function addBoatLayer() {
  const boatLayer = createFL(
    false,
    "Boat layer (2D point)",
    { mode: "on-the-ground", offset: 0.5, unit: "meters" },
    {
      type: "web-style",
      name: "Sailboat",
      portal: { url: "https://www.arcgis.com" },
      styleName: "EsriRealisticTransportationStyle",
    }
  );

  boatLayer.renderer.symbol.fetchSymbol().then(function (actualSymbol) {
    boatLayer.renderer.symbol = actualSymbol;
  });

  view.map.layers.add(boatLayer);

  const widget = new Editor({ view: view });
  view.ui.add(widget, "top-right");
}

function addHeliLayer() {
  const heliLayer = createFL(
    true,
    "Helicopter layer (3D point)",
    { mode: "relative-to-scene", offset: 2, unit: "meters" },
    {
      type: "web-style",
      name: "Eurocopter_AS-365_-_Flying",
      portal: { url: "https://www.arcgis.com" },
      styleName: "EsriRealisticTransportationStyle",
    }
  );

  heliLayer.renderer.symbol.fetchSymbol().then(function (actualSymbol) {
    heliLayer.renderer.symbol = actualSymbol;
  });

  view.map.layers.add(heliLayer);
}

function createFL(hasZ, title, elevationInfo, symbol) {
  return new FeatureLayer({
    source: [],
    renderer: new SimpleRenderer({
      symbol: symbol,
      visualVariables: [
        {
          type: "size",
          axis: "height",
          field: "size",
          valueUnit: "meters",
        },
        {
          type: "rotation",
          field: "heading",
          rotationType: "geographic",
        },
      ],
    }),
    objectIdField: "ObjectID",
    outFields: ["*"],
    geometryType: "point",
    spatialReference: {
      wkid: 4326,
    },
    fields: [
      { name: "ObjectID", type: "oid" },
      { name: "size", alias: "Size [m]", type: "integer" },
      { name: "heading", alias: "Rotation [deg]", type: "integer" },
    ],
    title: title,
    elevationInfo: elevationInfo,
    hasZ: hasZ,
  });
}
