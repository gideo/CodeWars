// 6kyu - The rarest pepe

// The pepe market is on the verge of collapse. In a last ditch attempt to make some 
// quick cash, you decide to sift through the thousands of pepes on the Internet in 
// order to identify the rarest, which are worth more. Since this would be tedious to
// do by hand, you decide to use your programming skills to streamline the process.

// Your task in this kata is to implement a function that, given a list of pepes 
// (pepes), returns the rarest pepe in the list. If two or more pepes are equally 
// rare, return a list of these pepes, sorted in alphabetical order. Also, if the 
// rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare 
// pepe, so your function should return 'No rare pepes!'.

function findRarestPepe(pepes) {
    let obj = {}, temp = [], lowest = Number.POSITIVE_INFINITY;
    
    for(let i = 0; i < pepes.length; i++)
        (obj.hasOwnProperty(pepes[i])) ? obj[pepes[i]] += 1 : obj[pepes[i]] = 1; 
    for(let x in obj) {
        if(obj[x] < lowest) {
            temp = [x];
            lowest = obj[x];
        } else if (obj[x] === lowest) {
            temp.push(x)
        }
    }
    
    return (lowest >= 5) ? 'No rare pepes!' : (temp.length < 2) ? temp.pop() : temp.sort() ;
}