// Class Way of creating constructor
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.carDetailes = function () {
      return `Car model is ${this.model} and color is ${this.color}`;
    };
  }
  static tax = 10; // Static
}

const KoienigseggCar = new Car("Agera r", "grey");
console.log(KoienigseggCar);

// function way of creating constructor
function Computer(ram, dataStorge) {
  this.ram = ram;
  this.dataStorge = dataStorge;
  this.specs = function () {
    return `Ram of the computer is ${this.ram} and it is having ${this.dataStorge} storage type`;
  };
}

const RIG = new Computer("16GB", "SATA");
RIG;

// Returning static
console.log(Car.tax);
