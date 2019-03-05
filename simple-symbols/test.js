const test            = require('mocha').it
const assert          = require('assert')
const symbolFunctions = require('.')

Object.entries(symbolFunctions).forEach(([name, func]) => {
    test(`simple symbols (${name})`, () => {
        assert(func('')               === false)
        assert(func('a')              === false)
        assert(func('a+')             === false)
        assert(func('+a')             === false)
        assert(func('+a=')            === false)
        assert(func('=a+')            === false)
        assert(func('=a+')            === false)
        assert(func('+a+')            === true)
        assert(func('+a=+')           === false)
        assert(func('+=a+')           === false)
        assert(func('1++a+1234=+b+9') === true)
        assert(func('++d+===+c++==a') === false)
        assert(func('+d+=3=+s+')      === true)
        assert(func('f++d+')          === false)
    })
})
