const BigNumber = require('bignumber.js');

console.log(new BigNumber(1).plus('').toString(10));
console.log(new BigNumber('12'));
console.log(new BigNumber('').isZero());