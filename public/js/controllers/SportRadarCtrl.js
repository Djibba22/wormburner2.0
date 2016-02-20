app.controller('SportRadarCtrl', ['$scope' , '$http',function ($scope,$http ) {
  console.log("comeback charlie");
  $http({method: 'GET', url: 'http(s)://api.sportradar.us/golf-t1/schema/tournament/leaderboard-v1.0.xsd?api_key=rwppn9ub7aqmde94djw23ggm'}).success(function(courseData){
  $scope.pgaData = pgaData; // response data
  console.log("tourinfo=" + pgaData.length);
  $scope.results = pgaData.length
  });
}]);
