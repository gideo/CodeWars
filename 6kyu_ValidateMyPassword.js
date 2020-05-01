// 6kyu - Validate my Password 

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.

let validPass = password => /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';