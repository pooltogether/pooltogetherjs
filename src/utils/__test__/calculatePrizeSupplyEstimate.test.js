const parseEther = require('../parseEther');
const calculatePrizeEstimate = require('../calculatePrizeEstimate');

describe('calculatePrizeEstimate()', () => {
  it('should calc', () => {
    expect(
      calculatePrizeEstimate(
        parseEther('10'),
        parseEther('1'),
        parseEther('0.5'),
        parseEther('0.1'),
      ).toString(),
    ).toEqual(parseEther('1.5').toString());
  });
});
