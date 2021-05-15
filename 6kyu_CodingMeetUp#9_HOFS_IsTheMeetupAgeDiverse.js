// 6kyu - Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

let isAgeDiverse = list => list.some(h => h.age >= 100) 
  ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
  : false;