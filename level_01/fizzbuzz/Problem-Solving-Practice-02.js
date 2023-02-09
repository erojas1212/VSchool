/*
write a function that takes an array of words and a character
and returns each word that has that chracter present
*/

// write a func with two parameters, one that will grab the words, and two that will grab the target
function lettersWithStrings(word, target) {
    // create a container to put our target words
    let newArr = [];
    for (let i = 0; i < word.length; i++) {
    // conditional if the word is included in the indicated target
        if(word[i].includes(target)) {
            //push the word
            newArr.push(word[i])
        }
    }
    // return the new the new arr with the selected words if any
    return newArr;
}


console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []
