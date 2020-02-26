# PoolTogether.js

Helper functions for calculating Pool values.  Functions use the BigNumber library `bn.js`.

The PoolTogether algorithm is described in the Medium article [Inside PoolTogether v2.0](https://medium.com/pooltogether/inside-pooltogether-v2-0-e7d0e1b90a08).

## Installation

The library is built as a CommonJS module:

```bash
# yarn add pooltogether/pooltogetherjs
```

## Usage

```javascript
const pt = require('pooltogetherjs')
pt.utils.calculatePrize(balance, accountedBalance, feeFraction)
```

[API Reference](https://pooltogether.github.io/pooltogetherjs/)

## Recipe

### Calculating the Current Prize

To calculate the current (accrued so far) prize, first pull the following values from the Pool:

- `balance = Pool#balance`: the current balance of the Pool in Compound
- `accountedBalance = Pool#accountedBalance`: the balance of the Pool that has thus far been accounted for
- `currentCommittedDrawId = Pool#currentCommittedDrawId`: the currently "locked" prize that will be awarded next
- `draw = Pool#getDraw(currentCommittedDrawId)`: gets the current committed draw information

Now you can calculate the current prize:

```javascript
const pt = require('pooltogetherjs')
const prize = pt.utils.calculatePrize(
  balance,
  accountedBalance,
  draw.feeFraction
)
```

### Determining the Draw Date

The award date occurs two weeks after the prize is opened for deposits.  You can calculate the date for either the current committed prize (i.e. the next prize to be awarded) or the current open prize (the prize that everyone is currently depositing into).

- `currentCommittedDrawId = Pool#currentCommittedDrawId`: the currently "locked" prize that will be awarded next
- `draw = Pool#getDraw(currentCommittedDrawId)`: gets the current committed draw information

You can use the `draw.openedBlock` to determine the timestamp of the block, then add two weeks to it.  That'll give you the draw date.

### Calculating the Estimated Prize

To calculate the estimated prize, first pull the following values from the Pool:

- `balance = Pool#balance`: the current balance of the Pool in Compound
- `accountedBalance = Pool#accountedBalance`: the balance of the Pool that has thus far been accounted for
- `currentCommittedDrawId = Pool#currentCommittedDrawId`: the currently "locked" prize that will be awarded next
- `draw = Pool#getDraw(currentCommittedDrawId)`: gets the current committed draw information
- `supplyRatePerBlock = Pool#supplyRatePerBlock`: gets the current supply rate per block

You'll also need to determine how many blocks are *remaining* before the prize is awarded.

```javascript
const ethers = require('ethers')
// Use the next prize award date as the string.
// For daily pools every day at noon PST, for weekly every Friday at noon PST.
const awardAtMs = Date.parse('28 Feb 2020 12:00:00 PST');
const remainingTimeS = (awardAtMs - (new Date()).getTime()) / 1000
const remainingBlocks = remainingTimeS / 15.0 // about 15 second block periods
const blockFixedPoint18 = ethers.utils.parseEther(remainingBlocks) // convert to fixed point 18 for fractional blocks
```

Now you can calculate the final estimated prize:

```javascript
const pt = require('pooltogetherjs')
const prize = pt.utils.calculatePrize(
  balance,
  accountedBalance,
  draw.feeFraction
)

const prizeSupplyRate = pt.utils.calculatePrizeSupplyRate(
  supplyRatePerBlock,
  draw.feeFraction
)

const prizeEstimate = pt.utils.calculatePrizeEstimate(
  balance,
  prize,
  blocksFixedPoint18,
  prizeSupplyRate
)
```
