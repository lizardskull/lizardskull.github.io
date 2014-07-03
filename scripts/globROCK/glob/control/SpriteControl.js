"use strict";

var SpriteControl = function ( $core ) { 
	
	var self = Object.create( module, { core:{ value:$core }, });


	self.fetchFiles = function( avatarID, root, dir, location ){

	  var fs 	= require('fs');

      //var avatarLocation = root  + dir;

      var avatarLocation = root + '/' + dir;
      var root = root;
      var dir = '/' + dir + '/';
   
      var files = fs.readdirSync( avatarLocation );      
      var output = [];

      var max = files.length;

      for ( var i = 0; i < max; i++ )
      {
        var url = files[ i ];
        var isJS;
        var jsCheck = url.split(".");
        
       if ( jsCheck.length > 1 ) continue;

        var subFileLocation =  avatarLocation + '/'  + url;
        var frameList = fs.readdirSync( subFileLocation );
 
        var maxFrames = frameList.length;
        var frames = [];


        for ( var b = 0; b < maxFrames; b++ )
        {
          var frameURL = frameList[ b ];

          var pack = root +  dir  + url  + '/' + frameURL;
          var pngCheck = pack.split(".");
          if ( pngCheck[1] == 'png') frames.push( pack );
        }

        var item = {};
        item.id = url;
        item.frameList = frames;
        item[ dir ] = frames; 
        output.push( item );
     }
     
     var data = { soulLocation:location, avatarLocation:avatarLocation, id:avatarID, fileList:output };
     var rock       = self.core.rocks[ data.id ];
     self.updateFileList( rock, output );
     //   trace( "sending out data " + data );
     //ss.publish.socketId(req.socketId,'toonList', data ); 

	}


   self.updateFileList = function( rock, fileList ){
   		rock.fileList = fileList;
		  
      var superToonList = [];
    	var max = fileList.length;

    	//fileList is an object which contains the URLS for the frame assets

    	for ( var i= 0; i < max; i++ )
    	{
      	var file = fileList[i];
      	var frameList = file.frameList; //not a fan of this mismash of file names
      	superToonList =  frameList.concat( superToonList );
    	}

   		var loader = new PIXI.AssetLoader( superToonList );
   		//loader.location = soul.source;   		
   		loader.src = rock.id; //to get access to the rock that requested
   		
		  var rockLoaders = self.core.rockLoaders;
		  var rockLoaderList = self.core.rockLoaderList;

   	  rockLoaders[ rock.id ] = loader;
		  rockLoaderList.push( rockLoaders[ rock.id ] );

   		//loader.onProgress = self.loadProgress( loader );
   		loader.onComplete = self.assetLoaderComplete( loader );
   		//loader.load();
	}


	self.assetLoaderComplete = function ( loader ){
   	//var location = loader.location;
    var id = loader.src;

    //var soul 	= self.core.souls[ location ];
    var rock 	= self.core.rocks[ id ];
    var max = rock.fileList.length;

    for ( var i = 0; i < max; i++ ){
    var list = rock.fileList[ i ];

    self.createToonFileList( rock, list.id, list.frameList );
    }
    
    }

	self.createToonFileList = function( soul, id, fileList ){
		
    var max = soul.toonList.length;
		var toon;

    	for ( var i = 0; i < max; i++ ){
        toon = soul.toonList[ i ];
        if ( toon.src == null ) toon.src = toon.id;
    	  if ( toon.src != id  ) continue;

    	  toon.src = fileList;
    	   //may need and error here
    	   if ( toon.frames != null ) self.replaceFramesWithURLs( toon.src, toon.frames );
      	}

  	}

  	self.replaceFramesWithURLs = function( src , frames ){

    	var max = frames.length;

    	for ( var i = 0; i < max; i++ )
    	{
      		var frame = frames[i];
      		var url = src[ frame ];
      		if( isNaN( frame ) ) url = "x";
      		frames[i] = url;
    	}
	}

	//INIT VARS HERE
	//PULL IT OUT
	//ss.event.on('addSoul', self.soulFromBeyond );
	//ss.event.on('toonList', self.toonListFromBeyond );
  		
	return self; 
};

exports = module.exports = SpriteControl;