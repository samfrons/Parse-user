$(document).ready(function(){

  var popoverOptions = {
    placement: 'right',
    trigger: 'click',
    container: '#teamCarousel',
    html: true,
    content: function() {
      return $('#popover-content-wrapper').children('[data-popover-content-for='+$(this).attr('id')+']').html();
    }
  };

  $(document).on('click', function (e) {
    var $target = $(e.target);
    var closestPopoverBtn = $target.closest('.btn-popover');
    var isPopoverBtn = closestPopoverBtn.length > 0;
    var inPopover = $target.closest('.popover').length > 0;

    if (isPopoverBtn) { // clicked on a popover button
      // hide all other popovers
      $('.btn-popover').not(closestPopoverBtn).popover('hide');
    } else if (!inPopover) { // clicked outside popover or any popover buttons
      // hide ALL popovers
      $('.btn-popover').popover('hide');
    }
  });

  // This hides the popovers if mouse enters the youtube iframe
  // Doing this because there is no way to capture a click inside the iframe
  $('.team-video').on('mouseenter', function(e) {
    $('.btn-popover').popover('hide');
  });

  $('.btn-popover').popover(popoverOptions);

});