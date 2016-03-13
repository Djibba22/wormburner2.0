app.controller("MapCtrl", function($scope, uiGmapGoogleMapApi) {

  $scope.map = { zoom: 12 };
  //Center Map on current location.
  //The map now centers on the users current location and is better size

  navigator.geolocation.getCurrentPosition(function(pos){
    $scope.map.center = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    },
    function(error) {
      alert('Unable to get location: ' + error.message);
    };
  });
    uiGmapGoogleMapApi.then(function(maps) {
    });
});
