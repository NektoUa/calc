"use strict";

let arrayScreen = [];
let mathOperation = ['÷', '×', '-', '+'];
let out = document.querySelector('.screen');
let result;

function firstSecondPoint() {

}

function pointZero() {
    if (arrayScreen.length == 0) {
        arrayScreen.push(0);
    } else {
        firstSecondPoint()
    }
}

function addOnScreen(event) {
    let information = event.srcElement.textContent;
    let point = '.';
    let lastElem = arrayScreen[arrayScreen.length - 1];
    if (information == point) {
        pointZero()
    }

    if (mathOperation.includes(lastElem) && mathOperation.includes(information)) {
        arrayScreen.pop()
    }

    arrayScreen.push(information);
    out.innerHTML = arrayScreen.join('');
    console.log(arrayScreen)
}

function switchOperation(operandLeft, operandRight, elem) {
    switch (elem) {
        case "+":
            result = operandLeft + operandRight;
            break;
        case '-':
            result = operandLeft - operandRight;
            break;
        case '×':
            result = operandLeft * operandRight;
            break;
        case '÷':
            result = operandLeft / operandRight;
            break;
    }
    return result
}

function count() {
    let operandLeft = [];
    let operandRight = [];

    for (let i = 0; i < arrayScreen.length; i++) {
        for (let elem of mathOperation) {
            if (arrayScreen[i] == elem) {
                operandLeft = arrayScreen.slice(0, i);
                operandRight = arrayScreen.slice(i + 1);
                switchOperation(+operandLeft.join(''), +operandRight.join(''), elem)
            }
        }
    }
    arrScreenLen();
    arrayScreen.push(result);
    out.innerHTML = arrayScreen.join('');
}

let arrScreenLen = () => arrayScreen.length = 0;

let clearScreen = () => {
    arrScreenLen()
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







