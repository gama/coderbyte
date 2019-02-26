// https://www.coderbyte.com/editor/guest:Longest%20Word:JavaScript
//
// Have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that
// are the same length, return the first word from the string with that length.
// Ignore punctuation and assume "sen" will not be empty. /

module.exports = { LongestWord }

function LongestWord(sen) {
    const words = sen.split(/[^A-Za-z]+/).filter(Boolean)
    return words.sort((a, b) => b.length - a.length)[0]
}

if (module === require.main)
    console.log('longest word: ', LongestWord(process.argv[2]))
