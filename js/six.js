// Add a domain listener incorporating an anonymous function

var $rightHere = new google.maps.LatLng(51.449791, -2.597651);

google.maps.event.addDomListener(window, 'load', function() {

  $map_one = new google.maps.Map(
    document.getElementById('map-canvas-one'),{
      center: $rightHere,
      zoom: 8,
      streetViewControl: true
      }
    );


  $map_two = new google.maps.Map(
    document.getElementById('map-canvas-two'),{
      center: $rightHere,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      streetViewControl: false
      }
    );
  $panorama = $map_two.getStreetView();

  $panorama.setPosition($rightHere);
  $panorama.setPov({
    heading: 45,
    pitch:-5}
  );
});

$('#toggleStreetView').on('click',function(){
    $panorama.setVisible(!$panorama.getVisible());
});
