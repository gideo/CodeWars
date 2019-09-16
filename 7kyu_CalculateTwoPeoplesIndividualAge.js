// 7kyu - Calculate Two Peole's Individual Ages

// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values if those exist or an empty values if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

let getAges = (sum, dif) => (sum == dif && sum >= 0) ? [sum, 0] : (sum <= dif || sum < 0 || dif < 0) ? null : [(sum + dif)/2,(sum - dif)/2];