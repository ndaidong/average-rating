/**
 * Import specs
 */

const {
  existsSync,
  readdirSync,
} = require('fs');

const {
  extname,
  join,
} = require('path');

const dirs = ['average', 'rate', 'score'];
dirs.forEach((dir) => {
  const where = './test/specs/' + dir;
  if (existsSync(where)) {
    readdirSync(where).forEach((file) => {
      if (extname(file) === '.js') {
        require(join('.' + where, file));
      }
    });
  }
});
