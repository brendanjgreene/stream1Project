angular.module('BandApp').directive('h1Header', function(){
	return {
		restrict: 'EA', // -> element/attribute
		templateUrl: 'templates/directives/h1-header.html'
	};
});