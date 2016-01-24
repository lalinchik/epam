//Необходимо найти и преобразовать в тексте HTML строки e-mail вида "user@host" в строки вида
// "<a ref="mailto:user@host">user@host</a>".
'use strict';

var emailPattern = /[a-z]+@[a-z]+/g;

var text = "В этой статье я хочу по возможности полно и последовательно рассказать о том, что такое объект в JavaScript," +
    " каковы его возможности, какие взаимоотношения могут строиться между user@host объектами и какие способы «родного» /" +
    "наследования из этого user@host вытекают, как это все влияет на производительность и что вообще со всем этим делать :" +
    "В статье НЕ будет ни слова про: эмуляцию традиционной класс-объектной парадигмы, синтаксический сахар, обертки " +
    "и user@host фреймворки. Сложность материала будет user@host нарастать от начала к концу статьи, так что для профи первые части могут " +
    "показаться скучными и банальными, но дальше будет намного интереснее :)";

var newText = text.replace(emailPattern, function(str){
    return "\<a ref=\"mailto:" + str + "\"\>" + str + "\<\/a\>"
});

document.write(newText);
console.log(newText);