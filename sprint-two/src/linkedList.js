var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //make new node
    var node = Node(value);
    //if there are no nodes
    if ( list.head === null ) {
      //update links
      list.head = node;
      list.tail = node;
    //if there are nodes in the list
    } else {
      //point old tail to new tail
      list.tail.next = node;
      //update list.tail
      list.tail = node;  
    }
  };

  list.removeHead = function() {
    //store old head value
    var formerHead = list.head.value;
    //reassign head
    list.head = list.head.next;
    //return head value
    return formerHead;    
  };
  
  //returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {
    var theNode = list.head;
    //traverse the node until the end OR if you find the node
    while ( true ) { 
      if (theNode.value === target) {
        return true;
      }
      if ( theNode.next === null) { break; }
      theNode = theNode.next;
    }
    //if the value is not found in the linked list
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var newlinkedList = new LinkedList();

/*
 * Complexity: What is the time complexity of the above functions?
 */
