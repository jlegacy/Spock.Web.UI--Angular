(function () {

	var $SystemSettingsModels = function () {};

	//Get One SystemSettings//
	$SystemSettingsModels.GetSystemSettings = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/SystemSettings/",
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
				$App.CheckMessageStatus(result, 'Get System Settings', 'error');
			}
		});

	};

	//Update a SystemSettings//
	$SystemSettingsModels.UpdateSystemSettings = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/SystemSettings/",
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
				$App.CheckMessageStatus(result, 'Update System Settings', 'error'); 
			}
		});

	};

	//Add a License//
	$SystemSettingsModels.CreateSystemSettings = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/SystemSettings/AddLicense",
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
				$App.CheckMessageStatus(result, 'Add Licence', 'error');
			}
		});
	};

	window.$SystemSettingsModels = $SystemSettingsModels;
	return (this);
}
	());
