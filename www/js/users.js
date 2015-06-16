angular.module('users', ['ionic'])

// factory



// controller

.controller('userCtrl', function($scope, $stateParams){
	$scope.users = [{
		name: 'enno',
		fullname: 'Enno Zhong',
		email: 'enno.zhong@software.dell.com'
	}, {
		name: 'katherine',
		fullname: 'Katherine Mao',
		email: 'katherine.mao@software.dell.com'
	}, {
		name: 'suying',
		fullname: 'Suying Wu',
		email: 'suying.wu@software.dell.com'
	}, {
		name: 'wedy',
		fullname: 'Wedy Yu',
		email: 'wedy.yu@software.dell.com'
	}]

	//$stateParams.userName = userName;
});


// config

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('users', {
    url: "/users",
    templateUrl: "templates/users.html",
    controller: 'userCtrl'
  })

  // Each tab has its own nav history stack:

  .state('user', {
    url: '/users/:userName',
    templateUrl: 'templates/user.html',
    controller: 'userCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/users');

});