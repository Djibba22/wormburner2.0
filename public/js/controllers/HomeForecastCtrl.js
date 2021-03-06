// This pulls in from weather underground the data which I have on the home page soo far
  app.controller('HomeForecastController', function($scope, $http,$rootScope) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var key = '97292890b778c782'; //Please see http://www.wunderground.com/
                $rootScope.jsonpCount++
                var service_url = "https://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + position.coords.latitude + "," + position.coords
                    .longitude + ".json?callback=angular.callbacks._"+$rootScope.jsonpCount;
                $http.jsonp(service_url).success(function(data) {
                    $scope.city = data.location.city;
                    $scope.temperature = data.current_observation.temp_f;
                    $scope.feelslike = data.current_observation.feelslike_f;
                    $scope.description = data.current_observation.weather;
                    $scope.wind_condition = data.current_observation.wind_string;
                    $scope.weather_icon_src = data.current_observation.icon_url;
                //Forecast results
                    $scope.forecast = data.forecast.simpleforecast.forecastday;
                    $scope.icon = data.forecast.simpleforecast.forecastday[0].icon_url;
                    $scope.day = data.forecast.simpleforecast.forecastday[0].date.weekday;
                    $scope.temp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
                    $scope.conditions = data.forecast.simpleforecast.forecastday[0].conditions;
                    $scope.maxwind = data.forecast.simpleforecast.forecastday[0].maxwind.mph;


                    console.log(data.forecast.simpleforecast.forecastday);
                });
            }, function() {
                alert("That's weird! We couldn't find you!");
            });
        } else {
            alert('Geolocation is not supported');
        }
    });
