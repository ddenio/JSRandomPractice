//Given two integer arrays a, b, both of length >= 1,
//create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function sumOfSquares(a,b){
    return a.reduce((current, total) => current**2 + total,0) > b.reduce((current,total) => current**3 + total,0)
}

console.log(sumOfSquares([10,2,3,4],[1,2,3,4]))