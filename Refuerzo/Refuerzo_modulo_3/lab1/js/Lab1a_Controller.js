var app = angular.module('myAppRefuLab1', []);

app.controller('MyCtrl', function($scope,$filter) {
  $scope.$watch('second', function(val) {
    $scope.second = $filter('uppercase')(val);
  }, true);
});