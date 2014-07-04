
var World = function ( $glob ) { 
  
  //Create the vars
  var self = Object.create( module, {
  glob:    { value:$glob,   	  writable:true  }, 
  toons:   { value:[],          writable:true  },

  });

  self.execute = function ( ){ }

  self.awake = function( ){ }

  
  return self; 
};

exports = module.exports = World;