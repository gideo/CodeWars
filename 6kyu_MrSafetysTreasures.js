// 6kyu - Mr. Safety's Treasures

// Introduction

// Mr. Safety is a lower of numeric locks and Nokia 3310. He locked almost everything 
// in his house. He is so smart and he doesn't need to know the combination of numbers. 
// He has an algorithm to generate new passcodes on his Nokia. 
// postimage

// Task

// Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an 
// algorithm to open his numeric locks. Can you do it without his Nokia 3310?

// Input

// The str input string consists of lowercase and uperrcase characters. It's a name of 
// object that you want to unlock.

// Output

// Return a string consists of only digits.
// Example

// unlock("Nokia");  // => 66542
// unlock("Valut");  // => 82588
// unlokc("toilet"); // => 864538

function unlock(str) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWYXZ",
        num = "22233344455566677778889999"
    return str.toUpperCase().split("").map(a=>num[char.indexOf(a)]).join("")
}