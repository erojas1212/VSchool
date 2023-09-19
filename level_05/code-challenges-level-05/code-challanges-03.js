// Understanding the challenge
// You can state the vowels challenge as follows:
//write a function that takes a string as argument and
//returns the number of vowels contained in that string.

//define what the vowels
//copare or filter through the string
//return

const findVowels =(string) => {

    const vowels = ["a", "e", "i", "o", "u"]
 for (let i = 0; i < string.length; ++i){

     const splitString = string.split("")

     // console.log(splitString)
     if (splitString.includes(vowels[i])) {
         return vowels

     }
 }


    // const stringfiltered = string.filter(str => )
}

// The vowels are “a”, “e”, “i”, “o”, “u”.

// Examples:

console.log(findVowels('hello')) // --> 2
findVowels('why') // --> 0
