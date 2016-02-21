app.controller("MapCtrl", function($scope, uiGmapGoogleMapApi) {
//Variables
// var infowindow = new google.maps.InfoWindow();
// var service = new google.maps.places.PlacesService(map);
  $scope.map = { zoom: 12 };
  //Center Map on current location.
  //The map now centers on the users current location and is better size
  navigator.geolocation.getCurrentPosition(function(pos){
    $scope.map.center = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    };
  });
//Search
// service.nearbySearch({
//   location:'',
//   radius:500,
//   types:['golf']
// },
//   callback);
// function callback(results, status){
//   if (status === google.maps.places.PlacesServiceStatus.OK){
//     for (var i = 0;i < results.length;i++){
//       createMarker(results[i]);
//     }
//   }
// }
// function createMarker(place){
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });
//
//   google.maps.event.addListener(marker, 'click', function(){
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }
//This actually creates the map
    uiGmapGoogleMapApi.then(function(maps) {

    });
});
