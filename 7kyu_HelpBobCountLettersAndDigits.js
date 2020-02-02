// 7kyu - Help Bob Count Letters and Digits

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

let countLettersAndDigits = s => s.replace(/[^a-z\d]/gi,"").length;