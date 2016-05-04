
var main = function() {
  $('.dropdown img').click(function() {
    $('.dropdown-menu').toggle(300);
  });
  
    $('form').submit(function() {
    
      var emailVal = $('#email').val();
    	var passVal = $('#password').val();
    
      	if( emailVal === ""){
    		 $('.email-error').text("Please enter your email.");
        }
      else
       	$('.email-error').text("");
      
      	if( passVal === ""){
    		 $('.password-error').text("Please enter your password.");
        }
      else
       	$('.password-error').text("");
     
      	
     return false;
});
};

$(document).ready(main);

