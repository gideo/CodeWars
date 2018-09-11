// 7kyu - Simple Directions Reversal
// In this Kata, you will be given directions and your task will be to
// find your way back.

// solve(["Begin on Road A","Right on Road B","Right on Road C","Left on 
// 	Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road 
// 	B', 'Left on Road A']
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) 
// =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
// More examples in test cases.

Good luck!
function solve(arr){
    let res = [], a = [];
    for (let i of arr) 
      a.push(i.split(" "));
    res.push("Begin " + a.slice(-1).pop().slice(1).join(" "));
    for (let i = a.length-1; i > 0; i--) 
      a[i][0] === "Right" ? res.push("Left " + a[i-1].slice(1).join(" ")) : res.push("Right " + a[i-1].slice(1).join(" "));
    return res;
}