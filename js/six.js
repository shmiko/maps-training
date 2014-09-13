// Add a domain listener incorporating an anonymous function

var $rightHere = new google.maps.LatLng(51.449791, -2.597651);

google.maps.event.addDomListener(window, 'load', function() {

  $map_one = new google.maps.Map(
    document.getElementById('map-canvas-one'),{
      center: $rightHere,
      zoom: 8
      }
    );
});
