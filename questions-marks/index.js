// https://www.coderbyte.com/editor/guest:Questions%20Marks:JavaScript
//
// Have the function QuestionsMarks(str) take the str string parameter, which
// will contain single digit numbers, letters, and question marks, and check if
// there are exactly 3 question marks between every pair of two numbers that add
// up to 10. If so, then your program should return the string true, otherwise
// it should return the string false. If there aren't any two numbers that add
// up to 10 in the string, then your program should return false as well.
//
// For example: if str is "arrb6???4xxbl5???eee5" then your program should
// return true because there are exactly 3 question marks between 6 and 4, and 3
// question marks between 5 and 5 at the end of the string. 

module.exports = QuestionsMarks

function QuestionsMarks(str) {
    let   digitMatches = []
    const regex        = /(\d)[A-Za-z?]*(\d)/g
    let   match        = null
    while ((match = regex.exec(str)) !== null) {
        if (digitsSum10(match))
            digitMatches.push(hasExactly3QuestionMarks(match))
        regex.lastIndex -= 1  // rewind regex position to reprocess the last digit
    }

    return `${(digitMatches.length > 0 && digitMatches.every(x => x))}`
}

function digitsSum10(match) {
    const firstDigit = match[1], secondDigit = match[2]
    return parseInt(firstDigit) + parseInt(secondDigit) === 10
}

function hasExactly3QuestionMarks(match) {
    const  matchedString = match[0]
    return matchedString.match(/\?/g).length === 3
}

if (module === require.main)
    console.log('question marks: ', QuestionsMarks(process.argv[2]))
