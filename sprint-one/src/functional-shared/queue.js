var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var someInstance = {};
  var lastIn, firstOut;
  //copy the instances over
  extend(someInstance, queueMethods);
  
};

var queueMethods = {};
  

//add string to the back of the queue  
queueMethods.enqueue = function(value) {
  //if obj is empty
  if ( Object.keys(this).length ) {
    //add the string to the obj
    storage[0] = value;
    firstOut = 0;
    lastIn = 0;
  } else {
    storage[lastIn + 1] = value;
    lastIn = storageSize;
  }
};
  //remove and return the string at the front of the queue
queueMethods.dequeue = function() {
  
};
  ///return the number of items in the queue
queueMethods.size = function() {
  return Object.keys(this).length;
};



