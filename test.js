const mayBe = require('./mayBe')

const arr = ['one', 'two', 'three']

const log = console.log.bind(console)

const hasOne = arr.indexOf('one')

let isOne = mayBe.is(~hasOne, 'has one')

log(isOne) // has one

isOne = mayBe.not(~hasOne, 'has one')

log(isOne) // false

const hasFour = arr.indexOf('four')

let isFour = mayBe.not(~hasFour, 'has no four')

log(isFour) // has no four

isFour = mayBe.is(~hasFour, isFour = 'hello', isFour = 'world')

log(isFour) // world

isFour = mayBe.so(~hasFour, true, false)

log(isFour) // false