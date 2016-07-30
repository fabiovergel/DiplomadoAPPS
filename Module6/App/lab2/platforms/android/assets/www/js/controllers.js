angular.module('My_app1.controllers', [])

.controller('mobileController', function($scope){
	$scope.mobile_message = 'HOLA MUNDO!!';
})

.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'Hello World!!';
});