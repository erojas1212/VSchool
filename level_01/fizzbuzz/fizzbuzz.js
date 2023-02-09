/* Understand the problem
1. for each multiple of 3, print "Fizz" instead of the number.
2. for each multiple of 5, print "Buzz" instead of the numbet.
3. for numbers which are multiple of both 3 and 5, print "FizzBuzz" instead of the number

Example: 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect. */

function fizzBuzz(nums) {
    for (let i = 1; i <= nums; i++) {
        console.log(i)
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
     }
}

fizzBuzz(100);
