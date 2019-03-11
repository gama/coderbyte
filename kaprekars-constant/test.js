const test              = require('mocha').it
const assert            = require('assert')
const KaprekarsConstant = require('.')

test('kaprekars constant', () => {
    assert(KaprekarsConstant(3524) === 3)
    assert(KaprekarsConstant(2111) === 5)
    assert(KaprekarsConstant(9831) === 7)
    assert(KaprekarsConstant(1)    === 5)
    assert(KaprekarsConstant(9997) === 4)
})
