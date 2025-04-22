// How do we split up a numbers digits into individual elements in an array for sorting, then sort the digits into descending order, making the largest possible number?

function largestNum(num){
    return num.toString().split('').map(Number).sort((a,b) => b-a).join('')
}

console.log(largestNum(3547))
console.log(largestNum(1493))