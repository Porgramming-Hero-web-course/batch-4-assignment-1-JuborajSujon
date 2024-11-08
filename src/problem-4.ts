{
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  // define Object property type
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  // define shape type union type

  type Shape = Circle | Rectangle;

  // define function
  function calculateShapeArea(shape: Shape): number | string {
    // define type guard
    if (shape.shape === "circle") {
      // check if radius is positive
      if (shape.radius <= 0) {
        return "Error: Radius must be a positive number.";
      }

      // calculate area number with 2 decimal
      const area = parseFloat(
        (Math.PI * shape.radius * shape.radius).toFixed(2)
      );
      return area;
    } else if (shape.shape === "rectangle") {
      // check if width and height are positive
      if (shape.width <= 0 || shape.height <= 0) {
        return "Error: Width and height must be positive numbers.";
      }

      // calculate area number
      const area = shape.width * shape.height;
      return area;
    }

    // return error message if shape type is invalid
    return "Error: Invalid shape type.";
  }

  // function call for Circle
  const circleArea = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });

  console.log(circleArea);

  // function call for Rectangle
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);

  //
}
