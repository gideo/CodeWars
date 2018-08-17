// 5kyu - Ninety Nine Thousand Nine Hundred Ninety Nine

// Write a method that takes a number and returns a string of that number 
// in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0 and 99999. If 
// given numbers outside of that range or non-Integer numbers, the method 
// should return an empty string.

const numberToEnglish = n => {
  if (n < 0 || n > 99999 || !Number.isInteger(n)) return '';
  let singles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      doubles = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      arr = [];
  
  const convert = x => {
    if (x >= 20 && x % 10) return [doubles[x / 10 | 0], singles[x % 10]];
    if (x >= 20) return [doubles[x / 10 | 0]];
    return [singles[x]];
  }
  
  if (n >= 1000) {
    let thousands = n / 1000 | 0;
    arr.push(...convert(thousands), 'thousand');
    n %= 1000;
  }
  if(n >= 100) {
    let hundreds = n / 100 | 0;
    arr.push(...convert(hundreds), 'hundred');
    n %= 100;
  }
  if (n || arr.length === 0)
    arr.push(...convert(n));
  return arr.join(' ');
}