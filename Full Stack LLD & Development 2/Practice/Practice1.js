var a = { name: "shahbaaz" };
var b = { name: "Poorna" };

a = b;

a;
b;
a.name = "akshay";
a;
b;

// Non-Primitive Data  get passed as a reference.
// Primitive Data  get passed as a Value, primitive data inside the non primitive data also get passed as Value.
