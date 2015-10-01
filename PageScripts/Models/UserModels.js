(function () {

	var $UserModels = function () {};

	//Get One User//
	$UserModels.GetUser = function (id, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts/" + id,
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});

	};

	//Get List of Users//
	$UserModels.GetUsers = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get Users', 'error');
			}
		});
	};

	//Update a User//
	$UserModels.UpdateUser = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts/" + id,
			type : "PUT",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback();
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Update User', 'error');
			}
		});

	};

	//Delete a User//
	$UserModels.DeleteUser = function (id, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts/" + id,
			type : "DELETE",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback();
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Delete User', 'error');
			}
		});

	};

	//Create a User//
	$UserModels.CreateUser = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts",
			type : "POST",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback();
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'CreateUser', 'error');
			}
		});
	};

	//Change Password for a User//
	$UserModels.UserChangePassword = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts/ChangePassword/" + id,
			type : "POST",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status, request);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'CreateUser', 'error');
			}
		});
	};

	//Reset Password for a User//
	$UserModels.ResetPassword = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Accounts/ResetPassword/" + id,
			type : "POST",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status, request);

			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Reset Password', 'error');
			}
		});
	};

	//Change Password for a User//
	$UserModels.GetToken = function (data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/authorize",
			data : data,
			type : "POST",
			contentType : "application/x-www-form-urlencoded",
			success : function (result, status) {
				$App.HideBusy();
				callback(result, status);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get Token', 'error');
			}
		});
	};

	window.$UserModels = $UserModels;
	return (this);
}
	());
