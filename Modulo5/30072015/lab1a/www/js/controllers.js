angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('listCardsFormsCtrl', function($scope) {

})
   
.controller('toggleCheckboxRadioButtonCtrl', function($scope) {

})
   
.controller('formsRangeCtrl', function($scope) {

})
 
.controller('listCountriesCtrl', function($scope) {
$scope.filtros = [
    { name: "currency",   desc: "Format a number to a currency format." },
    { name: "date",   desc: "Format a date to a specified format." },
    { name: "filter",   desc: "Select a subset of items from an array." },
    { name: "json",   desc: "Format an object to a JSON string." },
    { name: "limitTo", desc: "Limits an array/string, into a specified number of elements/characters." },
    { name: "lowercase",  desc: "Format a string to lower case." },
	{ name: "number",  desc: "Format a number to a string." },
	{ name: "orderBy",  desc: "Orders an array by an expression." },
	{ name: "uppercase",  desc: "Format a string to upper case." }
  ];
})
 