$(document).ready( function(){
  $('.lil-bounce .isi').click( function() {
    var toggleHeight = $(".lil-bounce .isi").height() == 500 ? "70px" : "500px";
    $('.lil-bounce .isi').animate({ height: toggleHeight });
  });
});

$(function(){
  $(".lil-bounce").click(function(){
    $(".lil-bounce .plus").toggleClass("spinEffect");
  });
});