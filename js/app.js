angular.module('BandApp', ['ngRoute', 'RouteControllers']);

angular.module('BandApp').config(function($routeProvider){

	$routeProvider.when('/', {
		templateURL: 'templates/home.html',
		controller: 'HomeController'
	});
});