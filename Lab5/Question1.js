
// 1. Question 1

function max(num1, num2) {
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
     else console.log("Both numbers are equal!");
}


 
// calling the function

let maximum = max(3, 4); // displays 4
console.log(maximum);
max(4, 3); // displays 3
console.log(maximum);
max(3, 3); // displays
console.log(maximum);