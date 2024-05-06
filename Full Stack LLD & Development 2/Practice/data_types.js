// String
let var1 = "Akshay";
// Number
let var2 = 2;
// Boolean
let var3 = false;
// undefined
let var4;

//Array
let array = [
  1,
  "Akshay",
  true,
  undefined,
  [1, 2],
  { key1: 1, key2: 2 },
  (x, y) => {
    return x + y;
  },
];

//Object
let object = {
  key1: "AKshay",
  key2: 2,
  key3: false,
  key4: {
    key1: "three",
    key2: "four",
  },
  key5: [1, 2, 3, 4],
  key6: (a, b) => {
    return a + b;
  },
};

//Function
const functions = (a, b) => {
  return a - b;
};

console.log(functions(3, 5));
