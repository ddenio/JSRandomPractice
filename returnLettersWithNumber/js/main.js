// How could i go about solving this problem:

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

function letterNum(arr){
   return arr.map((element, index) => `${index+1}: ${element}`)  
}

console.log(letterNum(['a','b','b','b','d','c']))