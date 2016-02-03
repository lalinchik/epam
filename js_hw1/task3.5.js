var n = prompt("Введите целое число:", 0);
var bool = false;
if (!isNaN(n) && n % 1 === 0) {
    for (var i = 31; i >= 0; i--) {
        if(1 && (n >> 31)=== 1) {
            bool = true;
            for (var j = 1; i >= 0; j--) {
                document.write(1 && (n >> j));
            }
            break;
        }
    }
}
else {
    alert("Ошибка ввода!");
}