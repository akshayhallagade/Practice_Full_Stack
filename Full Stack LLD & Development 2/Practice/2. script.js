// 1. References
// --> manipulators buttons
// --> reset button
// --> input field
// --> Output Location

const incrementRef = document.querySelector(".incrementer");
const decrementRef = document.querySelector(".decrementer");
const resetRef = document.querySelector(".reset");
const inputRef = document.querySelector("input");
const outputRef = document.querySelector("h1 a");

let counter = 0;
let val = 0;
function addEventListeners() {
  inputRef.addEventListener("change", function (event) {
    val = Number(event.target.value);
  });
  incrementRef.addEventListener("click", function (event) {
    console.log(val);
    increment(val);
  });
  decrementRef.addEventListener("click", function (event) {
    decrement(val);
  });
  resetRef.addEventListener("click", function (event) {
    reset();
  });
}
addEventListeners();

function increment(val) {
  counter = counter + val;
  outputRef.innerText = counter;
}

function decrement(val) {
  counter = counter - val;
  outputRef.innerText = counter;
}

function reset() {
  counter = 0;
  outputRef.innerText = counter;
}
