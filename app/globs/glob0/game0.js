"use strict";

var Form = function ( $glob )  { 
  
  var self       = Object.create( module, {});

  self.awake = function( glob ){
  	trace("awake? again");
    
  }

  self.preload = function( world ){
    self.world = world;

    world.load.image('sky',         'images/sky.png');
    world.load.image('ground',      'images/platform.png');
    world.load.image('star',        'images/star.png');
    world.load.spritesheet('dude',  'images/dude.png', 32, 48);
  }

  self.create = function( world ){

    self.score = 0;

    world.world.setBounds(0, 0, 2400, 1400);

    world.physics.startSystem(Phaser.Physics.ARCADE);
    world.add.sprite(0, 0, 'sky');

    var platforms = self.platforms = world.add.group();
    platforms.enableBody = true;

    var ground = self.ground = platforms.create(0, world.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    var ledge = self.ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    var player = self.player = world.add.sprite(32, world.world.height - 150, 'dude');

    world.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    world.camera.follow( player, Phaser.Camera.FOLLOW_LOCKON);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    var stars = self.stars = world.add.group();

    stars.enableBody = true;

    for (var i = 0; i < 12; i++)
    {
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 300;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    self.scoreText = world.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    self.cursors = world.input.keyboard.createCursorKeys();
  }

  self.update = function( world ){
    //trace("updating");
    var player = self.player;
    var cursors = self.cursors;

    world.physics.arcade.collide( self.player, self.platforms);
    world.physics.arcade.collide( self.stars, self.platforms);
    world.physics.arcade.overlap( self.player, self.stars, self.collectStar, null, this);

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

  self.render = function(){
    //trace("rendering");
  }

  self.collectStar = function(player, star) {
    
    star.kill();
    self.score += 10;
    self.scoreText.text = 'Score: ' + self.world.time.fps ;

}

  
  
  return self; 
};

exports = module.exports = Form;