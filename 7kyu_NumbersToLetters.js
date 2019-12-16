// 7kyu - Numbers to Letters

// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

let switcher = x => x.map(i => '_zyxwvutsrqponmlkjihgfedcba!? '[i]).join('');