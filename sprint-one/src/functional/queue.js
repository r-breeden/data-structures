var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var lastIn, firstOut; //the oldest

  var storage = {};

  // Implement the methods below
  
  //add string to the back of the queue
  someInstance.enqueue = function(value) {
    storageSize = someInstance.size();

    //if the obj is empty 
    if ( storageSize === 0 ) {
      //add the string to the object
      storage[0] = value; 
      firstOut = 0;
      lastIn = 0;
    //if the obj is not empty
    } else {
      storage[lastIn + 1] = value;
      lastIn = storageSize;
    }
    
  };
  
  //remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    //grab the string form the lowest number in object
    if (someInstance.size() === 0) {
      return;
    //if the object is not empty
    } else {
      var str = storage[firstOut];
      delete storage[firstOut];
      firstOut++;
      return str; 
    }
    
  };
  
  ///return the number of items in the queue
  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  
  return someInstance;
};

