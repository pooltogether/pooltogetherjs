const BN = require('bn.js')

/**
 * @name constants.WeiPerEther
 * @constant
 * @type bignumber
 * @default
 */
const WeiPerEther = new BN('1000000000000000000', 10)

/**
 * @name constants.BlocksPerDay
 * @constant
 * @type bignumber
 * @default
 */
const BlocksPerDay = new BN('6171', 10)

module.exports = {
  WeiPerEther,
  BlocksPerDay
}