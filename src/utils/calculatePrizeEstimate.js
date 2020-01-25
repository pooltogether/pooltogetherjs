const constants = require('../constants');
const toBN = require('./toBN');

/**
 * Calculates the estimated prize
 * @name utils.calculatePrizeEstimate
 * @param {bignumber} balance The current Pool#balance
 * @param {bignumber} prize The current Pool prize as calculated by @see utils.calculatePrize
 * @param {bignumber} blocksFixedPoint18 The remaining number of blocks expressed as a fixed point 18 number (like ether denominated in wei)
 * @param {bignumber} supplyRatePerBlock The fraction that is accrued per block
 * @returns {bignumber} The projected prize
 */
function calculatePrizeEstimate(
  balance,
  prize,
  blocksFixedPoint18,
  supplyRatePerBlock,
) {
  const interestRate = toBN(blocksFixedPoint18)
    .mul(toBN(supplyRatePerBlock))
    .div(constants.WeiPerEther);

  const estimatedInterestAccrued = interestRate
    .mul(toBN(balance))
    .div(constants.WeiPerEther);

  return toBN(prize).add(estimatedInterestAccrued);
}

module.exports = calculatePrizeEstimate;
