// 6 kyu - Fibonacci, Tribonacci and Friends

// DESCRIPTION
// If you have completed the Tribonacci sequence kata, you would know 
// by now that mister Fibonacci has at least a bigger brother. If not, 
// give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci 
// starting with a signature of 4 elements and each following element is 
// the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would 
// 	probably sound a bit more italian, but it would also sound really 
// 	awful) with a signature of 5 elements and each following element is 
// the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a 
// signature of X elements - and remember each next element is the sum 
// of the last X elements - and returns the first n elements of the so seeded 
// sequence.

let Xbonacci = function(arr, times) {
  let x = arr.length, temp = 0;
  
  while(arr.length < times) {
    temp = 0;
    for(let i = x; i > 0; i -=1) {
      temp += arr[arr.length-i];
    }
    arr.push(temp);
  }
  
  return arr.slice(0, times);
}