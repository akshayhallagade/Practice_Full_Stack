class Car1 {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.getDetailes = function () {
      return `Car Model is ${this.model} and color is ${this.color}`;
    };
  }
  static tax = "10%"; // <---Static Method
}
const BMWCar = new Car1("BMW", "red");

console.log(BMWCar.color);
console.log(BMWCar.model);
console.log(BMWCar.getDetailes());

// Static Methods
// -- It can be access without creating objects.
// ---It can be modify easily.
console.log(Car1.tax);
Car1.tax = "20%";
console.log(Car1.tax);
