const constants = require('../constants')

/**
 * Calculates the size of the prize.
 * @name utils.calculatePrize
 * @param {bignumber} balance 
 * @param {bignumber} accountedBalance 
 * @param {bignumber} feeFraction
 */
export function calculatePrize(balance, accountedBalance, feeFraction) {
  const interestAccrued = balance
    .sub(accountedBalance)

  const fee = interestAccrued
    .mul(feeFraction)
    .div(constants.WeiPerEther)

  return interestAccrued.sub(fee)
}
