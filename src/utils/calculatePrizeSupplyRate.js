const constants = require('../constants')

/**
 * Calculates the supply rate per block less the fee fraction
 * @name utils.calculatePrizeSupplyRate
 * @param {bignumber} supplyRatePerBlock 
 * @param {bignumber} feeFraction 
 */
function calculatePrizeSupplyRate(supplyRatePerBlock, feeFraction) {
  return supplyRatePerBlock
    .mul(constants.WeiPerEther.sub(feeFraction))
    .div(constants.WeiPerEther)
}

module.exports = calculatePrizeSupplyRate