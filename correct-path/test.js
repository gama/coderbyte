const test        = require('mocha').it
const assert      = require('assert')
const CorrectPath = require('.')

test('correct path', () => {
    assert(CorrectPath('???rrurdr?')   === 'dddrrurdrd')
    assert(CorrectPath('drdr??rrddd?') === 'drdruurrdddd')
})
