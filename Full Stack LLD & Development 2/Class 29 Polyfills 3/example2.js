// .................Object.......................

const obj = {
  firstName: "Manish",
  lastName: "jha",
  city: "Banglore",
  pincode: 442001,
};

// // 1. String(firstName)
// console.log(obj.firstName);
// // 2. Obj(LastName and city)
// const obj1 = {
//   lastName: obj.lastName,
//   city: obj.city,
// };
// console.log(obj1);

// .............
// // Tips : Pick and Choose
// const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

// ..............
// // Tips : Creating of obj easy way
// const { firstName, city, ...rest } = obj;
// console.log(firstName); // shows firstname
// console.log(rest); // Apart from firstname written name shows all

// .................Array.......................

// Tips 1: Rest Operator
const arr = [1, 2, 3, 4, 5, 6];
const [a, b, ...restArr] = [1, 2, 3, 4, 5];
console.log(a, b, restArr); // restArr will print rest elements inside array.

// Tips 2 : Clone
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [...arr2]; //Spread Operator

// .................Function.......................

// Tips 1: Rest Operator
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1)); // NaN
console.log(sum(1, 2)); //NaN

// Here we have to improve the second and third sum call answer
// we can use default the parameters for the functions.

function sum1(a, b = 0, c = 0) {
  return a + b + c;
}
console.log(sum1(1, 2, 3)); // 6
console.log(sum1(1)); // 1
console.log(sum1(1, 2)); // 3
