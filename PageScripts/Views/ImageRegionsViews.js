(function () {

	var $ImageRegions = function () {};

	$ImageRegions.variables = {};

	var callbackImageRegionsDeleteConfirm = function (data) {
		$App.DAlert('ImageRegions Deleted', 'Edit ImageRegions', 'success'); 
		routie('ListImageRegions/');
	};

	var callbackImageRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ImageRegions Updated', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};
	
	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ImageRegions Deleted', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};



	var callbackCreateImageRegions = function () {
		$App.DAlert('ImageRegions Created', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};

	var callbackDisplayEditImageRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit ImageRegions';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.UpdateImageRegions(jsonData.id, obj, callbackImageRegionsUpdateConfirm);
		})

	};
	
	var callbackDeleteImageRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete ImageRegions';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.DeleteImageRegions(jsonData.id, callbackImageRegionsDeleteConfirm);
		})

	};

	var callbackDisplayImageRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'ImageRegions';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		//*Put input type logic here*//

		$('input[type=text]').each(function () {
			$(this).attr('readonly');
		});

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListImageRegions/');
		})

	};

	var callbackDisplayGetImageRegions = function (data) {

		var template = $App.LoadTemplate('templates/imageRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create ImageRegions';
		jsonData.buttonText = 'Create ImageRegions';

		$('#container').html(template(data.imageRegions));

		$('#imageRegionsListTable').DataTable();

	};

	var getimageRegions = function () {};

	$ImageRegions.List = function () {
		var data = {};
		$ImageRegionsModels.GetImageRegions(data, callbackDisplayGetImageRegions);
	};

	$ImageRegions.Edit = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDisplayEditImageRegions);
	};
	
	$ImageRegions.Delete = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDeleteImageRegions);
	};

	$ImageRegions.Display = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDisplayImageRegions);
	};

	$ImageRegions.Create = function () {

		var template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Image Regions';
		jsonData.buttonText = 'Create Regions';
		jsonData.create = "true";

		$('#container').html(template(jsonData));

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.CreateImageRegions(obj, callbackCreateImageRegions);
		})
	};

	window.$ImageRegions = $ImageRegions;
	return (this);
}
	());
