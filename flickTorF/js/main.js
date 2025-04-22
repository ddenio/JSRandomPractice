

function flick(arr){
    let boolean = true
    let finalArr = []
    for (let i = 0; i <arr.length;i++){
        if ( arr[i] === 'flick'){
            boolean = !boolean
        }finalArr.push(boolean)
    }return finalArr
}

console.log(flick(['green','flick','taco','orange','flick','flick','world']))