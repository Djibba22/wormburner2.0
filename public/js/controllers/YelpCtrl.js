app.controller('YelpCtrl', ['$scope' , '$http','$firebaseObject', '$firebaseArray','Auth','$rootScope',function ($scope,$http,$firebaseObject,$firebaseArray,Auth,$rootScope) {
	$scope.auth = Auth;


	//Authentication with firebase onAuth
	$scope.auth.$onAuth(function(authData) {
		if (authData) {
			//favorites query to display a list of the users favorites
			favoritesRef = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid+"/favorites/");
			$scope.favorites = $firebaseArray(favoritesRef);
			console.log("Favorites: ", $scope.favorites);
			console.log("Logged in as:", authData.uid);


		} else {
			console.log("Logged out");
		}
	})
	// sets the ability for user to add a course as a favorite to their profile
	$scope.favorite = function(id){
		$scope.favorites.$add(id).then(function() {
			console.log("added record with name: " + id);
		});
	}

	$scope.getGolfDeals = function() {
		//We need a function to set the location to the current locationof the user, we are using ipinfo.io
		$http({
			method: 'GET',
			url: 'http://ipinfo.io'
		}).then(function successCallback(response) {
			var latlong = response.data.loc;
			var city = response.data.city;
			console.log(latlong);
			console.log(city);
			getGolf(city,latlong)
		}, function errorCallback(response) {
			console.log("no juice today");
		});


		// get a random string for oath nonce value
		var randomString = function(length, chars) {
			var result = {};
			for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
			return result;

		}

		var getGolf = function(city,latlong) {
			$rootScope.jsonpCount++;
			var method = 'GET',
			url = 'https://api.yelp.com/v2/search/',
			params = {
				location: city,
				cll: latlong,
				callback: 'angular.callbacks._'+$rootScope.jsonpCount,
				oauth_consumer_key: 'JHSRzBiAeTPWxZ5pS1dDTg',
				oauth_token: 'KdyMmpETKqPQY1VuA1gcXFqVu4F5yuCu',
				oauth_signature_method: 'HMAC-SHA1',
				oauth_timestamp:  new Date().getTime(),
				oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzA'),
				term: 'golf'
				// deals_filter: true


			},
			consumerSecret = 'b5tb39Cqft0Gromguo49PAmD79I',
			tokenSecret ='OsH_O_RxgJ-1NIQXviA5FaMMVqw',
			signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {encodeSignature: false});
			params.oauth_signature = signature;
			$http.jsonp(url, {params: params}).then(function(data){
				$scope.golfdata = new Array();

				angular.forEach(data.data.businesses, function(value,key){
					console.log(key,value);
					// changed file
					$scope.golfdata.push(value);
				})

			},function(error){
				console.log(error);
			});
		}


	}
}]);
