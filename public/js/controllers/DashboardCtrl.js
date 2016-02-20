app.controller('DashboardCtrl', ['$scope' , '$http','$firebaseArray', '$firebaseObject','$location',"Auth", function ($scope,$http,$firebaseArray,$firebaseObject,$location,Auth){
	$scope.auth = Auth;
	       var ref;
			 $scope.auth.$onAuth(function(authData) {
			  if (authData) {
			  	ref = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid);
			  	$scope.user = $firebaseObject(ref);
			  	console.log($scope.user);
			  } else {
			    console.log("Logged out");
			  }
			})
}]);
