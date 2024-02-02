var a = { name: "Shahbaz" };
var b = { name: "Poorna" };

var c = b;
c.name = "Nirmal";
console.log(a, b, c); // Shahbaz, Nirmal,Nirmal

// Note : When we give non primitive data type varible
//        to other variable it pass as reference.
