const BN = require("bn.js")
const parseEther = require('../parseEther')
const calculatePrize = require('../calculatePrize')

describe('calculatePrize()', () => {
  it('should calc', () => {
    expect(
      calculatePrize(
        new BN('100'),
        new BN('50'),
        parseEther('0.1') // 0.1 in fixed point 18
      )
    ).toEqual(new BN('45'))
  })
})