//Replace all the vars with let and const

const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



//Rewrite .map using arrow function


const carrots = ["bright orange", "ripe", "rotten"]
const mapCarrots = (arr) => carrots.map((carrot) =>  ({type: "carrot", name: carrot }));

console.log(mapCarrots(carrots))


//  Re-write this .filter() ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

    const filterForFriendly = (arr) => arr.filter(person => person.friendly);

    console.log(filterForFriendly(people));



// Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) =>  a * b;

console.log(doMathSum(2,2))
console.log(produceProduct(2,3))


// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// firstName should default to "Jane"lastName should default to "Doe"age should default to 100
// Hi Kat Stark, how does it feel to be 40?

const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(printString('Kat', 'Stark', 40));
console.log(printString('John'));
console.log(printString())



//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog"));

console.log(filterForDogs(animals))



// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!
// Welcome to Hawaii.
// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const locationAndName = (location, name) => `\n Hi ${name}! \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.\n`

console.log(locationAndName('Hawaii', 'Jane'))
