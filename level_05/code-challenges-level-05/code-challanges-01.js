function extractUniqueCharacters(strings) {

  const uniqueChars = []; //store values

  for (const str of strings) { //Iterate through each string array

    for (const char of str) { //Iterate through each char in the string

      if(!uniqueChars.includes(char)) { //if the char is not ain the uniqueChar array, add it
        uniqueChars.push(char)
      }
    }
  }
  return uniqueChars;

}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
