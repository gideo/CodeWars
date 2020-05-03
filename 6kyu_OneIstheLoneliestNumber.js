// 6kyu - One Is the Loneliest Number 

// One is the loneliest number
// Task
// Given a number, the range of vision of each digit is its own value. 1 reaches its contiguous,2 reaches distance 2 in both directions, and so on.

// The company that perceives each digit is the sum of the digits within its range of vision without counting itself.

// Your funtion must determine if a digit 1 in number is in the loneliest digits.

// Example
// number = 34315
// number	range	company	loneliness
// 3	4, 3, 1	4+3+1	8
// 4	3, 3, 1, 5	3+3+1+5	12
// 3	3, 4, 1, 5	3+4+1+5	13
// 1	3, 5	3+5	8
// 5	3, 4, 3, 1	3+4+3+1	11
// Is a 1 one of the loneliest numbers? Yes.

function loneliest(number) {
  let arr = [...number+``].map(Number);
  const lonely = arr.map((n,i)=>{
    let val = 0;
    for (let j=i-n; j<=i+n; j++)
      val += arr[j]||0;
    return val-n;
  })
  return lonely.some((n,i)=>arr[i]===1&&n===lonely.slice().sort((a,b)=>a-b)[0]);
}