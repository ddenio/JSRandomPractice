

function sumDigits(num){
    return num.toString().split('').reduce((curr,total) => Number(curr)+Number(total),0)
}

console.log(sumDigits(345))
console.log(sumDigits(123))
console.log(sumDigits(910))