const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle
};

// console.log(head([1, 2, 3])); // => 1
// console.log(tail([1, 2, 3])); // => [2, 3]
