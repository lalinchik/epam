//Вывести все слова, после которых в тексте стоит точка или запятая.
var text = "В этой статье я хочу по возможности bum, и последовательно рассказать о том, что такое объект в JavaScript," +
    " каковы его возможности, какие взаимоотношения могут строиться между user@host объектами и какие способы «родного» /" +
    "наследования из этого user@host вытекают, как это все влияет на производительность и что вообще со всем этим делать." +
    "В статье НЕ будет ни слова про: эмуляцию традиционной класс-объектной парадигмы, синтаксический сахар, обертки " +
    "и user@host фреймворки. Сложность материала будет user@host нарастать от начала к концу статьи, так что для профи первые части могут " +
    "показаться скучными и банальными, но дальше будет намного интереснее :)";

var pattern = /\s[A-Za-z0-9а-яА-Я]+(\.|,)/ig;

function printWordWithPoint(text, pattern){
    text.replace(pattern, function(str){
        console.log(str.substring(0, str.length - 1));
    });
}

printWordWithPoint(text, pattern);

