app.controller('CourseCtrl', ['$scope' , '$http', '$firebaseArray',function ($scope,$http,$firebaseArray) {
		$http({method: 'GET', url: '/js/coursedata.json'}).success(function(courseData){
		$scope.courseData = courseData; // response data 
		console.log(courseData.length);
		$scope.results = courseData.length
		});
}]);