//Разработать функцию, создающую сообщение о мероприятии, подпись к которому меняется в зависимости от значения
//переданного ей параметра. Если значение параметра не задано, то используется подпись “Оргкомитет”.

var text = "9 марта в 14.00 на площади возле школы будет проходить собрание всех без исключений. На собрании будет " +
    "отчет главы кооператива";

function message(text, signature){
    if(signature == undefined){
        document.write(text + "<br/>" + "Оргокомитет.");
    } else {
        document.write(text + "<br/>"  + signature + ".");
    }
}
message(text);
message(text, "Администрация");