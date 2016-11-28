angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Suzie and The Hepcats Home Page!";
    })
    .controller('aboutUsController', function($scope){
    	$scope.title = "About Us";
    })
    .controller('freebiesController', function($scope){
    	$scope.title = "Freebies";
    })
    .controller('tracksController', function($scope){
    	$scope.title = "Tracks";
    })
    .controller('gigsController', function($scope){
    	$scope.title = "Gigs";
    })
    .controller('subscribeController', function($scope){
    	$scope.title = "Subscribe";
    });