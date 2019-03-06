const test                = require('mocha').it
const assert              = require('assert')
const ChessboardTraveling = require('.')

test('chessboard traveling', () => {
    assert(ChessboardTraveling('(1 1)(3 3)') === 6)
    assert(ChessboardTraveling('(2 2)(4 3)') === 3)
})
