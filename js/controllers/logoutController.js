angular.module('BandApp')
    .controller('logoutController', function($scope, $location, $window, store) {
        $scope.title = "Do You Really want to Log Out!";
        $scope.logOut = function(){
        	$scope.authToken = store.remove('authToken');
        	$scope.username = store.remove('username');
        	$location.path("/");
        	$window.location.reload();
        }
    })