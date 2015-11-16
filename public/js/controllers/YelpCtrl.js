app.controller('YelpCtrl', ['$scope' , '$http', '$firebaseArray','Auth',function ($scope,$http,$firebaseArray,Auth) {
	       $scope.auth = Auth;
	       var ref;
			 $scope.auth.$onAuth(function(authData) {
			  if (authData) {
			  	ref = new Firebase("https://wormburnerapp.firebaseio.com/users/"+ authData.uid+"/favorites/");
			  	$scope.userFavorites = $firebaseArray(ref);
			  	console.log($scope.userFavorites);
			    console.log("Logged in as:", authData.uid);
			   
			  } else {
			    console.log("Logged out");
			  }
			})
// sets the ability fo r user to add a course as a favorite to their profile
		$scope.favorite = function(id){
			console.log(ref);
			ref.child(id).set({
          		Liked: true
          		// userName: $scope.userName
        		})

			// $scope.userFavorites.$add(id).then(function(ref) {
			  
			//   console.log("added record with id " + id);
			//   $scope.userFavorites.$indexFor(id); // returns location in the array
			// });
		}

	   
	    $scope.getGolfDeals = function() {

	    	$http({
			  method: 'GET',
			  url: 'http://ipinfo.io'
			}).then(function successCallback(response) {
				var latlong = response.data.loc;
				var city = response.data.city;
				console.log(response.data.city);
			    console.log(response.data.loc);
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
	      	 var method = 'GET',
	        url = 'https://api.yelp.com/v2/search/',
	        params = {
	          location: city,
	          cll: latlong,
	          callback: 'angular.callbacks._0',
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
	 				//console.log(key,values);
	 				$scope.golfdata.push(value);
	 			})
									
	        },function(error){
	        		console.log(error);
	        });
	      }
	       
	   
	  }
}]);




