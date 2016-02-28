var app = angular.module('wormburnerApp',[
	'ngRoute',
	'firebase',
	'uiGmapgoogle-maps',
]).run(function($rootScope) {
$rootScope.jsonpCount = -1;
})
