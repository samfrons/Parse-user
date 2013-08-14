$(document).ready(function(){
  var popoverOptions = {
    placement: 'right',
    trigger: 'click hover',
    container: '.story-reader',
    html: true,
    content: function() {
      return $('#popover-content-wrapper').children('[data-popover-content-for='+$(this).attr('id')+']').html();
    }
  };


  $('.btn-popover').popover(popoverOptions);

});