//3. Question 3
function isVowel(str) { 
    if (str.length != 1) return false;
    if (str == "A" ||
        str == "E" ||
        str == "O" ||
        str == "U" ||
        str == "a" ||
        str == "e" ||
        str == "o" ||
        str == "u") return true;
    else return false;
}