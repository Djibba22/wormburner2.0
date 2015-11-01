// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://wormburnerapp.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

// and use it in our controller
app.controller("RegisterCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.removeUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$removeUser({
        email: $scope.email,
        password: $scope.password
      }).then(function() {
        $scope.message = "User removed";
      }).catch(function(error) {
        $scope.error = error;
      });
    },
    $scope.FBsignup = function(){
			var ref = new Firebase("https://wormburnerapp.firebaseio.com");

			ref.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {

			    console.log("Login Failed!", error);
			  } else {
			  	$scope.authData = authData;
			    console.log("Authenticated successfully with payload:", authData);
			  }
			});
		}
    
  }

]);


		




		






	


