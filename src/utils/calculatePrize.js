const constants = require('../constants')

export function calculatePrize(balance, accountedBalance, feeFraction) {
  const interestAccrued = balance
    .sub(accountedBalance)

  const fee = interestAccrued
    .mul(feeFraction)
    .div(constants.WeiPerEther)

  return interestAccrued.sub(fee)
}
