'use strict';
var array = new Array(20);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * 20);
}

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        var element = arr[i];
        var prevIndex = i - 1;

        while (prevIndex >= 0 && arr[prevIndex] > element){
            arr[prevIndex + 1] = arr[prevIndex];
            arr[prevIndex] = element;
            prevIndex--;
        }
    }
}

insertionSort(array);
console.log(array);