"use strict";

let arrayScreen = [];
let mathOperation = ['÷', '×', '-', '+'];
let out = document.querySelector('.screen');
let result;


function addOnScreen(event) {
    let information = event.srcElement.textContent;
    let point = '.';
    let zero = 0;
    if (arrayScreen[0] == zero && arrayScreen.length < 1) {
        arrayScreen.length = zero;
    } else if (information == point) {
        if (arrayScreen.length == zero) {
            arrayScreen.push(zero);
        } else {
            for (let elem of arrayScreen) {
                if (elem == point) { return }
                else {
                    arrayScreen.push(information);

                }
            }
        }
    }


    arrayScreen.push(information);
    out.innerHTML = arrayScreen.join('');
    console.log(arrayScreen)
}

function pointZero(info) {

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

    out.innerHTML = result
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






