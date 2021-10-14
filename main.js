function mathOperation() {
    let val = document.querySelector('.input-result').split('');
    let num;
    for (let i = 0; i < val.length; i++) {
        if (typeof +val[i] == 'number') {
            console.log(val)
        }
        num += val[i]

    }

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

document.querySelector('#equal').onclick = () => {
    mathOperation()
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



