// 5 kyu - Rot13
//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
//letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

const rot13 = message => message.replace(/[a-z]/gi, a => (/[a-m]/i.test(a)) ? String.fromCharCode(a.charCodeAt(0) + 13) : String.fromCharCode(a.charCodeAt(0) - 13));