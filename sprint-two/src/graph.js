// Instantiate a new graph
var Graph = function(node) {
    this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
 this.storage[node] = {value: node, edges: []};
}
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
 return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
 delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
 var ifFromNodeEdgesExist = false;
 var ifToNodeEdgesExist = false;

  if (this.contains(fromNode) && this.contains(toNode)) {
    var fromNodeEdges = this.storage[fromNode].edges;
    var toNodeEdges = this.storage[toNode].edges;
        
    for (var i = 0; i < fromNodeEdges.length; i++) {
      if (fromNodeEdges[i] === toNode) {
        ifFromNodeEdgesExist = true;
      }
    }    
    for (var i = 0; i < toNodeEdges.length; i++) {
      if (toNodeEdges[i] === fromNode) {
        ifToNodeEdgesExist = true;
      }
    }
  }//end first if in hasEdge

  return (ifFromNodeEdgesExist && ifToNodeEdgesExist);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 this.storage[fromNode].edges.push(toNode);
 this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdges = this.storage[fromNode].edges;
  var toNodeEdges = this.storage[toNode].edges;
 
  for (var i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
        fromNodeEdges.splice(i, 1);
    }
  }
 
  for (var i = 0; i < toNodeEdges.length; i++) {
    if (toNodeEdges[i] === toNode) {
        toNodeEdges.splice(i, 1);
    } 
  }    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var key in this.storage){
      cb(this.storage[key].value);
    }
};

/*
* Complexity: What is the time complexity of the above functions?
*/


