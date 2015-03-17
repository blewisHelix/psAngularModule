(function() {
	
	var app = angular.module("githubViewer", []);

	var MainController = function($scope,$http){

		var onUserComplete = function(response){
			$scope.user = response.data;
		};

		var onError = function(reason){
			$scope.error = "could not fetch the user";
		};
		
		$http.get("https://api.github.com/users/blewisHelix")
			.then(onUserComplete,onError);
	}

	app.controller("MainController", ["$scope", "$http", MainController]);

}());

