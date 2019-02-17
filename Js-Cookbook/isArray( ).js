// Array.isArray();
// determines whether the passed value is an Array.

console.log(Array.isArray(['ram',1])); // true

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
