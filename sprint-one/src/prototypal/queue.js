//Use Object.create with the object from step 2 to create instances of your class

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
 
  someInstance.firstOut = undefined;
  someInstance.lastIn = undefined;
  someInstance.storage = {};
  
  return someInstance;
};

var queueMethods = {};

//add string to the back of the queue  
queueMethods.enqueue = function(value) {
  //if obj is empty
  var storageSize = this.size();

  if ( storageSize === 0 ) {
    //add the string to the obj
    this.storage[0] = value;
    this.firstOut = 0;
    this.lastIn = 0;
  } else {
    this.storage[this.lastIn + 1] = value;
    this.lastIn = storageSize;
  }
};
  //remove and return the string at the front of the queue
queueMethods.dequeue = function() {

  if ( this.size() === 0 ) {
    return;
  //if the object is not empty
  } else {
    var removed = this.storage[this.firstOut];
    delete  this.storage[this.firstOut];
    this.firstOut++;
    return removed; 
  }
};
  ///return the number of items in the queue
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

