{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  // create function
  function validateKeys<T extends { [key: string]: unknown }>(
    obj: T,
    keys: (keyof T)[]
  ): boolean {
    return keys.every((key) => key in obj);
  }

  // create an object
  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  // call the function with console log
  console.log(validateKeys(person, ["name", "age"]));

  //
}
