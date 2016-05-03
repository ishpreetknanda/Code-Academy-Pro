var main = function() {
  $('.day').click(function(){
    $(this).next().toggle(400); $('.weekday').find('span').toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);