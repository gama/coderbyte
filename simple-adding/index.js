// https://www.coderbyte.com/editor/guest:Simple%20Adding:JavaScript
//
// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For
// example: if the input is 4 then your program should return 10 because 1 + 2 +
// 3 + 4 = 10. For the test cases, the parameter num will be any number from 1
// to 1000. 

module.exports = {
    SimpleAddingFormula,
    SimpleAddingRecursive,
    SimpleAddingIterative,
    SimpleAddingFunctional
}

function SimpleAddingFormula(num) {
    return (num * (num + 1)) / 2
}

function SimpleAddingRecursive(num) {
    if (num === 0)
        return num
    return num + SimpleAddingRecursive(num - 1)
}

function SimpleAddingIterative(num) {
    let sum = 0
    for (let i = num; i > 0; --i)
        sum += i
    return sum
}

function SimpleAddingFunctional(num) {
    return Array(num + 1).fill(null).reduce((sum, _, i) => sum + i, 0)
}

if (module === require.main) { 
    console.log('simple adding (formula):    ', SimpleAddingFormula(process.argv[2]))
    console.log('simple adding (recursive):  ', SimpleAddingRecursive(process.argv[2]))
    console.log('simple adding (iterative):  ', SimpleAddingIterative(process.argv[2]))
    console.log('simple adding (functional): ', SimpleAddingFunctional(process.argv[2]))
}
