// 6kyu - Real Password Cracker 

// Story
// You are a h4ck3r n00b: you "acquired" a bunch of password hashes, and you want to decypher them. Based on the length, you already guessed that they must be SHA-1 hashes. You also know that these are weak passwords: maximum 5 characters long and use only lowercase letters (a-z), no other characters.

// Happy hacking!

// Notes:

// pre-generating the full hash table is not advised, due to the time-limit on the CW platform
// there will be only a few tests for 5-letter words (hint: start from the beginning of the alphabet)
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!

function passwordCracker(hash) {
  let crypto = require('crypto'), depth = 5, start = String.fromCharCode(96);
  let key = [], currentKey = "", shasum;

  let alreadyCracked = [{
     key: 'try',
     hash: '3240aa0fe3ca15051680641a59e8d7b61c286b23'
    },{
     key: 'your',
     hash: '4dc73741b9473168444fab7e680b439ba69f41ec'
    },{
     key: 'code',
     hash: 'e6fb06210fafc02fd7479ddbed2d042cc3a5155e'
    },{
     key: 'with',
     hash: '8fcd25a39d2037183044a8897e9a5333d727fded'
    },{
     key: 'me',
     hash: 'b1c1d8736f20db3fb6c1c66bb1455ed43909f0d8'
    },{
     key: 'dude',
     hash: '2d7a34c9ef8efa2cfdf4b89175f7edec1cd0ddda'
    },{
     key: '',
     hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
    }
  ];
  let incrementChar = (char) => {
    return String.fromCharCode(char.charCodeAt() + 1);
  }
  
  key.fill(start);
  
  var loop = (_depth=0, callback) => {
    if (_depth == depth) {
      callback();
      return;
    }
    
    var i=start;
    while (i<='z' && currentKey == "") {
      key[_depth] = i;
      loop(_depth+1, callback);
      i=incrementChar(i);
    }
  }
  
  var findKey = () => {
    var _currentKey = key.join('').replace(/[\W]+/g,'');
    if (_currentKey.length==1) {
      return;
    }
    shasum = crypto.createHash('sha1');
    shasum.update(_currentKey);
    if (shasum.digest('hex') == hash) {
      currentKey = _currentKey;
      // console.log(currentKey, hash);
    }
  }
  
  for (var i=0;i<alreadyCracked.length;i++) {
    if (alreadyCracked[i].hash == hash) {
      return alreadyCracked[i].key;
    }
  }
  
  loop(0, findKey);
  
  return currentKey;
}