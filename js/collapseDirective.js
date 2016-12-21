angular.module('BandApp').directive('menucollapse', function(){
	return {
		restrict: 'EAC', // -> element/attribute
		templateUrl: 'templates/directives/menucollapse.html'
	};
});