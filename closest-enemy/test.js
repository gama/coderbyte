const test         = require('mocha').it
const assert       = require('assert')
const ClosestEnemy = require('.')

test('closest enemy', () => {
    assert(ClosestEnemy(['000', '100', '200'])            === 1)
    assert(ClosestEnemy(['0000', '2010', '0000', '2002']) === 2)
})
