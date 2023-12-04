//2. Second Question 
function myMap(arr, fun) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(fun(arr[i]));
    }
  
    return result;
}
  
// defining the function, In this case I am defining a function 
// that takes in a number and returns it's cube
let cube=function fun(number) {
    return number * number * number;
}
//  Testing by declaring an array

let arr = [1, 2, 3, 4];
console.log(myMap(arr,cube))
