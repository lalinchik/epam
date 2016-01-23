var n = 7;

for(var i = 2; i < (n -1); i++){
    if(n%i == 0){
        console.log("не простое");
        break;
    } else {
        console.log("простое");
    }
}



var str1 = "Hello";
var str2 = " World";

var str = (str1 + str2).toUpperCase();
console.log(str);