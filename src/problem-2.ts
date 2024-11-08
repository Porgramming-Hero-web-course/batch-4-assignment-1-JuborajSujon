{
  //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  // function define
  function removeDuplicates(arr: number[]): number[] {
    const newArr: number[] = arr.filter(
      (item, index) => arr.indexOf(item) === index
    );
    return newArr;
  }

  // function call
  const result: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

  console.log(result);
  //
}
