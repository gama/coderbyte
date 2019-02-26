// https://www.coderbyte.com/editor/guest:First%20Factorial:JavaScript
//
// Have the function FirstFactorial(num) take the num parameter being passed and
// return the factorial of it. For example: if num = 4, then your program should
// return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1
// and 18 and the input will always be an integer. 

module.exports = { FirstFactorialRecursive, FirstFactorialIteractive }

function FirstFactorialRecursive(num) { 
    if (num <= 0)
        return 0
    if (num === 1)
        return 1
    return num * FirstFactorialRecursive(num - 1)
}

function FirstFactorialIteractive(num) { 
    let factorial = 1
    for (; num > 0; num--)
        factorial *= num
    return factorial
}


if (module === require.main)
    console.log('recursive: %d\niteractive: %d',
        FirstFactorialRecursive(parseInt(process.argv[2])),
        FirstFactorialIteractive(parseInt(process.argv[2])))
