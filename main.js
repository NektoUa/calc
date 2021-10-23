"use strict";

let arrayScreen = [];
let out = document.querySelector('.screen');

function addOnScreen(event) {
    let information = event.srcElement.textContent
    if (arrayScreen[0] == 0) {
        arrayScreen.length = 0;
    }
    arrayScreen.push(information);
    out.innerHTML = arrayScreen.join('')
    console.log(arrayScreen)
}

function count() {

}

function clearScreen() {
    arrayScreen.length = 0;
    out.innerHTML = 0;
}

document.querySelector('.clear').onclick = clearScreen;
document.querySelector('.equal').onclick = count;

let numbers = document.querySelectorAll(".numbers");
numbers.forEach(function (entry) {
    entry.addEventListener("click", function (event) {
        addOnScreen(event);

    });
});






