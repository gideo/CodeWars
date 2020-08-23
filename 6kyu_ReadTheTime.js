// 6kyu - Read the Time 

// Given time in 24-hour format, convert it to words.

// For example:
// 13:00 = one o'clock 
// 13:09 = nine minutes past one 
// 13:15 = quarter past one 
// 13:29 = twenty nine minutes past one
// 13:30 = half past one 
// 13:31 = twenty nine minutes to two
// 13:45 = quarter to two 
// 00:48 = twelve minutes to one
// 00:08 = eight minutes past midnight
// 12:00 = twelve o'clock
// 00:00 = midnight

// Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
// More examples in test cases. Good luck!

function solve(time) {
  const H = "midnight,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,one,two,three,four,five,six,seven,eight,nine,ten,eleven,midnight".split(',')
  const M = "o'clock,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,quarter,sixteen,seventeen,eighteen,nineteen,twenty,twenty one,twenty two,twenty three,twenty four,twenty five,twenty six,twenty seven,twenty eight,twenty nine,half".split(',')
  let parts = time.split(':'), h = +parts[0], m = +parts[1], mins = m%15==0 ? '' : m==1 || m==59 ? ' minute' : ' minutes'
  return h+m==0 ? `${H[h]}` : m==0 ? `${H[h]} ${M[m]}` : m<=30 ? `${M[m]}${mins} past ${H[h]}` : `${M[60-m]}${mins} to ${H[h+1]}`
}