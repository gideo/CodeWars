// 6kyu - Alphabet Wars - Reinforces Massacre

// Introduction
// There is a war and nobody knows - the alphabet war!
// The letters called airstrikes to help them in war - dashes and dots are spread everywhere on the battlefield.

// Task
// Write a function that accepts reinforces array of strings and airstrikes array of strings.
// The reinforces strings consist of only small letters. The size of each string in reinforces array is the same.
// The airstrikes strings consists of * and white spaces. The size of each airstrike may vary. There may be also no airstrikes at all.

// The first row in reinforces array is the current battlefield. Whenever some letter is killed by bomb, it's replaced by a letter from next string in reinforces array on the same position.
// The airstrike always starts from the beginning of the battlefield.
// The * means a bomb drop place. The each * bomb kills letter only on the battelfield. The bomb kills letter on the same index on battlefield plus the adjacent letters.
// The letters on the battlefield are replaced after airstrike is finished.
// Return string of letters left on the battlefield after the last airstrike. In case there is no any letter left in reinforces on specific position, return _.

// reinforces = [ "abcdefg",
//                "hijklmn"];
// airstrikes = [ "   *   ",
//                "*  *   "];
               
// The battlefield  is     : "abcedfg".
// The first airstrike    : "   *   "  
// After first airstrike  : "ab___fg"
// Reinforces are comming : "abjklfg"
// The second airstrike   : "*  *   "
// After second airstrike : "_____fg"
// Reinforces are coming  : "hi___fg"
// No more airstrikes => return "hi___fg"
// Other example
//   reinforces =    
//           ["g964xxxxxxxx",
//            "myjinxin2015",
//            "steffenvogel",
//            "smile67xxxxx",
//            "giacomosorbi",
//            "freywarxxxxx",
//            "bkaesxxxxxxx",
//            "vadimbxxxxxx",
//            "zozofouchtra",
//            "colbydauphxx" ];
// airstrikes =
//           ["* *** ** ***",
//            " ** * * * **",
//            " * *** * ***",
//            " **  * * ** ",
//            "* ** *   ***",
//            "***   ",
//            "**",
//            "*",
//            "*" ]
// That should lead to:

// alphabetWar(reinforces, airstrikes); // => codewarsxxxx
// Alphabet war Collection

function alphabetWar(r, a) {
  let prepArr = (a, ind) => {
    for(let j = 0; j < ind.length; j++)
    for(let i = 0; i < a.length; i++)
      a[i] = a[i].substr(0,ind[j]) + (a[i+1]?a[i+1][ind[j]]:'_') + a[i].substr(ind[j]+1, a[i].length);
    return a;
  }
  
  for(let i = 0; i < a.length; i++){
    let indexes = [...a[i]+" "].map((x,i,a)=>x==='*'||a[i-1]==='*'||a[i+1]==='*'?i:'x').filter(x=>x!='x'&&x<r[0].length);
    r = prepArr(r, indexes);
  }
  return r[0];
}
