angular.module('BandApp')
    .controller('tracksController', function($scope){
    	$scope.title = "Tracks";
    	$('tr').click(function(){
    		$(this).find('span').toggleClass('glyphicon-chevron-down').toggleClass('glyphicon-chevron-up');
    	});
    })