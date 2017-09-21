// 7kyu - Parts of a List

// Write a function partlist that gives all the ways to divide a list (an array) of at 
// least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples 
// 	or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Example:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->

// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", 
// "zone kiwi"], ["az toto picaro zone", "kiwi"]]

// or

// a = {"az", "toto", "picaro", "zone", "kiwi"} -->

// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", 
// "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

// or

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->

// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", 
// 	"zone kiwi"), ("az toto picaro zone", "kiwi")]

// or

// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", 
// 	"zone kiwi"), ("az toto picaro zone", "kiwi")]

function partlist(arr) {
    let res = [];
    for( var i=1; i<arr.length; i++){
      let nArr = [];
      nArr.push(arr.slice(0,i).join(" "), arr.slice(i).join(" "));
      res.push(nArr);
    }
    return res;
}