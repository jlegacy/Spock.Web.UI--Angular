(function () {

	var scotchApp = angular.module('scotchApp');

	scotchApp.factory('applicationServices', function ($http) {
		return {
			
			getApplication : function (id) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications/GetById/" + id,
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
			
			GetApplicationByPrintProcessor : function (data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications/GetByPrintProcessor/",
					method : "GET",
					data: data,
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
			
			GetApplicationByServerName : function (data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications/GetByServerName/",
					method : "GET",
					data: data,
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
			
			GetApplicationByQueueName : function (data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications/GetLastModifiedByQueueName/",
					method : "GET",
					data: data,
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

			getApplications : function (data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications",
					method : "GET",
					data: data,
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

		
			updateApplication : function (id, data) {
				//return the promise directly.
				return $http({
					url : $App.WebServiceRoot + "/api/PrintApplications/" + id,
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

		}
	});

})();
