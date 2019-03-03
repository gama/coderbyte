const test        = require('mocha').it
const assert      = require('assert')
const VowelSquare = require('.')

test('vower square', () => {
    assert(VowelSquare(['uu', 'ea'])                === '0-0')
    assert(VowelSquare(['bu', 'ea'])                === 'not found')
    assert(VowelSquare(['uu', 'ez'])                === 'not found')
    assert(VowelSquare(['gg', 'ff'])                === 'not found')
    assert(VowelSquare(['aqrst', 'ukaei', 'ffooo']) === '1-2')
    assert(VowelSquare(['zmnboni', 'qxrqopz', 'bfoaaok', 'oxbduil']) === '2-4')
})
