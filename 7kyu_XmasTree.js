// 7kyu - Xmas Tree 

// Create a function XMasTree(height) that returns a christmas tree of the correct height. The height is passed through to the function and the function should return a list containing each line of the tree.

// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
// XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
// The final idea is for the tree to look like this if you decide to print each element of the list:

// XMasTree(5) will result in:
// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1      
// ____#____        2 - Trunk/Stem of Tree

// XMasTree(3) will result in:
// __#__                  1
// _###_                  2
// #####          ----->  3 - Height of Tree
// __#__           1
// __#__           2 - Trunk/Stem of Tree
// Pad with underscores i.e _ so each line is the same length. The last line forming the tree having only hashtags, no spaces. Also remember the trunk/stem of the tree.

function xMasTree(n){
  let arr = [];
  for (let i = 0; i < n; i++){
    arr.push("_".repeat(n-i-1)+"#".repeat(i*2+1) + "_".repeat(n-i-1))};
  arr.push(arr[0], arr[0]);
  return arr;
}