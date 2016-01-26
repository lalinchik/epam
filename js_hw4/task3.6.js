//Реализовать программу, в которой пользователь последовательно вводит числа (до завершающего нуля).
//Числа посылаются в качестве параметров функции, которая сравнивает их с ранее найденным минимумом, если нужно, меняет
//это минимальное значение и возвращает его. Реализовать два подхода - через свойства функции и через замыкание.

'use strict';
var num = +("Введите число");
var argList = [num];

while (num != 0){
    num = +("Введите число");
    argList.push(num);
}


function foundMin(){
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}
