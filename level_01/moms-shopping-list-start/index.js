// - A user will be able to add list items to the pre-built `ul` using the pre-built form
// - New list items should have the same format as the `li`'s that come with the git repo

const form = document.getElementById("add-todo");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const input = form.elements.title;
    const text = input.value;
    input.value = "";
    const title = document.createElement("li");
    title.textContent = text;
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        list.removeChild(title);
    });
    title.appendChild(deleteButton);
    list.appendChild(title);
});
