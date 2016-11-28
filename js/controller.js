angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Josie and The Hepcats Home Page!";
    })
    .controller('aboutUsController', function($scope){
    	$scope.title = "About Us";
    })
    .controller('freebiesController', function($scope){
    	$scope.title = "freebies";
    })
    .controller('tracksController', function($scope){
    	$scope.title = "tracks";
    })
    .controller('gigsController', function($scope){
    	$scope.title = "gigs";
    })
    .controller('subscribeController', function($scope){
    	$scope.title = "subscribe";
    });