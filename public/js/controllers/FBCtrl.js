

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://wormburnerapp.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.controller("FBCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  }
]);
