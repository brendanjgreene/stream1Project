angular.module('BandApp')
	.factory('TodoAPIService', function($http) {
		TodoAPIService = {
			getTodos: function(url, data, token) {
				var header = 'Authorization: JWT ' + token;
				return $http.get(url, {params:{"username": data}}, header);
			},

			createTodo: function(url, data, token){
				var header = 'Authorization: JWT ' + token;
				return $http.post(url, data, header);

			},

			editTodo: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                var header = "Authorization: JWT " + token;
                return $http.delete(url, token);
            }
        }
        return TodoAPIService;
    });