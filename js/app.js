$(document).ready(function(){
	// Parse.initialize("fYOLoSeCKgYHCfvHZ4BKq2xFG4W8eZFgkCMeDb1p", "WylWNwkFQhxFTjmmaOWqhu2v5ABNCHA545TbS0r2");
	Parse.initialize("r3odn9sQibfbr1DItzNQ5L6Rchum1nzEZdPtqLap", "Rvr8te1R8UUYlH82sy4n0loSxmG7dyYvhbAhGraw");
	var currentUser = Parse.User.current();
	if (currentUser) {
	    // OK
	    var url = window.location.pathname;    
    	var currentName = url.substring(url.lastIndexOf('/') + 1);
	    if(currentName == "index.html") {
	    	window.location = "welcome.html";
	    	return;
	    }
	} else {
		var url = window.location.pathname;    
    	var currentName = url.substring(url.lastIndexOf('/') + 1);
		if(currentName != "index.html") {
			window.location = "index.html";	
			return;
		}
	}
	/*var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}, {
	  success: function(object) {
	    
	}*/
	
	$('#btnlogin').bind('click', function(e){
		if(e) e.stopPropagation();
		
		$(this).button('loading');
		$('#errormsg_incorrect_username_password').removeClass('show');
		$('#errormsg_incorrect_username_password').addClass('hide');

		var username = encodeURIComponent($('#email').val());
		var password = encodeURIComponent($('#password').val());
		
		if(!username && !password){
			$('#errormsg_incorrect_username_password').removeClass('hide');
			$('#errormsg_incorrect_username_password').addClass('show');
			return;
		}

		Parse.User.logIn(username, password, {
		  success: function(user) {
		    // redirect to our welcome page
		    $('#btnlogin').button('reset');
		    window.location = "welcome.html";
		  },
		  error: function(user, error) {
		    // The login failed. Check error to see why.
		    $('#errormsg_incorrect_username_password').removeClass('hide');
			$('#errormsg_incorrect_username_password').addClass('show');
			$('#btnlogin').button('reset');
		  }
		});
	});

	$('[name="btnlogout"]').bind('click', function(e){
		if(e) e.stopPropagation();
		Parse.User.logOut();
		window.location = "index.html";
	});

	var mq = window.matchMedia("(max-width: 400px)");

	if (mq.matches) {
		$('#normalrobot').removeClass('show');
		$('#normalrobot').addClass('hide');

		$('#smallrobot').removeClass('hide');
		$('#smallrobot').addClass('show');
	}
	else {
		$('#smallrobot').removeClass('show');
		$('#smallrobot').addClass('hide');

		$('#normalrobot').removeClass('hide');
		$('#normalrobot').addClass('show');
	}
});