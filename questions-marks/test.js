const test           = require('mocha').it
const assert         = require('assert')
const QuestionsMarks = require('.')

test('question marks', () => {
    assert(QuestionsMarks('aa6?9')                  === 'false')
    assert(QuestionsMarks('aa6??9')                 === 'false')
    assert(QuestionsMarks('aa6???9')                === 'false')
    assert(QuestionsMarks('aa6???4')                === 'true')
    assert(QuestionsMarks('aa6a???b4')              === 'true')
    assert(QuestionsMarks('7?x?y?z3')               === 'true')
    assert(QuestionsMarks('7?x?y?z3??5')            === 'true')
    assert(QuestionsMarks('7?x?y?z3??5??5')         === 'false')
    assert(QuestionsMarks('acc?7??sss?3rr1??????5') === 'true')
    assert(QuestionsMarks('arrb6???4xxbl5???eee5')  === 'true')
})
