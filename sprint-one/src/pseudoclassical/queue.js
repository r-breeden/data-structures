var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
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

Queue.prototype.dequeue = function() {
  
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

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};