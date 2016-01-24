//Вывести имена файлов, удовлетворяющих маске файла. Файл должен начинаться на определенное сочетание букв,
//первая буква должна быть задана как вариант из двух букв, длина имени не определена, расширение файла
//задать как одно из трех возможных вариантов. Имя папки файла задать точно.
'use strict';
var namePattern = /C:\\Users\\Alina\\WebstormProjects\\epam\\(S|I)[a-z]+\.(js|html|css)/;

var file1 = "C:\\Users\\Alina\\WebstormProjects\\epam\\Style.css";
var file2 = "C:\\Users\\Alina\\WebstormProjects\\epam\\index.html";
var file3 = "C:\\Users\\Alina\\WebstormProjects\\epam\\Index.js";
var file4 = "C:\\Users\\Alina\\WebstormProjects\\epam\\Shevchenko.html";

var fileList = [file1, file2, file3, file4];

for (let i = 0; i < fileList.length; i++){
    if(namePattern.test(fileList[i])){
        console.log(fileList[i]);
    }
}

