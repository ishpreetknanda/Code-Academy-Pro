
var main = function() {
  $('.cart').click(function() {
    $('.account .dropdown-menu').hide(); 
    $('.help .dropdown-menu').hide(); 
    $('.cart .dropdown-menu').show(); 
  }); 
  
  $('.account').click(function() {
    $('.cart .dropdown-menu').hide(); 
    $('.help .dropdown-menu').hide(); 
    $('.account .dropdown-menu').show(); 
  }); 
  
  $('.help').click(function() {
    $('.cart .dropdown-menu').hide(); 
    $('.account .dropdown-menu').hide(); 
    $('.help .dropdown-menu').show(); 
  }); 
}; 

$(document).ready(main);