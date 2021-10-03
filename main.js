function count() {
    let firstNum = +document.querySelector('.argOne').value;
    let secondNum = +document.querySelector('.argTwo').value;

    let math = document.querySelector('.math-operation').value;

    let sum = '';
    let outResult = document.getElementById('result');

    if (math == '+') {
        sum = firstNum + secondNum;
    }
    else if (math == '-') {
        sum = firstNum - secondNum;
    }
    else if (math == '*') {
        sum = firstNum * secondNum;
    }
    else {
        sum = firstNum / secondNum;
    }

    outResult.innerHTML = sum;

    firstNum = '';

}

document.querySelector('#equal').onclick = count;



