// 6 kyu - Dead Ants

// Description:

// An orderly trail of ants is marching across the park picnic area.

// It looks something like this:

// ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
// But suddenly there is a rumour that a dropped chicken sandwich has been spotted on 
// the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

// Some of the slower ants are trampled, and their poor little ant bodies are broken 
// up into scattered bits.

// The resulting carnage looks like this:

// ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
// Can you find how many ants have died?

// Notes

// When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads 
// and 1 body = 2 dead ants, not 3

let deadAntCount = function(ants) {
  ants = ants ? ants.replace(/\ant|\s+|\.+/g,"") : 0;
  let a = (/a/.test(ants)) ? ants.match(/a/g).length : 0,
      n = (/n/.test(ants)) ? ants.match(/n/g).length : 0,
      t = (/t/.test(ants)) ? ants.match(/t/g).length : 0;
  return [a,n,t].sort((a,b) => a - b).pop();
}