var a = { name: "Shahbaz" };
var b = { name: "Poorna" };
var tmp;

tmp = a;
a = b;
b = tmp;

console.log(a, b);
