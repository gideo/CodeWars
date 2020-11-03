// 6kyu - Slay Achilles! 

// A horde of Grecian warriors is storming towards you. Among them is Achilles. Pick him off and slay him. Your city depends on it.

// Your function will be passed an array of positive integers containing an Achilles number. An Achilles number is "powerful" but not a perfect power, meaning every term of its prime factorization is at least squared, but it cannot be represented as the power of a single number (i.e. it cannot be mk, but may be of the form mx · ny where x!=y, etc.).

// For example:

// 99 = 32 · 11 (not powerful; not Achilles)
// 100 = 102 (perfect power; not Achilles)
// 108 = 2233 (Achilles!)
// Remove Achilles from the array and return the array.

function slayAchilles(army){
  let filtered = army.filter(x => !isPowerful(x) || isPerfect(x));
  return filtered;
}

function isPowerful(number) {
  let counters = [];
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i != 0) 
      continue;
    let counter = 0;
    while(number % i == 0) {
      number = number / i;
      counter++;
    }
    counters.push(counter);
  }
  if (number != 1)
    counters.push(1);
  return !counters.includes(1);
}

function isPerfect(number) {
  if (number == 1)
    return true; 
  for (let i1 = 2; i1 <= Math.ceil(Math.sqrt(number)); i1++) {
    let val1 = Math.log(number) / Math.log(i1);
    if ((val1 - parseInt(val1)) < 0.00000001 || (val1 - parseInt(val1)) == 0.9999999999999996)
      return true; 
  }
  return false;
}