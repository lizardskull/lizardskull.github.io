"use strict";

var Opening = function ( $glob )  { 
  
  var self       = Object.create( module, {});

  self.name = "Black",
  self.contentType = 'Chariot';
  self.toonList = [

					{ viz:1,  	id:'toon1',  src:"toon",  	 speed:1 },
					{ viz:1,  	id:'toon2',  src:"toon",  	 speed:1 },
					{ viz:1,  	id:'toon3',  src:"toon",  	 speed:1 }

           			];
  return self; 
};

exports = module.exports = Opening;