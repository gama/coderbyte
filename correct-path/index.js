// https://www.coderbyte.com/editor/guest:Correct%20Path:JavaScript
//
// Have the function CorrectPath(str) read the str parameter being passed, which
// will represent the movements made in a 5x5 grid of cells starting from the
// top left position. The characters in the input string will be entirely
// composed of: r, l, u, d, ?. Each of the characters stand for the direction to
// take within the grid, for example: r = right, l = left, u = up, d = down.
// Your goal is to determine what characters the question marks should be in
// order for a path to be created to go from the top left of the grid all the
// way to the bottom right without touching previously travelled on cells in the
// grid.
//
// For example: if str is "r?d?drdd" then your program should output the
// final correct string that will allow a path to be formed from the top left of
// a 5x5 grid to the bottom right. For this input, your program should therefore
// return the string rrdrdrdd. There will only ever be one correct path and
// there will always be at least one question mark within the input string. 

module.exports = { CorrectPathEnumerateAll, CorrectPathValidateIntermediate }

const INITIAL_GRID = [
    [1,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]
const GRID_SIZE = INITIAL_GRID.length

// --------------------------------------------------------
// This version enumerate all possible paths;
// it is trades efficiecy for code simplicity

function CorrectPathEnumerateAll(pathWithQuestionMarks) {
    for (let path of enumeratePaths(pathWithQuestionMarks))
        if (pathEndsAtBottomRight(path))
            return path
    throw 'path not found'
}

function enumeratePaths(path) {
    if (!path.includes('?'))
        return [path]

    let allPaths = []
    ;[...path].forEach((char, idx) => {
        if (char === '?')
            for (let candidate of candidatePaths(path, idx))
                allPaths.push(...enumeratePaths(candidate))
    })
    return allPaths
}

function pathEndsAtBottomRight(path) {
    let x = 0, y = 0, grid = deepCopy(INITIAL_GRID)
    for (let char of [...path]) {
        if (char === 'd') y += 1
        if (char === 'u') y -= 1
        if (char === 'r') x += 1
        if (char === 'l') x -= 1
        if (!validPosition(x, y, grid))
            return false
        grid[y][x] = 1
    }
    return isAtGridBottom(x, y)
}

function validPosition(x, y, grid) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid.length && grid[y][x] === 0
}

function isAtGridBottom(x, y) {
    return x === (GRID_SIZE - 1) && y === (GRID_SIZE - 1)
}

function candidatePaths(str, index) {
    return ['d', 'r', 'u', 'l'].map((directionChar) => {
        return replaceCharAt(str, index, directionChar)
    })
}

function replaceCharAt(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length)
}



// ---------------------------------------------------------
// This version tests for path validity in the middle of
// of the path recursion (without trying to be *too* clever)
// it should be marginally more efficient

function CorrectPathValidateIntermediate(path, grid = INITIAL_GRID, x = 0, y = 0, charOffset = 0) {
    for (let idx = charOffset; idx < path.length; ++idx) {
        let char = path[idx]

        if (char === '?') {
            for (let candidate of candidatePaths(path, idx)) {
                candidate = CorrectPathValidateIntermediate(candidate, deepCopy(grid), x, y, idx)
                if (candidate !== null)
                    return candidate
            }
            // no candidate found
            return null
        }

        [x, y] = updatePosition(char, x, y)
        if (!validPosition(x, y, grid))
            return null
        grid[y][x] = 1
    }

    return isAtGridBottom(x, y) ? path : null
}

function updatePosition(char, x, y) {
    if (char === 'd') y += 1
    if (char === 'u') y -= 1
    if (char === 'r') x += 1
    if (char === 'l') x -= 1
    return [x, y]
}

function deepCopy(grid) {
    return JSON.parse(JSON.stringify(grid))
}



// --------------------------------------------------------
if (module === require.main) {
    console.log('correct path (validate paths): ', CorrectPathValidateIntermediate(process.argv[2]))
    console.log('correct path (enumerate all):  ', CorrectPathEnumerateAll(process.argv[2]))
}
