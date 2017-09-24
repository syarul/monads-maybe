# monads-maybe

A simple wrapper of javascript statements branching that provide safe error handling and test friendly

## Usage

```npm install monads-maybe```

```javascript

import mayBe from 'monads-maybe'

const arr = ['one', 'two', 'three']

const log = console.log.bind(console)

const hasOne = arr.indexOf('one')

const isOne = mayBe.is(~hasOne, 'has one')

log(isOne) // has one

const hasFour = arr.indexOf('four')

let isFour = mayBe.not(~hasFour, log('has no four'))

log(isFour) // has no four

isFour = mayBe.is(~hasFour, 'has four') //statements get executed will return undefined

log(isFour) // undefined

isFour = mayBe.so(~hasFour, true, false)

log(isFour) // false
```

## License

The MIT License (MIT)

Copyright (c) 2017 Shahrul Nizam Selamat
  
