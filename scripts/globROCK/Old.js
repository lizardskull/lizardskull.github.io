"use strict";

//"Let that which does not matter truly slide."
//no rule lasts forever

var Glob = function () { 
	
	var chance = new Chance();

	var core 			= require( './glob/GlobCore' )();
	//var event 			= require( './glob/GlobEvent' )( core );
	//var control			= require( './glob/GlobControl' )( core, event );
	//var content			= require( './glob/GlobContent' )( core, control );
	
	//var self 		= Object.create( module, {
	//core: 				{ value:core 	},
	//control: 			{ value:control },
	//content: 			{ value:content },
	//event:      		{ value:event   },
	//chance:             { value:chance  } 	
	//});


	//self.core.glob = self;

  	self.createRock				= function( src, x, y, parent, visible ){
  		
  		//var location = "../../" + GLOB.srcFolder + "/" + src
  		//var rock = require( location )();
  		
  		//var data = {};
    	//data.src = rock;
    	//data.location = src;

    	//if ( x != null ) 				data.x = x;
    	//if ( y != null ) 				data.y = y;
    	//if ( parent != null )			data.parent  = parent;
    	//if ( visible != null )			data.visible = visible;

    	//return self.control.rock.createRock( data );		
  		
  	}

	self.createWorld = function( dir ,src ){

		//GLOB.srcFolder = dir;

		//var world = require( "../../" + dir + "/" + src )( self.core.glob );
		//self.control.worldFromBeyond( world );
	},


	//Object.defineProperty( self, "debug", 			{ configurable:true, get:function(){ 			return self.core.debug; 	}} );
	//Object.defineProperty( self, "debug", 			{ configurable:true, set:function( input ){  	self.core.debug = input  	}} );
	//Object.defineProperty( self, "now", 			{ configurable:true, get:function(){ return self.core.now; }} );
	//Object.defineProperty( self, "soulLayer", 		{ configurable:true, get:function(){ return self.content.soulLayer; 	}} );
	//Object.defineProperty( self, "landscapeLayer", 	{ configurable:true, get:function(){ return self.content.environment; 	}} );
	//Object.defineProperty( self, "uiLayer", 		{ configurable:true, get:function(){ return self.content.uiLayer; 		}} );
	//Object.defineProperty( self, "physicsLayer", 	{ configurable:true, get:function(){ return self.content.physicsLayer; 		}} );
	//Object.defineProperty( self, "round", 			{ configurable:true, get:function(){ return self.control.time.round; }} );
	//Object.defineProperty( self, "height", 			{ configurable:true, get:function(){ return self.core.height; }} );
	//Object.defineProperty( self, "height", 			{ configurable:true, set:function( input ){  
	//														self.core.height = input;
	//														self.content.resize();  
	//												}});
	
	//Object.defineProperty( self, "width", 			{ configurable:true, get:function(){ return self.core.width; }} );
	//Object.defineProperty( self, "width", 			{ configurable:true, set:function( input ){  
	//														self.core.width =  input;
	//														self.content.resize();  
	//												}} );

	//Object.defineProperty( self, "x", 				{ configurable:true, get:function(){ return self.core.x; }} );
	//Object.defineProperty( self, "x", 				{ configurable:true, set:function( input ){ 
	//														self.core.x =  input; 
	//														self.content.render(); 
	//												}} );

	//Object.defineProperty( self, "y", 				{ configurable:true, get:function(){ return self.core.y; }} );
	//Object.defineProperty( self, "y", 				{ configurable:true, set:function( input ){  
	//														self.core.y =  input;
	//														self.content.render(); 
	//												}} );

	
	//PUBLIC API
	//Object.defineProperty( self, "fileList", 		{ set:function( input ){ self.control.requestFileList( input.root, input.dir, input.soulLocation ) }} );

	
	//Object.defineProperty( self, "zoom", 			{  configurable:true, set:function( input ){  
	//												 	self.core.cameraZoom = input;

	//													self.content.soulLayer.scale.y = input;
	//													self.content.soulLayer.scale.x = input;
	//												}});

	//Object.defineProperty( self, "scale", 			{ configurable:true, get:function(){  return self.content.soulLayer.scale.x; }});
	
	//Object.defineProperty( self, "name", 			{ get:function(){ return self.core.name; }} );
	//Object.defineProperty( self, "glob", 			{ get:function(){ return self.core.glob; }} );
	
	//Object.defineProperty( self, "server", 			{ configurable:true,  get:function(){ return self.core.server; }} );
	//Object.defineProperty( self, "UUID", 			{ get:function(){ return self.control.createUID() ; }} );

	//Object.defineProperty( self, "stage", 			{  configurable:true, set:function( input ){return self.control.createStage( input ) }} );
	//Object.defineProperty( self, "stage", 			{  configurable:true, get:function(){ return self.core.stage; }} );

	//Object.defineProperty( self, "server", 			{ configurable:true, set:function( input ){return self.control.updateServer( input ) }} );
	//Object.defineProperty( self, "loader", 			{ configurable:true, set:function( input ){return self.control.updateLoader( input ) }} );

	
	//self.addBound				= function( x, y, w, h ){ self.content.addBoundary( x, y, w, h )		} 

	//self.removeRockPhysics 		= function( rock )		{ self.control.removeRockPhysics( rock );	}
	
	//self.addEventListener 		= function( id, vars )	{ self.event.addEventListener( id, vars )	;	}
	//self.removeEventListener 	= function( id, vars )	{ self.event.removeEventListener( id, vars );	}
	//self.dispatchEvent 			= function( id, vars )	{ self.event.dispatchEvent( id, vars  )		;	}

	//self.removeRock				= function( rock  )   	{ self.control.removeRock( rock );  		}
	
	//self.awake = function(){
	//	self.control.awake();
	//	self.content.awake();	
	//}

	//self.updateCamera = function( zoom, x, y ){}

	//new Fuction
	//self.rockAwakening = function( rock ){
	// 	var content;
	// 	var dir = "globROCK/rock/content/";
	// 	if ( rock.contentType != null ){
	// 		var file = 	dir + rock.contentType;
	// 		content = require( file )( rock.core, rock.control );
	//		if ( content != null ) rock.content = content; 
	// 	} 
	// 	rock.awake();
	//}


	//self.rockAwake = function( rock ){
	// 	var content;
	// 	var dir = "globROCK/rock/content/";
	// 	if ( rock.soul.content != null ){
	// 		var file = 	dir + rock.soul.content;
	//		content = require( file )( rock.core, rock.control );
	//		if ( content != null ) rock.content = content; 
	// 	} 
	// 	rock.awake();
	// 	if ( self.core.world.rockAwake != null ) self.core.world.rockAwake( rock );
	//	self.event.dispatch( self.event.AVATAR_AWAKE, [ rock ]);
	//}

	//self.run = function(){
	//	self.content.run();
	//}

	//self.fate = function( value, difficulty ){

	//	var diff;
	//	var val;
	//	var drama = false;

	//	if (  isNaN( value ) == true ) 	val = 1;
	//	if (  isNaN( value ) == false ) val = value;

	//	if (  isNaN( difficulty ) == true ) 	diff = 8;
	//	if (  isNaN( difficulty ) == false ) 	diff = difficulty;

	//	if ( val == 0 ){
	//		drama = true;
	//		val = 1;
	//	}

	//	var roll = val + "d10";
	//	var list = chance.rpg( roll );

	//	var max = list.length;

	//	var success = 0;

	//	for ( var i = 0; i < max; i++ ){

	//		var attempt = list[ i ];
	//		if ( attempt == 10 ){
	//			success += 1;
	//			list[ i ] = chance.rpg( "1d10" );
	//			i -= 1;
	//			continue;
	//		}

	//		if ( attempt >= diff ) success += 1;
	//		if ( ( drama == true ) && ( attempt == 1 ) ) success = -1;
	//	}

	//	return success;

	//}

	return self; 
};

exports = module.exports = Glob;
