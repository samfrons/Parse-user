$(document).ready(function(){

  var defaultVimeoId = 0;

  var setVimeoSrc = function(id) {
    var newSrc='http://player.vimeo.com/video/' + id + '?api=1&player_id=player';
    $('#player').attr('src', newSrc);
  };


  $('#videoModal').on('hide.bs.modal', function () {
    console.log('on #videoModal hide');
    setVimeoSrc(defaultVimeoId); // reset vimeo
    console.log('reset vimeoId to default');
  });

  $('.btn-modal').click(function() {
    var vimeoId = $(this).attr('data-vimeo-id');
    setVimeoSrc(vimeoId);
    console.log('changed vimeoId to '+vimeoId);
  });
});