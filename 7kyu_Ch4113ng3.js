// 7kyu - Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' 
// with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
  return txt.replace(/a/g,"4").replace(/A/g,"4").replace(/e/g,"3").replace(/E/g,"3").replace(/l/g,"1");
}