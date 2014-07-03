"use strict";

var GlobPhysics = function ( $core, $control, $self ) { 
	
	//Create the vars
	var self =        Object.create( module, { 
	core:{ 				      value:$core    	},
	control:{ 			      value:$control    },
    content:{                 value:$self       }
	});

	self.awake = function (){ 

    self.engine           = null;
    self.world            = null;

    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        RenderPixi = Matter.RenderPixi,
        Events = Matter.Events,
        Bounds = Matter.Bounds,
        Vector = Matter.Vector,
        Vertices = Matter.Vertices,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Query = Matter.Query;

    var container = document.getElementsByTagName("div")[0];

     var options =  {
            positionIterations: 6,
            velocityIterations: 4,
            enableSleeping: false,

            render: {
                element: container,
                context:self.content.renderer,
                stage:self.content.stage, 
                controller: Matter.RenderPixi
                    }
                    };


        self.engine = Engine.create(container, options);

        // add a mouse controlled constraint
        self.mouseConstraint = MouseConstraint.create( self.engine);
        World.add( self.engine.world, self.mouseConstraint);

        // run the engine
        Engine.run( self.engine);

        self.engine.world.gravity = {x:0, y:1};

        
        var ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true, render: { visible: true } } );

        var particleOptions = { render: { visible: true } };
        var poop =  Composites.softBody(250, 100, 2, 5, 1, 1, true, 10, particleOptions);


        var rockOptions = { density: 0.004 };
        var rock = Bodies.rectangle(170, 450, 8, 20, rockOptions);
        var anchor = { x: 170, y: 450 };
        var elastic = Constraint.create({ 
                pointA: anchor, 
                bodyB: rock, 
                stiffness: 0.05, 
                render: { 
                    lineWidth: 5, 
                    strokeStyle: '#dfa417' 
                } 
            });

        


        World.add( self.engine.world, [ ground , elastic, poop, rock  ] );

        //var pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0 );

        //var ground2 = Bodies.rectangle(610, 250, 200, 20, { 
        //    isStatic: true, 
        //    render: { 
        //        fillStyle: '#edc51e', 
        //        strokeStyle: '#b5a91c' 
        //    } 
        //});

        //var pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0 );

        //World.add( self.engine.world, [ ground, pyramid, ground2, pyramid2, rock, elastic ]);

        //Events.on(_engine, 'tick', function(event) {
        //    if ( self.engine.input.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
        //        rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
        //        World.add(_engine.world, rock);
        //        elastic.bodyB = rock;
        //    }
        //});
       
        $("body").keyup(function (key)   {  self.keyup(   key.which ); });


        

        // make the world bounds a little bigger than the render bounds
        self.engine.world.bounds.min.x = -300;
        self.engine.world.bounds.min.y = -300;
        self.engine.world.bounds.max.x = 1100;
        self.engine.world.bounds.max.y = 900;

        // keep track of current bounds scale (view zoom)
       


        //var sceneEvents = [];
           //sceneEvents.push(
        Events.on( self.engine, 'beforeTick', self.focus );
    

         var renderOptions = self.engine.render.options;
        renderOptions.hasBounds = true;

   }


   self.keyup = function( key ){ 
    
    trace( "key up " + key );
      var rockOptions = { density: 0.004 };    
     var rock = Matter.Bodies.polygon(170, 450, 8, 20, rockOptions);
    Matter.World.add( self.engine.world, [ rock ] );
    
  };

   self.focus = function( ){

          var Vector = Matter.Vector;
          var Bounds = Matter.Bounds;
          var Mouse = Matter.Mouse;

         var boundsScaleTarget = 1,
            boundsScale = {
                x: 1,
                y: 1
            };

            // get the centre of the viewport
        var viewportCentre = {
            x: self.engine.render.options.width * 0.5,
            y: self.engine.render.options.height * 0.5
        };


        var world = self.engine.world,
                    mouse = self.engine.input.mouse,
                    render = self.engine.render,
                    translate;

                // mouse wheel controls zoom
                var scaleFactor = mouse.wheelDelta * -0.1;
                if (scaleFactor !== 0) {
                    if ((scaleFactor < 0 && boundsScale.x >= 0.6) || (scaleFactor > 0 && boundsScale.x <= 1.4)) {
                        boundsScaleTarget += scaleFactor;
                    }
                }

                // if scale has changed
                if (Math.abs(boundsScale.x - boundsScaleTarget) > 0.01) {
                    // smoothly tween scale factor
                    scaleFactor = (boundsScaleTarget - boundsScale.x) * 0.2;
                    boundsScale.x += scaleFactor;
                    boundsScale.y += scaleFactor;

                    // scale the render bounds
                    render.bounds.max.x = render.bounds.min.x + render.options.width * boundsScale.x;
                    render.bounds.max.y = render.bounds.min.y + render.options.height * boundsScale.y;

                    // translate so zoom is from centre of view
                    translate = {
                        x: render.options.width * scaleFactor * -0.5,
                        y: render.options.height * scaleFactor * -0.5
                    };

                    Bounds.translate(render.bounds, translate);

                    // update mouse
                    Mouse.setScale(mouse, boundsScale);
                    Mouse.setOffset(mouse, render.bounds.min);
                }

                // get vector from mouse relative to centre of viewport
                var deltaCentre = Vector.sub(mouse.absolute, viewportCentre),
                    centreDist = Vector.magnitude(deltaCentre);

                // translate the view if mouse has moved over 50px from the centre of viewport
                if (centreDist > 50) {
                    // create a vector to translate the view, allowing the user to control view speed
                    var direction = Vector.normalise(deltaCentre),
                        speed = Math.min(10, Math.pow(centreDist - 50, 2) * 0.0002);

                    translate = Vector.mult(direction, speed);

                    // prevent the view moving outside the world bounds
                    if (render.bounds.min.x + translate.x < world.bounds.min.x)
                        translate.x = world.bounds.min.x - render.bounds.min.x;

                    if (render.bounds.max.x + translate.x > world.bounds.max.x)
                        translate.x = world.bounds.max.x - render.bounds.max.x;

                    if (render.bounds.min.y + translate.y < world.bounds.min.y)
                        translate.y = world.bounds.min.y - render.bounds.min.y;

                    if (render.bounds.max.y + translate.y > world.bounds.max.y)
                        translate.y = world.bounds.max.y - render.bounds.max.y;

                    // move the view
                    Bounds.translate(render.bounds, translate);

                    // we must update the mouse too
                    //Mouse.setOffset(mouse, render.bounds.min);
                }
   }


	return self; 
};

exports = module.exports = GlobPhysics;