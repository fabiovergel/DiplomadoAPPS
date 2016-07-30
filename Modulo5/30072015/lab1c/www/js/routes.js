angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.listCardForms', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/listCardForms.html',
        controller: 'listCardFormsCtrl'
      }
    }
  })

  .state('tabsController.toggleCheckBoxRadioButton', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/toggleCheckBoxRadioButton.html',
        controller: 'toggleCheckBoxRadioButtonCtrl'
      }
    }
  })

  .state('tabsController.formsRange', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/formsRange.html',
        controller: 'formsRangeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('welcome', {
    url: '/page6',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});