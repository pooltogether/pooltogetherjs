const constants = require('../constants')
const toBN = require('./toBN')

/**
 * Calculates the size of the prize.
 * @name utils.calculatePrize
 * @param {bignumber} balance The current Pool#balance
 * @param {bignumber} accountedBalance The current Pool#accountedBalance
 * @param {bignumber} feeFraction Fraction represented as fixed point 18 (as in wei)
 */
function calculatePrize(balance, accountedBalance, feeFraction) {
  const interestAccrued = toBN(balance)
    .sub(toBN(accountedBalance))

  const fee = interestAccrued
    .mul(toBN(feeFraction))
    .div(constants.WeiPerEther)

  return interestAccrued.sub(fee)
}

module.exports = calculatePrize