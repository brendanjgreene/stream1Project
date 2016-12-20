angular.module('BandApp')
    .controller('gigsController', function($scope, $location, $route, GigAPIService, store){
    	$scope.title = "Gigs";
        $scope.BookedGigs = [
            {item: "1", date: "2016-12-08", venue: "Grace's 11th B-Day Party", Price: '€67'},
            {item: "2", date: "2017-01-28", venue: "Brendan's 46th Birthday Part", Price: '€32'},
            {item: "3", date: "2017-04-14", venue: "Ruination Day, AKA Medb's B-day", Price: '€6'},
            {item: "4", date: "2017-08-20", venue: "Tess's 6th B-Day Party", Price: '€167'},
            {item: "5", date: "2017-11-27", venue: "Caroline's 46thB-Day Party", Price: '€674'}
        ];
        $scope.gigs = [];
        
        var url = "https://morning-castle-91468.herokuapp.com/";
        var username = store.get("username");

        $scope.authToken = store.get("authToken");
        $scope.username = store.get("username");
        $scope.subscribed = function(){
            if ($scope.username){
                return true;
            }
        };
        
        $scope.editGig = function (id){
            $location.path("/gigs/edit/" + id);
        };

        $scope.deleteGig = function(id){
            GigAPIService.deleteGig(url + "todo/" + id, $scope.username, $scope.authToken).then(function(results){
                console.log(results);
            }).catch(function(err){
                console.log(err);
            });
        };
 
        GigAPIService.getGigs(url + "todo/", $scope.username, $scope.authToken).then(function(results){
            $scope.gigs = results.data;
            console.log($scope.gigs);
        }).catch(function(err){
            console.log(err);
        });

        $scope.submitForm = function(){
            if ($scope.gigSubmissionForm.$valid){
                $scope.gig.username = $scope.username;
                $scope.gig.status = "Doing";
                //$scope.gig.id = Math.random() + 1;
                //$scope.gig.delete($scope.gig.date);
                console.log($scope.gig);
            
                GigAPIService.createGig(url + "todo/", $scope.gig, $scope.authToken).then(function(results){
                    console.log(results);
                    $scope.gigs.push($scope.gig);
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    });
