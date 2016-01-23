//Сортировка выбором

var array = new Array(20);
var min;
var tmp;

for (var i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * 20);
}

for (var j = 0; j < array.length - 1; j++) {
    min = j;

    for (var k = j + 1; k < array.length; k++) {
        if (array[k] < array[min]) {
            min = k;
        }
    }
        tmp = array[min];
        array[min] = array[j];
        array[j] = tmp;
}


console.log(array);