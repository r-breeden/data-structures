var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newest;
  // Implement the methods below

  //add a string to the top of the stack
  someInstance.push = function(value) {
    storageSize = someInstance.size();
    //if storage obj is empty
    if ( storageSize === 0 ) {
      storage[0] = value;
      newest = 0;  
    //if obj is not empty
    } else {
      //add value to stack
      newest++;
      storage[newest] = value;
    }
  };
  //Remove and return the string on the top of the stack
  someInstance.pop = function() {
    var str = storage[newest];
    delete storage[newest];
    newest--;
    return str;                                                                                                                                                                                                     
  };
  //Return the number of items in the q
  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
