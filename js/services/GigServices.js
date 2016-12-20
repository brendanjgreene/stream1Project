angular.module('BandApp')
	.factory('GigAPIService', function($http) {
		GigAPIService = {
			getGigs: function(url, data, token) {
				var header = 'Authorization: JWT ' + token;
				return $http.get(url, {params:{"username": data}}, header);
			},

			createGig: function(url, data, token){
				var header = 'Authorization: JWT ' + token;
				return $http.post(url, data, header);

			},

			editGig: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteGig: function(url, token) {
                var header = "Authorization: JWT " + token;
                return $http.delete(url, token);
            }
        }
        return GigAPIService;
    });