(function () {

//	var scotchApp = angular.module('scotchApp');

	$App.scotchApp.controller('mainController', function ($scope, $location) {
		// create a message to display in our view
		console.log('in main');
		$App.CheckSecurity($location);
	});

	$App.scotchApp.controller('logoutController', function ($scope, $state, userServices, $location) {
		$App.ClearSession();
		$state.go('Login');
	});

	$App.scotchApp.controller('loginController', function ($scope, $state, userServices, $location) {
		console.log('in login');
		$scope.submitForm = function () {
			var result = {};
			var obj = $('#securityForm').serialize();
			$App.ShowBusy();
			userServices.getToken(obj).then(function (result) {
				$App.admin = false;
				if (result.success) {
					if (result.data.role === "Admin") {
						$App.admin = true;
					} 
					$App.HideBusy();
					$state.go("/");
					$App.SetSession(result.data.access_token);
				} else {
					$App.HideBusy();
					$App.DAlert('Invalid Login Info', 'User Info', 'error');
					$state.go("Login");
				}
			});
		};
	});

	$App.scotchApp.controller('userCreateController', function ($scope, $state, userServices, $location) {

		$scope.title = 'Create User';
		$scope.buttonText = 'Create User';
		$scope.create = true;
		$scope.readOnly = false;

		$scope.submitForm = function () {
			console.log('submitted create');
			var result = {};
			var obj = $('#UserForm').serialize();
			userServices.createUser(obj).then(function (result) {
				$App.ShowBusy();
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('User Successfully Created', 'User Info', 'success');
					$state.go("ListUsers");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Create Users', 'error', $location);
				}
			});
		};
	});

	$App.scotchApp.controller('userEditController', function ($scope, $state, userServices, $location, $routeParams) {

		$scope.title = 'Update User';
		$scope.buttonText = 'Update User';
		$scope.create = false;
		$scope.readOnly = false;

		userServices.getUser($routeParams.id).then(function (result) {
			$App.ShowBusy();
			$scope.data = result.data;
			if (result.success) {
				$App.HideBusy();
			} else {
				$App.DAlert('Cannot Retrieve User', 'User Info', 'error');
				$App.HideBusy();
				return;
			}
		});

		$scope.submitForm = function () {
			var result = {};
			$App.ShowBusy();
			var obj = $('#UserForm').serialize();

			userServices.updateUser($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('User Successfully Updated', 'User Info', 'success');
					$state.go("ListUsers");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'User Info', 'error', location);
				}
			})
		}

	});

	$App.scotchApp.controller('userDeleteController', function ($scope, $state, userServices, $location, $routeParams) {
		$scope.title = 'Delete User';
		$scope.buttonText = 'Delete User';
		$scope.create = false;
		$scope.readOnly = true;

		$App.ShowBusy();

		userServices.getUser($routeParams.id).then(function (result) {
			$scope.data = result.data;
			if (result.success) {
				$App.HideBusy();
			} else {
				$App.HideBusy();
				$App.DAlert('Cannot Retrieve User', 'User Info', 'error');
				return;
			}
		});

		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#UserForm').serialize();
			userServices.deleteUser($routeParams.id).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('User Successfully Deleted', 'User Info', 'success');
					$state.go("ListUsers");
				} else {
					$App.HideBusy();
					$App.DAlert('Cannot Delete User', 'User Info', 'error');
				}
			});
		}

	});
	
	$App.scotchApp.controller('userListController', function ($scope, $state, userServices, $location) {
		console.log('in users');
		$App.ShowBusy();
		userServices.getUsers().then(function (result) {
			if (result.success) {
				$App.HideBusy();
				$scope.users = result.data.users;
			} else {
				$App.HideBusy();
				$App.DAlert('Error Retrieving User List', 'User Info', 'error');
			}
		});
	});

	$App.scotchApp.controller('userChangePasswordController', function ($scope, $state, userServices, $location) {
		$scope.title = 'Change Password';
		$scope.buttonText = 'Change';
		$scope.admin = false;
		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#securityForm').serialize();
			userServices.changePassword($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Password Successfully Changed', 'User Info', 'success');
					$state.go("ListUsers");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Change Password', 'error', $location);
				}
			});
		}

	});

	$App.scotchApp.controller('userResetPasswordController', function ($scope, $state, userServices, $location)   {
		$scope.title = 'Reset Password';
		$scope.buttonText = 'Reset';
		$scope.admin = $App.admin; 
		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#securityForm').serialize();
			userServices.resetPassword($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Password Successfully Reset', 'User Info', 'success');
					$state.go("ListUsers");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Reset Password', 'error', $location);
				}
			});
		}});

})();
