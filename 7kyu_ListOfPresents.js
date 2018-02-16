// 7kyu - List of Presents

// Leo's girlfriend asked him to buy a gift list during his next trip, now 
// he wants to know how many of them will he be able to buy.

// The first parameter is an integer, and the second parameter is an array
// containing the price of each gift. You should return an integer representing 
// the total amount of presents which he can buy.

// Example:

// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.
// NOTE: All numbers will be integers > 0, and the array will never be empty.

function howManyGifts(m, g){
  var rs = 0;
  g = g.sort((a,b) => a - b);
  while(m >= 0)
    m = m - g[rs++]
  return rs - 1;
}