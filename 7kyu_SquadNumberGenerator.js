// 7kyu - Squad Number Generator

// At the start of each season, every player in a football team is assigned their own unique squad number. Due to superstition or their history certain numbers are more desirable than others.

// Write a function generateNumber() that takes two arguments, an array of the current squad numbers (squad) and the new player's desired number (n). If the new player's desired number is not already taken, return n, else if the desired number can be formed by adding two digits between 1 and 9, return the number formed by joining these two digits together. E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

// Note: Often there will be several different ways to form a replacement number. In these cases the number with lowest first digit should be given priority. E.g. If n = 15, but squad already contains 15, return 69, not 78.

function generateNumber(squad, n){
  squad = new Set(squad);
  if (!squad.has(n))
    return n;

  for (let i = 1; i <= 9; i++) {
    let j = n - i, k = i * 10 + j;
    if (0 < j && j < 10 && !squad.has(k)) {
      return k;
    }

  }
  return null;
}