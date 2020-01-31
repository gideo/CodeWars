// 7kyu - Minimum to Multiple

// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

// a = 9
// x = 4

// minimum(a, x) #=> 1

// # 9-1 = 8 which is a multiple of 4
// a = 10
// x = 6

// minimum(a, x) #=> 2

// # 10+2 = 12 which is a multiple of 6
// Note
// 0 is always a multiple of x
// Constraints
// 1 <= a <= 107

// 1 <= x <= 108

function minimum(a, x) {
  for (var i = 0; i < x; i++)
    if((a - i) % x === 0 || (a + i) % x === 0)
      return i;
}