// 5kyu - One Line Task: Sticks or Chopsticks

// Task

// You've just found out that 2 sticks = 1 chopstick. You have n exemplars of a thing, 
// which can be either a "chopstick" or a "stick".
// If it is the former(chopstick), calculate the number of sticks you can make out of them.
// If it the latter(stick), calculate the number of chopsticks you can make.
// If there's uneven number of sticks, return -1 instead.

// Code Limit
// Less than 44 characters.

// Example

// For things = "stick", n = 10, the output should be 5.
// You can convert 10 sticks to 5 chopsticks.
// For things = "stick", n = 11, the output should be -1.
// n is not a even number, so we can not convert stick to chopstick.
// For things = ""chopstick"", n = 5, the output should be 10.
// You can convert 5 chopsticks to 10 sticks.

stickOrChopsticks=(t,n)=>t[8]?n*2:n/2|-n%2