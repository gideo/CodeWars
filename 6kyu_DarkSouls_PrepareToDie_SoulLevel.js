// 6kyu - Dark Souls: Prepare to Die - Soul Level

// n Dark Souls, players level up trading souls for stats. 8 stats are upgradable this way: vitality, attunement, endurance, strength, dexterity, resistance, intelligence, and faith. Each level corresponds to adding one point to a stat of the player's choice. Also, there are 10 possible classes each having their own starting level and stats:

// Warrior     (Level 4):  11, 8, 12, 13, 13, 11, 9, 9
// Knight      (Level 5):  14, 10, 10, 11, 11, 10, 9, 11
// Wanderer    (Level 3):  10, 11, 10, 10, 14, 12, 11, 8
// Thief       (Level 5):  9, 11, 9, 9, 15, 10, 12, 11
// Bandit      (Level 4):  12, 8, 14, 14, 9, 11, 8, 10
// Hunter      (Level 4):  11, 9, 11, 12, 14, 11, 9, 9
// Sorcerer    (Level 3):  8, 15, 8, 9, 11, 8, 15, 8
// Pyromancer  (Level 1):  10, 12, 11, 12, 9, 12, 10, 8
// Cleric      (Level 2):  11, 11, 9, 12, 8, 11, 8, 14
// Deprived    (Level 6):  11, 11, 11, 11, 11, 11, 11, 11
// From level 1, the necessary souls to level up each time up to 11 are 673, 690, 707, 724, 741, 758, 775, 793, 811, and 829. Then from 11 to 12 and onwards the amount is defined by the expression round(pow(x, 3) * 0.02 + pow(x, 2) * 3.06 + 105.6 * x - 895) where x is the number corresponding to the next level.

// Your function will receive a string with the character class and a list of stats. It should calculate which level is required to get the desired character build and the amount of souls needed to do so. The result should be a string in the format: 'Starting as a [CLASS], level [N] will require [M] souls.' where [CLASS] is your starting class, [N] is the required level, and [M] is the amount of souls needed respectively.

const souls = (character, build) => {
  let low = [0, 0, 673, 690, 707, 724, 741, 758, 775, 793, 811, 829],
      obj = {
          'warrior': [11, 8, 12, 13, 13, 11, 9, 9, 4],
          'knight': [14, 10, 10, 11, 11, 10, 9, 11, 5],
          'wanderer': [10, 11, 10, 10, 14, 12, 11, 8, 3],
          'thief': [9, 11, 9, 9, 15, 10, 12, 11, 5],
          'bandit': [12, 8, 14, 14, 9, 11, 8, 10, 4],
          'hunter': [11, 9, 11, 12, 14, 11, 9, 9, 4],
          'sorcerer': [8, 15, 8, 9, 11, 8, 15, 8, 3],
          'pyromancer': [10, 12, 11, 12, 9, 12, 10, 8, 1],
          'cleric': [11, 11, 9, 12, 8, 11, 8, 14, 2],
          'deprived': [11, 11, 11, 11, 11, 11, 11, 11, 6]
      },
      dif = build.reduce((acc, vll, idx) => { return acc + (vll - obj[character][idx]) }, 0),
      exp = 0
  for (let itr = obj[character][8] + 1; itr <= dif + obj[character][8]; itr += 1)
      exp += (itr < 12) ? low[itr] : Math.round(Math.pow(itr, 3) * 0.02 + Math.pow(itr, 2) * 3.06 + 105.6 * itr - 895)
  return `Starting as a ${character}, level ${dif + obj[character][8]} will require ${exp} souls.`
}