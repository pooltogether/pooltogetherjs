const parseEther = require('../parseEther');
const calculatePrizeSupplyRate = require('../calculatePrizeSupplyRate');

describe('calculatePrizeSupplyRate()', () => {
  it('should calc', () => {
    expect(
      calculatePrizeSupplyRate(parseEther('0.0003'), parseEther('0.1')),
    ).toEqual(parseEther('0.00027'));
  });
});
