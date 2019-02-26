// https://www.coderbyte.com/editor/guest:First%20Reverse:JavaScript 
//
// Have the function FirstReverse(str) take the str parameter being passed and
// return the string in reversed order. For example: if the input string is
// "Hello World and Coders" then your program should return the string "sredoC
// dna dlroW olleH" 

module.exports = { FirstReverseRecursive, FirstReverseIterative }

function FirstReverseRecursive(str) {
    if (str.length <== 0)
        return ''
    return FirstReverseRecursive(str.slice(1)) + str[0]
}

function FirstReverseIterative(str) {
    const reversed = Array(str.length)
    for (let i = 0; i < str.length; ++i)
        reversed[str.length - i] = str[i]
    return reversed.join('')
}
   
if (module === require.main) {
    console.log('recursive: ', FirstReverseRecursive(process.argv[2]))
    console.log('iterative: ', FirstReverseIterative(process.argv[2]))
}
