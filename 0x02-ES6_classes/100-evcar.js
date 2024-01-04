import Car from "./10-car.js";

// Symbol for private method
const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Calling the Car constructor using super
    super(brand, motor, color);
    this._range = range;

    // Private method to clone the Car object
    this[cloneSymbol] = () => {
      // Create a new Car instance with current properties
      const clonedCar = new Car(this._brand, this._motor, this._color);
      return clonedCar;
    };
  }

  // Public method to clone the Car object
  cloneCar() {
    return this[cloneSymbol]();
  }
}
