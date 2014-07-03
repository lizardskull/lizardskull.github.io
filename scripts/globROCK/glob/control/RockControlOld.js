"use strict";

var RockControl = function ( $core ) { 
	
	//var spriteControl 		= './SpriteControl';
	//spriteControl	 		= require( spriteControl )( $core );
	
	//var self = Object.create( module, { 
	//core:{ value:$core },
	//sprite:{ value:spriteControl },
	

	});

	//{src:'src/RockType.js', x:10, y:10 }
	self.createRock = function( data ){

	//	var core 	= self.core;
	//	var rock 	= data.src;

	//	core.rocks[ rock.id ] = rock;
	//	rock.globIndex = core.rockList.length;
	//	core.rockList.push( rock );

	//	rock.event.addEventListener( "awake", self.rockAwakeEvent  );

	//	var split = data.location.split('/');
	//	var root = split[0] + '/' + split[1];
	//	var skin = "/";

	//	var max = split.length -1;

	//	for( var i = 2; i < max; i++ ){
	//		var link = split[i] +"/";
	//		skin += link;
	//	}

	//	rock.core.root = root;
	//	rock.core.skin = skin;

	//	self.sprite.fetchFiles( rock.id, GLOB.srcFolder, split[0] );
		
	//	rock.src = data.src; // here is the offending line of code

	//	if ( data.x != null ) 			rock.x 		= data.x;
	//	if ( data.y != null ) 			rock.y 		= data.y;
	//	if ( data.parent != null)		rock.parent = data.parent;

		
	//	rock.glob = self.core.glob;	
	//	self.core.glob.rockAwakening( rock );

	//	return rock;

	}

	//oh my god the rock doesnt have a soul
	//the magic moment whent the soul joins with the rock
	//very important
	self.createSoul = function ( rock, soul, flag ){
	//	rock.soul =  Object.create( soul );//Here is where you create a copy
	//	var rockID = soul.root + soul.skin;
	//	rock.core.soul = soul;
	//	self.core.glob.rockAwake( rock );
	//	return rock;
	}

	self.execute = function (){
	//	var core 	= self.core;
	//	var max 	= core.rockList.length;

	//	for ( var i = 0; i < max; i++ ){
	//	var rock = core.rockList[ i ];
	//	if ( rock == null ) continue;
	//	if ( rock.execute != null ) rock.execute( rock );
	//	}  
	}

	self.removeRock = function( rock ){
		//purge from the rockList

	//	if ( rock == null ) return;

	//	var core 	= self.core;
	//	var max 	= core.rockList.length;

	//	var index = 0;

	//	for ( var i = 0; i < max; i++ ){
	//	 var check = core.rockList[ i ];

	//	 if ( check == null ) 	continue;
	//	 if ( rock 	== null) 	continue;

	//	 if( check.id == rock.id) index = i;

	//	}

	//	core.rockList.splice( index, 1 );
	//	if ( rock != null ) rock.remove();
	}

	//{src:'src/RockType.js', x:10, y:10 }
	self.rock = function( data ){
	//	if ( data.src == null ) throw new Error( self.core.rockError );
	//	var core 	= self.core;

	//	return;

	//	var rock 	= require( "globROCK/Rock" )( core.glob );
	//	rock.event.addEventListener( "awake", self.rockAwakeEvent  );

		//lets split this baby up
	//	var split = data.src.split('/');
		
		//hard coding the first two:: not the biggest fan
	//	var root = split[0] + '/' + split[1];
	//	var skin = "/";

	//	var max = split.length -1;

	//	for( var i = 2; i < max; i++ ){
	//		var link = split[i] +"/";
	//		skin += link;
	//	}

	//	rock.core.root = root;
	//	rock.core.skin = skin;

	//	core.rocks[ rock.id ] = rock;
	//	rock.globIndex = core.rockList.length;
		
	//	core.rockList.push( rock );
		
	//	rock.src = data.src; // here is the offending line of code

	//	if ( data.x != null ) 			rock.x 		= data.x;
	//	if ( data.y != null ) 			rock.y 		= data.y;
	//	if ( data.parent != null)		rock.parent = data.parent;
		
	//	rock.glob = self.core.glob;	
	//	var soul = core.souls[ data.src ];
		
	//	if ( soul == null)//soul needs to be added
	//	{
	//		self.addToWaitingRoom( rock, data.src );
	//		if ( self.checkWaitingRoomSrcExists( rock, data.src ) == true ) return rock;

	//		trace("going for the soul " + data.src );
	//		self.fetchSoul( data.src, root, skin, rock.id );

			//FETCH ME A SOUL PWEEZE
			//ss.rpc('soul.fetchSoul',  ); 
	//		return rock;
	//	}

	//	self.createSoul( rock, soul );
	//	return rock;
	}

	self.fetchSoul = function( dir, root, skin, id ){

	//	var fs = require("fs");	
	//	var fileName = dir;
 
	//	fs.exists(fileName, function(exists) {
  	//	if (exists) {
    //	fs.stat(fileName, function(error, stats) {
    //  	fs.open(fileName, "r", function(error, fd) {
    //    var buffer = new Buffer(stats.size);
 
    //    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
    //    var data = buffer.toString("utf8", 0, buffer.length);


	//	 var data = { location:dir, soul:data, root:root, skin:skin, id:id };
	//	 trace(" data " + data );
	//	 self.soulFromBeyond( data );
 

    //    fs.close(fd);
    //    });
    //  	});
    // 	});
  	//	}
	//	});

	}



		 


	

	self.addToWaitingRoom = function( rock, src ){
	//	self.core.waitingRoom[ rock.id ] = rock;
	//	self.core.waitingRoomList.push( rock );
	}

	self.checkWaitingRoomSrcExists = function ( rock, src ){
	//	var max = self.core.waitingRoomList.length;
	//	var i;

	//	var check = false;

	//	for ( i = max; i >= 0; i-- )
	//	{
	//		var rockCheck = self.core.waitingRoomList[ i ];
	//		if (rockCheck == null ) continue;
	//		if ( rockCheck.id == rock.id ) continue;
	//		if ( rockCheck.src == src ) check = true
	//		if ( rockCheck.src == src ) break;
	//	}

	//	return check;
	}

	self.checkWaitingRoom = function ( location ){
		
	//	var soul = self.core.souls[ location ];
	//	var max = self.core.waitingRoomList.length;
	//	var remove = [];
	//	var i;

	//	for ( i = max; i >= 0; i-- )
	//	{
	//		var rock = self.core.waitingRoomList[ i ];
	//		if (rock == null ) continue;

	//		if ( rock.src == location ) {
	//			self.createSoul( rock, soul );
	//			self.core.waitingRoomList.splice( i, 1 );
	//		}
	//	}

	//	var b;
	//	var removeMax = remove.length;
	}

	self.soulFromBeyond = function ( soulData ){
	//	var soul 	=  	soulData.soul;
	//	var src 	= 	soulData.location;
		
	//	eval( soul ); //need this
		//soul.src = location;
	//	var souls = self.core.souls;

	//	soul.source = 	src;
	
	//	if ( souls[ src ] == null ) souls[ src ] = soul;

		//know we got to fetch some files--

	//	self.fetchFiles( soulData.id, soulData.root, soulData.skin, soul.source );
		//ss.rpc('toonList.fetchFiles', soulData.id, soulData.root, soulData.skin, soul.source );	
	}


	self.fetchFiles = function( avatarID, root, dir, location ){

	  //var fs 	= require('fs');

      //var avatarLocation = root  + dir;
   
      //var files = fs.readdirSync( avatarLocation );
      
      //var output = [];

      //var max = files.length;

      //for ( var i = 0; i < max; i++ )
      //{
      //  var url = files[ i ];

      //  var isJS;
      //  var jsCheck = url.split(".");
        
     //  if ( jsCheck.length > 1 ) continue;

     //   var subFileLocation = root + dir  + url;
     //   var frameList = fs.readdirSync( subFileLocation );
     //   var maxFrames = frameList.length;
     //   var frames = [];

     //   for ( var b = 0; b < maxFrames; b++ )
     //   {
     //     var frameURL = frameList[ b ];

     //     var pack = root + '/' + dir + "/" + url + "/" + frameURL; 
     //     frames.push( pack );
     //   }

     //   var item = {};
     //   item.id = url;
     //   item.frameList = frames;
     //   item[ dir ] = frames; 
     //   output.push( item );
     }

     
     //var data = { soulLocation:location, avatarLocation:avatarLocation, id:avatarID, fileList:output };
     //self.toonListFromBeyond( data );
     //   trace( "sending out data " + data );
     //ss.publish.socketId(req.socketId,'toonList', data ); 

	}

	self.toonListFromBeyond = function( data ){

   		//var rock 			= self.core.rocks[ data.id ];
   		//var rockLocation 	= data.rockLocation;
   		//var soul 			= self.core.souls[ data.soulLocation ];

   		//self.updateSoulFileList( soul, rock, data.fileList );
  }

   self.updateSoulFileList = function( soul, rock, fileList ){
   		//soul.fileList = fileList;
		//var superToonList = [];
    	//var max = fileList.length;

    	//fileList is an object which contains the URLS for the frame assets

    	//for ( var i= 0; i < max; i++ )
    	//{
      	//var file = fileList[i];
      	//var frameList = file.frameList; //not a fan of this mismash of file names
      	//superToonList =  frameList.concat( superToonList );
    	//}

   		//var loader = new PIXI.AssetLoader( superToonList );
   		//loader.location = soul.source;   		
   		//loader.src = rock.id; //to get access to the rock that requested
   		
		//var rockLoaders = self.core.rockLoaders;
		//var rockLoaderList = self.core.rockLoaderList;

   		//rockLoaders[ rock.id ] = loader;
		//rockLoaderList.push( rockLoaders[ rock.id ] );

   		//loader.onProgress = self.loadProgress( loader );
   		//loader.onComplete = self.assetLoaderComplete( loader );
   		//loader.load();
	}


	self.assetLoaderComplete = function ( loader ){
   	//var location = loader.location;
    //var id = loader.src;

    //var soul 	= self.core.souls[ location ];
    //var rock 	= self.core.rocks[ id ];

    //var max = soul.fileList.length;

    //for ( var i = 0; i < max; i++ ){
    //var list = soul.fileList[ i ];
    //self.createToonFileList( soul, list.id, list.frameList );
    //}
    
    //if ( self.core.waitingRoomList.length != 0 ) self.checkWaitingRoom( location );   	
   	}

	self.createToonFileList = function( soul, id, fileList ){
	//	var max = soul.toonList.length;
	//	var toon;

    //	for ( var i = 0; i < max; i++ ){
    //    toon = soul.toonList[ i ];
    //    if ( toon.src == null ) toon.src = toon.id;
    //	if ( toon.src != id  ) continue;

    //	toon.src = fileList;
    	//may need and error here
    //	if ( toon.frames != null ) self.replaceFramesWithURLs( toon.src, toon.frames );
    //  	}

  	}

  	self.replaceFramesWithURLs = function( src , frames ){

    //	var max = frames.length;
    //	for ( var i = 0; i < max; i++ )
    //	{
    //  		var frame = frames[i];
    //  		var frame = frames[i];
    //  		var url = src[ frame ];
    //  		if( isNaN( frame ) ) url = "x";
    //  		frames[i] = url;
    //	}
	}

	//INIT VARS HERE
	//PULL IT OUT
	//ss.event.on('addSoul', self.soulFromBeyond );
	//ss.event.on('toonList', self.toonListFromBeyond );
  		
	return self; 
};

exports = module.exports = RockControl;