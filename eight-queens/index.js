// https://www.coderbyte.com/editor/guest:Eight%20Queens:JavaScript
//
// Have the function EightQueens(strArr) read strArr which will be an array
// consisting of the locations of eight Queens on a standard 8x8 chess board
// with no other pieces on the board. The structure of strArr will be the
// following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the
// current queen on the chessboard (x and y will both range from 1 to 8 where
// 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your
// program should determine if all of the queens are placed in such a way where
// none of them are attacking each other. If this is true for the given input,
// return the string "true" otherwise return the first queen in the list that is
// attacking another piece in the same format it was provided.
// 
// For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)",
// "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true.
// The corresponding chessboard of queens for this input is below (taken from
// Wikipedia). 

module.exports = EightQueens

function EightQueens(strArray) {
    const queens = strArray.map((strPos) => {
        const [, x, y] = strPos.match(/\((\d),(\d)\)/)
        return {x, y}
    })

    for (let queen of queens)
        if (queens.some(q => attacks(queen, q)))
            return `(${queen.x},${queen.y})`
    return 'true'
}

function attacks(queen1, queen2) {
    return (queen1 !== queen2) && (
        sameVertical(queen1, queen2)    ||
        sameHorizontal(queen1, queen2)  ||
        same45Diagonal(queen1, queen2)  ||
        same135Diagonal(queen1, queen2)
    )
}

const sameVertical    = (q1, q2) => q1.y === q2.y
const sameHorizontal  = (q1, q2) => q1.x === q2.x
const same45Diagonal  = (q1, q2) => q1.x + q1.y === q2.x + q2.y
const same135Diagonal = (q1, q2) => q1.x - q1.y === q2.x - q2.y

if (module === require.main)
    console.log('eight queens: ', JSON.parse(EightQueens(process.argv[2])))
