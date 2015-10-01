(function () {

	var $SystemSettings = function () {};
	
	$SystemSettings.settings = {};

	var callbackAddLicenseSystemSettings = function () {
		$App.DAlert('License Added', 'Edit SystemSettings', 'success');
		routie('ListSystemSettings/');
	};
	
	var callbackUpdateLanguageSystemSettings = function () {
		$App.DAlert('Language/Units Updated', 'Edit SystemSettings', 'success');
		routie('ListSystemSettings/');
	};



	var callbackDisplayGetSystemSettings = function (data, status) {
		$SystemSettings.settings = {};
		var template = $App.LoadTemplate('templates/systemSettings_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create SystemSettings';
		jsonData.buttonText = 'Create SystemSettings';
		
		$SystemSettings.settings = data;
		
		$('#container').html(template(data));

		$('#systemSettingsListTable').DataTable();

	};


	$SystemSettings.AddLicense = function () {

		var template = $App.LoadTemplate('templates/systemSettings_AddLicense_template.html');

		var jsonData = {};
		jsonData.title = 'SystemSettings';
		jsonData.buttonText = 'Create License';
		jsonData.create = "true";

		$('#container').html(template(jsonData));

		$('#SystemSettingsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#SystemSettingsForm').serializeToJSON();
			$SystemSettingsModels.CreateSystemSettings(obj, callbackAddLicenseSystemSettings);
		})
	};
	
	$SystemSettings.UpdateLanguage = function () {

		var template = $App.LoadTemplate('templates/systemSettings_UpdateLanguage_template.html');
	
		var jsonData = {};
		jsonData.title = 'SystemSettings';
		jsonData.buttonText = 'Update Language/Units';
		jsonData.create = "true";
		jsonData.language = $SystemSettings.settings.language;
		jsonData.units = $SystemSettings.settings.units;

		$('#container').html(template(jsonData));

		$('#SystemSettingsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#SystemSettingsForm').serializeToJSON();
			$SystemSettingsModels.CreateSystemSettings(obj, callbackUpdateLanguageSystemSettings);
		})
	};

	$SystemSettings.List = function () {
		$SystemSettingsModels.GetSystemSettings(callbackDisplayGetSystemSettings);
	};

	
	window.$SystemSettings = $SystemSettings;
	return (this);
}
	());
