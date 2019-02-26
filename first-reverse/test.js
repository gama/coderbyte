const test = require('mocha').it
const assert = require('assert')
const { FirstReverseRecursive, FirstReverseIterative } = require('.')

test('recursive reverse string', function () {
    assert(FirstReverseRecursive('') === '')
    assert(FirstReverseRecursive('a') === 'a')
    assert(FirstReverseRecursive('ab') === 'ba')
    assert(FirstReverseRecursive('abc def') === 'fed cba')
})

test('iterative reverse string', function () {
    assert(FirstReverseIterative('') === '')
    assert(FirstReverseIterative('a') === 'a')
    assert(FirstReverseIterative('ab') === 'ba')
    assert(FirstReverseIterative('abc def') === 'fed cba')
})
