'use strict';
var str1 = " zzzSS     Ghhh     UzzzFFFzz zz           ьzKKz vDDv ";

function removeSpaces(str) {

    return str.replace(/\s+/g, " ");
}

function replaceLetter(str) {
    var arr = str.split(" ");
    var array = [];
    var item;

    for (let i = 0; i < arr.length; i++) {
        item = arr[i].charAt(0) + arr[i].slice(1).toLowerCase();
        array.push(item);
    }

    return array.join(" ");
}


function addPoints(str) {
    var array = str.split(" ");

    function startsWithCapitalLetter() {
        return array[i].charAt(0) < array[i].charAt(0).toLowerCase();
    }

    function endsWithDot() {
        return array[i - 1].charAt(array[i - 1].length - 1) != ".";
    }

    for (let i = 0; i < array.length; i++) {
        if (startsWithCapitalLetter() && endsWithDot()) {
            array[i - 1] += ".";
        }
    }

        return array.join(" ");
}

function findWrongWords(str){
    var array = str.split(" ");

    return array.filter(function(e) {
        if (e.charAt(0) == "ь") {
            return e;
        }
    });
}

