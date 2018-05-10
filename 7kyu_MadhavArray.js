// 7kyu - Madhav Array

// A Madhav array a has the following property.

// a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

// Write a function/method named isMadhavArray/IsMadhavArray/is_madhav_array() 
// that returns true if its array argument is a Madhav array, otherwise it returns false.

// Edge cases: An array of length 0 or 1 should not be considered a Madhav array 
// as there is nothing to compare.

function isMadhavArray(arr) {
  let s = 1,l = 2, bool = arr.length > 2;
  while (s < arr.length && bool) {
    let val = 0;
    for (let i = 0; i < l; i++)
      val += arr[s + i];
    bool = (val === arr[0]);
    s += l++;
  }
  return bool;
}