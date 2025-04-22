// How can i write a function that removes the first and last character of a string?

function remove(str){
    return str.slice(1,-1)
}

console.log(remove('tacocat'))