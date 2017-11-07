// 7kyu - Order of Weight

// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.


function sortF(val) {
  let match = val.match(/\d+|\D+/g);
  return +(match[0]) + {"G": 1, "KG": 1000, "T": 1000000}[match[1]];
}

const arrange = arr => arr.sort((a, b) => sortF(a) - sortF(b), 0);
