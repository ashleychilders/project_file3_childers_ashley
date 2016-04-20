$( document ).ready( function() {

  $( function() {

    // Custom Easing
    jQuery.scrollSpeed( 100, 250, 'easeOutCubic' );
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
define( [ 'async!http://maps.google.com/maps/api/js?v=3&sensor=false' ], function() {} ) ;

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
} );
