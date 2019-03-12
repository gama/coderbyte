// https://www.coderbyte.com/editor/guest:Pentagonal%20Number:JavaScript
//
// Have the function PentagonalNumber(num) read num which will be a positive
// integer and determine how many dots exist in a pentagonal shape around a
// center dot on the Nth iteration. For example, in the image below you can see
// that on the first iteration there is only a single dot, on the second
// iteration there are 6 dots, on the third there are 16 dots, and on the fourth
// there are 31 dots.
//
// https://i.imgur.com/fYj3yvL.png
//
// Your program should return the number of dots that exist in the whole
// pentagon on the Nth iteration

module.exports = { PentagonalNumberRecursive, PentagonalNumberFunctional }

function PentagonalNumberRecursive(num) {
    if (num === 1)
        return 1
    return numberOfDotsAtIteration(num) + PentagonalNumberRecursive(num - 1) 
}

function PentagonalNumberFunctional(num) {
    return Array(num).fill(null).reduce((acc, _, idx) => acc + (idx * 5), 1)
}

function numberOfDotsAtIteration(num) {
    return (num - 1) * 5
}

if (module === require.main) {
    console.log('pentagonal number (recursive):  ', PentagonalNumberRecursive(parseInt(process.argv[2])))
    console.log('pentagonal number (functional): ', PentagonalNumberFunctional(parseInt(process.argv[2])))
}
