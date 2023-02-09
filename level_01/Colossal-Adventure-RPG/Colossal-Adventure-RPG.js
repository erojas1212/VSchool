const readline = require("readline-sync");
console.log("Hello traveler, are you ready to enter the Underworld?");
const name = readline.question("If so sing the contract here: ");
console.log(`Welcome ${name}`);
const enemies = ["*Fire Demon*", "*Ice Demon*","*Black Fire Demon*"];
const items = ["health potion", "nothing", "damage boost"];
const hp = 30;
const inventory = [];

console.log("-------------------------------------------")
function Player (name) {
    this.Name = name
    this.Hp = hp
    this.Items = inventory
}
let statsFunc = new Player(name)

console.log("If your health gets to 0 or below you lose.")
console.log("To check stats press 's', to walk press 'w', but you may encounter a demon.")

while (statsFunc.Hp > 0) {
    const option1 = readline.keyIn("w or s - ")
    if (option1 === "w") {
        walk();
      } else if (option1 === "s") {
          stats();
         }
         if (statsFunc.Hp <= 0) {
            console.log(`Your hp: ${statsFunc.Hp}, and you died\n`)
         }
   }


function stats (){
    console.log(`\n name: ${statsFunc.Name}   \n hp: ${statsFunc.Hp}   \n items: ${statsFunc.Items} \n`);
}

function walk() {
    let chance = Math.floor(Math.random() * 4) + 1;
    console.log('chance:', chance)
    if (chance === 4) {
        randomMonster();
    } else if (chance <= 3){
        noEnemy();
    }
}

function randomMonster() {
    const randomEnemy = enemies[Math.floor(Math.random() * (enemies.length))];
    console.log(`\nYou have encountered the ${randomEnemy}, if you want to fight press "f" or if you want to run away press "r"\n`)
    let option2 = readline.keyIn("f or r - ")
    console.log(option2)
    if (option2 === "f") {
        fight();
    } else if (option2 === "r") {
        run();
    }
}

function fight() {
    let enemiesHp = 10;
    console.log("\nThe enemy has hp: " + enemiesHp + " left, your current hp: " + statsFunc.Hp + " do you wish to keep fighting 'f' or run away 'r'?\n")
    while (enemiesHp > 0 && statsFunc.Hp  > 0) {
        let option2 = readline.keyIn("f or r - ");
        if (option2 === "f") {
            const heroAttack = Math.floor(Math.random() * 10);
            const enemyAttack = Math.floor(Math.random() * 10);
            statsFunc.Hp -= enemyAttack;
            enemiesHp -= heroAttack;
            console.log("\nThe enemy has hp: " + enemiesHp + " left, your current hp: " + statsFunc.Hp + " do you wish to keep fighting 'f' or run away 'r'?\n")
        } else if (option2 === "r") {
            run();

        } if (enemiesHp <= 0) {
            itemsCollected();
            console.log(`\nthe enemy has been defeated, and you have found ${inventory}, you may keep walking 'w' or check stats 's'.\n`);

        }
    }
}

function itemsCollected() {
    let found = items[Math.floor(Math.random() * items.length)];
    inventory.push(found);
}

function run() {
    const enemyAttack = Math.floor(Math.random() * 20);
            statsFunc.Hp -= enemyAttack;
            console.log(`\nYou took damage from running away, your current hp: ${statsFunc.Hp}, \nto keep walking press 'w' or press 's' to chack stats \n`)
            const option1 = readline.keyIn("w or s - ")
            if (option1 === "w") {
                walk();
            } else if (option1 === "s") {
                stats();
            }
}

function noEnemy() {
   console.log('you may keep walking')
   const option1 = readline.keyIn("w or s - ")
            if (option1 === "w") {
                walk();
              } else if (option1 === "s") {
                  stats();
                 }
}
