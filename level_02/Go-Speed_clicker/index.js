
//get button by its element id
const button = document.getElementById("clicker");

//set a variable count
let count = 0;

//create and event lister for the button click
button.addEventListener("click", () =>{
//increase count when button is clicked
    count++;
//display count num with text content and that will equals count
    document.getElementById("count").textContent = count
    // set num and count to set Item
    localStorage.setItem("num", count)

});

//get item num and set to varible
const saveNum = localStorage.getItem("num")
//get the count and assing it to set variable
document.getElementById('count').textContent = saveNum
