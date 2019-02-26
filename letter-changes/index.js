// https://www.coderbyte.com/editor/guest:Letter%20Changes:JavaScript 
//
// Have the function LetterChanges(str) take the str parameter being passed and
// modify it using the following algorithm. Replace every letter in the string
// with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally
// return this modified string. 

module.exports = { LetterChanges, LetterChangesRegex }

const aCharCode       = 'a'.charCodeAt(0)
const ACharCode       = 'A'.charCodeAt(0)
const lowercaseVowels = ['a', 'e', 'i', 'o', 'u']
const alphabetSize    = 26
const rotateChar      = (char, offset) => String.fromCharCode(((char.charCodeAt(0) + 1) - offset) % alphabetSize + offset)

function LetterChanges(str) {
    return capitalizeVowels(rotateAlphaChars(str))

    function rotateAlphaChars(str) {
        return [...str].map((char) => {
            if (char >= 'A' && char <= 'Z')
                return rotateChar(char, ACharCode)
            if (char >= 'a' && char <= 'z')
                return rotateChar(char, aCharCode)
            return char
        }).join('')
    }

    function capitalizeVowels(str) {
        return [...str].map((char) => {
            return (lowercaseVowels.includes(char)) ? char.toUpperCase() : char
        }).join('')
    }
}

function LetterChangesRegex(str) {
    return str
        .replace(/[A-Z]/g,   (char) => rotateChar(char, ACharCode))
        .replace(/[a-z]/g,   (char) => rotateChar(char, aCharCode))
        .replace(/[aeiou]/g, (char) => char.toUpperCase())
}

if (module === require.main) {
    console.log('letter changes (regular): ', LetterChanges(process.argv[2]))
    console.log('letter changes (regex):   ', LetterChangesRegex(process.argv[2]))
}
