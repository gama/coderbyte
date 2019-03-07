// https://www.coderbyte.com/editor/guest:Closest%20Enemy%20II:JavaScript
//
// Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in
// strArr which will be a 2D matrix that contains only the integers 1, 0, or 2.
// Then from the position in the matrix where a 1 is, return the number of
// spaces either left, right, down, or up you must move to reach an enemy which
// is represented by a 2. You are able to wrap around one side of the matrix to
// the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"]
// then this looks like the following:
// 
// 0 0 0 0
// 1 0 0 0
// 0 0 0 2
// 0 0 0 2
// 
// For this input your program should return 2 because the closest enemy (2) is
// 2 spaces away from the 1 by moving left to wrap to the other side and then
// moving down once. The array will contain any number of 0's and 2's, but only
// a single 1. It may not contain any 2's at all as well, where in that case
// your program should return a 0. 

module.exports = ClosestEnemyII

function ClosestEnemyII(strArray) {
    const matrix  = strArray.map((row) => [...row])

    const selfPos = findSelfPos(matrix)
    const enemies = []

    for (let y = 0; y < matrix.length; ++y)
        for (let x = 0; x < matrix[y].length; ++x)
            if (matrix[y][x] === '2')
                enemies.push(calculateEnemyDistance(matrix, selfPos, {x, y}))

    return enemies.sort()[0]
}

function findSelfPos(matrix) {
    for (let y = 0; y < matrix.length; ++y)
        for (let x = 0; x < matrix[y].length; ++x)
            if (matrix[y][x] === '1')
                return {x, y}
}

function calculateEnemyDistance(matrix, self, enemy) {
    const matrixHeight = matrix.length
    const matrixWidth  = matrix[0].length
    const xDistance    = Math.min(Math.abs(self.x - enemy.x), Math.abs(self.x + matrixWidth  - enemy.x))
    const yDistance    = Math.min(Math.abs(self.y - enemy.y), Math.abs(self.y + matrixHeight - enemy.y))
    return xDistance + yDistance
}

if (module === require.main)
    console.log('closest enemy: ', ClosestEnemyII(JSON.parse(process.argv[2])))
