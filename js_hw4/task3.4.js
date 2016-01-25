//Реализовать программу сортировки массива целых чисел по убыванию остатков от деления на заданное число.
//Использовать стандартную функцию sort() и безымянную функцию обратного вызова для задания признака сортировки.
'use strict';

function fill(size){
    return [...Array(size)].map(() => Math.round((Math.random() * 200) - 100));
}

var array = fill(20);
console.log(array);

var n = +prompt("Введите число:");
var arraySort = sortByDivisionRemainder(array, n);

function sortByDivisionRemainder(arr, div){
     return arr.sort(function(a, b){
         return (b % div) - (a % div);
     });
}


console.log(arraySort);
