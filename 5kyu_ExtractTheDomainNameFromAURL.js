// 5 kyu - Extract the Domain Name from a URL

// Description:

// Write a function that when given a URL as a string, parses out just the domain 
// name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

let domainName = function(url) {
  let match = url.match(/(https?\:\/\/)?([w]{0,3}\.)?([^\.]+)/)
  return match[match.length-1];
}