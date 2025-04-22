// Given a string of spaced seperated numbers, how could i go about returning the highest and lowest Number?


function highLow(str){
    str = str.split(' ').sort((a,b) => a-b)
    return [str[0], str[str.length-1]]
}


console.log(highLow("1 3 67 2 90 -1 -20"))