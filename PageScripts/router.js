// configure our routes

//var scotchApp = angular.module('scotchApp');
    
	$App.scotchApp.config(function($stateProvider) {
	
	$stateProvider

// Users
 	.state('/', {
		templateUrl : 'Templates/main_template.html',
		controller : 'mainController'
	})
	.state('Login', {
		url:'/Login',
		templateUrl : 'Templates/login_template.html',
		controller : 'loginController'
	})
	.state('CreateUser', {
		
		templateUrl : 'Templates/user_template.html',
		controller : 'userCreateController'
	})
	.state('EditUser/:id', {
		templateUrl : 'Templates/user_template.html',
		controller : 'userEditController'
	})
	.state('DeleteUser/:id', {
		
		templateUrl : 'Templates/user_template.html',
		controller : 'userDeleteController'
	})
	.state('ListUsers', {
		url:'/ListUsers',
		templateUrl : '/Templates/user_list_template.html',
		controller : 'userListController'
	})
	.state('UserChangePassword/:id', {
	
		templateUrl : 'Templates/user_change_password.html',
		controller : 'userChangePasswordController'
	})
	.state('ResetPassword/:id', {
		
		templateUrl : 'Templates/user_change_password.html',
		controller : 'userResetPasswordController'
	})
	.state('Logout', {
		url:'/Logout',
		controller : 'logoutController'
	})
	
	//Applications
	.state('ListApplications', {
		url:'/ListApplications',
		templateUrl : 'Templates/application_list_template.html',
		controller : 'applicationListController'
 	})
	
	.state('EditPrintApplication', {
		url:'/EditPrintApplication/:id',
		params: {id:{value:''}},
		templateUrl : 'Templates/application_template.html',
		controller : 'applicationEditController'
	})
	.state('DisplayPrintApplication/:id', {
		
		templateUrl : 'Templates/application_template.html',
		controller : 'applicationDisplayController'
	})
	
	
	.state('Error400', {
		
		templateUrl : 'Templates/error400_template.html'
	})
	.state('Error401', {
	
		templateUrl : 'Templates/error401_template.html'
	})
	.state('Error402', {
		
		templateUrl : 'Templates/error402_template.html'
	}) 


	});
	
  

