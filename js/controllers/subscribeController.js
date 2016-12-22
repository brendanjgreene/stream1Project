angular.module('BandApp')

    .controller('subscribeController', function($scope, $location, $window, UserAPIService, store) {
    	
        $scope.title = "Subscribe";

        $scope.subscribed = function(){
            if (username){
                return true;
            }
        };

        $scope.subscriptionUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";
        var username = store.get("username");
        if(username){
            $location.path("/gigs");
        }

        $scope.submitForm = function() {
            if ($scope.subscriptionForm.$valid) {
                $scope.subscriptionUser.username = $scope.user.username;
                $scope.subscriptionUser.password = $scope.user.password;
                $scope.subscriptionUser.email = $scope.user.email;

                UserAPIService.callAPI(url + "accounts/register/", $scope.subscriptionUser).then(function(results){
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.subscriptionUser.username && $scope.data.password == $scope.subscriptionUser.password){
                        //alert("Congratulations!!! You are Subscribed to Suzie and the Hep Cats Newsletter");
                        $('#congratsAlert').css("display", "block").on('closed.bs.alert', function () {
                            UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.data).then(function(results) {
                                $scope.data = results.data;
                                $scope.token = results.data.token;
                                store.set("username", $scope.subscriptionUser.username);
                                store.set("authToken", $scope.token);
                                $location.path("/gigs");
                                $window.location.reload();
                            }).catch(function(err){
                                console.log(err);
                            });
                        });
                    }
                }).catch(function(err) {
                    //alert("you may already be subscribed, We will attemp to log you in, instead!");
                    $('#heyAlert').css("display", "block").on('closed.bs.alert', function (){
                        UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.subscriptionUser).then(function(results){
                            $scope.data = results.data;
                            //alert("Welcome Back!");
                            $('#welcomeBAlert').css("display", "block").on('closed.bs.alert', function () {
                                $scope.token = results.data.token;
                                store.set("username", $scope.subscriptionUser.username);
                                store.set("authToken", $scope.token);
                                $location.path("/gigs");
                                $window.location.reload();
                            });
                        }).catch(function(){//
                            console.log(err);//
                        });//
                    });
                });
            }
        }
    });
