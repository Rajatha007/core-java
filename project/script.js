	// create the module and name it scotchApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the add page
			.when('/add', {
				templateUrl : 'pages/add.html',
				controller  : 'mainController'
			})

			// route for the update page
			.when('/update', {
				templateUrl : 'pages/update.html',
				controller  : 'updateController'
			})
			
				// route for the delete page
			.when('/delete', {
				templateUrl : 'pages/delete.html',
				controller  : 'deleteController'
			})

			// route for the view page
			.when('/view', {
				templateUrl : 'pages/view.html',
				controller  : 'viewController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is add!';
	});

	myApp.controller('updateController', function($scope) {
		$scope.message = 'This is update.';
	});
	
	myApp.controller('deleteController', function($scope) {
		$scope.message = 'This is delete.';
	});


	myApp.controller('viewController', function($scope) {
		$scope.message = 'This is view.';
	});