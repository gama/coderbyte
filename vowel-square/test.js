const test        = require('mocha').it
const assert      = require('assert')
const VowelSquare = require('.')

test('vower square', () => {
    assert(VowelSquare(['aqrst', 'ukaei', 'ffooo']) === '1-2')
    assert(VowelSquare(['gg', 'ff'])                === 'not found')
})
