app.controller("MapCtrl", function($scope, uiGmapGoogleMapApi) {
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});
