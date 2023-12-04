// 6. Question 6
function filterLongestWordLength(arr){ 
    
    
    if (arr.length === 0) return 0;
    let max = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > max) {
            max = arr[i].length;
        }
        return max;
    }

}