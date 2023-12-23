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
console.log(compute(sum1));

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
console.log(getTotalBillAmount(bills));

// ......................................................
// Non - Mutating Function
const getTotalBillAmount1 = (items) => {
  bills1[0] = 200; // <---- This variable Mutating bills Function
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
};

const bills1 = [100, 200, 100, 400];
console.log(getTotalBillAmount([...bills1])); // <-- Here, we are creating the copy of the array so that it will not mutate in the Function.
console.log(getTotalBillAmount(bills1.slice())); // <-- Here, we are creating the copy of the array so that it will not mutate in the Function.

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
