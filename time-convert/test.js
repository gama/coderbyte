const test        = require('mocha').it
const assert      = require('assert')
const TimeConvert = require('.')

test('time convert', () => {
    assert(TimeConvert(-1)  === '0:0')
    assert(TimeConvert(0)   === '0:0')
    assert(TimeConvert(1)   === '0:1')
    assert(TimeConvert(9)   === '0:9')
    assert(TimeConvert(10)  === '0:10')
    assert(TimeConvert(45)  === '0:45')
    assert(TimeConvert(59)  === '0:59')
    assert(TimeConvert(60)  === '1:0')
    assert(TimeConvert(61)  === '1:1')
    assert(TimeConvert(119) === '1:59')
    assert(TimeConvert(120) === '2:0')
    assert(TimeConvert(126) === '2:6')
})
