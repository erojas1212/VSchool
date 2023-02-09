// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// let count = 0;

// for (let i = 0; i < officeItems.length; i++) {
//     let item = officeItems[i]
//     if (item === 'computer') {
//     count++
//     }
// }

// console.log(count);

/* counting computers in an array */
/*************************************************************************************************************************************************/

/*Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.*/

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (let i = 0; i < people.length; i++) {
    let pAge = people[i].age
    if (pAge < 18) {
        console.log(people[i].name + ' not old enough')
     } else if (pAge > 18) {
            console.log(people[i].name + ' old enough')
    }
  }
