// https://www.coderbyte.com/editor/guest:Alphabet%20Soup:JavaScript
//
// Have the function AlphabetSoup(str) take the str string parameter being
// passed and return the string with the letters in alphabetical order (ie.
// hello becomes ehllo). Assume numbers and punctuation symbols will not be
// included in the string. 

module.exports = AlphabetSoup

function AlphabetSoup(str) {
    return [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
}

if (module === require.main)
    console.log('alphabet soup: ', AlphabetSoup(process.argv[2]))
