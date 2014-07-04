"use strict";

var Glob = function () {

	var core 			= require( './glob/GlobCore'  	)();
	var event 			= require( './glob/GlobEvent' 	)( core );
	var control			= require( './glob/GlobControl' )( core, event );
	var content			= require( './glob/GlobContent' )( core, control );


	var self 			= Object.create( module, {
	core: 				{ value:core },
	control: 			{ value:control },
	content: 			{ value:content },
	event:      		{ value:event },
	chance:             { value:null } 	
	});

	
	self.awake = function(){
		self.control.awake();
		self.content.awake();	
	}

	return self;
 }


exports = module.exports = Glob;