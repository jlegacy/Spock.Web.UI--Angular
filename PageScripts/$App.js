(function () {
	var $App = function () {};
	
	$App.admin = false;
	
	$App.scotchApp = angular.module('scotchApp', ['ui.router']);

	var parseErrorMessage = function (errors) {
		var errObj = {};
		var jQueryDomElementMessage = ""; 

		_.each(errors, function (value, key) {
			jQueryDomElementMessage += value;
		});

		return jQueryDomElementMessage;
	}

	var SetFieldErrors = function (errors) {
		var errObj = {};
		var escapedFieldName;
		var javaScriptDomElement;
		var jQueryDomElementMessage;
		var lineLabel;
		var element;

		_.each(errors, function (value, key) {
			element = $(document.getElementsByName(key));
			element.addClass('error');
			lineLabel = element.attr('errorName');
			console.log(lineLabel);
			jQueryDomElementMessage = '<br><label class="errorText">' + lineLabel + ' - ' + value[0] + '</label>';
			$('#errorPanel').append(jQueryDomElementMessage)
		});
	};

	$App.State = {};

	$App.testMethod = function () {};

	$App.LoadTemplate = function (path) {
		var data;
		var template = {};
		$.ajax({
			url : path,
			async : false,
			dataType : "text",
			success : function (data) {
				template = Handlebars.compile(data);
			},
			error : function (data) {
				alert('error loading template');
			}
		});

		return template;
	},

	$App.CheckMessageStatus = function (result, title, type, location) {
		//reset fields//
		var messages = "";
		$('.error').removeClass("error");
		$('#errorPanel').empty();

		switch (result.status) {
		case 400:
			if (result.statusText === 'License Expired' || result.statusText === 'Invalid License') {
				$App.DAlert(result.statusText, title, type);
				routie('Error400/');
			} else {
				$App.DAlert('Fix Errors in Fields', title, type);
				SetFieldErrors(result.data);
			}
			break;
		case 500:
			$App.DAlert('Unexpected Server Error - Status 500', title, type);
			break;
		case 401:
			$App.ClearSession();
			location.path('/Error401/');
			break;
		case 402:
			$App.ClearSession();
			location.path('/Error402/');
			break;
		case 404:
			$App.ClearSession();
			location.path('/Error404/');
			break;
		case 200:
			$App.DAlert(result.statusText, title, type);
			break;
		case 0:
			$App.DAlert('Unexpected Server Error - Status 0', title, type);
			break;
		default:
			$App.DAlert(parseErrorMessage(result.statusText), title, type);
			location.path('/Main/');
		}
	},

	$App.DAlert = function (message, title, type) {

		if (type === "warning") {

			$.growl.notice({
				message : message
			});
		};

		if (type === "error") {

			$.growl.error({
				message : message
			});

		};

		if (type === "success") {

			$.growl.notice({
				message : message
			});

		};
	},

	$App.CheckSecurity = function (location) {
		var sessionSecurity = $.cookie('sessionSecurity');
		if (!sessionSecurity) {
			location.path("/Login");
		}

	},

	$App.ShowBusy = function () {
		$('#busy').show();
	},

	$App.HideBusy = function () {
		$('#busy').hide();
	},

	$App.GetSecurity = function () {
		return $.cookie('sessionSecurity');
	},

	$App.SetSession = function (token) {
		$.cookie('sessionSecurity', token, {
			expires : 1
		});
	},

	$App.ClearSession = function () {
		$.cookie('sessionSecurity', null);
		$.removeCookie('sessionSecurity', {
			path : '/'
		});

	},

	//	$App.WebServiceRoot = "http://localhost:56119";
	$App.WebServiceRoot = "http://10.30.0.127/spock";

	window.$App = $App
		return (this);
}
	());
