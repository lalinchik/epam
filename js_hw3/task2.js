//Проинициализировать одномерный массив чисел случайными значениями в диапазоне от -100 до 100. Создать новый
//массив, содержщий отрицательные элементы. Результат вывести на экран.
'use strict';

function fill(size){
    var arr = [];
    for(let i = 0; i < size; i++){
        arr[i] = Math.round((Math.random() * 200) - 100);
    }

    return arr;
}

function fill2(size){
    return [...Array(size)].map(() => Math.round((Math.random() * 200) - 100));
}

function filterNegative(arr){
    return arr.filter(e => e < 0);
}

var array = fill2(100);
console.log(filterNegative(array));


