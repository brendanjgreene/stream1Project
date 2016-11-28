angular.module('BandApp', ['ngRoute', 'RouteControllers']);

angular.module('BandApp').config(function($routeProvider){

	$routeProvider.when('/', {
		templateURL: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/About_Us', {
		templateURL: 'templates/About_Us.html',
		controller: 'AboutUSControler'
	})
	.when('/Freebies', {
		templateURL: 'templates/Freebies.html',
		controller: 'FreebiesContoller'
	})
	.when('/Tracks', {
		templateURL: 'templates/Tracks.html',
		controller: 'TracksController'
	})
	.when('/Gigs', {
		templateURL: 'templates/Gigs.html',
		controller: 'GigsController'
	})
	.when('/Subscribe', {
		templateURL: 'templates/Subscribe.html'
		controller: 'SubscribeController'
	});
});