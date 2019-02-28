// https://www.coderbyte.com/editor/guest:Letter%20Capitalize:JavaScript
//
// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only
// one space

module.exports = {
    LetterCapitalize,
    LetterCapitalizeRegex,
}

function LetterCapitalize(str) {
    let lastIsAlpha = false
    return [...str].map((char) => {
        const isAlpha = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
        const retChar = (isAlpha && !lastIsAlpha) ? char.toUpperCase() : char
        lastIsAlpha = isAlpha
        return retChar
    }).join('')
}

function LetterCapitalizeRegex(str) {
    return str.replace(/\w+/g, (word) => word[0].toUpperCase() + word.slice(1))
}

if (module === require.main) { 
    console.log('letter capitalize (capitalize): ', LetterCapitalize(process.argv[2]))
    console.log('letter capitalize (capitalize): ', LetterCapitalizeRegex(process.argv[2]))
}
