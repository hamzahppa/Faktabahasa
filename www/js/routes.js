angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.feeds', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/feeds.html',
        controller: 'feedsCtrl'
      }
    }
  })

  .state('tabsController.clubbingSchedule', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/clubbingSchedule.html',
        controller: 'clubbingScheduleCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('addRoom', {
    url: '/page5',
    templateUrl: 'templates/addRoom.html',
    controller: 'addRoomCtrl'
  })

  .state('tabsController.post', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});