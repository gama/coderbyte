const test                = require('mocha').it
const assert              = require('assert')
const capitalizeFunctions = require('.')

Object.entries(capitalizeFunctions).forEach(([name, func]) => {
    test(`letter capitalize (${name})`, () => {
        assert(func('')                    === '')
        assert(func(' ')                   === ' ')
        assert(func('h w')                 === 'H W')
        assert(func(' h w ')               === ' H W ')
        assert(func(' H W ')               === ' H W ')
        assert(func('hello world')         === 'Hello World')
        assert(func(' hello world again ') === ' Hello World Again ')
        assert(func(' HELLO WORLD ')       === ' HELLO WORLD ')
    })
})
