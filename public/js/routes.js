app.config(function ($routeProvider,$locationProvider,uiGmapGoogleMapApiProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',{
		templateUrl:'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller: 'ChatCtrl'
	})
	.when('/register',{
		templateUrl:'views/register.html',
		controller: 'RegisterCtrl'
	})
	.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
	.when('/userdashboard', {
        templateUrl: 'views/userdashboard.html',
        controller: 'DashboardCtrl'
      })
	.when('/scorecard/:courseId', {
		    templateUrl: 'views/scorecard.html',
		    controller: 'ScorecardCtrl'
		  })
    .otherwise( {
    	redirectTo: '/'
    });
		//Routes are all in place and working correctly
		uiGmapGoogleMapApiProvider.configure({
	        key: 'AIzaSyCbS6tJIroWAxSR9vNCwhyxerrkoN2i2Lw',
	        v: '3.20', //defaults to latest 3.X anyhow
	        libraries: 'weather,geometry,visualization,places,events'
	    });
})
