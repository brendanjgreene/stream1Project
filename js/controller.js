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
        var Gigs = [
            {item: "1", date: "2016-12-08", venue: "Grace's 11th B-Day Party", Price: 67},
            {item: "2", date: "2017-01-28", venue: "Brendan's 46th Birthday Part", Price: 32},
            {item: "3", date: "2017-04-14", venue: "Ruination Day, AKA Medb's Birthday", Price: 6},
            {item: "4", date: "2017-08-20", venue: "Tess's 6th B-Day Party", Price: 167},
            {item: "5", date: "2017-11-27", venue: "Caroline's 46thB-Day Party", Price: 674}
        ];
        $scope.Gigs = Gigs;
    })
    .controller('subscribeController', function($scope){
    	$scope.title = "Subscribe";
        $scope.subscriptionUser = {};

        $scope.submitForm = function(){
            if ($scope.subscriptionForm.$valid){
                $scope.subscriptionUser.username = $scope.user.username;
                $scope.subscriptionUser.password = $scope.user.password;
                $scope.subscriptionUser.email = $scope.user.email;
                $scope.subscriptionUser.comment = $scope.user.comment;
            }

            console.log($scope.subscriptionUser.username + " " + $scope.subscriptionUser.password + " " + $scope.subscriptionUser.email + " " + $scope.subscriptionUser.comment);
        }
    });