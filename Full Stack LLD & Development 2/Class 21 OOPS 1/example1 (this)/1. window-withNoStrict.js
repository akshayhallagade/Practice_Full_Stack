// console.log(this); //window

// // ............................
// function text() {
//   console.log(this); // window
// }
// text();

// // ............................

const obj = {
  name: "Akshay",
  id: 1,
  getThis: function () {
    console.log(this);
  },
};
obj.getThis(); // obj
// // ............................

// const getThisFn = obj.getThis;
// getThisFn(); // Window

// // ............................
