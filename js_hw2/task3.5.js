//Осуществить разбор даты вида "15.11.2015" с заменой числового значения месяца на его название.
'use strict';
var monthList = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var monthPattern = /\.(0|1)[0-9]\./;
var date = "24.12.2015";
var index;
date.replace(monthPattern, function(str){
    var pattern = /[0-9]+/;
    str.replace(pattern, function(e){
         index = e;
    });
    return " " + monthList[+index - 1] + " ";
});

console.log(newDate);