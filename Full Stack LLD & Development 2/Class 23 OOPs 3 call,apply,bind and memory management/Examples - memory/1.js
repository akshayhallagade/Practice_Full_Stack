var a = 10;
var b = 20;
var c = b;

console.log(a, b, c); //10,20,20

b = 30;

console.log(a, b, c); // 10,30,20

// Note : when we assign one variable to the other variable
//        in primitive data type then value get copied.
