const test = require('mocha').it
const assert = require('assert')
const { LetterChanges, LetterChangesRegex } = require('.')

test('letter changes (regular)', function () {
    assert(LetterChanges('ab yz,d1') === 'bc zA,E1')
    assert(LetterChanges('hello*3') === 'Ifmmp*3')
    assert(LetterChanges('fun times!') === 'gvO Ujnft!')
})

test('letter changes (regex)', function () {
    assert(LetterChangesRegex('ab yz,d1') === 'bc zA,E1')
    assert(LetterChangesRegex('hello*3') === 'Ifmmp*3')
    assert(LetterChangesRegex('fun times!') === 'gvO Ujnft!')
})
