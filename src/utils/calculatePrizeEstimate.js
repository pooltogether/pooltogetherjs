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
