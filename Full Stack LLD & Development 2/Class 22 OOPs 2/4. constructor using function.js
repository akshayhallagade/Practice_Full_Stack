// // Constructor function
// function Car1(model, color) {
//   this.model = model;
//   this.color = color;
//   this.getColor = function () {
//     return this.color;
//   };
// }

// // Creates Method for Car1 Constructor.
// Car1.prototype.getModel = function () {
//   return `Model is ${this.model}`;
// };

// .................................
// Inheritance
// Parent Class
function Car1(model, color) {
  this.model = model;
  this.color = color;
  this.getColor = function () {
    return this.color;
  };
}

// Child Class
function superCar(price, features, model, color) {
  Car1.call(this, model, color); // <-- copies variables on Car1.
  this.price = price;
  this.features = features;
}

superCar.prototype = Object.create(Car.prototype);

superCar.prototype.getOnRoadPrice = function () {
  return this.price + 100000;
};

const BMWCar = new superCar(["f1"], 100000, "BMW", "red");
