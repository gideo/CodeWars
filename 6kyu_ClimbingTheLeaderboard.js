// 6kyu - Climbing the Leaderboard

// Artlessly stolen and adapted from Hackerrank.

// Kara Danvers is new to CodeWars, and eager to climb up in the ranks. We want 
// to determine Kara's rank as she progresses up the leaderboard.

// This kata uses Dense Ranking, so any identical scores count as the same rank 
// (e.g, a scoreboard of [100, 97, 97, 90, 82, 80, 72, 72, 60] corresponds with 
// 	rankings of [1, 2, 2, 3, 4, 5, 6, 6, 7]

// You are given an array, scores, of leaderboard scores, descending, and 
// another array, kara, representing Kara's Codewars score over time, ascending. 
// Your function should return an array with each item corresponding to the rank 
// of Kara's current score on the leaderboard.

// Note: This kata's performance requirements are significantly steeper than 
// the Hackerrank version. Some arrays will contain millions of elements; 
// optimize your code so you don't time out. If you're timing out before 200 
// tests are completed, you've likely got the wrong code complexity. If you're 
// timing out around 274 tests (there are 278), you likely need to make some 
// tweaks to how you're handling the arrays.

// Examples:
// const scores = [100, 90, 90, 80];
// const kara   = [70, 80, 105];

// Should return: [4, 3, 1]
// const scores = [982, 490, 339, 180] 
// const kara   = [180, 250, 721, 2500]

// Should return: [4, 4, 2, 1]
// const scores = [1982, 490, 339, 180] 
// const kara   = [180, 250, 721, 880]

// Should return: [4, 4, 2, 2]
// (For the uninitiated, Kara Danvers is Supergirl. This is important, because 
// Kara thinks and moves so fast that she can complete a kata within 
// microseconds. Naturally, latency being what it is, she's already opened 
// many kata across many, many tabs, and solves them one by one on a special 
// keyboard so she doesn't have to wait hundreds of milliseconds in between 
// solving them. As a result, the only person's rank changing on the 
// leaderboard is Kara's, so we don't have to worry about shifting values of 
// other codewarriors. Thanks, Supergirl.)

Good luck! Please upvote if you enjoyed it :)

FUNDAMENTALSOPTIMIZATIONARRAYS

function climbingLeaderboard (scores,kara) {
  let s = scores.filter((a,i)=>a!=scores[i+1])
  for (var l = 0, r = [], i = kara.length - 1; i >= 0; r.push(l+1),i--) while (kara[i]<s[l] && ++l); 
  return r.reverse();
}