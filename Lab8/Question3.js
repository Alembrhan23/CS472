Array.prototype.mySort = function() {
    let arr = this;
    let temp;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++ ){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
  }

  let numbers = [98,33,4, 42,1];
console.log(numbers.mySort());
