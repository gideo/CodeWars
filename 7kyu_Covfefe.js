// 7kyu - Covfefe

// Your are given a string. You must replace the word(s) coverage by covfefe, however, 
// if you don't find the word coverage in the string, you must add it at the end of 
// 	the string with a leading space.

function covfefe(str){
  return /coverage/gi.test(str) ? str.replace(/coverage/gi, "covfefe") : str + " covfefe";
}