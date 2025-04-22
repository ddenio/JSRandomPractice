// How can we return numbers in an array that only appear once in our original array?

function uniqueNums(arr){
    return arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e))
}

console.log(uniqueNums([1,2,3,4,1,2,5,3]))