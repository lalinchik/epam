var eps = prompt("", 0);
if(isNaN(eps) || eps <= 0) {
    alert("Error");
} else {
    eps += eps;
    var  pi = 0;
    var k = 1;
    var i = 1;
    var z = 4;

    while (Math.abs(z) > eps){
        pi += z;
        i += 2;
        k = -k;
        z = (4 * k) / i;
        console.log(pi);
    }
}

