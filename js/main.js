$( document ).ready( function() {

  $( function() {
    $( 'ul#photos li img' ).bubbleup();
} );

  $( function() {

    // Custom Easing
    jQuery.scrollSpeed( 100, 250, 'easeOutCubic' );

  } );

} );
