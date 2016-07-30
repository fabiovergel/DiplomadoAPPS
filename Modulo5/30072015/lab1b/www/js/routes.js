angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.listCardsForms', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listCardsForms.html',
        controller: 'listCardsFormsCtrl'
      }
    }
  })

  .state('menu.toogleCheckBoxRadioButton', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/toogleCheckBoxRadioButton.html',
        controller: 'toogleCheckBoxRadioButtonCtrl'
      }
    }
  })

  .state('menu.formsRange', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/formsRange.html',
        controller: 'formsRangeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});