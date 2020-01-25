const BN = require('bn.js');

/**
 * Converts a value to a bignumber instance.
 * @name utils.toBN
 * @param {string | bignumber} value The value to be converted to a bn.js bignumber instance
 */
function toBN(value) {
  if (value instanceof BN) {
    return value;
  } else {
    return new BN(value.toString());
  }
}

module.exports = toBN;
