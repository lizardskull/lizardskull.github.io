"use strict";

var GlobContent = function ( $core, $control ) { 
	
	//Create the vars
	var self =  Object.create( module, { 
	core:{ 				  value:$core    	},
	control:{ 			value:$control },
	viewPort:{			value:{ x:0,	y:0 }, 	  	    writable:true },
	renderer:{  		value:null , 		      	      writable:true },
  view:{        	value:null,           	  	  writable:true },
	stage:{  		  	value:null , 			  	        writable:true },
	environment:{  	value:null , 			  	        writable:true },
	soulLayer:{    	value:null , 			  	        writable:true },
	boundaryBox:{ 	value:null,           	  	  writable:true },
	lastStep:{ 			value:0, 					            writable:true },
	remainder:{ 		value:0, 					            writable:true },

  scale:{ 			value:1, 					              writable:true },

  htmlContainer:{ 	value:null, 				        writable:true },

	});

	self.awake = function (){

    var divID = 'cosmos';
    var div = self.htmlContainer = document.getElementsByTagName("div")[0];
    //div = null;

    var width = 600;
    var height = 300;

    trace("u got a div ??" + div);

    if ( div != null ){
    width = div.offsetWidth;
    height = div.clientHeight;
    }

    if ( div == null ) divID = '';

    self.core.width = width;
    self.core.height = height;

    var control = self.control;

    trace("what is the core " + self.core.width );

    var options = { preload: control.preload, create: control.create, update: control.update, render:control.render };
    var world = self.world= self.core.world = new Phaser.Game( self.core.width, self.core.height, Phaser.AUTO, divID,  options );
    
    //window.onresize = function( event ) { self.resize() };

  	return self.core.glob;
  }
	

	self.resize = function(){
  		
      var width = self.core.width = $(window).width(); 
  		var height = self.core.height = $(window).height(); 

      self.core.world.width = width;
      self.core.world.height = height;
  
      if (self.core.world.renderType === Phaser.WEBGL) self.core.world.renderer.resize(width, height);
          
  	}

	return self; 
};

exports = module.exports = GlobContent;