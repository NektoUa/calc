function mathOperation(val) {

    console.log(val);
}

function addElement() {

    let boardItem = document.querySelectorAll('.block-keyboard_item');
    let keyAtribute = '';

    boardItem.forEach(function (elem) {
        let numCode = 48;
        keyAtribute = elem.getAttribute('data-keyboard');
        // console.log(event);
        if (event.keyCode == keyAtribute || (event.keyCode - numCode) == keyAtribute) {
            elem.classList.add('active');
            setTimeout(function () { elem.classList.remove('active') }, 500);
        }
    })
}

document.querySelector('.input-result').onkeyup = function (event) {
    addElement();
}

let val = document.querySelector('.input-result').value;

document.querySelector('#equal').onkeyup = function (event) {
    mathOperation(val)
}

// function count() {
//     let firstNum = +document.querySelector('.argOne').value;
//     let secondNum = +document.querySelector('.argTwo').value;

//     let math = document.querySelector('.math-operation').value;

//     let sum = '';
//     let outResult = document.getElementById('result');

//     if (math == '+') {
//         sum = firstNum + secondNum;
//     }
//     else if (math == '-') {
//         sum = firstNum - secondNum;
//     }
//     else if (math == '*') {
//         sum = firstNum * secondNum;
//     }
//     else {
//         sum = firstNum / secondNum;
//     }

//     outResult.innerHTML = sum;

//     firstNum = '';

// }

// document.querySelector('#equal').onclick = count;



