const test         = require('mocha').it
const assert       = require('assert')
const AlphabetSoup = require('.')

test('alphabet soup', () => {
    assert(AlphabetSoup('')          === '')
    assert(AlphabetSoup('a')         === 'a')
    assert(AlphabetSoup('ab')        === 'ab')
    assert(AlphabetSoup('ba')        === 'ab')
    assert(AlphabetSoup('baBA')      === 'ABab')
    assert(AlphabetSoup('coderbyte') === 'bcdeeorty')
    assert(AlphabetSoup('hooplah')   === 'ahhloop')
})
