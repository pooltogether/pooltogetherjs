const constants = require('../constants')
const toBN = require('./toBN')

/**
 * Calculates the supply rate per block less the fee fraction
 * @name utils.calculatePrizeSupplyRate
 * @param {bignumber} supplyRatePerBlock The supply rate per block as returned by Pool#supplyRatePerBlock
 * @param {bignumber} feeFraction The draw fee fraction as returned by Pool#getDraw
 */
function calculatePrizeSupplyRate(supplyRatePerBlock, feeFraction) {
  return toBN(supplyRatePerBlock)
    .mul(constants.WeiPerEther.sub(toBN(feeFraction)))
    .div(constants.WeiPerEther)
}

module.exports = calculatePrizeSupplyRate