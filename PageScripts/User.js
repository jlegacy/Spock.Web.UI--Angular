(function () {

    var $User = function () { };
	
	var getUsers = function() {
		
		  $.ajax({
            url: $App.WebServiceRoot + "/api/Users",
            type: "GET",
			headers: {'authorization': 'bearer ' + $App.GetSecurity()},
			contentType: "application/json",
			cache: false,
            success: function (result, status, request) {
				console.log(result);
				console.log(request.getAllResponseHeaders());
				alert('success!!!');
              displayGetUsers(result);
            },
            error: function (result) {
                $.cookie('sessionSecurity', null);
                $.removeCookie('sessionSecurity', { path: '/' });
                routie('Main/'); 
            }
        });
	};


    $User.Create = function () {

            $App.CheckSecurity();

            var template;
            template = $App.LoadTemplate('templates/user_template.html');
            var navTemplate = $App.LoadTemplate('templates/navigation_template.html');  
            
            var jsonData = {};
		    jsonData.title = 'Create User';
            jsonData.buttonText = 'Create User';
                       
            $('#container').html(navTemplate());
            $('#container').append(template(jsonData));                  
    }
	
	$User.List = function () {
	//	var template;
	//	template = $App.LoadTemplate('templates/users_list_template.html');
		getUsers();
	},

	
	
    
    $User.Edit = function () {

            $App.CheckSecurity();

            var template;
            template = $App.LoadTemplate('templates/user_template.html');
            var navTemplate = $App.LoadTemplate('templates/navigation_template.html');  
            
            var jsonData = {};
		    jsonData.title = 'Edit User';
            jsonData.buttonText = 'Save';
                       
            $('#container').html(navTemplate());
            $('#container').append(template(jsonData));                  
    }
    
    $User.Details = function () {

            $App.CheckSecurity();

            var template;
            template = $App.LoadTemplate('templates/user_template.html');
            var navTemplate = $App.LoadTemplate('templates/navigation_template.html');  
            
            var jsonData = {};
		    jsonData.title = 'User Details';
            jsonData.buttonText = 'Edit';
                       
            $('#container').html(navTemplate());
            $('#container').append(template(jsonData));
            $('#firstName').attr('readonly', true);
            $('#firstName').addClass('input-disabled');   
            $('#lastName').attr('readonly', true);
            $('#lastName').addClass('input-disabled');     
            $('#emailAddress').attr('readonly', true);
            $('#emailAddress').addClass('input-disabled');                    
    }
    
    window.$User = $User;
    return (this);
}());
