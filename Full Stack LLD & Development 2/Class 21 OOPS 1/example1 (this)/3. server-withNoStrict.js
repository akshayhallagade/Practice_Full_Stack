console.log(this); //global
// ............................

function text() {
  console.log(this);
}
text(); //global
// ............................

const obj = {
  name: "Akshay",
  id: 1,
  getThis: function () {
    return this;
  },
};
console.log(obj.getThis()); // obj
// ............................

const getThisFn = obj.getThis;
console.log(getThisFn()); // global
// ............................
