//create instances with the keyword new

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[this.size() + 1] = value;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.size()];
  delete this.storage[this.size()];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var someInstance = new Stack();
