app.controller('LoginCtrl', ['$scope' , '$http', '$firebaseArray',function ($scope,$http,$firebaseArray){
// this is firebase auth with password and email
		$scope.login= function(){
				var ref = new Firebase("https://wormburnerapp.firebaseio.com");
			ref.authWithPassword({
			  email    : $scope.login.email,
			  password : $scope.login.password
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }
		});
 	}
}]);




	







