// 7kyu - Interactive Dictionary

// In this kata, your job is to create a class Dictionary which you can add 
// words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Cant find entry for Banana
// Good luck and happy coding!

class Dictionary {
  constructor() {
    this.obj = {}
  }
  
  newEntry(key, value) {
    this.obj[key] = value
  }
  
  look(key) {
    return this.obj[key] || `Can\'t find entry for ${key}`
  }
}