const test             = require('mocha').it
const assert           = require('assert')
const PentagonalNumber = require('.')

test('pentagonal number', () => {
    assert(PentagonalNumber(2) === 6)
    assert(PentagonalNumber(5) === 51)
})
