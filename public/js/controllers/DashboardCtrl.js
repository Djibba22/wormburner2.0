app.controller('DashboardCtrl', ['$scope' , '$http','$firebaseArray', '$firebaseObject','$location',"Auth", function ($scope,$http,$firebaseArray,$firebaseObject,$location,Auth){
	//Here we need to check the database for authentication
	$scope.auth = Auth;
	var ref;
	$scope.auth.$onAuth(function(authData) {
		if (authData) {

			ref = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid);
			$scope.user = $firebaseObject(ref);
			$scope.user.$loaded(function() {
				$scope.cards=[
					{
						user: $scope.user.userName,
						scores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
					},
					{
						user: 'Player 2',
						scores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
					}
				];
			})

			gamesRef = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid+"/games");
			var games = $firebaseArray(gamesRef);

			$scope.saveCards = function() {
				games.$add({
					//  date:
					//  players: "test, Rachel"
					cards: $scope.cards
				})
			}

		} else {
			console.log("Logged out");
		}
	})
	//Here we get the current Date for ScoreCard
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd
	}
	if(mm<10) {
		mm='0'+mm
	}
	$scope.today = mm+'/'+dd+'/'+yyyy;
	console.log($scope.today);

	//Here we need to set up the scorecard with variables for use.


	$scope.sum = function(scores){
		var total=0;
		angular.forEach(scores, function(score){
			total += parseInt(score);
		});
		return total;
	}




}]);
