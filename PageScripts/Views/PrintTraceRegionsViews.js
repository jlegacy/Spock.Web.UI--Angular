(function () {

	var $PrintTraceRegions = function () {};

	$PrintTraceRegions.variables = {};

	var callbackPrintTraceRegionsDeleteConfirm = function (data) {
		$App.DAlert('PrintTraceRegions Deleted', 'Edit PrintTraceRegions', 'success'); 
		routie('ListPrintTraceRegions/');
	};

	var callbackPrintTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PrintTraceRegions Updated', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/');
	};
	
	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PrintTraceRegions Deleted', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/');
	};



	var callbackCreatePrintTraceRegions = function () {
		$App.DAlert('PrintTraceRegions Created', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/');
	};

	var callbackDisplayEditPrintTraceRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit PrintTraceRegions';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$PrintTraceRegionsModels.UpdatePrintTraceRegions(jsonData.id, obj, callbackPrintTraceRegionsUpdateConfirm);
		})

	};
	
	var callbackDeletePrintTraceRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete PrintTraceRegions';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$PrintTraceRegionsModels.DeletePrintTraceRegions(jsonData.id, callbackPrintTraceRegionsDeleteConfirm);
		})

	};

	var callbackDisplayPrintTraceRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'PrintTraceRegions';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		//*Put input type logic here*//

		$('input[type=text]').each(function () {
			$(this).attr('readonly');
		});

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListPrintTraceRegions/');
		})

	};

	var callbackDisplayGetPrintTraceRegions = function (data) {

		var template = $App.LoadTemplate('templates/printTraceRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create PrintTraceRegions';
		jsonData.buttonText = 'Create PrintTraceRegions';

		$('#container').html(template(data.printTraceRegions));

		$('#printTraceRegionsListTable').DataTable();

	};

	var getprintTraceRegions = function () {};

	$PrintTraceRegions.List = function () {
		var data = {};
		$PrintTraceRegionsModels.GetPrintTraceRegions(data, callbackDisplayGetPrintTraceRegions);
	};

	$PrintTraceRegions.Edit = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDisplayEditPrintTraceRegions);
	};
	
	$PrintTraceRegions.Delete = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDeletePrintTraceRegions);
	};

	$PrintTraceRegions.Display = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDisplayPrintTraceRegions);
	};

	$PrintTraceRegions.Create = function () {

		var template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Print Trace Regions';
		jsonData.buttonText = 'Create Regions';
		jsonData.create = "true";

		$('#container').html(template(jsonData));

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$PrintTraceRegionsModels.CreatePrintTraceRegions(obj, callbackCreatePrintTraceRegions);
		})
	};

	window.$PrintTraceRegions = $PrintTraceRegions;
	return (this);
}
	());
