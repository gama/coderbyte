const test = require('mocha').it
const assert = require('assert')
const { FirstFactorialRecursive, FirstFactorialIteractive } = require('.')

test('recursive factorial', function () {
    assert(FirstFactorialRecursive(1) === 1)
    assert(FirstFactorialRecursive(2) === 2)
    assert(FirstFactorialRecursive(3) === 6)
    assert(FirstFactorialRecursive(4) === 24)
    assert(FirstFactorialRecursive(8) === 40320)
})

test('iteractive factorial', function () {
    assert(FirstFactorialIteractive(1) === 1)
    assert(FirstFactorialIteractive(2) === 2)
    assert(FirstFactorialIteractive(3) === 6)
    assert(FirstFactorialIteractive(4) === 24)
    assert(FirstFactorialIteractive(8) === 40320)
})
