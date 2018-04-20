// 4kyu - Strip Url Params

// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:
// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}

