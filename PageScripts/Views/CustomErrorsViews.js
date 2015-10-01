(function () {

	var $CustomErrors = function () {};

	$CustomErrors.Display = function (error) {
		console.log(error);
		var template;
		switch (error) {
		case 400:
			template = $App.LoadTemplate('templates/error400_template.html');
			break;
		case 401:
			template = $App.LoadTemplate('templates/error401_template.html');
			break;
		case 402:
			template = $App.LoadTemplate('templates/error402_template.html');
			break;
		}

		$('#container').html(template());

	},

	window.$CustomErrors = $CustomErrors;
	return (this);
}
	());
