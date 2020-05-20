// 7kyu - Sort Santa's Reindeer 

// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan", 
//   "Dancer Moore", 
//   "Prancer Chua", 
//   "Vixen Hall", 
//   "Comet Karavani",        
//   "Cupid Foroutan", 
//   "Donder Jonker", 
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan", 
//   "Vixen Hall", 
//   "Donder Jonker", 
//   "Comet Karavani",
//   "Dancer Moore", 
//   "Dasher Tonoyan",
// ]

let sortReindeer = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));