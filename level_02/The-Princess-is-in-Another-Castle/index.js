class Player { //create a class
    constructor(name, totalCoins, status, hasStar, gamePlaying) { //constructor function
        this.name = name //select Mario or Lugi
        this.totalCoins = totalCoins // add coins
        this.status = status // select status 'powerd up', 'Big', 'Small'
        this.hasStar = hasStar //'Boolean' has a star
        this.gamePlaying = gamePlaying //activates the game
    }

    gotHit() {
        //depending on the status the character is affected
        // if power up from small to Big to star
            console.log('got hit')
            if (this.status === 'Powered up') {
                this.status = 'Big'
                console.log(this.status)
            } else if (this.status === 'Big') {
                this.status ='small'
            } else if (this.status === 'small') {
                this.status ='Dead'
                this.gamePlaying = false
            }
    }

    gotPowerup() {

        console.log('You got a power up')
        if (this.status === 'Small') {
            this.status = 'Big'
        } else if (this.status === 'Big') {
            this.status = 'Powered up'
        } else if (this.status === 'Powered up') {
            console.log('Congratulations You got a star')
            this.hasStar = true
        }
    }

    addCoin() {
        console.log('You got a coin')
        this.totalCoins += 1
    }

    setName(namePicked) { //setName function, has a parameter namePicked
           this.name = namePicked
    }

    print(){
        console.log('\nTotal coins: ' + this.totalCoins)
        console.log('Status: ' + this.status)
    }
}
function startGame() {
    // randomly select a player, select 'mario' or 'Luigi'
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
       newPlayer.setName('Luigi')
    } else if (result === 1) {
        newPlayer.setName('Mario')
    }
    console.log(newPlayer.name)
    // newPlayer.setName()
    gameLoop()
}

function gameLoop() {
    // loops every second
    Interval = setInterval(randomRangeFunc, 1000)

}


function randomRangeFunc() {

    if (newPlayer.gamePlaying) {

        newPlayer.print()

        const result = Math.floor(Math.random() * 3)

        if (result === 0) {
            newPlayer.gotHit()

        } else if (result === 1) {
            newPlayer.gotPowerup()

        } else {
            newPlayer.addCoin()

        }

    } else {

        clearInterval(Interval)
        console.log('You died')
    }

}


const newPlayer = new Player('Mario', 0, 'Small', false, true)

startGame()
