angular.module('BandApp')
    .controller('loginController', function($scope, $location, $window, UserAPIService, store) {
        $scope.username = store.get("username");
        $scope.title = "Please Login!";

        $scope.LoginUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";
        var username = store.get("username");
        if(username){
            $location.path("/gigs");
        }

        $scope.submitForm = function() {
            $scope.LoginUser.username = $scope.user.username;
            $scope.LoginUser.password = $scope.user.password;
            $scope.LoginUser.email = $scope.user.email;

                UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.LoginUser).then(function(results){
                    $scope.data = results.data;
                    alert("Welcome Back!");
                    $scope.token = results.data.token;
                    store.set("username", $scope.LoginUser.username);
                    store.set("authToken", $scope.token);
                    $location.path("/gigs");
                    $window.location.reload();

                }).catch(function(err){
                	if(!store.get("username")){
                		$location.path("/subscribe");
                		alert("You need to Subscribe before you Login");
                	}
                });
            
        }

    })