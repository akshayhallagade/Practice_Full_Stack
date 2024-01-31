function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name + "!");
};

var person1 = new Person("john");
person1.sayHello();
