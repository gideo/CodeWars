// 7kyu - Mobile Display Keystrokes

// Mobile Display Keystrokes

// Do you remember the old mobile display keyboards? Do you also remember how 
// inconvenient it was to write on it?
// Well, here you have to calculate how much keystrokes you have to do for a 
// specific word.

// Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

// e.g:

// mobileKeyboard("123") => 3 (1+1+1)
// mobileKeyboard("abc") => 9 (2+3+4)
// mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)


let mobileKeyboard = (function() {
    let key = ['123456789*0#', 'adgjmptw', 'behknqux', 'cfilorvy', 'osz'];
    this.getVal = function(val) {
        for(let i = 0; i < key.length; i++)
            if(key[i].indexOf(val) > -1)
                return i + 1;
    }
    
    return function(str) {
        return !str.length ? 0 : str.split("").map(a => getVal(a)).reduce((b,c) => b + c);
    }
})();