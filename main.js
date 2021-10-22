"use strict";

let arrayScreen = []

function deposit(event) {
    let out = document.querySelector('.screen');
    let information = event.srcElement.textContent
    out.innerHTML = information;
    arrayScreen.push(information);
    console.log(event);
    console.log(arrayScreen);

}

document.querySelector('#seven').onclick = deposit;




