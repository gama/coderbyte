const test           = require('mocha').it
const assert         = require('assert')
const ClosestEnemyII = require('.')

test('closest enemy II', () => {
    assert(ClosestEnemyII(['000', '100', '200']) === 1)
    assert(ClosestEnemyII(['0000', '2010', '0000', '2002']) === 2)
})
