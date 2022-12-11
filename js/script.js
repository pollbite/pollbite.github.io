$(document).mousemove(function(e){
    $('.cursor-image').stop().animate({left:e.pageX, top:e.pageY});
});
