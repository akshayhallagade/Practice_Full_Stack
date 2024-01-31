"use strict";

console.log(this); //global
// ............................

function text() {
  console.log(this);
}
text(); //undefined
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
