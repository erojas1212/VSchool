const filterAnagrams = (arr, target) => {
  //1.split,sort,join the taget and assign it to a variable
  //2.filter throgh the arr
  //3.split, sort, and join the words in the arr
  //4. lastly I want to return the anagrams by checking the angram

  const checkTarget = target.split("").sort().join("");

  return (filterArr = arr.filter(
    (words) => words.split("").sort().join("") === checkTarget
  ));
};

const words = ["listen", "silent", "dog", "god", "hello", "world"];
const target = "enlist";

const anagrams = filterAnagrams(words, target);
console.log(anagrams); //Output: ['listen', 'siletn']
