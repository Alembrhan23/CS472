//5. Question 5
function reverse(str) { 
    let s='';
    for (let i = str.length - 1; i >= 0; i--){
        s += str[i];
    }
    return s;
}

// testing 
let result = reverse("java");
console.log(result); // outputs avaj