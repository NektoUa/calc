"use strict";

let arrayScreen = [];
let out = document.querySelector('.screen');

function addOnScreen(event) {

    let information = event.srcElement.textContent
    out.innerHTML = information;
    arrayScreen.push(information);
    console.log(event);
    console.log(arrayScreen);

}

function clearScreen() {
    arrayScreen.length = 0;
    out.innerHTML = 0;
}

document.querySelector('#seven').onclick = addOnScreen;
document.querySelector('.clear').onclick = clearScreen;




