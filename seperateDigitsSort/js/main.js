// How do we split up a numbers digits into individual elements in an array for sorting, then sort the digits into descending order, making the largest possible number?

function sepSort(num){
    num = num.toString().split('')
    num.sort((a,b) => b-a)
    return num.map((x) => Number(x))
}

console.log(sepSort(1579124))