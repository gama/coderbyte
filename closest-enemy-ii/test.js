const test           = require('mocha').it
const assert         = require('assert')
const ClosestEnemyII = require('.')

test('closest enemy', () => {
    assert(1 === ClosestEnemyII([
        '000',
        '100',
        '200'
    ]))

    assert(2 === ClosestEnemyII([
        '0000',
        '2010',
        '0000',
        '2002'
    ]))

    assert(4 === ClosestEnemyII([
        '000000000',
        '010000000',
        '000000000',
        '000000000',
        '000000002',
        '000000000',
        '000020000',
        '000202000'
    ]))
})
