// 5kyu - Phone Numbers 

// Telephone numbers
// When you start to enter a phone number, the smartphone proposes you some choices of possible phone numbers from your repertory.

// The goal of this kata is to save the phone numbers by keeping in common the same parts of the phone numbers thus reducing the total size of the repertory.

// Goal
// Your function will take in arguments an array of phone numbers. (Of at least one element); A phone number contains at least one digit and can contains up to 20 digits.

// You must return the number of elements your graph contains.

// You must not modify the input array.

// Example :
// We have the following phone numbers : 0123456789 0123987654 0123987456 2365498756 2365498765

// This gives the following graphs :

//                4 - 5 - 6 - 7 - 8 - 9           
// 0 - 1 - 2 - 3 <
//                 \            4 - 5 - 6
//                   9 - 8 - 7 < 
//                              6 - 5 - 4
  
//                                6 - 5
// 2 - 3 - 6 - 5 - 4 - 9 - 8 - 7 <
//                                5 - 6
// The graphs contains 31 elements. So the function must return 31

function phoneNumber(numbers) {
  let n = 0, tree = new Map();
  for (let number of numbers) {
    let node = tree;
    for (let digit of number) {
      if (! node.has(digit)) {
        n++;
        node.set(digit, new Map());
      }
      node = node.get(digit);
    }
  }
  return n;
}