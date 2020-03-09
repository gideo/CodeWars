// 6kyu - Basics 06: Reversing and Combining Text 

// Your task is to Reverse and Combine Words.
// It's not too difficult, but there are some things you have to consider...

// So what to do?

// Input: String containing different "words" separated by spaces

// 1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
//    (odd number of words => last one stays alone, but has to be reversed too)
// 2. Start it again until there's only one word without spaces
// 3. Return your result...
// Some easy examples:

// Input:  "abc def"
// Output: "cbafed"

// Input:  "abc def ghi 123"
// Output: "defabc123ghi"

// Input:  "abc def gh34 434ff 55_eri 123 343"
// Output: "43hgff434cbafed343ire_55321"

// I think it's clear?!
// First there are some static tests, later on random tests too...


// Hope you have fun:-)!

function reverse_and_combine_text(str){
  const arr = str.split(' '), a = [];
   if(arr.length === 1)
       return str;
   for(let i=0; i<arr.length; i=i+2){
      arr.length % 2 === 0 ? a.push(arr[i].split('').reverse().join('').concat(arr[i+1].split('').reverse().join(''))) 
      :(i == arr.length-1 ? a.push(arr[i].split('').reverse().join('')): a.push(arr[i].split('').reverse().join('').concat(arr[i+1].split('').reverse().join(''))))
      };
   return a.length === 1 ? a.toString() : reverse_and_combine_text(a.join(' '));
}