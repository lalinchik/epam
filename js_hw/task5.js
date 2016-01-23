//Заполнить массив из m строк и n столбцов случайными целыми значениями из диапазона от
//–3 до 3 включительно.Все  положительные числа, среди соседей которых половина и более
//отрицательных чисел, заменить значением 4. Построчно вывести исходный массив и
//результат.
'use strict';
var array = fill(10, 10);

function fill(m, n){
    return Array.apply(null, Array(m)).map(function(){
        return Array.apply(null, Array(n)).map(function (){
           return rand();
        });
    });
}

function rand(){
    return Math.round((Math.random() * 6) - 3);
}

console.table(array);

function getSiblings(arr, x, y) {
    var result = [];
    if(y > 0) {
        for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, array.length-1); i++) {
            result.push(arr[y - 1][i]);
        }
    }

    for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, array.length-1); i++) {
        if(i != x) {
            result.push(arr[y][i]);
        }
    }

    if(y < array.length - 1) {
        for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, array.length-1); i++) {
            result.push(arr[y + 1][i]);
        }
    }

    return result;
}

function countNegative(arr){
    return arr.filter(e => e < 0).length;
}

var copy = array.slice(0);

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        if(array[i][j] > 0) {
            let siblings = getSiblings(array, i, j);
            if(countNegative(siblings) > siblings.length / 2) {
                copy[i][j] = 4;
                console.log(i, j);
            }
        }
    }
};

console.table(copy);
