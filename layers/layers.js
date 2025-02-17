var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AksarayElektrikliarjstasyon_1 = new ol.format.GeoJSON();
var features_AksarayElektrikliarjstasyon_1 = format_AksarayElektrikliarjstasyon_1.readFeatures(json_AksarayElektrikliarjstasyon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksarayElektrikliarjstasyon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksarayElektrikliarjstasyon_1.addFeatures(features_AksarayElektrikliarjstasyon_1);cluster_AksarayElektrikliarjstasyon_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AksarayElektrikliarjstasyon_1
});
var lyr_AksarayElektrikliarjstasyon_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AksarayElektrikliarjstasyon_1, 
                style: style_AksarayElektrikliarjstasyon_1,
                popuplayertitle: "Aksaray Elektrikli Şarj İstasyon",
                interactive: true,
                title: '<img src="styles/legend/AksarayElektrikliarjstasyon_1.png" /> Aksaray Elektrikli Şarj İstasyon'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AksarayElektrikliarjstasyon_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AksarayElektrikliarjstasyon_1];
lyr_AksarayElektrikliarjstasyon_1.set('fieldAliases', {'soket': 'soket', 'tarife': 'tarife', 'adres': 'adres', });
lyr_AksarayElektrikliarjstasyon_1.set('fieldImages', {'soket': 'TextEdit', 'tarife': 'TextEdit', 'adres': 'TextEdit', });
lyr_AksarayElektrikliarjstasyon_1.set('fieldLabels', {'soket': 'no label', 'tarife': 'no label', 'adres': 'no label', });
lyr_AksarayElektrikliarjstasyon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});