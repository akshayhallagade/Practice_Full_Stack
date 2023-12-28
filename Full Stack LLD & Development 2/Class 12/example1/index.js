// // Event 1 : Printed using calling the function in html button tag.
// function myFunction() {
//   console.log("Hi");
// }

// // Event 2 : using click.
// const ref = document.querySelector("button");
// ref.addEventListener("click", function (e) {
//   console.log("Printed using addEventListener.");
// });

// // Event 3 : using double click.
// const ref2 = document.querySelector("button");
// ref2.addEventListener("dblclick", function (e) {
//   console.log("Printed using dblclick addEventListener.");
// });

// Write values written in username and password field.
const ref3 = document.querySelector("button");
ref3.addEventListener("click", function (e) {
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  console.log(username.value, password.value);
});
