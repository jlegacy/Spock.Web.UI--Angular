(function () {

    var $Login = function () { };

    var getToken = function (data) {
        var template;
        template = $App.LoadTemplate('templates/_template_entry2.js');

        $.ajax({
            url: $App.WebServiceRoot + "/oauth/token",
            data: data,
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            success: function (result) {
                $.cookie('sessionSecurity', result.access_token, { expires: 1 });
                routie('Main/');
            },
            error: function (result) {
                $.cookie('sessionSecurity', null);
                $.removeCookie('sessionSecurity', { path: '/' });
                routie('Main/');
            }
        });
    };

    $Login.Init = function() {
            var template;
            template = $App.LoadTemplate('templates/login_ejs.js');

            $('#container').html(template());
            
            $('#submitSecurity').on('click', function (e) {
                e.preventDefault();
                var obj = $('#securityForm').serializeToJSON();
                getToken(obj);
            });
        },
        $Login.UpdateView = function(data) {
            test(data);
        },

        window.$Login = $Login;
    return (this);
}());
