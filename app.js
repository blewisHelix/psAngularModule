
(function(){
	
	var app = angular.module("githubViewer", ["ngRoute"]);

	app.config(function($routeProvider){
        $routeProvider
            .when("/main",{
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username",{
                templateUrl: "User.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame",{
                templateUrl: "Repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"});
	});

}());