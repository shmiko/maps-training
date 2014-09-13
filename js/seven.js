var $rightHere = new google.maps.LatLng(51.449791, -2.597651);

//Create a map object
$map = new google.maps.Map(
  document.getElementById('map-canvas-one'),{
    zoom: 15,
    center: $rightHere
    }
  );

// Load a GeoJSON from the same server as our demo.
//$map.data.loadGeoJson('http://data.police.uk/api/crimes-street/all-crime?lat=' + $rightHere.lat() + '&lng=' + $rightHere.lng() );
//$map.data.loadGeoJson('http://mapit.mysociety.org/postcode/BS66DW');
$map.data.loadGeoJson('http://127.0.0.1:9000/data/map.geojson');
