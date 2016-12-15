angular.module('BandApp')
    .controller('subscribeController', function($scope, UserAPIService, store){
    	$scope.title = "Subscribe";
        $scope.subscriptionUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function(){
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results){
                $scope.token = results.data.token;
                store.set('username', $scope.subscriptionUser.username);
                store.set('authToken', $scope.token);
            }).catch(function(err){
                console.log(err.data);
            });
        }

        $scope.submitForm = function(){
            if ($scope.subscriptionForm.$valid){
                $scope.subscriptionUser.username = $scope.user.username;
                $scope.subscriptionUser.password = $scope.user.password;
                $scope.subscriptionUser.email = $scope.user.email;
                $scope.subscriptionUser.comment = $scope.user.comment;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.subscriptionUser).then(function(results){
                    $scope.data = results.data;
                    alert("You have successfully registered to Suzie and the Hep Cats Newsletter");
                    $scope.login();
                }).catch(function(err){
                    alert("Sorry! Something Went Wrong!");
                });
            }

            /*console.log($scope.subscriptionUser.username + " " + $scope.subscriptionUser.password + " " + $scope.subscriptionUser.email + " " + $scope.subscriptionUser.comment);*/
        };
    });