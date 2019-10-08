const constants = require('../constants')

/**
 * Calculates the estimated prize
 * @name utils.calculatePrizeEstimate
 * @param {bignumber} balance 
 * @param {bignumber} prize 
 * @param {bignumber} blocksFixedPoint18 
 * @param {bignumber} supplyRatePerBlock 
 */
function calculatePrizeEstimate(
  balance,
  prize,
  blocksFixedPoint18,
  supplyRatePerBlock
) {
  const interestRate = blocksFixedPoint18
    .mul(supplyRatePerBlock)
    .div(constants.WeiPerEther)

  const estimatedInterestAccrued = interestRate.mul(balance)
    .div(constants.WeiPerEther)

  return prize.add(estimatedInterestAccrued)
}

module.exports = calculatePrizeEstimate