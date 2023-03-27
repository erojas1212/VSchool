function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables});
console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]));
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }


//Use destructuring to use the property names as variables. Destructure the object in the parameter:

parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`

    console.log(
        parseSentence({
          location: "Burly Idaho",
          duration: "2 weeks"
        }));

//*********** 4:
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(["important", "skip", "important"]))

//5: destructuring
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`

};

console.log(returnFavorites(favoriteActivities));

//6: rest and spread
function combineAnimals() {
return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

["dog", "cat", "mouse", "jackolope", "platypus"]


//7: ES6
product = (a, b, c, d, e) => [a,b,c,d,e].reduce((acc, number) => acc * number)
console.log(product(1,2,3,4,5))

//8: ES6y
unshift = (array, a, b, c, d, e) => [a, b, c, d, e].concat(array);
unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array];
let array = ['hello', 'world']
console.log(unshift(array,2,3,4,5,6))


//9: ES6y and desctructuting
populatePeople = (names) => names.map((name) => {
        const [firstName, lastName] = name.split(" ");return {
            firstName: firstName,
            lastName: lastName
        }
    })

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
