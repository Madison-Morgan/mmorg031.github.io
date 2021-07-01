

mapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmcwMzEiLCJhIjoiY2tndGxmNnhnMDRtaTJ5cWY0ZGRqOHJ1YyJ9.AjixPunpSrsx_53OQxyE0w';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10', // style URL
center: [49.24, 6.99], // starting position [lng, lat]
zoom: 3 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([49.24, 6.99])
.addTo(map);
