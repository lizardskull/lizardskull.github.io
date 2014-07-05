"use strict";

var Glob = function () {

	var core 			= require( './glob/GlobCore'  	)();
	var event 			= require( './glob/GlobEvent' 	)( core );
	var control			= require( './glob/GlobControl' )( core, event );
	var content			= require( './glob/GlobContent' )( core, control );

	var self 			= Object.create( module, {
	core: 				{ value:core 	},
	control: 			{ value:control },
	content: 			{ value:content },
	event:      		{ value:event 	},
	chance:             { value:null 	} 	
	});

	self.core.glob = self;

	self.createForm = function( form ){
		self.control.formFromBeyond( form );
		self.content.awake();
	}

	//How do you create a rock?
	self.preloadRock = function( rock ){
		self.control.preloadRock( rock );
	}

	
	self.awake = function(){
		self.control.awake();
		self.content.awake();	
	}

	return self;
 }


exports = module.exports = Glob;