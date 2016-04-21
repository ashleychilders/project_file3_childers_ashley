$( document ).ready( function() {

//Code below sets h1 to change colors on mouseover and mouse out

  $( 'h1' ).mouseover( function() {
    $( 'h1' ).css( 'color', 'rebeccapurple' );
  } );
  $( 'h1' ).mouseout( function() {
    $( 'h1' ).css( 'color', 'darkorange' );
  } );

} );

//Code below is adding text to the index page below the h1 tag.

  $( 'h1' ).after( '<p>Voted Best Place in Florida for birthday parties five years in a row!</p>' );

  $( function() {

// Custom Easing for scrolling throuhg site
    jQuery.scrollSpeed( 150, 1000, 'easeOutCubic' );

// This is used to place the alert at the top of the form about customized options
    $( '.minialert' ).miniAlert();
    $( 'minialert' ).miniAlert( {
        text: 'hide'
    } );
  } );
