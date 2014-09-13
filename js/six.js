// No longer using an Event Listener
// Define some globals for debugging
var $rightHere = new google.maps.LatLng(51.449791, -2.597651);
var $markers = [];
var $infoWindows = [];

//Create a map object
$map = new google.maps.Map(
  document.getElementById('map-canvas-one'),{
    center: $rightHere,
    zoom: 8
    }
  );



// This event listener will call addMarker() when the map is clicked.
  google.maps.event.addListener($map, 'click', function(event) {

    //Create a Marker on the map
    var $marker = new google.maps.Marker({
    position: event.latLng,
    map: $map
    });

    //Add reference to Marker to Markers Array
    //Remember, objects are passed by reference
    $markers.push($marker);

    $("#results").append("Added a marker via map click<br>" + $marker.position.toString() + "<br>");

  });



//Button Event Listener for Add
$('#addMarker').on('click',function(){

  //Demonstrate setting a title
  var seconds = new Date().getTime() / 1000;

  //Simple Content
  var contentString = '<div class="info-window">'+
                      '<h6 id="firstHeading" class="firstHeading">Lorem Ipsum</h6>'+
                      '<div id="bodyContent">'+
                      seconds.toString().slice(-7) +
                      '</div>'+
                      '</div>';

  //Define an InfoWindow
  var $infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  // Add a marker to the Map, using a defined position
  var $marker = new google.maps.Marker({
      position: $rightHere,
      map: $map,
      animation: google.maps.Animation.DROP,
      draggable: true,
      title: seconds.toString(),
  });

  google.maps.event.addListener($marker, 'click', function() {
    $infowindow.open($map,$marker);
  });

  //Add references to the created InfoWindow and Marker
  $markers.push($marker);
  $infoWindows.push($infowindow);

  $("#results").append("Added a marker via button click " + seconds + "<br>");
  $("#results").animate({
          scrollTop: $("#results").height()
    }, 300);

});



//Button Event Listener for Destroy
$('#destroyMarkers').on('click',function(){

  //Cycle through the $markers array, and use Set
  for (var i = 0; i < $markers.length; i++) {
    $markers[i].setMap(null);
  }

  //Same for $infoWindows
  for (var i = 0; i < $infoWindows.length; i++) {
    $infoWindows[i].setMap(null);
  }

  //Clear the Markers Array
  $markers = [];
  $infoWindows = [];

  $("#results").append("Destroy all Markers");
  $("#results").empty();

});
