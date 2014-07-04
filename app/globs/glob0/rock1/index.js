"use strict";

var Opening = function ( $glob )  { 
  
  var self = require( "../../node_modules/globROCK/Rock" )( $glob );
  self.name = "Black",
  self.contentType = 'Chariot';
  self.toonList = 	[   
					{ viz:1,  	id:'toon',  src:"toon",  	 speed:1 },
           			];
  return self; 
};

exports = module.exports = Opening;