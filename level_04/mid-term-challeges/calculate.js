// 1. Write a function called calculateTotalPrice
// 2. calculates the total price for each product in an array of objects representing products,
// 3. each object has a name (string), price (number),and quantity (number) property.
// 4. The function should return a new array containing objects with the name and totalPrice properties,
// 5. totalPrice is the result of multiplying the price with the quantity for each product.

//1. map through my products
//2. multiply price * quantity
//3. return

function calculateTotalPrice(products) {
  return products.map(product => ({ //map trhough products arr
    name: product.name, //return names in the arr KEY VALUE PAIR
    totalPrice: product.price * product.quantity //return total price that multiplied by the price and the quantity
  }));//This is also a KEY VALUE PAIR
}


const products = [
  { name: "Apple", price: 1.5, quantity: 3 },
  { name: "Banana", price: 0.75, quantity: 5 },
  { name: "Orange", price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
