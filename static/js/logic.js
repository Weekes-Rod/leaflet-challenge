// Define the getColor function
function getColor(d) {
    return d > 90 ? '#800026' :
           d > 70  ? '#BD0026' :
           d > 50  ? '#E31A1C' :
           d > 30  ? '#FC4E2A' :
           d > 10  ? '#FD8D3C' :
                     '#FEB24C';
}

// Use this link to get the JSON data.
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a Leaflet map instance
var myMap = L.map('map').setView([41.60535468273329, -113.38059647565213], 5);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(myMap);

// Getting the GeoJSON data and adding it to the map
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    geojsonLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            // Adjust marker size based on earthquake magnitude
            return L.circleMarker(latlng, {
                radius: feature.properties.mag * 2,
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function(feature, layer) {
            // Add mouseover functions
            layer.bindPopup(
                '<b>Magnitude:</b> ' + feature.properties['mag'] + '<br>' +
                '<b>Place of Origin:</b> ' + feature.properties['place'] + '<br>' +
                '<b>Depth:</b> ' + feature.geometry.coordinates[2] + ' km<br>' +
                '<b>Time:</b> ' + new Date(feature.properties['time']).toLocaleString() + '<br>' +
                '<b>Time of Update:</b> ' + new Date(feature.properties['updated']).toLocaleString()
            );
            // Reset popup on mouseout
            layer.on('mouseout', function(e) {
                layer.closePopup();
            });
        }
    }).addTo(myMap);

    // Add legend to the map
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            depths = [10, 30, 50, 70, 90];

        // Define labels for the legend
        div.innerHTML += '<h4>Depth (km)</h4>';
        for (var i = 0; i < depths.length; i++) {
            var color = getColor(depths[i] + 1); // Get color based on depth
            div.innerHTML +=
                '<i style="background:' + color + '"></i> ' +
                depths[i] + ' km<br>'; // Display depth value in legend
        }

        return div;
    };

    legend.addTo(myMap);
});