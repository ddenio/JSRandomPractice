// How can I write a function to convert a list of string numbers, seperated by a colon :, into a list of comma seperated numbers?

function colonToComma(arr){
    return arr.map((ele) => `[${(ele.split(':').map(Number).join(','))}]`)
}

console.log(colonToComma(["3:1","2:2","0:1"]))