var app = angular.module('ionicApp', ['ionic'])

app.factory('TodosService', function(){
	var todos = [
		{title: 'Take out the trash', done: true},
		{title: 'Do laundry', done: false},
		{title: 'Start cooking dinner', done: false}
	]

	return {
		todos: todos,
		getTodo: function(index){
			return todos[index]
		}
	}
})





app.controller('TodosCtrl', function($scope, TodosService){
	$scope.todos = TodosService.todos
})

app.controller('TodoCtrl', function($scope, todo){
	$scope.todo = todo
})






app.config(function($stateProvider, $urlRouterProvider) {


	$stateProvider
	.state('todos', {		
		abstract: true,		// abstract的state无法通故url直接访问，嵌套的子state的url需要在前面加上abstract的url来构成
		url: '/todos',		
		views: {
			todos: {		
				template: '<ion-nav-view></ion-nav-view>'		// 上一行已经制定是name=‘todos’的ion-nva-view了，这里不需要重复指定
			}
		}
	})

		$stateProvider
		.state('todos.list', {		// 基于abstract state, nesting state
			url: '',	
			templateUrl: 'templates/todos/todos.html',
			controller: 'TodosCtrl'
		});

		$stateProvider
		.state('todos.detail', {		
			url: "/:todo",		// 传递参数
			templateUrl: 'templates/todos/todo-detail.html',
			controller: 'TodoCtrl',
			resolve: {
				todo: function($stateParams, TodosService){
					return TodosService.getTodo($stateParams.todo)
				}
			}
		})

	$stateProvider
	.state('help', {		// state的名字
		url: '/help',		// 通过url可以访问这个state
		views: {
			help: {			// 使用这个template的ion-nav-view的name
				templateUrl: 'templates/todos/help.html'			// template文件夹的文件名，或者script type='text/ng-template'的id
			}
		}
	})
	
	$urlRouterProvider.otherwise('/')


})