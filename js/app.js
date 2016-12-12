angular.module('BandApp', ['ngRoute', 'RouteControllers', 'h1Directive', 'UserService', 'angular-storage']);

angular.module('BandApp').config(function($routeProvider){
	
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/aboutUs', {
		templateUrl: "templates/aboutUs.html",
		controller: "aboutUsController"
	})
	.when('/freebies', {
		templateUrl: "templates/freebies.html",
		controller: "freebiesController"
	})
	.when('/tracks', {
		templateUrl: "templates/tracks.html",
		controller: "tracksController"
	})
	.when('/gigs', {
		templateUrl: "templates/gigs.html",
		controller: "gigsController"
	})
	.when('/subscribe', {
		templateUrl: "templates/subscribe.html",
		controller: "subscribeController"
	});
});