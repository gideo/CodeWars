// 7kyu - Most Valuable Character

// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'
// More examples in test cases. Good luck!

let solve = s => Object.entries([...s].reduce((a, b, i) => (a[b] ? a[b][1] = i : a[b] = [i, i], a), {}))
                        .sort(([a1, b1], [a2, b2]) => b2[1] - b2[0] - b1[1] + b1[0] || a1.localeCompare(a2))[0][0];