
const myHeader = document.getElementById("header")
myHeader.innerHTML += "<p id='header'>JavaScript Made This!!</p>"
const sentence = document.getElementById("header")
sentence.style.fontSize = "30px"
sentence.style.textAlign = "center"
sentence.style.fontStyle = ""

myHeader.innerHTML += "<p id='name'>[your name here] <span  style='color:black'>wrote the JavaScript</span></p> "
const block = document.getElementById("name")
block.style.color = "burlywood"
block.style.textAlign = "center"
block.style.fontSize = "15px"


function clearInput(){
    document.getElementById("form").innerHTML = "";
}

let inputBox = document.getElementsByClassName("message")
inputBox[0].textContent = "Hello";
inputBox[1].textContent = "Hello";
inputBox[2].textContent = "Nice to meet you";
inputBox[3].textContent = "Nice to meet you as well";

// this func add color to the background text
function changeColor(event) {
    let color = event.value;
    document.getElementsByTagName('BODY')
    [0].style.backgroundColor="blue"; // adding the color blue the background text
}

const dropDown = document.getElementById("theme-drop-down");
const messageR = document.getElementsByClassName("message right");
const messageL = document.getElementsByClassName("message left");

function theme()  {
if (dropDown.value === "theme-two") {
for (let i = 0; i < messageR.length; i++) {
  messageR[i].style.backgroundColor = "red";
}
for (let i = 0; i < messageL.length; i++) {
messageL[i].style.backgroundColor = "gray"
    }
   }
}

dropDown.addEventListener("change", theme)

const txt1 = document.getElementById("input");
const btn1 = document.getElementById("send-btn");
const out1 = document.getElementById("convo");

function fun1() {
    // out1.innerHTML = txt1.value;

    // grab the messages container
    const messageContainer = document.getElementById("form");

    // grab messaage from input field
    const input = document.getElementById("input");
    const value = input.value

    // create a new div
    let newMessage = document.createElement('div')
    // assign message class to it,
    newMessage.classList.add("message")
    // and right or left class depending on the previous one
    // store message from input field
    newMessage.textContent = value
    // appendnew div to messages container
    messageContainer.append(newMessage)
    input.value = ""
    // this will store only a copy of it so it wont clear the input field
    // value=""
}

const form = document.getElementById("form-btn")
form.addEventListener("submit", function(e){
    e.preventDefault()
    fun1()
})
