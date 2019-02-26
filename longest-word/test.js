const test = require('mocha').it
const assert = require('assert')
const { LongestWord } = require('.')

test('longest word', function () {
    assert(LongestWord('') === undefined)
    assert(LongestWord('a') === 'a')
    assert(LongestWord('a b') === 'a')
    assert(LongestWord('a bc') === 'bc')
    assert(LongestWord('a.bc!') === 'bc')
    assert(LongestWord('a., #1bc!') === 'bc')
})
