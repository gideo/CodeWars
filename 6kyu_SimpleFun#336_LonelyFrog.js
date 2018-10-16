// 6kyu - Simple Fun #336: Lonely Frog

// Task
// You are a lonely frog.

// You live on a coordinate axis.

// The meaning of your life is to jump and jump ..

// The only rule is that each jump is 1 units more than the last time.

// Now, here comes your new task. Your starting point is 0, the target point is n.

// Your first jump distance is 1, and the second step is 2, and so on ..

// Of course, you can choose to jump forward or jump backward.

// You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?

// -10^7 <= n <= 10^7

// Example
// For n = 2, the output should be 3.

// step 1:  0 ->  1  (Jump forward, distance 1)
// step 2:  1 -> -1  (Jump backward, distance 2)
// step 3: -1 ->  2  (Jump forward, distance 3)
// For n = 6, the output should be 3.

// step 1: 0 -> 1  (Jump forward, distance 1)
// step 2: 1 -> 3  (Jump forward, distance 2)
// step 3: 3 -> 6  (Jump forward, distance 3)
// For n = 7, the output should be 5.

// step 1: 0 -> 1  (Jump forward, distance 1)
// step 2: 1 -> 3  (Jump forward, distance 2)
// step 3: 3 -> 6  (Jump forward, distance 3)
// step 4: 6 -> 2  (Jump backward, distance 4)
// step 5: 2 -> 7  (Jump forward, distance 5)

function jumpTo(n){
  let t = Math.abs(n), count = 0;
  for (let pos = 0; pos < t || (pos - t) % 2; count++, pos += count) {}
  return count;
}