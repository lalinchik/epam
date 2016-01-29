//Ввести целое значение n (от 0 до 10) и вывести значения степеней числа 8 до n включительно. Реализовать два подхода –
//с использованием арифметических и побитовых операций.
'use strict';

//var n = +prompt("Введите целое число в диапазоне от 0 до 10:");

function powForEight(n) {
    if (!isNaN(n) && n % 1 === 0 && n >= 0 && n <= 10) {
        console.log(Math.pow(8, n));
    }
    else {
        console.log("Ошибка ввода!");
    }
}


function powForEight2(n) {
    if (!isNaN(n) && n % 1 === 0 && n >= 0 && n <= 10) {
        for (var i = 0; i <= n; i++) {
            console.log(i + " " + (8 << i * 3));
        }
    }
    else {
        console.log("Ошибка ввода!");
    }

}
