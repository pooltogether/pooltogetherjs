const constants = require('../constants')

export function calculatePrizeSupplyRate(supplyRatePerBlock, feeFraction) {
  return supplyRatePerBlock
    .mul(constants.WeiPerEther.sub(feeFraction))
    .div(constants.WeiPerEther)
}
