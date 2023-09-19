function sortByProperty(objects, propertyName) {
    
    return objects.sort((a, b) => a[propertyName] - b[propertyName]);
  }

  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
  ];

  const sortedByAge = sortByProperty(people, 'age');
  console.log(sortedByAge);
