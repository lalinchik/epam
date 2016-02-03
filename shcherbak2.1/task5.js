'use strict';
var func = function (x) {
    return x / 2;
};

function arrayFromRange(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

function findMin(f, start, end) {
    let arr = arrayFromRange(start, end).map(f);

    return arr.reduce((min, current) => Math.min(min, current));
}

function findMin2(f, start, end){
    let min = f(start);
    let step = (end - start)/ 1000;

    for (let i = start + step; i < end; i += step){
        if(f(i) < min){
            min = f(i);
        }
    }

    return min;
}

console.log(findMin2(func, 5, 10));