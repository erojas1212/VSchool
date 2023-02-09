/*
write a function that takes num1 and num2 and returns
whether num1 is divisible by num2

1. write a func with two paramaters num1 and num2
2. create a conditional
3. return a boolean
*/

function isDivisible(num1, num2) {

    if (num1 % num2 === 0) {
        return true;
    }
    return false;
}

console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
