angular.module('My_app1', ['ngRoute', 'My_app1.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/mobile', {
	    templateUrl : "views/mobile.html",
	    controller: 'mobileController'
	})

	.when('/smartphone', {
		templateUrl: "views/smartphone.html",
		controller: 'smartphoneController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);