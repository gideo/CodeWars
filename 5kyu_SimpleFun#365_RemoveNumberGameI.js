// 5kyu - Simple Fun #365: Remove Number Game I 

// Task
// You are given two positive integers n and d(n is given by string fromat). And then, we are playing a Remove Number Game:

// 1st turn, we remove a digit from n, that the resulting number has at least one non-zero digit and is divisible by d.

// 2nd turn, we remove a digit from n, that the resulting number has at least one non-zero digit and is divisible by d-1.

// 3rd turn, ................................divisible by d-2.

// ith turn, ................................divisible by d-i+1.

// And so on. Until d-i+1 is decreased to 1 or you can not find a way to romove 1 digit from n and is divisible by d-i+1.

// Your task is, determine the maximum possible number of turns you can make.

// Still not understand the task? Look at the following examples:

// Examples
// For n = "102045" and d = 4, the output should be 4.

// turn 1: "102045" -> "10204" (remove 5 from n)
//                     "10204" is divisible by 4
// turn 2: "10204" -> "0204" (remove 1 from n)
//                    "204" is divisible by 3
// turn 3: "204" -> "20" (remove 4 from n)
//                  "20" is divisible by 2
// turn 4: "20" -> "2" (remove 0 from n)
//                 "2" is divisible by 1

// Perhaps there are many ways to playing this game.
// But the maximum possible number of turns should be 4.
// For n = "5555" and d = 3, the output should be 1.

// Only 1 turn: "5555" -> "555"(divisible by 3), "555" remove any digit 5 will became to "55", but "55" is not divisible by 2. So, after turn 1, the game is over.

// For n = "88" and d = 2, the output should be 1.

// Only 1 turn: "88" -> "8"(divisible by 2), "8" can not remove digit again.

// For n = "100000" and d = 4, the output should be 1.

// Note that "100000" can only remove digit 0 from it. If we removed digit 1, "00000" is not a valid number.

// Note
// 2 <= n.length <= 15

// 1 <= d <= 15

// Happy Coding ^_^

function removeNumberGame(n, d) {  
  let max = 0;
  if (n.length === 1)
    return 0;
  else if (d === 1)
    return 1;
  for (let i = 0; i < n.length; i++) {
    let m = [...n.slice(0, i), ...n.slice(i + 1)].join('');    
    if (parseInt(m, 10) !== 0 && m % d === 0)
        max = Math.max(1 + removeNumberGame(m, d - 1), max);
  }
  return max;
}