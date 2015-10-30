app.config(function ($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',{
		templateUrl:'views/signup.html',
		controller: 'HomeCtrl'
	}).
	when('/signin', {
        templateUrl: '/views/signin.html',
        controller: 'addDegreeCtrl'
      })	
})