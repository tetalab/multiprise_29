$(function() {

  var index = 0,
      items = [];

  var updateItems = function() {
    index = 0;
    $.getJSON( "/?json", function( data ) {
      items = [];
      $.each( data, function( key, val ) {
        items.push( "<img src='img/" + val + "' />" );
      });
    });
  }

  var changeCurrentItem = function() {
    $('#slide').html(items[index]);
    index += 1;
    if(index == items.length) {
      updateItems();
    }
  }

  updateItems();
  setInterval(changeCurrentItem, 2000);

});
