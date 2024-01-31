// Call Function..................

var obj = {
  name: "Praveen",
  age: 19,
};
var obj1 = {
  name: "Vinetha",
  age: 20,
};

function text(a, b) {
  console.log(a, b, this);
}

text.call(obj, 4, 5);

// Apply Function..................

var obj2 = {
  name: "Praveen",
  age: 19,
};
var obj3 = {
  name: "Vinetha",
  age: 20,
};

function text(a, b) {
  console.log(a, b, this);
}

text.apply(obj2, [6, 2]);

// Bind Function..................
//  - Bind binds the method of a object to the other so to use it there.
//    So we dont have to write the similar methods multiple times.

var obj4 = {
  name: "Praveen",
  age: 19,
  mytest: function () {
    console.log(this.name + " " + this.age);
  },
};

var obj5 = {
  name: "Vinetha",
  age: 20,
};

let boundtest = obj4.mytest.bind(obj5);
boundtest();
