(function () {

	var $Profile = function () {};

	$Profile.variables = {};

	var callbackDeleteProfileConfirm = function (data) {
		$App.DAlert('Profile Deleted', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};

	
	var callbackDeleteProfile = function (data) {
		var template;
		template = $App.LoadTemplate('templates/profile_template.html');
		
		var jsonData = {};
		jsonData.title = 'Delete Profile: ';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		
		jsonData.display = "true";

		$.extend(jsonData, data);
		console.log(jsonData);

		$('#container').html(template(jsonData));

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.DeleteProfile(jsonData.id, callbackDeleteProfileConfirm);
		})
	};

	var callbackUpdateProfile = function () {
		$App.DAlert('Profile Updated', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};

	var callbackCreateProfile = function () {
		$App.DAlert('Profile Created', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};

	var callbackDisplayEditProfile = function (data) {

		var template;
		template = $App.LoadTemplate('templates/profile_template.html');
		
		var jsonData = {};
		jsonData.title = 'Edit Profile: ';
		jsonData.buttonText = 'Save';

		$.extend(jsonData, data);
		console.log(jsonData);

		$('#container').html(template(jsonData));

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.UpdateProfile(jsonData.id, obj, callbackUpdateProfile);
		})

	};

	var callbackDisplayDetailsProfile = function (data) {

	    var template;
	    template = $App.LoadTemplate('templates/profile_template.html');

	    var jsonData = {};
	    jsonData.title = 'Profile Details: ';
	    jsonData.buttonText = 'Back';
	    jsonData.editAttribute = 'readonly';
		
		jsonData.display = "true";
        //jsonData.topNavBtnText 

	    $.extend(jsonData, data);
	    console.log(jsonData);

	    $('#container').html(template(jsonData));

	    $('#ProfileSubmit').on('click', function (e) {
	        e.preventDefault(e);
	        var obj = $('#ProfileForm').serializeToJSON();
	        $ProfileModels.UpdateProfile(jsonData.id, obj, callbackUpdateProfile);
	    })

	};

	var callbackDisplayGetProfiles = function (data) {

		var template = $App.LoadTemplate('templates/profile_list_template.html');
	
		var jsonData = {};
		jsonData.title = 'Create Profile';
		jsonData.buttonText = 'Create Profile';

		$('#container').html(template(data.profiles));

		$('#profilesListTable').DataTable();

	};

	var getProfiles = function () {};

	$Profile.Create = function () {

		var template = $App.LoadTemplate('templates/profile_template.html');
		
		var jsonData = {};
		jsonData.title = 'Create Profile';
		jsonData.buttonText = 'Create Profile';
	
		$('#container').html(template(jsonData));

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.CreateProfile(obj, callbackCreateProfile);
		})
	};

	$Profile.Delete = function (id) {
		$ProfileModels.GetProfile(id, callbackDeleteProfile);
	};

	$Profile.List = function () {
		$ProfileModels.GetProfiles(callbackDisplayGetProfiles);
	};

	$Profile.Details = function (id) {
	    $ProfileModels.GetProfile(id, callbackDisplayDetailsProfile);
	};

	$Profile.Edit = function (id) {
		$ProfileModels.GetProfile(id, callbackDisplayEditProfile);
	},

	$Profile.Logout = function (id) {
		$App.ClearSession();
			routie('Main/');
	}

	window.$Profile = $Profile;
	return (this);
}
	());
