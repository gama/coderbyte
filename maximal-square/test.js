const test          = require('mocha').it
const assert        = require('assert')
const MaximalSquare = require('.')

test('maximal square', () => {
    assert(MaximalSquare(['0111', '1111', '1111', '1111']) === 9)
    assert(MaximalSquare(['0111', '1101', '0111']) === 1)
})
