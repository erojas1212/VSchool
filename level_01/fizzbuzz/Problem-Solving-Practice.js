/* write a func that takes an array of nums and returns the largest (can not use Math.max())

*/

// write a function
function largest(a) {
    // assign a varible to num 0, because its the lowest
   // let num = a[0];
    let num = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < a.length; i++) {
        // conditional if nums being looped are greater than or num = 0
        if (a[i] >= num) {
            // set the num to the gretest num
            num = a[i];
        }
    }
    //return the num
    return num;
}

console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, -40, -3, -19, -22])) // => 40
