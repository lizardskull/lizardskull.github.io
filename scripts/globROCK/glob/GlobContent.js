"use strict";

var GlobContent = function ( $core, $control ) { 
	
	//Create the vars
	var self =  Object.create( module, { 
	core:{ 				  value:$core    	},
	control:{ 			value:$control },
	viewPort:{			value:{ x:0,	y:0 }, 	  	writable:true },
	renderer:{  		value:null , 		      	writable:true },
  view:{        	value:null,           	  	writable:true },
	stage:{  		  	value:null , 			  	writable:true },
	environment:{  	value:null , 			  	writable:true },
	soulLayer:{    	value:null , 			  	writable:true },
	boundaryBox:{ 	value:null,           	  	writable:true },
	lastStep:{ 			value:0, 					writable:true },
	remainder:{ 		value:0, 					writable:true },

  scale:{ 			value:1, 					writable:true },

  htmlContainer:{ 	value:null, 				writable:true },

	});

	self.awake = function (){
    
    self.renderer  = PIXI.autoDetectRenderer( self.core.width, self.core.height );
    self.fps = 0;

    var view = self.view = self.renderer.view; // need to figure out with this is 
	  var div = self.htmlContainer = document.getElementsByTagName("div")[0];
	  div.appendChild( view );

    view.style.position = "absolute";
    view.webkitImageSmoothingEnabled = false;
    var HIGH_MODE = self.renderer instanceof PIXI.WebGLRenderer;
    var interactive = true;
    self.stage = new PIXI.Stage(0x000000, interactive);

    self.core.stage = self.stage;
    
    self.resize();
    self.update();     
    
    self.display          = new PIXI.DisplayObjectContainer;
    self.environment 	    = new PIXI.DisplayObjectContainer;
    self.soulLayer 	      = new  PIXI.DisplayObjectContainer;
    
    self.display.addChild( self.environment );
    self.display.addChild( self.soulLayer );
    
    self.stage.addChild( self.display  );
    
    self.soulLayer.scale.x = 1;
    self.soulLayer.scale.y = 1;

    window.onresize = function( event ) { self.resize() };

     self.physics = require('./Demo')( $core, $control, self );

     trace("does the demo exist " + self.physics );


    //self.physics = require('./GlobPhysics')( $core, $control, self );

    self.physics.awake();

  	return self.core.glob;
  }



  self.randColor = function() { return Math.floor(Math.random() * 256); };  

	self.update = function (){
		
    self.renderer.render( self.stage);
	window.requestAnimFrame( self.update);
	if ( self.core.world == null ) return;
	if ( self.core.world.update == null ) return;	
  	self.control.execute();
    self.core.world.update();
  	self.step();
	},

	self.render = function (){
		self.soulLayer.position.x 		= self.core.x * -1;;
		self.soulLayer.position.y 		= self.core.y;
	},

	self.resize = function(){
  		
      return;

      var width;
      var height;

      var width = $(window).width(); 
  		var height = $(window).height(); 

  		var globWidth   = self.core.width;
  		var globHeight  = self.core.height;
  		var ratio = width / globWidth;

		  //if ( height > width)
		 // {
		 //   var temp = width;
		 //   width = height;
		 //   height = temp;
		 // }

  	//	self.core.width = width;
  //		self.core.glob.height = height;
  
  		//self.core.glob.y = 400;
  		//world.x = world.viewPort.width + 10000; NOT REALLY SURE WHAT THIS DOES
   
  		var view = self.view;
  		view.style.height = height +"px"
  
  		view.style.height = globHeight * ratio +"px"
  		//var newWidth = (width /ratio);
  		view.style.width = globWidth * ratio +"px"
  		self.renderer.resize( width, height );
  	}

	return self; 
};

exports = module.exports = GlobContent;