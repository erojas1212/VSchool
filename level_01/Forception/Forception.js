function forception(people, alphabet) {

    let newArr = [];
    for (let i = 0; i < people.length; i++) {
            newArr.push(people[i].split(' ').join(' ') + ':')
         for (let j = 0; j < alphabet.length; j++) {
                   newArr.push(alphabet[j].toUpperCase().split(' ').join(' '))
         }
    }
        return newArr;
};

console.log(forception(["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"], "abcdefghijklmnopqrstuvwxyz"))
