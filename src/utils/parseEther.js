const BN = require('bn.js');
const constants = require('../constants');

function parseEther(ether) {
  console.warn(
    `pooltogetherjs: utils.parseEther(ether): This function should not be used in production!`,
  );
  const scale = 1000000000;
  var value = parseFloat(ether);
  // hack to handle values less than 0
  var scaledValue = value * scale;
  return new BN(scaledValue).mul(constants.WeiPerEther).div(new BN(scale));
}

module.exports = parseEther;
