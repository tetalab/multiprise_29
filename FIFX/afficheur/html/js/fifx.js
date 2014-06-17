$(function() {

  var refreshSlides = function() {
    $.getJSON( "/gifList.php", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<img src='" + val + "' />" );
      });
      $('#slides').html( items.join( "" );
      slider.start();
    });
  }

  var slider = $('#slides').slidesjs({
    width: 940,
    height: 528,
    auto: false,
    callback: {
      loaded: function(number) {
        refreshSlides();
      },
      complete: funciton(number) {
        refreshSlides();
      }
  });
});
