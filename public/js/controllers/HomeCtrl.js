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
}]);