function extractInitials(names) {
  //store new arr
  //iterate through full name arr
  //return the first index of

  let initialArray = [];

  for (let i = 0; i < names.length; i++) {
    //split full name
    let nameSplit = names[i].split(" ");

    let initials = " ";

    //iterate through each word in the arr
    for (let j = 0; j < nameSplit.length; j++) {
        //concatenate first letter of each word
      initials += nameSplit[j][0];
    }
    initialArray.push(initials);
  }
  return initialArray;
}

const fullNames = ["John Doe", "Alice Johnson", "Bob Smith"];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']
