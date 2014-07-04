
var LogoScreen = function ( $glob ) { 
  
  //Create the vars
  var self = Object.create( module, { glob:  { value:$glob,     writable:true  }, });

  self.awake          = function() {},
  self.awakeComplete  = function() {},
  self.nextScreen     = function(){},
  self.execute        = function ( target ){},

  return self; 
};

exports = module.exports = LogoScreen;

