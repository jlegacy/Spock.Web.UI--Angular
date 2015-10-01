(function () {

	var $Main = function () {};

	$Main.Init = function (id) {
		var template;
		var pdata = {};
		pdata.id = id;

		$App.CheckSecurity();

		template = $App.LoadTemplate('templates/main_template.html');
		var navTemplate = $App.LoadTemplate('templates/navigation_template.html');
		$('#navArea').html(navTemplate(pdata));
		$('#container').html(template());
	}

	window.$Main = $Main;
	return (this);
}
	());
