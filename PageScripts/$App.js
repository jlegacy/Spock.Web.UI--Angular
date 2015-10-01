(function () {
	var $App = function () {};

	var parseErrorMessage = function (errors) {
		var errObj = {};
		var jQueryDomElementMessage = "";

		errObj = JSON.parse(errors);

		_.each(errObj, function (value, key) {
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

		errObj = JSON.parse(errors);

		_.each(errObj, function (value, key) {
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
				console.log(data);
			}
		});

		return template;
	},

	$App.CheckMessageStatus = function (result, title, type) {
		//reset fields//
		var messages = "";
		$('.error').removeClass("error");
		$('#errorPanel').empty();

		switch (result.status) {
		case 400:
			if (parseErrorMessage(result.responseText) === 'License Expired' || parseErrorMessage(result.responseText) === 'Invalid License') {
				$App.DAlert(parseErrorMessage(result.responseText), title, type);
				routie('Error400/');
			} else {
				$App.DAlert('Fix Errors in Fields', title, type);
				SetFieldErrors(result.responseText);
			}
			break;
		case 500:
			$App.DAlert('Unexpected Server Error - Status 500', title, type);
			break;
		case 401:
			$App.ClearSession();
			routie('Error401/');
			break;
		case 402:
			$App.ClearSession();
			routie('Error402/');
			break;
		case 404:
			$App.ClearSession();
			routie('Error404/');
			break;
		case 200:
			$App.DAlert(result.responseText, title, type);
			break;
		case 0:
			$App.DAlert('Unexpected Server Error - Status 0', title, type);
			break;
		default:
			$App.DAlert(parseErrorMessage(result.responseText), title, type);
			routie('Main/');
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
