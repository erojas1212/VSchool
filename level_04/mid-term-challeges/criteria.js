function sortByMultipleCriteria(people) {

    return people.sort((a, b) => {
        //fists, compare by ascending age
      if (a.age != b.age) {
        return a.age - b.age;
      }
      //if ages are equal, copare by alphatical name
      return a.name.localeCompare(b.name);
    });
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'David', age: 25 },
//  { name: 'Bob', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]
