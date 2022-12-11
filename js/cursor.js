// cursor is no a seaparate js file because for some reason the code interferes with the javascript game
$(document).mousemove(function (e) {
  $(".cursor-image").stop().animate({ left: e.pageX, top: e.pageY });
});
