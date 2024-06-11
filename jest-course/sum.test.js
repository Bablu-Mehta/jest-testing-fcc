// const sum = require("./sum");

//syntax for creating a test.
// test('description', testFunction)

// test("adds 1 + 2 to equal to 3.", () => {
//   expect(sum(1, 2)).toBe(3);
// });

//toBe() is for numbers, strings and boolean values.

// test('two plus two is Four', ()=>{
//   expect(2 + 2).toBe(4);
//   })
// ==================================================================

//toEqual is for comparison like of objects and arrays.

// test("object Assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;

//   expect(data).toEqual({ one: 1, two: 2 });
// });

// =========================================================================

// toBeFalsy() to check for values that are null, false, undefined, NaN or 0;

// test("null is falsy", () => {
//   const n = null;
//   expect(n).toBeFalsy();
// });

// ==============================================================================

//toBeTruthy() to check for values are truthy or not like any value is true;

// test("one is Truthy", () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// });

// =================================================================================

// toThrow() its for error handling it checks for any error occurrence of the error. it is very essential for error handling in the testing.
// its use when you want to expect to throw an error by a particular function.
const myFunction = require('./sum')

test("throws on invalid input", () => {
  expect(() => {
    myFunction('numb');
  }).toThrow();
});
