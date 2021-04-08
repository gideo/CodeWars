// 7kyu - Max Sum Between Two Negatives 

// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or -1, Nothing, or a similar empty value, if there is no such sum. No negative element should be present in this sum.

// Example:

// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.

function maxSumBetweenTwoNegatives(nums) {
  let negativeCount = 0, sum = 0, maxSum = 0;
  for (const num of nums) {
    if (num < 0) {
      negativeCount++;
      if (negativeCount > 1) {
        maxSum = Math.max(sum, maxSum);
        sum = 0;
      }
    } else
      if (negativeCount > 0)
        sum += num;
  }
  return negativeCount > 1 ? maxSum : -1;
}