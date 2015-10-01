(function () {

	var $ProfileModels = function () {};

	//Get One Profile//
	$ProfileModels.GetProfile = function (id, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles/" + id,
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
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});

	};

	//Get List of Profiles//
	$ProfileModels.GetProfiles = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				console.log(result);
				console.log(request.getAllResponseHeaders());
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});
	};

	//Update a Profile//
	$ProfileModels.UpdateProfile = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles/" + id,
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
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});

	};

	//Delete a Profile//
	$ProfileModels.DeleteProfile = function (id, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles/" + id,
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
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});

	};

	//Create a Profile//
	$ProfileModels.CreateProfile = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles",
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
				$App.CheckMessageStatus(result, 'Get User', 'error');
			}
		});
	};

	window.$ProfileModels = $ProfileModels;
	return (this);
}
	());
