var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

    var bucket = this._storage.get(i) || [];
    
    if(bucket.length>0){
      for(var j =0; j<bucket.length; j++){
        if (bucket[i][0] === k){
          bucket[i][1] = j
        }
      }
    }
      bucket.push([k,v])

    this._storage.set(i, bucket);


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i)

  for(var j = 0; j<bucket.length; j++){
    if(bucket[j][0]===k){
      return bucket[j][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for(var j = 0; j<bucket.length; j++){
    if(bucket[ j ][ 0 ] === k){
      bucket.splice(j, 1);
    }
  }

  this._storage.set(i, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?

 insert  = constant
 retrieve  = constant
 remove = constant 

 *the buckets are so small that the number of operations will be very small;
 */
