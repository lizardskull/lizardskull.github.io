"use strict";

var Opening = function ( $glob )  { 
  
  var self       = Object.create( module, {});

  self.name = "Black",
  self.contentType = 'Chariot';
  self.toonList = [

					{ id:'toon' },
					{ id:'toon2' },
					{ id:'toon3', frames:[ 5,5,5,5,5,5,5,5,5] }

           			];
  return self; 
};

exports = module.exports = Opening;