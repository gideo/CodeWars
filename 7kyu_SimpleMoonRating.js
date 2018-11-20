// 7kyu - Simple Moon Rating

// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write function moonRating which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

// examples

// More examples in test cases.

function moonRating(rating) {
  let arr = [];
  rating = Math.round(rating);
  while (rating >= 2) {
    arr.push('o');
    rating -= 2;
  }
  if (rating === 1)
      arr.push('c');

  return arr.join('') + 'x'.repeat(5 - arr.length);
}