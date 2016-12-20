angular.module('BandApp')
    .controller('EditGigsController', function($scope, $location, $routeParams, GigAPIService, store) {
        var id = $routeParams.id;
        var url = "https://morning-castle-91468.herokuapp.com/";


        GigAPIService.getGigs(url + "todo/" + id, $scope.username, store.get('authToken')).then(function(results) {

            $scope.gigs = results.data;
        }).catch(function(err) {
            console.log(err);
        });
 
        $scope.submitForm = function() {
            if ($scope.edit-gigsForm.$valid) {
                $scope.gig.username = $scope.username;
                
                GigAPIService.editGigs(url + "todo/" + id, $scope.gig, store.get('authToken')).then(function(results) {
                    $location.path("/gigs");
                }).catch(function(err) {
                    console.log(err);
                })
            }
        }
    });