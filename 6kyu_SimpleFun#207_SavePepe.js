// 7kyu - Simple Fun #207: Save Pepe 

// Pepe has been captured by the evil Pilaf monsters, and they have imprisoned him in a cell. Luckily, this cell has an electronic lock with a very weak cryptographic hash, and Pepe has stolen the hashing algorithm from the Pilaf guards. It takes an input of an array of 16 bytes, and outputs a hash, which is a string of length 16.

// Let message[i] denote the ASCII value of the ith input symbol. The algorithm builds the hash as follows:

//  hash[i] = ((129 * message[i]) XOR message[i-1]) % 256
// When calculating the first value of the hash, it is assumed that message[-1] = 0.

// You must determine how to reverse this hash function so that Pepe can escape the cell and save the world. Write a function that takes hashedMessage and returns a string of length 16, which hash equals hashedMessage.

// Input/Output
// [input] integer array msg

// The output of the hash function, array of 16 integers. It is guaranteed that for each valid i 0 ≤ msg[i] ≤ 255.

// [output] a string

// The message that produces the given hash.

// Example
// For msg = [241,134,146,23,6,141,140,156,134,31,145,146,23,2,129,15]

// The output should be "qwertyuiopasdfgh".

//  If msg = "qwertyuiopasdfgh", then msg[0] = 113 and msg[1] = 119.
//  Here's how hash was obtained then:

//  hash[0] = 241, since:
//  129 * msg[0] = 14577
//  14577 XOR msg[-1] = 14577
//  14577 % 256 = 241

//  hash[1] = 134, since:
//  129 * msg[1] = 15351
//  15351 XOR msg[0] = 15238
//  15238 % 256 = 134

//  etc...

function savePepe(a) {
  const w = Array(17).fill(0);
  for (let i = 1; i <= 16; i++)
    w[i] = [...Array(200).keys()].find((_,j) => (129 * j ^ w[~-i]) % 256 === a[~-i]);
  return String.fromCodePoint(...w.slice(1));
}