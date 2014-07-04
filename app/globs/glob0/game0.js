"use strict";

var Form = function ( $glob )  { 
  
  var self       = Object.create( module, {});

  self.awake = function( glob ){
  	trace("awake? again");
    
  }

  self.preload = function(){
    trace("preloading ");
  }

  self.create = function( ){
    trace("createing");
  }

  self.update = function(){
    //trace("updating");
  }

  self.render = function(){
    //trace("rendering");
  }

  
  
  return self; 
};

exports = module.exports = Form;