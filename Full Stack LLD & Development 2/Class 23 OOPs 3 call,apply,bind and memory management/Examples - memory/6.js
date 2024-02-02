var a = { name: "Shahbaz" };
var b = { name: "Poorna" };

a.name = b.name; // Here, as b.name is primitive so it will pass value.
b.name = "Kavya";

console.log(a, b); // { name: "Poorna" },{ name: "Kavya" }
