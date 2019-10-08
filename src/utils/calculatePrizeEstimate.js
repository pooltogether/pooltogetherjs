/**
 * Calculates the estimated prize
 * @name utils.calculatePrizeEstimate
 * @param {bignumber} balance 
 * @param {bignumber} prize 
 * @param {bignumber} blocksFixedPoint18 
 * @param {bignumber} supplyRatePerBlock 
 */
export function calculatePrizeEstimate(
  balance,
  prize,
  blocksFixedPoint18,
  supplyRatePerBlock
) {
  const interestRate = blocksFixedPoint18
    .mul(supplyRatePerBlock)
    .div(ethers.constants.WeiPerEther)

  const estimatedInterestAccrued = interestRate.mul(balance)
    .div(ethers.constants.WeiPerEther)

  return prize.add(estimatedInterestAccrued)
}
