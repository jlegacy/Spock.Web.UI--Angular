(function () {

	var $ApplicationModels = function () {};

	//Get One Application//
	$ApplicationModels.GetApplication = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintApplications/GetById/" + id,
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
				$App.CheckMessageStatus(result, 'Get Application', 'error');
			}
		});

	};

	//Get Application by Print Processor//
	$ApplicationModels.GetApplicationByPrintProcessor = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintApplications/GetByPrintProcessor/",
			type : "GET",
			data : data,
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
				$App.CheckMessageStatus(result, 'Get Application By Print Processor', 'error');
			}
		});

	};

	//Get Application by Server Name//
	$ApplicationModels.GetApplicationByServerName = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintApplications/GetByServerName",
			type : "GET",
			data : data,
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
				$App.CheckMessageStatus(result, 'Get Application by Server Name', 'error');
			}
		});

	};

	//Get Last Name of of the modified by Queue Name//
	$ApplicationModels.GetApplicationbyQueueName = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "api/PrintApplications/GetLastModifiedByQueueName",
			type : "GET",
			data : data,
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
				$App.CheckMessageStatus(result, 'Get Application by Print Queue', 'error');
			}
		});

	};

	//Get List of Applications//
	$ApplicationModels.GetApplications = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintApplications",
			type : "GET",
			data : data,
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				console.log(result);
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get Applications', 'error');
			}
		});
	};

	//Update a Application//
	$ApplicationModels.UpdateApplication = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintApplications/" + id,
			type : "PUT",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Update Application', 'error');
			}
		});

	};

	window.$ApplicationModels = $ApplicationModels;
	return (this);
}
	());
