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

  $( 'h1' ).after( '<p>Voted the Best Place to host a birthday party five years in a row!</p>' );

  document.getElementById( 'sendform' ).addEventListener( 'click', function() {
  alert( 'Thank you for submitting this form. Someone will be in touch with you within 24 hours!' );
} );

  $( function() {

// Custom Easing for scrolling throuhg site

    jQuery.scrollSpeed( 100, 400, 'easeOutCubic' );
  } );

  var map = new GMaps( {
  el: '#map',
  lat: 28.3575294,
  lng: -81.5582714
} );

map.addMarker( {
  lat: 28.3575294,
  lng: -81.5582714,
  title: 'Pizza Planet',
  click: function( e ) {
    alert( 'Pizza Planet: Great Pizza, Great Times!' );
  }
} );
//define( [ 'async!http://maps.google.com/maps/api/js?v=3&sensor=false' ], function() {} ) ;

require.config( {
  paths: {
    'googlemapsapi': 'googlemapsapi'
  },
  shim: {
    gmaps: {
      deps: [ 'googlemapsapi' ],
      exports: 'GMaps'
    }
  }
} );
