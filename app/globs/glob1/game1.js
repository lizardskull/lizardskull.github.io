"use strict";

var World = function ( $glob )  { 
  
   var self = require( "../node_modules/globROCK/World" )( $glob );

  self.awake = function( glob ){
  	trace("awake? again");
    
     
  	
  	//art.opening = glob.rockFile( 'opening', 'white');
    
    var glob1 = glob.createRock( 'target/index.js', 0, 0 );
    
    //glob2.scaleX = -1;



    //toon = world.opening2         = glob.addRock( art.opening,       1700, 300 );
  }
  
  return self; 
};

exports = module.exports = World;