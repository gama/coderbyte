const test      = require('mocha').it
const assert    = require('assert')
const CheckNums = require('.')

test('check nums', () => {
    assert(CheckNums(-1, -1) === '-1')
    assert(CheckNums(0, 0)   === '-1')
    assert(CheckNums(1, 1)   === '-1')
    assert(CheckNums(-1, 0)  === 'true')
    assert(CheckNums(-1, 1)  === 'true')
    assert(CheckNums(0, 1)   === 'true')
    assert(CheckNums(0, -1)  === 'false')
    assert(CheckNums(1, -1)  === 'false')
    assert(CheckNums(1, 0)   === 'false')
    assert(CheckNums(3, 122) === 'true')
    assert(CheckNums(122, 3) === 'false')
    assert(CheckNums(67, 67) === '-1')
})
