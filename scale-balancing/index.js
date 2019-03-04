// https://www.coderbyte.com/editor/guest:Scale%20Balancing:JavaScript
//
// Have the function ScaleBalancing(strArr) read strArr which will contain two
// elements, the first being the two positive integer weights on a balance scale
// (left and right sides) and the second element being a list of available
// weights as positive integers. Your goal is to determine if you can balance
// the scale by using the least amount of weights from the list, but using at
// most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"]
// then this means there is a balance scale with a weight of 5 on the left side
// and 9 on the right side. It is in fact possible to balance this scale by
// adding a 6 to the left side from the list of weights and adding a 2 to the
// right side. Both scales will now equal 11 and they are perfectly balanced.
// Your program should return a comma separated string of the weights that were
// used from the list in ascending order, so for this example your program
// should return the string 2,6
//
// There will only ever be one unique solution and the list of available weights
// will not be empty. It is also possible to add two weights to only one side of
// the scale to balance it. If it is not possible to balance the scale then your
// program should return the string not possible. 

module.exports = ScaleBalancing

function ScaleBalancing([[leftWeight, rightWeight], availableWeights]) {
    // try two find a solution using just one weight
    for (let i = 0; i < availableWeights.length; ++i)
        if (isBalanceable(leftWeight, rightWeight, availableWeights[i], 0))
            return `${availableWeights[i]}`

    // then, try two find a solution using two weights
    for (let i = 0; i < availableWeights.length; ++i)
        for (let j = (i + 1); j < availableWeights.length; ++j)
            if (isBalanceable(leftWeight, rightWeight, availableWeights[i], availableWeights[j]))
                return [availableWeights[i], availableWeights[j]].sort().join(',')

    return 'not possible'
}

function isBalanceable(leftWeight, rightWeight, weight1, weight2) {
    return (leftWeight + weight1) === (weight2 + rightWeight) ||
           (leftWeight + weight2) === (weight1 + rightWeight) ||
           (leftWeight + weight1 + weight2) === (rightWeight) ||
           (leftWeight) === (weight1 + weight2 + rightWeight)
}

if (module === require.main)
    console.log('scale balancing: ', ScaleBalancing(JSON.parse(process.argv[2])))
