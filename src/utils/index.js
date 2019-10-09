const calculatePrize = require('./calculatePrize')
const calculatePrizeEstimate = require('./calculatePrizeEstimate')
const calculatePrizeSupplyRate = require('./calculatePrizeSupplyRate')
const parseEther = require('./parseEther')
const toBN = require('./toBN')

module.exports = {
  calculatePrize,
  calculatePrizeEstimate,
  calculatePrizeSupplyRate,
  parseEther,
  toBN
}