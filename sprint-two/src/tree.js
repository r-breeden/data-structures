var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  //copy treeMethods onto every node created
  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node
//adds that child as a child of the tree
treeMethods.addChild = function(value) {
  //create the node with a value and add to the children
  //this refers to the new object created via Tree
  this.children.push(Tree(value));
};

//takes any input and returns a boolean reflecting
//whether it can be found as the value of the target node or
//any descendant node
treeMethods.contains = function(target) {
  //check if node contains the target
  if ( this.value === target ) {
    return true;
  //check if the children contain the target
  }
  //check if the node has children
  if ( this.children.length > 0 ) {
    // 
    for ( var i = 0; i < this.children.length; i++ ) {
      if ( this.children[i].contains(target) === true ) { return true; }
    }
  }
  //if target not found return false
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
