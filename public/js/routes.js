app.config(function ($routeProvider,$locationProvider) {
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
    .otherwise( { 
    	redirectTo: '/'
    });
 	
})