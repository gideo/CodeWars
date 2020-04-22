// 6kyu - I Need More Speed! 

// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr){
  for (let left = 1; left <= arr.length / 2; left += 1) {
    let right = arr.length - left, temp = arr[left - 1];
    arr[left - 1] = arr[right];
    arr[right] = temp;
  }
  return arr;
}