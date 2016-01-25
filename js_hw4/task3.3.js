function foundPI(e, n){
    n = n || 1;
    var z = 4 / n;

    if(z < e){
        return z;
    }

    return z - foundPI(e, n + 2);
}

var e = +prompt("Введите точность :", 0);

while(isNaN(e) || e <= 0) {
    e = +prompt("Введите точность :", 0);
    e += e;
    console.log(foundPI(e));
}

