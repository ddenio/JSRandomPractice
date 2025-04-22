// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function intToBin(n){
    n = n.toString(2);
    console.log(n);
    n = n.split('0')
    console.log(n)
    n = n.join('')
    console.log(n)
    return n.length
}

console.log(intToBin(1234))