function missingNum(arr){
    let sortedArr = arr.sort((a,b) => a-b)
    console.log(sortedArr)
    for(let i = 0; i<sortedArr.length+1;i++){
        if(sortedArr[i] !== i+1){
            return i+1
        }
    }
    
    
    // let completeArr = [1,2,3]
    // let compTot = completeArr.reduce((tot,curr) => tot+curr,0)
    // return compTot - arr.reduce((tot,curr) => tot+curr,0)
    // if (arr.length < 1 ){
    //     return 1
    // } else{
    //     // arr.sort((a,b) => a-b)
    //     // let newArr = arr.filter((e,index) => e !== index + 1)
    //     // return newArr[0]-1
    // console.log(arr)
    // for(let i = 0; i<arr.length+1;i++){
    //     if(arr[i+1]-arr[i] !== 1){
    //         return arr[i]+1
    //     }
    // }
    // }

}

console.log(missingNum([1,6,3,5,4,7]),2)
console.log(missingNum([1,6,3,4,7,2]),5)
console.log(missingNum([]),1)
console.log(missingNum([1,2]),3)