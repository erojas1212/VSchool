// ### **Challenge: Create a Table of Arrays**

// Write a function called **`createTable(rows, columns)`** that takes two parameters: **`rows`** (number of rows) and **`columns`** (number of columns).
//The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell
//in the table should contain the product of its row index and column index.
// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns).
//The function should generate a table represented as an array of arrays, where each inner array represents a row and contains
//the row's data. Each cell in the table should contain the product of its row index and column index.

// Write a function called createTable(rows, columns)
//generate an array of arrays, where each inner array represents a row and contains
//the row's data. Each cell in the table should contain the product of its row index and column index.

//Initialize emty arr
//interate through arr
//multiply the rows
//nested loop
//multiply the columns
//push that arr

function createTable(rows, columns) {
    let newArr = [];//initilize empty arr
    for (let i = 0; i < rows; i++) { //looped through rows
        const row = []; //set varible for the row
        for (let j = 0; j < columns; j++) { //nested a loop to iterate through the columns
            row.push(i * j) //push multiplication of the rows * columns
        }
        newArr.push(row) //push the row
    }

    return newArr //return the value
}
// console.log(createTable)
// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);
