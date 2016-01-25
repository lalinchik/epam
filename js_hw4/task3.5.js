//Реализовать функцию вычисления максимального из чисел, передаваемых в качестве параметров.
//Количество параметров может быть произвольным. Использовать объект arguments для обхода всех аргументов.

'use strict';

function foundMax(){
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

var a = foundMax(1, 2, 3);
var b = foundMax(50, 25, 0, 7, 12);

console.log(a, b);


