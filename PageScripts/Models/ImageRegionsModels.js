(function () {

	var $ImageRegionsModels = function () {};

	//Get ImageRegions by Print Procesor//
	$ImageRegionsModels.GetImageRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/GetByImageRegionsSelectList/",
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
				$App.CheckMessageStatus(result, 'Get ImageRegions By Print Procesor', 'error');
			}
		});

	};

	//Get One ImageRegions//
	$ImageRegionsModels.DeleteImageRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get ImageRegions', 'error');
			}
		});

	};

	//Get a List of ImageRegions//
	$ImageRegionsModels.GetImageRegions = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions",
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
				$App.CheckMessageStatus(result, 'Get ImageRegions by Server Name', 'error');
			}
		});

	};

	//Get One ImageRegions//
	$ImageRegionsModels.GetImageRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get ImageRegions', 'error');
			}
		});

	};

	//Create a ImageRegions//
	$ImageRegionsModels.CreateImageRegions = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/",
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
				$App.CheckMessageStatus(result, 'Create ImageRegions', 'error');
			}
		});

	};

	//Update a ImageRegions//
	$ImageRegionsModels.UpdateImageRegions = function (id, data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update ImageRegions', 'error');
			}
		});

	};

	window.$ImageRegionsModels = $ImageRegionsModels;
	return (this);
}
	());
