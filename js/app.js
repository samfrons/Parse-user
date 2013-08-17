$(document).ready(function(){
  Parse.initialize("fYOLoSeCKgYHCfvHZ4BKq2xFG4W8eZFgkCMeDb1p", "WylWNwkFQhxFTjmmaOWqhu2v5ABNCHA545TbS0r2"); // samfrons@gmail.com Hasbro app
// Parse.initialize("r3odn9sQibfbr1DItzNQ5L6Rchum1nzEZdPtqLap", "Rvr8te1R8UUYlH82sy4n0loSxmG7dyYvhbAhGraw");
// Parse.initialize("GTRtkAfkV09eEC2Olkdxdr4QJcb378XPkxCRCZkP", "K5hYtNZpa1dQIhArbW8iOGosnUkEDt7AQ4vUzkYa"); // Matt's HasbroTest app

  // Test for logged in user
  var currentUser = Parse.User.current();
  var currentPath = window.location.pathname;
  var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (currentUser && currentPath === "index.html") {
    // user already logged in, redirect to welcome page
    window.location = "welcome.html";
  } else if (!currentUser && currentPage !== "index.html") {
    // user needs to first login
    //window.location = "index.html";
  }

  $('#btnlogin').button('reset'); // reset login button

  $('#login-form').submit(function(e) {
    if (e) {
      e.preventDefault();
    }

    $('#btnlogin').button('loading');
    $('#errormsg_incorrect_username_password').removeClass('show').addClass('hide'); // hide error

    var username = $('#email').val();
    var password = $('#password').val();

    if (!username && !password) { // must supply username & password
      $('#btnlogin').button('reset');
      $('#errormsg_incorrect_username_password').removeClass('hide').addClass('show'); // show error
    } else {
      Parse.User.logIn(username, password, {
        success: function(user) {
          console.log('Login success', username, password, user)
          // redirect to our welcome page
          $('#btnlogin').button('reset');
          $('#errormsg_incorrect_username_password').removeClass('show').addClass('hide'); // hide error
          window.location = "welcome.html";
        },
        error: function(user, error) {
          console.log('Login error', username, password, user, error)
          // The login failed. Check error to see why.
          $('#btnlogin').button('reset');
          $('#errormsg_incorrect_username_password').removeClass('hide').addClass('show'); // show error
        }
      });
      return false;
    }
  });


  // logout button click
  $('[name="btnlogout"]').bind('click', function(e){
    if (e) {
      e.stopPropagation();
    }
    Parse.User.logOut();
    window.location = "index.html";
  });
});