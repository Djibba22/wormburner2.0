app.controller("MapCtrl", function($scope, uiGmapGoogleMapApi) {

  $scope.map = { zoom: 12 };
  //Center Map on current location.
  navigator.geolocation.getCurrentPosition(function(pos){
    $scope.map.center = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    };

  });
    //Todo change the center of the map to be location.
    //also add golf business results to the map.

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});
