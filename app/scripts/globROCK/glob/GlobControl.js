"use strict";

var GlobControl = function ( $core, $event ) { 
	
	//var timeControl			= './control/TimeControl';
	
	//var rockControl	 		    = require( './control/RockControl'  )();
	//timeControl			 	= require( timeControl )( $core, $event );

	var self = Object.create( module, { 
	core:{ value:$core },
	//rock:{ value:rockControl },
	//time:{value:timeControl},
	//event:{value:$event  }
	});

	self.formFromBeyond = function( form ){
		if ( self.core.form != null ) self.resetForm();
		self.core.form = form;
	}

	self.resetForm	= function(){
		trace("reset the form");
	}

	self.preloadRock = function( rock ){
		trace("what does the rock look like " + rock.toonList );

		self.fetchSpriteFile( rock );

		// all we need is the images?
	}

	self.fetchSpriteFile = function ( rock ){

		trace("fetch sprite files " + rock );
		
		var fs 	= require('fs');
		trace(" do you have fs " + fs );

		var fileLocation = './rock0/toon';
		//var files = fs.readdirSync( fileLocation );

		//trace("files " + files );
	}

	self.preload = function(){ 	self.core.form.preload( self.core.glob ) 	}

  	self.create = function(){	self.core.form.create( self.core.world  ) 	}

  	self.update = function(){	self.core.form.update( self.core.world  ) 	}

  	self.render = function(){	self.core.form.render( self.core.world  ) 	}
    
    self.randColor = function() { return Math.floor(Math.random() * 256); };  



	///
	//EVERYTHING BELOW IS OLD NEWS






	self.removeRockPhysics = function( rock ){
		if ( rock.body 	!= null ) self.core.bodyRemoveList.push( 	rock 	);
		if ( rock.shape != null ) self.core.shapeRemoveList.push( 	rock 	);
	}

	self.awake = function (){
		
		self.core.startTime = Date.now();
		self.core.prevTime = self.core.startTime; 
  		
  		return self.core.glob;
	}

	self.execute = function (){
		self.time.execute();
		self.rock.execute();
	}

	//AVATAR METHODS
	//{src:'src/RockType.js', x:10, y:10 }
	self.addRock 		= function( data ){ 	return self.rock.rock( data ) 	};
	self.removeRock 	= function( rock ){ 	self.rock.removeRock( rock ) };
	//WORLD METHODS
	//Glob Manifests the World


	//FETCH ME A WORLD BABY
	//THank U

	self.popArt = function( list ){

		var max = list.length;

		for ( var i = 0; i < max; i++ ){
			
			var item = String( list[ i ] );

			if( item.indexOf('/') === -1 )
			{
  				
			} else {
				var files = item.split("/");
				self.core.glob.rockFile( files[0], files[1] );
			}
			

		}
	}

	self.worldFromBeyond = function( worldData ){
		var world = worldData;
		
		if (self.core.world != null) self.resetWorld(); // wait to reset world
		self.core.world = world;
		//self.popArt( worldData.toons );

		//world.awake(self.core.glob); // dont awake the monster yet
		//if ( world.bounds != null ) self.createBounds();
		//self.event.dispatch( self.event.WORLD_AWAKE, [ world ] );

		world.awake( self.core.glob );
	}

	self.resetWorld = function () {

	    var max = self.core.rockList.length;
	    for (var i = 0; i < max; i++) {
	        var rock = self.core.rockList[i];
	        self.rock.removeRock( rock );
	    }
	}

	self.createBounds = function(){
		var world 	= 	self.core.world;
		var bounds  =  	world.bounds;
    	var max     =  	bounds.length;

    	if ( world.startX == null ) world.startX = 0;

    	for (var i = 0; i < max; i++) {
      	var data = bounds[ i ];
      	self.core.glob.addBound( world.startX + data.x, data.y, world.startX + data.w, data.h );  
    	}

	}

	self.trace = function( message ){  console.log( "Server Says!: " + message ); }


	self.fetchFile = function( dir ){
		var fs = require("fs");	
		var fileName = dir;
 
		fs.exists(fileName, function(exists) {
  		if (exists) {
    	fs.stat(fileName, function(error, stats) {
      	fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
 
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
        var data = buffer.toString("utf8", 0, buffer.length);
          self.worldFromBeyond( data );
          fs.close(fd);
        });
      	});
    	});
  		}
		});

	}

	//going to need to change more of this
	//ss.event.on('addWorld',     self.worldFromBeyond );
	//ss.event.on('trace',        self.trace);

	return self; 
};

exports = module.exports = GlobControl;