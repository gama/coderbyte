const test      = require('mocha').it
const assert    = require('assert')
const functions = require('.')

Object.entries(functions).forEach(([name, func]) => {
    test(`correct path (${name})`, () => {
        assert(func('???rrurdr?')   === 'dddrrurdrd')
        assert(func('drdr??rrddd?') === 'drdruurrdddd')
    })
})
