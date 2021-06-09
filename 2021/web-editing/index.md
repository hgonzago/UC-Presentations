<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-1.png" data-background-size="cover" -->

### ArcGIS API for JavaScript:
### Web Editing in 2D and 3D

#### Heather Gonzago
#### Jonathan Uilhein
#### Arno Fiva

----

### <small>Slides & demos: https://bit.ly/3itKZGD</small>

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-3.png" data-background-size="cover" -->

### **Agenda**

- Web Editing
- API widget editing
- 2d editing workflows
- 3d editing workflows

----

### **Editing in a feature service**

<br>

- <a href="https://developers.arcgis.com/rest/services-reference/feature-service.htm" target="_blank">Editable</a>
- One or more feature layers
- Users can draw, update, and/or create features

----

### **Constraints set at the service level**

<br>

- Can be configured in web clients
- Cannot override server-side permission levels
- Consistent behavior across all clients

----

### **Setting the feature layer's editable settings in AGO/Portal**

<img src="./images/feature-layer-settings.png" height="600" style="margin-left:10px; margin-right: 10px;"/>

----

### **Edit a feature layer**
* <a href="https://developers.arcgis.com/rest/services-reference/feature-service.htm" target="_blank">ArcGIS REST API</a>
* <a href="https://doc.arcgis.com/en/arcgis-online/manage-data/edit-features.htm" target="_blank">ArcGIS Online</a>
* <a href="https://developers.arcgis.com/python/guide/editing-features/" target="_blank">ArcGIS API for Python</a>
* <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html" target="_blank">ArcGIS API for JavaScript</a>

----

### **ArcGIS API for JavaScript**

<br>

🔑 Configurable widgets

<hr style="width: 20%;">

⌨️ Granular APIs

----

### **Configurable Widgets**

<br>

- <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html" target="_blank">Editor</a>
  - Geometry: <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html" target="_blank">Sketch</a>
  - Fields/attributes: <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html" target="_blank">FeatureForm</a>
  - <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html" target="_blank">FeatureTemplates</a>
- <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html" target="_blank">FeatureTable</a>
----

### **Granular APIs**

<br>

- <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html" target="_blank">SketchViewModel</a>
- <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html" target="_blank">GraphicsLayer</a>
- <a href="http://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits" target="_blank">FeatureLayer.applyEdits</a>
- <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html" target="_blank">GeometryEngine</a>

----

### [Editor](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html) widget

<a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-basic/index.html" target="_blank">
  <img style="float: center;" src="images/end-to-end-editing.gif">
</a>

----

### [FeatureTable](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html) widget

<a href="demos/featuretable-editing.html" target="_blank">
  <img style="float: center;" src="images/featuretable-demo.gif">
</a>

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-3.png" -->

### 2d Editing Workflows

#### Jonathan Uilhein

----

### [Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)

- Used to modify feature geometries
- Provides two major workflows (or operations)
  - create
  - update (includes delete)
- Configurable options for both workflows
- Manages user interactions with the view internally
  - Can be disabled to provide more control directly to developers

----

### **Geometry-based Demos**

- [Hello Sketch](https://developers.arcgis.com/javascript/latest/sample-code/sketch-geometries/index.html)
- [Using applyEdits with SketchViewModel](Demos/sketch-applyEdits-create-polygon/applyEdits-create-polygon.html)
- [Creating custom tools using SketchViewModel](Demos/sketch-custom-tools/sketch-custom-tools.html)

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-3.png" -->

### 3d Editing Workflows

#### Arno Fiva

----

### **Arno adds his section specific to 3d stuff**

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-3.png" -->
## Slides and Demos

<a href="https://bit.ly/3itKZGD">https://bit.ly/3itKZGD</a>

----


<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-3.png" -->
## Questions

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-4.png" -->

### **We want your feedback**

Click on the </br>
**Session Survey** link </br>
below this video window

----

<!-- .slide: data-background="../reveal.js/img/2021/uc/bg-6.png" -->
