// "this" keywword : This keyword is used to show the reference of the object.
// ...........................................................................
// "use strict";

// console.log(this);

//....................
// function tp() {
//   console.log(this);
// }
// tp();

//....................
const obj = {
  key1: "Akshay",
  key2: function () {
    console.log(this);
  },
};

obj.key2();
//....................

const obj2 = obj.key2;
obj2();
