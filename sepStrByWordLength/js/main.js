
function sepWordLength(str){
    return str.split(' ').sort((a,b) => a.length - b.length).join(' ')
}

console.log(sepWordLength('the blue taco truck came to a bee and ran with a green seperated truck'))


