//Reverse words in string

function strReverse(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(strReverse('taco bell'))
console.log(strReverse('green beans'))
console.log(strReverse('red chile'))