// xhr.onreadystatechange
// xhr.readyState
// xhr.status
//xhr.responseText

// xhr.open()
// xhr.send()


const xhr = new XMLHttpRequest()
        //method  // url                          //async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText, "original data")
        // response
        const JSONdata = xhr.responseText
        const JSdata = JSON.parse(JSONdata)
        console.log(JSdata, "parsed data") //turns string into an object
        //call the function that we create here and pass in the pokemons inside of the parameter
        displayData(JSdata.objects[0].pokemon)
    }
}

//Make each Pokemon's name show on the browser

function displayData(arr) {
    //for loop that will loop over the array of Pokemons
    for(let i = 0; i < arr.length; i++){
        //inside of that for loop we can create an element and give a text content
        const h1 = document.createElement('h1')
        //appending that created elemnent to the body
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}
