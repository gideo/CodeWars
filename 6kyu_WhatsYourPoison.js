// 6kyu - What's Your Poison?

// The Riddle

// The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible.

// However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rats, until exactly 24 hours later when the infected rats suddenly die. The King needs to determine which bottle of wine is poisoned by tomorrow, so that the festivities can continue as planned.

// Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.
// Your Task

// You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.

// Good Luck!

// Hint: think of rats as a certain representation of the number of the bottle...

let find = rats => rats.reduce((a, b) => a + Math.pow(2, b), 0);