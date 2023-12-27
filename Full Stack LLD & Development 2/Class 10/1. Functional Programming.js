// ....................................................................................
// ........................First Class Function........................................
// ....................................................................................
// Property 1 : Can pass function to a variable.
const sum = function (a, b) {
  return a + b;
};
console.log(sum); // This is calling function reference
console.log(sum(2, 3)); // This returning the function.

// ..............................................
// Property 2 : Pass function as argument.
const sum1 = function (a, b) {
  return a + b;
};
const compute = function (cb) {
  return cb(10, 20);
};
compute(sum1);

// .............................................
// Property 3 : Return function from another Function.
const multiply = function (a, b, c) {
  return a * b * c;
};
const compute1 = function (cb) {
  return cb;
};
const multiplyFn = compute1(multiply);
console.log(multiplyFn(2, 3, 4));

// ..................................................................................
// ........................Pure Function.............................................
// ..................................................................................
// --> Pure Function means, other variable from outside, not impacting on the function anyhow.

// 1. Impure Function ..................................
const generatePaneer = function (milk) {
  return milk / 4;
};

console.log(generatePaneer(10));
console.log(generatePaneer(20));

// 2. Impure Function ..................................
let water = 1;
const generateCurd = function (milk) {
  return (milk - water) / 3;
};

console.log(generateCurd(10));
water = 5;
console.log(generateCurd(10));
// ...................................................................................
// .............................Immutibility .........................................
// ...................................................................................
// - Immutibility means, a function shouldn't need to change the original array elements.

// Mutating Function
const getTotalBillAmount = (items) => {
  bills[0] = 200; // <---- This variable Mutating bills Function
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
};

const bills = [100, 200, 100, 400];
console.log(bills); // <---- Can see the chnage in orginal array and updated array.
console.log(getTotalBillAmount(bills));

// ......................................................
// Non - Mutating Function
// Note : to avoid not chnaging the original array due to a function. We always should pass the copy of array to the function.
const getTotalBillAmount1 = (items) => {
  bills1[0] = 200; // <---- This variable changing the array elements;
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
};

const bills1 = [100, 200, 100, 400];
console.log(bills);
console.log(getTotalBillAmount([...bills1])); // <-- creating copy of bills and giving to function.
console.log(getTotalBillAmount(bills1.slice())); // <-- creating copy of bills and giving to function.

// ...................................................................................
// ........................Higher Order Function......................................
// ...................................................................................
// --> Every Function that takes input as a Function or Return Function Called Higher Order function.
function total(x) {
  const totalOfY = function (y) {
    return x + y;
  };
  return totalOfY; // returning a function
}

const r1 = total(2);
const r2 = r1(3);
console.log(r2);
console.log(total(2)(6));

// ...................................................................................
// ...................................................................................
// ...................................................................................
