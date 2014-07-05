"use strict";

var GlobCore = function ( $name ) { 
	
	//Create the vars
	var self = Object.create( module, { 

	glob:{ 				value:"glob"	, 	writable:true },
	form:{ 				value:null, 	writable:true 	  },
	//PHASER GAME
	world:{ 			value:null, 	writable:true 	},// i would change this to world
	

	//OLD NEWS
	
	debug:{ 			value:true, 	writable:true 	},
	preload:{ 			value:[], 		writable:true 	},

	
	
	name:{ 				value:$name 	},
	id:{				value:"none"	},

	cp:{				value:null	},

	start:{ 			value:0,	 writable:true },
	now:{ 				value:0,	 writable:true },
	last:{ 				value:0,	 writable:true },

	gravityX:{ 			value:0,	 writable:true },
	
	//gravityY:{ 			value:-2000,	 writable:true },

	gravityY:{ 			value:2000,	 writable:true },

	//Errors
	
	rockError:{ 		value:"Rock Type Not Present "},

	
	
	stage:{ 			value:"stage"	, 	writable:true	},
	width:{ 			value:500, 			writable:true 	},		
	height:{ 			value:200 , 		writable:true 	},	

	x:{ 				value:0, 			writable:true 	},		
	y:{ 				value:0 , 			writable:true 	},	

	loader:{ 			value:null , 		writable:true 	}, //loads images into the system

	server:{ 			value:"server"	, 	writable:true	},
	
	rockSrc:{ 		value:""	, 	writable:true	},
	rocks:{ 			value:{}		, 	writable:true	},
	rockList:{ 		value:[]		, 	writable:true	},

	rockLoaders:{ 	value:{}		, 	writable:true	},
	rockLoaderList:{ 	value:[]		, 	writable:true	},

	rockFiles:{ 		value:{}		, 	writable:true	},
	rockFileList:{ 	value:[]		, 	writable:true	},

	soulSrc:{ 			value:"client/static/images/soul/"	, writable:true	},
	soulNameSpace:{ 	value:"com.globrock.soul."		, writable:true	}, //dont think this is needed anymore
	souls:{ 			value:{}		, 	writable:true	},
	soulList:{ 			value:[]		, 	writable:true	},

	waitingRoom:{ 		value:{}		, 	writable:true	},
	waitingRoomList:{ 	value:[]		, 	writable:true	},

	scene1:{ 			value:false		, 	writable:true	},
	scene2:{ 			value:false		, 	writable:true	},
	scene3:{ 			value:false		, 	writable:true	},

	frameData:{ 		value:{}		, 	writable:true	},
	frameDataList:{ 	value:[] 		, 	writable:true 	},

	tickToRound:{ 		value:3			, 	writable:true 	},

	//physics
	space:{ 			value:null		, 	writable:true 	},
	bodyRemoveList:{ 	value:[]		, 	writable:true 	},
	shapeRemoveList:{ 	value:[]		, 	writable:true 	}
		
	});

	return self; 
};

exports = module.exports = GlobCore;