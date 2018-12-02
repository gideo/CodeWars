// 6kyu_Photocopy Decay

// Background
// Every time you photocopy something the quality of the copy is never quite as good as the original.

// But then you make a copy of copy, and then a copy of that copy, et cetera... And the results get worse each time.

// This kind of degradation is called Generation Loss.

// Here is a fun example of generation loss copying VHS tapes.

// Kata task
// In this Kata you will be given 2 sheets of paper.

// The first one is the original, and the second one is the result of copying many times. Let's call these papers orig and copy.

// Only a small % of generation loss happens at each copy, but the effect is cummulative and the copies quickly become more like gibberish.

// Your task is to return true/false if orig is a possible ancestor of copy.

// Notes
// The orig document may include any kind of character
// Copied characters will degrade as follows: A-Z ⇒ a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
// For the uppercase to lowercase degradation the letters must be the same (i.e. A ⇒ a ... Z ⇒ z)
// Example
// (5% error rate)

function generationLoss(orig, copy) {
    let nonLetters  = "#+:. ", isAncestral = (a, b) => {
        let ai = nonLetters.indexOf(a), bi = nonLetters.indexOf(b)
        return a === b ||
               0 <= ai && 0 <= bi && ai <= bi ||
               a.match(/[a-z]/i) && 0 <= bi ||
               a.toLowerCase() === b;
    }
    if ( orig.length !== copy.length ) return false
    for (let i = 0; i < orig.length; i++)
        if ( !isAncestral(orig.charAt(i), copy.charAt(i)) )
            return false;
    return true;
}