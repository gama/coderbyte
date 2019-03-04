const test           = require('mocha').it
const assert         = require('assert')
const ScaleBalancing = require('.')

test('scale balancing', () => {
    assert(ScaleBalancing([[0, 1],  [1]])              === '1')
    assert(ScaleBalancing([[2, 0],  [2]])              === '2')
    assert(ScaleBalancing([[3, 2],  [1]])              === '1')
    assert(ScaleBalancing([[2, 5],  [1, 4]])           === '1,4')
    assert(ScaleBalancing([[2, 5],  [9, 5, 1, 4]])     === '1,4')
    assert(ScaleBalancing([[5, 9],  [1, 2, 6, 7]])     === '2,6')
    assert(ScaleBalancing([[3, 4],  [1, 2, 7, 7]])     === '1')
    assert(ScaleBalancing([[13, 4], [1, 2, 3, 6, 14]]) === '3,6')
    assert(ScaleBalancing([[0, 1],  [3]])              === 'not possible')
    assert(ScaleBalancing([[1, 0],  [2, 4, 8]])        === 'not possible')
})
