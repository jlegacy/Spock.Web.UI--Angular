(function () {

	var $Application = function () {};

	$Application.variables = {};

	var callbackDeleteApplicationConfirm = function (data) {
		$App.DAlert('Application Deleted', 'Edit Application', 'success');
		routie('ListApplications/');
	};

	var callbackApplicationUpdateConfirm = function (data, status) {
		$App.DAlert('Application Updated', 'Edit Application', 'success');
		routie('ListApplications/');
	};

	var callbackDeleteApplication = function (data) {
		var template;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Application';
		jsonData.buttonText = 'Delete';

		$.extend(jsonData, data);
		console.log(jsonData);

		$('#container').html(template(jsonData));

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#applicationForm').serializeToJSON();
			$ApplicationModels.DeleteApplication(jsonData.id, callbackDeleteApplicationConfirm);
		})
	};

	var callbackCreateApplication = function () {
		$App.DAlert('Application Created', 'Edit Application', 'success');
		routie('ListApplication/');
	};

	var callbackDisplayEditApplication = function (data) {

		var template;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Application';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ApplicationForm').serializeToJSON();
			$ApplicationModels.UpdateApplication(jsonData.id, obj, callbackApplicationUpdateConfirm);
		})

	};

	var callbackDisplayApplication = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Application';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		//*Put input type logic here*//

		$('input[type=text]').each(function () {
			$(this).attr('readonly');
		});

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListApplications/');
		})

	};

	var callbackDisplayGetApplications = function (data) {

		var template = $App.LoadTemplate('templates/application_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Application';
		jsonData.buttonText = 'Create Application';

		$('#container').html(template(data.printApplications));

		$('#applicationsListTable').DataTable();

	};

	var getapplications = function () {};

	$Application.List = function () {
		var data = {};
		$ApplicationModels.GetApplications(data, callbackDisplayGetApplications);
	};

	$Application.Edit = function (id) {
		$ApplicationModels.GetApplication(id, callbackDisplayEditApplication);
	};

	$Application.Display = function (id) {
		$ApplicationModels.GetApplication(id, callbackDisplayApplication);
	};

	window.$Application = $Application;
	return (this);
}
	());
