//Аббревиатура
//Ввести строку из нескольких слов. Составить строку из первых букв слов с переводом этих
//букв в верхний регистр.

var string = "Ввести строку из нескольких слов. Составить";

//1
var abb = "";
var array = string.split(" ");
for(var  i = 0; i < array.length; i++){
    abb = abb + array[i].substr(0, 1).toUpperCase();
}

//2
//var newString = array.map(str => str.charAt(0)).join("").toUpperCase();

console.log(newString);

//3
//var abb = string.substr(0, 1).toUpperCase();
//var space = " ";
//var pos = 0;
//while(pos < string.length){
//    var foundPos = string.indexOf(space, pos) + 1;
//    if(foundPos == 0){
//        break;
//    }
//    abb = abb + string.substr(foundPos, 1).toUpperCase();
//    pos = foundPos;
//}
