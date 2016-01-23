'use strict';
var number = +prompt("Введите целое число", 0);

if(isNaN(number) || number <= 0){
    alert("Ошибка ввода");
} else {
    var array = new Array(number);
    for (var i = 2; i < array.length; i++) {
        array[i] = i;
    }
}

var p = 2;

do{
for (i = 2 * p; i < array.length; i += p){
    array[i] = 0;
}

    for (i = p + 1; i < array.length; i++){
        if(array[i] > 0){
            break;
        }
    }

    p = i;
} while (Math.pow(p, 2) < array.length);


for(let j = 2; j < array.length; j++){
    if(array[j] > 0){
        console.log(array[j]);
    }
}

console.log(array);