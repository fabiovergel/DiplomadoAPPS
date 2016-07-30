angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('listCardsForms', {
    url: '/page2',
    templateUrl: 'templates/listCardsForms.html',
    controller: 'listCardsFormsCtrl'
  })

  .state('toggleCheckboxRadioButton', {
    url: '/page3',
    templateUrl: 'templates/toggleCheckboxRadioButton.html',
    controller: 'toggleCheckboxRadioButtonCtrl'
  })

  .state('formsRange', {
    url: '/page4',
    templateUrl: 'templates/formsRange.html',
    controller: 'formsRangeCtrl'
  })
  
  .state('ListCountries', {
    url: '/page5',
    templateUrl: 'templates/ListCountries.html',
    controller: 'listCountriesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});