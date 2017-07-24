// 7kyu - Bubblesort Once

// Overview

// The Bubblesort Algorithm is one of many algorithms used to sort a list of similar 
// items (e.g. all numbers or all letters) into either ascending order or descending 
// order. Given a list (e.g.):

// [9,7,5,3,1,2,4,6,8]
// To sort this list in ascending order using Bubblesort, you first have to compare 
// the first two terms of the list. If the first term is larger than the second term, 
// you perform a swap. The list then becomes:

// [7,9,5,3,1,2,4,6,8] // The "9" and "7" have been swapped because 9 is larger than 7 
// and thus 9 should be after 7
// You then proceed by comparing the 2nd and 3rd terms, performing a swap when 
// necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When 
// you reach the end of the list, it is said that you have completed 1 complete pass.

// Task

// Program an algorithm in Javascript (or your selected language, if it is available) 
// that performs exactly 1 complete pass (no more, no less :D) of the Bubblesort 
// algorithm to a list of positive integers. You may assume all arguments provided are 
// arrays containing at least 2 positive integers.

function bubblesortOnce(intArr) {
  for(let i = 0; i < intArr.length - 1; i++)
    if(intArr[i] > intArr[i+1])
      [intArr[i], intArr[i+1]] = [intArr[i+1], intArr[i]];
  return intArr;
}