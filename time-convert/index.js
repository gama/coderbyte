// https://www.coderbyte.com/editor/guest:Time%20Convert:JavaScript
//
// Have the function TimeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to (ie. if num
// = 63 then the output should be 1:3). Separate the number of hours and minutes
// with a colon.

module.exports = TimeConvert

function TimeConvert(num) {
    if (num < 0) return '0:0'
    const hours   = (num / 60 | 0)
    const minutes = num % 60
    return `${hours}:${minutes}`
}

if (module === require.main) { 
    console.log('time convert: ', TimeConvert(process.argv[2]))
}
