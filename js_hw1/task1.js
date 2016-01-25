//Определение чисел Фибоначчи
//Реализовать программу поиска чисел Фибоначчи:
//    F(1) = F(2) = 1; F(n) = F(n - 2) + F(n - 1)
//С помощью функции prompt() ввести значение n и вывести на экран все числа Фибоначчи от
//первого до n-го включительно. Не использовать отдельную функцию и рекурсию.

function promt(n){
    var array = [0, 1, 1];
    var fibSum;
    var fib1 = 1;
    var fib2 = 1;
    var j = 2;
    while(j < n){
        fibSum = fib1 + fib2;
        array.push(fibSum);
        fib1 = fib2;
        fib2 = fibSum;
        j++;
    }

    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

promt(7);

function promt1(n){
    var f = (1 + Math.sqrt(5))/2;

    var fib = ((Math.pow(f, n)) / Math.sqrt(5)) + 0.5;

    return Math.floor(fib);
}

function promt2(n){
    if(n == 1){
        return 1;
    } else if (n == 2) {
        return 1;
    } else {
        return promt(n - 2) + promt(n - 1);
    }
}



