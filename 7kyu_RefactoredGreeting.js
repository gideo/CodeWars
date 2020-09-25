// 7kyu - Refactored Greeting 

// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

// Here is how the final refactored code would be used:

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(yourName){
  return "Hello " + yourName + ", my name is " + this.name;
}