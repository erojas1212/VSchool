const form = document.travelForm; //selectin form from js
const submit = document.getElementById("submit")

function formAlert() {
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements.lastName.value;
    const age = form.elements.age.value;
    const gender = form.elements.gender.value;
    const destination = form.elements.destination.value;
    // const dietary = form.elements.dietary.value;
    const dietary = [];
    if (form.elements['vegetarian'].checked) {
        dietary.push(document.getElementById("vegetarian").value)
    }
    if (form.elements["kosher"].checked) {
        dietary.push(document.getElementById("lactose").value)
    }
    if (form.elements["lactose"].checked) {
        dietary.push(document.getElementById("lactose").value)
    }
    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age}
    \nGender: ${gender} \nDestanitaion: ${destination} \nDietary restricions: ${dietary}`);
}

submit.addEventListener("click", formAlert);
