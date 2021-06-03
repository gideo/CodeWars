// 6kyu - Common Directory Path

// Returns the commom directory path for specified array of full filenames.

//  @param {array} pathes
//  @return {string}
// Examples:

//   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
//   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
//   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
//   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
// (c)RSS

function getCommonDirectoryPath(paths) {
  let split = paths.map(path => path.split('/')), arr = [], idx = 0;
  while (true) {
    let p = split[0][idx];
    if (split.every(splitPath => splitPath[idx] === p)) {
      arr.push(p);
      idx += 1;
    } else break;
  }
  return arr.length === 0 ? '' : arr.join('/') + '/';
}