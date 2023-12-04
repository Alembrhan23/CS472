// 4a. Fourth Question
function sum(arr ) { 
    let sum=0;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
    return sum;
}

//testing 
let total = multiply([1, 2, 3]);
console.log(result) // 1+2+3 outputs 6



//4b. Fourth Question
function multiply(arr) { 
    let product=1;
    for (let i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    return product;
}

//testing 
let result = multiply([2, 3]);
console.log(result) // outputs  2*3=6