// 7kyu - Move 10 

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

let moveTen = s => s.split('').map(e => e.charCodeAt(0) + 10 > 122 ? String.fromCharCode(e.charCodeAt(0) - 16) : String.fromCharCode(e.charCodeAt(0) + 10)).join('');