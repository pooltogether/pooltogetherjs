const constants = require('../constants')

/**
 * Calculates the size of the prize.
 * @name utils.calculatePrize
 * @param {bignumber} balance The current Pool#balance
 * @param {bignumber} accountedBalance The current Pool#accountedBalance
 * @param {bignumber} feeFraction Fraction represented as fixed point 18 (as in wei)
 */
function calculatePrize(balance, accountedBalance, feeFraction) {
  const interestAccrued = balance
    .sub(accountedBalance)

  const fee = interestAccrued
    .mul(feeFraction)
    .div(constants.WeiPerEther)

  return interestAccrued.sub(fee)
}

module.exports = calculatePrize