// 7kyu - Password should not contain any part of your username.

// You are writing a password validator for a website. You want to discourage users from using their username as part of their password, or vice-versa, because it is insecure. Since it is unreasonable to simply not allow them to have any letters in common, you come up with this rule:

// For any password and username pair, the length of the longest common substring should be less than half the length of the shortest of the two.

// In other words, you won't allow users to have half their password repeated in their username, or half their username repeated in their password.

// Write a function validate(username, password) which returns true if your rule is followed, false otherwise.

// Assume:

// Both the username and the password may contain uppercase letters, lowercase letters, numbers, spaces, and the following special/punctation characters: !@#$%^&*()_+{}:"<>?[];',.
// The username and password will each be less than 100 characters.

function validate(username,password) {
  if ( username.length>password.length ) return validate(password,username);
  let x = 0;
  for ( let i=0; i+x < username.length; i++ )
    for ( let j=i+1; j <= username.length; j++ )
      if ( password.includes(username.slice(i,j)) )
        x = Math.max(x,j-i);
  return x*2<username.length;
}