
function filterLongWords(words, i) {
    const filteredWords = [];

    for (let k = 0; k < words.length; k++) {
        if (words[k].length > i) {
            filteredWords.push(words[k]);
        }
    }

    return filteredWords;
}