// // Que 1: Implement the counter function that return +1 value.

// let num = 0;
// function counter() {
//   return num + 1;
// }
// counter();
// counter();
// counter();

// ................ Closure......................
// Que 2.

function createCounter() {
  let num = 0;
  return function () {
    num = num + 1;
    console.log(num);
  };
}

const atulCounter = createCounter();
atulCounter(); // 1
atulCounter(); // 2
atulCounter(); // 3

const vatanCounter = createCounter();
vatanCounter(); // 1
vatanCounter(); // 2
vatanCounter(); // 3
vatanCounter(); // 4
vatanCounter(); // 5
