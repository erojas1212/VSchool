function filterByProperty(objects, propertyName, propertyValue) {
    //return only people that live in the us

    //intitialize epty arr to store
    //iterate thorugh objet
    // conditional if objects.country === property value
    //push those that meet the condional
    //return people

    // let newArr = [];
    // for (let i = 0; i < objects.length; i++){
    //     if (objects[i].country === propertyValue) {
    //         newArr.push(objects[i])
    //     }
    // }
    // return newArr

    return objects.filter(object => object[propertyName] === propertyValue)

}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);
