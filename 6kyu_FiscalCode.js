// 6kyu - The Fiscal Code

// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale).

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

// Generate 3 capital letters from the surname, if it has:

// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
// Generate 3 capital letters from the name, if it has:

// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
// Notes:

// The date format of the Date of Birth (dob) is: d/m/Y for example 25/12/2008.

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

function transformLastName(name) {
    let consonants = filterConsonants(name.toUpperCase().split(''));
    let vowels = filterVowels(name.toUpperCase().split(''));
    const surnameArray = consonants.concat(vowels);
    if(surnameArray.length < 3) surnameArray.push('X');
    return surnameArray.slice(0, 3).join('');
}

function transformFirstName(name) {
    let consonants = filterConsonants(name.toUpperCase().split(''));
    if(consonants.length > 3) consonants.splice(1, 1);
    if(consonants.length < 3) {
        let vowels = filterVowels(name.toUpperCase().split(''));
        consonants = consonants.concat(vowels);
    }
    if(consonants.length < 3) consonants.push('X');
    return consonants.slice(0, 3).join('');
}

function transformDoBAndGender(dob, gender) {
    const date = dob.split('/'), year = date[2].slice(-2), month = months[date[1]];
    let day = parseInt(date[0]);
    if(gender === 'M' && day < 10) day = '0' + day;
    if(gender === 'F') day += 40;

    return year + month + day;
}

let filterVowels = input => input.filter(el => (/^[aeiou]$/gi).test(el));
let filterConsonants = input => input.filter(el => !(/^[aeiou]$/gi).test(el));
let fiscalCode = p => transformLastName(p.surname) + transformFirstName(p.name) + transformDoBAndGender(p.dob, p.gender);