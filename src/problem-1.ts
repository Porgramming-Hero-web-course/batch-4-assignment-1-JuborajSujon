{
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  // function define
  function sumArray(arr: number[]): number {
    const result = arr.reduce((sum, curr) => sum + curr, 0);
    return result;
  }

  // function call
  const totalNumber: number = sumArray([1, 2, 3, 4, 5]);

  console.log(totalNumber);
  //
}
