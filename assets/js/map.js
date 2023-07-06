var map = L.map('map', {
    center: [ -7.33314, -76.854346],
    zoom: 8,
    minZoom: 7,
    maxZoom: 20,
    maxBounds: [[ -9.5783,-79.0624], [-4.8055,-74.3053]]
    });

    L.control.scale({
        imperial: false
        }).addTo(map);
        
    var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
    });
    basemapOSM.addTo(map);

    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
    googleSat.addTo(map);

    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
    googleStreets.addTo(map);

    var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
    googleHybrid.addTo(map);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] }); 
    googleTerrain.addTo(map);

    var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:bancos",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
bancos.addTo(map);

var canchas_deportivas = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:canchas_deportivas",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
canchas_deportivas.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:colegios",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
colegios.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:farmacias",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var grifos = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "	webproydepsanmartin:grifos",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
grifos.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:hoteles",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hoteles.addTo(map);

var iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "webproydepsanmartin:iglesias",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
iglesias.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webproydepsanmartin/wms?", {
layers: "	webproydepsanmartin:restaurantes",//gisweb:proy_dep_sanmartin
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
restaurantes.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "googlesatelite": googleSat,
    "googleStreets": googleStreets,
    "googleHybrid": googleHybrid,
    "googleTerrain": googleTerrain
    
    };
    var overlayMaps = {
    "bancos": bancos,
    "canchas_deportivas": canchas_deportivas,
    "colegios": colegios,
    "farmacias": farmacias,
    "grifos": grifos,
    "hoteles": hoteles,
    "iglesias": iglesias,
    "restaurantes": restaurantes
    };
    L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);