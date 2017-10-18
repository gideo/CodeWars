// 4kyu - Twice Linear

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 
// and so on...

// #Task: Given parameter n the function dbl_linear (or dblLinear...) returns the 
// element u(n) of the ordered (with <) sequence u.

// #Example: dbl_linear(10) should return 22

// #Note: Focus attention on efficiency


function dblLinear(n) {
    let arr = [1], [p1, p2] = [0, 0];
    for(let i = 1; i <= n; i++){
      let [temp1, temp2] = [ (2 * arr[p1] + 1), (3 * arr[p2] + 1)]
      arr[i] = Math.min(2 * arr[p1] + 1, 3 * arr[p2] + 1);
      if(arr[i] === temp1) p1++;
      if(arr[i] === temp2) p2++;
    }
    return arr.pop();
}
