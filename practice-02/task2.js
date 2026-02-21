// Event Handling

// 1. Select the elements
const span = document.querySelector("span");
const button = document.querySelector("button");

// 2. Event handler
function handleButtonClick () {
    console.log("Button has been clicked")

    let number = Number(span.innerText); // You can also use parseInt(...) or +span.innerText
    number = number + 1;
    /*number += 1;
    number++;
    ++number;*/

    span.innerText = number;
}

// Link the event handler to the event

button.addEventListener("click", handleButtonClick);