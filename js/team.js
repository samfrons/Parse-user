$(document).ready(function(){

//  $('.carousel').carousel({
//    interval: false
//  });


  var popoverOptions = {
    placement: 'right',
    trigger: 'click hover',
    container: '#teamCarousel',
    html: true,
    content: function() {
      return $('#popover-content-wrapper').children('[data-popover-content-for='+$(this).attr('id')+']').html();
    }
  };

  $('.btn-popover').popover(popoverOptions);

});