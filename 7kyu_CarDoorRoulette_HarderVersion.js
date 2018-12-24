// 7kyu - Car Door Roulette - Harder Version

// Easy version found here: https://www.codewars.com/kata/57d1203395497e99120000c9

// Let's recap the situation:

// When riding alongside a line of parked cars, people often refer to those that ride too close as playing 'Car Door Roulette'. Since the last kata, we have moved to the expensive part of London, where the roads are tight and cars park along both sides!

// In this kata, you will be given an array of two strings, that represents the lines of parked cars (each character is a car, the first string in the array are those on the left, second is those on the right), and a value 'x' which represents your position along that string, as the cyclist.

// '\' represents an open door of a car facing the same way you are going. This is most painful to hit.

// '/' represents an open door of a car facing you, this is less dangerous as you could, in theory, glance off it and be ok.

// Your job is to check whether there are any open doors on your ride, whether they knock you off, and how badly.

// You need to account for the fact that people opening car doors don't leave them open, so an open door value only lasts for a set period of time (or number of steps along the line).

// If you detect an open door '\', check whether it is level wth you, or one or two steps ahead of you. If it is, unlucky! If it is on the left, return 'Crash, Bang, Ouch!'. On the right, return 'Right Smash!'.

// As an open door '/' is less dangerous, you only need to check if it is level with you, or 1 step ahead. If it is, when it is on the left return 'Knocked Off, Dust Yourself Down.', when it is on the right return 'Dammit!'.

// Sometimes, cars stop so their drivers can chat. This leaves you with nowhere to go. Regardless of where down the road this happens, you will hit it. Return 'Super Smash!'.

// Finally, some good news - as we are in the posh bit of London, there are Lambourghinis everywhere! As the doors open upwards, not out, you can stop your bike and jump in! Free Lambo! The sign for a lambo door is '[' or ']'. Make sure the open side of the bracket is facing in (so '[' on the left, or ']' on the right. These can be seen from miles away, so before you check most other things - check for a free car! (The only thing you cannot avoid in this case is a Super Smash). If there is a lambo on the left - return 'Free Lambo on Left!', if on the right, return 'Free Lambo on Right!'.

// If none of these things occur - you've made it! Return 'Plain Sailing!'.

function carD(s, x){
  for(let i = 0; i < Math.max(s[0].length,s[1].length); i += 1) {
    if(s[0][i] === '\\' || s[0][i] === '/'){
      if(s[1][i] === '\\' || s[1][i] === '/')
        return 'Super Smash!';
    }
  }
  if(s[0].indexOf('[') > -1)
    return 'Free Lambo on Left!';
  if(s[1].indexOf(']') > -1)
    return 'Free Lambo on Right!';
  if (s[0].slice(x,x+3).indexOf("\\") != -1 ) 
    return "Crash, Bang, Ouch!"
  if (s[1].slice(x,x+3).indexOf("\\") != -1 ) 
    return "Right Smash!"
  if (s[0].slice(x,x+2).indexOf("/") != -1 ) 
    return "Knocked Off, Dust Yourself Down."
  if (s[1].slice(x,x+2).indexOf("/") != -1 ) 
    return "Dammit!"
  return "Plain Sailing!"
}