// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider, $httpProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'Templates/main_template.html',
		controller : 'mainController'
	})

	.when('/Login', {
		templateUrl : 'Templates/login_template.html',
		controller : 'loginController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'aboutController'
	})

	// route for the contact page
	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});

});

scotchApp.factory('myService', function ($http) {
	return {
		getToken : function (data) {
			console.log(data);
			//return the promise directly.
			return $http({
				url : $App.WebServiceRoot + "/authorize",
				method : 'POST',
				data : data,
				headers : {
					"Content-Type" : "application/x-www-form-urlencoded"
				}
			}).then(function successCallback(result) {
				return result;
				// this callback will be called asynchronously
				// when the response is available
			}, function errorCallback(result) {
				return result;
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
	}
});

scotchApp.controller('mainController', function ($scope, $location) {
	// create a message to display in our view
	$App.CheckSecurity($location);
});

scotchApp.controller('aboutController', function ($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('loginController', function ($scope, myService, $location) {
	$scope.submitForm = function () {
		var result = {};
		var obj = $('#securityForm').serialize();
		myService.getToken(obj).then(function (result) {
			if (result.status === 200) {
				$location.path("/");
				$App.SetSession(result.data.access_token);
			} else {
				$App.DAlert('Invalid Login Info', 'User Info', 'error');
				$location.path("/Login");
			}
		});
	};
});
scotchApp.controller('contactController', function ($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
