const BN = require('bn.js');
const toBN = require('../toBN');

describe('toBN()', () => {
  describe('when value is a bignumber', () => {
    it('should return the value', () => {
      const input = new BN('100');
      expect(toBN(input)).toEqual(input);
    });
  });
  describe('when value is not a bignumber', () => {
    describe('when the value can be converted to a string', () => {
      it('should return a bignumber', () => {
        const input = 1;
        expect(toBN(input)).toEqual(new BN(input));
      });
    });
    describe('when the value cannot be converted to a string', () => {
      it('should throw a TypeError', () => {
        const input = undefined;
        expect(() => toBN(input)).toThrow(TypeError);
      });
    });
  });
});
