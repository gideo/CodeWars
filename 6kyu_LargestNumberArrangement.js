// 6kyu - Largest Number Arrangement

// Create a function that takes a list of one or more non-negative integers, and arranges them such that they form the largest possible number.

// Examples
// [4, 50, 8, 145])       -->   8504145 (8-50-4-145)
// [4, 40, 7])            -->      7440 (7-4-40)
// [4, 46, 7])            -->      7464 (7-46-4)
// [5, 60, 299, 56])      -->  60565299 (60-56-5-299)
// [5, 2, 1, 9, 50, 56])  -->  95655021 (9-56-5-50-21)


let sort = (a,b) => {
  return parseInt('' + a + b) - parseInt('' + b + a) >= 0 ? -1 : 1 ;
}

const largestArrangement = array => {
  return +array.sort(sort).join('');
}