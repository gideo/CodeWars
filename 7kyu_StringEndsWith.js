// 7kyu - Strings ends with?

// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return (str.indexOf(ending) < 0) ? false : (str.lastIndexOf(ending) + ending.length) === str.length
}