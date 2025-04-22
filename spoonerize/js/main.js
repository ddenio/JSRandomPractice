// How can we have an array input of two numbers, and return the difference of the 'spoonerized' version of both numbers? 
// i.e., swap the first digit of each number then subtract?

// I.e., input -> [12,34]      ---> 32 - 14 = 18

function spoonerize(arr){
    let spoonA = arr[1].toString().split('')[0]+arr[0].toString().slice(1)
    let spoonB = arr[0].toString().split('')[0]+arr[1].toString().slice(1)
    return Number(spoonA) - Number(spoonB)
}

console.log(spoonerize([1234,2356]))