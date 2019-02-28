// https://www.coderbyte.com/editor/guest:Simple%20Symbols:JavaScript
//
// Have the function SimpleSymbols(str) take the str parameter being passed and
// determine if it is an acceptable sequence by either returning the string true
// or false. The str parameter will be composed of + and = symbols with several
// letters between them (ie. ++d+===+c++==a) and for the string to be true each
// letter must be surrounded by a + symbol. So the string to the left would be
// false. The string will not be empty and will have at least one letter. 

module.exports = {
    SimpleSymbolsCharLoop,
    SimpleSymbolsRegex
}

function SimpleSymbolsCharLoop(str) {
    if (str.length === 0)
        return false
    return [...str].every((char, index) => {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            if ((index === 0) || (str[index - 1] !== '+'))                // prefix
                return false
            if ((index >= (str.length - 1)) || (str[index + 1] !== '+'))  // suffix
                return false
        }
        return true
    })
}

function SimpleSymbolsRegex(str) {
    const match = str.match(/.?[A-ZZa-z].?/g)
    return !!match && match.every((match) => {
        return match.length === 3 && match[0] === '+' && match[2] === '+'
    })
}

if (module === require.main) { 
    console.log('simple symbols: ', SimpleSymbolsCharLoop(process.argv[2]))
    console.log('simple symbols: ', SimpleSymbolsRegex(process.argv[2]))
}
