let deleteBtn = document.getElementsByClassName("delete-btn"); //delets the content
for (let i = 0; i < deleteBtn.length; i++) {
    let button = deleteBtn[i];
    button.addEventListener("click", function(event) {
        let buttonCLicked = event.target
        buttonCLicked.parentElement.parentElement.remove()
        cartTotal();
    })
}

const priceInput = document.getElementById('price'); //grab the price input by element id
const quantityInput = document.getElementById('quantity'); //grab the quantity input by element id

const priceInput2 = document.getElementById('price2');
const quantityInput2 = document.getElementById('quantity2');

const priceInput3 = document.getElementById('price3');
const quantityInput3 = document.getElementById('quantity3');

const calculateButton = document.getElementById('calculate-total'); //grabs the calculate button by the element id
const totalDisplay = document.getElementById('total'); //grabs the display total by the element id


calculateButton.addEventListener('click', function(event) { //function when click invokes function
  event.preventDefault() //prevents info to get refreshed

  const price = parseFloat(priceInput.value); // assing price input value to a varible
  const quantity = parseFloat(quantityInput.value);// assign quantity input value to a varible

  const price2 = parseFloat(priceInput2.value);
  const quantity2 = parseFloat(quantityInput2.value);

  const price3 = parseFloat(priceInput3.value);
  const quantity3 = parseFloat(quantityInput3.value);

  const total1 = price * quantity; // multiply price times the quantity
  const total2 = price2 * quantity2;
  const total3 = price3 * quantity3;

  const total = total1 + total2 + total3 ; //add up all the total set to a varible
  totalDisplay.textContent = total + ' Coins'; //total display and text content = total
});
