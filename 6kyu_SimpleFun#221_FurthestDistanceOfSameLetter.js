// 6kyu - Simple Fun #221: Furthest Distance of Same Letter

// Task

// Given a string s of lowercase letters ('a' - 'z'), get the maximum distance between 
// two same letters, and return this distance along with the letter that formed it.

// If there is more than one letter with the same maximum distance, return the one that 
// appears in s first.

// Input/Output

// [input] string s
// A string of lowercase Latin letters, where at least one letter appears twice.

// [output] a string
// The letter that formed the maximum distance and the distance itself.

// Example

// For s = "fffffahhhhhhaaahhhhbhhahhhhabxx", the output should be "a23".

// The maximum distance is formed by the character 'a' from index 5 to index 27 
// (0-based). Therefore, the answer is "a23".

function distSameLetter(s) {
    let uniques = s.split('').filter((a,i,arr) => arr.indexOf(a) === i).join(""),
        arr = ['', 0];
    for(let i = 0; i < uniques.length; i++) {
        let diff = s.lastIndexOf(uniques[i]) - s.indexOf(uniques[i]) + 1;
        if(diff > arr[1]) {
            arr = [uniques[i],diff]
        }
    }
    return arr[0]+arr[1];
}