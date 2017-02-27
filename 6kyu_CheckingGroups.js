// 6 kyu - Checking Groups

// Description:

// In English and programming, groups can be made using symbols such as "()" and "{}" 
// that change meaning. However, these groups must be closed in the correct order to 
// maintain correct syntax.

// Your job in this kata will be to make a program that checks a string for correct 
// grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to 
// close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols "()" 
// "{}" or "[]" to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or 
// False if it is grouped incorrectly.

function groupCheck(s) {
  let arr = [];
  if(s.length % 2 === 1) { return false; }
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{')
      arr.push(s[i])
    else if((s[i] === ')' && arr.pop() !== '(') || 
       (s[i] === '}' && arr.pop() !== '{') || 
       (s[i] === ']' && arr.pop() !== '['))
        return false;       
  }
  return true;
}
