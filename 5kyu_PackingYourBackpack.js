// 5kyu - Packing your Backpack

// You're about to go on a trip around the world! On this trip you're bringing your trusted backpack, that anything fits into. The bad news is that the airline has informed you, that your luggage cannot exceed a certain amount of weight.

// To make sure you're bringing your most valuable items on this journey you've decided to give all your items a score that represents how valuable this item is to you. It's your job to pack you bag so that you get the most value out of the items that you decide to bring.

// Your input will consist of two arrays, one for the scores and one for the weights. You input will always be valid lists of equal length, so you don't have to worry about verifying your input.

// You'll also be given a maximum weight. This is the weight that your backpack cannot exceed.

// For instance, given these inputs:

// scores = [15, 10, 9, 5]
// weights = [1, 5, 3, 4]
// capacity = 8
// The maximum score will be 29. This number comes from bringing items 1, 3 and 4.

// Note: Your solution will have to be efficient as the running time of your algorithm will be put to a test.

function packBagpack(scores, weights, capacity) {
  let arr = Array.from({ length: capacity + 1 }, () => 0);
  for (let i = 0; i < weights.length; i++)
    arr = arr.map((l, w) => Math.max(l, weights[i] <= w && arr[w - weights[i]] + scores[i]));
  return arr.pop();
}