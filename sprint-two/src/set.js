var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if(this._storage === undefined){
		this._storage = {}
	}else{
		this._storage[item] = item;
	}
};

setPrototype.contains = function(item){
	for(var key in this._storage){
		if (this._storage[key]){
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item){
	delete this._storage[item]

};

/*
 * Complexity: What is the time complexity of the above functions?
 	add = constant;
 	contains = linear;
 	remove = constant;
 */
