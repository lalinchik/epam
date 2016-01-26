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

console.log(findMin(func, 5, 10));
