'use strict';
var number = +prompt("Введите целое число", 0);
var count = +prompt("Введите число от 1 до 31", 0);

if(isNaN(number) && number%1 != 0 && isNaN(count) && count%1 != 0 && count <= 0 && count >= 31){
    alert("Ошибка ввода!");
} else {
   var bit = leftShift(number, count);
    var bit2 = "";
    for (let i = 31; i >= 0; i--) {
        bit2  += 1 & (number >> i);
    }
}

console.log(bit, bit2);


function leftShift(number, count){
    for (let i = 1; i <= count; i ++) {
        var value1 = number<<i;
        var value2 = number>>32-i;
    }
    var result = value1|value2;

    return result;
}
