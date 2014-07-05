    <div style = 'position:absolute; top: 0; right: 0; bottom: 0; left: 0;' ></div>
<div style = 'position:absolute; top: 0; right: 0; bottom: 0; left: 0;' ></div>

    <script type="text/javascript">


      <!-- build:css styles/components/main.min.css -->
    <link rel="stylesheet" href="styles/h5bp.css">
    <link rel="stylesheet" href="styles/components/components.css">
    <link rel="stylesheet" href="styles/main.css">
    <!-- endbuild -->



function preload() {

    game.load.image('sky',          'images/sky.png');
    game.load.image('ground',       'images/platform.png');
    game.load.image('star',         'images/star.png');
    game.load.spritesheet('dude',   'images/dude.png', 32, 48);

}

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;

function create() {

    game.world.setBounds(0, 0, 1400, 1400);

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

   game.camera.follow( player, Phaser.Camera.FOLLOW_PLATFORMER);

   player.events.onInputDown.add(listener, this);
    
}

function listener (){
  trace("clicky clack")
}

function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}

function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

</script>










////
////OLD

  var div = self.htmlContainer = document.getElementsByTagName("div")[0];

    var width = div.offsetWidth;
    var height = div.clientHeight;

    self.core.width = width;
    self.core.height = height;
    
    self.renderer  = PIXI.autoDetectRenderer( self.core.width, self.core.height );
    self.fps = 0;

    var view = self.view = self.renderer.view; // need to figure out with this is 
	  
    trace(' what is the width of the div ' + height );
	  div.appendChild( view );

    view.style.position = "absolute";
    view.webkitImageSmoothingEnabled = false;
    var HIGH_MODE = self.renderer instanceof PIXI.WebGLRenderer;
    var interactive = true;
    self.stage = new PIXI.Stage(0xFF00FF, interactive);

    self.stage.width = width;

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







///OLD 
    	self.resize = function(){
  		

      //trace("resize ");
      //return;


      var width = self.core.width = $(window).width(); 
  		var height = self.core.height = $(window).height(); 

  		

      //var ratio = width / globWidth;

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
   
  	//	var view = self.view;
  		//view.style.height = height +"px"
  
  //		view.style.height = globHeight * ratio +"px"
  		//var newWidth = (width /ratio);
  	//	view.style.width = globWidth * ratio +"px"
  	//	self.renderer.resize( globWidth, globHeight );

      self.core.game.width = width;
      self.core.game.height = height;

      //game.stage.bounds.width = width;
      //game.stage.bounds.height = height;
  
      if (self.core.game.renderType === Phaser.WEBGL) self.core.game.renderer.resize(width, height);
      
      
  	}

// there was a time when we used soul layers

  	self.render = function (){
		//self.soulLayer.position.x 		= self.core.x * -1;;
		//self.soulLayer.position.y 		= self.core.y;
	},


//UPDATE OF THE PAST

self.update = function (){
		
    self.renderer.render( self.stage);
	window.requestAnimFrame( self.update);
	if ( self.core.world == null ) return;
	if ( self.core.world.update == null ) return;	
  	self.control.execute();
    self.core.world.update();
  	self.step();
	},



  for (var i = rock.toonList.length - 1; i >= 0; i--) {
      var toon = rock.toonList[i];

      if ( toon.id == null    ) continue;
      if ( toon.src == null     ) toon.src = toon.id;
      if ( toon.frames == null  ) {
        if( frameData[ toon.src] != null  ) toon.frames = frameData[ toon.src]
        continue;
      }

      //self.replaceFramesWithURLs( toon.frames, frameData[toon.src] );// TURN THIS OFF FOR NOW WILL NEED LATR
    };
