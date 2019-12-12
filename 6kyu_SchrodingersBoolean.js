// 6kyu - Schrödinger's Boolean

// Can a value be both true and false?

// Define omniBool so that it returns true for the following:

// omniBool == true && omniBool == false
// If you enjoyed this kata, be sure to check out my other katas.

class OmniBool {
  constructor() {
    this.n = false;
  }
}

OmniBool.prototype[Symbol.toPrimitive] = function() { 
  this.n = !this.n;
  return this.n;
};

let omnibool = new OmniBool();