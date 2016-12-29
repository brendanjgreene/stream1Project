angular.module('BandApp')

    .controller('EditGigsController', function($scope, $location, $routeParams, GigAPIService, store) {
        var id = $routeParams.id;
        var url = "https://morning-castle-91468.herokuapp.com/";

        GigAPIService.getGigs(url + "todo/" + id, store.get('username'), store.get('authToken')).then(function(results) {

            $scope.gig = results.data;
        }).catch(function(err) {
            console.log(err);
        });
 
        $scope.submitForm = function() {
            if ($scope.editGigForm.$valid) {
                $scope.gig.username = store.get('username');
                
                GigAPIService.editGig(url + "todo/" + id, $scope.gig, store.get('authToken')).then(function(results) {
                    //$scope.gig = results.data;
                    //$scope.gigs = $scope.gigs.filter(function(element) {
                    //    return element.id !==id;
                    //});
                    $location.path("/gigs");
                }).catch(function(err) {
                    console.log(err);
                })
            }
        }
    });