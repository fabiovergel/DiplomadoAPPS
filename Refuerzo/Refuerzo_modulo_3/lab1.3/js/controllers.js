var minaControllers  = angular.module('minaControllers', []);

minaControllers.controller('AppController', function AppController($scope, $http, $log){
    
    $scope.utanVariabel = function(){
        $log.debug('Klickade på knappen utan variabel');
    }
    
    $scope.medVariabel = function(var_in){
        $log.debug('Klickade på knappen/listan med variabel, '+ var_in);
    }
    
    $http.get('data.json').success(function(data){
        $log.debug(data);
        $scope.retur_data = data;
    });

});