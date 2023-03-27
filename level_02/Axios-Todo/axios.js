// GET's THE TODO's FROM THE DATABASE
const todoList =document.getElementById('todo-list')

function getData(){
    document.getElementById("todo-list").innerHTML = ''
    axios.get("https://api.vschool.io/edRojas/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}


//LISTS THE TODO TITLES TO THE DOM
function listData(data){
    console.log(data)
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        div.classList.add(data[i]._id)
        todoList.appendChild(div)

        //title
        const todoTitle = document.createElement('h1')
        todoTitle.textContent = data[i].title
        div.appendChild(todoTitle)

        //description
        const todoDescription = document.createElement('p')
        todoDescription.textContent = data[i].description
        div.appendChild(todoDescription)

        //price
        const todoPrice = document.createElement('h2')
        todoPrice.textContent = data[i].price
        div.appendChild(todoPrice)


        //image
        const todoImg = document.createElement('img')
        todoImg.src = data[i].imgUrl
        div.appendChild(todoImg)

        //DELETE BUTTON

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add(data[i]._id)
        div.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', function (event) {
            event.preventDefault(event)
           const id = event.target.parentElement.className // I could also use this to access the id
            const idButton = event.target.className
        //    console.log(event)

            axios.delete(`https://api.vschool.io/edRojas/todo/${idButton}`)
                .then(res => getData())
                .catch(err => console.log(err))
        })
        // END DELETE BUTTON FUNC

        // CHECKBOX
        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        div.appendChild(check)

        document.getElementById("todo-list").appendChild(check)
        check.addEventListener("click", function (event) {
             const id = event.target.parentElement.className
             if (check.checked) {
                todoTitle.style.textDecoration = 'line-through'
                todoDescription.style.textDecoration = 'line-through'
                todoPrice.style.textDecoration = 'line-through'
                const updates = {
                    completed: true}
                    axios.put(`https://api.vschool.io/edRojas/todo/${id}`, updates)
                        .then(res => getData())
                        .catch(error => console.log(error))
             } else if (!check.checked) {
                todoTitle.style.textDecoration = 'none'
                todoDescription.style.textDecoration = 'none'
                todoPrice.style.textDecoration = 'none'
                const updates = {
                    completed: false}
                axios.put(`https://api.vschool.io/edRojas/todo/${id}`, updates)
                        .then(res => getData())
                        .catch(error => console.log(error))

             }
        })
        }
}


getData()

// FORM FOR THE POST REQUEST
const todoForm = document['todo-form']

todoForm.addEventListener('submit', function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value = ''

    axios.post('https://api.vschool.io/edRojas/todo', newTodo)
        .then(res => getData())
        .catch(err => console.log(err))

})
