// 7kyu - Even or Odd - Which is Greater? 

// Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the individual odd numbers. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return:

// 'Even is greater than Odd'

// If the sum of odd numbers is greater than the sum of even numbers return:

// 'Odd is greater than Even'

// If the total of both even and odd numbers are identical return:

// 'Even and Odd are the same'

function evenOrOdd(str) {
  let odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b)),
      even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
  if(even > odd) {
    return 'Even is greater than Odd';
  } else if(even < odd) {
    return 'Odd is greater than Even';
  } else
    return 'Even and Odd are the same';
}