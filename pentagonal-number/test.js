const test      = require('mocha').it
const assert    = require('assert')
const functions = require('.')

Object.entries(functions).forEach(([name, func]) => {
    test(`pentagonal number (${name})`, () => {
        assert(func(1) === 1)
        assert(func(2) === 6)
        assert(func(3) === 16)
        assert(func(4) === 31)
        assert(func(5) === 51)
        assert(func(6) === 76)
        assert(func(7) === 106)
    })
})
