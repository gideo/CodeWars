// 5kyu - Simple Pig Latin

// Description:

// Move the first letter of each word to the end of it, then add 'ay' to the end of 
// the word.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

let pigIt = str => str.split(' ').map((a)=>a.slice(1)+a[0]+'ay').join(' ')