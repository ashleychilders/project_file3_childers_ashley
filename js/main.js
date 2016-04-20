$( document ).ready( function() {

  $( function() {

    // Custom Easing
    jQuery.scrollSpeed( 100, 250, 'easeOutCubic' );
  } );

  var map = new GMaps( {
  el: '#map',
  lat: 36.6222889,
  lng: -119.3229801
} );

map.addMarker( {
  lat: 36.6222889,
  lng: -119.3229801,
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
