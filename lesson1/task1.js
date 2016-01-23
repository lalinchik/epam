var max = 28;
var min = 15;
var del;
var nok = max;

if(min > max){
    max = [min, min = max][0];
}

while(max!=min){
    if(max > min){
        max = max - min;
        del = max;
    } else {
        min = min - max;
        del = min;
    }
}

function foundNOK(x, n){
    var nok;

    if(x < n){
        nok = n;
    } else {
        nok = x;
    }

    while(!(nok%x == 0 && nok%n == 0)){
       nok++;
    }

    return nok;
}

