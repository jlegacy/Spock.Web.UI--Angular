(function () {

	var scotchApp = angular.module('scotchApp');

	scotchApp.factory('userServices', function ($http) {
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
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;
				});
			},

			getUser : function (id) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts/" + id,
					method : "GET",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity()
					},
				}).then(function successCallback(result) {
					result.success = true;
					return result;
				}, function errorCallback(result) {
					result.success = false;
					return result;
				});
			},

			getUsers : function () {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts",
					method : "GET",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity()
					},
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			},

			createUser : function (data) {
				console.log(data);
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts",
					method : "POST",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity(),
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
					data : data,
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			},

			updateUser : function (id, data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts/" + id,
					method : "PUT",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity(),
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
					data : data,
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			},

			deleteUser : function (id) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts/" + id,
					method : "delete",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity(),
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			},
			resetPassword : function (id, data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts/ResetPassword/" + id,
					method : "post",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity(),
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			},
			changePassword : function (id, data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/Accounts/ChangePassword/" + id,
					method : "post",
					headers : {
						'authorization' : 'bearer ' + $App.GetSecurity(),
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
				}).then(function successCallback(result) {
					result.success = true;
					return result;

				}, function errorCallback(result) {
					result.success = false;
					return result;

				});
			}

		}
	});

})();
