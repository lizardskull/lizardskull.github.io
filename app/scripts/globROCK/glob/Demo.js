"use strict";

var Demo = function ( $core, $control, $self ) { 
	
	//Create the vars
	var self =        Object.create( module, { 
	core:{ 				      value:$core    	},
	control:{ 			      value:$control    },
    content:{                 value:$self       }
	});

    self.blocks = [];

	self.awake = function (){ 

    self.engine           = null;
    self.world            = null;

    trace("alligator");

    var container = document.getElementsByTagName("div")[0];

    var render = { element: container, context:self.content.renderer, stage:self.content.stage, controller: Matter.RenderPixi }; 
    var options =  { positionIterations: 6, velocityIterations: 4, enableSleeping: false, render:render };

    self.engine = Matter.Engine.create(container, options);
    self.mouseConstraint = Matter.MouseConstraint.create( self.engine);
    Matter.World.add( self.engine.world, self.mouseConstraint);
    Matter.Engine.run( self.engine);
    self.engine.world.gravity = {x:0, y:0};
    
    //Matter.World.add( self.engine.world );
        
    self.hero = Matter.Bodies.rectangle( 395, 500, 200, 200 );


    var ground = Matter.Bodies.rectangle(395, 1080, 815, 50, { isStatic: true, render: { visible: true } } );

        
    Matter.Events.on( self.engine, 'tick', self.focus );
    Matter.World.add( self.engine.world, [ self.hero, ground ] );

    setInterval( self.addBlock, 200 );
    
    $("body").keydown(function (key) {  self.keydown(   key.which ); });  
    $("body").keyup(function (key)   {  self.keyup(     key.which ); });
    
   }

   self.keydown = function( key ){

    self.time = self.core.glob.now;

    trace("what does time look like " + self.time );

   }

   self.keyup = function( key ){ 
    
     var block = self.blocks.shift();
     if ( block == null ) return;
     Matter.World.remove( self.engine.world, [ block ] );
    
  };

  self.addBlock = function(){

    var rockOptions = { density: 1.004 };    
    var rock = Matter.Bodies.rectangle( self.hero.position.x , self.hero.position.y + 50, 400, 20, rockOptions);
    Matter.World.add( self.engine.world, [ rock ] );

    self.blocks.push( rock );
    //self.focus();

  }

   self.focus = function( ){ 

    
   Matter.Body.applyForce( self.hero, {x:0, y:0}, {x:0, y:1} );

   var max = self.blocks.length;
 
   for ( var i = 0; i < max; i++ ){
    var body = self.blocks[i];
    trace("u got a body " + body );
    if ( body == null ) continue;
    Matter.Body.applyForce( body, {x:0, y:0}, {x:0, y:5} ); 
    }
   }


	return self; 
};

exports = module.exports = Demo;