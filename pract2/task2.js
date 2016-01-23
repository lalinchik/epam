'use strict';
function powForE(x){
    if(x === 0){
        return 1;
    } else if(x === 1){
        return Math.E;
    } else {
        return Math.E * powForE(x - 1);
    }
}

function myPow(e, x){
    if(x === 0){
        return 1;
    } else if(x === 1){
        return e;
    } else {
        return e * myPow(e, x - 1);
    }
}

console.log(powForE(15));