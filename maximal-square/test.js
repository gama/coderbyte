const test          = require('mocha').it
const assert        = require('assert')
const MaximalSquare = require('.')

test('maximal square', () => {
    assert(MaximalSquare(['0'])                                    === 0)
    assert(MaximalSquare(['1'])                                    === 1)
    assert(MaximalSquare(['00', '00'])                             === 0)
    assert(MaximalSquare(['01', '11'])                             === 1)
    assert(MaximalSquare(['0111', '1111', '1111', '1111'])         === 9)
    assert(MaximalSquare(['0111', '1101', '0111'])                 === 1)
    assert(MaximalSquare(['111000', '111100', '111100', '001110']) === 9)
})

