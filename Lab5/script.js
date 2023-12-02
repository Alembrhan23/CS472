
// 1. Question 1

function max(num1, num2) {
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
    else console.log("Both numbers are equal!");
}

//2. Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num2 > num3) return num1;
    else if (num2 > num1 && num1 > num3) return num2;
    else return num3;
}
 
//3. Question 3
function isVowel(str) { 
    if (str = "A" || "E" || "O" || "U"
        || "a" || "e" || "o" || "u"
    ) return true;
    else return false;
}

// 4. Fourth Question
function sum(arr ) { 
    let sum;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
}
function multiply(arr) { 
    let product;
    for (let i = 0; i < arr.length; i++){
        prodcut *= arr[i];
    }
}

//5. Question 5
function reverse(str) { 
    let s;
    for (let i = str.length() - 1; i >= 0; i--){
        s += str[i];
    }
}

// 6. Question 6
filterLongestWordLength(arr){ 

}
// 7. 