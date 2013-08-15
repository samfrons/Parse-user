$(document).ready(function(){

  var currentPopoverUrl = null;

  // initialize to hide popover
  $('.popover-holder').hide();


  // .btn-popover click handlers
  $('.btn-popover').click(function() {
    var popoverUrl = $(this).attr('data-popover-url');
    console.log('popoverUrl', popoverUrl)

    if (popoverUrl && currentPopoverUrl !== popoverUrl) { // load new popover content
      $('.popover-holder').load(popoverUrl, function() {
        console.log('loaded popover', popoverUrl);
        currentPopoverUrl = popoverUrl;
        $('.popover-holder').show();
      });
    } else { // hide current popover
      currentPopoverUrl = null;
      $('.popover-holder').hide();
    }
  });


  // handles closing of popover on page click
  $(document).on('click', function (e) {
    var $target = $(e.target);
    var closestPopoverBtn = $target.closest('.btn-popover');
    var isPopoverBtn = closestPopoverBtn.length > 0;
    var inPopover = $target.closest('.popover').length > 0;

    if (!isPopoverBtn && !inPopover) { // clicked outside popover or any popover buttons
      // hide popover
      currentPopoverUrl = null;
      $('.popover-holder').hide();
    }
  });

  // This hides the popovers if mouse enters the youtube iframe
  // Doing this because there is no way to capture a click inside the iframe
//  $('.team-video').on('mouseenter', function(e) {
//    currentPopoverUrl = null;
//    $('.popover-holder').hide();
//  });
});