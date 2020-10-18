var mymap = L.map('map').setView([32.883946, -117.242451], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvLXRvcGV0ZSIsImEiOiJja2dmZzd2YnUwMDc0MnNwZjVuYnFnOHJzIn0.ebd6C57ZUtoGkcSeKw3oYA'
}).addTo(mymap);
var marker = L.marker([32.883946, -117.242451]).addTo(mymap);