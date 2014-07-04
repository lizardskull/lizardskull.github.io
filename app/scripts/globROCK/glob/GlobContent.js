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

    var width = div.offsetWidth;
    var height = div.clientHeight;

    self.core.width = width;
    self.core.height = height;

    var control = self.control;

    var options = { preload: control.preload, create: control.create, update: control.update, render:control.render };
    var game = self.game = self.core.game = new Phaser.Game( self.core.width, self.core.height, Phaser.AUTO, divID,  options );
    
    window.onresize = function( event ) { self.resize() };


  	return self.core.glob;
  }

  //self.preload = function(){}

  //self.update = function(){}

  //self.render = function(){}

  //self.create = function () {
    //self.core.game.physics.startSystem(Phaser.Physics.ARCADE);
  
  //}



  self.randColor = function() { return Math.floor(Math.random() * 256); };  

	
	
	self.resize = function(){
  		
      var width = self.core.width = $(window).width(); 
  		var height = self.core.height = $(window).height(); 

      self.core.game.width = width;
      self.core.game.height = height;
  
      if (self.core.game.renderType === Phaser.WEBGL) self.core.game.renderer.resize(width, height);
          
  	}

	return self; 
};

exports = module.exports = GlobContent;