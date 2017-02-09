// 6 kyu - Srot the inner ctonnet in dsnnieedcg oredr

// Description:

// Srot the inner ctnnoet in dsnnieedcg oredr

// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order" -> "srot the inner ctonnet in 
// dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"
// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces. 


// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

let sortTheInnerContent = function(words) {
    words = words.split(" ").map(a => 
                a.length === 1 ? a : 
                a.charAt(0) + 
                a.slice(1, a.length-1).split("").sort().reverse().join("") + 
                a.charAt(a.length-1));
    return words.join(" ");
}