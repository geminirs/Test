// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.controller('homeCtrl', function($scope){

})

.controller('menjinCtrl', function($scope){

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: 'homeCtrl'
  })

  // 智能门禁相关页面

  .state('menjin', {
    url: '/menjin',
    abstract: true,
    templateUrl: 'templates/menjin/menjin.html'
  })

    .state('menjin.menka', {
      url: '/menka',
      views: {
        'menka': {
          templateUrl: 'templates/menjin/menjin-menka-add.html'    
        }
      }
    })
      // menjin.menka.add
      // menjin.menka.remove

    .state('menjin.visitor', {
      url: '/visitor',
      views: {
        'visitor': {
          templateUrl: 'templates/menjin/menjin-visitor-add.html'    
        }
      }
    })

    .state('menjin.remote', {
      url: '/remote',
      views: {
        'remote': {
          templateUrl: 'templates/menjin/menjin-yuancheng.html'
        }
      }
    })
  // 物业相关页面结构
  .state('wuye', {
    url: '/wuye',
    abstract: true,
    templateUrl: ''
  })

    .state('wuye.jiaofei', {
      url: '/jiaofei',
      templateUrl: 'templates/wuye/wuye-jiaofei-all.html'
    })

      .state('wuye.jiaofei-detail', {
        url: '/detail',
        templateUrl: 'templates/wuye/wuye-jiaofei-detail.html'
      })

  // 停车场相关页面结构
  .state('parking', {
    url: '/parking',
    abstract: true,
    templateUrl: 'templates/parking/parking.html'
  })  

    .state('parking.chewei', {
      url: '/chewei',
      views: {
        'parking-chewei': {
          templateUrl: 'templates/parking/parking-chewei-check.html'    
        }
      }
    })

    .state('parking.fanxiang', {
      url: '/fanxiang',
      views: {
        'parking-fanxiang': {
          templateUrl: 'templates/parking/parking-fanxiang.html'    
        }
      }
      
    })

    .state('parking.jiaofei', {
      url: '/jiaofei',
      views: {
        'parking-jiaofei': {
          templateUrl: 'templates/parking/parking-jiaofei.html'    
        }
      }
      
    })

      .state('parking.jiaofei-detail', {
        url: '/detial',
        views: {
          'parking-detail': {
            templateUrl: 'templates/parking/parking-jiaofei-detail.html'    
          }
        }
        
      })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});