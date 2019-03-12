// https://www.coderbyte.com/editor/guest:Chessboard%20Traveling:JavaScript
//
// Have the function ChessboardTraveling(str) read str which will be a string
// consisting of the location of a space on a standard 8x8 chess board with no
// pieces on the board along with another space on the chess board. The
// structure of str will be the following: "(x y)(a b)" where (x y) represents
// the position you are currently on with x and y ranging from 1 to 8 and (a b)
// represents some other space on the chess board with a and b also ranging from
// 1 to 8 where a > x and b > y. Your program should determine how many ways
// there are of traveling from (x y) on the board to (a b) moving only up and to
// the right. For example: if str is (1 1)(2 2) then your program should output
// 2 because there are only two possible ways to travel from space (1 1) on a
// chessboard to space (2 2) while making only moves up and to the right. 

module.exports = ChessboardTraveling

const BSIZE = 8

function ChessboardTraveling(str) {
    const numWays = Array(BSIZE + 1).fill(null).map(() => Array(BSIZE + 1).fill(0))
    const [orig, dest] = parseInput(str)

    for (let i = orig.y; i <= dest.y; ++i) {
        for (let j = orig.x; j <= dest.x; ++j) {
            numWays[i][j] = calculateNumWays(i, j, numWays, orig)
            if (i === dest.y && j === dest.x)
                return numWays[i][j]
        }
    } 

    throw new Error('should never reach here!')
}

function parseInput(inputStr) {
    const match = inputStr.match(/\(([1-8]) ([1-8])\)\(([1-8]) ([1-8])\)/)
    if (!match)
        throw new Error(`invalid input format: ${inputStr}`)
    const orig = { x: parseInt(match[1]), y: parseInt(match[2]) }
    const dest = { x: parseInt(match[3]), y: parseInt(match[4]) }
    return [orig, dest]
}

function calculateNumWays(currY, currX, numWays, orig) {
    if ((currY === orig.y) || (currX === orig.x))
        return 1
    const numWaysMovingUp    = numWays[currY - 1][currX]
    const numWaysMovingRight = numWays[currY][currX - 1]
    return numWaysMovingUp + numWaysMovingRight
}

if (module === require.main)
    console.log('chessboard traveling: ', JSON.parse(ChessboardTraveling(process.argv[2])))
