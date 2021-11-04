var wms_layers = [];


        var lyr_GoogleLabels_0 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_PREDIOS_1878_PRECIOS_1 = new ol.format.GeoJSON();
var features_PREDIOS_1878_PRECIOS_1 = format_PREDIOS_1878_PRECIOS_1.readFeatures(json_PREDIOS_1878_PRECIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOS_1878_PRECIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREDIOS_1878_PRECIOS_1.addFeatures(features_PREDIOS_1878_PRECIOS_1);
var lyr_PREDIOS_1878_PRECIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PREDIOS_1878_PRECIOS_1, 
                style: style_PREDIOS_1878_PRECIOS_1,
                interactive: true,
                title: '<img src="styles/legend/PREDIOS_1878_PRECIOS_1.png" /> PREDIOS_1878_PRECIOS'
            });

lyr_GoogleLabels_0.setVisible(true);lyr_PREDIOS_1878_PRECIOS_1.setVisible(true);
var layersList = [lyr_GoogleLabels_0,lyr_PREDIOS_1878_PRECIOS_1];
lyr_PREDIOS_1878_PRECIOS_1.set('fieldAliases', {'LISTO': 'LISTO', 'CN': 'CN', 'ID_MAN': 'ID_MAN', 'AREON': 'AREON', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'CLASIL': 'CLASIL', 'OID_': 'OID_', 'ID': 'ID', 'A¥O': 'A¥O', 'TIPO_VIA': 'TIPO_VIA', 'NOMBRE_VIA': 'NOMBRE_VIA', 'CUADRA': 'CUADRA', 'ACERA': 'ACERA', 'NUMERO': 'NUMERO', 'TIPO_HOY': 'TIPO_HOY', 'NOMBRE_HOY': 'NOMBRE_HOY', 'FRENTE_N': 'FRENTE_N', 'FRENTE_E': 'FRENTE_E', 'FRENTE_S': 'FRENTE_S', 'FRENTE_W': 'FRENTE_W', 'AREA': 'AREA', 'AVALUO': 'AVALUO', 'CONTR_ANUA': 'CONTR_ANUA', 'DESCRIPCIO': 'DESCRIPCIO', 'OBSERVACIO': 'OBSERVACIO', 'ID_MANZ': 'ID_MANZ', 'ID_TIPO': 'ID_TIPO', 'CLASIL_1': 'CLASIL_1', 'PRECIO_M2': 'PRECIO_M2', });
lyr_PREDIOS_1878_PRECIOS_1.set('fieldImages', {'LISTO': '', 'CN': '', 'ID_MAN': '', 'AREON': '', 'PERIMETER': '', 'HECTARES': '', 'CLASIL': '', 'OID_': '', 'ID': '', 'A¥O': '', 'TIPO_VIA': '', 'NOMBRE_VIA': '', 'CUADRA': '', 'ACERA': '', 'NUMERO': '', 'TIPO_HOY': '', 'NOMBRE_HOY': '', 'FRENTE_N': '', 'FRENTE_E': '', 'FRENTE_S': '', 'FRENTE_W': '', 'AREA': '', 'AVALUO': '', 'CONTR_ANUA': '', 'DESCRIPCIO': '', 'OBSERVACIO': '', 'ID_MANZ': '', 'ID_TIPO': '', 'CLASIL_1': '', 'PRECIO_M2': '', });
lyr_PREDIOS_1878_PRECIOS_1.set('fieldLabels', {'LISTO': 'inline label', 'CN': 'inline label', 'ID_MAN': 'inline label', 'AREON': 'inline label', 'PERIMETER': 'inline label', 'HECTARES': 'inline label', 'CLASIL': 'inline label', 'OID_': 'inline label', 'ID': 'inline label', 'A¥O': 'inline label', 'TIPO_VIA': 'inline label', 'NOMBRE_VIA': 'inline label', 'CUADRA': 'inline label', 'ACERA': 'inline label', 'NUMERO': 'inline label', 'TIPO_HOY': 'inline label', 'NOMBRE_HOY': 'inline label', 'FRENTE_N': 'inline label', 'FRENTE_E': 'inline label', 'FRENTE_S': 'inline label', 'FRENTE_W': 'inline label', 'AREA': 'inline label', 'AVALUO': 'inline label', 'CONTR_ANUA': 'inline label', 'DESCRIPCIO': 'inline label', 'OBSERVACIO': 'inline label', 'ID_MANZ': 'inline label', 'ID_TIPO': 'inline label', 'CLASIL_1': 'inline label', 'PRECIO_M2': 'inline label', });
lyr_PREDIOS_1878_PRECIOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});