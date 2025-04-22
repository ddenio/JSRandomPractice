//create a funciton to count the number of each letters in a string


function objectPrac(str){
    let obj={};
    str.split('').forEach(s => obj[s] ? obj[s]++ : obj[s]=1)
    return obj
}

console.log(objectPrac('AAAbcDdddeff'))