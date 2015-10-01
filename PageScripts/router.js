$(document).ready(function () {
	routie({
		'submitMe/?:data' : function (data) {
			$Index.UpdateView(JSON.parse(data));
		},
		'Main/?:id' : function (id) {
			$Main.Init(id);
		},
		'Main' : function (id) {
			$Main.Init();
		},
/*Users*/		
		'CreateUser' : function () {
			$User.Create();
		},
		'EditUser/:id' : function (id) {
			$User.Edit(id);
		},
		'DeleteUser/:id' : function (id) {
			$User.Delete(id);
		},
		'Logon' : function () {
			$User.Login();
		},
		'ListUsers' : function () {
			$User.List();
		},
		'UserChangePassword/:id' : function (id) {
			$User.UserChangePassword(id);
		},
		'ResetPassword/:id' : function (id) {
			$User.ResetPassword(id);
		},
		'Logout' : function () {
			$User.Logout();
		},
/*Applications*/
		'ListApplications' : function () {
			$Application.List();
		},
		'EditPrintApplication/:id' : function (id) {
			$Application.Edit(id);
		},
		'DisplayPrintApplication/:id' : function (id) {
			$Application.Display(id);
		},
/*Profile Views*/
		'CreateProfile' : function () {
			$Profile.Create();
		},
		'EditProfile/:id' : function (id) {
			$Profile.Edit(id);
		},
		'DetailsProfile/:id': function (id) {
		    $Profile.Details(id);
		},
		'DeleteProfile/:id' : function (id) {
			$Profile.Delete(id);
		},
		'ListProfiles' : function () {
			$Profile.List();
		},
/*Print Trace Views*/
		'CreatePrintTraceRegions' : function () {
			$PrintTraceRegions.Create();
		},
		'EditPrintTraceRegions/:id' : function (id) {
			$PrintTraceRegions.Edit(id);
		},
		'DisplayPrintTraceRegions/:id': function (id) {
		    $PrintTraceRegions.Display(id);
		},
		'DeletePrintTraceRegions/:id' : function (id) {
			$PrintTraceRegions.Delete(id);
		},
		'ListPrintTraceRegions' : function () {
			$PrintTraceRegions.List();
		},
/*Image Views*/
		'CreateImageRegions' : function () {
			$ImageRegions.Create();
		},
		'EditImageRegions/:id' : function (id) {
			$ImageRegions.Edit(id);
		},
		'DisplayImageRegions/:id': function (id) {
		    $ImageRegions.Display(id);
		},
		'DeleteImageRegions/:id' : function (id) {
			$ImageRegions.Delete(id);
		},
		'ListImageRegions' : function () {
			$ImageRegions.List();
		},
/*Custom Error Pages*/
		'Error400' : function () {
			$CustomErrors.Display(400);
		},
		'Error401' : function () {
			$CustomErrors.Display(401);
		},
		'Error402' : function () {
			$CustomErrors.Display(402);
		},
/*System Settings Pages*/
		'ListSystemSettings' : function () {
			$SystemSettings.List();
		},
		'AddLicenseSystemSettings' : function () {
			$SystemSettings.AddLicense();
		},
		'EditLanguageSystemSettings' : function () {
			$SystemSettings.UpdateLanguage();
		}
	});
});
