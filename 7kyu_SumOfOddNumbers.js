// 7 kyu - Sum of Odd Numbers
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
row 1: 1 => 1
row 2: 3 5 => 8
row 3: 7 9 11 => 27
row 4: 13 15 17 19 => 64
*/

const rowSumOddNumbers = n => Math.pow(n, 3);