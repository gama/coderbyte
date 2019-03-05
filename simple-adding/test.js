const test            = require('mocha').it
const assert          = require('assert')
const addingFunctions = require('.')

Object.entries(addingFunctions).forEach(([name, func]) => {
    test(`simple adding (${name})`, () => {
        assert(func(0)    === 0)
        assert(func(1)    === 1)
        assert(func(2)    === 3)
        assert(func(3)    === 6)
        assert(func(4)    === 10)
        assert(func(12)   === 78)
        assert(func(140)  === 9870)
        assert(func(1000) === 500500)
    })
})
