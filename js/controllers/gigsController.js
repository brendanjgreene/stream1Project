angular.module('BandApp')
    .controller('gigsController', function($scope, $location, $route, TodoAPIService, store){
    	$scope.title = "Gigs";
        var Gigs = [
            {item: "1", date: "2016-12-08", venue: "Grace's 11th B-Day Party", Price: '€67'},
            {item: "2", date: "2017-01-28", venue: "Brendan's 46th Birthday Part", Price: '€32'},
            {item: "3", date: "2017-04-14", venue: "Ruination Day, AKA Medb's B-day", Price: '€6'},
            {item: "4", date: "2017-08-20", venue: "Tess's 6th B-Day Party", Price: '€167'},
            {item: "5", date: "2017-11-27", venue: "Caroline's 46thB-Day Party", Price: '€674'}
        ];
        $scope.Gigs = Gigs;
        //$scope.gigSubmissionUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');
        $scope.subscribed = function(){
            if ($scope.username){
                return true;
            }
        };
 
        $scope.todos = [];

        TodoAPIService.getTodos(url + "todo/", $scope.username, $scope.authToken).then(function(results){
            $scope.todos = results.data;
            console.log($scope.todos);
        }).catch(function(err){
            console.log(err);
        });

        $scope.submitForm = function(){
            if ($scope.gigSubmissionForm.$valid){
                $scope.todo.username = store.get('username');
                $scope.todos.push($scope.todo);
            
                TodoAPIService.createTodo(url + "todo/", $scope.todo, $scope.authToken).then(function(results){
                    console.log(results);
                    $route.reload()
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    });