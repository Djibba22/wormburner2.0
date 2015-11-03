app.controller('HomeCtrl', ['$scope' , '$http', '$firebaseArray',function ($scope,$http,$firebaseArray) {
	
		var ref= new Firebase("https://wormburnerapp.firebaseio.com/");
		$scope.artists = $firebaseArray(ref);
		
		$scope.postComment = function (){
			$scope.artists.$add({
				author: $scope.newComment.author,
				body: $scope.newComment.body,
				// scope.commentForm.$setPristine();
			})
		}

		$scope.removeComment  = function(obj){

			$scope.artists.$remove(obj).then(function  (ref) {
				ref.key() === obj.$id;

			});
		}
		var x = document.getElementById("demo");
		$scope.getLocation = function() {
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition($scope.showPosition);
		    } else {
		        x.innerHTML = "Geolocation is not supported by this browser.";
		    }
		}
		$scope.showPosition = function(position) {
		    x.innerHTML = "Latitude: " + position.coords.latitude + 
		    "<br>Longitude: " + position.coords.longitude;
		    var latlon = position.coords.latitude + "," + position.coords.longitude;
		    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";

    		document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>"; 
		}
		
}]);