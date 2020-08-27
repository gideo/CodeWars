// 6kyu - Hack my Account! 

// Oops! I accidentally added my username and password to the global object.

// Can you find them and hack into my account?

// Luckily I encrypted the password with a function called encrypt but I stupidly left that the the global object too!

let hack = () => [hack.myUsername, hack.encrypt(hack.myPassword)];
