// 6kyu - Find Number in an Array #4

// Give an array arr that contains some integers, one of the integers 
// appears times is more than the half of the total numbers of element
// (arr always has such a integer). Your task is to find it. For example:

//  arr = [0,1,3,3,3,3,3,1,0], should return 3
// Of course, these integers are not always continuous ;-)

//  arr = [1,2,1,3,1,4,1,5,1], should return 1
// Other numbers can be repeated too:

//  arr = [1,1,1,3,3,3,1,1,1,5,5,5,1,1], should return 1
// Note:

// Arguments arr always be an array that contains at least 5 elements and its 
// length always be an odd number;
// Please pay attention to optimizing the code to avoid time out.
// In the performance test(1000001 elements x 100 testcases), the time consuming 
// of each test case should be within 15ms. This means, Your algorithm should be 
// faster than O(nlogn)(some algorithms such as sorting and searching), your code 
// should run as fast as a rocket ;-)

function mostAppear(arr) {
  let idx = 0, count = 1;
  for (let i = 1; i < arr.length; i++) {
    (arr[idx] === arr[i]) ? ++count : --count;
    if (count === 0) {
      idx = i
      count = 1
    }
  }
  return arr[idx];
}