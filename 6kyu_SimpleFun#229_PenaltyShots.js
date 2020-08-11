// 6kyu - Simple Fun #229: Penalty Shots 

// Task
// You are a lifelong fan of your local football club, and proud to say you rarely miss a game. Even though you're a superfan, you still hate boring games. Luckily, boring games often end in a draw, at which point the winner is determined by a penalty shoot-out, which brings some excitement to the viewing experience. Once, in the middle of a penalty shoot-out, you decided to count the lowest total number of shots required to determine the winner. So, given the number of shots each team has already made and the current score, how soon can the game end?

// If you are not familiar with penalty shoot-out rules, here they are:

// Teams take turns to kick from the penalty mark until each has taken five kicks. However, if one side has scored more successful kicks than the other could possibly reach with all of its remaining kicks, the shoot-out immediately ends regardless of the number of kicks remaining.

// If at the end of these five rounds of kicks the teams have scored an equal number of successful kicks, additional rounds of one kick each will be used until the tie is broken.

// Input/Output
// [input] integer shots

// An integer, the number of shots each team has made thus far.

// 0 ≤ shots ≤ 100.

// [input] integer array score

// An array of two integers, where score[0] is the current score of the first team and score[1] - of the second team.

// score.length = 2,

// 0 ≤ score[i] ≤ shots.

// [output] an integer

// The minimal possible total number of shots required to determine the winner.

// Example
// For shots = 2 and score = [1, 2], the output should be 3.

// The possible 3 shots can be:

// shot1: the first team misses the penalty shot2: the second team scores shot3: the first one misses again

// then, score will be [1, 3]. As the first team can't get 2 more points in the last remaining shot until the end of the initial five rounds, the winner is determined.

// For shots = 10 and score = [10, 10], the output should be 2.

// If one of the teams misses the penalty and the other one scores, the game ends.

let penaltyShots = (shots, score) => {
  let diff = Math.abs(score[0] - score[1]);
  return shots >= 5 ? 2 - diff : 6 - (diff + shots);
}