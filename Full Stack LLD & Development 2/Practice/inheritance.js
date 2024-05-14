// Parent Class
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.getDetailes = function () {
      return `Model of car is ${this.model} and color is ${this.color}`;
    };
  }
  getDetailes = function () {
    return;
  };
}

// Child Classs
class HyperCar extends Car {
  constructor(model, color, speed, price) {
    super(model, color);
    this.speed = speed;
    this.price = price;
  }
}

const MaclarenCar = new HyperCar("Maclaren MC 24", "red", 26000, 400);
console.log(MaclarenCar.getDetailes());
