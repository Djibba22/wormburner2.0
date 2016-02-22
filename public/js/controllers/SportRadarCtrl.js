app.controller('SportRadarCtrl', ['$scope' , '$http',function ($scope,$http ) {
  console.log("comeback charlie");
  $http({method: 'GET', url: 'http(s)://api.sportradar.us/golf-t1/schema/tournament/leaderboard-v1.0.xsd?api_key=rwppn9ub7aqmde94djw23ggm'}).success(function(sportsData){
  $scope.sportsData = sportsData; // response data
  console.log("Sportsradar" + sportsData.length);
  $scope.results = pgaData.length
  });
}]);
//The controller is on place but the key has a waiting status, the placeholders are there and I have chosen to get information on tour leaders, I may pull images as well.
