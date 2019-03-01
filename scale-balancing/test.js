const test           = require('mocha').it
const assert         = require('assert')
const ScaleBalancing = require('.')

test('scale balancing', () => {
    assert(ScaleBalancing(['[3, 4]', '[1, 2, 7, 7]'])      === '1')
    assert(ScaleBalancing(['[13, 4]', '[1, 2, 3, 6, 14]']) === '3,6')
})
