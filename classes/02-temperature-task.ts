export class Temperature {
  constructor(public celsius: number) {

  }
 
  get fahrenheit(): typeof this.celsius {
    return this.celsius * 1.8 + 32;
  }
 
  set fahrenheit(value: typeof this.celsius) {
    this.celsius = (value - 32) / 1.8;
  }
 
  static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}

const temp0 = Temperature.fromFahrenheit(20);
temp0.celsius;

const temp1 = new Temperature(25);
temp1.fahrenheit = 33;