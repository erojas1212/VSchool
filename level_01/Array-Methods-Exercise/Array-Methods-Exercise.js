const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// 1. .pop removes item from the end of the array
// vegetables.pop();
// console.log(vegetables)

//2.Remove the first item from the fruit array. Use .shit it removes the item form the beginning of the array
// fruit.shift()
// console.log(fruit)

//3. Find the index of "orange." .indexOf() finds the index of the item
// let orangeIndex = fruit.indexOf("orange")
// console.log(orangeIndex)

//4. Add that number to the end of the fruit array. push() add the item at the end of the array;
// fruit.push(2);
// console.log(fruit);

// 5. Use the length property to find the length of the vegetable array. .length will give the length of the array;
// console.log(vegetables.length) //4

// 6. Add that number to the end of the vegetable array.
// vegetables.push(4);
// console.log(vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food". concat() combines two arrays
// let food = fruit.concat(vegetables);
// console.log(food) //['banana','apple','orange','watermelon','carrot','tomato','pepper','lettuce']

// 8. Remove 2 elements from your new array starting at index 4 with one method. .slice() selecets a part of the array, and returns the new array
//    let food2 = food.slice(2, 4)
//    console.log(food2) // [ 'orange', 'watermelon' ]

// 9. Reverse your array.
// let food2 = 'orange'
// let foodsplit = food2.split("")
// let foodreverse = foodsplit.reverse()
// let foodjoin = foodreverse.join("");

// console.log(foodjoin)



// 10. Turn the array into a string and return it.

let arrayFoods = [ 'orange', 'watermelon' ]
let newArr = arrayFoods.toString()
console.log(newArr )
