//global.$ = $;
//global.PIXI = PIXI;
//global.Matter = Matter;
//global.Demo = Demo;
//global.PixiDemo = PixiDemo;
//global.p2 = p2;
//global.Chance = Chance;
//global.TweenMax = TweenMax;
//global.buzz = buzz;
//global.document = document;
//global.window = window;

//var abar = require('address_bar');
//var folder_view = require('folder_view');
//var path = require('path');
//var shell = require('nw.gui').Shell;


//var gui = require('nw.gui');
//var win = gui.Window.get();
//win.showDevTools();

window.trace = function (msg){

    if ( console == null ) return;
    console.log( "LOG: " + msg );
    
  };

global.trace = window.trace;

$(document).ready(function() {



  //$('#we').css('display','none'); //removes the title 

  //window.GLOB = {};
  //window.GLOB.glob = {};
  //global.GLOB = window.GLOB;
    
  //GLOB.height       = 720;
  //GLOB.width        = 1080;

  var glob   = require("./globROCK/Access")();
  trace( 'does the glob content exist' + glob.content );
  glob.awake();
 
  //GLOB.glob = glob;
  //global.art = GLOB.art = {};
  //GLOB.glob.height    = GLOB.height;
  //GLOB.glob.width     = GLOB.width;

  //glob.awake();

  //setTimeout( function(){ glob.createWorld( 'game', 'Strike' );}, 10 )
  
  });
