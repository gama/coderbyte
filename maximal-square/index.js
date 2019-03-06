// https://www.coderbyte.com/editor/guest:Maximal%20Square:JavaScript
//
// Have the function MaximalSquare(strArr) take the strArr parameter being
// passed which will be a 2D matrix of 0 and 1's, and determine the area of the
// largest square submatrix that contains all 1's. A square submatrix is one of
// equal width and height, and your program should return the area of the
// largest submatrix that contains only 1's. For example: if strArr is ["10100",
// "10111", "11111", "10010"] then this looks like the following matrix:
//
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// For the input above, you can see the bolded 1's create the largest square
// submatrix of size 2x2, so your program should return the area which is 4. You
// can assume the input will not be empty.

module.exports = MaximalSquare

function MaximalSquare(strArray) {
    return strArray.length
}

if (module === require.main)
    console.log('maximal square: ', MaximalSquare(JSON.parse(process.argv[2])))
