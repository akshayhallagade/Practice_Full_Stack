//..............First Class Function ....................
// Property 1 : Function Can pass to a variable.
// Property 2 : Can pass function to the argument to a function.
// Property 3 : Return Function from Another function
const sub = function (a, b) {
  return a - b;
};

const compute = function (sub) {
  return sub(3, 5);
};
console.log(compute(sub));

// ...............Pure Function...........................
// -> Function shoudnt need to get to impact from outside variable.
let water = 1;
function generatePaneer(milk) {
  return milk - water;
}
console.log(generatePaneer(5)); //  Impure Function

// ...............Immutability............................
//--> mutation  : Changing any array using function.

function mutation(arr1) {
  arr1[2] = 6;
  return arr1;
}
const arr1 = [0, 1, 2, 3, 4, 5];
console.log(mutation(arr1));

//................Higher Order Function...................
//--> This are functions, which accepts functions as arguments or return function as there result.
const add = function (a, b) {
  return a + b;
};

// This a the Higher order Function
const computeAddition = function (add) {
  return add;
};
console.log(computeAddition(add));
