// 6kyu - Find Last Fibonaci Digit [Hardcore Version]

// ust like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

// You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

// lastFibDigit(1) == 1
// lastFibDigit(2) == 1
// lastFibDigit(3) == 2
// lastFibDigit(1000) == 5
// lastFibDigit(1000000) == 5

let lastFibDigit = index => [0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1][index%60];

