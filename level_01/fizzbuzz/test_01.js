/* Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following:
*/
//CODE GOES HERE

/*
1.write func
empty array
2. take numbs loop throught them
return largest
*/

function largestNumber(num1, num2, num3) {

    let num = Number.MIN_SAFE_INTEGER;
    let numsArr = [num1, num2, num3];
    for (let i = 0; i < numsArr.length; i++) {
       let nums = numsArr[i]
       if ( nums >=  num) {
            num = nums
       }
    // return Math.max(num1, num2, num3) this also works and its cleaner
    }
    return num;
}

console.log(largestNumber(3, 8, 9))
console.log(largestNumber(25,-10, 10))
