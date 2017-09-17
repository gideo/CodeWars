// 7kyu - Mutate My Strings

// I will give you two strings. I want you to transform stringOne into stringTwo one 
// letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(str1, str2) {
  let arr = [str1];
  for (let i = 0; i < str1.length; i++)
    if(str1[i] !== str2[i])
     arr.push(str2.slice(0, i + 1) + str1.slice(i + 1));
  return arr.join('\n') + '\n';
}