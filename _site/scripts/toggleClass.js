$(document).ready( function(){
    $('.color .isi').click( function() {
        var toggleHeight = $(".color .isi").height() == 600 ? "70px" : "600px";
        $('.color .isi').animate({ height: toggleHeight });
    });
});


$(function(){
  $(".color").click(function(){
    /*//Animação com loop infinito (até clicar)
    $("#d2").toggleClass("rotating");*/
    $(".color .plus").toggleClass("spinEffect");
  });
});