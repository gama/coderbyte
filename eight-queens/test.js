const test        = require('mocha').it
const assert      = require('assert')
const EightQueens = require('.')

test('eight queens', () => {
    assert(EightQueens(['(2,1)', '(4,3)', '(6,3)', '(8,4)', '(3,4)', '(1,6)', '(7,7)', '(5,8)']) === '(2,1)')
    assert(EightQueens(['(2,1)', '(5,3)', '(6,3)', '(8,4)', '(3,4)', '(1,8)', '(7,7)', '(5,8)']) === '(5,3)')
})
