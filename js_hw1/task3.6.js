var n = prompt("Введите целое число:", 0);
if (!isNaN(n) && n % 1 === 0) {
    for (var i = 0; i <= 31; i++) {
        document.write(1 && (n >> i));
    }
}
else {
    alert("Ошибка ввода!");
}