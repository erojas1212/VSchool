/*
Understand the problem
create a website where people can change the color of a
square on the page by interacting with different HTML Events.

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).

    You should also be able to press the first letter of the colors (typing "r" on the keyboard
    for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`

Plan
create a website
change theo

*/

let btn = document.querySelector("#square");

btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'blue')
btn.addEventListener('click', () => btn.style.backgroundColor = 'red')
btn.addEventListener('mouseout', () => btn.style.backgroundColor = 'yellow')
btn.addEventListener('dblclick', () => btn.style.backgroundColor = 'green')
addEventListener('mousewheel', () => btn.style.backgroundColor = 'orange')

window.addEventListener('keydown', colorChange)

function colorChange(e) {
    console.log(e, "event")
    if (e.keyCode === 66)
        btn.style.backgroundColor = 'blue'
    else if (e.keyCode === 82)
        btn.style.backgroundColor = 'red'
    else if (e.keyCode === 89)
        btn.style.backgroundColor = 'yellow'
    else if (e.keyCode === 71)
        btn.style.backgroundColor = 'green'
    else if (e.keyCode === 79)
        btn.style.backgroundColor = 'orange'
}
