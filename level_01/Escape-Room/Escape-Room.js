const readlineSync = require("readline-sync") // reference the options keyInSelect
const options = ["K", "H", "D"]

const choices = readlineSync.keyInSelect(options, "You have three options: find the [K]ey, put your hand in the [H]ole, or open the [D]oor")
const choices2 = readlineSync.keyInYN("Do you want to escape? ") // gives option to selece YES or NO
let isAlive = true

while(isAlive === true) { //continues to loop until the condition is false
    if(options[choices] === "H") {
        console.log("You stuck your hand in the hole. You died.")
        isAlive = false
    }
    else if(options[choices] === "K") {
        console.log("You found the Key.")
        //create another if statement. if the statement is true the door opens and the player escapes
        const choices2 = readlineSync.keyInYN("Do you want to escape? ")
        console.log(choices2, "test")
        if(choices2 === true) { // references the second readlineSync keyInYN
            console.log("The door is open. You escaped.")
            break
        } else {
            console.log("You decided to stay and died. ")
            isAlive = false
        }
         if(options[choices] === "D") {
            console.log("You die.")
        }
    }
    break
}
