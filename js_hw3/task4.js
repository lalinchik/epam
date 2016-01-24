//Создaть скрипт, проверяющий, входят ли логин и пароль, введенные пользователем, в соответствующий ассоциативный
//массив.Выдавать соответствующее сообщение.

var user = {
   login: "admin",
   password: "admin"
};

function checkUser(user, login, password){
    if(login !== user.login || password !== user.password){
        alert("Ошибка, попробуйте еще раз!");
        return false;
    }

    return true;
}

var login = prompt("Введите ваш логин");
var password = prompt("Введите ваш пароль");

while (!checkUser(user, login, password)) {
    login = prompt("Введите ваш логин");
    password = prompt("Введите ваш пароль");
}

