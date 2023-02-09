// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i <= 9; i++ ) {
//     console.log(i)
// }


// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }


// let newArr = []
// for (let i = 0; i <= 9; i++) {
//     newArr.push(i)
// }
//  console.log(newArr);

// for (let i = 0; i <= 100; i++) {
//     if (i % 2) {
//         console.log(i)
//     }
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for (let i = 1; i < fruit.length; i+= 2) {
//     console.log(fruit[i])
// }

/************************************************************************************************************************************/
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   let namesArr = []
//   let occupationsArr = []
// for (let i = 0; i < peopleArray.length; i++) {
//     let peopleNames = peopleArray[i].name
//     let peopleOccupation = peopleArray[i].occupation
//     // console.log(peopleArray[i].name);
//     namesArr.push(peopleNames)
//     occupationsArr.push(peopleOccupation)

// }
// console.log(occupationsArr)
// console.log(namesArr)

// let namesArr = []
// for (let i = 0; i < peopleArray.length; i+= 2) {
//     let peopleNames = peopleArray[i].name
//     namesArr.push(peopleNames)
// }
// console.log(namesArr)


//   let occupationsArr = []
// for (let i = 1; i < peopleArray.length; i+= 2) {
//     let peopleOccupation = peopleArray[i].occupation
//     occupationsArr.push(peopleOccupation)
// }
// console.log(occupationsArr)

/***************************************************************************************************/
// const arr = [[1,2],[3,4],[4,6]];

// for (let i = 0; i < arr.length; i++) {
//      for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }

let newArr = [];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        newArr.push(i * j)
        console.log(newArr)
    }
}
