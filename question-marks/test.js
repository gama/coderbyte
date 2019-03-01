const test           = require('mocha').it
const assert         = require('assert')
const QuestionsMarks = require('.')

test('question marks', () => {
    assert(QuestionsMarks('aa6?9')                  === 'false')
    assert(QuestionsMarks('acc?7??sss?3rr1??????5') === 'true')
})
