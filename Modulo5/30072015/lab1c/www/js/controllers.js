angular.module('app.controllers', [])
  
.controller('listCardFormsCtrl', function($scope) {

})
   
.controller('toggleCheckBoxRadioButtonCtrl', function($scope) {

})
   
.controller('formsRangeCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope, $state) {
$scope.yepp = 'HELLO';
	$scope.goToPage = function(_username, _password){
		localStorage.setItem('username', _username);
		localStorage.setItem('pass', _password);
		$state.go('tabsController.welcome');
	}
})
   
.controller('welcomeCtrl', function($scope) {
console.log(localStorage.getItem('email'));
	$scope.email = localStorage.getItem('username');
	$scope.pass = localStorage.getItem('pass');
})