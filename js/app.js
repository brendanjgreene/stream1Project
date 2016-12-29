angular.module('BandApp', [
    'ngRoute',
    'angular-storage'
]);

angular.module('BandApp').config(function($routeProvider) {

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
		})
		.when('/logout', {
			templateUrl: "templates/logOut.html",
			controller: "logoutController"
		})
		.when('/gigs/edit/:id', {
			templateUrl: "templates/editGigs.html",
			controller: "EditGigsController"
		})
		.when('/login', {
			templateUrl: "templates/login.html",
			controller: "loginController"
		});
});