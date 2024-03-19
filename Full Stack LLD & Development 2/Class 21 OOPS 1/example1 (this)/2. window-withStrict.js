"use strict";

console.log(this); //window
// if this is'nt in any function and he doesnt have it anything with it it means have window with it.
// ............................

function text() {
  console.log(this); // undefined
}
text();
// ............................

const obj = {
  name: "Akshay",
  id: 1,
  getThis: function () {
    console.log(this);
  },
};
obj.getThis(); // obj
// ............................

const getThisFn = obj.getThis;
getThisFn(); // undefined
// ............................
