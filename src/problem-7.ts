{
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  // define a class Car with properties
  class Car {
    // define a constructor
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    // define a method
    getCarAge() {
      const currentYear: number = new Date().getFullYear();
      const difference: number = currentYear - this.year;
      console.log(difference, "(assuming current year is", currentYear, ")");
    }
  }

  // make a car object from the Car class
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
  //
}
