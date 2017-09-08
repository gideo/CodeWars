// 7kyu - Concatenated Sum

// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its 
// digits is concatenated twice and then summed, the result will be the original 
// number. It turns out that 198 is the only number with this property. However, 
// the property can be generalized so that each digit is concatenated n times and 
// then summed.

// eg:-

// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.

// original number=-2997 , n=3

// -2997 = -222-999-999-777 and here each digit is concatenated three times.
// Write a function named checkConcatenatedSum/CheckConcatenatedSum that tests if 
// a number has this generalized property.

function checkConcatenatedSum(num, time) {
    let sum = 0, str = String(Math.abs(num));
    for(let i = 0; i < str.length; i++)
        sum += str[i].repeat(time) * ((num < 0) ? -1 : 1)
    return sum === num;
}