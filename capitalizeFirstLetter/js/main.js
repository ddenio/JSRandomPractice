//write a function to capitalize the first letter of a word

function capFirstLetter(word){
    return word.slice(0,1).toUpperCase() + word.slice(1)
}

console.log(capFirstLetter('tacobell'))