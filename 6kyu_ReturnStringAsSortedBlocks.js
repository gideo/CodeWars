// 6kyu - Return String as Sorted Blocks

// Task
// You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character.

// The hierarchy is:

// lowercase letters (a - z), in alphabetic order
// uppercase letters (A - Z), in alphabetic order
// digits (0 - 9), in ascending order
// Examples
// "21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
// "abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
// "" -> "" - an empty input should result in an empty output

function blocks(s) {
  let keysString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 
      arr = keysString.split(""),
      obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, 
             g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, 
             m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, 
             s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, 
             y: 0, z: 0, A: 0, B: 0, A: 0, B: 0, 
             C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, 
             I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, 
             O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, 
             U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, 
             0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 
             6: 0, 7: 0, 8: 0, 9: 0}
  for (let i=0; i<s.length; i++)
    obj[s[i]]++
    
  let res = [];
  
  while (arr.some(x => obj[x] > 0)){  
    if (res.length>0){res.push("-")}
    for (let j=0; j<arr.length; j++){
      if (obj[arr[j]] > 0){
        res.push(arr[j])
        obj[arr[j]]--
      }  
    }
  }
  
  return res.join("");
  
}