//Проинициализировать одномерный массив целых чисел. Определить среднее арифметическое всех чётных элементов
//массива, стоящих на нечётных местах (с нечетными индексами). Результат вывести на экран.

'use strict';

function fill(size){
    var arr = [];
    for(let i = 0; i < size; i++){
        arr[i] = Math.round(Math.random() * 20);
    }

    return arr;
}

function foundAverage(arr){
    var  sum = 0;
    var count = 0;

    for (let i = 1; i < arr.length; i += 2){
        if(arr[i] % 2 === 0){
            sum += arr[i];
            count++;
        }
    }

    return sum / count;
}
