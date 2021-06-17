// 5kyu - Pig Game

// Pig (dice game)
// Watch this Numberphile video for an introduction.

// The goal of Pig is to reach a total score of, say, 100, accumulated over multiple rounds by rolling a six-sided die. The players take turns in playing and, in each round, a player rolls the die as many times they want summing up the results. But, if they roll a 1, the score for that round is zero. The trick to the game is to know when to stop.

// Example: Say a player rolls a 5 and then a 6. If they stop, 11 points is the score for that round and is added to their total score. If the player continues and rolls a 3 and then a 1, the score for the round is zero and nothing is added to their total score.

// For more precise instructions on how the game is played, see the Wikipedia description

// The strategy that yields the maximum average score per round is to roll the die until 20 is reached (i.e., the score is 20 or above) and then stop. However, if your opponent is ahead of you, you might want to play more aggressively, and, if your opponent is way behind, you might choose to play more safely. This adds another level of complexity, but we won't pursue that here. Let's just concentrate on the average score when playing "stop at n".

// The expected (or average) score per round when you play "stop at 20" is a little over 8. This means that 20 is reached in approximately 4 out of 10 rounds on average.

// The goal of this kata is to write a function stop_at(m, n) which returns the expected score when rolling an m-sided die until n is reached.

// Input constraints:

// 2 <= m <= 12
// 1 <= n <= 100
// (To those who may object and say that there is no such thing as a 2- or 7-sided die: Here, a 2-sided die is a coin, and a 7-sided die is a 7-sided pencil sharpened at both ends.)

// Output constraints:

// The result has to be within 1e-3 from the correct value
// Note that a Monte-Carlo simulation as shown in the Numberphile video converges very slowly and is likely to either not provide a result that is sufficiently precise or time out.

const stopAt = (m, n) => {
    let num = 0, procStat = { 0: 1 }, iter = 1;
    while (!!Object.keys(procStat).length) {
        let obj = {};
        for (let [k, v] of Object.entries(procStat)) {
            k = Number(k);
            for (let i = 2; i <= m; i++) {
                if ((k + i) >= n)
                    num += v * (k + i) * ((1 / m) ** iter);
                else 
                    obj[k + i] = (obj[k + i] || 0) + v;
            }
        }
        procStat = obj;
        iter++;
    }
    return num;
}