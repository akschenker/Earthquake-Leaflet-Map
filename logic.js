url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(url, function(data) {
    createMap(data.features);
});

function createFeatures(data) {
    function createPopups(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place + "</h3>")
    }
    var earthquakes = L.geoJSON(data, {
        onEachFeature: createPopups
    });

    createMap(earthquakes);
}

function createMap(data) {
    
}