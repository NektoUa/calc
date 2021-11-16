"use strict";

let arrayScreen = [];
let mathOperation = ['÷', '×', '-', '+'];
let point = '.';
let out = document.querySelector('.screen');
let result;

function firstSecondPoint() {
    for (let elem of mathOperation) {
        if (arrayScreen.includes(elem) && !arrayScreen.includes(point, arrayScreen.indexOf(elem))) {
            return true
        }
    }
}

function pointZero(bool) {
    arrayScreen.length == 0 ? arrayScreen.push(0) : (firstSecondPoint() == true) ? bool = true : bool = false;
    return bool
}

function addOnScreen(event) {
    let information = event.srcElement.textContent;
    let lastElem = arrayScreen[arrayScreen.length - 1];

    if (information == point) {
        let bool = true;
        pointZero(bool)
        if (!pointZero(bool) && arrayScreen.includes(point)) {
            return
        }
    }

    if (mathOperation.includes(lastElem) && mathOperation.includes(information)) {
        arrayScreen.pop()
    }

    arrayScreen.push(information);
    out.innerHTML = arrayScreen.join('');
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
            operandRight == 0 ? result = 'Impossible' :
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
    !Number.isInteger(result) ? result = result.toFixed(3) : result;

    arrScreenLen();
    arrayScreen.push(result);
    out.innerHTML = arrayScreen.join('');
}

let arrScreenLen = () => arrayScreen.length = 0;

let clearScreen = () => {
    arrScreenLen()
    out.innerHTML = 0;
}

let backSpace = () => {
    arrayScreen.pop();
    out.innerHTML = arrayScreen.join('');
}

document.querySelector('.clear').onclick = clearScreen;
document.querySelector('#back').onclick = backSpace;
document.querySelector('.equal').onclick = count;

let numbers = document.querySelectorAll(".numbers");
numbers.forEach(function (entry) {
    entry.addEventListener("click", function (event) {
        addOnScreen(event);
    });
});







