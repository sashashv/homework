"use strict";
var a = prompt('Введите первое число', '1'),
    action = prompt('Введите + для сложения, - для вычитания, * для умножения, / для деления'),
    b = prompt('Введите второе число', '1');


function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

function calc() {
    switch (action) {
        case '+' :
            alert(+a + (+b));
            break;
        case '-' :
           alert(a - b);
            break;
        case '*' :
            alert(a * b);
            break;
        case '/':
            // a/b == Infinity ? alert('На ноль делить нельзя') : alert(a/b);
            if (a/b === Infinity) {
                alert('На ноль делить нельзя');
            } else {
                alert(a/b);
            }
            break;
        default:
            alert('Введите действие');
    }
}
if (isNumeric(a) && isNumeric(b)) {
    calc();
} else{
    alert('Введеные данные не числа');
}

