// 6 kyu - Regexp Basics - is it IPV4 address?

// Description:

// Implement String#ipv4_address?, which should return true if given object is an IPv4 
// address - four numbers (0-255) separated by dots.
// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.

String.prototype.ipv4Address=function(){
  if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(this)) { return false;}
  let str = this.split('.');
  for(let i = 0; i < str.length; i++) {
    if(str[i] < 0 || str[i] > 255 || (str[i][0] === '0' && str[i].length > 1)) { return false; }
  }
  return true;
}