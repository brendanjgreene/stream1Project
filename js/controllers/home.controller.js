angular.module('BandApp')
    .controller('HomeController', function($scope, store){
        $scope.title = "Welcome To Our Home Page!";
        $scope.username = store.get("username");
        var username = $scope.username;

    })