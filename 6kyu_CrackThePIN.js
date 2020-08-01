// 6kyu - Crack the PIN 

// Given is a md5 hash of a five digits long PIN. It is given as string. Md5 is a function to hash your password: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"

// Why is this usefull? Hash functions like md5 can create a hash from string in a short time and it is impossible to find out the password, if you only got the hash. The only way is cracking it, means try every combination, hash it and compare it with the hash you want to crack. (There are also other ways of attacking md5 but that's another story) Every Website and OS is storing their passwords as hashes, so if a hacker gets access to the database, he can do nothing, as long the password is safe enough.

// What is a hash: https://en.wikipedia.org/wiki/Hash_function#:~:text=A%20hash%20function%20is%20any,table%20called%20a%20hash%20table.

// What is md5: https://en.wikipedia.org/wiki/MD5

// Note: Many languages have build in tools to hash md5. If not, you can write your own md5 function or google for an example.

// Here is another kata on generating md5 hashes: https://www.codewars.com/kata/password-hashes

// Your task is to return the cracked PIN as string.

// This is a little fun kata, to show you, how weak PINs are and how important a bruteforce protection is, if you create your own login.

// If you liked this kata, here is an extension: https://www.codewars.com/kata/59146f7b4670ba520900000a

const crypto = require('crypto');
function crack(hash){
  for(let n = 0; n < 100000; ++n) {
    let pin = (""+n).padStart(5, "0");
    if(crypto.createHash('md5').update(pin).digest('hex') === hash) return pin;
  }
}