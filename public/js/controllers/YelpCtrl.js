app.controller('YelpCtrl', ['$scope' , '$http', '$firebaseArray',function ($scope,$http,$firebaseArray) {
		$http({method: 'GET', url: '/js/coursedata.json'}).success(function(courseData){
		$scope.dealsData = dealsData; // response data 
		console.log(dealsData.length);
		$scope.results = dealsData.length
		});
}]);