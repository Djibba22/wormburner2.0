app.controller('DashboardCtrl', ['$scope' , '$http', '$firebaseObject','$location',"Auth", function ($scope,$http,$firebaseObject,$location,Auth){
	$scope.auth = Auth;
	       var ref;
			 $scope.auth.$onAuth(function(authData) {
			  if (authData) {
			  	ref = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid);
			  	$scope.user = $firebaseObject(ref);

			  	console.log($scope.user);
			    console.log("Logged in as:", authData.uid);
			   
			  } else {
			    console.log("Logged out");
			  }
			})
}]);