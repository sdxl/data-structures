var BinarySearchTree = function(value){
  var obj = Object.create(sharedMethods);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var sharedMethods = {

  insert : function(node){
    if(node > this.value){
      if(this.right === null){
        this.right = BinarySearchTree(node);
      } else {
        this.right.insert(node);
      }
    }



    else if(node < this.value){
      if(this.left === null){
        this.left = BinarySearchTree(node);
      } else {
        this.left.insert(node);
      }
    }

  },

  contains : function(value){
  var found = false;
  var finder = function(node){
    if(node.value === value){
      found = true;
    }
    else{
      if(node.right && value>node.value){
        finder(node.right);
      }
      if(node.left && value<node.value){
        finder(node.left);
      }
    }
  }
  finder(this)
  return found;
  },

  depthFirstLog : function(cb){

    cb(this.value)

    if(this.left !== null){
      this.left.depthFirstLog(cb);
    }

    if(this.right !== null){
      this.right.depthFirstLog(cb);
    }

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log)
 contains: O(Log)
 depthFirstLog: O(Log)
 */
