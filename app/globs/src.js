
// move this out to the index
window.trace = function (msg){

    if ( console == null ) return;
    console.log( "LOG: " + msg );
    
  };

global.trace = window.trace;


$(document).ready(function() {
  
  var glob    = require("../scripts/globROCK/Access")();
  var form    = require('./glob0/game0')();

  glob.createForm( form );
  //glob.awake();
 
  //GLOB.glob = glob;
  //global.art = GLOB.art = {};
  //GLOB.glob.height    = GLOB.height;
  //GLOB.glob.width     = GLOB.width;

  //glob.awake();

  //setTimeout( function(){ glob.createWorld( 'game', 'Strike' );}, 10 )
  
  });
