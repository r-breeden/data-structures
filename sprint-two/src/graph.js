

// Instantiate a new graph
var Graph = function(node) {
  //object is made for us via keyword 'new'
  this.value = node;
  this.edges = [];
  //object is returned via keyword 'new'
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //make a new node
  var freshNode = new Graph(node);
  //link freshNode to passed in node
  this.edges.push(freshNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if node is the one we are looking for
  if ( this.value === node ) { return true; }
  //check the connections of existing nodes for "target" node
  for ( var i = 0; i < this.edges.length; i++ ) {
    if ( this.edges[i].contains(node) === true ) {
      return true;
    }
  }
  //if not found
  return false;
};

Graph.prototype.findNode = function(node) {
  //check if first node is the droid we are looking for
  if ( this.value === node ) { return this }
  for ( var i = 0; i < this.edges.length; i++ ) {
    if (  this.edges[i].value === node) {
      return this.edges[i];
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //find the node correlating to the value
  node = this.findNode(node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //find the node that has the value fromNode
  
  //remove the edge that references toNode
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find the node corresponding to fromNode
  console.log('this is the fromNode value: ' + fromNode);
  fromNode = this.findNode(fromNode);
  toNode = this.findNode(toNode);
  console.log('this should equal fromnode: ' + fromNode.value);
  console.log('this should equal toNode: ' + toNode.value);  
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


