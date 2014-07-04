"use strict";

var GlobPhysics = function ( $core, $control, $self ) { 
	
	//Create the vars
	var self =        Object.create( module, { 
	core:{ 				      value:$core    	},
	control:{ 			      value:$control    },
    content:{                 value:$self       }
	});

	self.awake = function (){ 

    var world = new p2.World({ gravity:[0, 0] });

    //Create a circle
    var radius = .2,
    circleShape = new p2.Rectangle( 1, .5 ),
    circleBody = new p2.Body({ mass:1, position:[ 0, 0 ] });
    circleBody.addShape( circleShape );
    world.addBody(circleBody);
    

    //Create a plane
    //var groundShape = new p2.Plane(),
    //groundBody = new p2.Body({ mass:0 });
    //groundBody.addShape(groundShape);

    //Add the bodies to the world
    //circleBody.applyForce( [0,0],[0,0] );
    //world.addBody(groundBody);

    var settings =  {
                        context:self.content.renderer,
                        stage:self.content.stage, 
                    };

    var demo = new Demo( world );
    var demo = new PixiDemo( world, settings );
    //demo.frame(0, 0, 1080, 720);

    //Step the simulation
    //setInterval(function(){
    //    world.step(1.0/60.0);
    //    trace("Circle y position: " + circleBody.position[1]);
    //    }, 1000.0/60.0);


   }

  

	return self; 
};

exports = module.exports = GlobPhysics;