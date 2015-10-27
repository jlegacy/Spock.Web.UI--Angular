(function () {

	// var scotchApp = angular.module('scotchApp');

	$App.scotchApp.controller('applicationEditController', function ($scope, $stateParams, applicationServices, $location) {

		$scope.title = 'Update Application';
		$scope.buttonText = 'Update Application';
		$scope.create = false;
		$scope.readOnly = false;
		
		
		applicationServices.getApplication($stateParams.id).then(function (result) {
			$App.ShowBusy();
			result.data.editAttribute = true;
			console.log(result.data);
			$scope.data = result.data;
			if (result.success) {
				$App.HideBusy();
			} else {
				$App.DAlert('Cannot Retrieve Application', 'Application Info', 'error');
				$App.HideBusy();
				return;
			}
		});

		$scope.submitForm = function () {
			var result = {};
			$App.ShowBusy();
			var obj = $('#ApplicationForm').serialize();

			applicationServices.updateApplication($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Application Successfully Updated', 'Application Info', 'success');
					$state.go("ListApplications");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Application Info', 'error', location);
				}
			})
		}

	});

	$App.scotchApp.controller('applicationDeleteController', function ($scope, $state, applicationServices, $location, $routeParams) {
		$scope.title = 'Delete Application';
		$scope.buttonText = 'Delete Application';
		$scope.create = false;
		$scope.readOnly = true;

		$App.ShowBusy();

		applicationServices.getApplication($routeParams.id).then(function (result) {
			$scope.data = result.data;
			if (result.success) {
				$App.HideBusy();
			} else {
				$App.HideBusy();
				$App.DAlert('Cannot Retrieve Application', 'Application Info', 'error');
				return;
			}
		})

		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#ApplicationForm').serialize();
			applicationServices.deleteApplication($routeParams.id).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Application Successfully Deleted', 'Application Info', 'success');
				} else {
					$App.HideBusy();
					$App.DAlert('Cannot Delete Application', 'Application Info', 'error');
				}
			});
		}

	});

	$App.scotchApp.controller('applicationListController', function ($scope, $state, applicationServices, $location) {
		$App.ShowBusy();
		applicationServices.getApplications().then(function (result) {
			if (result.success) {
				$App.HideBusy();
					console.log(result.data.printApplications);
				$scope.applications = result.data.printApplications;
			
			} else {
				$App.HideBusy();
				$App.DAlert('Error Retrieving Application List', 'Application Info', 'error');
			}
		});
	});

	$App.scotchApp.controller('applicationChangePasswordController', function ($scope, $state, applicationServices, $location) {
		$scope.title = 'Change Password';
		$scope.buttonText = 'Change';
		$scope.admin = false;
		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#securityForm').serialize();
			applicationServices.changePassword($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Password Successfully Changed', 'Application Info', 'success');
					$state.go("ListApplications");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Change Password', 'error', $location);
				}
			});
		}

	});

	$App.scotchApp.controller('applicationResetPasswordController', function ($scope, $state, applicationServices, $location) {
		$scope.title = 'Reset Password';
		$scope.buttonText = 'Reset';
		$scope.admin = $App.admin;
		$scope.submitForm = function () {
			$App.ShowBusy();
			var result = {};
			var obj = $('#securityForm').serialize();
			applicationServices.resetPassword($routeParams.id, obj).then(function (result) {
				if (result.success) {
					$App.HideBusy();
					$App.DAlert('Password Successfully Reset', 'Application Info', 'success');
					$state.go("ListApplications");
				} else {
					$App.HideBusy();
					$App.CheckMessageStatus(result, 'Reset Password', 'error', $location);
				}
			});
		}
	});

})();
