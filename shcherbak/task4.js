'use strict';
var array = fill(6, 6);

function fill(m, n){
    return Array.apply(null, Array(m)).map(function(){
        return Array.apply(null, Array(n)).map(function (){
            return rand();
        });
    });
}

function rand(){
    return Math.round((Math.random() * 8) + 1);
}

console.table(array);



for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){

        if(array[i][j] === array[i-1][j]) {
            console.log(array[i][j], array[i-1][j]);
            array[i-1][j] = 0;
        } else if(array[i][j] === array[i][j+1]) {
            console.log(array[i][j], array[i][j+1]);
            j++;
        }
    }
}





