//Используя объект Function, реализовать создание и выполнение функции из строки кода, введенного пользователем.
'use strict';

let arg1 = prompt("Enter a");
let arg2 = prompt("Enter b");
let bodyFunction = prompt("Enter the body of the function, e.g. 'return a * b;'");

let multiply = new Function("a", "b", bodyFunction);

let result = multiply(arg1, arg2);

console.log(result);