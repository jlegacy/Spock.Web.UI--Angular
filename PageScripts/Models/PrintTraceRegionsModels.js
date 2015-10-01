(function () {

	var $PrintTraceRegionsModels = function () {};

	//Get PrintTraceRegions by Print Procesor//
	$PrintTraceRegionsModels.GetPrintTraceRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/GetByPrintTraceRegionsSelectList/",
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
				$App.CheckMessageStatus(result, 'Get PrintTraceRegions By Print Procesor', 'error');
			}
		});

	};

	//Get One PrintTraceRegions//
	$PrintTraceRegionsModels.DeletePrintTraceRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions/" + id,
			type : "DELETE",
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
				$App.CheckMessageStatus(result, 'Get PrintTraceRegions', 'error');
			}
		});

	};

	//Get a List of PrintTraceRegions//
	$PrintTraceRegionsModels.GetPrintTraceRegions = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions",
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
				$App.CheckMessageStatus(result, 'Get PrintTraceRegions by Server Name', 'error');
			}
		});

	};

	//Get One PrintTraceRegions//
	$PrintTraceRegionsModels.GetPrintTraceRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get PrintTraceRegions', 'error');
			}
		});

	};

	//Create a PrintTraceRegions//
	$PrintTraceRegionsModels.CreatePrintTraceRegions = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions/",
			type : "Post",
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
				$App.CheckMessageStatus(result, 'Create PrintTraceRegions', 'error');
			}
		});

	};

	//Update a PrintTraceRegions//
	$PrintTraceRegionsModels.UpdatePrintTraceRegions = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update PrintTraceRegions', 'error');
			}
		});

	};

	window.$PrintTraceRegionsModels = $PrintTraceRegionsModels;
	return (this);
}
	());
