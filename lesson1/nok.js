function foundNOK(x, n){
    var nok;

    if(x < n){
        nok = n;
    } else {
        nok = x;
    }

    while(true){
        if(nok%x == 0 && nok%n == 0){
            break;
        } else {
            nok++;
        }
    }
    return nok;
}
