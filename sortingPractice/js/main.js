function bubSort(arr){
  for(let i = 0; i<arr.length-1;i++){
    for(let j=0; j<arr.length-i-1;j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }return arr
}

console.log(bubSort([4,10,2,-3,56,23,75,2,1,78]))



function selectionSort(arr){
  //outer loop
  for(let i = 0; i<arr.length;i++){
    //assume first element is our smallest element, until proven otherwise
    let minIndex = i
    for(let j=i+1; j<arr.length;j++){
      if (arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if (minIndex !== i){
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }return arr
}
  console.log(selectionSort([3, 4, 9, 3, 1]));

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

console.log(mergeSort([23,0,15,75,-3,2,10]))