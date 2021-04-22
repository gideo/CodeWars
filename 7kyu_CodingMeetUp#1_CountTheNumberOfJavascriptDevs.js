// 7kyu - Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// In ruby:

// list1 = [
//   { first_name: 'Noah', last_name: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { first_name: 'Maia', last_name: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { first_name: 'Shufen', last_name: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { first_name: 'Sumayah', last_name: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ]

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

//     The format of the strings will always be Europe and JavaScript.
//     All data will always be valid and uniform as in the example above.




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

let countDevelopers = list => list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length;