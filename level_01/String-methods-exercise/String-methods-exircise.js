
/***** Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters. ******/
// function capitalizeAndLowerCase(text) {
//        return text.toUpperCase() + text.toLowerCase()
// }

// console.log(capitalizeAndLowerCase('HELlo')) //HELLOhello


/****Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. ****/
// function firstHalf(text) {
//     // return text.slice(text.length/2)
//     let text1 = text.length/2
//     return Math.floor(text1)
// }
// console.log(firstHalf('Hello World'))
// console.log(firstHalf('Hello'))

/**** Write a function that uses slice() and the other functions you've written to return the first half of the given string. ******/
// function firstHalf(text) {
//     return text.slice(0, text.length/2) //return text slice it at index 0 and divide the text length by 2
// }
// console.log(firstHalf('Hello World'))
// console.log(firstHalf('Hello'))



/***** Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.  *****/
// function capitalizeAndLowerCase(text) {
// //1. set varible and slice it diving it by 2
//     let string1 = text.slice(text.length/2); //rd  which is second half
// //2. set another varible and slice at index 0 and divide at length by 2
//     let string2 = text.slice(0, text.length/2);
// //3. conditional if the varible is not divisible 2, then I want return it
//         if (string2 % 2 !=0) {
//             return string2.toLocaleUpperCase() + string1.toLowerCase()
//         }
// }

// console.log(capitalizeAndLowerCase("Hello World"))
// console.log(capitalizeAndLowerCase("Hello"))
