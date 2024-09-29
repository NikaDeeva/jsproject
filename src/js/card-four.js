"use strict"
const plus = document.getElementById('plus');
const multy = document.getElementById('multy');
const rest = document.getElementById('rest');
const divide = document.getElementById('divide');

plus.addEventListener('click', e => {
    let firstNum = Number(document.querySelector('.calculator__firstNum').value);
    let secondNum = Number(document.querySelector('.calculator__secondNum').value);
    let result = document.querySelector('.calculator__result');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Введіть ЧИСЛО');
    } else {
        result.value = firstNum + secondNum;
    }
});

multy.addEventListener('click', e => {
    let firstNum = Number(document.querySelector('.calculator__firstNum').value);
    let secondNum = Number(document.querySelector('.calculator__secondNum').value);
    let result = document.querySelector('.calculator__result');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Введіть ЧИСЛО');
    } else {
        result.value = firstNum * secondNum;
    }
});

rest.addEventListener('click', e => {
    let firstNum = Number(document.querySelector('.calculator__firstNum').value);
    let secondNum = Number(document.querySelector('.calculator__secondNum').value);
    let result = document.querySelector('.calculator__result');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Введіть ЧИСЛО');
    } else {
        result.value = firstNum - secondNum;
    }
});

divide.addEventListener('click', e => {
    let firstNum = Number(document.querySelector('.calculator__firstNum').value);
    let secondNum = Number(document.querySelector('.calculator__secondNum').value);
    let result = document.querySelector('.calculator__result');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Введіть ЧИСЛО');
    } else {
        if (secondNum === 0) {
            alert('Ділення на нуль неможливе');
        } else {
            result.value = firstNum / secondNum;
        }
    }
});
