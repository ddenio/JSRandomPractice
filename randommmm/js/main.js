    //     How could i solve this JS problem:

    // You are given two arrays arr1 and arr2, where arr2 always contains integers. Arr2 is the indexes of arr1 that we want to keep the values of.
    // Write a function such that:
    // For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']
    // For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]
    // For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]
    // For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]
    // For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]
    function sortByValueAndIndex(arr1,arr2){
       return arr2.filter(e => e < arr1.length).map(ind => arr1[ind])
    }

//console.log(sortByValueAndIndex())
//console.log(sortByValueAndIndex(["3:1","2:2","0:1","4:0"]))
//console.log(sortByValueAndIndex("a         **&*&c"))
//console.log(sortByValueAndIndex(['a','b','b','d']))
// console.log(sortByValueAndIndex("September 5, 2014", "January 7, 2014"))
//console.log(sortByValueAndIndex("taco sauce green cat no tacocart")) 
//console.log(sortByValueAndIndex("1 7 3 4"))
//console.log(sortByValueAndIndex(72971))
//console.log(sortByValueAndIndex([1,2,3,4,5],[1,3,5,7])) 
//console.log(sortByValueAndIndex([22,-6,32,82,9,25])) 
//console.log(sortByValueAndIndex("abcdeeeeewwwwwwllllppp", "xxxxzazzzzfff"))
//console.log(sortByValueAndIndex("1 -5 2 10 15 3")) 
//console.log(sortByValueAndIndex([1,2,1,2,3,3,4,5,6,6]))
//console.log(sortByValueAndIndex(["1",2,"5",10,"23"]))
//console.log(sortByValueAndIndex(['true','flick','taco','flick','flick','green']))
//console.log(sortByValueAndIndex(''))
//console.log(sortByValueAndIndex(324354))
//console.log(sortByValueAndIndex('aA', 'aAaBBBBBB'))
//console.log(sortByValueAndIndex("the green blob ran ban super fast"))
//console.log(sortByValueAndIndex([1,2,3,4,5]))
//console.log(sortByValueAndIndex([34.5,56.2,11,13]))
//console.log(sortByValueAndIndex(["a",1]))
// console.log(sortByValueAndIndex("trisf", ["first"]))
//console.log(sortByValueAndIndex("ainstuomn", ["mountains", "hills", "mesa"]))
//console.log(sortByValueAndIndex("ortsp", ["sport", "parrot", "ports", "matey"]))
//console.log(sortByValueAndIndex([["Chad",2],["Tommy",9],["Clara",4],["Tamara",5],["colton",10]], 7))
//console.log(sortByValueAndIndex({"java":10, "Ruby":80,"Python":65, "RubyonRails":92}))
//console.log(sortByValueAndIndex([1,2,11,4,5], lessThan9)) 
//console.log(sortByValueAndIndex([17,17,17,"a",17,17,17]))
//console.log(sortByValueAndIndex(["a","b","c","d"], [3,0,2,8,3])) 
//console.log(sortByValueAndIndex("Beggegeggineggnegg"))
console.log(sortByValueAndIndex(['a','b','c','d'], [2,0,2,3,0,5]))
//console.log(sortByValueAndIndex([1,3,4,5,6,7], [1,2,3,4,5,6,7,8]))
//console.log(sortByValueAndIndex("codewars"))
// console.log(sortByValueAndIndex([
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ]))
// function sortByValueAndIndex(jewels,stones) {
//   let final = []
//    const map = {}
//    let count = 0
//    for(const jewel of jewels){
//     map[jewel] = true
//    }
//    console.log(map)

//    for(const stone of stones){
//     console.log(`stone: ${stone}`)
//     if(!map[stone]){
//       //count++
//       final.push(stone)
//     }
//    }
//    return final
//    //return count
//  }